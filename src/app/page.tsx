import Image from 'next/image'


export default function Home() {
  return (
    <div className='py-10 relative w-full min-h-20'>


      <Image src="/loil-cover.png" alt='Loil cover' 
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={600}
      height={300}
      />

      
    </div>
    
  )
}
