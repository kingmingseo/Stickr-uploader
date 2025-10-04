"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import useAuth from "@/hooks/useAuth";

// 로그인 페이지는 동적으로 렌더링되어야 함
export const dynamic = 'force-dynamic';

export default function LoginPage() {
  const router = useRouter();
  const { login, error, isLoading } = useAuth();

  const handleLogin = async (data: { email: string; password: string }) => {
    const result = await login(data.email, data.password);
    console.log(result);
    if (result.success) {
      router.push("/");
    } else {
      alert(result.error || "로그인에 실패했습니다.");
    }
  };

  return (
    <div className="animate-slide-in">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
        관리자님 환영합니다! 👋
      </h2>
      <p className="text-center text-gray-600 mb-8 text-sm">
        계정에 로그인하여 시작하세요
      </p>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg flex items-start gap-3 animate-fade-in">
          <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
          </svg>
          <div>
            <p className="font-semibold">로그인 실패</p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      )}

      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </div>
  );
}
