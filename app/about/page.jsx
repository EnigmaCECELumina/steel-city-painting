export const metadata = {
  title: 'About — Steel City Painting',
  description: 'About Brent and the story behind Steel City Painting & Handyman.'
}

import AboutCard from '../../components/AboutCard'

export default function Page(){
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <AboutCard />
    </main>
  )
}
