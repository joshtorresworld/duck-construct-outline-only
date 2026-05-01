import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Home,
  Smile,
  Hammer,
  Wrench,
  Scissors,
  Phone,
  Mail,
  Copy,
  Check,
  Clock,
  DollarSign,
  Zap,
  ArrowRight,
  Target,
  CalendarDays,
  TrendingUp,
  Trophy,
  ListChecks,
  Megaphone,
  Handshake,
  BarChart3,
} from "lucide-react";

type Industry = {
  id: string;
  name: string;
  icon: typeof Home;
  tagline: string;
  plainEnglish: string;
  whatWeDo: string[];
  thirtyDayResult: string;
  ticketSize: string;
  speedToCash: string;
  coldCall: string;
  voicemail: string;
  email1Subject: string;
  email1Body: string;
  email2Subject: string;
  email2Body: string;
  objection: { q: string; a: string }[];
};

const INDUSTRIES: Industry[] = [
  {
    id: "real-estate",
    name: "Real Estate & Property Management",
    icon: Home,
    tagline: "The first agent to call wins the listing. We make sure that's you.",
    plainEnglish:
      "When someone fills out a form on Zillow or your website asking about a house, 78% of them go with whichever agent calls them back first. Most agents take 4+ hours. We get you on the phone with that lead in under 60 seconds — automatically — so you stop losing deals to faster competitors.",
    whatWeDo: [
      "Instantly call, text, and email every new lead within 60 seconds — 24/7",
      "Book showings directly into your calendar without back-and-forth",
      "Follow up automatically for 90 days so warm leads never go cold",
      "Send weekly reports showing which leads turned into appointments",
    ],
    thirtyDayResult: "2–4 extra closings per agent per month",
    ticketSize: "$3K–$8K/month",
    speedToCash: "Day 1 — first lead converted within hours of go-live",
    coldCall: `Hi [Name], this is [Your Name] with Row of Ducks AI — quick 30-second question, then I'll let you go.

How fast does your team typically call back a Zillow or website lead? ... Got it.

The reason I ask: 78% of buyers hire the first agent who responds. Most teams take 4+ hours. We have a system that calls, texts, and emails every new lead in under 60 seconds — automatically — and books the showing for you.

Our real estate clients are closing 2–4 extra deals per agent per month within 30 days. Worth a 15-minute look at how it would work for your team?`,
    voicemail: `Hey [Name], [Your Name] with Row of Ducks AI. I work with real estate teams who are tired of losing leads to faster agents. We get you on the phone with new leads in under 60 seconds — automatically. Quick 15-minute demo? Call me back at [number] or I'll try you tomorrow. Thanks.`,
    email1Subject: "78% of your leads are going to whoever calls first",
    email1Body: `Hi [Name],

Quick stat: 78% of homebuyers hire whichever agent calls them back first. Most teams take 4+ hours.

We help real estate teams call, text, and email every new Zillow/website lead in under 60 seconds — automatically. The showing gets booked before your competition even sees the lead.

Our clients average 2–4 extra closings per agent per month within the first 30 days.

Worth 15 minutes to see how it would work for [Their Brokerage]?

[Your Name]
Row of Ducks AI
rowofducks.ai`,
    email2Subject: "Re: those leads sitting in your inbox",
    email2Body: `[Name] —

Following up. Every hour a lead sits unanswered, the chance of converting them drops about 10x.

If you have 15 minutes this week, I'll show you exactly how we'd plug this into your current setup (Follow Up Boss, kvCORE, Sierra — whatever you use).

No commitment. Just want you to see what's possible.

[Your Name]`,
    objection: [
      { q: "We already use [CRM]", a: "Perfect — we don't replace it, we make it actually work. We sit on top of Follow Up Boss/kvCORE/Sierra and do the speed-to-lead work your CRM doesn't do automatically." },
      { q: "Sounds expensive", a: "One extra closing pays for 6+ months. Our clients usually see ROI in week 2." },
    ],
  },
  {
    id: "dental",
    name: "Dental & Optometry Practices",
    icon: Smile,
    tagline: "Fill the chairs you already have. Stop losing $400 every time someone no-shows.",
    plainEnglish:
      "Every empty chair in your practice costs $150–$400. Most practices lose 12–18% of appointments to no-shows and never call back patients who are overdue for cleanings. We automatically remind patients, fill cancellations, and bring back patients who haven't been in for a year — so your schedule stays full without your front desk doing more work.",
    whatWeDo: [
      "Smart appointment reminders that cut no-shows from 15% down to 3%",
      "Automatically fill last-minute cancellations from a waitlist",
      "Call and text patients overdue for cleanings or exams",
      "Bring back patients who haven't been in for 12+ months",
    ],
    thirtyDayResult: "$15K–$40K in recovered production per month",
    ticketSize: "$3K–$8K/month",
    speedToCash: "Week 1 — recall campaign books appointments immediately",
    coldCall: `Hi [Name], this is [Your Name] with Row of Ducks AI. I work specifically with dental practices — got 30 seconds?

Quick question: roughly what percentage of your appointments no-show or cancel last-minute? ... Yeah, that's normal — industry average is 12–18%. At $200–$400 a chair, that's real money.

We have a system that automatically reminds patients the right way, fills cancellations from a waitlist, and reactivates patients who haven't been in for a year. Our practices are recovering $15K–$40K a month in production within the first 30 days.

Could I show you how it works in 15 minutes this week?`,
    voicemail: `Hi [Name], [Your Name] from Row of Ducks AI. I help dental practices fill empty chairs and bring back inactive patients — usually adds $15K–$40K a month in production. Quick 15-minute demo? [Phone number]. Thanks.`,
    email1Subject: "How many empty chairs did you have last week?",
    email1Body: `Hi [Name],

Most practices lose 12–18% of appointments to no-shows. At $200–$400 per chair, that's $15K–$40K walking out the door every month.

We help practices like [Practice Name]:
• Cut no-shows from 15% to 3%
• Auto-fill cancellations from a waitlist
• Reactivate patients who haven't been in for 12+ months

It works alongside your current software (Dentrix, Eaglesoft, OpenDental — doesn't matter) and our practices typically see ROI in the first 30 days.

Worth 15 minutes to see how it would work?

[Your Name]
Row of Ducks AI`,
    email2Subject: "Quick math on no-shows",
    email2Body: `[Name] —

If your practice runs 80 appointments a week at an average $250 production:
• 15% no-show rate = 12 empty chairs/week = $3,000/week = $12,000/month gone

We get that down to 3%. That's $9,600/month back in your pocket — and that's BEFORE we run recall and reactivation campaigns.

15 minutes this week?

[Your Name]`,
    objection: [
      { q: "Our front desk handles reminders", a: "Of course — and they're great. We're not replacing them. We're automating the boring stuff so they can focus on patients in the office. The reminders we send are smarter — personalized to the procedure and patient history." },
      { q: "We already have software that does this", a: "Most software sends a reminder. We do reminders + waitlist filling + recall + reactivation, all working together. Happy to show you the gap." },
    ],
  },
  {
    id: "roofing",
    name: "Roofing & Storm Restoration",
    icon: Hammer,
    tagline: "When the storm hits, the first roofer to respond gets the job. Be that roofer.",
    plainEnglish:
      "After a hailstorm or wind event, homeowners are calling 5+ roofers. Whoever shows up first wins. We answer every call and web inquiry within 60 seconds (even at 2am), book the inspection, and follow up with insurance paperwork — so your sales team is closing jobs while your competitors are still leaving voicemails.",
    whatWeDo: [
      "24/7 instant response to every storm lead — call, text, web form",
      "Book inspections directly into your sales reps' calendars",
      "Follow up with homeowners through the insurance claim process",
      "Re-engage old leads when a new storm hits their zip code",
    ],
    thirtyDayResult: "30–50% more booked inspections per week",
    ticketSize: "$3K–$10K/month",
    speedToCash: "Day 1 — next storm = booked inspections within minutes",
    coldCall: `Hey [Name], [Your Name] with Row of Ducks AI — got a quick one for you.

When the next big storm hits [City], how fast does your team get back to a homeowner who fills out your website form? ... Right. And the homeowner is calling 4 other roofers at the same time, right?

We have a system that answers every lead in under 60 seconds — 24/7 — books the inspection on your rep's calendar, and walks the homeowner through the insurance claim. Our roofing clients are booking 30–50% more inspections within 30 days.

Worth 15 minutes before the next storm season?`,
    voicemail: `[Name], [Your Name] with Row of Ducks AI. I help roofing companies win storm leads by responding in under 60 seconds — day or night. Booking 30–50% more inspections for our clients. Call me back at [number] before the next storm. Thanks.`,
    email1Subject: "Who's answering your phone at 2am after the next storm?",
    email1Body: `Hi [Name],

Storm hits. Homeowner gets on Google. Calls 5 roofers. Whoever responds first gets the inspection.

Most roofing companies take hours — sometimes a full day — to call back. We respond in under 60 seconds, 24/7, and book the inspection straight onto your sales rep's calendar.

Our roofing clients are booking 30–50% more inspections within the first 30 days — and that's before the next big storm.

15-minute demo this week?

[Your Name]
Row of Ducks AI`,
    email2Subject: "Storm season is coming",
    email2Body: `[Name] —

Real talk: the roofers winning right now aren't the best at roofing. They're the fastest at responding.

We can have you set up before the next storm event in your area. 60-second response time, automated insurance follow-up, full pipeline visibility.

Want me to send a 2-minute video showing how it works?

[Your Name]`,
    objection: [
      { q: "We have an answering service", a: "Answering services take messages. We book the inspection. Big difference when 4 other roofers are calling the same homeowner." },
      { q: "Slow season right now", a: "Perfect time to set up. When the next storm hits, you're the only one in town with a 60-second response time." },
    ],
  },
  {
    id: "auto-repair",
    name: "Auto Repair & Detailing",
    icon: Wrench,
    tagline: "Keep your bays full and your customers coming back — without hiring more front desk staff.",
    plainEnglish:
      "Most auto shops have empty bays in the morning and a packed lot in the afternoon. We even out your schedule by automatically booking appointments online, reminding customers the day before, and texting past customers when they're due for an oil change or service — so your bays stay full all week.",
    whatWeDo: [
      "Online booking that fills your slow morning bays",
      "Automated service reminders based on each car's history",
      "Cut no-shows with smart text reminders",
      "Bring back customers who haven't been in for 6+ months",
    ],
    thirtyDayResult: "20–35% more bay utilization, $8K–$20K extra/month",
    ticketSize: "$2K–$5K/month",
    speedToCash: "Week 1 — first reminder batch books appointments same day",
    coldCall: `Hey [Name], [Your Name] with Row of Ducks AI. Real quick — your shop probably has empty bays in the morning and a full lot by 3pm, right? Yeah, that's everybody.

We help auto shops fill those slow mornings automatically — online booking, smart reminders for oil changes and services, and we text customers who haven't been in for 6 months. Most of our shops add $8K–$20K a month in the first 30 days.

Got 15 minutes this week to see how it works?`,
    voicemail: `[Name], [Your Name] with Row of Ducks AI. I help auto repair shops fill empty bays and bring back old customers — usually $8K–$20K a month extra. Quick demo? [Number]. Thanks.`,
    email1Subject: "Empty bays in the morning, packed lot at 3pm?",
    email1Body: `Hi [Name],

Most auto shops have the same problem: empty bays at 9am, slammed by 3pm.

We fix it three ways:
• Online booking that funnels customers into your slow times
• Auto-reminders when each car is due for service (based on mileage + history)
• Text campaigns that bring back customers who haven't been in for 6+ months

Shops we work with add $8K–$20K/month in the first 30 days.

Works with your current software. 15-minute demo?

[Your Name]
Row of Ducks AI`,
    email2Subject: "Your customers' next oil change",
    email2Body: `[Name] —

Right now, you have hundreds of customers whose cars are due for service — and they're going somewhere else because nobody reminded them.

We automatically text them the right reminder at the right time. One client recovered 40% of "lost" customers in 60 days.

Worth 15 minutes?

[Your Name]`,
    objection: [
      { q: "We're already busy", a: "Then let's focus on the high-margin stuff — recall and reactivation. We'll fill your bays with profitable work, not just any work." },
      { q: "My customers won't book online", a: "65% of repair customers prefer text/online booking now. We'll prove it with your data in 30 days." },
    ],
  },
  {
    id: "salon-spa",
    name: "Salon, Spa & Med Spa",
    icon: Scissors,
    tagline: "Turn one-time visitors into regulars. Stop losing $200 every time a chair sits empty.",
    plainEnglish:
      "Beauty businesses live and die by repeat visits. We automatically rebook clients before they leave, fill last-minute cancellations from a waitlist, and bring back clients who haven't been in for 60+ days — so your stylists' books stay full and your client list keeps growing instead of leaking.",
    whatWeDo: [
      "Auto-rebook clients into their next appointment before they walk out",
      "Fill cancellations instantly from a waitlist",
      "Win back clients who haven't been in for 60+ days",
      "Birthday, holiday, and 'we miss you' campaigns running on autopilot",
    ],
    thirtyDayResult: "25–40% increase in rebooking rate, $5K–$15K extra/month",
    ticketSize: "$2K–$5K/month",
    speedToCash: "Week 1 — rebook automation kicks in immediately",
    coldCall: `Hi [Name], this is [Your Name] with Row of Ducks AI. Quick question — what percentage of your clients leave without rebooking their next appointment? ... Yeah, industry average is 60%. That's a lot of revenue walking out the door.

We automatically rebook clients before they leave, fill cancellations from a waitlist, and bring back clients who haven't been in for 60+ days. Our salons and spas are adding $5K–$15K a month in the first 30 days.

Got 15 minutes to see it?`,
    voicemail: `[Name], [Your Name] with Row of Ducks AI. I help salons and spas keep clients coming back automatically — usually adds $5K–$15K a month. Quick demo? [Number]. Thanks!`,
    email1Subject: "60% of your clients walked out without rebooking",
    email1Body: `Hi [Name],

Industry average: only 40% of salon/spa clients rebook before leaving. That means 60% are gone — and most never come back.

We fix the leak:
• Auto-rebook every client before they walk out
• Fill cancellations from a waitlist (no more empty chairs)
• Win back clients who haven't been in for 60+ days
• Birthday, holiday, and "we miss you" campaigns running 24/7

Our clients add $5K–$15K/month within the first 30 days.

15 minutes to see how it would work for [Salon Name]?

[Your Name]
Row of Ducks AI`,
    email2Subject: "Your client list is leaking money",
    email2Body: `[Name] —

Quick math: if you serve 100 clients a week at $80 average and 30% don't come back within 90 days, that's $7,200/month in lost revenue.

We bring most of them back — automatically. No more "we should call old clients" sitting on your to-do list forever.

15 minutes this week?

[Your Name]`,
    objection: [
      { q: "We use Vagaro/Mindbody/Boulevard", a: "Great — we work alongside it. Your booking software is good at booking. We're good at making sure the booking actually happens and clients come back." },
      { q: "My stylists handle rebooking", a: "And they should — for the clients in front of them. We handle the 60% who slip out the door and the ones who haven't been in for 60+ days." },
    ],
  },
];

