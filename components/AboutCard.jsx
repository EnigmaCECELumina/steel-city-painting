export default function AboutCard(){
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="h-80 bg-cover bg-center rounded" style={{backgroundImage:'url(/images/portrait.jpg)'}} />
      <div>
        <h3 className="text-gold font-oswald text-2xl gold-glow">MORE THAN A PAINTER. A NEIGHBOUR.</h3>
        <p className="mt-4 text-muted">For over 15 years, Brent has built Steel City Painting & Handyman through reputation alone. No sales team. No rotating crews. Just honest work, patience, and an eye for detail.</p>
        <ul className="mt-4 list-disc ml-5 text-muted">
          <li>Honest recommendations</li>
          <li>Clean & respectful workspaces</li>
          <li>Exceptional cutting-in</li>
          <li>Patient craftsmanship</li>
          <li>Work built to last</li>
        </ul>
        <a className="mt-6 inline-block btn-primary" href="/about">OUR STORY</a>
      </div>
    </div>
  )
}
