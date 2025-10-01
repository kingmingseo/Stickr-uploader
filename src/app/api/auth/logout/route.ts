import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function POST(request: NextRequest) {
  try {
    const response = NextResponse.json({ success: true })

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
          },
        },
      }
    )

    const { error } = await supabase.auth.signOut()
    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return response
  } catch (e) {
    const message = e instanceof Error ? e.message : '로그아웃 처리 중 오류'
    return NextResponse.json({ success: false, error: message }, { status: 500 })
  }
}


