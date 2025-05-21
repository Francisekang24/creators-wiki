"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { getBrowserLanguage, getLanguageFromCountry, dictionaries } from "@/lib/i18n"
import type { Dictionary, Locale } from "@/lib/i18n/types"

type LanguageContextType = {
  locale: Locale
  dictionary: Dictionary
  setLocale: (locale: Locale) => void
  isAutoDetect: boolean
  setIsAutoDetect: (isAuto: boolean) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({
  children,
  initialDictionary,
  initialLocale,
}: {
  children: React.ReactNode
  initialDictionary: Dictionary
  initialLocale: Locale
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [dictionary, setDictionary] = useState<Dictionary>(initialDictionary)
  const [locale, _setLocale] = useState<Locale>(initialLocale)
  const [isAutoDetect, setIsAutoDetect] = useState<boolean>(
    typeof window !== "undefined" ? localStorage.getItem("isAutoDetect") === "true" : true,
  )

  // Set locale and update localStorage
  const setLocale = (newLocale: Locale) => {
    _setLocale(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale)
    }
    // Update dictionary when locale changes
    setDictionary(dictionaries[newLocale] || dictionaries.en)
  }

  // Update isAutoDetect in localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isAutoDetect", isAutoDetect.toString())
    }
  }, [isAutoDetect])

  // Auto-detect language on initial load
  useEffect(() => {
    if (isAutoDetect && typeof window !== "undefined") {
      // Try to get language from localStorage first
      const savedLocale = localStorage.getItem("locale")

      if (savedLocale && ["en", "es", "fr", "pt", "it"].includes(savedLocale)) {
        setLocale(savedLocale as Locale)
      } else {
        // If no saved preference, detect from browser
        const detectedLocale = getBrowserLanguage()
        setLocale(detectedLocale)
        localStorage.setItem("locale", detectedLocale)
      }
    }
  }, [isAutoDetect])

  // Attempt to get user's country for better language detection
  useEffect(() => {
    if (isAutoDetect) {
      const detectCountry = async () => {
        try {
          const response = await fetch("https://ipapi.co/json/")
          const data = await response.json()
          if (data.country_code) {
            const localeFromCountry = getLanguageFromCountry(data.country_code)
            setLocale(localeFromCountry)
            localStorage.setItem("locale", localeFromCountry)
          }
        } catch (error) {
          console.error("Failed to detect country:", error)
        }
      }

      detectCountry()
    }
  }, [isAutoDetect])

  return (
    <LanguageContext.Provider value={{ locale, dictionary, setLocale, isAutoDetect, setIsAutoDetect }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
