'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormEvent } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }
  return (
    <form className='w-50 flex justify-center md:justify-between' onSubmit={handleSubmit}>
      <input
       type="text" 
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       className='bg-white p-2 2-80 text-xl rounded-xl'
       placeholder='Search'
       />
       <button className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'>
        submit
       </button>
    </form>
  )
}

export default Search
