import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Link href="/login" className='bg-red-900 px-4 py-2 text-white rounded-md hover:text-zinc-400'>Start Sending</Link>
    </main>
  )
}
