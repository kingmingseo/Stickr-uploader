import { NextRequest, NextResponse } from "next/server";
import { createClient } from '@/utils/supabase/server'
import { createClient as createAdminClient } from "@supabase/supabase-js";
export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { error: "이메일과 비밀번호가 필요합니다" },
        { status: 400 }
      );
    }

    // 1) 서버에서 먼저 로그인(세션 발급)
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;

    if (!url) {
      return NextResponse.json(
        { error: "환경변수 설정 오류" },
        { status: 500 }
      );
    }

    const response = NextResponse.json({ success: true });
    const serverClient = await createClient()

    const { data: signInData, error: signInError } =
      await serverClient.auth.signInWithPassword({ email, password });
    if (signInError) {
      return NextResponse.json({ error: signInError.message }, { status: 401 });
    }

    // 2) 발급된 사용자 ID로 관리자 검증
    const adminClient = createAdminClient(
      url,
      serviceKey ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const userId = signInData.user?.id;
    const { data: adminRow, error: adminError } = await adminClient
      .from("admins")
      .select("id")
      .eq("id", userId)
      .maybeSingle();

    if (adminError) {
      await serverClient.auth.signOut();
      console.error(adminError);
      return NextResponse.json(
        { error: "관리자 검증 중 오류가 발생했습니다" },
        { status: 500 }
      );
    }
    if (!adminRow) {
      await serverClient.auth.signOut();
      return NextResponse.json(
        { error: "관리자만 로그인할 수 있습니다" },
        { status: 403 }
      );
    }
    console.log(response);
    return response;
  } catch (e) {
    const message = e instanceof Error ? e.message : "로그인 처리 중 오류";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
