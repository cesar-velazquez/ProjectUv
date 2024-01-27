import { useEffect, useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import TopicOne from './Pages/TopicOne'
import TopicTwo from './Pages/TopicTwo'
import Exercise from './Pages/Exercise'
import NavBar from './Components/Home/NavBar'

function App() {
  // Para abrir el menu despegable
  const [isOpen, setIsOpen] = useState(false)

  // Para abrir el modal
  const [IsShow, setIsShow] = useState(0)
  const handleShow = (index) => {
    setIsShow(index);
  }
  // Cerrar modal
  const handleClose = () => {
    setIsShow(0)
  }

  // abrir menu desp
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (IsShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [IsShow])

  return (
    <main className='bg-gray-700 min-h-screen font-Lato '>      
      {isOpen && <div className='bg-black/30 transition-all duration-1000 absolute top-0 bottom-0 left-0 right-0'></div>}      
      <section className='max-w-[1200px] bg-white min-h-screen m-auto '>
        <NavBar handleOpen={handleOpen} isOpen={isOpen} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/read' element={<TopicOne IsShow={IsShow} handleShow={handleShow} handleClose={handleClose} />} />
          <Route path='/write' element={<TopicTwo />} />
          <Route path='/exercise' element={<Exercise />} />
        </Routes>
        <footer className='bg-black/10 ' >
          <div className='flex justify-between px-4 pt-2 '>
            <img className='w-[60px] aspect-square   ' src="/imgs/footer.png" alt="Codaes" />
            <img className='w-[60px] aspect-square   ' src="/imgs/footer2.png" alt="Cahcs" />
            <img className='w-[60px] aspect-square   ' src="/imgs/footer3.png" alt="Uv" />
          </div>
          <p className='w-[90%] m-auto p-4 text-center text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </footer>
      </section>
    </main>
  )
}

export default App
