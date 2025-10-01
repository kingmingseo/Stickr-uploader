"use client";

import React from "react";
import { useRouter } from "next/navigation";
import LoginForm from "@/components/LoginForm";
import useAuth from "@/hooks/useAuth";

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
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        로그인
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </div>
  );
}
