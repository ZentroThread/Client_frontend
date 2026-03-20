import { useState } from "react";
import { API_BASE_URL } from "@/constants/constdata";
import Swal from "sweetalert2";
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLock } from "react-icons/ci";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/v1/customer/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!res.ok) throw new Error("Register failed");

      Swal.fire({
        icon: "success",
        title: "Registered!",
        text: "Account created successfully",
        confirmButtonColor: "var(--brand-primary)",
      });

      // clear form
      setName("");
      setEmail("");
      setPassword("");

      // redirect to login
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);

    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Registration failed",
        confirmButtonColor: "var(--error)",
      });
    }
  };

return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-linear-to-br from-(--bg-primary) to-(--surface) text-(--text-primary)">

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-3xl opacity-20 bg-(--brand-primary)" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full blur-3xl opacity-20 bg-(--brand-secondary)" />
      </div>

      <div className="max-w-md w-full relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
          >
            <Link to="/">
              <div className="w-16 h-16 flex items-center justify-center rounded-full shadow-lg bg-linear-to-tr from-(--brand-primary) to-(--brand-secondary)">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </Link>
          </motion.div>

          <h2 className="text-3xl font-semibold mt-4 tracking-tight">
            Create Account
          </h2>

          <p className="text-sm text-(--text-secondary)">
            Register for a new Hiru Sandu Bridal account
          </p>
        </div>

        {/* Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8">

          <form onSubmit={handleRegister} className="space-y-5">

            {/* NAME */}
            <div className="relative group">
              <FaUser className="absolute left-4 top-3.5 h-5 w-5 text-(--text-muted) group-focus-within:text-(--brand-primary)" />
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all border-(--border-medium) hover:border-(--brand-primary)"
              />
            </div>
         

            {/* EMAIL */}
            <div className="relative group">
              <AiOutlineMail className="absolute left-4 top-3.5 h-5 w-5 text-(--text-muted) group-focus-within:text-(--brand-primary)" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all border-(--border-medium) hover:border-(--brand-primary)"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative group">
              <CiLock className="absolute left-4 top-3.5 h-5 w-5 text-(--text-muted) group-focus-within:text-(--brand-primary)" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent transition-all border-(--border-medium) hover:border-(--brand-primary)"
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg font-medium text-white transition-all shadow-lg bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) hover:shadow-xl hover:scale-[1.01] active:scale-95"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-(--border-medium)" />
            <span className="text-xs text-(--text-secondary) tracking-widest">
              OR
            </span>
            <div className="flex-1 h-px bg-(--border-medium)" />
          </div>

          {/* Google Button */}
          <button
            onClick={() =>
              (window.location.href = `${API_BASE_URL}/oauth2/authorization/google`)
            }
            className="w-full flex items-center justify-center gap-3 py-3 rounded-lg border transition-all hover:bg-(--accent-beige) hover:text-white border-(--border-medium) hover:shadow-md"
          >
            <svg viewBox="0 0 48 48" className="w-5 h-5">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/>
              <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"/>
              <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6 6.9l6.2 5.2C39.2 36.7 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"/>
            </svg>
            Continue with Google
          </button>

          {/* LOGIN LINK */}
          <p className="mt-6 text-center text-sm text-(--text-secondary)">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-(--brand-primary) hover:underline font-medium"
            >
              Login
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}