import Content from '@/components/Content'
import SearchBar from '@/components/SearchBar'
import React from 'react'

const page = () => {
  return (
    <section className='w-full min-h-full flex py-8 px-4 mx-4 flex-col' >
      <SearchBar />
      <Content />
    </section>
  )
}

export default page