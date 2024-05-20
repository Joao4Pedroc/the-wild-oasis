import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nciolraggncuzifzqjlz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jaW9scmFnZ25jdXppZnpxamx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NDM5MzksImV4cCI6MjAyNDAxOTkzOX0.PoVUMHKzxflib8xort7IcZx6itrJKopn4SC5k7HWbjc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
