import React, { createContext, useState } from "react";
import * as Localization from "expo-localization";
import i18n from "i18n-js";
import { en, de } from "../Localization";

export const LocalizationContext = createContext();

export const LocalizationProvider = ({ children }) => {
  const [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, de };
  i18n.locale = locale;
  return (
    <LocalizationContext.Provider value={{ setLocale, i18n , locale}}>
      {children}
    </LocalizationContext.Provider>
  );
};
