
import { useEffect, useState } from "react";

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Phone,
  LogIn,
  LogOut,
  UserRound,
} from "lucide-react";

// import {
//   getUser,
//   isLoggedIn,
//   logout,
// } from "../utils/auth";

import {
  healthLibrary,
  knowledgeCenter,
  services,
  international,
} from "../data/navigation";

import { useSpecialities } from "../context/SpecialitiesContext";
import { getSpecialityIcon } from "../utils/specialityIcon";

import CallbackModal from "./CallbackModal";
import LanguageSwitcher from "./LanguageSwitcher";

import { useSiteSettings } from "../context/SiteSettingsContext";
import defaultLogo from "../assets/home/logo.png";

/* ==========================================
   DESKTOP DROPDOWN ROW
========================================== */

function DropdownRow({
  item,
  prefix,
  onNavigate,
  directPath = false,
}) {
  const Icon = item?.[2];

  const itemPath = directPath
    ? `/${item[1]}`
    : `/${prefix}/${item[1]}`;

  return (
    <Link
      to={itemPath}
      onClick={onNavigate}
      className="group flex items-center gap-3 border-b border-[#e8eeee] bg-white px-4 py-[10px] transition-all duration-200 last:border-b-0 hover:bg-[#edf7f6]"
    >
      <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
        {Icon && (
          <Icon
            size={17}
            strokeWidth={1.6}
            className="text-[#C8942E]"
          />
        )}
      </div>

      <span className="text-[14px] leading-5 text-[#536466] transition-colors group-hover:text-[#064B50]">
        {item[0]}
      </span>
    </Link>
  );
}

/* ==========================================
   NORMAL DESKTOP DROPDOWN
========================================== */

function DesktopDropdown({
  items = [],
  prefix,
  viewAllPath,
  viewAllText,
}) {
  return (
    <div className="absolute left-0 top-full z-[150] pt-[2px]">
      <div className="w-[260px] overflow-hidden rounded-b-lg rounded-t-sm border border-[#e5eceb] bg-white shadow-[0_10px_28px_rgba(6,75,80,0.13)]">
        {items.map((item) => (
          <DropdownRow
            key={item[1]}
            item={item}
            prefix={prefix}
          />
        ))}

        {viewAllPath && (
          <Link
            to={viewAllPath}
            className="group flex items-center justify-between gap-2 border-t border-[#e5eceb] bg-white px-4 py-[11px] text-[14px] font-medium text-[#064B50] transition hover:bg-[#edf7f6]"
          >
            <span>{viewAllText}</span>

            <ChevronRight
              size={15}
              className="text-[#C8942E] transition-transform group-hover:translate-x-1"
            />
          </Link>
        )}
      </div>
    </div>
  );
}

/* ==========================================
   HEALTH LIBRARY DESKTOP DROPDOWN
========================================== */

