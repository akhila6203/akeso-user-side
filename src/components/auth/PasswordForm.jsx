import { useState } from "react";

import {
  Eye,
  EyeOff,
  LockKeyhole,
} from "lucide-react";

export default function PasswordForm({
  title,
  subtitle = "Akeso Global Medical Services",
  description,
  buttonText,
  onSubmit,
  loading = false,
  error = "",
  success = "",
  embedded = false,
}) {
  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirm, setShowConfirm] =
    useState(false);

  const [localError, setLocalError] =
    useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLocalError("");

    if (!password) {
      setLocalError(
        "Please enter your new password."
      );
      return;
    }

    if (password.length < 6) {
      setLocalError(
        "Password must contain at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setLocalError(
        "Passwords do not match."
      );
      return;
    }

    await onSubmit?.(password);
  };

  return (
    <main
      className={
        embedded
          ? "w-full bg-transparent"
          : `
              flex
              min-h-[75vh]
              items-center
              justify-center
              bg-[#f5fafa]
              px-4
              py-14
            `
      }
    >
      <div
        className={
          embedded
            ? "w-full"
            : `
                w-full
                max-w-[460px]
                rounded-[20px]
                bg-white
                p-8
                shadow-[0_15px_45px_rgba(6,75,80,0.10)]
              `
        }
      >
        <div
          className={
            embedded
              ? "text-left"
              : "text-center"
          }
        >
          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#C8942E]
            "
          >
            {subtitle}
          </p>

          <h1
            className="
              mt-3
              text-[30px]
              font-bold
              text-[#064B50]
            "
          >
            {title}
          </h1>

          <p
            className="
              mt-2
              text-[16px]
              leading-6
              text-black
            "
          >
            {description}
          </p>
        </div>

        {(localError || error) && (
          <div
            className="
              mt-6
              rounded-lg
              border
              border-red-200
              bg-red-50
              px-4
              py-3
              text-[13px]
              text-red-600
            "
          >
            {localError || error}
          </div>
        )}

        {success && (
          <div
            className="
              mt-6
              rounded-lg
              border
              border-emerald-200
              bg-emerald-50
              px-4
              py-3
              text-[13px]
              text-emerald-700
            "
          >
            {success}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          <PasswordInput
            label="New Password"
            value={password}
            setValue={setPassword}
            show={showPassword}
            setShow={setShowPassword}
            placeholder="Enter new password"
          />

          <PasswordInput
            label="Confirm Password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            show={showConfirm}
            setShow={setShowConfirm}
            placeholder="Confirm new password"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              flex
              h-[54px]
              w-full
              items-center
              justify-center
              rounded-xl
              bg-[#064B50]
              text-[15px]
              font-semibold
              text-white
              transition
              hover:bg-[#0B6B70]
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >
            {loading
              ? "Please wait..."
              : buttonText}
          </button>
        </form>
      </div>
    </main>
  );
}

function PasswordInput({
  label,
  value,
  setValue,
  show,
  setShow,
  placeholder,
}) {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-[13px]
          font-semibold
          text-[#173f42]
        "
      >
        {label}
      </label>

      <div
        className="
          flex
          h-[56px]
          items-center
          gap-3
          rounded-xl
          border
          border-[#dce5e5]
          bg-white
          px-4

          focus-within:border-[#064B50]
          focus-within:ring-2
          focus-within:ring-[#064B50]/10
        "
      >
        <LockKeyhole
          size={19}
          className="shrink-0 text-[#C8942E]"
        />

        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) =>
            setValue(e.target.value)
          }
          placeholder={placeholder}
          autoComplete="new-password"
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
            setShow((prev) => !prev)
          }
          className="
            shrink-0
            text-[#064B50]
            transition
            hover:text-[#E85C91]
          "
        >
          {show ? (
            <EyeOff size={18} />
          ) : (
            <Eye size={18} />
          )}
        </button>
      </div>
    </div>
  );
}