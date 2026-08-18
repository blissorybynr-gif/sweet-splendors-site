import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-chocolate.jpg";
import darkImage from "@/assets/dark-chocolate.jpg";
import milkImage from "@/assets/milk-chocolate.jpg";
import whiteImage from "@/assets/white-chocolate.jpg";
import bountiesImage from "@/assets/bounties.jpg";
import miniBarsImage from "@/assets/mini-bars.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cacaoire — Single-Origin Chocolate, Crafted to Melt" },
      {
        name: "description",
        content:
          "Cacaoire crafts hand-tempered chocolate bars, mini bars and coconut bounties from single-origin beans. Explore our dark, milk and white chocolate collections.",
      },
      { property: "og:title", content: "Cacaoire — Single-Origin Chocolate" },
      {
        property: "og:description",
        content:
          "Hand-tempered chocolate bars, mini bars and coconut bounties. Discover dark, milk and white chocolate crafted from single-origin beans.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cacaoire — Single-Origin Chocolate" },
      {
        name: "twitter:description",
        content:
          "Hand-tempered chocolate bars, mini bars and coconut bounties. Discover dark, milk and white chocolate.",
      },
      { name: "twitter:image", content: heroImage },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-display text-2xl italic tracking-tight text-cream"
        >
          Cacaoire
        </a>
        <div className="hidden gap-10 text-xs font-medium uppercase tracking-[0.2em] text-cream/80 sm:flex">
          <a href="#collection" className="transition-colors hover:text-gold">
            Collection
          </a>
          <a href="#bites" className="transition-colors hover:text-gold">
            Bites
          </a>
          <a href="#spectrum" className="transition-colors hover:text-gold">
            The Spectrum
          </a>
        </div>
        <button className="rounded-full bg-gold px-5 py-2 text-xs font-semibold uppercase tracking-widest text-cocoa transition-transform hover:scale-[1.03]">
          Shop
        </button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="A dark chocolate bar snapped in half with scattered cacao nibs"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-cocoa/85 via-cocoa/55 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-2xl reveal">
          <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.35em] text-gold">
            Est. 1924 · Single-Origin
          </span>
          <h1 className="font-display text-5xl leading-[0.95] text-cream sm:text-7xl md:text-8xl">
            Purely
            <br />
            <span className="italic text-gold">Decadent.</span>
          </h1>
          <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-cream/80">
            Hand-tempered chocolate bars, mini bars and coconut bounties —
            crafted from single-origin beans and slow-aged for a melt that
            lingers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#collection"
              className="rounded-full bg-gold px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-cocoa transition-transform hover:scale-[1.03]"
            >
              Explore Collection
            </a>
            <a
              href="#spectrum"
              className="rounded-full border border-cream/40 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-cream transition-colors hover:bg-cream/10"
            >
              The Spectrum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    name: "Midnight Intense",
    type: "Dark Chocolate Bar",
    cacao: "85% Cacao",
    notes: "Espresso, tobacco & wild blackberry",
    image: darkImage,
    alt: "Stack of 85 percent dark chocolate squares on dark stone",
  },
  {
    name: "Velvet Classic",
    type: "Milk Chocolate Bar",
    cacao: "45% Alpine Milk",
    notes: "Caramel, vanilla & a whisper of sea salt",
    image: milkImage,
    alt: "Milk chocolate bar broken open showing creamy sea salt interior",
  },
  {
    name: "Ivory Botanical",
    type: "White Chocolate Bar",
    cacao: "Cacao Butter",
    notes: "Rose petals, pistachio & Madagascan vanilla",
    image: whiteImage,
    alt: "White chocolate bar topped with rose petals and pistachio",
  },
];

