import { useState } from "react";

import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  LogIn,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  loginUser,
} from "../services/authService";

import {
  saveLogin,
} from "../utils/auth";

export default function Login({
  embedded = false,
  redirect = "",
  onClose,
  onRegister,
  onForgot,
}) {
  const navigate = useNavigate();

  const [form, setForm] =
    useState({
      email: "",
      password: "",
    });

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,

      [e.target.name]:
        e.target.value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim()) {
      setError(
        "Please enter your email address."
      );
      return;
    }

    if (!form.password) {
      setError(
        "Please enter your password."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data =
        await loginUser({
          email:
            form.email.trim(),

          password:
            form.password,
        });

      if (
        !data?.token ||
        !data?.user
      ) {
        throw new Error(
          "Invalid login response."
        );
      }

      saveLogin(
        data.token,
        data.user
      );

      onClose?.();

      if (redirect) {
        navigate(redirect);
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(
        err?.message ||
          "Unable to login."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleForgot = () => {
    if (embedded) {
      onForgot?.();
      return;
    }

    navigate(
      "/forgot-password"
    );
  };

  const handleRegister = () => {
    if (embedded) {
      onRegister?.();
      return;
    }

    navigate("/register");
  };

  return (
    <div className="w-full">
      {/* HEADING */}

      <div>
        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#C8942E]
          "
        >
          Welcome Back
        </p>

        <h1
          className="
            mt-2
            text-[29px]
            font-bold
            leading-tight
            text-[#064B50]
          "
        >
          Login to your account
        </h1>

        <p
          className="
            mt-3
            text-[16px]
            leading-6
            text-[#2d2e2e]
          "
        >
          Access your account and
          continue your healthcare
          journey with Akeso.
        </p>
      </div>

      {/* ERROR */}

      {error && (
        <div
          className="
            mt-6
            rounded-xl
            border
            border-red-200
            bg-red-50
            px-4
            py-3
            text-[13px]
            text-red-600
          "
        >
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-5"
      >
        {/* EMAIL */}

        <div>
          <label
            htmlFor="login-email"
            className="
              mb-2
              block
              text-[13px]
              font-semibold
              text-[#263F41]
            "
          >
            Email Address
          </label>

          <div
            className="
              flex
              h-[54px]
              items-center
              gap-3
              rounded-xl
              border
              border-[#dce7e6]
              bg-[#fbfcfc]
              px-4

              focus-within:border-[#064B50]
              focus-within:bg-white
              focus-within:ring-2
              focus-within:ring-[#064B50]/10
            "
          >
            <Mail
              size={18}
              className="text-[#C8942E]"
            />

            <input
              id="login-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              className="
                h-full
                min-w-0
                flex-1
                bg-transparent
                text-[14px]
                text-[#263F41]
                outline-none
                placeholder:text-[#91a0a1]
              "
            />
          </div>
        </div>

        {/* PASSWORD */}

        <div>
          <label
            htmlFor="login-password"
            className="
              mb-2
              block
              text-[13px]
              font-semibold
              text-[#263F41]
            "
          >
            Password
          </label>

          <div
            className="
              flex
              h-[54px]
              items-center
              gap-3
              rounded-xl
              border
              border-[#dce7e6]
              bg-[#fbfcfc]
              px-4

              focus-within:border-[#064B50]
              focus-within:bg-white
              focus-within:ring-2
              focus-within:ring-[#064B50]/10
            "
          >
            <LockKeyhole
              size={18}
              className="text-[#C8942E]"
            />

            <input
              id="login-password"
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              autoComplete="current-password"
              className="
                h-full
                min-w-0
                flex-1
                bg-transparent
                text-[14px]
                text-[#263F41]
                outline-none
                placeholder:text-[#91a0a1]
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  (prev) => !prev
                )
              }
              aria-label={
                showPassword
                  ? "Hide password"
                  : "Show password"
              }
              className="
                text-[#748687]
                transition
                hover:text-[#064B50]
              "
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>

          {/* FORGOT PASSWORD
              Password field BELOW
              Login button ABOVE
          */}

          <div
            className="
              mt-3
              flex
              justify-end
            "
          >
            <button
              type="button"
              onClick={
                handleForgot
              }
              className="
                text-[13px]
                font-semibold
                text-[#C8942E]
                transition
                hover:text-[#064B50]
              "
            >
              Forgot Password?
            </button>
          </div>
        </div>

        {/* LOGIN */}

        <button
          type="submit"
          disabled={loading}
          className="
            flex
            h-[52px]
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#064B50]
            text-[14px]
            font-semibold
            text-white
            transition-all
            duration-200
            hover:bg-[#0B6268]

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <LogIn size={18} />

          {loading
            ? "Logging in..."
            : "Login"}
        </button>
      </form>

      {/* REGISTER */}

      <div
        className="
          mt-7
          border-t
          border-[#e5eceb]
          pt-6
          text-center
        "
      >
        <p
          className="
            text-[15px]
            text-[#2c2d2d]
          "
        >
          Don't have an account?{" "}

          <button
            type="button"
            onClick={
              handleRegister
            }
            className="
              font-semibold
              text-[#C8942E]
              transition
              hover:text-[#064B50]
            "
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );
}