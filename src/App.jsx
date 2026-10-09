import {
  useEffect,
  useState,
} from "react";

import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CallbackModal from "./components/CallbackModal";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthDrawer from "./components/auth/AuthDrawer";

import Home from "./pages/Home";
import Specialities from "./pages/Specialities";
import Profile from "./pages/Profile";

import BecomePartnerPage from "./pages/BecomePartner";
import Contact from "./pages/Contact";
import InternationalPatients from "./pages/InternationalPatients";
import RequestEstimate from "./pages/RequestEstimate";
import PlanYourTrip from "./pages/PlanYourTrip";
import PatientHelpDesk from "./pages/PatientHelpDesk";

import SpecialityDetails from "./pages/SpecialityDetails";
import SubSpecialityDetails from "./pages/SubSpecialityDetails";




import HealthLibrary from "./pages/HealthLibrary";
import HealthConditionDetails from "./pages/HealthConditionDetails";
import Research from "./pages/Research";

import AllTreatments from "./pages/AllTreatments";
import TreatmentDetails from "./pages/TreatmentDetails";
import AllAilments from "./pages/AllAilments";
import AilmentDetails from "./pages/AilmentDetails";
import AllTechnologies from "./pages/AllTechnologies";
import TechnologyDetails from "./pages/TechnologyDetails";
import WebStories from "./pages/WebStories";

import Blogs from "./pages/Blogs";
import Videos from "./pages/Videos";
import CaseStudies from "./pages/CaseStudies";
import BlogDetails from "./pages/BlogDetails";
import CaseStudyDetails from "./pages/CaseStudyDetails";

import Doctors from "./pages/Doctors";

import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";

import PatientProfileDemo from "./pages/PatientProfileDemo";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [callbackOpen, setCallbackOpen] =
    useState(false);

  const [authOpen, setAuthOpen] =
    useState(false);

  const [authMode, setAuthMode] =
    useState("login");

  const [authRedirect, setAuthRedirect] =
    useState("/doctors");

  // const openAuth = (
  //   mode = "login",
  //   redirect = "/doctors"
  // ) => {
  //   setAuthMode(mode);
  //   setAuthRedirect(redirect);
  //   setAuthOpen(true);
  // };
  const openAuth = (
  mode = "login",
  redirect = ""
) => {
  setAuthMode(mode);
  setAuthRedirect(redirect);
  setAuthOpen(true);
};

  const closeAuth = () => {
    setAuthOpen(false);

    // If auth URL itself opened the drawer,
    // closing returns user to home.
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/forgot-password" ||
      location.pathname === "/set-password" ||
      location.pathname === "/reset-password"
    ) {
      navigate("/", {
        replace: true,
      });
    }
  };

  /*
    Handles URLs opened directly from:
    - activation email
    - reset password email
    - old /login links
  */
  useEffect(() => {
    const params =
      new URLSearchParams(location.search);

    if (location.pathname === "/login") {
      setAuthMode("login");

      setAuthRedirect(
        params.get("redirect") ||
          "/doctors"
      );

      setAuthOpen(true);
    }

    if (location.pathname === "/register") {
      setAuthMode("register");
      setAuthOpen(true);
    }

    if (
      location.pathname ===
      "/forgot-password"
    ) {
      setAuthMode("forgot");
      setAuthOpen(true);
    }

    if (
      location.pathname ===
      "/set-password"
    ) {
      setAuthMode("set-password");
      setAuthOpen(true);
    }

    if (
      location.pathname ===
      "/reset-password"
    ) {
      setAuthMode("reset-password");
      setAuthOpen(true);
    }
  }, [
    location.pathname,
    location.search,
  ]);

  return (
    <>
      <Header
        onCallback={() =>
          setCallbackOpen(true)
        }
        onOpenAuth={openAuth}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        {/* AUTH URLS
            Keep Home behind drawer.
        */}

        <Route
          path="/login"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        <Route
          path="/forgot-password"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        <Route
          path="/set-password"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        <Route
          path="/reset-password"
          element={
            <Home
              onOpenAuth={openAuth}
            />
          }
        />

        {/* PROFILE */}

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
  path="/patient-profile-demo"
  element={<PatientProfileDemo />}
/>

        {/* DOCTORS */}

        <Route
  path="/doctors"
  element={
    <ProtectedRoute>
      <Doctors />
    </ProtectedRoute>
  }
/>



        {/* SPECIALITIES */}

        <Route
          path="/specialities"
          element={<Specialities />}
        />

   
       <Route
  path="/speciality/:slug"
  element={<SpecialityDetails />}
/>

<Route
  path="/speciality/:slug/sub-speciality/:subSpecialitySlug"
  element={<SubSpecialityDetails />}
/>

<Route
  path="/speciality/:slug/treatments"
  element={<AllTreatments />}
/>

<Route
  path="/speciality/:slug/ailments"
  element={
    <AllAilments />
  }
/>

<Route
  path="/technologies"
  element={<AllTechnologies />}
/>

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* HEALTH LIBRARY */}

        <Route
  path="/health-library"
  element={<HealthLibrary />}
/>

<Route
  path="/health-library/:slug"
  element={
    <HealthConditionDetails />
  }
/>

<Route
  path="/research"
  element={<Research />}
/>

<Route
  path="/treatments"
  element={<AllTreatments />}
/>
<Route
  path="/treatments/:slug"
  element={<TreatmentDetails />}
/>

<Route
  path="/ailments"
  element={<AllAilments />}
/>
<Route
  path="/ailments/:slug"
  element={
    <AilmentDetails />
  }
/>

<Route
  path="/technologies/:slug"
  element={<TechnologyDetails />}
/>
<Route
  path="/web-stories"
  element={
    <WebStories />
  }
/>
<Route
  path="/health-library/blogs"
  element={<Blogs />}
/>

<Route
  path="/health-library/blogs/:slug"
  element={<BlogDetails />}
/>

<Route
  path="/health-library/videos"
  element={<Videos />}
/>

<Route
  path="/health-library/case-studies"
  element={<CaseStudies />}
/>

<Route
  path="/health-library/case-studies/:slug"
  element={<CaseStudyDetails />}
/>

        {/* SERVICES */}
<Route
  path="/services"
  element={<Services />}
/>

<Route
  path="/services/:slug"
  element={<ServiceDetails />}
/>


     <Route
  path="/international-patients"
  element={
    <InternationalPatients
      onOpenAuth={openAuth}
    />
  }
/>
<Route
  path="/international/patient-help-desk"
  element={<PatientHelpDesk />}
/>
<Route
  path="/international/request-an-estimate"
  element={<RequestEstimate />}
/>

<Route
  path="/international/plan-your-trip"
  element={<PlanYourTrip />}
/>


        {/* CONTACT */}

      <Route
        path="/become-a-partner"
        element={<BecomePartnerPage />}
      />
        
      </Routes>

      <Footer />

      <CallbackModal
        open={callbackOpen}
        onClose={() =>
          setCallbackOpen(false)
        }
      />

      <AuthDrawer
        open={authOpen}
        mode={authMode}
        redirect={authRedirect}
        onClose={closeAuth}
        onModeChange={setAuthMode}
      />
    </>
  );
}