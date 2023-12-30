import Image from 'next/image'
import Link from 'next/link'
import smoney from "../../../public/assets/smoney.jpg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-900">
      <Image 
        alt='An Image'
        src={smoney}
        className='rounded-[10px] md:w-[400px]'/>
      <Link href="/login" className='mt-6 bg-red-950 px-4 py-2 text-white rounded-md hover:text-zinc-400'>Start Sending</Link>
    </main>
  )
}
