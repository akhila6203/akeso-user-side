import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate, } from "react-router-dom";
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
} from "lucide-react";

import {
  LogIn,
  UserRound,
} from "lucide-react";

import {
  getUser,
  isLoggedIn,
} from "../utils/auth";

import {
  specialties,
  healthLibrary,
  knowledgeCenter,
  services,
  international,
} from "../data/navigation";

import CallbackModal from "./CallbackModal";


function DropdownRow({ item, prefix, onNavigate, directPath = false, }) {
  const Icon = item?.[2];
  const itemPath = directPath
    ? `/${item[1]}`
    : `/${prefix}/${item[1]}`;

  return (
    <Link
      // to={`/${prefix}/${item[1]}`}
      to={itemPath}
      onClick={onNavigate}
      className="
        group
        flex
        items-center
        gap-3
        px-4
        py-[10px]
        bg-white
        border-b
        border-[#e8eeee]
        last:border-b-0
        transition-all
        duration-200
        hover:bg-[#edf7f6]
      "
    >
      {/* ICON */}
      <div
        className="
          w-[25px]
          h-[25px]
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        {Icon && (
          <Icon
            size={17}
            strokeWidth={1.6}
            className="
              text-[#C8942E]
              transition-colors
              duration-200
              group-hover:text-[#C8942E]
            "
          />
        )}
      </div>

      {/* TEXT */}
      <span
        className="
          text-[14px]
          leading-[20px]
          font-normal
          text-[#536466]
          transition-colors
          duration-200
          group-hover:text-[#064B50]
        "
      >
        {item[0]}
      </span>
    </Link>
  );
}

/* =========================================================
   NORMAL DESKTOP DROPDOWN
========================================================= */

function DesktopDropdown({
  items = [],
  prefix,
  viewAllPath,
  viewAllText,
}) {
  return (
    <div
      className="
        absolute
        left-0
        top-full
        pt-[2px]
        z-[150]
      "
    >
      <div
        className="
          w-[260px]
          bg-white
          border
          border-[#e5eceb]
          rounded-b-lg
          rounded-t-sm
          shadow-[0_10px_28px_rgba(6,75,80,0.13)]
          overflow-hidden
        "
      >
        {items.map((item) => (
          <DropdownRow
            key={item[1]}
            item={item}
            prefix={prefix}
          />
        ))}

        {/* VIEW ALL */}
        {viewAllPath && (
          <Link
            to={viewAllPath}
            className="
              group
              flex
              items-center
              justify-between
              gap-2
              px-4
              py-[11px]
              bg-white
              border-t
              border-[#e5eceb]
              text-[14px]
              font-medium
              text-[#064B50]
              transition-all
              duration-200
              hover:bg-[#edf7f6]
            "
          >
            <span>{viewAllText}</span>

            <ChevronRight
              size={15}
              strokeWidth={1.8}
              className="
                text-[#C8942E]
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            />
          </Link>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   HEALTH LIBRARY DESKTOP DROPDOWN
========================================================= */

function HealthLibraryDropdown() {
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);

  return (
    <div
      className="
        absolute
        left-0
        top-full
        pt-[2px]
        z-[150]
      "
    >
      <div
        className="
          relative
          w-[260px]
          bg-white
          border
          border-[#e5eceb]
          rounded-b-lg
          rounded-t-sm
          shadow-[0_10px_28px_rgba(6,75,80,0.13)]
        "
      >
        {healthLibrary.map((item) => {
          const Icon = item?.[2];

          if (item[1] === "knowledge") {
            return (
              <div
                key={item[1]}
                className="relative"
                onMouseEnter={() => setKnowledgeOpen(true)}
                onMouseLeave={() => setKnowledgeOpen(false)}
              >
                <button
                  type="button"
                  onClick={() =>
                    setKnowledgeOpen((prev) => !prev)
                  }
                  className="
                    group
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-[10px]
                    bg-white
                    border-b
                    border-[#e8eeee]
                    transition-all
                    duration-200
                   hover:bg-[#edf7f6]
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      w-[25px]
                      h-[25px]
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    {Icon && (
                      <Icon
                        size={17}
                        strokeWidth={1.6}
                        className="
                          text-[#C8942E]
                          transition-colors
                          group-hover:text-[#C8942E]
                        "
                      />
                    )}
                  </div>

                  {/* TEXT */}

                  <span
                    className="
                      flex-1
                      text-left
                      text-[14px]
                      leading-[20px]
                      font-normal
                      text-[#536466]
                      group-hover:text-[#064B50]
                    "
                  >
                    {item[0]}
                  </span>

                  <ChevronRight
                    size={15}
                    strokeWidth={1.8}
                    className="text-[#C8942E]"
                  />
                </button>


                {knowledgeOpen && (
                  <div
                    className="
                      absolute
                      left-full
                      top-0
                      ml-[2px]
                      w-[220px]
                      bg-white
                      border
                      border-[#e5eceb]
                      rounded-lg
                      shadow-[0_10px_28px_rgba(6,75,80,0.13)]
                      overflow-hidden
                    "
                  >
                    {knowledgeCenter.map((subItem) => (
                      <DropdownRow
                        key={subItem[1]}
                        item={subItem}
                        prefix="health-library"
                      />
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <DropdownRow
              key={item[1]}
              item={item}
              prefix="health-library"
              directPath={true}
            />
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE DROPDOWN ITEM
========================================================= */

function MobileItem({
  item,
  prefix,
  closeMenu,
  directPath = false,
}) {
  const Icon = item?.[2];
   const itemPath = directPath
    ? `/${item[1]}`
    : `/${prefix}/${item[1]}`;

  return (
    <Link
      // to={`/${prefix}/${item[1]}`}
       to={itemPath}
      onClick={closeMenu}
      className="
        group
        flex
        items-center
        gap-3
        px-3
        py-[9px]
        rounded-lg
        transition-colors
        hover:bg-[#edf7f6]
      "
    >
      <div
        className="
          w-7
          h-7
          flex
          items-center
          justify-center
          shrink-0
        "
      >
        {Icon && (
          <Icon
            size={17}
            strokeWidth={1.6}
            className="
              text-[#C8942E]
              group-hover:text-[#C8942E]
            "
          />
        )}
      </div>

      <span
        className="
          text-[14px]
          font-normal
          text-[#536466]
          group-hover:text-[#064B50]
        "
      >
        {item[0]}
      </span>
    </Link>
  );
}

/* =========================================================
   MOBILE ACCORDION
========================================================= */
function MobileAccordion({
  title,
  mainPath,
  children,
  active = false,
  closeMenu,
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#e5eceb]">
      <div
        className="
          relative
          w-full
          flex
          items-center
          justify-between
          py-[14px]
        "
      >
        {/* MAIN HEADING - OPENS MAIN PAGE */}
        <Link
          to={mainPath}
          onClick={closeMenu}
          className={`
            flex-1
            text-left
            text-[15px]
            font-medium
            transition-colors
            duration-200

            ${
              active
                ? "text-[#C8942E]"
                : "text-[#064B50] hover:text-[#C8942E]"
            }
          `}
        >
          {title}
        </Link>

        {/* ARROW ONLY - OPENS/CLOSES DROPDOWN */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen((prev) => !prev);
          }}
          aria-label={`Toggle ${title} menu`}
          className="
            w-9
            h-9
            flex
            items-center
            justify-center
            rounded-lg
            text-[#C8942E]
            transition-colors
            hover:bg-[#edf7f6]
          "
        >
          <ChevronDown
            size={17}
            strokeWidth={1.8}
            className={`
              transition-transform
              duration-300
              ${open ? "rotate-180" : ""}
            `}
          />
        </button>
      </div>

      {open && (
        <div className="pb-3">
          {children}
        </div>
      )}
    </div>
  );
}

/* =========================================================
   MAIN HEADER
========================================================= */

// export default function Header() {
export default function Header({
  onOpenAuth,
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [callbackOpen, setCallbackOpen] = useState(false);

  const [specialityOpen, setSpecialityOpen] =
    useState(false);

  const [healthOpen, setHealthOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [
    internationalOpen,
    setInternationalOpen,
  ] = useState(false);

  const [
    mobileKnowledgeOpen,
    setMobileKnowledgeOpen,
  ] = useState(false);


  const [loggedIn, setLoggedIn] =
  useState(isLoggedIn());

const [currentUser, setCurrentUser] =
  useState(getUser());

useEffect(() => {
  const updateAuth = () => {
    setLoggedIn(isLoggedIn());
    setCurrentUser(getUser());
  };

  window.addEventListener(
    "akeso-auth-change",
    updateAuth
  );

  window.addEventListener(
    "storage",
    updateAuth
  );

  return () => {
    window.removeEventListener(
      "akeso-auth-change",
      updateAuth
    );

    window.removeEventListener(
      "storage",
      updateAuth
    );
  };
}, []);
  /* =======================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* =======================================================
     BODY SCROLL
  ======================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  /* =======================================================
     REUSABLE DESKTOP MENU CLASS
  ======================================================= */

const desktopDropdownClass = (open, active) => `
  relative
  flex
  items-center
  gap-1
  px-3
  2xl:px-4
  py-[10px]
  text-[14px]
  2xl:text-[15px]
  font-medium
  whitespace-nowrap
  transition-colors
  duration-200

  after:absolute
  after:left-3
  after:right-3
  after:bottom-[5px]
  after:h-[2px]
  after:bg-[#C8942E]
  after:origin-left
  after:transition-transform
  after:duration-200

  ${
    open || active
      ? "text-[#064B50] after:scale-x-100"
      : `
        text-[#263F41]
        hover:text-[#064B50]
        after:scale-x-0
        hover:after:scale-x-100
      `
  }
`;
  /* =======================================================
     HEADER
  ======================================================= */

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          bg-white
          border-b
          border-[#e5eceb]
          shadow-[0_3px_16px_rgba(6,75,80,0.06)]
        "
      >
        <div
          className="
            max-w-[1500px]
            mx-auto
            px-4
            sm:px-5
            lg:px-6
            xl:px-7
          "
        >
          <div
            className="
              min-h-[76px]
              lg:min-h-[82px]
              flex
              items-center
              justify-between
              gap-4
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              to="/"
              className="
                flex
                items-center
                shrink-0
              "
            >
              <img
                src="/logo.png"
                alt="Akeso Global Medical Services"
                className="
                  h-[54px]
                  sm:h-[58px]
                  lg:h-[64px]
                  xl:h-[68px]
                  w-auto
                  object-contain
                "
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              className="
                hidden
                xl:flex
                flex-1
                items-center
                justify-center
                gap-0
              "
            >

                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        desktopDropdownClass(false, isActive)
                    }
                    >
                    Home
                </NavLink>
              {/* ===============================================
                  SPECIALITY
              =============================================== */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setSpecialityOpen(true)
                }
                onMouseLeave={() =>
                  setSpecialityOpen(false)
                }
              >
                <Link
                  to="/specialities"
                  className={desktopDropdownClass(
                    specialityOpen,
                    isActive("/special")
                  )}
                >
                  <span>Speciality</span>

                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={`
                      transition-transform
                      duration-200
                      ${
                        specialityOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </Link>

                {specialityOpen && (
                  <DesktopDropdown
                    items={specialties.slice(0, 6)}
                    prefix="speciality"
                    viewAllPath="/specialities"
                    viewAllText="View All Specialities"
                  />
                )}
              </div>

              {/* ===============================================
                  HEALTH LIBRARY
              =============================================== */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setHealthOpen(true)
                }
                onMouseLeave={() =>
                  setHealthOpen(false)
                }
              >
                <Link
                  to="/health-library"
                  className={desktopDropdownClass(
                    healthOpen,
                    isActive("/health-library")
                  )}
                >
                  <span>Health Library</span>

                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={`
                      transition-transform
                      duration-200
                      ${
                        healthOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </Link>

                {healthOpen && (
                  <HealthLibraryDropdown />
                )}
              </div>

              {/* ===============================================
                  OUR DOCTORS
              =============================================== */}
              <button
                  type="button"
                  onClick={() => {
                    if (isLoggedIn()) {
                      navigate("/doctors");
                    } else {
                      navigate(
                        `/login?redirect=${encodeURIComponent(
                          "/doctors"
                        )}`
                      );
                    }
                  }}
                  className={desktopDropdownClass(
                    false,
                    isActive("/doctors")
                  )}
                >
                  Our Doctors
                </button>
              {/* ===============================================
                  SERVICES
              =============================================== */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setServicesOpen(true)
                }
                onMouseLeave={() =>
                  setServicesOpen(false)
                }
              >
                <Link
                  to="/services"
                  className={desktopDropdownClass(
                    servicesOpen,
                    isActive("/services")
                  )}
                >
                  <span>Services</span>

                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={`
                      transition-transform
                      duration-200
                      ${
                        servicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </Link>

                {servicesOpen && (
                  <DesktopDropdown
                    items={services}
                    prefix="services"
                    viewAllPath="/services"
                    viewAllText="View All Services"
                  />
                )}
              </div>

              {/* ===============================================
                  INTERNATIONAL PATIENTS
              =============================================== */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setInternationalOpen(true)
                }
                onMouseLeave={() =>
                  setInternationalOpen(false)
                }
              >
                <Link
                  to="/international-patients"
                  className={desktopDropdownClass(
                    internationalOpen,
                    isActive("/international")
                  )}
                >
                  <span>
                    International Patients
                  </span>

                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={`
                      transition-transform
                      duration-200
                      ${
                        internationalOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </Link>

                {internationalOpen && (
                  <DesktopDropdown
                    items={international}
                    prefix="international"
                    viewAllPath="/international-patients"
                    viewAllText="International Patients"
                  />
                )}
              </div>

              {/* ===============================================
                  CONTACT
              =============================================== */}

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  desktopDropdownClass(
                    false,
                    isActive
                  )
                }
              >
                Contact Us
              </NavLink>
            </nav>

            {/* =================================================
                RIGHT SIDE
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-2
                sm:gap-3
                shrink-0
              "
            >
              {/* ===============================================
                  REQUEST CALL BACK
              =============================================== */}

              <button
                type="button"
                onClick={() =>
                  setCallbackOpen(true)
                }
                className="
                  hidden
                  sm:flex
                  items-center
                  justify-center
                  gap-2
                  min-h-[44px]
                  px-4
                  xl:px-5
                  rounded-lg
                  bg-[#064B50]
                  border
                  border-[#064B50]
                  text-white
                  text-[13px]
                  xl:text-[14px]
                  font-semibold
                  whitespace-nowrap
                  shadow-[0_6px_18px_rgba(6,75,80,0.17)]
                  transition-all
                  duration-200

                  hover:bg-[#0B6B70]
                  hover:border-[#C8942E]
                  hover:shadow-[0_8px_22px_rgba(6,75,80,0.22)]
                "
              >
                <Phone
                  size={16}
                  strokeWidth={2}
                  className="text-[#C8942E]"
                />

                Request Call Back
              </button>


              {loggedIn ? (
  <button
    type="button"
    onClick={() =>
      navigate("/profile")
    }
    className="
      flex
      h-[40px]
      items-center
      gap-2
      rounded-full
      border
      border-[#064B50]/20
      bg-[#eef7f6]
      px-4
      text-[13px]
      font-semibold
      text-[#064B50]
      transition
      hover:bg-[#064B50]
      hover:border-[#C8942E]
      hover:shadow-[0_8px_22px_rgba(6,75,80,0.22)]
      hover:text-white
    "
  >
    <UserRound size={16} />

    {currentUser?.name
      ? currentUser.name.split(" ")[0]
      : "Profile"}
  </button>
) : (
  <button
    type="button"
    // onClick={() =>
    //   navigate("/login")
    // }
    onClick={() =>
  onOpenAuth?.("login")
}
    className="
      flex
      h-[40px]
      items-center
      gap-2
      rounded-full
      bg-[#064B50]
      border
                  border-[#064B50]
      px-5
      text-[13px]
      font-semibold
      text-white
      transition
      hover:bg-[#064B50]
    "
  >
    <LogIn size={16} />

    Login
  </button>
)}

{/* ===============================================
    TEMP PATIENT PROFILE UI TEST
=============================================== */}

<button
  type="button"
  onClick={() =>
    navigate("/patient-profile-demo")
  }
  className="
    hidden
    sm:flex
    h-[40px]
    items-center
    gap-2
    rounded-full
    border
    border-[#C8942E]/40
    bg-[#fffaf1]
    px-4
    text-[13px]
    font-semibold
    text-[#064B50]
    transition-all
    duration-200
    hover:bg-[#064B50]
    hover:border-[#064B50]
    hover:text-white
  "
>
  <UserRound size={16} />

  Patient Demo
</button>
              {/* ===============================================
                  MOBILE MENU BUTTON
              =============================================== */}

              <button
                type="button"
                onClick={() =>
                  setMobileOpen((prev) => !prev)
                }
                aria-label="Open navigation menu"
                className="
                  xl:hidden
                  w-11
                  h-11
                  rounded-lg
                  border
                  border-[#dbe7e6]
                  bg-white
                  flex
                  items-center
                  justify-center
                  text-[#064B50]
                  transition-colors
                  hover:bg-[#edf7f6]
                "
              >
                {mobileOpen ? (
                  <X size={22} />
                ) : (
                  <Menu size={22} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* =================================================
            SMALL BRAND LINE
        ================================================= */}

        {/* <div
          className="
            h-[2px]
            w-full
            bg-gradient-to-r
            from-[#064B50]
            via-[#C8942E]
            to-[#E85C91]
            opacity-90
          "
        /> */}
      </header>

      {/* ===================================================
          MOBILE OVERLAY
      =================================================== */}

      {mobileOpen && (
        <div
          className="
            fixed
            inset-0
            z-[70]
            bg-[#042f32]/45
            backdrop-blur-[2px]
            xl:hidden
          "
          onClick={closeMobile}
        />
      )}

      {/* ===================================================
          MOBILE / TABLET MENU
      =================================================== */}

      <aside
        className={`
          fixed
          top-0
          right-0
          z-[80]
          h-screen
          w-[90%]
          max-w-[410px]
          bg-white
          shadow-2xl
          xl:hidden
          transform
          transition-transform
          duration-300
          ease-in-out

          ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =================================================
            MOBILE HEADER
        ================================================= */}

        <div
          className="
            min-h-[76px]
            px-4
            flex
            items-center
            justify-between
            border-b
            border-[#e5eceb]
          "
        >
          <Link
            to="/"
            onClick={closeMobile}
          >
            <img
              src="/logo.png"
              alt="Akeso Global Medical Services"
              className="
                h-[55px]
                w-auto
                object-contain
              "
            />
          </Link>

          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close menu"
            className="
              w-10
              h-10
              rounded-lg
              bg-[#edf7f6]
              flex
              items-center
              justify-center
              text-[#064B50]
              hover:bg-[#dfeeed]
              hover:text-[#064B50]
              transition-colors
            "
          >
            <X size={21} />
          </button>
        </div>

        {/* BRAND STRIPE */}

        <div
          className="
            h-[2px]
            bg-gradient-to-r
            from-[#064B50]
            via-[#C8942E]
            to-[#C8942E]
          "
        />

        {/* =================================================
            MOBILE CONTENT
        ================================================= */}

        <div
          className="
            h-[calc(100vh-78px)]
            overflow-y-auto
            px-5
            pb-10
          "
        >

            <Link
  to="/"
  onClick={closeMobile}
  className={`
    group
    flex
    items-center
    justify-between
    py-[14px]
    border-b
    border-[#e5eceb]
    text-[15px]
    font-medium
    transition-colors
    duration-200

    ${
      location.pathname === "/"
        ? "text-[#C8942E]"
        : "text-[#064B50] hover:text-[#C8942E]"
    }
  `}
>
  <span>Home</span>

  <ChevronRight
    size={16}
    className={`
      transition-colors
      ${
        location.pathname === "/"
          ? "text-[#C8942E]"
          : "text-[#C8942E] group-hover:text-[#C8942E]"
      }
    `}
  />
</Link>
          {/* ===============================================
              SPECIALITY
          =============================================== */}

        
          <MobileAccordion
            title="Speciality"
            mainPath="/specialities"
            active={isActive("/special")}
            closeMenu={closeMobile}
          >
            <div className="space-y-[2px]">
              {specialties
                .slice(0, 6)
                .map((item) => (
                 <MobileItem
                    key={item[1]}
                    item={item}
                    prefix="speciality"
                    closeMenu={closeMobile}
                  />
                ))}

              <Link
                to="/specialities"
                onClick={closeMobile}
                className="
                  group
                  mt-2
                  flex
                  items-center
                  justify-between
                  px-3
                  py-[10px]
                  rounded-lg
                  bg-[#edf7f6]
                  text-[#064B50]
                  text-[14px]
                  font-medium
                "
              >
                <span>
                  View All Specialities
                </span>

                <ChevronRight
                  size={15}
                  className="
                    text-[#C8942E]
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </MobileAccordion>

          {/* ===============================================
              HEALTH LIBRARY
          =============================================== */}

          <MobileAccordion
              title="Health Library"
              mainPath="/health-library"
              active={isActive("/health-library")}
              closeMenu={closeMobile}
            >
            <div className="space-y-[2px]">
              {healthLibrary.map((item) => {
                const Icon = item?.[2];

                if (item[1] === "knowledge") {
                  return (
                    <div key={item[1]}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileKnowledgeOpen(
                            (prev) => !prev
                          )
                        }
                        className="
                          group
                          w-full
                          flex
                          items-center
                          gap-3
                          px-3
                          py-[9px]
                          rounded-lg
                          transition-colors
                          hover:bg-[#fff5f8]
                        "
                      >
                        <div
                          className="
                            w-7
                            h-7
                            flex
                            items-center
                            justify-center
                            shrink-0
                          "
                        >
                          {Icon && (
                            <Icon
                              size={17}
                              strokeWidth={1.6}
                              className="
                                text-[#C8942E]
                                group-hover:text-[#C8942E]
                              "
                            />
                          )}
                        </div>

                        <span
                          className="
                            flex-1
                            text-left
                            text-[14px]
                            font-normal
                            text-[#536466]
                          "
                        >
                          Knowledge Center
                        </span>

                        <ChevronDown
                          size={16}
                          className={`
                            text-[#C8942E]
                            transition-transform
                            duration-200
                            ${
                              mobileKnowledgeOpen
                                ? "rotate-180"
                                : ""
                            }
                          `}
                        />
                      </button>

                      {mobileKnowledgeOpen && (
                        <div
                          className="
                            ml-6
                            mt-1
                            pl-3
                            border-l
                            border-[#C8942E]
                          "
                        >
                          {knowledgeCenter.map(
                            (subItem) => (
                              <MobileItem
                                key={subItem[1]}
                                item={subItem}
                                prefix="health-library"
                                closeMenu={
                                  closeMobile
                                }
                              />
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <MobileItem
                    key={item[1]}
                    item={item}
                    prefix="health-library"
                    closeMenu={closeMobile}
                     directPath={true}
                  />
                );
              })}
            </div>
          </MobileAccordion>

          {/* ===============================================
              OUR DOCTORS
          =============================================== */}

          <button
  type="button"
  onClick={() => {
    closeMobile();

    if (isLoggedIn()) {
      navigate("/doctors");
    } else {
      navigate(
        `/login?redirect=${encodeURIComponent(
          "/doctors"
        )}`
      );
    }
  }}
  className="
    group
    w-full
    flex
    items-center
    justify-between
    py-[14px]
    border-b
    border-[#e5eceb]
    text-[15px]
    font-medium
    text-[#064B50]
    transition-colors
    hover:text-[#C8942E]
  "
>
  <span>Our Doctors</span>

  <ChevronRight
    size={16}
    className="
      text-[#C8942E]
      group-hover:text-[#C8942E]
    "
  />
</button>
          {/* ===============================================
              SERVICES
          =============================================== */}


          <MobileAccordion
              title="Services"
              mainPath="/services"
              active={isActive("/services")}
              closeMenu={closeMobile}
            >
            <div className="space-y-[2px]">
              {services.map((item) => (
                <MobileItem
                  key={item[1]}
                  item={item}
                  prefix="services"
                  closeMenu={closeMobile}
                />
              ))}

              <Link
                to="/services"
                onClick={closeMobile}
                className="
                  group
                  mt-2
                  flex
                  items-center
                  justify-between
                  px-3
                  py-[10px]
                  rounded-lg
                  bg-[#edf7f6]
                  text-[#064B50]
                  text-[14px]
                  font-medium
                "
              >
                <span>View All Services</span>

                <ChevronRight
                  size={15}
                  className="
                    text-[#C8942E]
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </MobileAccordion>

          {/* ===============================================
              INTERNATIONAL PATIENTS
          =============================================== */}

          <MobileAccordion
            title="International Patients"
            mainPath="/international-patients"
            active={isActive("/international")}
            closeMenu={closeMobile}
          >
            <div className="space-y-[2px]">
              {international.map((item) => (
                <MobileItem
                  key={item[1]}
                  item={item}
                  prefix="international"
                  closeMenu={closeMobile}
                />
              ))}
            </div>
          </MobileAccordion>

          {/* ===============================================
              CONTACT
          =============================================== */}

          <Link
            to="/contact"
            onClick={closeMobile}
            className="
              group
              flex
              items-center
              justify-between
              py-[14px]
              border-b
              border-[#e5eceb]
              text-[15px]
              font-medium
              text-[#064B50]
              transition-colors
              hover:text-[#C8942E]
            "
          >
            <span>Contact Us</span>

            <ChevronRight
              size={16}
              className="
                text-[#C8942E]
                group-hover:text-[#C8942E]
              "
            />
          </Link>

          {/* ===============================================
              MOBILE CALLBACK
          =============================================== */}

          <button
            type="button"
            onClick={() => {
              closeMobile();
              setCallbackOpen(true);
            }}
            className="
              mt-6
              w-full
              min-h-[48px]
              rounded-lg
              bg-[#064B50]
              border
              border-[#064B50]
              text-white
              flex
              items-center
              justify-center
              gap-2
              text-[14px]
              font-semibold
              shadow-[0_6px_18px_rgba(6,75,80,0.16)]
              transition-all
              duration-200

              hover:bg-[#0B6B70]
              hover:border-[#C8942E]
            "
          >
            <Phone
              size={17}
              className="text-[#C8942E]"
            />

            Request Call Back
          </button>

          {/* SMALL DECORATION */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <span
              className="
                w-8
                h-[1px]
                bg-[#C8942E]
              "
            />

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-[#C8942E]
              "
            />

            <span
              className="
                w-8
                h-[1px]
                bg-[#C8942E]
              "
            />
          </div>
        </div>
      </aside>

      {/* ===================================================
          REQUEST CALLBACK MODAL
      =================================================== */}

      <CallbackModal
        open={callbackOpen}
        onClose={() =>
          setCallbackOpen(false)
        }
      />
    </>
  );
}