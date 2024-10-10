import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://agtbqxwdslfdjazihtcg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFndGJxeHdkc2xmZGphemlodGNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDgyNzQsImV4cCI6MjAzNjYyNDI3NH0.huXHz7DSwp7cFyeUnjj1xClW81B66DBXrjQvsCOEPLE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
