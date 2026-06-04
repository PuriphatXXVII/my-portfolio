import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import HomeGrid from '../components/HomeGrid'
import ExpandedModal from '../components/ExpandedModal'
import { useCard } from '../hooks/useCard'

export default function HomePage() {
  const { expanded, setExpanded, closeCard } = useCard()

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Navbar active={expanded} onNavigate={setExpanded} />

      {/* padding สมมาตรซ้าย/ขวา เพื่อให้ content อยู่ตรงกลาง viewport
          (nav fixed ที่ left-6 w-56 จบที่ ~248px → pl ต้อง ≥ 256) */}
      <main className="px-4 md:pl-64 md:pr-8 lg:px-64 xl:px-72 pb-28 md:pb-12 min-h-screen flex flex-col">
        <section className="flex-1 flex flex-col items-center pt-6 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full text-center mb-10 md:mb-14 mt-4 md:mt-6 relative z-10"
          >
            <p className="text-gray-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2">
              Portfolio of
            </p>
            <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
              BrownieCookies
            </h1>
          </motion.div>

          <HomeGrid setExpanded={setExpanded} />
        </section>

        <footer className="max-w-350 mx-auto w-full text-center text-gray-400 text-sm py-8 border-t border-gray-100 mt-12">
          © {new Date().getFullYear()} Puriphat Srikamnoi
        </footer>
      </main>

      <ExpandedModal expanded={expanded} closeCard={closeCard} />
    </div>
  )
}
