"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push("/onboarding");
      }
    };

    checkSession();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }

      const response = await fetch("/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const user = await response.json();
      if (response.status !== 200) {
        setError("Error fetching user information");
        return;
      }

      if (user.role) {
        router.push("/");
      } else {
        router.push("/onboarding");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="flex h-screen flex-col md:flex-row">
      <div className="hidden md:flex md:w-2/3 bg-[#14303d] items-center justify-center">
        <Image
          src="/earth.png"
          alt="Decorative Globe"
          width={700}
          height={700}
          className="animate-spin-slow rounded-lg"
        />
      </div>

      <div className="w-full md:w-1/3 bg-white flex flex-col justify-center px-8 py-12 sm:px-16 sm:py-24">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Welcome back
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border border-gray-300 text-black rounded-md shadow-sm py-3 px-4 sm:py-4 sm:px-5 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Email"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border border-gray-300 text-black rounded-md shadow-sm py-3 px-4 sm:py-4 sm:px-5 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#14303d] text-white py-3 px-6 sm:py-4 sm:px-8 rounded-md text-base sm:text-lg hover:bg-[#0f2a32]"
            >
              Sign in
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
          <p className="text-sm sm:text-base text-gray-500 mt-6 text-center">
            Don’t have an account?{" "}
            <a href="/sign-up" className="text-[#14303d] hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
