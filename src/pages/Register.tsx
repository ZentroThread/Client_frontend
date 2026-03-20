import { useState } from "react";
import { API_BASE_URL } from "@/constants/constdata";
import Swal from "sweetalert2";

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
    <div
      className="max-w-md mx-auto mt-16 p-6 rounded-2xl glass"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border-soft)",
      }}
    >
      <h2 className="text-2xl mb-6 text-center" style={{ color: "var(--text-primary)" }}>
        Create Account
      </h2>

      <form onSubmit={handleRegister} className="space-y-4">

        {/* NAME */}
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 rounded-lg outline-none"
          style={{
            backgroundColor: "var(--bg-muted)",
            border: "1px solid var(--border-soft)",
            color: "var(--text-primary)",
          }}
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 rounded-lg outline-none"
          style={{
            backgroundColor: "var(--bg-muted)",
            border: "1px solid var(--border-soft)",
            color: "var(--text-primary)",
          }}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 rounded-lg outline-none"
          style={{
            backgroundColor: "var(--bg-muted)",
            border: "1px solid var(--border-soft)",
            color: "var(--text-primary)",
          }}
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full py-2 rounded-lg font-medium transition"
          style={{
            backgroundColor: "var(--brand-primary)",
            color: "#fff",
            boxShadow: "var(--shadow-sm)",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--brand-secondary)")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "var(--brand-primary)")
          }
        >
          Register
        </button>
      </form>

      {/* LOGIN LINK */}
      <p className="mt-4 text-center text-sm" style={{ color: "var(--text-secondary)" }}>
        Already have an account?{" "}
        <a href="/login" className="underline">
          Login
        </a>
      </p>

      {/* GOOGLE LOGIN */}
      <div className="mt-6 text-center">
        <button
          onClick={() =>
            (window.location.href = `${API_BASE_URL}/oauth2/authorization/google`)
          }
          className="w-full py-2 rounded-lg border"
          style={{
            borderColor: "var(--border-soft)",
            color: "var(--text-primary)",
          }}
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}