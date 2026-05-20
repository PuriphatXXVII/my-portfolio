import { motion } from 'framer-motion'
import { FiHome, FiGrid, FiUser, FiMail } from 'react-icons/fi'
import HomeGrid from '../components/HomeGrid'
import ExpandedModal from '../components/ExpandedModal'
import { useCard } from '../hooks/useCard'

export default function HomePage() {
  // เรียกใช้ Hook ที่เราสร้างไว้ แค่บรรทัดเดียวจบ!
  const { expanded, setExpanded, closeCard } = useCard();

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-12 md:pl-32 lg:pl-40 flex flex-col items-center overflow-x-hidden">
      
      {/* --- โซน Side Navigation --- */}
      <nav className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 bg-gray-900/95 backdrop-blur-md rounded-[2rem] py-8 px-4 flex-col items-center gap-8 shadow-2xl border border-gray-800">
        <div className="text-white font-black text-xl mb-4 border-b border-gray-700 pb-6 w-full text-center">
          PS
        </div>
        <button className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200" title="Home">
          <FiHome size={22} />
        </button>
        <button className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200" title="Projects">
          <FiGrid size={22} />
        </button>
        <button className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200" title="About Me">
          <FiUser size={22} />
        </button>
        <button className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200 mt-4" title="Connect">
          <FiMail size={22} />
        </button>
      </nav>

      {/* --- โซน Header --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center mb-10 md:mb-14 mt-4 md:mt-8 relative z-10"
      >
        <p className="text-gray-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2">
          Portfolio of
        </p>
        <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
          Puriphat Srikamnoi
        </h1>
      </motion.div>

      {/* --- เรียกใช้ Home Grid Component --- */}
      <HomeGrid setExpanded={setExpanded} />

      {/* --- เรียกใช้ Modal Component --- */}
      <ExpandedModal expanded={expanded} closeCard={closeCard} />
      
    </div>
  )
}