function HealthLibraryDropdown() {
  const [knowledgeOpen, setKnowledgeOpen] =
    useState(false);

  return (
    <div className="absolute left-0 top-full z-[150] pt-[2px]">
      <div className="relative w-[260px] rounded-b-lg border border-[#e5eceb] bg-white shadow-[0_10px_28px_rgba(6,75,80,0.13)]">
        {healthLibrary.map((item) => {
          const Icon = item?.[2];

          if (item[1] === "knowledge") {
            return (
              <div
                key={item[1]}
                className="relative"
                onMouseEnter={() =>
                  setKnowledgeOpen(true)
                }
                onMouseLeave={() =>
                  setKnowledgeOpen(false)
                }
              >
                <button
                  type="button"
                  onClick={() =>
                    setKnowledgeOpen((prev) => !prev)
                  }
                  className="group flex w-full items-center gap-3 border-b border-[#e8eeee] bg-white px-4 py-[10px] transition hover:bg-[#edf7f6]"
                >
                  <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
                    {Icon && (
                      <Icon
                        size={17}
                        strokeWidth={1.6}
                        className="text-[#C8942E]"
                      />
                    )}
                  </div>

                  <span className="flex-1 text-left text-[14px] text-[#536466] group-hover:text-[#064B50]">
                    {item[0]}
                  </span>

                  <ChevronRight
                    size={15}
                    className="text-[#C8942E]"
                  />
                </button>

                {knowledgeOpen && (
                  <div className="absolute left-full top-0 ml-[2px] w-[220px] overflow-hidden rounded-lg border border-[#e5eceb] bg-white shadow-[0_10px_28px_rgba(6,75,80,0.13)]">
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

/* ==========================================
   MOBILE DROPDOWN ITEM
========================================== */

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
      to={itemPath}
      onClick={closeMenu}
      className="group flex items-center gap-3 rounded-lg px-3 py-[9px] transition-colors hover:bg-[#edf7f6]"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center">
        {Icon && (
          <Icon
            size={17}
            strokeWidth={1.6}
            className="text-[#C8942E]"
          />
        )}
      </div>

      <span className="text-[14px] text-[#536466] group-hover:text-[#064B50]">
        {item[0]}
      </span>
    </Link>
  );
}

/* ==========================================
   MOBILE ACCORDION
========================================== */

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
      <div className="flex w-full items-center justify-between py-[14px]">
        <Link
          to={mainPath}
          onClick={closeMenu}
          className={`flex-1 text-left text-[15px] font-medium transition-colors ${
            active
              ? "text-[#C8942E]"
              : "text-[#064B50] hover:text-[#C8942E]"
          }`}
        >
          {title}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={`Toggle ${title} menu`}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#C8942E] transition hover:bg-[#edf7f6]"
        >
          <ChevronDown
            size={17}
            strokeWidth={1.8}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="pb-3">{children}</div>
      )}
    </div>
  );
}

/* ==========================================
   MAIN HEADER COMPONENT
========================================== */

export default function Header({ onOpenAuth }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { settings } = useSiteSettings();

   const {
    user: currentUser,
    isLoggedIn: loggedIn,
    loading: authLoading,
    logout: authLogout,
  } = useAuth();

  const {
  specialities: apiSpecialities,
  loading: specialitiesLoading,
} = useSpecialities();

const specialityMenuItems = apiSpecialities.map((item) => [
  item.name,
  item.slug,
  getSpecialityIcon(item.name),
]);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [callbackOpen, setCallbackOpen] =
    useState(false);

  const [specialityOpen, setSpecialityOpen] =
    useState(false);

  const [healthOpen, setHealthOpen] =
    useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [internationalOpen, setInternationalOpen] =
    useState(false);

  const [mobileKnowledgeOpen, setMobileKnowledgeOpen] =
    useState(false);


  /* ==========================================
     CLOSE MENU ON ROUTE CHANGE
  ========================================== */

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* ==========================================
     BODY SCROLL CONTROL
  ========================================== */

  useEffect(() => {
    document.body.style.overflow = mobileOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  const isActive = (path) =>
    location.pathname.startsWith(path);

  /* ==========================================
     LOGOUT
  ========================================== */

const handleLogout = async () => {
  try {
    await authLogout();

    setMobileOpen(false);

    navigate("/", { replace: true });
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
  /* ==========================================
     LOGIN
  ========================================== */

  const handleLogin = () => {
    closeMobile();

    if (onOpenAuth) {
      onOpenAuth("login");
    } else {
      navigate("/login");
    }
  };

  /* ==========================================
     OUR DOCTORS PROTECTED NAVIGATION
  ========================================== */

const handleDoctorsNavigation = () => {
  closeMobile();

  if (authLoading) return;

  if (loggedIn) {
    navigate("/doctors");
  } else if (onOpenAuth) {
    onOpenAuth("login", "/doctors");
  } else {
    navigate(
      `/login?redirect=${encodeURIComponent("/doctors")}`
    );
  }
};

  /* ==========================================
     DESKTOP NAVIGATION STYLES
  ========================================== */

  const desktopDropdownClass = (
    open,
    active
  ) => `
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
        : "text-[#263F41] hover:text-[#064B50] after:scale-x-0 hover:after:scale-x-100"
    }
  `;

  /* ==========================================
     MOBILE NORMAL LINK CLASS
  ========================================== */

  const mobileLinkClass =
    "group flex w-full items-center justify-between border-b border-[#e5eceb] py-[14px] text-[15px] font-medium text-[#064B50] transition-colors hover:text-[#C8942E]";

  return (
    <>
      {/* ======================================
          MAIN HEADER
      ====================================== */}

      <header className="sticky top-0 z-50 border-b border-[#e5eceb] bg-white shadow-[0_3px_16px_rgba(6,75,80,0.06)]">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-5 lg:px-6 xl:px-7">
          <div className="flex min-h-[76px] items-center justify-between gap-4 lg:min-h-[82px]">

            {/* LOGO */}
            <Link
              to="/"
              className="flex shrink-0 items-center"
            >
              {/* <img
                src="/logo.png"
                alt="Akeso Global Medical Services"
                className="h-[54px] w-auto object-contain sm:h-[58px] lg:h-[64px] xl:h-[68px]"
              /> */}
              {/* || "/logo.png" */}
<img
  src={settings.logo || defaultLogo}
  alt="Akeso Global Medical Services"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = defaultLogo;
  }}
  className="h-[54px] w-auto object-contain sm:h-[58px] lg:h-[64px] xl:h-[68px]"
/>
            </Link>

            {/* ==================================
                DESKTOP NAVIGATION
            ================================== */}

            <nav className="hidden flex-1 items-center justify-center gap-0 xl:flex">

              {/* HOME */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  desktopDropdownClass(
                    false,
                    isActive
                  )
                }
              >
                Home
              </NavLink>

              {/* SPECIALITY */}
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
                  Speciality

                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      specialityOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </Link>

                {specialityOpen && (
                  <DesktopDropdown
                    // items={specialties.slice(0, 6)}
                    items={specialityMenuItems.slice(0, 6)}
                    prefix="speciality"
                    viewAllPath="/specialities"
                    viewAllText="View All Specialities"
                  />
                )}
              </div>

              {/* HEALTH LIBRARY */}
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
                  Health Library

                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      healthOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </Link>

                {healthOpen && (
                  <HealthLibraryDropdown />
                )}
              </div>

              {/* OUR DOCTORS */}
              <button
                type="button"
                onClick={handleDoctorsNavigation}
                className={desktopDropdownClass(
                  false,
                  isActive("/doctors")
                )}
              >
                Our Doctors
              </button>

              {/* SERVICES */}
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
                  Services

                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      servicesOpen
                        ? "rotate-180"
                        : ""
                    }`}
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

              {/* INTERNATIONAL PATIENTS */}
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
                  International Patients

                  <ChevronDown
                    size={14}
                    className={`transition-transform ${
                      internationalOpen
                        ? "rotate-180"
                        : ""
                    }`}
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

              {/* CONTACT */}
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

            {/* ==================================
                RIGHT SIDE
            ================================== */}

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">

              {/* REQUEST CALL BACK */}
              <button
                type="button"
                onClick={() =>
                  setCallbackOpen(true)
                }
                className="hidden min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#064B50] bg-[#064B50] px-4 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(6,75,80,0.17)] transition-all duration-200 hover:border-[#C8942E] hover:bg-[#0B6B70] sm:flex xl:px-5 xl:text-[14px]"
              >
                <Phone
                  size={16}
                  className="text-[#C8942E]"
                />
                Request Call Back
              </button>

              {/* ==================================
                  DESKTOP PROFILE + LOGOUT
              ================================== */}

              <div className="hidden items-center gap-2 xl:flex">
                {/* {loggedIn ? ( */}
                {authLoading ? null : loggedIn ? (
                  <>
                    {/* PROFILE */}
                    
{/* PROFILE - DESKTOP ONLY ICON */}
<button
  type="button"
  onClick={() => navigate("/profile")}
  title="My Profile"
  aria-label="My Profile"
  className="
    flex h-[42px] w-[42px] shrink-0
    items-center justify-center
    rounded-full
    border border-[#064B50]/30
    bg-[#eef7f6]
    text-[#064B50]
    transition-all duration-200
    hover:border-[#C8942E]
    hover:bg-[#064B50]
    hover:text-white
  "
>
  <UserRound size={20} strokeWidth={1.8} />
</button>

                    {/* <button
                      type="button"
                      onClick={() =>
                        navigate("/profile")
                      }
                      className="flex h-[40px] items-center gap-2 rounded-full border border-[#064B50]/20 bg-[#eef7f6] px-4 text-[13px] font-semibold text-[#064B50] transition hover:border-[#C8942E] hover:bg-[#064B50] hover:text-white"
                    >
                      <UserRound size={16} />

                      <span className="max-w-[100px] truncate">
                        {currentUser?.name
                          ? currentUser.name.split(" ")[0]
                          : "Profile"}
                      </span>
                    </button> */}

                    {/* LOGOUT */}
                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex h-[40px] items-center gap-2 rounded-full border border-[#C8942E]/60 bg-white px-4 text-[13px] font-semibold text-[#064B50] transition hover:bg-[#C8942E] hover:text-white"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={handleLogin}
                    className="flex h-[40px] items-center gap-2 rounded-full border border-[#064B50] bg-[#064B50] px-5 text-[13px] font-semibold text-white transition hover:bg-[#0B6268]"
                  >
                    <LogIn size={16} />
                    Login
                  </button>
                )}
              </div>

              {/* LANGUAGE SWITCHER */}
              <div className="flex shrink-0 items-center">
                <LanguageSwitcher />
              </div>

              {/* MOBILE MENU BUTTON */}
              <button
                type="button"
                onClick={() =>
                  setMobileOpen((prev) => !prev)
                }
                aria-label={
                  mobileOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileOpen}
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#dbe7e6] bg-white text-[#064B50] transition-colors hover:bg-[#edf7f6] xl:hidden"
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
      </header>

      {/* ======================================
          MOBILE OVERLAY
      ====================================== */}

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[70] bg-[#042f32]/45 backdrop-blur-[2px] xl:hidden"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* ======================================
          MOBILE / TABLET SIDEBAR
      ====================================== */}

      <aside
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
        className={`fixed right-0 top-0 z-[80] h-screen w-[90%] max-w-[410px] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
          mobileOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* MOBILE MENU HEADER */}
        <div className="flex min-h-[76px] items-center justify-between border-b border-[#e5eceb] px-4">
          <Link
            to="/"
            onClick={closeMobile}
          >
            {/* <img
              src="/logo.png"
              alt="Akeso Global Medical Services"
              className="h-[55px] w-auto object-contain"
            /> */}
            <img
  src={settings.logo || defaultLogo}
  alt="Akeso Global Medical Services"
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = defaultLogo;
  }}
  className="h-[55px] w-auto object-contain"
/>
          </Link>

          <button
            type="button"
            onClick={closeMobile}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#edf7f6] text-[#064B50] transition-colors hover:bg-[#dfeeed]"
          >
            <X size={21} />
          </button>
        </div>

        {/* BRAND STRIPE */}
        <div className="h-[2px] bg-gradient-to-r from-[#064B50] via-[#C8942E] to-[#C8942E]" />

        {/* ==================================
            MOBILE MENU CONTENT
        ================================== */}

        <div className="h-[calc(100vh-78px)] overflow-y-auto px-5 pb-10">

          {/* HOME */}
          <Link
            to="/"
            onClick={closeMobile}
            className={mobileLinkClass}
          >
            <span>Home</span>

            <ChevronRight
              size={16}
              className="text-[#C8942E]"
            />
          </Link>

          {/* SPECIALITY */}
          <MobileAccordion
            title="Speciality"
            mainPath="/specialities"
            active={isActive("/special")}
            closeMenu={closeMobile}
          >
            <div className="space-y-[2px]">
              {/* {specialties
                .slice(0, 6)
                .map((item) => ( */}
                {specialityMenuItems
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
                className="group mt-2 flex items-center justify-between rounded-lg bg-[#edf7f6] px-3 py-[10px] text-[14px] font-medium text-[#064B50]"
              >
                View All Specialities

                <ChevronRight
                  size={15}
                  className="text-[#C8942E]"
                />
              </Link>
            </div>
          </MobileAccordion>

          {/* HEALTH LIBRARY */}
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
                        className="group flex w-full items-center gap-3 rounded-lg px-3 py-[9px] transition-colors hover:bg-[#edf7f6]"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                          {Icon && (
                            <Icon
                              size={17}
                              className="text-[#C8942E]"
                            />
                          )}
                        </div>

                        <span className="flex-1 text-left text-[14px] text-[#536466]">
                          Knowledge Center
                        </span>

                        <ChevronDown
                          size={16}
                          className={`text-[#C8942E] transition-transform ${
                            mobileKnowledgeOpen
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {mobileKnowledgeOpen && (
                        <div className="ml-6 mt-1 border-l border-[#C8942E] pl-3">
                          {knowledgeCenter.map(
                            (subItem) => (
                              <MobileItem
                                key={subItem[1]}
                                item={subItem}
                                prefix="health-library"
                                closeMenu={closeMobile}
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

          {/* OUR DOCTORS */}
          <button
            type="button"
            onClick={handleDoctorsNavigation}
            className={mobileLinkClass}
          >
            <span>Our Doctors</span>

            <ChevronRight
              size={16}
              className="text-[#C8942E]"
            />
          </button>

          {/* SERVICES */}
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
                className="group mt-2 flex items-center justify-between rounded-lg bg-[#edf7f6] px-3 py-[10px] text-[14px] font-medium text-[#064B50]"
              >
                View All Services

                <ChevronRight
                  size={15}
                  className="text-[#C8942E]"
                />
              </Link>
            </div>
          </MobileAccordion>

          {/* INTERNATIONAL PATIENTS */}
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

          {/* CONTACT US */}
          <Link
            to="/contact"
            onClick={closeMobile}
            className={mobileLinkClass}
          >
            <span>Contact Us</span>

            <ChevronRight
              size={16}
              className="text-[#C8942E]"
            />
          </Link>

          {/* ==================================
              MOBILE / TABLET PROFILE & LOGOUT
          ================================== */}

          {/* {loggedIn ? ( */}
          {authLoading ? null : loggedIn ? (
            <>
              {/* MY PROFILE */}
              <button
                type="button"
                onClick={() => {
                  closeMobile();
                  navigate("/profile");
                }}
                className={mobileLinkClass}
              >
                <span className="flex items-center gap-3">
                  <UserRound
                    size={19}
                    className="text-[#C8942E]"
                  />
                  My Profile
                </span>

                <ChevronRight
                  size={16}
                  className="text-[#C8942E]"
                />
              </button>

              {/* LOGOUT */}
              <button
                type="button"
                onClick={handleLogout}
                className={mobileLinkClass}
              >
                <span className="flex items-center gap-3">
                  <LogOut
                    size={19}
                    className="text-[#C8942E]"
                  />
                  Logout
                </span>

                <ChevronRight
                  size={16}
                  className="text-[#C8942E]"
                />
              </button>
            </>
          ) : (
            /* LOGIN - WHEN NOT LOGGED IN */
            <button
              type="button"
              onClick={handleLogin}
              className={mobileLinkClass}
            >
              <span className="flex items-center gap-3">
                <LogIn
                  size={19}
                  className="text-[#C8942E]"
                />
                Login
              </span>

              <ChevronRight
                size={16}
                className="text-[#C8942E]"
              />
            </button>
          )}

          {/* ==================================
              MOBILE REQUEST CALL BACK
          ================================== */}

          <button
            type="button"
            onClick={() => {
              closeMobile();
              setCallbackOpen(true);
            }}
            className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-[#064B50] bg-[#064B50] text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(6,75,80,0.16)] transition-all duration-200 hover:border-[#C8942E] hover:bg-[#0B6B70]"
          >
            <Phone
              size={17}
              className="text-[#C8942E]"
            />

            Request Call Back
          </button>

          {/* SMALL DECORATION */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-[#C8942E]" />
            <span className="h-2 w-2 rounded-full bg-[#C8942E]" />
            <span className="h-px w-8 bg-[#C8942E]" />
          </div>
        </div>
      </aside>

      {/* ======================================
          CALLBACK MODAL
      ====================================== */}

      <CallbackModal
        open={callbackOpen}
        onClose={() =>
          setCallbackOpen(false)
        }
      />
    </>
  );
}



// import { useEffect, useState } from "react";

// import {
//   Link,
//   NavLink,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import {
//   ChevronDown,
//   ChevronRight,
//   Menu,
//   X,
//   Phone,
//   LogIn,
//   LogOut,
//   UserRound,
// } from "lucide-react";

// import {
//   getUser,
//   isLoggedIn,
//   logout,
// } from "../utils/auth";

// import {
//   healthLibrary,
//   knowledgeCenter,
//   services,
//   international,
// } from "../data/navigation";

// import { useSpecialities } from "../context/SpecialitiesContext";
// import { getSpecialityIcon } from "../utils/specialityIcon";

// import CallbackModal from "./CallbackModal";
// import LanguageSwitcher from "./LanguageSwitcher";

// import { useSiteSettings } from "../context/SiteSettingsContext";
// import defaultLogo from "../assets/home/logo.png";

// import { useTranslation } from "react-i18next";
// /* ==========================================
//    DESKTOP DROPDOWN ROW
// ========================================== */

// function DropdownRow({
//   item,
//   prefix,
//   onNavigate,
//   directPath = false,
// }) {
//   const Icon = item?.[2];

//   const itemPath = directPath
//     ? `/${item[1]}`
//     : `/${prefix}/${item[1]}`;

//   return (
//     <Link
//       to={itemPath}
//       onClick={onNavigate}
//       className="group flex items-center gap-3 border-b border-[#e8eeee] bg-white px-4 py-[10px] transition-all duration-200 last:border-b-0 hover:bg-[#edf7f6]"
//     >
//       <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
//         {Icon && (
//           <Icon
//             size={17}
//             strokeWidth={1.6}
//             className="text-[#C8942E]"
//           />
//         )}
//       </div>

//       <span className="text-[14px] leading-5 text-[#536466] transition-colors group-hover:text-[#064B50]">
//         {item[0]}
//       </span>
//     </Link>
//   );
// }

// /* ==========================================
//    NORMAL DESKTOP DROPDOWN
// ========================================== */

// function DesktopDropdown({
//   items = [],
//   prefix,
//   viewAllPath,
//   viewAllText,
// }) {
//   return (
//     <div className="absolute left-0 top-full z-[150] pt-[2px]">
//       <div className="w-[260px] overflow-hidden rounded-b-lg rounded-t-sm border border-[#e5eceb] bg-white shadow-[0_10px_28px_rgba(6,75,80,0.13)]">
//         {items.map((item) => (
//           <DropdownRow
//             key={item[1]}
//             item={item}
//             prefix={prefix}
//           />
//         ))}

//         {viewAllPath && (
//           <Link
//             to={viewAllPath}
//             className="group flex items-center justify-between gap-2 border-t border-[#e5eceb] bg-white px-4 py-[11px] text-[14px] font-medium text-[#064B50] transition hover:bg-[#edf7f6]"
//           >
//             <span>{viewAllText}</span>

//             <ChevronRight
//               size={15}
//               className="text-[#C8942E] transition-transform group-hover:translate-x-1"
//             />
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ==========================================
//    HEALTH LIBRARY DESKTOP DROPDOWN
// ========================================== */

// function HealthLibraryDropdown() {
//   const [knowledgeOpen, setKnowledgeOpen] =
//     useState(false);

//   return (
//     <div className="absolute left-0 top-full z-[150] pt-[2px]">
//       <div className="relative w-[260px] rounded-b-lg border border-[#e5eceb] bg-white shadow-[0_10px_28px_rgba(6,75,80,0.13)]">
//         {healthLibrary.map((item) => {
//           const Icon = item?.[2];

//           if (item[1] === "knowledge") {
//             return (
//               <div
//                 key={item[1]}
//                 className="relative"
//                 onMouseEnter={() =>
//                   setKnowledgeOpen(true)
//                 }
//                 onMouseLeave={() =>
//                   setKnowledgeOpen(false)
//                 }
//               >
//                 <button
//                   type="button"
//                   onClick={() =>
//                     setKnowledgeOpen((prev) => !prev)
//                   }
//                   className="group flex w-full items-center gap-3 border-b border-[#e8eeee] bg-white px-4 py-[10px] transition hover:bg-[#edf7f6]"
//                 >
//                   <div className="flex h-[25px] w-[25px] shrink-0 items-center justify-center">
//                     {Icon && (
//                       <Icon
//                         size={17}
//                         strokeWidth={1.6}
//                         className="text-[#C8942E]"
//                       />
//                     )}
//                   </div>

//                   <span className="flex-1 text-left text-[14px] text-[#536466] group-hover:text-[#064B50]">
//                     {item[0]}
//                   </span>

//                   <ChevronRight
//                     size={15}
//                     className="text-[#C8942E]"
//                   />
//                 </button>

//                 {knowledgeOpen && (
//                   <div className="absolute left-full top-0 ml-[2px] w-[220px] overflow-hidden rounded-lg border border-[#e5eceb] bg-white shadow-[0_10px_28px_rgba(6,75,80,0.13)]">
//                     {knowledgeCenter.map((subItem) => (
//                       <DropdownRow
//                         key={subItem[1]}
//                         item={subItem}
//                         prefix="health-library"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>
//             );
//           }

//           return (
//             <DropdownRow
//               key={item[1]}
//               item={item}
//               prefix="health-library"
//               directPath={true}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// /* ==========================================
//    MOBILE DROPDOWN ITEM
// ========================================== */

// function MobileItem({
//   item,
//   prefix,
//   closeMenu,
//   directPath = false,
// }) {
//   const Icon = item?.[2];

//   const itemPath = directPath
//     ? `/${item[1]}`
//     : `/${prefix}/${item[1]}`;

//   return (
//     <Link
//       to={itemPath}
//       onClick={closeMenu}
//       className="group flex items-center gap-3 rounded-lg px-3 py-[9px] transition-colors hover:bg-[#edf7f6]"
//     >
//       <div className="flex h-7 w-7 shrink-0 items-center justify-center">
//         {Icon && (
//           <Icon
//             size={17}
//             strokeWidth={1.6}
//             className="text-[#C8942E]"
//           />
//         )}
//       </div>

//       <span className="text-[14px] text-[#536466] group-hover:text-[#064B50]">
//         {item[0]}
//       </span>
//     </Link>
//   );
// }

// /* ==========================================
//    MOBILE ACCORDION
// ========================================== */

// function MobileAccordion({
//   title,
//   mainPath,
//   children,
//   active = false,
//   closeMenu,
// }) {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="border-b border-[#e5eceb]">
//       <div className="flex w-full items-center justify-between py-[14px]">
//         <Link
//           to={mainPath}
//           onClick={closeMenu}
//           className={`flex-1 text-left text-[15px] font-medium transition-colors ${
//             active
//               ? "text-[#C8942E]"
//               : "text-[#064B50] hover:text-[#C8942E]"
//           }`}
//         >
//           {title}
//         </Link>

//         <button
//           type="button"
//           onClick={() => setOpen((prev) => !prev)}
//           aria-label={`Toggle ${title} menu`}
//           aria-expanded={open}
//           className="flex h-9 w-9 items-center justify-center rounded-lg text-[#C8942E] transition hover:bg-[#edf7f6]"
//         >
//           <ChevronDown
//             size={17}
//             strokeWidth={1.8}
//             className={`transition-transform duration-300 ${
//               open ? "rotate-180" : ""
//             }`}
//           />
//         </button>
//       </div>

//       {open && (
//         <div className="pb-3">{children}</div>
//       )}
//     </div>
//   );
// }

// /* ==========================================
//    MAIN HEADER COMPONENT
// ========================================== */

// export default function Header({ onOpenAuth }) {
//   const { t } = useTranslation();
  
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { settings } = useSiteSettings();

//   const {
//   specialities: apiSpecialities,
//   loading: specialitiesLoading,
// } = useSpecialities();

// const specialityMenuItems = apiSpecialities.map((item) => [
//   item.name,
//   item.slug,
//   getSpecialityIcon(item.name),
// ]);

//   const [mobileOpen, setMobileOpen] =
//     useState(false);

//   const [callbackOpen, setCallbackOpen] =
//     useState(false);

//   const [specialityOpen, setSpecialityOpen] =
//     useState(false);

//   const [healthOpen, setHealthOpen] =
//     useState(false);

//   const [servicesOpen, setServicesOpen] =
//     useState(false);

//   const [internationalOpen, setInternationalOpen] =
//     useState(false);

//   const [mobileKnowledgeOpen, setMobileKnowledgeOpen] =
//     useState(false);

//   const [loggedIn, setLoggedIn] =
//     useState(isLoggedIn());

//   const [currentUser, setCurrentUser] =
//     useState(getUser());

//   /* ==========================================
//      UPDATE AUTH STATE
//   ========================================== */

//   useEffect(() => {
//     const updateAuth = () => {
//       setLoggedIn(isLoggedIn());
//       setCurrentUser(getUser());
//     };

//     window.addEventListener(
//       "akeso-auth-change",
//       updateAuth
//     );

//     window.addEventListener(
//       "storage",
//       updateAuth
//     );

//     return () => {
//       window.removeEventListener(
//         "akeso-auth-change",
//         updateAuth
//       );

//       window.removeEventListener(
//         "storage",
//         updateAuth
//       );
//     };
//   }, []);

//   /* ==========================================
//      CLOSE MENU ON ROUTE CHANGE
//   ========================================== */

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [location.pathname]);

//   /* ==========================================
//      BODY SCROLL CONTROL
//   ========================================== */

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen
//       ? "hidden"
//       : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   const closeMobile = () => {
//     setMobileOpen(false);
//   };

//   const isActive = (path) =>
//     location.pathname.startsWith(path);

//   /* ==========================================
//      LOGOUT
//   ========================================== */

//   const handleLogout = () => {
//     logout();

//     setLoggedIn(false);
//     setCurrentUser(null);
//     setMobileOpen(false);

//     window.dispatchEvent(
//       new Event("akeso-auth-change")
//     );

//     navigate("/", { replace: true });
//   };

//   /* ==========================================
//      LOGIN
//   ========================================== */

//   const handleLogin = () => {
//     closeMobile();

//     if (onOpenAuth) {
//       onOpenAuth("login");
//     } else {
//       navigate("/login");
//     }
//   };

//   /* ==========================================
//      OUR DOCTORS PROTECTED NAVIGATION
//   ========================================== */

//   const handleDoctorsNavigation = () => {
//     closeMobile();

//     if (isLoggedIn()) {
//       navigate("/doctors");
//     } else if (onOpenAuth) {
//       onOpenAuth("login", "/doctors");
//     } else {
//       navigate(
//         `/login?redirect=${encodeURIComponent(
//           "/doctors"
//         )}`
//       );
//     }
//   };

//   /* ==========================================
//      DESKTOP NAVIGATION STYLES
//   ========================================== */

//   const desktopDropdownClass = (
//     open,
//     active
//   ) => `
//     relative
//     flex
//     items-center
//     gap-1
//     px-3
//     2xl:px-4
//     py-[10px]
//     text-[14px]
//     2xl:text-[15px]
//     font-medium
//     whitespace-nowrap
//     transition-colors
//     duration-200

//     after:absolute
//     after:left-3
//     after:right-3
//     after:bottom-[5px]
//     after:h-[2px]
//     after:bg-[#C8942E]
//     after:origin-left
//     after:transition-transform
//     after:duration-200

//     ${
//       open || active
//         ? "text-[#064B50] after:scale-x-100"
//         : "text-[#263F41] hover:text-[#064B50] after:scale-x-0 hover:after:scale-x-100"
//     }
//   `;

//   /* ==========================================
//      MOBILE NORMAL LINK CLASS
//   ========================================== */

//   const mobileLinkClass =
//     "group flex w-full items-center justify-between border-b border-[#e5eceb] py-[14px] text-[15px] font-medium text-[#064B50] transition-colors hover:text-[#C8942E]";

//   return (
//     <>
//       {/* ======================================
//           MAIN HEADER
//       ====================================== */}

//       <header className="sticky top-0 z-50 border-b border-[#e5eceb] bg-white shadow-[0_3px_16px_rgba(6,75,80,0.06)]">
//         <div className="mx-auto max-w-[1500px] px-4 sm:px-5 lg:px-6 xl:px-7">
//           <div className="flex min-h-[76px] items-center justify-between gap-4 lg:min-h-[82px]">

//             {/* LOGO */}
//             <Link
//               to="/"
//               className="flex shrink-0 items-center"
//             >
//               {/* <img
//                 src="/logo.png"
//                 alt="Akeso Global Medical Services"
//                 className="h-[54px] w-auto object-contain sm:h-[58px] lg:h-[64px] xl:h-[68px]"
//               /> */}
//               {/* || "/logo.png" */}
// <img
//   src={settings.logo || defaultLogo}
//   alt="Akeso Global Medical Services"
//   onError={(e) => {
//     e.currentTarget.onerror = null;
//     e.currentTarget.src = defaultLogo;
//   }}
//   className="h-[54px] w-auto object-contain sm:h-[58px] lg:h-[64px] xl:h-[68px]"
// />
//             </Link>

//             {/* ==================================
//                 DESKTOP NAVIGATION
//             ================================== */}

//             <nav className="hidden flex-1 items-center justify-center gap-0 xl:flex">

//               {/* HOME */}
//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   desktopDropdownClass(
//                     false,
//                     isActive
//                   )
//                 }
//               >
//                 Home
//               </NavLink>

//               {/* SPECIALITY */}
//               <div
//                 className="relative"
//                 onMouseEnter={() =>
//                   setSpecialityOpen(true)
//                 }
//                 onMouseLeave={() =>
//                   setSpecialityOpen(false)
//                 }
//               >
//                 <Link
//                   to="/specialities"
//                   className={desktopDropdownClass(
//                     specialityOpen,
//                     isActive("/special")
//                   )}
//                 >
//                   Speciality

//                   <ChevronDown
//                     size={14}
//                     className={`transition-transform ${
//                       specialityOpen
//                         ? "rotate-180"
//                         : ""
//                     }`}
//                   />
//                 </Link>

//                 {specialityOpen && (
//                   <DesktopDropdown
//                     // items={specialties.slice(0, 6)}
//                     items={specialityMenuItems.slice(0, 6)}
//                     prefix="speciality"
//                     viewAllPath="/specialities"
//                     viewAllText="View All Specialities"
//                   />
//                 )}
//               </div>

//               {/* HEALTH LIBRARY */}
//               <div
//                 className="relative"
//                 onMouseEnter={() =>
//                   setHealthOpen(true)
//                 }
//                 onMouseLeave={() =>
//                   setHealthOpen(false)
//                 }
//               >
//                 <Link
//                   to="/health-library"
//                   className={desktopDropdownClass(
//                     healthOpen,
//                     isActive("/health-library")
//                   )}
//                 >
//                   Health Library

//                   <ChevronDown
//                     size={14}
//                     className={`transition-transform ${
//                       healthOpen
//                         ? "rotate-180"
//                         : ""
//                     }`}
//                   />
//                 </Link>

//                 {healthOpen && (
//                   <HealthLibraryDropdown />
//                 )}
//               </div>

//               {/* OUR DOCTORS */}
//               <button
//                 type="button"
//                 onClick={handleDoctorsNavigation}
//                 className={desktopDropdownClass(
//                   false,
//                   isActive("/doctors")
//                 )}
//               >
//                 Our Doctors
//               </button>

//               {/* SERVICES */}
//               <div
//                 className="relative"
//                 onMouseEnter={() =>
//                   setServicesOpen(true)
//                 }
//                 onMouseLeave={() =>
//                   setServicesOpen(false)
//                 }
//               >
//                 <Link
//                   to="/services"
//                   className={desktopDropdownClass(
//                     servicesOpen,
//                     isActive("/services")
//                   )}
//                 >
//                   Services

//                   <ChevronDown
//                     size={14}
//                     className={`transition-transform ${
//                       servicesOpen
//                         ? "rotate-180"
//                         : ""
//                     }`}
//                   />
//                 </Link>

//                 {servicesOpen && (
//                   <DesktopDropdown
//                     items={services}
//                     prefix="services"
//                     viewAllPath="/services"
//                     viewAllText="View All Services"
//                   />
//                 )}
//               </div>

//               {/* INTERNATIONAL PATIENTS */}
//               <div
//                 className="relative"
//                 onMouseEnter={() =>
//                   setInternationalOpen(true)
//                 }
//                 onMouseLeave={() =>
//                   setInternationalOpen(false)
//                 }
//               >
//                 <Link
//                   to="/international-patients"
//                   className={desktopDropdownClass(
//                     internationalOpen,
//                     isActive("/international")
//                   )}
//                 >
//                   International Patients

//                   <ChevronDown
//                     size={14}
//                     className={`transition-transform ${
//                       internationalOpen
//                         ? "rotate-180"
//                         : ""
//                     }`}
//                   />
//                 </Link>

//                 {internationalOpen && (
//                   <DesktopDropdown
//                     items={international}
//                     prefix="international"
//                     viewAllPath="/international-patients"
//                     viewAllText="International Patients"
//                   />
//                 )}
//               </div>

//               {/* CONTACT */}
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) =>
//                   desktopDropdownClass(
//                     false,
//                     isActive
//                   )
//                 }
//               >
//                 Contact Us
//               </NavLink>
//             </nav>

//             {/* ==================================
//                 RIGHT SIDE
//             ================================== */}

//             <div className="flex shrink-0 items-center gap-2 sm:gap-3">

//               {/* REQUEST CALL BACK */}
//               <button
//                 type="button"
//                 onClick={() =>
//                   setCallbackOpen(true)
//                 }
//                 className="hidden min-h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#064B50] bg-[#064B50] px-4 text-[13px] font-semibold text-white shadow-[0_6px_18px_rgba(6,75,80,0.17)] transition-all duration-200 hover:border-[#C8942E] hover:bg-[#0B6B70] sm:flex xl:px-5 xl:text-[14px]"
//               >
//                 <Phone
//                   size={16}
//                   className="text-[#C8942E]"
//                 />
//                 Request Call Back
//               </button>

//               {/* ==================================
//                   DESKTOP PROFILE + LOGOUT
//               ================================== */}

//               <div className="hidden items-center gap-2 xl:flex">
//                 {loggedIn ? (
//                   <>
//                     {/* PROFILE */}
                    
// {/* PROFILE - DESKTOP ONLY ICON */}
// <button
//   type="button"
//   onClick={() => navigate("/profile")}
//   title="My Profile"
//   aria-label="My Profile"
//   className="
//     flex h-[42px] w-[42px] shrink-0
//     items-center justify-center
//     rounded-full
//     border border-[#064B50]/30
//     bg-[#eef7f6]
//     text-[#064B50]
//     transition-all duration-200
//     hover:border-[#C8942E]
//     hover:bg-[#064B50]
//     hover:text-white
//   "
// >
//   <UserRound size={20} strokeWidth={1.8} />
// </button>

//                     {/* <button
//                       type="button"
//                       onClick={() =>
//                         navigate("/profile")
//                       }
//                       className="flex h-[40px] items-center gap-2 rounded-full border border-[#064B50]/20 bg-[#eef7f6] px-4 text-[13px] font-semibold text-[#064B50] transition hover:border-[#C8942E] hover:bg-[#064B50] hover:text-white"
//                     >
//                       <UserRound size={16} />

//                       <span className="max-w-[100px] truncate">
//                         {currentUser?.name
//                           ? currentUser.name.split(" ")[0]
//                           : "Profile"}
//                       </span>
//                     </button> */}

//                     {/* LOGOUT */}
//                     <button
//                       type="button"
//                       onClick={handleLogout}
//                       className="flex h-[40px] items-center gap-2 rounded-full border border-[#C8942E]/60 bg-white px-4 text-[13px] font-semibold text-[#064B50] transition hover:bg-[#C8942E] hover:text-white"
//                     >
//                       <LogOut size={16} />
//                       Logout
//                     </button>
//                   </>
//                 ) : (
//                   <button
//                     type="button"
//                     onClick={handleLogin}
//                     className="flex h-[40px] items-center gap-2 rounded-full border border-[#064B50] bg-[#064B50] px-5 text-[13px] font-semibold text-white transition hover:bg-[#0B6268]"
//                   >
//                     <LogIn size={16} />
//                     Login
//                   </button>
//                 )}
//               </div>

//               {/* LANGUAGE SWITCHER */}
//               <div className="flex shrink-0 items-center">
//                 <LanguageSwitcher />
//               </div>

//               {/* MOBILE MENU BUTTON */}
//               <button
//                 type="button"
//                 onClick={() =>
//                   setMobileOpen((prev) => !prev)
//                 }
//                 aria-label={
//                   mobileOpen
//                     ? "Close navigation menu"
//                     : "Open navigation menu"
//                 }
//                 aria-expanded={mobileOpen}
//                 className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#dbe7e6] bg-white text-[#064B50] transition-colors hover:bg-[#edf7f6] xl:hidden"
//               >
//                 {mobileOpen ? (
//                   <X size={22} />
//                 ) : (
//                   <Menu size={22} />
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ======================================
//           MOBILE OVERLAY
//       ====================================== */}

//       {mobileOpen && (
//         <div
//           className="fixed inset-0 z-[70] bg-[#042f32]/45 backdrop-blur-[2px] xl:hidden"
//           onClick={closeMobile}
//           aria-hidden="true"
//         />
//       )}

//       {/* ======================================
//           MOBILE / TABLET SIDEBAR
//       ====================================== */}

//       <aside
//         aria-label="Mobile navigation"
//         aria-hidden={!mobileOpen}
//         className={`fixed right-0 top-0 z-[80] h-screen w-[90%] max-w-[410px] transform bg-white shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${
//           mobileOpen
//             ? "translate-x-0"
//             : "translate-x-full"
//         }`}
//       >
//         {/* MOBILE MENU HEADER */}
//         <div className="flex min-h-[76px] items-center justify-between border-b border-[#e5eceb] px-4">
//           <Link
//             to="/"
//             onClick={closeMobile}
//           >
//             {/* <img
//               src="/logo.png"
//               alt="Akeso Global Medical Services"
//               className="h-[55px] w-auto object-contain"
//             /> */}
//             <img
//   src={settings.logo || defaultLogo}
//   alt="Akeso Global Medical Services"
//   onError={(e) => {
//     e.currentTarget.onerror = null;
//     e.currentTarget.src = defaultLogo;
//   }}
//   className="h-[55px] w-auto object-contain"
// />
//           </Link>

//           <button
//             type="button"
//             onClick={closeMobile}
//             aria-label="Close menu"
//             className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#edf7f6] text-[#064B50] transition-colors hover:bg-[#dfeeed]"
//           >
//             <X size={21} />
//           </button>
//         </div>

//         {/* BRAND STRIPE */}
//         <div className="h-[2px] bg-gradient-to-r from-[#064B50] via-[#C8942E] to-[#C8942E]" />

//         {/* ==================================
//             MOBILE MENU CONTENT
//         ================================== */}

//         <div className="h-[calc(100vh-78px)] overflow-y-auto px-5 pb-10">

//           {/* HOME */}
//           <Link
//             to="/"
//             onClick={closeMobile}
//             className={mobileLinkClass}
//           >
//             <span>Home</span>

//             <ChevronRight
//               size={16}
//               className="text-[#C8942E]"
//             />
//           </Link>

//           {/* SPECIALITY */}
//           <MobileAccordion
//             title="Speciality"
//             mainPath="/specialities"
//             active={isActive("/special")}
//             closeMenu={closeMobile}
//           >
//             <div className="space-y-[2px]">
//               {/* {specialties
//                 .slice(0, 6)
//                 .map((item) => ( */}
//                 {specialityMenuItems
//                   .slice(0, 6)
//                   .map((item) => (
//                   <MobileItem
//                     key={item[1]}
//                     item={item}
//                     prefix="speciality"
//                     closeMenu={closeMobile}
//                   />
//                 ))}

//               <Link
//                 to="/specialities"
//                 onClick={closeMobile}
//                 className="group mt-2 flex items-center justify-between rounded-lg bg-[#edf7f6] px-3 py-[10px] text-[14px] font-medium text-[#064B50]"
//               >
//                 View All Specialities

//                 <ChevronRight
//                   size={15}
//                   className="text-[#C8942E]"
//                 />
//               </Link>
//             </div>
//           </MobileAccordion>

//           {/* HEALTH LIBRARY */}
//           <MobileAccordion
//             title="Health Library"
//             mainPath="/health-library"
//             active={isActive("/health-library")}
//             closeMenu={closeMobile}
//           >
//             <div className="space-y-[2px]">
//               {healthLibrary.map((item) => {
//                 const Icon = item?.[2];

//                 if (item[1] === "knowledge") {
//                   return (
//                     <div key={item[1]}>
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setMobileKnowledgeOpen(
//                             (prev) => !prev
//                           )
//                         }
//                         className="group flex w-full items-center gap-3 rounded-lg px-3 py-[9px] transition-colors hover:bg-[#edf7f6]"
//                       >
//                         <div className="flex h-7 w-7 shrink-0 items-center justify-center">
//                           {Icon && (
//                             <Icon
//                               size={17}
//                               className="text-[#C8942E]"
//                             />
//                           )}
//                         </div>

//                         <span className="flex-1 text-left text-[14px] text-[#536466]">
//                           Knowledge Center
//                         </span>

//                         <ChevronDown
//                           size={16}
//                           className={`text-[#C8942E] transition-transform ${
//                             mobileKnowledgeOpen
//                               ? "rotate-180"
//                               : ""
//                           }`}
//                         />
//                       </button>

//                       {mobileKnowledgeOpen && (
//                         <div className="ml-6 mt-1 border-l border-[#C8942E] pl-3">
//                           {knowledgeCenter.map(
//                             (subItem) => (
//                               <MobileItem
//                                 key={subItem[1]}
//                                 item={subItem}
//                                 prefix="health-library"
//                                 closeMenu={closeMobile}
//                               />
//                             )
//                           )}
//                         </div>
//                       )}
//                     </div>
//                   );
//                 }

//                 return (
//                   <MobileItem
//                     key={item[1]}
//                     item={item}
//                     prefix="health-library"
//                     closeMenu={closeMobile}
//                     directPath={true}
//                   />
//                 );
//               })}
//             </div>
//           </MobileAccordion>

//           {/* OUR DOCTORS */}
//           <button
//             type="button"
//             onClick={handleDoctorsNavigation}
//             className={mobileLinkClass}
//           >
//             <span>Our Doctors</span>

//             <ChevronRight
//               size={16}
//               className="text-[#C8942E]"
//             />
//           </button>

//           {/* SERVICES */}
//           <MobileAccordion
//             title="Services"
//             mainPath="/services"
//             active={isActive("/services")}
//             closeMenu={closeMobile}
//           >
//             <div className="space-y-[2px]">
//               {services.map((item) => (
//                 <MobileItem
//                   key={item[1]}
//                   item={item}
//                   prefix="services"
//                   closeMenu={closeMobile}
//                 />
//               ))}

//               <Link
//                 to="/services"
//                 onClick={closeMobile}
//                 className="group mt-2 flex items-center justify-between rounded-lg bg-[#edf7f6] px-3 py-[10px] text-[14px] font-medium text-[#064B50]"
//               >
//                 View All Services

//                 <ChevronRight
//                   size={15}
//                   className="text-[#C8942E]"
//                 />
//               </Link>
//             </div>
//           </MobileAccordion>

//           {/* INTERNATIONAL PATIENTS */}
//           <MobileAccordion
//             title="International Patients"
//             mainPath="/international-patients"
//             active={isActive("/international")}
//             closeMenu={closeMobile}
//           >
//             <div className="space-y-[2px]">
//               {international.map((item) => (
//                 <MobileItem
//                   key={item[1]}
//                   item={item}
//                   prefix="international"
//                   closeMenu={closeMobile}
//                 />
//               ))}
//             </div>
//           </MobileAccordion>

//           {/* CONTACT US */}
//           <Link
//             to="/contact"
//             onClick={closeMobile}
//             className={mobileLinkClass}
//           >
//             <span>Contact Us</span>

//             <ChevronRight
//               size={16}
//               className="text-[#C8942E]"
//             />
//           </Link>

//           {/* ==================================
//               MOBILE / TABLET PROFILE & LOGOUT
//           ================================== */}

//           {loggedIn ? (
//             <>
//               {/* MY PROFILE */}
//               <button
//                 type="button"
//                 onClick={() => {
//                   closeMobile();
//                   navigate("/profile");
//                 }}
//                 className={mobileLinkClass}
//               >
//                 <span className="flex items-center gap-3">
//                   <UserRound
//                     size={19}
//                     className="text-[#C8942E]"
//                   />
//                   My Profile
//                 </span>

//                 <ChevronRight
//                   size={16}
//                   className="text-[#C8942E]"
//                 />
//               </button>

//               {/* LOGOUT */}
//               <button
//                 type="button"
//                 onClick={handleLogout}
//                 className={mobileLinkClass}
//               >
//                 <span className="flex items-center gap-3">
//                   <LogOut
//                     size={19}
//                     className="text-[#C8942E]"
//                   />
//                   Logout
//                 </span>

//                 <ChevronRight
//                   size={16}
//                   className="text-[#C8942E]"
//                 />
//               </button>
//             </>
//           ) : (
//             /* LOGIN - WHEN NOT LOGGED IN */
//             <button
//               type="button"
//               onClick={handleLogin}
//               className={mobileLinkClass}
//             >
//               <span className="flex items-center gap-3">
//                 <LogIn
//                   size={19}
//                   className="text-[#C8942E]"
//                 />
//                 Login
//               </span>

//               <ChevronRight
//                 size={16}
//                 className="text-[#C8942E]"
//               />
//             </button>
//           )}

//           {/* ==================================
//               MOBILE REQUEST CALL BACK
//           ================================== */}

//           <button
//             type="button"
//             onClick={() => {
//               closeMobile();
//               setCallbackOpen(true);
//             }}
//             className="mt-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg border border-[#064B50] bg-[#064B50] text-[14px] font-semibold text-white shadow-[0_6px_18px_rgba(6,75,80,0.16)] transition-all duration-200 hover:border-[#C8942E] hover:bg-[#0B6B70]"
//           >
//             <Phone
//               size={17}
//               className="text-[#C8942E]"
//             />

//             Request Call Back
//           </button>

//           {/* SMALL DECORATION */}
//           <div className="mt-6 flex items-center justify-center gap-2">
//             <span className="h-px w-8 bg-[#C8942E]" />
//             <span className="h-2 w-2 rounded-full bg-[#C8942E]" />
//             <span className="h-px w-8 bg-[#C8942E]" />
//           </div>
//         </div>
//       </aside>

//       {/* ======================================
//           CALLBACK MODAL
//       ====================================== */}

//       <CallbackModal
//         open={callbackOpen}
//         onClose={() =>
//           setCallbackOpen(false)
//         }
//       />
//     </>
//   );
// }





