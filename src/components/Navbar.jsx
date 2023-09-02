import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className='bg-slate-900 py-4 px-2'>
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h3 className='font-bold text-2xl flex-1'>NextCRUD</h3>
                </Link>

                <ul className='flex gap-4'>
                    <li>

                    </li>
                    <li>
                        <Link href={"/new"} className='text-slate-300 hover:text-slate-200'>
                            New
                        </Link>
                    </li>
                    <li>
                        <Link href={"/about"} className='text-slate-300 hover:text-slate-200'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
