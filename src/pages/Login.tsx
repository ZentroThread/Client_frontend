import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from "@/constants/constdata";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";


export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';

    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 2)
      newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/v1/customer/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const token = await res.text();

      login(token);

      setIsLoading(false);

      Swal.fire({
        icon: "success",
        title: "Welcome!",
        text: "Login successful",
        confirmButtonColor: "var(--brand-primary)",
      });

      navigate('/');

    } catch (error) {
      setIsLoading(false);

      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
        confirmButtonColor: "var(--error)",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden bg-linear-to-br from-(--bg-primary) to-(--surface) text-(--text-primary)">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-3xl opacity-20 bg-(--brand-primary)" />
        <div className="absolute -bottom-32 -left-32 w-72 h-72 rounded-full blur-3xl opacity-20 bg-(--brand-secondary)" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-6 relative z-10"
      >
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
          >
            <Link to="/">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg bg-linear-to-tr from-(--brand-primary) to-(--brand-secondary)">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </Link>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Welcome Back
          </h2>

          <p className="text-sm text-(--text-secondary) mt-1">
            Sign in to your Hiru Sandu Bridal account
          </p>
        </div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs mb-2 uppercase tracking-wide text-(--text-secondary)">
                Email Address
              </label>

              <div className="relative group">
                <Mail className="absolute left-4 top-3.5 h-5 w-5 text-(--text-muted) group-focus-within:text-(--brand-primary)" />

                <input
                  {...{
                    id: "email",
                    name: "email",
                    type: "email",
                    autoComplete: "email",
                    value: formData.email,
                    onChange: handleChange,
                    placeholder: "you@example.com",
                  }}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border bg-transparent transition-all duration-200 focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent ${
                    errors.email
                      ? "border-(--error)"
                      : "border-(--border-medium) hover:border-(--brand-primary)"
                  }`}
                />
              </div>

              {errors.email && (
                <p className="mt-1 text-xs text-(--error)">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs mb-2 uppercase tracking-wide text-(--text-secondary)">
                Password
              </label>

              <div className="relative group">
                <Lock className="absolute left-4 top-3.5 h-5 w-5 text-(--text-muted) group-focus-within:text-(--brand-primary)" />

                <input
                  {...{
                    id: "password",
                    name: "password",
                    type: showPassword ? "text" : "password",
                    autoComplete: "current-password",
                    value: formData.password,
                    onChange: handleChange,
                    placeholder: "••••••••",
                  }}
                  className={`w-full pl-12 pr-12 py-3 rounded-lg border bg-transparent transition-all duration-200 focus:ring-2 focus:ring-(--brand-primary) focus:border-transparent ${
                    errors.password
                      ? "border-(--error)"
                      : "border-(--border-medium) hover:border-(--brand-primary)"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-(--text-muted) hover:text-(--brand-primary)"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1 text-xs text-(--error)">{errors.password}</p>
              )}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded"
                  style={{ accentColor: "var(--brand-primary)" }}
                />
                Remember me
              </label>

              <Link
                to="#"
                className="text-(--brand-primary) hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-white shadow-lg transition-all bg-linear-to-r from-(--brand-primary) to-(--brand-secondary) hover:shadow-xl disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <LogIn className="h-5 w-5" />
                  Sign In
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-(--border-medium)" />
            <span className="text-xs font-medium tracking-widest text-(--text-secondary)">
              OR
            </span>
            <div className="flex-1 h-px bg-(--border-medium)" />
          </div>
                
          {/* Google login */}
          <a
            href={`${API_BASE_URL}/oauth2/authorization/google?redirect=${encodeURIComponent(
              window.location.origin
            )}`}
            className="w-full flex items-center justify-center gap-3 text-sm text-(--text-secondary) border-(--brand-primary) border rounded-lg p-3 hover:bg-(--accent-beige) hover:text-white transition-all duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-5 h-5"
            >
              <path
                fill="#FFC107"
                d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
              />
              <path
                fill="#FF3D00"
                d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.2 0 10-2 13.5-5.3l-6.2-5.2C29.3 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.5-6 6.9l6.2 5.2C39.2 36.7 44 31 44 24c0-1.3-.1-2.4-.4-3.5z"
              />
            </svg>
            <span>Login with Google</span>
          </a>
        </motion.div>

        {/* Register */}
        <p className="text-center text-sm text-(--text-secondary)">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="inline-flex items-center gap-1 text-(--brand-primary) hover:underline"
          >
            <Sparkles className="h-4 w-4" />
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}