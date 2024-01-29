import { useEffect, useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import TopicOne from './Pages/TopicOne'
import TopicTwo from './Pages/TopicTwo'
import Exercise from './Pages/Exercise'
import NavBar from './Components/Home/NavBar'
import FormExercise from './Pages/FormExercise'

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
    // bg-[#060b34]
    <main className='bg-[#060b34] min-h-screen font-Lato '>      
      <section className='max-w-[1200px] bg-white min-h-screen m-auto '>
        <NavBar handleOpen={handleOpen} isOpen={isOpen} />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/read' element={<TopicOne IsShow={IsShow} handleShow={handleShow} handleClose={handleClose} />} />
          <Route path='/write' element={<TopicTwo />} />
          <Route path='/exercise' element={<Exercise />} />
          <Route path='/form' element={<FormExercise />} />
        </Routes>

        <footer className='bg-black/10 ' >
          <div className='flex justify-between px-4 '>
            <img className='w-[60px] sm:w-[150px] sm:h-[100px] aspect-square   ' src="/imgs/footer.png" alt="Codaes" />
            <img className='w-[60px] sm:w-[150px] sm:h-[100px] aspect-square   ' src="/imgs/footer2.png" alt="Cahcs" />
            <img className='w-[60px] sm:w-[150px] sm:h-[100px] aspect-square   ' src="/imgs/footer3.png" alt="Uv" />
          </div>
          <div className='h-[50px]'>
            <p className='w-[90%] h-[90%] p-2 m-auto  text-center text-sm sm:text-base '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </footer>

      </section>
    </main>
  )
}

export default App
