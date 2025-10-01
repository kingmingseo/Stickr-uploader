'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'

export async function loginAction(email: string, password: string) {
  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    throw new Error(error.message) // 클라이언트에서 try/catch로 잡을 수 있음
  }

  // 로그인 성공 시, 필요하면 캐시 재검증
  revalidatePath('/', 'layout')

  return true
}

export async function logoutAction(){
  const supabase = await createClient()
  const {error} = await supabase.auth.signOut();

  if(error){
    throw new Error(error.message)
  }

  revalidatePath('/', 'layout')
  return true
}