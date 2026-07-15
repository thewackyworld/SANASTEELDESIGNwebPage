import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggle = () => {
    const next = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-[9999] bg-[#eca821] text-black font-['Raleway:Black',sans-serif] font-black text-[16px] px-[18px] py-[10px] rounded-[24px] shadow-[3px_4px_2px_rgba(0,0,0,0.25)]"
    >
      {i18n.language === "ar" ? "English" : "العربية"}
    </button>
  );
}