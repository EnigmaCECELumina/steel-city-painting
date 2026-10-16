export const metadata = {
  title: 'Services — Steel City Painting',
  description: 'Interior painting, exterior painting, drywall repair, cabinet painting and handyman services in Hamilton.'
}

import ServicesRow from '../../components/ServicesRow'

export default function Page(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <ServicesRow />
    </main>
  )
}
