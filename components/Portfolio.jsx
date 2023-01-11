import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
        <h1 className='font-bold text-2xl p-4'>Car shoots</h1>
        <div className='grid grid-rows-none md:grid-cols-5 gap-4' >
            <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                <Image src='https://images.unsplash.com/photo-1539788816080-8bdd722d8c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/'
                layout='responsive'
                width='677'
                height='451'/>
            </div>

            <div>
                <Image src='https://images.unsplash.com/photo-1518987048-93e29699e79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/'
                width='212'
                height='217'
                />
            </div>
            <div>
                <Image src='https://images.unsplash.com/photo-1494905998402-395d579af36f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/'
                width='212'
                height='217'
                />
            </div>
            <div>
                <Image src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/'
                width='212'
                height='217'
                />
            </div>
            <div>
                <Image src='https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80' alt='/'
                width='212'
                height='217'
                />
            </div>
        </div>
    </div>
  )
}

export default Portfolio