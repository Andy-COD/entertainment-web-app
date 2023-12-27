import Recommended from '@/components/Recommended'
import SearchBar from '@/components/SearchBar'
import Trending from '@/components/Trending'

export default function Home() {
  return (
    <section className='w-full min-h-full flex py-8 px-4 mx-4 my-4 flex-col' >
      <SearchBar />
      <Trending />
      <Recommended />
    </section>
  )
}
