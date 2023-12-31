import { Bars3Icon } from '@heroicons/react/24/solid'
import React from 'react'

interface Props {}

function Header({}: Props) {
    return (
        <header className='bg-green-500'>
            <div className='m-auto max-w-screen-md flex justify-between'>
                <a href='/'>
                    <img 
                        className='w-10 h-10 p-1 mx-2 cursor-pointer'
                        src="/logo.png"
                        alt="site logo"
                    />
                </a>

                <ul className='ml-auto flex [&>*]:p-2'>
                    {/* <li>My forms</li>
                    <li>about</li> */}
                    <li><a href="/">Home</a></li>
                    <li><a href="/templates">Templates</a></li>
                    <li><a href="/createforms">createforms</a></li>
                </ul>

                <button className='p-1 m-1 w-8 h-8 min-[1300px]:hidden active:scale-125 transition-all text-black bg-white rounded'>
                    <Bars3Icon/>
                </button>
            </div>
        </header>
    )
}

export default Header
