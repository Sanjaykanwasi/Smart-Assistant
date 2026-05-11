"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [username, setUserName] = useState("");
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-cyan-900 text-white">
      {/* Background Glow Effects */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-80 h-80 bg-blue-600/20 blur-3xl rounded-full"></div>

      {/* Card */}
      <div className="relative p-8 w-80 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        {/* Small Badge */}
        <div className="mb-4 flex justify-center">
          <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/20">
            Smart Assistant
          </span>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">Welcome Back</h2>

        <p className="text-sm text-gray-300 text-center mb-6">
          Join your virtual meeting instantly
        </p>

        {/* Input */}
        <div className="relative">
          <input
            placeholder="Enter your name"
            className="px-4 py-3 w-full rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        {/* Button */}
        <button className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 font-semibold cursor-pointer">
          Join Meeting
        </button>

        {/* Bottom Text */}
        <p className="text-xs text-center text-gray-400 mt-5">
          Fast • Secure • Real-time
        </p>
      </div>
    </div>
  );
}
