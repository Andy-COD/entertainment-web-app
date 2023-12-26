import SearchBar from '@/components/SearchBar'
import { usePathname } from 'next/navigation'

export default function Home() {

  // Access the current route path using router.pathname
  

  return (
    <section className='w-full min-h-full flex py-8 px-4 mx-4 my-4' >
      <SearchBar />
    </section>
  )
}
