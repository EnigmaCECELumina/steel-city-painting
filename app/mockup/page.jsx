export default function MockupPage() {
  const nav = ['HOME', 'ABOUT', 'SERVICES', 'PROJECTS', 'SERVICE AREAS', 'REVIEWS', 'CONTACT']
  const trust = ['15+ YEARS', 'OWNER OPERATED', 'FREE ESTIMATES', '3 YEAR WARRANTY', 'FULLY INSURED', 'HAMILTON LOCAL']
  const services = [
    { title: 'INTERIOR PAINTING', sub: 'Clean. Precise. Beautiful.' },
    { title: 'EXTERIOR PAINTING', sub: 'Protection that lasts.' },
    { title: 'DRYWALL REPAIR', sub: 'Flawless finishes.' },
    { title: 'CABINET & TRIM', sub: 'Elevate your space.' },
    { title: 'HANDYMAN SERVICES', sub: 'Repairs. Improvements.' },
    { title: 'COMMERCIAL MAINTENANCE', sub: 'Reliable. Professional.' },
  ]
  const projects = [
    { title: 'HERITAGE HOME TRANSFORMATION', loc: 'Central Hamilton' },
    { title: 'EXTERIOR REFRESH', loc: 'Ancaster' },
    { title: 'MODERN INTERIOR', loc: 'Stoney Creek' },
    { title: 'STAIRCASE REFINISH', loc: 'Hamilton Mountain' },
  ]

  return (
    <div className="min-h-screen bg-[#080808] text-[#F8F5EE]">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <header className="bg-[#0b0d0f] border border-[#2a2d30]/80 shadow-[0_0_20px_rgba(208,168,78,0.08)]">
          <div className="flex items-center justify-between px-5 py-3">
            <div className="flex items-center gap-4">
              <div className="w-40 h-16 rounded-md bg-[#0a0b0d] border border-[#b8883d]/40 flex items-center justify-center text-[#D0A84E] font-black text-xl uppercase tracking-[0.08em] leading-none">
                STEEL CITY
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-[11px] uppercase tracking-[0.18em] text-[#d9d7d0]">
              {nav.map((item) => (
                <a key={item} href="#" className="hover:text-[#F3C44E] transition-colors">{item}</a>
              ))}
            </nav>

            <button className="border border-[#D0A84E]/70 bg-transparent px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#D0A84E]">
              GET A QUOTE
            </button>
          </div>
        </header>

        <section className="mt-4 overflow-hidden bg-[#080808] border border-[#2a2d30]/80">
          <div className="grid lg:grid-cols-[1.1fr_1fr] min-h-[560px]">
            <div className="flex flex-col justify-center px-6 lg:px-10 py-8 lg:py-10">
              <div className="text-[#B8BDC4] text-[11px] uppercase tracking-[0.28em]">EST. 2009 // HAMILTON, ONTARIO</div>
              <h1 className="mt-3 font-['Oswald',sans-serif] text-[52px] md:text-[74px] leading-[0.9] text-[#F3C44E] tracking-[0.02em]" style={{ textShadow: '0 0 12px rgba(243,196,78,0.25), 0 0 28px rgba(243,196,78,0.18)' }}>
                HAMILTON'S STANDARD
                <br />
                FOR QUALITY.
              </h1>

              <p className="mt-5 text-[20px] text-[#F8F5EE] font-medium">Painting. Repairs. Maintenance.</p>

              <p className="mt-3 max-w-[520px] text-[16px] leading-7 text-[#cfd5d9]">
                Owner-operated since 2009.<br />
                Serving Hamilton homeowners with meticulous preparation, clean workspaces, honest communication, and craftsmanship built to last.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button className="bg-gradient-to-r from-[#F3C44E] to-[#C6973B] text-black font-black px-6 py-4 uppercase tracking-[0.12em] text-[12px] shadow-[0_12px_30px_rgba(243,196,78,0.25)]">
                  Get a free estimate
                </button>
                <button className="border border-[#D0A84E]/60 bg-transparent px-5 py-4 text-[#F8F5EE] font-semibold uppercase tracking-[0.12em] text-[12px]">
                  (289) 775-2020
                </button>
              </div>

              <div className="mt-8 text-[18px] italic text-[#F3C44E]">Done Right. Once.</div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-full bg-[radial-gradient(circle_at_50%_10%,rgba(243,196,78,0.18),transparent_20%),linear-gradient(135deg,#111315,#1f2125_50%,#0a0b0d)]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.32),rgba(0,0,0,0.02)_30%,rgba(0,0,0,0.28))]" />
              <div className="absolute inset-y-0 right-0 w-[80%] bg-[radial-gradient(circle_at_40%_35%,rgba(255,255,255,0.12),transparent_18%),linear-gradient(160deg,#121416,#2a2d30_52%,#1a1b1d)] opacity-95" />
              <div className="absolute left-[15%] top-[18%] h-[58%] w-[58%] rounded-[35%] border-[12px] border-[#D0A84E]/20 bg-transparent opacity-80" />
              <div className="absolute left-[20%] top-[32%] h-[52%] w-[52%] rounded-[30%] border-[10px] border-[#F3C44E]/25 rotate-[-8deg] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_50%)]" />
              <div className="absolute right-[10%] bottom-[3%] h-[68%] w-[40%] rounded-[30%] bg-[linear-gradient(180deg,#272b2e,#101317)] shadow-[0_0_60px_rgba(0,0,0,0.5)]" />
              <div className="absolute right-[18%] bottom-[10%] h-[42%] w-[28%] rounded-[16px] bg-[linear-gradient(180deg,#111315,#1b1f22)] border border-[#D0A84E]/25" />
              <div className="absolute right-[23%] bottom-[14%] h-[20%] w-[18%] rounded-[12px] border border-[#F3C44E]/30 bg-[#171b1e]" />
              <div className="absolute right-[20%] bottom-[22%] h-[18%] w-[22%] rounded-full border-[6px] border-[#D0A84E]/30" />
              <div className="absolute right-[8%] bottom-[5%] text-[#D0A84E] text-[12px] font-bold tracking-[0.16em] uppercase rotate-[-12deg]">DETAIL CHANGES EVERYTHING.</div>
            </div>
          </div>
        </section>

        <div className="mt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-2 bg-[#111315] border border-[#2a2d30]/80">
          {trust.map((item) => (
            <div key={item} className="px-3 py-4 border-r border-[#2a2d30]/80 last:border-r-0 text-center text-[11px] md:text-[12px] uppercase tracking-[0.08em] text-[#F3C44E] font-semibold">
              {item}
            </div>
          ))}
        </div>

        <section className="mt-10">
          <div className="flex items-end justify-between gap-4 py-3 border-b border-[#D0A84E]/40">
            <h2 className="font-['Oswald',sans-serif] text-[28px] md:text-[38px] uppercase text-[#F3C44E] tracking-[0.02em]" style={{ textShadow: '0 0 12px rgba(243,196,78,0.14)' }}>
              Our Services
            </h2>
            <a href="#" className="text-[#D0A84E] text-[11px] uppercase tracking-[0.18em]">View all services →</a>
          </div>

          <div className="mt-6 grid grid-cols-2 xl:grid-cols-6 gap-3">
            {services.map((service, index) => (
              <div key={service.title} className="group border border-[#2a2d30]/80 bg-[#0d0f10] overflow-hidden">
                <div className="h-28 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.26),transparent_14%),linear-gradient(120deg,#1b1e20,#4d4b46_45%,#171a1d)]" />
                <div className="p-3">
                  <div className="text-[#F3C44E] font-bold uppercase text-[11px] tracking-[0.06em]">{service.title}</div>
                  <div className="mt-2 text-[#b9bec3] text-[11px]">{service.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-[#D0A84E]/30 pt-8">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-center">
            <div className="h-[330px] bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.18),transparent_12%),linear-gradient(135deg,#1f2123,#171a1d,#322d29_52%,#16191b)] border border-[#2a2d30]/80" />
            <div>
              <div className="text-[#D0A84E] text-[11px] uppercase tracking-[0.2em] mb-3">ABOUT STEEL CITY</div>
              <h3 className="font-['Oswald',sans-serif] text-[34px] md:text-[48px] leading-[0.95] uppercase text-[#F3C44E]" style={{ textShadow: '0 0 12px rgba(243,196,78,0.14)' }}>
                More than a painter.<br />A neighbour.
              </h3>
              <p className="mt-5 text-[#d7dde1] text-[15px] leading-7">
                For over 15 years, Brent has built Steel City Painting & Handyman through reputation alone. No sales team. No subcontractor roulette. Just honest work, patience, and an eye for detail.
              </p>
              <ul className="mt-5 space-y-2 text-[#dce0e3] text-[14px]">
                <li>• Honest recommendations</li>
                <li>• Clean & respectful workspaces</li>
                <li>• Exceptional cutting-in</li>
                <li>• Patient craftsmanship</li>
              </ul>
              <button className="mt-6 border border-[#D0A84E]/70 px-5 py-3 text-[#F3C44E] uppercase tracking-[0.14em] text-[11px]">
                Our Story
              </button>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-end justify-between">
            <h3 className="font-['Oswald',sans-serif] text-[28px] md:text-[40px] uppercase text-[#F3C44E] tracking-[0.02em]">Featured Projects</h3>
            <a href="#" className="text-[#D0A84E] text-[11px] uppercase tracking-[0.18em]">View all projects →</a>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {projects.map((p) => (
              <div key={p.title} className="bg-[#0b0d0f] border border-[#2a2d30]/80 overflow-hidden">
                <div className="h-52 bg-[radial-gradient(circle_at_40%_20%,rgba(255,255,255,0.14),transparent_18%),linear-gradient(135deg,#1e2124,#373530_40%,#131518)]" />
                <div className="p-4">
                  <div className="text-[#D0A84E] text-[11px] uppercase tracking-[0.14em]">Before / After</div>
                  <div className="mt-3 font-semibold uppercase text-[#F8F5EE] text-[15px] leading-5">{p.title}</div>
                  <div className="mt-2 text-[#B8BDC4] text-[12px]">{p.loc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-[#0c0d0f] border border-[#2a2d30]/80 px-5 py-6">
          <div className="grid lg:grid-cols-[1.2fr_1fr_0.9fr] items-center gap-6">
            <blockquote className="text-[#dfe5e8] italic text-[18px]">
              “Professional, tidy, kind and incredibly detail-oriented. The cutting lines are perfect.”
            </blockquote>
            <div className="text-[#D0A84E] text-[12px] uppercase tracking-[0.18em]">— Hamilton Homeowner</div>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <button className="bg-gradient-to-r from-[#F3C44E] to-[#C6973B] text-black font-black uppercase px-6 py-4 tracking-[0.12em] text-[12px]">
                Get a free estimate
              </button>
              <button className="border border-[#D0A84E]/70 text-[#F8F5EE] px-5 py-4 uppercase tracking-[0.12em] text-[12px]">
                (289) 775-2020
              </button>
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t border-[#2a2d30]/80 py-5 text-[#B8BDC4] text-[11px] uppercase tracking-[0.08em]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2">
            <div>Steel City Painting & Handyman — Hamilton, Ontario</div>
            <div className="flex gap-4">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Projects</a>
              <a href="#">Reviews</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
