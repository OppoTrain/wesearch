"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedinIn } from "react-icons/fa6";
export default function SignUpForm() {
  const router = useRouter();
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  // useEffect(() => {
  //   const checkSession = async () => {
  //     const session = await getSession();
  //     if (session) {
  //       router.push("/onboarding");
  //     }
  //   };

  //   checkSession();
  // }, [router]);
  // setError("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        setSuccessMessage("Registration successful. Logging you in...");
        await signIn("credentials", { redirect: false, email, password });
        router.push("/onboarding");
      } else {
        setError("An error occurred during registration.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong.");
    }
  };

  return (
    <section className="flex h-screen flex-col md:flex-row">
      <div className="hidden md:flex md:w-2/3 bg-[#14303d] items-center justify-center">
        <Image
          src="/earth.png"
          alt="Sign-Up Image"
          width={700}
          height={700}
          className="rounded-lg animate-spin-slow"
        />
      </div>

      <div className="w-full md:w-1/3 bg-white flex flex-col justify-center px-8 py-12 sm:px-16 sm:py-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
          Create an account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10">
          <div className="flex flex-col">
            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full border border-gray-300 text-black rounded-md shadow-sm py-3 px-4 sm:py-4 sm:px-5 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="name@company.com"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full border border-gray-300 text-black rounded-md shadow-sm py-3 px-4 sm:py-4 sm:px-5 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full border border-gray-300 text-black rounded-md shadow-sm py-3 px-4 sm:py-4 sm:px-5 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm text-center">{successMessage}</p>}

          <button
            type="submit"
            className="w-full bg-[#14303d] text-white py-3 px-6 sm:py-4 sm:px-8 rounded-md text-base sm:text-lg hover:bg-[#0f2a32] flex items-center justify-center space-x-2"
          >
            <span>Sign up</span>
          </button>

          <div className="flex items-center justify-center space-x-2 ">
            <span className="text-gray-500">or</span>
          </div>

          <div className="flex flex-col space-y-4">
            <button
              type="button"
              className="w-full text-black bg-white border border-gray-300 rounded-md shadow-sm py-3 px-6 flex items-center justify-center space-x-2 hover:bg-[#0f2a32] hover:text-white"
            >
        <FcGoogle className="h-6 w-6"/>
        <span>Sign up with Google</span>
            </button>

            <button
              type="button"
              className="w-full text-black bg-white border border-gray-300 rounded-md shadow-sm py-3 px-6 flex items-center justify-center space-x-2 hover:bg-[#0f2a32] hover:text-white"
            >
              <FaLinkedinIn className="text-blue-700 h-6 w-6 mb-1"/>
              <span>Sign up with LinkedIn</span>
            </button>
          </div>

          <div className="mt-6 text-sm sm:text-base text-gray-500 text-center">
            <p>By signing up, you agree to our <a href="/terms-of-service" className="text-[#14303d] hover:underline">Terms of Service</a>, our <a href="/privacy-policy" className="text-[#14303d] hover:underline">Privacy Policy</a>, and our <a href="/code-of-conduct" className="text-[#14303d] hover:underline">Code of Conduct</a>.</p>
            <p>Already have an account? <a href="/sign-in" className="text-[#14303d] hover:underline">Login</a></p>
          </div>
        </form>



      </div>
    </section>
  );
}
