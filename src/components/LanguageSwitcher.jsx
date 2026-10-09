
import { useTranslation } from "react-i18next";
import { ChevronDown, Languages } from "lucide-react";
import { languages } from "../i18n";

export default function LanguageSwitcher({
  mobile = false,
}) {
  const { i18n } = useTranslation();

  const currentLanguage =
    i18n.resolvedLanguage || i18n.language || "en";

  const changeLanguage = async (event) => {
    const selectedLanguage = event.target.value;
    await i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div
      className={
        mobile
          ? "flex w-full items-center gap-3"
          : "flex items-center gap-2"
      }
    >
      <Languages
        size={17}
        className="shrink-0 text-[#B78124]"
      />

      <div className="relative">
        <select
          value={currentLanguage}
          onChange={changeLanguage}
          aria-label="Select website language"
          className="
            cursor-pointer
            appearance-none
            rounded-lg
            border border-[#DFE9E8]
            bg-white
            py-2
            pl-3
            pr-8
            text-[13px]
            font-medium
            text-[#064B50]
            outline-none
            transition-colors
            hover:border-[#B78124]
            focus:border-[#B78124]
          "
        >
          {languages.map((language) => (
            <option
              key={language.code}
              value={language.code}
            >
              {language.name}
            </option>
          ))}
        </select>

        <ChevronDown
          size={14}
          className="
            pointer-events-none
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            text-[#064B50]
          "
        />
      </div>
    </div>
  );
}
