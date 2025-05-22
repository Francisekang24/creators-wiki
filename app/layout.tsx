import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { getDictionary } from "@/lib/i18n"
import { LanguageProvider } from "@/components/language-provider"
import type { Locale } from "@/lib/i18n/types"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Content Creators Wiki",
  description: "A collaborative platform to catalog and showcase digital creators from around the world",
}

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { locale?: string }
}>) {
  // Default to English if no locale is provided
  const locale = (params.locale || "en") as Locale
  const dictionary = getDictionary(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.className} theme-transition`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider initialDictionary={dictionary} initialLocale={locale}>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset className="px-4 md:px-6 lg:px-8 mt-2">
                {children}
              </SidebarInset>
            </SidebarProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body >
    </html >
  )
}