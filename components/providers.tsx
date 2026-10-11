'use client'
import { ThemeProvider, useTheme } from "next-themes"
const providers = ({children}: {children: React.ReactNode}) => {
  return (
    <ThemeProvider
    enableSystem
    attribute="class"
    defaultTheme="system"
    disableTransitionOnChange
    >
        {children}
    </ThemeProvider>
  )
}

export default providers