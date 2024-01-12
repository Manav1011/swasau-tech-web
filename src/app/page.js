import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/home/NavBar'
import MainGraphic from './components/home/MainGraphic'
import Footer from './components/home/Footer'

export default function Home() {  
  const gradient_arr = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-sky-500 to-indigo-500",
    "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    "bg-gradient-to-r from-purple-500 to-pink-500"
  ]
  const choosed_grad_index = Math.floor(Math.random() * gradient_arr.length)      
  return (
    <>
      <NavBar grad={gradient_arr[choosed_grad_index]}/>      
      <MainGraphic grad={gradient_arr[choosed_grad_index]}/>
      <Footer grad={gradient_arr[choosed_grad_index]}/>
    </>
  )
}
