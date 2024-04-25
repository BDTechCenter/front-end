"use client"

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { Language, StorageKey } from "@/api/types/radar";
import enTranslations from "./translations/en.json";

i18n
	.use(new LanguageDetector(null, { lookupLocalStorage: StorageKey.language }))
	.use(initReactI18next)
	.init({
		fallbackLng: Language.en,
		interpolation: {
			escapeValue: false,
		},
		resources: {
			en: enTranslations,
		},
	});

export default i18n;
