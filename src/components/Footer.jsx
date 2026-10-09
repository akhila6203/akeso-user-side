import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";


export default function Footer() {

  /* =========================================================
     CONTACT DETAILS
     Change these with your actual details
  ========================================================= */

  const phoneNumber = "+919885106619";
  const displayPhone = "+91 9885106619";

  // WhatsApp number: country code + number
  // Do not use +, spaces or -
  const whatsappNumber = "919885106619";

  const email = "care@akesoglobal.com";


  /* =========================================================
     QUICK LINKS
  ========================================================= */

  const quickLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Our Doctors",
      path: "/doctors",
    },
    {
      name: "Specialities",
      path: "/specialities",
    },
    {
      name: "Treatments",
      path: "/treatments",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];


  /* =========================================================
     PATIENT RESOURCES
  ========================================================= */

  const patientResources = [
    {
      name: "Health Library",
      path: "/health-library",
    },
    {
      name: "Blogs",
      path: "/health-library/blogs",
    },
    {
      name: "Videos",
      path: "/health-library/videos",
    },
    {
      name: "Case Studies",
      path: "/health-library/case-studies",
    },
    {
      name: "Technologies",
      path: "/technologies",
    },
    {
      name: "International Patients",
      path: "/international-patients",
    },
  ];


  return (
    <>
      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer
        className="
          mt-16
          bg-[#07565b]
          text-white
        "
      >

        {/* =================================================
            MAIN FOOTER
        ================================================== */}

        <div
          className="
            mx-auto
            grid
            max-w-[1450px]
            grid-cols-1
            gap-10
            px-5
            py-12

            sm:grid-cols-2
            sm:px-8

            lg:grid-cols-[1.35fr_0.85fr_1fr_1.15fr]
            lg:gap-12
            lg:px-10
            lg:py-14

            xl:px-8
          "
        >

          {/* =================================================
              ABOUT
          ================================================== */}

          <div>

            {/* LOGO */}

            <Link
              to="/"
              aria-label="Akeso Global Medical Home"
              className="inline-block"
            >
              <img
                src="/logo1.png"
                alt="Akeso Global Medical"
                className="
                  mb-5
                  h-auto
                  w-44
                  object-contain

                  sm:w-58
                  lg:w-62
                "
              />
            </Link>


            {/* DESCRIPTION */}

            <p
              className="
                max-w-[350px]
                text-[15px]
                leading-7
                text-white

                sm:text-[16px]
              "
            >
              Healing Beyond Borders. Connecting patients
              with trusted doctors, advanced treatments and
              coordinated healthcare support.
            </p>

            {/*
              IMPORTANT:

              Phone and email removed from here.

              They are displayed ONLY inside
              the Contact Us section.
            */}

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================== */}

          <FooterColumn
            title="Quick Links"
            links={quickLinks}
          />


          {/* =================================================
              PATIENT RESOURCES
          ================================================== */}

          <FooterColumn
            title="Patient Resources"
            links={patientResources}
          />


          {/* =================================================
              CONTACT US
          ================================================== */}

          <div>

            <FooterTitle title="Contact Us" />


            <div className="space-y-5">

              {/* PHONE */}

              <a
                href={`tel:${phoneNumber}`}
                className="
                  group
                  flex
                  items-start
                  gap-3
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    text-[#f1c75b]

                    transition
                    duration-300

                    group-hover:bg-[#f1c75b]
                    group-hover:text-[#07565b]
                  "
                >
                  <Phone
                    size={18}
                    strokeWidth={2}
                  />
                </span>


                <div>

                  <span
                    className="
                      mb-1
                      block
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-white/85
                    "
                  >
                    Mobile
                  </span>


                  <span
                    className="
                      text-[16px]
                      text-white

                      transition
                      group-hover:text-white
                    "
                  >
                    {displayPhone}
                  </span>

                </div>

              </a>


              {/* EMAIL */}

              <a
                href={`mailto:${email}`}
                className="
                  group
                  flex
                  items-start
                  gap-3
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    text-[#f1c75b]

                    transition
                    duration-300

                    group-hover:bg-[#f1c75b]
                    group-hover:text-[#07565b]
                  "
                >
                  <Mail
                    size={18}
                    strokeWidth={2}
                  />
                </span>


                <div className="min-w-0">

                  <span
                    className="
                      mb-1
                      block
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-white/85
                    "
                  >
                    Email
                  </span>


                  <span
                    className="
                      break-all
                      text-[16px]
                      text-white

                      transition
                      group-hover:text-white
                    "
                  >
                    {email}
                  </span>

                </div>

              </a>


              {/* ADDRESS */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                "
              >

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-white/10
                    text-[#f1c75b]
                  "
                >
                  <MapPin
                    size={19}
                    strokeWidth={2}
                  />
                </span>


                <div>

                  <span
                    className="
                      mb-1
                      block
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.08em]
                      text-white/85
                    "
                  >
                    Address
                  </span>


                  <p
                    className="
                      max-w-[260px]
                      text-[16px]
                      leading-6
                      text-white
                    "
                  >
                    Hyderabad, Telangana, India
                  </p>

                </div>

              </div>

            </div>


            {/* CONTACT BUTTON */}

            <Link
              to="/contact"
              className="
                mt-7
                inline-flex
                items-center
                gap-2

                rounded-lg
                bg-[#f1c75b]

                px-5
                py-2.5

                text-[14px]
                font-semibold
                text-[#06484d]

                transition
                duration-300

                hover:-translate-y-0.5
                hover:bg-white
                hover:text-[#06484d]
              "
            >
              Contact Us

              <ChevronRight size={17} />

            </Link>

          </div>

        </div>


        {/* =================================================
            BOTTOM COPYRIGHT
        ================================================== */}

        <div
          className="
            border-t
            border-white/15
          "
        >

          <div
            className="
              mx-auto
              flex
              max-w-[1450px]
              flex-col
              items-center
              justify-between
              gap-2

              px-5
              py-5

              text-center
              text-[12px]
              text-white

              sm:px-8
              sm:text-[15px]

              md:flex-row
              md:text-left

              lg:px-10
              xl:px-8
            "
          >

            <p>
              © {new Date().getFullYear()} Akeso Global Medical
              Services. All rights reserved.
            </p>


            <p className="text-white">
              Healing Beyond Borders
            </p>

          </div>

        </div>

      </footer>


      {/* =====================================================
          FLOATING BUTTONS
      ====================================================== */}

      <div
        className="
          fixed
          bottom-5
          right-4
          z-[9999]

          flex
          flex-col
          items-center
          gap-3

          sm:bottom-6
          sm:right-6
        "
      >

        {/* =================================================
            CALL BUTTON
            Only icon - "Call Us" text removed
        ================================================== */}

        <a
          href={`tel:${phoneNumber}`}
          aria-label="Call Akeso Global Medical"
          title="Call"
          className="
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center

            rounded-full

            border-[3px]
            border-white

            bg-[#07565b]
            text-white

            shadow-[0_5px_18px_rgba(0,0,0,0.25)]

            transition
            duration-300

            hover:-translate-y-1
            hover:bg-[#06484d]

            sm:h-[58px]
            sm:w-[58px]
          "
        >
          <Phone
            size={23}
            strokeWidth={2.2}
          />
        </a>


        {/* =================================================
            WHATSAPP BUTTON
        ================================================== */}

        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            "Hello Akeso Global Medical, I would like to know more about your healthcare services."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
          className="
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center

            rounded-full

            border-[3px]
            border-white

            bg-[#25D366]
            text-white

            shadow-[0_5px_20px_rgba(0,0,0,0.25)]

            transition
            duration-300

            hover:-translate-y-1
            hover:bg-[#1fbd59]

            sm:h-[58px]
            sm:w-[58px]
          "
        >

          {/* OFFICIAL-STYLE WHATSAPP ICON */}

          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="
              h-[27px]
              w-[27px]

              sm:h-[30px]
              sm:w-[30px]
            "
            fill="currentColor"
          >
            <path
              d="
                M16.04 3
                C9.42 3 4.03 8.36 4.03 14.96
                c0 2.63.86 5.08 2.33 7.06
                L3.3 29
                l7.22-2.98
                a12.02 12.02 0 0 0 5.52 1.34
                h.01
                c6.61 0 12-5.36 12-11.96
                C28.05 8.37 22.66 3 16.04 3

                m0 21.96
                h-.01
                a9.6 9.6 0 0 1-4.89-1.34
                l-.35-.2
                -4.28 1.77
                1.81-4.16
                -.23-.36
                a9.51 9.51 0 0 1-1.47-5.1
                c0-5.28 4.31-9.57 9.61-9.57
                2.56 0 4.97 1 6.78 2.8
                a9.48 9.48 0 0 1 2.82 6.76
                c0 5.28-4.31 9.58-9.79 9.4

                m5.27-7.18
                c-.29-.15-1.71-.84-1.97-.94
                -.26-.1-.45-.15-.64.15
                -.19.29-.74.94-.9 1.13
                -.17.2-.33.22-.62.08
                -.29-.15-1.23-.45-2.34-1.44
                -.87-.77-1.46-1.72-1.63-2.01
                -.17-.29-.02-.45.13-.59
                .13-.13.29-.34.43-.51
                .15-.17.2-.29.29-.49
                .1-.19.05-.36-.02-.51
                -.07-.15-.64-1.55-.88-2.12
                -.23-.56-.47-.48-.64-.49
                h-.55
                c-.19 0-.5.07-.76.36
                -.26.29-1 1-.1 2.44
                0 1.44 1.05 2.83 1.2 3.03
                .14.19 2.06 3.15 5 4.42
                .7.3 1.24.48 1.67.62
                .7.22 1.33.19 1.83.12
                .56-.08 1.71-.7 1.95-1.37
                .24-.67.24-1.25.17-1.37
                -.07-.12-.26-.19-.55-.34
              "
            />
          </svg>

        </a>

      </div>
    </>
  );
}



/* =========================================================
   FOOTER TITLE
========================================================= */

function FooterTitle({ title }) {

  return (
    <div className="mb-5">

      <h3
        className="
          text-[17px]
          font-bold
          text-[#f1c75b]

          sm:text-[18px]
        "
      >
        {title}
      </h3>


      <div
        className="
          mt-2
          h-[2px]
          w-10
          rounded-full
          bg-[#f1c75b]
        "
      />

    </div>
  );
}



/* =========================================================
   FOOTER LINKS
========================================================= */

function FooterColumn({
  title,
  links,
}) {

  return (
    <div>

      <FooterTitle title={title} />


      <div className="space-y-3">

        {links.map((link) => (

          <Link
            key={link.name}
            to={link.path}
            className="
              group
              flex
              w-fit
              items-center
              gap-2

              text-[14px]
              text-white

              transition
              duration-300

              hover:translate-x-1
              hover:text-white

              sm:text-[15px]
            "
          >

            <ChevronRight
              size={14}
              className="
                shrink-0
                text-[#f1c75b]

                transition
                duration-300

                group-hover:translate-x-0.5
              "
            />

            {link.name}

          </Link>

        ))}

      </div>

    </div>
  );
}