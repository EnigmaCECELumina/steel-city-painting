// Reusable service page template example (used to build specific SEO pages)
export default function ServicePage({title, children}){
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-amber-400 gold-glow mb-4">{title}</h1>
      <div className="prose text-muted">{children}</div>
    </main>
  )
}
