import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ handleOpen, isOpen }) => {
    return (
        <main className='        
        flex justify-between items-center px-3 py-2 bg-[#0B0F2B] text-white '>
            <div className='w-[50px] h-[100px] sm:pt-4 '>
                <Link to={'/'}>
                    <img src="/imgs/logoPunta.png" alt="Logo" />
                </Link>
            </div>
            <div className='sm:m-auto  '>
                <Link to={'/'} className='font-bold sm:text-2xl '>Leer y escribir en la educación superior</Link>
            </div>
            <div className='absolute top-2 right-2 sm:hidden '>
                <button onClick={handleOpen} className={` ${isOpen ? 'bx bx-x z-10 text-4xl bx-spin duration text-[#00BCD4] bg-yellow-300 rounded-full w-[50px] aspect-square ' : 'bx bx-menu text-4xl text-[#00BCD4] '} `}></button>
            </div>
            <div className=' '>
                <img className='hidden sm:block w-[70px] h-[70px] ' src="/imgs/uvlogo.jpg" alt="Logo UV" />
            </div>

            {
                isOpen &&
                (<section className='
                sm:hidden
                absolute left-0 top-0 bg-[#0B0F2B] min-h-screen w-[80%] shadow-xl shadow-black '>
                    <ul className='bg-[#0B0F2B] text-white absolute top-[15%] left-4 grid gap-4 p-4 font-bold '>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <ul className='pl-4 grid gap-4 '>
                            <a className='' href='#InfGeneral '> <i className='bx bxs-comment-error text-[#FFC107] '></i> Información General</a>
                            <a href='#Description'> <i className='bx bx-clipboard text-[#005e74] '></i> Descripción</a>
                            <a href='#Introducction'> <i className='bx bxs-edit-alt text-[#FFC107] '></i> Introducción</a>
                            <a href='#content'> <i className='bx bxs-book-content'></i> Contenido</a>
                        </ul>
                        <li>Contenido</li>
                        <ul className='pl-4 grid gap-4 '>
                            <li> <i className='bx bxs-book-content text-[#FFC107]'></i> <Link to={'read'} >Tema 1</Link></li>
                            <li> <i className='bx bxs-book-content text-[#00BCD4] '></i> <Link to={'write'}>Tema 2</Link> </li>
                            <li> <i className='bx bxs-book-content text-[#d40086]'></i> <Link to={'exercise'} >Ejercicio Integrador</Link></li>
                        </ul>
                    </ul>
                </section>)
            }

        </main>
    )
}

export default NavBar