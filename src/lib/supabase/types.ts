// Hand-authored to exactly mirror the schema defined in supabase/migrations/.
// Once the Supabase project is live, regenerate this file from the real
// database instead of editing it by hand:
//
//   npx supabase gen types typescript --project-id <project-ref> > src/lib/supabase/types.ts
//
// Keep the shape (Row/Insert/Update per table) identical to what the CLI
// produces so `Tables<>` / `TablesInsert<>` / `TablesUpdate<>` below keep
// working without call-site changes.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type AppointmentStatus =
  "pending" | "confirmed" | "completed" | "cancelled";
export type ContactMessageStatus = "new" | "in_progress" | "resolved";
export type AdminRole = "super_admin" | "editor";

export interface Database {
  public: {
    Tables: {
      appointments: {
        Row: {
          id: string;
          full_name: string;
          phone: string;
          email: string | null;
          service_slug: string;
          preferred_date: string;
          preferred_time: string | null;
          address: string;
          city: string;
          message: string | null;
          status: AppointmentStatus;
          source: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          phone: string;
          email?: string | null;
          service_slug: string;
          preferred_date: string;
          preferred_time?: string | null;
          address: string;
          city?: string;
          message?: string | null;
          status?: AppointmentStatus;
          source?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          phone?: string;
          email?: string | null;
          service_slug?: string;
          preferred_date?: string;
          preferred_time?: string | null;
          address?: string;
          city?: string;
          message?: string | null;
          status?: AppointmentStatus;
          source?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      contact_messages: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string | null;
          subject: string | null;
          message: string;
          status: ContactMessageStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone?: string | null;
          subject?: string | null;
          message: string;
          status?: ContactMessageStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          phone?: string | null;
          subject?: string | null;
          message?: string;
          status?: ContactMessageStatus;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      blog_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string | null;
          content: string | null;
          category_id: string | null;
          author_name: string;
          cover_image_url: string | null;
          reading_time_minutes: number | null;
          is_featured: boolean;
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          excerpt?: string | null;
          content?: string | null;
          category_id?: string | null;
          author_name?: string;
          cover_image_url?: string | null;
          reading_time_minutes?: number | null;
          is_featured?: boolean;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          excerpt?: string | null;
          content?: string | null;
          category_id?: string | null;
          author_name?: string;
          cover_image_url?: string | null;
          reading_time_minutes?: number | null;
          is_featured?: boolean;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "blog_posts_category_id_fkey";
            columns: ["category_id"];
            isOneToOne: false;
            referencedRelation: "blog_categories";
            referencedColumns: ["id"];
          },
        ];
      };
      testimonials: {
        Row: {
          id: string;
          author_name: string;
          author_relation: string | null;
          service_slug: string | null;
          rating: number | null;
          content: string;
          avatar_url: string | null;
          is_published: boolean;
          display_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          author_name: string;
          author_relation?: string | null;
          service_slug?: string | null;
          rating?: number | null;
          content: string;
          avatar_url?: string | null;
          is_published?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          author_name?: string;
          author_relation?: string | null;
          service_slug?: string | null;
          rating?: number | null;
          content?: string;
          avatar_url?: string | null;
          is_published?: boolean;
          display_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      gallery: {
        Row: {
          id: string;
          title: string | null;
          description: string | null;
          image_url: string;
          category: string | null;
          display_order: number;
          is_published: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title?: string | null;
          description?: string | null;
          image_url: string;
          category?: string | null;
          display_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string | null;
          description?: string | null;
          image_url?: string;
          category?: string | null;
          display_order?: number;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      admins: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          role: AdminRole;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          email: string;
          role?: AdminRole;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          role?: AdminRole;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      settings: {
        Row: {
          key: string;
          value: Json;
          description: string | null;
          updated_at: string;
        };
        Insert: {
          key: string;
          value: Json;
          description?: string | null;
          updated_at?: string;
        };
        Update: {
          key?: string;
          value?: Json;
          description?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      appointment_status: AppointmentStatus;
      contact_message_status: ContactMessageStatus;
      admin_role: AdminRole;
    };
    CompositeTypes: Record<string, never>;
  };
}

type PublicSchema = Database["public"];

// Convenience generics mirroring Supabase's documented "Helper types for
// Tables and Joins" pattern, so call sites can write Tables<"appointments">
// instead of Database["public"]["Tables"]["appointments"]["Row"].
export type Tables<T extends keyof PublicSchema["Tables"]> =
  PublicSchema["Tables"][T]["Row"];
export type TablesInsert<T extends keyof PublicSchema["Tables"]> =
  PublicSchema["Tables"][T]["Insert"];
export type TablesUpdate<T extends keyof PublicSchema["Tables"]> =
  PublicSchema["Tables"][T]["Update"];
export type Enums<T extends keyof PublicSchema["Enums"]> =
  PublicSchema["Enums"][T];
