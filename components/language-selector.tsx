"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, Globe } from "lucide-react"
import type { Locale } from "@/lib/i18n/types"

export function LanguageSelector() {
  const { locale, setLocale, isAutoDetect, setIsAutoDetect, dictionary } = useLanguage()

  const languages = [
    { code: "en", name: dictionary.settings.languages.en },
    { code: "es", name: dictionary.settings.languages.es },
    { code: "fr", name: dictionary.settings.languages.fr },
    { code: "pt", name: dictionary.settings.languages.pt },
    { code: "it", name: dictionary.settings.languages.it },
  ]

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setIsAutoDetect(false)
  }

  const handleAutoDetect = () => {
    setIsAutoDetect(true)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Globe className="h-4 w-4" />
          <span className="sr-only">{dictionary.settings.language}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{dictionary.settings.languagePreference}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code as Locale)}
              className="flex items-center justify-between"
            >
              <span>{language.name}</span>
              {locale === language.code && !isAutoDetect && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleAutoDetect} className="flex items-center justify-between">
            <span>{dictionary.settings.languages.auto}</span>
            {isAutoDetect && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
