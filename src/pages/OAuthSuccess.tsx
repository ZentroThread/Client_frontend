import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import {useAuth} from "@/context/AuthContext";

export default function OAuthSuccess() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    setTimeout(() => {
      if (token) {

        login(token);
        window.dispatchEvent(new Event("auth-change"));

        navigate("/");
      } else {
        navigate("/login");
      }
    }, 2000); 
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--bg-primary) text-(--text-primary)">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-6 glass p-10 rounded-2xl shadow-xl border"
      >

        {/* Animated Spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-(--brand-primary) border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />

        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-10 h-10 text-green-500" />
        </motion.div>

        {/* Text */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold">Signing you in...</h2>
          <p className="text-sm text-(--text-secondary)">
            Please wait while we log you into your account
          </p>
        </div>

      </motion.div>
    </div>
  );
}