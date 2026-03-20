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

  // ✅ FIXED LOGIN FUNCTION
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

      // ✅ store token + update auth
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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-(--bg-primary) text-(--text-primary)">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle,var(--accent-rose)_0%,transparent_70%)]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle,var(--accent-beige)_0%,transparent_70%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}>
            <Link to="/">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-[linear-gradient(135deg,var(--brand-primary)_0%,var(--brand-secondary)_100%)]">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </Link>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-serif mb-2">Welcome Back</h2>
          <p className="text-sm text-(--text-secondary)">Sign in to your Hiru Sandu Bridal account</p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-2xl shadow-xl p-8 border border-(--border-medium)"
        >
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-(--text-secondary)">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-(--text-muted)" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`block w-full pl-12 pr-4 py-3 rounded-lg border focus:outline-none focus:ring-2 bg-(--surface) text-(--text-primary) ${
                    errors.email ? 'border-(--error)' : 'border-(--border-medium)'
                  }`}
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-(--error)">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm mb-2 text-(--text-secondary)">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-(--text-muted)" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`block w-full pl-12 pr-12 py-3 rounded-lg border focus:outline-none focus:ring-2 bg-(--surface) text-(--text-primary) ${
                    errors.password ? 'border-(--error)' : 'border-(--border-medium)'
                  }`}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-(--text-muted)">
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && <p className="mt-2 text-sm text-(--error)">{errors.password}</p>}
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 focus:ring-2" style={{ accentColor: 'var(--brand-primary)' }} />
                Remember me
              </label>
              <Link to="#" className="text-sm text-(--brand-primary) hover:text-(--brand-secondary)">Forgot password?</Link>
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-white font-medium shadow-lg disabled:opacity-50 disabled:cursor-not-allowed bg-[linear-gradient(135deg,var(--brand-primary)_0%,var(--brand-secondary)_100%)]"
            >
              {isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <><LogIn className="h-5 w-5" />Sign In</>}
            </motion.button>
          </form>
        </motion.div>

        {/* Google login */}
        <p className="text-center text-sm text-(--text-secondary)">
        <a
          href={`${API_BASE_URL}/oauth2/authorization/google?redirect=${encodeURIComponent(window.location.origin)}`}
        >
          Login with Google
        </a>
        </p>

        {/* Register */}
        <p className="text-center text-sm text-(--text-secondary)">
          Don't have an account? <Link to="/register" className="text-(--brand-primary) hover:text-(--brand-secondary)">Create an account</Link>
        </p>
      </motion.div>
    </div>
  );
}