function Collection() {
  return (
    <section id="collection" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
            The Collection
          </span>
          <h2 className="font-display text-4xl leading-tight text-cocoa md:text-6xl">
            Bars worth the slow melt.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl bg-card shadow-[0_18px_50px_-24px_color-mix(in_oklab,var(--cocoa)_45%,transparent)] transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-caramel">
                  {p.type}
                </span>
                <h3 className="mt-2 font-display text-2xl italic text-cocoa">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {p.cacao}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.notes}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const bites = [
  {
    num: "01",
    title: "Coconut Bounties",
    image: bountiesImage,
    alt: "Coconut filled chocolate bounties cut open on a wooden surface",
    body: "Tender organic coconut shreds folded into white chocolate ganache, then dipped twice in a 70% dark shell. A nostalgic bite, elevated.",
  },
  {
    num: "02",
    title: "Artisan Mini Bars",
    image: miniBarsImage,
    alt: "Pile of small wrapped mini chocolate bars in gold foil",
    body: "Our full-sized flavours in elegant, pocket-sized portions. Wrapped in gold foil and perfect for an evening espresso pairing.",
  },
];

function Bites() {
  return (
    <section id="bites" className="bg-cocoa py-24 text-cream md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            Signature Bites
          </span>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Small bites, <span className="italic text-gold">big impressions.</span>
          </h2>
        </div>
        <div className="grid gap-16 md:grid-cols-2">
          {bites.map((b) => (
            <div key={b.num} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-gold/20">
                <img
                  src={b.image}
                  alt={b.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex gap-5">
                <span className="font-display text-3xl italic text-gold/70">
                  {b.num}
                </span>
                <div>
                  <h3 className="font-display text-2xl italic">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    {b.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const spectrum = [
  {
    name: "Dark",
    title: "The Purist",
    image: darkImage,
    alt: "Dark chocolate pieces with cacao nibs in moody light",
    body: "High cacao density, low sugar. Notes of red fruit, tobacco and earthy oak — the truest expression of the bean. Rich in antioxidants and best paired with espresso or aged spirits.",
    cacao: "70–90% Cacao",
  },
  {
    name: "Milk",
    title: "The Balance",
    image: milkImage,
    alt: "Smooth milk chocolate with a creamy swirl",
    body: "A harmonic blend of roasted cacao and grass-fed Alpine cream. Caramel-forward with a buttery, lingering finish — the comforting middle ground that made chocolate a household love.",
    cacao: "30–50% Cacao",
  },
  {
    name: "White",
    title: "The Ether",
    image: whiteImage,
    alt: "White chocolate shards with rose petals on marble",
    body: "Pure cacao butter infused with Madagascan vanilla — no cocoa solids at all. Floral, delicate and weightless on the palate, with a creamy sweetness and no bitterness.",
    cacao: "Cacao Butter",
  },
];

function Spectrum() {
  return (
    <section id="spectrum" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
            A Masterclass in Variation
          </span>
          <h2 className="font-display text-4xl leading-tight text-cocoa md:text-6xl">
            The Spectrum of Taste
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-muted-foreground">
            Three temperaments, one bean. Discover what sets dark, milk and
            white chocolate apart — and find the one that melts for you.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {spectrum.map((s) => (
            <article
              key={s.name}
              className="group overflow-hidden rounded-2xl bg-card shadow-[0_18px_50px_-24px_color-mix(in_oklab,var(--cocoa)_45%,transparent)] transition-transform duration-500 hover:-translate-y-2"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={s.image}
                  alt={s.alt}
                  width={900}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-2xl italic text-cocoa">
                    {s.name} Chocolate
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-caramel">
                    {s.cacao}
                  </span>
                </div>
                <p className="mt-1 font-display text-sm italic text-muted-foreground">
                  {s.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="bg-cocoa py-20 text-center text-cream">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-display text-4xl italic leading-tight md:text-5xl">
          Indulgence, delivered.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-cream/70">
          Join the Cacaoire club for seasonal limited-edition bars, early
          access to new bounties, and a welcome gift on your first order.
        </p>
        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
            className="w-full rounded-full border border-cream/25 bg-cream/5 px-5 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
          />
          <button className="whitespace-nowrap rounded-full bg-gold px-6 py-3 text-xs font-bold uppercase tracking-widest text-cocoa transition-transform hover:scale-[1.03]">
            Join
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cocoa-soft py-14 text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="max-w-xs">
            <div className="font-display text-3xl italic">Cacaoire</div>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Artisan chocolatiers preserving heirloom cacao and the slow
              tradition of hand-tempering since 1924.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                Discover
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-cream/70">
                <li><a href="#collection" className="transition-colors hover:text-gold">Collection</a></li>
                <li><a href="#bites" className="transition-colors hover:text-gold">Bites</a></li>
                <li><a href="#spectrum" className="transition-colors hover:text-gold">The Spectrum</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
                Connect
              </h4>
              <ul className="mt-4 space-y-2 text-sm text-cream/70">
                <li><a href="#" className="transition-colors hover:text-gold">Instagram</a></li>
                <li><a href="#" className="transition-colors hover:text-gold">Wholesale</a></li>
                <li><a href="#" className="transition-colors hover:text-gold">Journal</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-cream/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-cream/40 sm:flex-row">
          <span>© 2026 Cacaoire. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-cream">
      <Nav />
      <Hero />
      <Collection />
      <Bites />
      <Spectrum />
      <CtaBanner />
      <Footer />
    </main>
  );
}
