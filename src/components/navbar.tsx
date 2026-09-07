import { useEffect, useState } from "react"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useTheme } from "@/lib/theme"
import { useI18n } from "@/lib/i18n"

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const { t, content } = useI18n()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={
        "sticky top-0 z-40 border-b transition-colors duration-300 " +
        (scrolled
          ? "border-border bg-background/85 backdrop-blur-lg"
          : "border-transparent bg-transparent")
      }
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#hero"
          className="rounded-sm font-mono text-sm tracking-tight text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          miguelvzs
        </a>

        <nav aria-label={t.aria.mainNav} className="hidden items-center gap-6 md:flex">
          {content.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:gap-2">
          <LanguageSwitcher />

          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? t.aria.themeLight : t.aria.themeDark}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="md:hidden" aria-label={t.aria.openMenu}>
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" closeLabel={t.aria.closeMenu}>
              <SheetHeader>
                <SheetTitle>{content.profile.name}</SheetTitle>
              </SheetHeader>
              <nav aria-label={t.aria.mobileNav} className="flex flex-col gap-1 px-4 pb-4">
                {content.nav.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <a
                      href={item.href}
                      className="rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted"
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
