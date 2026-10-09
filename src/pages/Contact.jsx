import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
      Backend currently ledu.

      Later backend vachaka ikkada
      Contact API connect cheyyachu.
    */

    console.log("Contact Form:", formData);
  };

  return (
    <>
      {/* =====================================
          CONTACT HERO / BREADCRUMB
      ====================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#064B50]
        "
      >
        {/* DECORATION */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-[320px]
            w-[320px]
            rounded-full
            bg-[#C8942E]/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-28
            -left-20
            h-[280px]
            w-[280px]
            rounded-full
            bg-white/[0.04]
            blur-3xl
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-[1350px]
            px-5
            py-6
            text-center

            sm:px-5
            sm:py-8

            md:py-10

            lg:px-10
          "
        >
          {/* BREADCRUMB */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              text-[13px]
              font-medium
            "
          >
            <Link
              to="/"
              className="
                text-white/75
                transition-colors
                hover:text-[#E6B956]
              "
            >
              Home
            </Link>

            <ArrowRight
              size={13}
              className="text-[#E6B956]"
            />

            <span className="text-white">
              Contact Us
            </span>
          </div>

          {/* TITLE */}

          <h1
            className="
              mt-5
              text-[34px]
              font-semibold
              leading-tight
              text-white

              sm:text-[42px]

              md:text-[50px]
            "
          >
            Contact Us
          </h1>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4
              max-w-[680px]
              text-[14px]
              leading-7
              text-white/75

              sm:text-[15px]
            "
          >
            Connect with Akeso Global Medical
            Services for healthcare support,
            consultations and patient assistance.
          </p>
        </div>

        {/* GOLD BOTTOM LINE */}

        {/* <div
          className="
            h-[4px]
            bg-gradient-to-r
            from-[#064B50]
            via-[#C8942E]
            to-[#064B50]
          "
        /> */}
      </section>

      {/* =====================================
          MAIN CONTACT SECTION
      ====================================== */}

      <section
        className="
          bg-white
          py-14

          md:py-20
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1350px]
            gap-10
            px-5

            sm:px-7

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-14
            lg:px-10
          "
        >
          {/* =================================
              LEFT SIDE
          ================================== */}

          <div>
            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#C8942E]
              "
            >
              Contact & Support
            </p>

            <h2
              className="
                mt-3
                max-w-[520px]
                text-[29px]
                font-semibold
                leading-[1.2]
                text-[#064B50]

                sm:text-[34px]

                md:text-[38px]
              "
            >
              We&apos;re Here to Support
              Your Healthcare Journey
            </h2>

            <p
              className="
                mt-5
                max-w-[560px]
                text-[16px]
                leading-7
                text-[#2d2e2e]

                sm:text-[16px]
              "
            >
              Reach our team for medical
              assistance, consultations,
              international patient support
              and general enquiries.
            </p>

            {/* =================================
                CONTACT DETAILS
            ================================== */}

            <div
              className="
                mt-8
                grid
                gap-4

                sm:grid-cols-2

                lg:grid-cols-1

                xl:grid-cols-2
              "
            >
              {/* EMAIL */}

              <ContactCard
                icon={Mail}
                label="Email"
                value="akesoglobalhealth@gmail.com"
                href="mailto:akesoglobalhealth@gmail.com"
              />

              {/* PHONE */}

              <ContactCard
                icon={Phone}
                label="Call"
                value="+91 9885106619"
                href="tel:+919885106619"
              />

              {/* WHATSAPP */}

              <ContactCard
                icon={MessageCircle}
                label="WhatsApp / Call"
                value="+91 9885106619"
                href="https://wa.me/919885106619"
              />

              {/* INSTAGRAM */}

              <ContactCard
                icon={InstagramIcon}
                label="Instagram"
                value="@akesoglobalhealth"
              />
            </div>

            {/* =================================
                ADDRESS

                Current official address
                not provided.
            ================================== */}

            <div
              className="
                mt-5
                flex
                gap-4
                rounded-2xl
                border
                border-[#dce9e7]
                bg-[#f8fbfa]
                p-5
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#eaf5f4]
                  text-[#C8942E]
                "
              >
                <MapPin size={21} />
              </div>

              <div>
                <p
                  className="
                    text-[16px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#C8942E]
                  "
                >
                  Address
                </p>

                <p
                  className="
                    mt-1
                    text-[16px]
                    leading-6
                    text-[#343535]
                  "
                >
                  Official location details
                  will be updated here.
                </p>
              </div>
            </div>

            {/* =================================
                SOCIAL MEDIA
            ================================== */}

            <div
              className="
                mt-8
                border-t
                border-[#e1ebea]
                pt-7
              "
            >
              <p
                className="
                  text-[16px]
                  font-semibold
                  text-[#263F41]
                "
              >
                Connect With Us
              </p>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >
                {/* INSTAGRAM */}

                <SocialButton
                  icon={InstagramIcon}
                  label="Instagram"
                  href="#"
                />

                {/* FACEBOOK */}

                <SocialButton
                  icon={FacebookIcon}
                  label="Facebook"
                  href="#"
                />

                {/* LINKEDIN */}

                <SocialButton
                  icon={LinkedInIcon}
                  label="LinkedIn"
                  href="#"
                />

                {/* WHATSAPP */}

                <SocialButton
                  icon={WhatsAppIcon}
                  label="WhatsApp"
                  href="https://wa.me/919885106619"
                />
              </div>

              <p
                className="
                  mt-4
                  text-[14px]
                  leading-5
                  text-[#3c3c3c]
                "
              >
                Official Facebook, LinkedIn and
                Instagram profile links can be
                connected here when available.
              </p>
            </div>
          </div>

          {/* =================================
              RIGHT SIDE FORM
          ================================== */}

          <div>
            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#C8942E]
              "
            >
              Send An Enquiry
            </p>

            <h2
              className="
                mt-3
                text-[29px]
                font-semibold
                leading-[1.2]
                text-[#064B50]

                sm:text-[34px]

                md:text-[38px]
              "
            >
              Tell Us How We Can Help You
            </h2>

            <form
              onSubmit={handleSubmit}
              className="
                mt-7
                rounded-[22px]
                border
                border-[#dce9e7]
                bg-white
                p-5

                shadow-[0_12px_40px_rgba(6,75,80,0.07)]

                sm:p-7

                md:p-8
              "
            >
              <div
                className="
                  grid
                  gap-5

                  sm:grid-cols-2
                "
              >
                {/* NAME */}

                <FormField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />

                {/* PHONE */}

                <FormField
                  label="Mobile Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter mobile number"
                  required
                />

                {/* EMAIL */}

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  required
                />

                {/* SUBJECT */}

                <FormField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                />
              </div>

              {/* MESSAGE */}

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="
                    mb-2
                    block
                    text-[13px]
                    font-semibold
                    text-[#263F41]
                  "
                >
                  Message

                  <span className="text-[#C8942E]">
                    {" "}*
                  </span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here"
                  className="
                    w-full
                    resize-none

                    rounded-xl

                    border
                    border-[#d6e3e1]

                    bg-[#fbfdfd]

                    px-4
                    py-3.5

                    text-[14px]
                    text-[#263F41]

                    outline-none
                    transition

                    placeholder:text-[#91a1a2]

                    focus:border-[#C8942E]
                    focus:bg-white
                    focus:ring-2
                    focus:ring-[#C8942E]/10
                  "
                />
              </div>

              {/* SUBMIT BUTTON */}

              <button
                type="submit"
                className="
                  group

                  mt-6

                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-[#064B50]

                  px-6

                  text-[14px]
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:bg-[#0B6268]

                  sm:w-auto
                "
              >
                <Send size={16} />

                Send Enquiry

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================
          LOCATION SECTION
      ====================================== */}

      <section
        className="
          bg-[#eef6f5]
          py-14

          md:py-20
        "
      >
        <div
          className="
            mx-auto
            max-w-[1350px]
            px-5

            sm:px-7

            lg:px-10
          "
        >
          <div className="mb-7 text-center">
            <p
              className="
                text-[14px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#C8942E]
              "
            >
              Our Location
            </p>

            <h2
              className="
                mt-2
                text-[29px]
                font-semibold
                text-[#064B50]

                sm:text-[34px]

                md:text-[38px]
              "
            >
              Find Us
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-[600px]
                text-[16px]
                leading-6
                text-[#2d2e2e]
              "
            >
              Our official location and
              interactive map will be displayed
              here once the address is confirmed.
            </p>
          </div>

          {/* =================================
              MAP PLACEHOLDER
          ================================== */}

          <div
            className="
              flex
              min-h-[330px]
              items-center
              justify-center

              overflow-hidden

              rounded-[22px]

              border
              border-[#d7e7e5]

              bg-white

              shadow-[0_8px_30px_rgba(6,75,80,0.06)]

              md:min-h-[400px]
            "
          >
            <div
              className="
                px-6
                text-center
              "
            >
              <div
                className="
                  mx-auto

                  flex
                  h-16
                  w-16
                  items-center
                  justify-center

                  rounded-full

                  bg-[#eaf5f4]

                  text-[#C8942E]
                "
              >
                <MapPin size={29} />
              </div>

              <h3
                className="
                  mt-5
                  text-[19px]
                  font-semibold
                  text-[#064B50]
                "
              >
                Location Map
              </h3>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-[420px]
                  text-[15px]
                  leading-6
                  text-[#303131]
                "
              >
                Map will be added after the
                official Akeso address is
                confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================
   CONTACT CARD
========================================= */

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}) {
  const content = (
    <>
      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center

          rounded-xl

          bg-[#eaf5f4]

          text-[#C8942E]

          transition-all
          duration-300

          group-hover:bg-[#064B50]
          group-hover:text-white
        "
      >
        <Icon size={20} />
      </div>

      <div className="min-w-0">
        <p
          className="
            text-[14px]
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[#C8942E]
          "
        >
          {label}
        </p>

        <p
          className="
            mt-1
            break-words

            text-[15px]
            font-semibold
            leading-5
            text-[#263F41]
          "
        >
          {value}
        </p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={
          href.startsWith("http")
            ? "_blank"
            : undefined
        }
        rel={
          href.startsWith("http")
            ? "noreferrer"
            : undefined
        }
        className="
          group

          flex
          min-h-[95px]
          items-center
          gap-4

          rounded-2xl

          border
          border-[#dce9e7]

          bg-white

          p-5

          transition-all
          duration-300

          hover:-translate-y-0.5
          hover:border-[#C8942E]/50

          hover:shadow-[0_10px_28px_rgba(6,75,80,0.08)]
        "
      >
        {content}
      </a>
    );
  }

  return (
    <div
      className="
        group

        flex
        min-h-[95px]
        items-center
        gap-4

        rounded-2xl

        border
        border-[#dce9e7]

        bg-white

        p-5
      "
    >
      {content}
    </div>
  );
}

/* =========================================
   SOCIAL BUTTON
========================================= */

function SocialButton({
  icon: Icon,
  label,
  href = "#",
}) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={
        href.startsWith("http")
          ? "_blank"
          : undefined
      }
      rel={
        href.startsWith("http")
          ? "noreferrer"
          : undefined
      }
      className="
        group

        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center

        rounded-full

        border
        border-[#d6e5e3]

        bg-[#eef6f5]

        text-[#064B50]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#C8942E]
        hover:bg-[#064B50]
        hover:text-white
      "
    >
      <Icon
        size={19}
        className="
          h-[19px]
          w-[19px]
        "
      />
    </a>
  );
}

/* =========================================
   FORM FIELD
========================================= */

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          mb-2
          block
          text-[13px]
          font-semibold
          text-[#263F41]
        "
      >
        {label}

        {required && (
          <span className="text-[#C8942E]">
            {" "}*
          </span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          min-h-[50px]
          w-full

          rounded-xl

          border
          border-[#d6e3e1]

          bg-[#fbfdfd]

          px-4

          text-[16px]
          text-[#263F41]

          outline-none

          transition

          placeholder:text-[#91a1a2]

          focus:border-[#C8942E]
          focus:bg-white
          focus:ring-2
          focus:ring-[#C8942E]/10
        "
      />
    </div>
  );
}

/* =========================================
   CUSTOM SOCIAL MEDIA ICONS

   No lucide-react dependency for:
   Instagram
   Facebook
   LinkedIn
   WhatsApp
========================================= */

/* INSTAGRAM */

function InstagramIcon({
  size = 20,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

/* FACEBOOK */

function FacebookIcon({
  size = 20,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        d="
          M13.5 22
          V13
          H16.5
          L17 10
          H13.5
          V8.1
          C13.5 7.2 13.8 6.5 15.2 6.5
          H17
          V3.8
          C16.7 3.8 15.6 3.7 14.4 3.7
          C11.8 3.7 10 5.3 10 8.2
          V10
          H7
          V13
          H10
          V22
          H13.5
          Z
        "
      />
    </svg>
  );
}

/* LINKEDIN */

function LinkedInIcon({
  size = 20,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        d="
          M6.5 8.3
          H3.3
          V20
          H6.5
          V8.3
          Z

          M4.9 3
          C3.8 3 3 3.8 3 4.9
          C3 6 3.8 6.8 4.9 6.8
          C6 6.8 6.8 6 6.8 4.9
          C6.8 3.8 6 3 4.9 3
          Z

          M20.8 13.3
          C20.8 9.8 18.9 8 16.3 8
          C14.5 8 13.3 9 12.7 10
          V8.3
          H9.5
          V20
          H12.8
          V14.2
          C12.8 12.7 13.1 11.3 15.3 11.3
          C17.4 11.3 17.5 13.1 17.5 14.3
          V20
          H20.8
          V13.3
          Z
        "
      />
    </svg>
  );
}

/* WHATSAPP */

function WhatsAppIcon({
  size = 20,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="
          M20.5 11.7
          C20.5 16.4 16.7 20.2 12 20.2
          C10.5 20.2 9 19.8 7.8 19.1
          L3.5 20.3
          L4.7 16.2
          C3.9 14.9 3.5 13.3 3.5 11.7
          C3.5 7 7.3 3.2 12 3.2
          C16.7 3.2 20.5 7 20.5 11.7
          Z
        "
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="
          M9 7.8
          C9.2 7.6 9.5 7.6 9.7 8
          L10.6 10
          C10.7 10.3 10.7 10.5 10.5 10.7
          L9.9 11.4
          C10.5 12.8 11.6 13.9 13 14.5
          L13.7 13.8
          C13.9 13.6 14.1 13.6 14.4 13.7
          L16.4 14.7
          C16.7 14.8 16.8 15.1 16.7 15.4
          C16.5 16.3 15.6 16.9 14.7 16.9
          C11 16.7 8 13.8 7.7 10.1
          C7.7 9.2 8.2 8.3 9 7.8
          Z
        "
        fill="currentColor"
      />
    </svg>
  );
}