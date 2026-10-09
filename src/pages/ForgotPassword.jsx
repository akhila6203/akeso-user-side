import {
  useState,
} from "react";

import {
  ArrowLeft,
  KeyRound,
  Mail,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  forgotPassword,
} from "../services/authService";

export default function ForgotPassword({
  embedded = false,
  onLogin,
  onResetPassword,
}) {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError(
        "Please enter your email address."
      );

      return;
    }

    try {
      setLoading(true);
      setError("");

      const data =
        await forgotPassword(
          email.trim()
        );

      if (!data?.token) {
        throw new Error(
          "Unable to continue with password reset."
        );
      }

      if (embedded) {
        onResetPassword?.(
          data.token
        );
      } else {
        navigate(
          `/reset-password?token=${encodeURIComponent(
            data.token
          )}`
        );
      }
    } catch (err) {
      setError(
        err?.message ||
          "Unable to verify this account."
      );
    } finally {
      setLoading(false);
    }
  };

  const goLogin = () => {
    if (embedded) {
      onLogin?.();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={goLogin}
        className="
          mb-7
          inline-flex
          items-center
          gap-2

          text-[13px]
          font-semibold
          text-[#064B50]

          transition

          hover:text-[#C8942E]
        "
      >
        <ArrowLeft size={16} />

        Back to Login
      </button>

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
          Account Recovery
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
          Forgot Password?
        </h1>

        <p
          className="
            mt-3
            text-[15px]
            leading-6
            text-[#2c2d2d]
          "
        >
          Enter your registered email
          address to continue with
          password reset.
        </p>
      </div>

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
        className="mt-8"
      >
        <label
          htmlFor="forgot-email"
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
            id="forgot-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(
                e.target.value
              );

              setError("");
            }}
            placeholder="Enter your registered email"
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

        <button
          type="submit"
          disabled={loading}
          className="
            mt-6

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

            transition

            hover:bg-[#0B6268]

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <KeyRound size={18} />

          {loading
            ? "Checking..."
            : "Continue"}
        </button>
      </form>
    </div>
  );
}