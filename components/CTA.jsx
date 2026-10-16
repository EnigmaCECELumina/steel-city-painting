export default function CTA(){
  return (
    <section className="mt-10 bg-gradient-to-r from-black to-black/80 border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <blockquote className="text-muted italic">"Professional, tidy, kind and incredibly detail-oriented. The cutting lines are perfect." — Hamilton Homeowner</blockquote>
        </div>
        <div className="flex gap-3">
          <a className="btn-primary" href="/contact">GET A FREE ESTIMATE</a>
          <a className="btn-phone" href="tel:+12897752020">📞 (289) 775‑2020</a>
        </div>
      </div>
    </section>
  )
}
