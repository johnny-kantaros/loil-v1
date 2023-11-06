import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex justify-center p-10'>
      <Image src='/mark.jpeg' alt='Profile Picture' width={200} height={400}/>
      <h1 className='text-black text-xl p-10'>Content goes here</h1>
    </div>
    
  )
}
