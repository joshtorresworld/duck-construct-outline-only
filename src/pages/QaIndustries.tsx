import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, X, ChevronDown, ChevronRight, RefreshCw, ArrowLeft } from "lucide-react";
import {
  runAllIndustryChecks,
  type IndustryCheckReport,
} from "@/lib/industry-checks";

const QaIndustries = () => {
  const [nonce, setNonce] = useState(0);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const reports = useMemo<IndustryCheckReport[]>(
    () => runAllIndustryChecks(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nonce]
  );

  const totals = useMemo(() => {
    const pass = reports.reduce((s, r) => s + r.passCount, 0);
    const fail = reports.reduce((s, r) => s + r.failCount, 0);
    return { pass, fail, total: pass + fail };
  }, [reports]);

  const allGreen = totals.fail === 0;

  return (
    <div className="min-h-screen bg-surface-sunken">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-40">
        <div className="container h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">
              QA · Industries
            </span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="rounded-sm text-xs"
            onClick={() => setNonce((n) => n + 1)}
          >
            <RefreshCw className="w-3.5 h-3.5 mr-1.5" /> Re-run checks
          </Button>
        </div>
      </header>

      <div className="container py-8 max-w-5xl">
        {/* Summary */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-foreground mb-1">
            A/B test status — 5-industry coverage
          </h1>
          <p className="text-sm text-muted-foreground mb-4">
            Live verification that Real Estate, Dental, Roofing, Auto Repair, and Salon &
            Spa each have complete dashboard, setup, and lead-source copy. Same
            assertions as <code className="text-xs">industry-config.test.ts</code>.
          </p>
          <Card
            className={`duck-card ${
              allGreen ? "border-success/30 bg-success/5" : "border-destructive/30 bg-destructive/5"
            }`}
          >
            <CardContent className="p-5 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-3">
                {allGreen ? (
                  <Check className="w-5 h-5 text-success" strokeWidth={2} />
                ) : (
                  <X className="w-5 h-5 text-destructive" strokeWidth={2} />
                )}
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {allGreen
                      ? "All industries pass"
                      : `${totals.fail} check${totals.fail === 1 ? "" : "s"} failing`}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {totals.pass} of {totals.total} assertions green across {reports.length}{" "}
                    industries
                  </p>
                </div>
              </div>
              <Badge
                variant="outline"
                className={`rounded-sm text-xs ${
                  allGreen ? "border-success/40 text-success" : "border-destructive/40 text-destructive"
                }`}
              >
                {allGreen ? "PASS" : "FAIL"}
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Per-industry cards */}
        <div className="space-y-3">
          {reports.map((r) => {
            const isOpen = expanded[r.key] ?? !r.allPassed; // auto-expand failures
            return (
              <Card key={r.key} className="duck-card">
                <CardContent className="p-0">
                  <button
                    onClick={() =>
                      setExpanded((e) => ({ ...e, [r.key]: !isOpen }))
                    }
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-surface-sunken/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      {r.allPassed ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-success/15">
                          <Check className="w-3.5 h-3.5 text-success" strokeWidth={2.5} />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-destructive/15">
                          <X className="w-3.5 h-3.5 text-destructive" strokeWidth={2.5} />
                        </span>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-foreground">{r.label}</p>
                        <p className="text-xs text-muted-foreground font-mono">{r.key}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        variant="outline"
                        className={`rounded-sm text-xs ${
                          r.allPassed
                            ? "border-success/40 text-success"
                            : "border-destructive/40 text-destructive"
                        }`}
                      >
                        {r.passCount}/{r.results.length}
                      </Badge>
                      {isOpen ? (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="border-t border-border">
                      <ul className="divide-y divide-border">
                        {r.results.map((c) => (
                          <li
                            key={c.id}
                            className="px-4 py-2.5 flex items-start gap-3 text-sm"
                          >
                            {c.pass ? (
                              <Check
                                className="w-4 h-4 text-success shrink-0 mt-0.5"
                                strokeWidth={2}
                              />
                            ) : (
                              <X
                                className="w-4 h-4 text-destructive shrink-0 mt-0.5"
                                strokeWidth={2}
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <p
                                className={
                                  c.pass ? "text-foreground" : "text-destructive font-medium"
                                }
                              >
                                {c.label}
                              </p>
                              {c.detail && (
                                <p className="text-xs text-muted-foreground truncate">
                                  {c.detail}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Tip: this page reads <code>INDUSTRY_CONFIG</code> directly, so editing{" "}
          <code>src/lib/industry-config.ts</code> and refreshing instantly reflects
          here. The same checks run in CI via Vitest.
        </p>
      </div>
    </div>
  );
};

export default QaIndustries;
