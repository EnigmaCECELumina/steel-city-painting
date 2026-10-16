export default function Footer(){
  return (
    <footer className="mt-8 border-t border-white/5 py-6">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-muted text-sm">
        <div>STEEL CITY PAINTING & HANDYMAN · Hamilton, Ontario</div>
        <nav className="flex gap-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
