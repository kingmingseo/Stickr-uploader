import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 인증 상태 확인: 비로그인 → /login, 로그인 → /upload
  if (!user) redirect("/login");
  redirect("/upload");
}
