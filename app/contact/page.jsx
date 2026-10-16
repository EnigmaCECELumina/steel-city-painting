export const metadata = {
  title: 'Contact — Steel City Painting',
  description: 'Get a free estimate — contact Steel City Painting & Handyman in Hamilton, Ontario.'
}

export default function Page(){
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-muted mb-6">Call us: <a href="tel:+12897752020" className="font-semibold">(289) 775-2020</a></p>
      <form className="space-y-4">
        <input aria-label="name" className="w-full p-3 rounded bg-white/5 border border-white/6" placeholder="Your name" />
        <input aria-label="phone" className="w-full p-3 rounded bg-white/5 border border-white/6" placeholder="Phone or email" />
        <textarea aria-label="details" className="w-full p-3 rounded bg-white/5 border border-white/6" placeholder="How can we help?" rows="5" />
        <button className="btn-primary">Request Free Estimate</button>
      </form>
    </main>
  )
}
