import { createFileRoute } from "@tanstack/react-router";
import portraitImg from "../assets/portrait.jpg";
import consentImg from "../assets/project-consent.jpg";
import darkPatternImg from "../assets/project-darkpattern.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aman Shah — Usable Security & Privacy, NYU" },
      {
        name: "description",
        content:
          "Aman Shah — 1st-year PhD student in Computer Science at NYU, working on usable security & privacy: dating-app safety and online harm for vulnerable populations.",
      },
      { property: "og:title", content: "Aman Shah — Usable Security & Privacy, NYU" },
      {
        property: "og:description",
        content:
          "1st-year PhD student in Computer Science at NYU, working on usable security & privacy: dating-app safety and online harm for vulnerable populations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased selection:bg-accent/30">
      {/* sticky mini nav */}
      <nav className="sticky top-0 z-30 border-b border-line bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-[80rem] px-6 py-3 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground">
            A<span className="text-accent">.</span>Shah
          </span>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
            <a href="#work" className="hidden sm:inline hover:text-accent transition-colors">
              Work
            </a>
            <a href="#awards" className="hidden sm:inline hover:text-accent transition-colors">
              Awards
            </a>
            <a href="#projects" className="hidden sm:inline hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* hero */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-[80rem] px-6 pt-16 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-10 items-end">
            <div className="md:col-span-8 fade-up">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted mb-6">
                Usable security & privacy · NYU
              </p>
              <h1 className="font-display font-medium leading-[0.9] tracking-tight text-balance text-[clamp(3.5rem,10vw,8.5rem)] text-foreground">
                Aman
                <br />
                <span className="italic">Shah</span>
              </h1>
              <p className="mt-8 max-w-[52ch] text-pretty text-lg text-foreground/80 leading-relaxed">
                I design and study security tools for people who are told they should be more careful
                with their own lives. Right now I'm a first-year PhD student at NYU, working on
                dating-app safety and online harm for vulnerable populations.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
                <a href="mailto:aman@nyu.edu" className="text-accent hover:opacity-70 transition-opacity">
                  aman@nyu.edu
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Google Scholar
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-foreground hover:text-accent transition-colors">
                  Bluesky
                </a>
              </div>
            </div>
            <div className="md:col-span-4 md:translate-y-6 fade-up" style={{ animationDelay: "0.12s" }}>
              <img
                src={portraitImg}
                alt="Portrait of Aman Shah"
                width={1024}
                height={1280}
                className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-black/10"
              />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Fig. 01 — self, 2026
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[80rem] px-6">
        {/* publications */}
        <section id="work" className="border-b border-line py-20">
          <div className="flex items-baseline justify-between border-b border-foreground pb-4 mb-2">
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground text-balance">
              Selected publications
            </h2>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">(a)</span>
          </div>
          <ol className="mt-4">
            <li className="group grid grid-cols-12 gap-x-6 items-baseline py-6 border-b border-line fade-up">
              <span className="col-span-2 md:col-span-1 font-mono text-sm text-accent">01</span>
              <div className="col-span-10 md:col-span-11">
                <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground group-hover:text-accent transition-colors">
                  You Can't Be Both: Tension Between Safety and Autonomy in Dating-App Reporting
                  Flows
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  A. Shah, R. Okonkwo, M. Delgado —{" "}
                  <span className="text-foreground">SOUPS 2026 · Best Poster</span>
                </p>
                <div className="mt-2 flex gap-5 font-mono text-xs uppercase tracking-[0.1em]">
                  <a href="#" className="text-foreground hover:text-accent transition-colors">
                    Paper
                  </a>
                  <a href="#" className="text-foreground hover:text-accent transition-colors">
                    Data
                  </a>
                </div>
              </div>
            </li>
            <li
              className="group grid grid-cols-12 gap-x-6 items-baseline py-6 border-b border-line fade-up"
              style={{ animationDelay: "0.08s" }}
            >
              <span className="col-span-2 md:col-span-1 font-mono text-sm text-accent">02</span>
              <div className="col-span-10 md:col-span-11">
                <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground group-hover:text-accent transition-colors">
                  The Harm of the Opt-In: Measuring Dark Patterns in Digital Consent for Minors
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  A. Shah, L. Ferrante — <span className="text-foreground">USENIX Security 2026</span>
                </p>
                <div className="mt-2 flex gap-5 font-mono text-xs uppercase tracking-[0.1em]">
                  <a href="#" className="text-foreground hover:text-accent transition-colors">
                    Paper
                  </a>
                  <a href="#" className="text-foreground hover:text-accent transition-colors">
                    Video
                  </a>
                </div>
              </div>
            </li>
            <li
              className="group grid grid-cols-12 gap-x-6 items-baseline py-6 border-b border-line fade-up"
              style={{ animationDelay: "0.16s" }}
            >
              <span className="col-span-2 md:col-span-1 font-mono text-sm text-accent">03</span>
              <div className="col-span-10 md:col-span-11">
                <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground group-hover:text-accent transition-colors">
                  When the Algorithm Cares Too Much: A Field Study of Safety Nudges and
                  Self-Reported Anxiety
                </h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  A. Shah, K. Whitfield, P. Rao — <span className="text-foreground">CHI 2026</span>
                </p>
                <div className="mt-2 flex gap-5 font-mono text-xs uppercase tracking-[0.1em]">
                  <a href="#" className="text-foreground hover:text-accent transition-colors">
                    Paper
                  </a>
                </div>
              </div>
            </li>
          </ol>
        </section>

        {/* awards & talks */}
        <section id="awards" className="border-b border-line py-20">
          <div className="flex items-baseline justify-between border-b border-foreground pb-4 mb-2">
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground text-balance">
              Awards & talks
            </h2>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">(b)</span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <ul className="border-b border-line">
              <li className="py-5 border-b border-line flex items-baseline gap-5 fade-up">
                <span className="font-mono text-xs text-muted shrink-0">2026</span>
                <span className="text-foreground">Best Poster Award — SOUPS 2026</span>
              </li>
              <li
                className="py-5 border-b border-line flex items-baseline gap-5 fade-up"
                style={{ animationDelay: "0.06s" }}
              >
                <span className="font-mono text-xs text-muted shrink-0">2026</span>
                <span className="text-foreground">NSF Graduate Research Fellowship</span>
              </li>
              <li
                className="py-5 flex items-baseline gap-5 fade-up"
                style={{ animationDelay: "0.12s" }}
              >
                <span className="font-mono text-xs text-muted shrink-0">2025</span>
                <span className="text-foreground">Dean's List — NYU Tandon</span>
              </li>
            </ul>
            <ul className="border-b border-line">
              <li className="py-5 border-b border-line flex items-baseline gap-5 fade-up">
                <span className="font-mono text-xs text-muted shrink-0">2026</span>
                <span className="text-foreground">
                  Invited talk — &ldquo;Designing for the Vulnerable&rdquo;, CHI 2026
                </span>
              </li>
              <li
                className="py-5 border-b border-line flex items-baseline gap-5 fade-up"
                style={{ animationDelay: "0.06s" }}
              >
                <span className="font-mono text-xs text-muted shrink-0">2026</span>
                <span className="text-foreground">Panelist — Online Safety for Minors, SOUPS 2026</span>
              </li>
              <li
                className="py-5 flex items-baseline gap-5 fade-up"
                style={{ animationDelay: "0.12s" }}
              >
                <span className="font-mono text-xs text-muted shrink-0">2025</span>
                <span className="text-foreground">Workshop presenter — Privacy and the Person, USENIX</span>
              </li>
            </ul>
          </div>
        </section>

        {/* projects */}
        <section id="projects" className="py-20">
          <div className="flex items-baseline justify-between border-b border-foreground pb-4 mb-2">
            <h2 className="font-display text-3xl font-medium tracking-tight text-foreground text-balance">
              Other projects
            </h2>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">(c)</span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            <div className="group">
              <img
                src={consentImg}
                alt="Consent Anatomy — scattered consent-form field notes"
                width={1280}
                height={1024}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover outline-1 -outline-offset-1 outline-black/10"
              />
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
                Consent Anatomy
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                Research tool · 2026
              </p>
              <p className="mt-3 max-w-[46ch] text-pretty text-foreground/80">
                A field kit for auditing consent flows, cataloguing 240 patterns across dating and
                social apps.
              </p>
            </div>
            <div className="group">
              <img
                src={darkPatternImg}
                alt="The Dark Pattern Index — grid of dark-pattern screenshots"
                width={1280}
                height={1024}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover outline-1 -outline-offset-1 outline-black/10"
              />
              <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground group-hover:text-accent transition-colors">
                The Dark Pattern Index
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-muted">
                Open dataset · 2025
              </p>
              <p className="mt-3 max-w-[46ch] text-pretty text-foreground/80">
                An ongoing, community-maintained catalogue of manipulative interfaces, with severity
                scoring.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* footer / contact */}
      <footer id="contact" className="border-t border-foreground">
        <div className="mx-auto max-w-[80rem] px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">Contact — (d)</p>
          <a
            href="mailto:aman@nyu.edu"
            className="mt-4 inline-block font-display text-[clamp(2rem,6vw,4.5rem)] font-medium tracking-tight leading-none text-foreground hover:text-accent transition-colors text-balance"
          >
            aman@nyu.edu
          </a>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.12em]">
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Google Scholar
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              GitHub
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              Bluesky
            </a>
            <a href="#" className="text-foreground hover:text-accent transition-colors">
              CV (PDF)
            </a>
          </div>
          <div className="mt-16 flex flex-col sm:flex-row justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted border-t border-line pt-6">
            <span>Set in Fraunces & Archivo · printed zine spirit</span>
            <span>© 2026 Aman Shah · New York</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
