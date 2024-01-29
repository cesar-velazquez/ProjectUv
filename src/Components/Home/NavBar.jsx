import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ handleOpen, isOpen, setIsOpen }) => {
    const [showOptions, setShowOptions] = useState(true)

    const handleClickTopic = () => {
        setShowOptions(false);
        setIsOpen(false)

    };
    const handleHome = () => {
        setShowOptions(true);
        setIsOpen(false);
    }

    return (
        <main className=' '>
            <section className='flex justify-between items-center px-3 py-2 
        text-white w-[100%] max-w-[1200px]
        fixed  bg-[#151b48] h-[75px]  z-20'>
                <div className='relative w-[50px] h-[100px] sm:pt-4 '>
                    <Link to={'/'}>
                        <img src="/imgs/logoPunta.png" alt="Logo" />
                    </Link>
                </div>
                <div className='sm:m-auto  '>
                    <Link to={'/'} className='font-bold sm:text-xl '>Leer y escribir en la educación superior</Link>
                </div>
                <div className='absolute top-2 right-2 sm:hidden '>
                    <button onClick={handleOpen} className={` ${isOpen ? 'bx bx-x z-10 text-4xl bx-spin duration text-black bg-green-500 rounded-full w-[50px] aspect-square ' : 'bx bx-menu text-4xl text-[#00BCD4] '} `}></button>
                </div>
                <div className=' '>
                    <img className='hidden sm:block w-[70px] h-[70px] ' src="/imgs/uvlogo.jpg" alt="Logo UV" />
                </div>

                {
                    isOpen &&
                    (<section className='
                bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-green-200 to-green-500
                sm:hidden z-20
                absolute left-0 top-0 min-h-screen w-[80%] shadow-xl shadow-black '>
                        <ul className='bg-black/70 text-white absolute top-[15%] left-4 grid gap-4 p-4 font-bold '>
                            <li><Link to={'/'}
                            onClick={handleHome}
                            >Inicio</Link></li>
                            {
                                showOptions && (
                                    <ul className='pl-4 grid gap-4 '>
                                        <a className='' href='#InfGeneral ' id='infgeneral'> <i className='bx bxs-comment-error text-[#FFC107] '></i> Información General</a>
                                        <a href='#Description' id='description' > <i className='bx bx-clipboard text-[#005e74] '></i> Descripción</a>
                                        <a href='#Introducction' id='introduccion'> <i className='bx bxs-edit-alt text-[#FFC107] '></i> Introducción</a>
                                        <a href='#content' id='content'> <i className='bx bxs-book-content'></i> Contenido</a>
                                    </ul>
                                )
                            }
                            <li>Contenido</li>
                            <ul className='pl-4 grid gap-4 '>
                                <li> <i className='bx bxs-book-content text-[#FFC107]'></i> <Link onClick={handleClickTopic} to={'read'} >Tema 1</Link></li>
                                <li> <i className='bx bxs-book-content text-[#00BCD4] '></i> <Link onClick={handleClickTopic} to={'write'}>Tema 2</Link> </li>
                                <li> <i className='bx bxs-book-content text-[#d40086]'></i> <Link onClick={handleClickTopic} to={'exercise'} >Lectura Integradora</Link></li>
                            </ul>
                        </ul>
                    </section>)
                }
            </section>

        </main>
    )
}

export default NavBar