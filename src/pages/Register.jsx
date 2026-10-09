import { useState } from "react";

import {
  CheckCircle2,
  Mail,
  Phone,
  UserRound,
  UserPlus,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  registerUser,
} from "../services/authService";

export default function Register({
  embedded = false,
  onLogin,
}) {
  const navigate = useNavigate();

  const [form, setForm] =
    useState({
      name: "",
      email: "",
      phone: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState(false);

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

    if (!form.name.trim()) {
      setError(
        "Please enter your full name."
      );
      return;
    }

    if (!form.email.trim()) {
      setError(
        "Please enter your email address."
      );
      return;
    }

    if (!form.phone.trim()) {
      setError(
        "Please enter your mobile number."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      await registerUser({
        name:
          form.name.trim(),

        email:
          form.email.trim(),

        phone:
          form.phone.trim(),
      });

      /*
        IMPORTANT:

        Do NOT open Set Password here.

        Backend sends activation email.
        User must click the link from email.
      */

      setSuccess(true);
    } catch (err) {
      setError(
        err?.message ||
          "Unable to create account."
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

  if (success) {
    return (
      <div className="w-full">
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            bg-[#EEF6F5]
            text-[#064B50]
          "
        >
          <CheckCircle2
            size={28}
          />
        </div>

        <p
          className="
            mt-7
            text-[11px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#C8942E]
          "
        >
          Registration Successful
        </p>

        <h1
          className="
            mt-2
            text-[28px]
            font-bold
            leading-tight
            text-[#064B50]
          "
        >
          Check your email
        </h1>

        <p
          className="
            mt-4
            text-[15px]
            leading-7
            text-[#222323]
          "
        >
          Your account has been
          created successfully. We
          sent a password activation
          link to
        </p>

        <p
          className="
            mt-2
            break-all
            text-[14px]
            font-semibold
            text-[#064B50]
          "
        >
          {form.email}
        </p>

        <div
          className="
            mt-6
            rounded-xl
            border
            border-[#d7e6e4]
            bg-[#F6FAF9]
            px-4
            py-4
          "
        >
          <p
            className="
              text-[14px]
              leading-6
              text-[#232424]
            "
          >
            Open the email and click{" "}
            <strong
              className="
                text-[#C8942E]
              "
            >
              Set Password
            </strong>{" "}
            to activate your account.
          </p>
        </div>

        <button
          type="button"
          onClick={goLogin}
          className="
            mt-7
            h-[52px]
            w-full
            rounded-xl
            bg-[#064B50]
            text-[14px]
            font-semibold
            text-white
            transition
            hover:bg-[#0B6268]
          "
        >
          Back to Login
        </button>
      </div>
    );
  }

  return (
    <div className="w-full">
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
          New Patient
        </p>

        <h1
          className="
            mt-2
            text-[29px]
            font-bold
            text-[#064B50]
          "
        >
          Create your account
        </h1>

        <p
          className="
            mt-3
            text-[15px]
            leading-6
            text-[#272828]
          "
        >
          Enter your details to create
          your Akeso patient account.
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
        className="mt-8 space-y-5"
      >
        <InputField
          label="Full Name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          Icon={UserRound}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          Icon={Mail}
        />

        <InputField
          label="Mobile Number"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your mobile number"
          Icon={Phone}
        />

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
            transition
            hover:bg-[#0B6268]

            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <UserPlus size={18} />

          {loading
            ? "Creating Account..."
            : "Create Account"}
        </button>
      </form>

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
            text-[#212222]
          "
        >
          Already have an account?{" "}

          <button
            type="button"
            onClick={goLogin}
            className="
              font-semibold
              text-[#C8942E]
              hover:text-[#064B50]
            "
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}

function InputField({
  label,
  Icon,
  ...props
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-[13px]
          font-semibold
          text-[#263F41]
        "
      >
        {label}
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
        <Icon
          size={18}
          className="text-[#C8942E]"
        />

        <input
          {...props}
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
  );
}