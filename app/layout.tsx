import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
// import Footer from "@/components/footer" //Removed as per update
import CustomCursor from "@/components/custom-cursor"

export const metadata = {
  title: "Harsh - Full-Stack Developer & ML Enthusiast",
  description: "Portfolio of Harsh, a full-stack developer and machine learning enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main>{children}</main>
          </div>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}