const QuickWins = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const ScriptBlock = ({ id, label, text, icon: Icon }: { id: string; label: string; text: string; icon: typeof Phone }) => (
    <div className="rounded-md border border-border bg-muted/30 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="h-7 text-xs"
          onClick={() => copyText(id, text)}
        >
          {copied === id ? (
            <><Check className="w-3 h-3" /> Copied</>
          ) : (
            <><Copy className="w-3 h-3" /> Copy</>
          )}
        </Button>
      </div>
      <pre className="whitespace-pre-wrap text-sm text-foreground font-sans leading-relaxed">{text}</pre>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 border-b border-border">
        <div className="container max-w-5xl">
          <Badge className="mb-6 bg-primary/15 text-foreground hover:bg-primary/15 border-primary/20">
            <Zap className="w-3 h-3 mr-1.5" strokeWidth={2} />
            Fastest Path to Revenue
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            5 Industries.<br />
            <span className="text-muted-foreground">Revenue in 30 Days.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Out of our 37 industry blueprints, these 5 deliver measurable revenue inside the first month.
            Plain-English explanations of what we do, plus ready-to-use call scripts and email templates
            your sales team can start using today.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <a
                  key={ind.id}
                  href={`#${ind.id}`}
                  className="duck-card rounded-md border border-border bg-card p-4 hover:border-primary/40 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary mb-2" strokeWidth={1.5} />
                  <div className="text-xs font-semibold leading-tight">{ind.name}</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Actually Do — plain English */}
      <section className="py-16 border-b border-border bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-sm font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-4">
            In Plain English
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            We help you stop losing money to slow follow-up, empty schedules, and forgotten customers.
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every business loses revenue in the same three places: leads that don't get called fast enough,
            customers who don't come back, and schedules that aren't full. We fix all three — automatically —
            using AI that works 24/7 alongside the tools you already have. No new software to learn. No staff to replace.
            Just more revenue from the customers and leads you already have.
          </p>
        </div>
      </section>

      {/* Industry Deep-Dives */}
      {INDUSTRIES.map((ind, idx) => {
        const Icon = ind.icon;
        return (
          <section
            key={ind.id}
            id={ind.id}
            className={`py-20 border-b border-border ${idx % 2 === 1 ? "bg-muted/30" : ""}`}
          >
            <div className="container max-w-5xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-md bg-primary/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                </div>
                <Badge variant="outline" className="border-border">
                  Quick Win #{idx + 1}
                </Badge>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-balance">
                {ind.name}
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed text-balance">
                {ind.tagline}
              </p>

              {/* Stats Strip */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                <Card className="duck-card border-border">
                  <CardContent className="p-5">
                    <DollarSign className="w-4 h-4 text-primary mb-2" strokeWidth={1.5} />
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">30-Day Result</div>
                    <div className="font-semibold tabular-nums">{ind.thirtyDayResult}</div>
                  </CardContent>
                </Card>
                <Card className="duck-card border-border">
                  <CardContent className="p-5">
                    <Clock className="w-4 h-4 text-primary mb-2" strokeWidth={1.5} />
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Speed to Cash</div>
                    <div className="font-semibold">{ind.speedToCash}</div>
                  </CardContent>
                </Card>
                <Card className="duck-card border-border">
                  <CardContent className="p-5">
                    <Zap className="w-4 h-4 text-primary mb-2" strokeWidth={1.5} />
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Investment</div>
                    <div className="font-semibold">{ind.ticketSize}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Plain English explanation */}
              <Card className="duck-card border-border mb-8">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    What This Means For Them
                  </div>
                  <p className="text-base md:text-lg leading-relaxed">{ind.plainEnglish}</p>
                </CardContent>
              </Card>

              {/* What We Do */}
              <Card className="duck-card border-border mb-10">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    What We Actually Do
                  </div>
                  <ul className="space-y-3">
                    {ind.whatWeDo.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-sm bg-primary/15 flex items-center justify-center mt-0.5 shrink-0">
                          <Check className="w-3 h-3 text-foreground" strokeWidth={2.5} />
                        </div>
                        <span className="text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Sales Toolkit */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">Sales Toolkit</h3>
                <p className="text-muted-foreground mb-6">
                  Copy, paste, customize the bracketed fields, send. Built for plain-English conversations.
                </p>

                <Tabs defaultValue="call" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="call"><Phone className="w-3.5 h-3.5 mr-2" />Cold Call</TabsTrigger>
                    <TabsTrigger value="vm"><Phone className="w-3.5 h-3.5 mr-2" />Voicemail</TabsTrigger>
                    <TabsTrigger value="email"><Mail className="w-3.5 h-3.5 mr-2" />Emails</TabsTrigger>
                    <TabsTrigger value="obj">Objections</TabsTrigger>
                  </TabsList>

                  <TabsContent value="call">
                    <ScriptBlock id={`${ind.id}-call`} label="Cold Call Opener (60 seconds)" text={ind.coldCall} icon={Phone} />
                  </TabsContent>

                  <TabsContent value="vm">
                    <ScriptBlock id={`${ind.id}-vm`} label="Voicemail (15–20 seconds)" text={ind.voicemail} icon={Phone} />
                  </TabsContent>

                  <TabsContent value="email" className="space-y-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Email 1 — Subject Line
                      </div>
                      <div className="rounded-md border border-border bg-card p-3 mb-3 font-mono text-sm flex items-center justify-between">
                        <span>{ind.email1Subject}</span>
                        <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={() => copyText(`${ind.id}-s1`, ind.email1Subject)}>
                          {copied === `${ind.id}-s1` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                      <ScriptBlock id={`${ind.id}-e1`} label="Email 1 — First Touch" text={ind.email1Body} icon={Mail} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 mt-6">
                        Email 2 — Subject Line (Send 3 days later)
                      </div>
                      <div className="rounded-md border border-border bg-card p-3 mb-3 font-mono text-sm flex items-center justify-between">
                        <span>{ind.email2Subject}</span>
                        <Button size="sm" variant="ghost" className="h-7 text-xs" onClick={() => copyText(`${ind.id}-s2`, ind.email2Subject)}>
                          {copied === `${ind.id}-s2` ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                      <ScriptBlock id={`${ind.id}-e2`} label="Email 2 — Follow Up" text={ind.email2Body} icon={Mail} />
                    </div>
                  </TabsContent>

                  <TabsContent value="obj" className="space-y-3">
                    {ind.objection.map((o, i) => (
                      <div key={i} className="rounded-md border border-border bg-card p-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Objection
                        </div>
                        <div className="font-semibold mb-3">"{o.q}"</div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                          Your Response
                        </div>
                        <div className="text-sm leading-relaxed">{o.a}</div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </section>
        );
      })}

      {/* 30-Day Revenue Playbook — Days 8 to 30 */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-6xl">
          <Badge className="mb-6 bg-primary/15 text-foreground hover:bg-primary/15 border-primary/20">
            <CalendarDays className="w-3 h-3 mr-1.5" strokeWidth={2} />
            30-Day Revenue Playbook · Days 8–30
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-balance">
            Days 1–7 set the stage.<br />
            <span className="text-muted-foreground">Days 8–30 put cash in the bank.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            You've built the prospect list, the scripts, and the offer. Now we run the engine.
            Three weeks. Three outcomes. Every day has a target, a cadence, and a number to hit.
          </p>

          {/* Week 2 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                <Megaphone className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  Week 2 · Days 8–14
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Outreach Engine — Hit the Phones</h3>
                <p className="text-muted-foreground mt-1">Outcome: 25+ live conversations, 8+ booked discoveries.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { day: "Day 8", title: "Launch the Triple-Touch", body: "60 dials + 60 personalized emails + 30 LinkedIn touches against your top Priority A prospects from the Chicagoland & Toledo list.", target: "10 conversations" },
                { day: "Day 9", title: "Voicemail + Send Email 1", body: "Every no-answer gets the 15-second voicemail and Email 1 within 5 minutes. Cadence > volume.", target: "60 emails sent" },
                { day: "Day 10", title: "Vertical Power Hour", body: "Block 90 minutes per vertical. Roofing morning. Dental midday. Salons afternoon. Match the script to the moment of day a buyer can take a call.", target: "12 conversations" },
                { day: "Day 11", title: "Send Email 2 + Re-Dial", body: "3 days after Email 1: drop the follow-up subject line. Re-dial every Email 1 opener.", target: "5 demos booked" },
                { day: "Day 12", title: "Referral Ask Friday", body: "Call every existing relationship — past clients, vendors, advisors. Ask for one warm intro into a Priority A target.", target: "3 warm intros" },
                { day: "Day 13", title: "Weekend Drip Setup", body: "Queue Saturday/Sunday emails with the 'Storm Season is Coming' / 'Your Customers' Next Oil Change' lines. Buyers read on weekends.", target: "All sequences live" },
                { day: "Day 14", title: "Week 2 Review", body: "Score the list: who replied, who opened, who ghosted. Promote 5 new prospects to Priority A. Demote dead leads.", target: "8+ demos on calendar" },
              ].map((d) => (
                <Card key={d.day} className="duck-card border-border">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-primary/30 text-foreground bg-primary/10 text-xs font-mono">
                        {d.day}
                      </Badge>
                      <Target className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="font-bold text-base mb-2">{d.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{d.body}</p>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border-t border-border pt-3">
                      Target: <span className="text-foreground tabular-nums">{d.target}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Week 3 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                <Handshake className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  Week 3 · Days 15–21
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Demos & Proposals — Convert the Pipeline</h3>
                <p className="text-muted-foreground mt-1">Outcome: 6+ demos delivered, 3+ proposals out, 1+ verbal yes.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { day: "Day 15", title: "Demo Prep Day", body: "Build per-prospect ROI math. Pull their public reviews, missed-call patterns, and Google rating. Customize 3 slides per demo.", target: "All week's demos prepped" },
                { day: "Day 16", title: "Demos Block A", body: "Run 2–3 demos. Lead with their pain point from the discovery call. Close with the 90-day guarantee.", target: "3 demos completed" },
                { day: "Day 17", title: "Same-Day Proposals", body: "Every demo gets a 1-page proposal in their inbox before close of business. Speed = trust.", target: "3 proposals sent" },
                { day: "Day 18", title: "Demos Block B + Objections", body: "Run remaining demos. Use the objection scripts. Every 'we'll think about it' gets a defined next step before they hang up.", target: "3 demos completed" },
                { day: "Day 19", title: "Proposal Follow-Up", body: "Call every open proposal. 'I'm calling to walk through page 2 — want to do it now or schedule 10 minutes?'", target: "1 verbal yes" },
                { day: "Day 20", title: "Refill the Top of Funnel", body: "Pull 25 fresh prospects from the Toledo/Chicagoland list. Drop into the Day 8 sequence so Week 4 has fuel.", target: "25 new prospects loaded" },
                { day: "Day 21", title: "Week 3 Review", body: "Stage the pipeline: Discovery → Demo → Proposal → Verbal → Signed. Identify the 1–2 deals that close in Week 4.", target: "Pipeline staged" },
              ].map((d) => (
                <Card key={d.day} className="duck-card border-border">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-primary/30 text-foreground bg-primary/10 text-xs font-mono">
                        {d.day}
                      </Badge>
                      <Handshake className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="font-bold text-base mb-2">{d.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{d.body}</p>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border-t border-border pt-3">
                      Target: <span className="text-foreground tabular-nums">{d.target}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Week 4 */}
          <div className="mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-md bg-primary/15 flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                  Week 4 · Days 22–30
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Close & Compound — Get Cash, Build Momentum</h3>
                <p className="text-muted-foreground mt-1">Outcome: 1–3 signed clients, $5K–$25K MRR booked, Month 2 pipeline already loaded.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { day: "Day 22", title: "Close Day — Verbal to Signed", body: "Send DocuSign on every verbal yes. 'Sign today and we activate Lite Mode by Friday.' Use urgency anchored to the 90-day guarantee clock.", target: "1 signature" },
                { day: "Day 23", title: "Activate Onboarding", body: "Signed clients hit /setup. Lite Mode: phone number provisioned + AI script reviewed within 24 hours of signing.", target: "Day-1 activation" },
                { day: "Day 24", title: "Stalled Deal Rescue", body: "Every proposal sitting >5 days gets a 'I'm pulling this off your plate unless we talk by Friday' email. Forces a decision.", target: "All proposals re-engaged" },
                { day: "Day 25", title: "Demos Block C", body: "Last demos of the month from Week 3 refill. Same playbook: pain → ROI → guarantee → next step.", target: "2 demos completed" },
                { day: "Day 26", title: "First Win Story", body: "Capture the first signed client's 'why' on a 2-minute Loom. This becomes Week 1 proof for next month's outbound.", target: "1 case asset" },
                { day: "Day 27", title: "Referral Ask · Round 2", body: "Every signed client gets asked: 'Who else in your network has the same problem?' Warm intros are next month's Day 8.", target: "2 warm intros" },
                { day: "Day 28", title: "Pipeline Hygiene", body: "Kill dead leads. Promote movers. Forecast Month 2: how much MRR is in Verbal + Proposal stages right now?", target: "Forecast committed" },
                { day: "Day 29", title: "Reload the List", body: "Pull next 50 prospects. Refresh Priority A scoring. The Day 8 engine starts again Monday.", target: "Month 2 list ready" },
                { day: "Day 30", title: "Score the Month", body: "Conversations, demos, proposals, signed. Compare to the targets above. Double down on the vertical with the highest close rate.", target: "Month 1 scorecard" },
              ].map((d) => (
                <Card key={d.day} className="duck-card border-border">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="border-primary/30 text-foreground bg-primary/10 text-xs font-mono">
                        {d.day}
                      </Badge>
                      <Trophy className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    </div>
                    <div className="font-bold text-base mb-2">{d.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{d.body}</p>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground border-t border-border pt-3">
                      Target: <span className="text-foreground tabular-nums">{d.target}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Daily Operating Rhythm */}
          <Card className="duck-card border-border bg-muted/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <ListChecks className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <h3 className="text-xl font-bold tracking-tight">The Daily Operating Rhythm (Days 8–30)</h3>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">8:00 – 10:00 AM</div>
                  <div className="font-semibold mb-1">Power Hour Calls</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Top 20 Priority A dials. No email. No Slack. Phones only.</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">10:00 AM – 12:00 PM</div>
                  <div className="font-semibold mb-1">Demos & Discovery</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Block all booked calls here. Lead with their pain, close with next step.</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">1:00 – 3:00 PM</div>
                  <div className="font-semibold mb-1">Email & Proposals</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Send Email 1 / Email 2 sequences. Same-day proposals out the door.</p>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">3:00 – 5:00 PM</div>
                  <div className="font-semibold mb-1">Second Power Hour</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">Re-dial morning no-answers. Auto repair & salons answer the phone after 3pm.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scoreboard */}
          <div className="mt-8 grid md:grid-cols-4 gap-4">
            {[
              { label: "Daily Dials", target: "60", icon: Phone },
              { label: "Weekly Demos", target: "6+", icon: Handshake },
              { label: "Weekly Proposals", target: "3+", icon: Mail },
              { label: "Month 1 Closes", target: "1–3", icon: TrendingUp },
            ].map((m) => {
              const Icon = m.icon;
              return (
                <Card key={m.label} className="duck-card border-border">
                  <CardContent className="p-5">
                    <Icon className="w-4 h-4 text-primary mb-2" strokeWidth={1.5} />
                    <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{m.label}</div>
                    <div className="text-2xl font-bold tabular-nums">{m.target}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="/setup"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              Activate Lite Mode <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="/week-1-ship"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              <BarChart3 className="w-4 h-4" strokeWidth={1.5} /> Review Days 1–7
            </a>
          </div>
        </div>
      </section>

      {/* Universal Frameworks */}
      <section className="py-20 border-b border-border bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
            Universal Sales Frameworks
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Use these across any of the 5 industries when you need to adapt on the fly.
          </p>

          <div className="space-y-6">
            <Card className="duck-card border-border">
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">The 30-Second Pitch</div>
                <p className="text-base leading-relaxed">
                  "We help [industry] businesses stop losing money to slow lead response, empty schedules, and customers
                  who never come back. Our AI works 24/7 alongside your existing tools — no new software to learn — and
                  most clients see ROI within the first 30 days. Worth a 15-minute look?"
                </p>
              </CardContent>
            </Card>

            <Card className="duck-card border-border">
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">The "What Do You Do?" Answer</div>
                <p className="text-base leading-relaxed">
                  "We get business owners their ducks in a row. Specifically — we use AI to call back leads in under
                  60 seconds, fill empty appointment slots automatically, and bring back customers who haven't visited
                  in a while. Stuff your team would do if they had 10 extra hours a day."
                </p>
              </CardContent>
            </Card>

            <Card className="duck-card border-border">
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">The 90-Day Guarantee Close</div>
                <p className="text-base leading-relaxed">
                  "Here's the thing — we're so confident in this we guarantee results in 90 days or we work for free
                  until you see them. We're not asking you to take a risk. We're asking you to give us 30 minutes to
                  show you the math on your specific business."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
            Get Your Ducks in a Row.
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Pick your industry. We'll have you generating revenue in 30 days — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:patrick@rowofducks.ai"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              Book a 15-Minute Demo <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
            <a
              href="/industries"
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-border bg-background px-6 py-3 text-sm font-medium hover:bg-muted transition-colors"
            >
              See All 37 Industry Blueprints
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuickWins;
