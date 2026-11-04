import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { getSettingsApi } from "../api/settingsApi";

const SiteSettingsContext = createContext(null);

const emptySettings = {
  logo: "",
  email: "",
  phone: "",
  alt_phone: "",
  facebook_url: "",
  instagram_url: "",
  linkedin_url: "",
  youtube_url: "",
  address: "",
  terms_conditions: "",
  privacy_policy: "",
};

const getMediaUrl = (path) => {
  if (!path) return "";

  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  const apiUrl = import.meta.env.VITE_API_URL || "";
  const serverUrl = apiUrl
    .replace(/\/api\/?$/, "")
    .replace(/\/$/, "");

  return `${serverUrl}${path.startsWith("/") ? path : `/${path}`}`;
};

export function SiteSettingsProvider({ children }) {
  const [settings, setSettings] = useState(emptySettings);
  const [settingsLoading, setSettingsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    getSettingsApi()
      .then((res) => {
        if (!mounted) return;

        const data = res.data?.data || {};

        setSettings({
          ...emptySettings,
          ...data,
          logo: getMediaUrl(data.logo),
        });
      })
      .catch((error) => {
        console.error("Public settings API error:", error);
      })
      .finally(() => {
        if (mounted) {
          setSettingsLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <SiteSettingsContext.Provider
      value={{ settings, settingsLoading }}
    >
      {children}
    </SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const context = useContext(SiteSettingsContext);

  if (!context) {
    throw new Error(
      "useSiteSettings must be used inside SiteSettingsProvider"
    );
  }

  return context;
}