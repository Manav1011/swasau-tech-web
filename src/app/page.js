import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/home/NavBar'
import MainGraphic from './components/home/MainGraphic'

export default function Home() {  
  return (
    <>
      <NavBar/>
      <div className='bg-gradient-to-r from-indigo-300 to-violet-700'>
          <MainGraphic/>
      </div>
      <div className='bg-gradient-to-r from-indigo-300 to-violet-700'>
          <MainGraphic/>
      </div>
    </>
  )
}
