"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
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
    <section className="flex h-screen">
      {/* Left side: Image */}
      <div className="w-2/3 bg-gray-500 flex items-center justify-center">
        <Image
          src="/your-image-path.png" // Replace with your image path
          alt="Welcome image"
          width={500}
          height={500}
          className="rounded-lg"
        />
      </div>
  
      <div className="w-1/3 bg-white flex flex-col justify-center px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Welcome back
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6 ">
          <div className="flex flex-col items-center">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="block  w-full max-w-sm border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full max-w-sm border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full max-w-sm bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
            >
              Sign in
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}
          <p className="text-sm text-gray-500 mt-4 text-center">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
  
}
