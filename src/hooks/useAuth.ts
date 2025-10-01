"use client";

import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import axios from "axios";

export default function useAuth() {
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(email: string, password: string) {
    try {
      setIsLoading(true);

      // 보안 강화를 위해 서버 라우트를 통해 로그인 처리 (관리자 선검증 + 세션 서버발급)
      await axios.post("/api/auth/login", { email, password }, {});
      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "로그인 중 오류가 발생했습니다";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }

  async function logout() {
    try {
      setIsLoading(true);

      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      return { success: true };
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "로그아웃 중 오류가 발생했습니다";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    login,
    logout,
    error,
  };
}
