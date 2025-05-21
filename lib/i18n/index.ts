import type { Locale } from "./types"

// Import dictionaries
import en from "./dictionaries/en.json"
import es from "./dictionaries/es.json"
import fr from "./dictionaries/fr.json"
import pt from "./dictionaries/pt.json"
import it from "./dictionaries/it.json"

// Dictionary mapping
const dictionaries = {
  en,
  es,
  fr,
  pt,
  it,
}

// Export dictionaries directly
export { dictionaries }

// Get dictionary based on locale
export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] || dictionaries.en
}

// Get browser language
export function getBrowserLanguage(): Locale {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language.split("-")[0]

  // Check if browser language is supported
  if (browserLang in dictionaries) {
    return browserLang as Locale
  }

  return "en" // Default to English
}

// Map country codes to languages
export const countryToLanguage: Record<string, Locale> = {
  // English-speaking countries
  US: "en", // United States
  GB: "en", // United Kingdom
  CA: "en", // Canada (could be fr for Quebec)
  AU: "en", // Australia
  NZ: "en", // New Zealand

  // Spanish-speaking countries
  ES: "es", // Spain
  MX: "es", // Mexico
  AR: "es", // Argentina
  CO: "es", // Colombia
  CL: "es", // Chile

  // French-speaking countries
  FR: "fr", // France
  BE: "fr", // Belgium (could be nl)
  CH: "fr", // Switzerland (could be de, it)

  // Portuguese-speaking countries
  PT: "pt", // Portugal
  BR: "pt", // Brazil

  // Italian-speaking countries
  IT: "it", // Italy

  // Default
  DEFAULT: "en",
}

// Get language based on country code
export function getLanguageFromCountry(countryCode: string): Locale {
  return countryToLanguage[countryCode] || countryToLanguage.DEFAULT
}
