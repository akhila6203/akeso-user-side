import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getSpecialities,
} from "../api/specialitiesApi";


const SpecialitiesContext =
  createContext(null);


export function SpecialitiesProvider({
  children,
}) {
  const [
    specialities,
    setSpecialities,
  ] = useState([]);

  const [
    loading,
    setLoading,
  ] = useState(true);

  const [
    error,
    setError,
  ] = useState("");


  /* =========================================
     LOAD SPECIALITIES ONCE
  ========================================= */

  useEffect(() => {
    let mounted = true;

    const loadSpecialities =
      async () => {
        try {
          setLoading(true);
          setError("");

          const response =
            await getSpecialities();

          if (!mounted) return;

          const rows =
            Array.isArray(response?.rows)
              ? response.rows
              : [];

          setSpecialities(rows);
        } catch (err) {
          console.error(
            "Specialities API Error:",
            err
          );

          if (!mounted) return;

          setError(
            "Unable to load specialities."
          );
        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      };

    loadSpecialities();

    return () => {
      mounted = false;
    };
  }, []);


  return (
    <SpecialitiesContext.Provider
      value={{
        specialities,
        loading,
        error,
      }}
    >
      {children}
    </SpecialitiesContext.Provider>
  );
}


export function useSpecialities() {
  const context =
    useContext(
      SpecialitiesContext
    );

  if (!context) {
    throw new Error(
      "useSpecialities must be used inside SpecialitiesProvider"
    );
  }

  return context;
}