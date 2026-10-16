export default function ServicesRow(){
  const services = [
    {title:'INTERIOR PAINTING',caption:'Clean. Precise. Beautiful.',img:'/images/services/interior.jpg'},
    {title:'EXTERIOR PAINTING',caption:'Protection that lasts.',img:'/images/services/exterior.jpg'},
    {title:'DRYWALL REPAIR',caption:'Flawless finishes.',img:'/images/services/drywall.jpg'},
    {title:'CABINET & TRIM',caption:'Elevate your space.',img:'/images/services/cabinet.jpg'},
    {title:'HANDYMAN SERVICES',caption:'Repairs. Improvements.',img:'/images/services/handyman.jpg'},
    {title:'COMMERCIAL MAINTENANCE',caption:'Reliable. Professional.',img:'/images/services/commercial.jpg'}
  ]
  return (
    <div>
      <h3 className="text-gold font-oswald mb-4">OUR SERVICES — QUALITY WORK FOR EVERY SPACE.</h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {services.map((s,i)=> (
          <div key={i} className="bg-black/20 p-2 rounded">
            <div className="h-24 bg-cover bg-center rounded" style={{backgroundImage:`url(${s.img})`}} />
            <div className="mt-2 text-sm font-semibold">{s.title}</div>
            <div className="text-muted text-xs">{s.caption}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
