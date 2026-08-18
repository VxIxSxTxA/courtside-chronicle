import { createFileRoute, Link } from "@tanstack/react-router";
import { Trophy, Calendar, Users, ChevronRight, MapPin, Mail, Shirt } from "lucide-react";

import heroImage from "@/assets/hero-basketball.jpg";
import communityImage from "@/assets/community-team.jpg";
import teamCaptain from "@/assets/team-captain.jpg.asset.json";
import teamGuard1 from "@/assets/team-guard1.jpg.asset.json";
import teamGuard2 from "@/assets/team-guard2.jpg.asset.json";
import teamForward1 from "@/assets/team-forward1.jpg.asset.json";
import teamForward2 from "@/assets/team-forward2.jpg.asset.json";
import teamCenter from "@/assets/team-center.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hoop Pilipinas — Filipino Basketball Community" },
      { name: "description", content: "Team standings, game recaps, and the community behind every Filipino buzzer-beater." },
      { property: "og:title", content: "Hoop Pilipinas — Filipino Basketball Community" },
      { property: "og:description", content: "Team standings, game recaps, and the community behind every Filipino buzzer-beater." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const navLinks = [
  { label: "Standings", href: "#standings" },
  { label: "Events", href: "#events" },
  { label: "About", href: "#about" },
];

const standings = [
  { rank: 1, team: "Barangay Kings", gp: 12, w: 10, l: 2, pct: 0.833, pts: 20 },
  { rank: 2, team: "Manila Rising", gp: 12, w: 9, l: 3, pct: 0.75, pts: 18 },
  { rank: 3, team: "Cebu Sharks", gp: 12, w: 8, l: 4, pct: 0.667, pts: 16 },
  { rank: 4, team: "Davao Heat", gp: 12, w: 7, l: 5, pct: 0.583, pts: 14 },
  { rank: 5, team: "Iloilo Ballers", gp: 12, w: 5, l: 7, pct: 0.417, pts: 10 },
  { rank: 6, team: "Quezon City United", gp: 12, w: 4, l: 8, pct: 0.333, pts: 8 },
  { rank: 7, team: "Pampanga Lights", gp: 12, w: 2, l: 10, pct: 0.167, pts: 4 },
];

const events = [
  {
    title: "Summer Showdown Finals Recap",
    date: "August 10, 2026",
    excerpt: "Barangay Kings took the crown in overtime with a clutch three from the corner. Read the full breakdown of the championship game.",
    tag: "Recap",
    color: "blue",
  },
  {
    title: "Rising Stars Clinic in Cebu",
    date: "July 24, 2026",
    excerpt: "Over 80 young ballers joined the community clinic for drills, life lessons, and a full day of hoops. Photos inside.",
    tag: "Community",
    color: "yellow",
  },
  {
    title: "Davao Heat Unveil New Court",
    date: "July 5, 2026",
    excerpt: "The local court renovation is complete. See how the community came together to build a new home for weekend games.",
    tag: "Build",
    color: "green",
  },
];

const values = [
  { title: "Community First", body: "Every game is a reunion. We play for the neighborhood, not just the scoreboard." },
  { title: "Respect the Game", body: "Hard play, clean play. We honor the court, the refs, and every player who steps on it." },
  { title: "Grow Together", body: "From weekend warriors to rising stars, we train, learn, and level up as one family." },
];

function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Standings />
      <Events />
      <About />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground">
            <Trophy className="h-5 w-5" />
          </span>
          <span className="font-display text-2xl tracking-wide text-foreground">Hoop Pilipinas</span>
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#about"
          className="hidden rounded-md bg-accent px-4 py-2 font-body text-sm font-semibold text-accent-foreground transition-transform hover:scale-105 sm:inline-flex"
        >
          Join Us
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-hoops-navy text-primary-foreground">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Filipino basketball game in golden hour"
          className="h-full w-full object-cover opacity-40"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hoops-navy via-hoops-navy/80 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-1.5 font-body text-sm font-medium text-primary-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Season 2026 is live
          </span>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] text-primary-foreground sm:text-7xl lg:text-8xl">
            FILIPINO HOOPS,
            <br />
            <span className="text-accent">COMMUNITY PRIDE.</span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg text-primary-foreground/80">
            A home for every barangay court, weekend tournament, and buzzer-beater memory in the Philippines.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#standings"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-body text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Trophy className="h-4 w-4" />
              View Standings
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3 font-body text-base font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-primary-foreground/20"
            >
              <Calendar className="h-4 w-4" />
              Read Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Standings() {
  return (
    <section id="standings" className="bg-court py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="font-body text-sm font-semibold uppercase tracking-wider text-primary">Season 2026</span>
          <h2 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Team Standings</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">See who is climbing the ladder and who is fighting for a playoff spot.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="px-4 py-4 text-left font-display text-lg text-muted-foreground">Rank</th>
                  <th className="px-4 py-4 text-left font-display text-lg text-muted-foreground">Team</th>
                  <th className="px-4 py-4 text-center font-display text-lg text-muted-foreground">GP</th>
                  <th className="px-4 py-4 text-center font-display text-lg text-muted-foreground">W</th>
                  <th className="px-4 py-4 text-center font-display text-lg text-muted-foreground">L</th>
                  <th className="px-4 py-4 text-center font-display text-lg text-muted-foreground">Win%</th>
                  <th className="px-4 py-4 text-center font-display text-lg text-muted-foreground">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row) => (
                  <tr key={row.team} className="border-b border-border last:border-b-0 transition-colors hover:bg-muted/50">
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full font-display text-base ${
                          row.rank === 1
                            ? "bg-accent text-accent-foreground"
                            : row.rank <= 3
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {row.rank}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="font-body text-base font-semibold text-foreground">{row.team}</span>
                    </td>
                    <td className="px-4 py-4 text-center font-body text-foreground">{row.gp}</td>
                    <td className="px-4 py-4 text-center font-body font-semibold text-hoops-green">{row.w}</td>
                    <td className="px-4 py-4 text-center font-body font-semibold text-hoops-red">{row.l}</td>
                    <td className="px-4 py-4 text-center font-body text-foreground">{row.pct.toFixed(3)}</td>
                    <td className="px-4 py-4 text-center font-body font-bold text-foreground">{row.pts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="font-body text-sm font-semibold uppercase tracking-wider text-primary">From the Court</span>
            <h2 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">Events & Recaps</h2>
          </div>
          <a
            href="#events"
            className="inline-flex items-center gap-1 font-body text-sm font-semibold text-primary hover:underline"
          >
            View all stories <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className={`mb-4 w-fit rounded-full px-3 py-1 font-body text-xs font-semibold uppercase ${
                  event.color === "blue"
                    ? "bg-primary/10 text-primary"
                    : event.color === "yellow"
                      ? "bg-accent/20 text-hoops-navy"
                      : "bg-hoops-green/10 text-hoops-green"
                }`}
              >
                {event.tag}
              </span>
              <h3 className="font-display text-2xl text-foreground group-hover:text-primary">{event.title}</h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">{event.date}</p>
              <p className="mt-4 line-clamp-3 flex-1 font-body text-foreground/80">{event.excerpt}</p>
              <button className="mt-6 inline-flex w-fit items-center gap-1 font-body text-sm font-semibold text-primary transition-transform group-hover:translate-x-1">
                Read more <ChevronRight className="h-4 w-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={communityImage}
              alt="Hoop Pilipinas community members after a game"
              className="h-full w-full object-cover"
              width={1280}
              height={720}
              loading="lazy"
            />
            <div className="absolute bottom-4 left-4 rounded-md bg-card/90 px-4 py-2 backdrop-blur">
              <p className="font-display text-xl text-foreground">Est. 2020</p>
              <p className="font-body text-xs text-muted-foreground">Quezon City, Philippines</p>
            </div>
          </div>

          <div>
            <span className="font-body text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
            <h2 className="mt-2 font-display text-5xl text-foreground sm:text-6xl">More Than a Game</h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-foreground/80">
              Hoop Pilipinas started on a cracked barangay court with a borrowed ball and a dream: to bring neighbors together through basketball. Today, we are a community of players, coaches, fans, and families who believe every court has a story worth telling.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-display text-xl text-foreground">{value.title}</h3>
                  <p className="mt-2 font-body text-sm text-muted-foreground">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-hoops-navy py-12 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-accent-foreground">
                <Trophy className="h-5 w-5" />
              </span>
              <span className="font-display text-2xl text-primary-foreground">Hoop Pilipinas</span>
            </div>
            <p className="mt-4 max-w-sm font-body text-sm text-primary-foreground/70">
              Building the Philippines&apos; most passionate basketball community, one court at a time.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground">Sections</h4>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-primary-foreground">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 font-body text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 text-accent" /> Quezon City, Philippines
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 text-accent" /> hello@hooppilipinas.ph
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-primary-foreground/70">
                <Users className="h-4 w-4 text-accent" /> Join 2,400+ members
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Hoop Pilipinas. Made for Filipino basketball lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
