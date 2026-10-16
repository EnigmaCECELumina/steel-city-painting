export default function FeaturedProjects(){
  const projects = [
    {title:'Heritage Home Transformation',loc:'Central Hamilton',img:'/images/projects/p1.jpg'},
    {title:'Exterior Refresh',loc:'Ancaster',img:'/images/projects/p2.jpg'},
    {title:'Modern Interior',loc:'Stoney Creek',img:'/images/projects/p3.jpg'},
    {title:'Staircase Refinish',loc:'Hamilton Mountain',img:'/images/projects/p4.jpg'}
  ]
  return (
    <div>
      <div className="flex items-end justify-between mb-4">
        <h3 className="text-gold font-oswald">FEATURED PROJECTS — REAL HOMES. REAL RESULTS.</h3>
        <a href="/projects" className="text-muted">VIEW ALL PROJECTS →</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {projects.map((p,i)=> (
          <figure key={i} className="rounded overflow-hidden bg-black/20">
            <div className="h-40 bg-cover bg-center" style={{backgroundImage:`url(${p.img})`}} />
            <figcaption className="p-3">
              <div className="font-semibold">{p.title}</div>
              <div className="text-muted text-xs">{p.loc}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
