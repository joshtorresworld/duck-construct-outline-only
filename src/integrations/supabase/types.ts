export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          assigned_to: string | null
          created_at: string
          duration_minutes: number
          external_calendar_id: string | null
          external_event_id: string | null
          id: string
          lead_id: string | null
          metadata: Json
          scheduled_at: string
          service_type: string | null
          status: Database["public"]["Enums"]["appointment_status"]
          tenant_id: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          duration_minutes?: number
          external_calendar_id?: string | null
          external_event_id?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json
          scheduled_at: string
          service_type?: string | null
          status?: Database["public"]["Enums"]["appointment_status"]
          tenant_id: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          duration_minutes?: number
          external_calendar_id?: string | null
          external_event_id?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json
          scheduled_at?: string
          service_type?: string | null
          status?: Database["public"]["Enums"]["appointment_status"]
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "appointments_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "appointments_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations: {
        Row: {
          config: Json
          created_at: string
          encrypted_credentials: Json | null
          external_account_id: string | null
          id: string
          last_sync_at: string | null
          provider: string
          status: string
          tenant_id: string
          updated_at: string
        }
        Insert: {
          config?: Json
          created_at?: string
          encrypted_credentials?: Json | null
          external_account_id?: string | null
          id?: string
          last_sync_at?: string | null
          provider: string
          status?: string
          tenant_id: string
          updated_at?: string
        }
        Update: {
          config?: Json
          created_at?: string
          encrypted_credentials?: Json | null
          external_account_id?: string | null
          id?: string
          last_sync_at?: string | null
          provider?: string
          status?: string
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "integrations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          created_at: string
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          metadata: Json
          notes: string | null
          phone: string | null
          responded_at: string | null
          response_seconds: number | null
          score: number | null
          source: string
          status: Database["public"]["Enums"]["lead_status"]
          tenant_id: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json
          notes?: string | null
          phone?: string | null
          responded_at?: string | null
          response_seconds?: number | null
          score?: number | null
          source: string
          status?: Database["public"]["Enums"]["lead_status"]
          tenant_id: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          metadata?: Json
          notes?: string | null
          phone?: string | null
          responded_at?: string | null
          response_seconds?: number | null
          score?: number | null
          source?: string
          status?: Database["public"]["Enums"]["lead_status"]
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "leads_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          ai_generated: boolean
          body: string
          channel: Database["public"]["Enums"]["message_channel"]
          cost_cents: number | null
          created_at: string
          delivery_status: string | null
          direction: Database["public"]["Enums"]["message_direction"]
          external_id: string | null
          from_address: string | null
          id: string
          lead_id: string | null
          metadata: Json
          subject: string | null
          tenant_id: string
          to_address: string | null
        }
        Insert: {
          ai_generated?: boolean
          body: string
          channel: Database["public"]["Enums"]["message_channel"]
          cost_cents?: number | null
          created_at?: string
          delivery_status?: string | null
          direction: Database["public"]["Enums"]["message_direction"]
          external_id?: string | null
          from_address?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json
          subject?: string | null
          tenant_id: string
          to_address?: string | null
        }
        Update: {
          ai_generated?: boolean
          body?: string
          channel?: Database["public"]["Enums"]["message_channel"]
          cost_cents?: number | null
          created_at?: string
          delivery_status?: string | null
          direction?: Database["public"]["Enums"]["message_direction"]
          external_id?: string | null
          from_address?: string | null
          id?: string
          lead_id?: string | null
          metadata?: Json
          subject?: string | null
          tenant_id?: string
          to_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      revenue_events: {
        Row: {
          amount_cents: number
          attribution: string | null
          created_at: string
          description: string | null
          event_type: string
          id: string
          lead_id: string | null
          occurred_at: string
          tenant_id: string
        }
        Insert: {
          amount_cents: number
          attribution?: string | null
          created_at?: string
          description?: string | null
          event_type: string
          id?: string
          lead_id?: string | null
          occurred_at?: string
          tenant_id: string
        }
        Update: {
          amount_cents?: number
          attribution?: string | null
          created_at?: string
          description?: string | null
          event_type?: string
          id?: string
          lead_id?: string | null
          occurred_at?: string
          tenant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "revenue_events_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "revenue_events_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_members: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          tenant_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          tenant_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          tenant_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_members_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          business_email: string | null
          business_phone: string | null
          created_at: string
          id: string
          industry: Database["public"]["Enums"]["tenant_industry"]
          monthly_price_cents: number | null
          name: string
          settings: Json
          status: Database["public"]["Enums"]["tenant_status"]
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          timezone: string
          trial_ends_at: string
          updated_at: string
        }
        Insert: {
          business_email?: string | null
          business_phone?: string | null
          created_at?: string
          id?: string
          industry: Database["public"]["Enums"]["tenant_industry"]
          monthly_price_cents?: number | null
          name: string
          settings?: Json
          status?: Database["public"]["Enums"]["tenant_status"]
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          timezone?: string
          trial_ends_at?: string
          updated_at?: string
        }
        Update: {
          business_email?: string | null
          business_phone?: string | null
          created_at?: string
          id?: string
          industry?: Database["public"]["Enums"]["tenant_industry"]
          monthly_price_cents?: number | null
          name?: string
          settings?: Json
          status?: Database["public"]["Enums"]["tenant_status"]
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          timezone?: string
          trial_ends_at?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_tenant_access: {
        Args: { _tenant_id: string; _user_id: string }
        Returns: boolean
      }
      has_tenant_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _tenant_id: string
          _user_id: string
        }
        Returns: boolean
      }
      is_tenant_admin: {
        Args: { _tenant_id: string; _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "owner" | "admin" | "operator" | "viewer"
      appointment_status:
        | "scheduled"
        | "confirmed"
        | "completed"
        | "no_show"
        | "canceled"
      lead_status:
        | "new"
        | "contacted"
        | "qualified"
        | "booked"
        | "closed_won"
        | "closed_lost"
        | "nurture"
      message_channel: "sms" | "email" | "voice"
      message_direction: "inbound" | "outbound"
      tenant_industry:
        | "real_estate"
        | "dental"
        | "roofing"
        | "auto_repair"
        | "salon_spa"
      tenant_status: "trial" | "active" | "past_due" | "canceled" | "suspended"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["owner", "admin", "operator", "viewer"],
      appointment_status: [
        "scheduled",
        "confirmed",
        "completed",
        "no_show",
        "canceled",
      ],
      lead_status: [
        "new",
        "contacted",
        "qualified",
        "booked",
        "closed_won",
        "closed_lost",
        "nurture",
      ],
      message_channel: ["sms", "email", "voice"],
      message_direction: ["inbound", "outbound"],
      tenant_industry: [
        "real_estate",
        "dental",
        "roofing",
        "auto_repair",
        "salon_spa",
      ],
      tenant_status: ["trial", "active", "past_due", "canceled", "suspended"],
    },
  },
} as const
