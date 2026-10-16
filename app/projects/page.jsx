export const metadata = {
  title: 'Projects — Steel City Painting',
  description: 'Featured projects and before/after gallery showcasing real Hamilton homes.'
}

import FeaturedProjects from '../../components/FeaturedProjects'

export default function Page(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <FeaturedProjects />
    </main>
  )
}
