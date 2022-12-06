import Link from 'next/link'
import React from 'react'
import {AiOutlineMenu, AioutlineClose} from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white '>
           <Link href='/'>
            <h1 className='font-bold text-4xl'>CG foto</h1>
           </Link>
            
            <ul  classname='hidden sm:flex'>
                <li>
                <Link href='/'>Home</Link>
                </li>

                <li>
                <Link href='/#gallery'>Gallery</Link>
                </li>
                <li>
                <Link href='/porfolio'>Work</Link>
                </li>
                <Link href='/contact'>Contact</Link>
            </ul>

           
            {/*Mobile button */}
            <div>
                <AiOutlineMenu size={20}/>
            </div>
            {/*Mobile menu */}
            <div>
            <ul>
                <Link href='/'>Home</Link>
            </ul>
            <ul>
                <Link href='/#gallery'>Gallery</Link>
            </ul>
            <ul>
                <Link href='/porfolio'>Work</Link>
            </ul>
            <ul>
                <Link href='/contact'>Contact</Link>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar