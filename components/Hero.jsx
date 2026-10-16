export default function Hero(){
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch mt-8">
      <div className="p-8 flex flex-col justify-center">
        <div className="text-sm text-muted mb-2">EST. 2009 &#32;//&#32; HAMILTON, ONTARIO</div>
        <h1 className="font-oswald text-5xl md:text-6xl text-amber-400 gold-glow leading-tight">HAMILTON'S STANDARD<br/>FOR QUALITY.</h1>
        <p className="mt-4 text-offwhite max-w-xl">Painting. Repairs. Maintenance. <strong>Owner-operated since 2009.</strong> Serving Hamilton homeowners with meticulous preparation, clean workspaces, honest communication, and craftsmanship built to last.</p>

        <div className="mt-6 flex gap-3">
          <a href="/contact" className="btn-primary">GET A FREE ESTIMATE</a>
          <a href="tel:+12897752020" className="btn-phone">📞 (289) 775‑2020</a>
        </div>

        <div className="mt-6 text-muted italic">Done Right. Once.</div>
      </div>

      <div className="relative min-h-72 rounded-md overflow-hidden bg-black">
        {/* Replace with your hero image at public/images/hero.jpg */}
        <img src="/images/hero.jpg" alt="Brent painting a ceiling line" className="w-full h-full object-cover brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
      </div>
    </section>
  )
}
