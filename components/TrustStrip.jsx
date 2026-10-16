export default function TrustStrip(){
  const items = ["15+ YEARS","OWNER OPERATED","FREE ESTIMATES","3 YEAR WARRANTY","FULLY INSURED","HAMILTON LOCAL"]
  return (
    <div className="mt-6 bg-gunmetal rounded px-4 py-3 border border-white/5">
      <div className="max-w-6xl mx-auto flex gap-4 items-center justify-between">
        <div className="flex gap-3 flex-wrap">
          {items.map((t,i)=> (
            <div key={i} className="px-3 py-2 bg-black/20 rounded text-sm font-semibold">{t}</div>
          ))}
        </div>
        <div className="text-muted text-sm">Serving Hamilton & surrounding neighbourhoods</div>
      </div>
    </div>
  )
}
