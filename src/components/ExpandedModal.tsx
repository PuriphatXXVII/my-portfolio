import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa'
import { FiAward } from 'react-icons/fi'
import myPhoto from '../assets/myphoto.jpg'
import TechScroller from './TechScroller'
import ProjectsSection from './ProjectsSection'
import AboutSection from './AboutSection'
import ConnectSection from './ConnectSection'
import type { CardType } from '../hooks/useCard'

interface ModalProps {
  expanded: CardType;
  closeCard: () => void;
}

// === HeroPanel — รูปลอยขวาบน + intro + tech stack ===
function HeroPanel({ techReady }: { techReady: boolean }) {
  return (
    <div className="text-white flex flex-col text-left relative">
      {/* Photo: shown on tablet/desktop, hidden on mobile (looked cramped) */}
      <img
        src={myPhoto}
        alt="Puriphat"
        className="hidden sm:block absolute top-[5%] -right-16 md:-right-24 w-56 h-56 md:w-88 md:h-88 rounded-full object-cover object-[center_20%] border-8 border-white/20 shadow-2xl z-0"
      />

      <div className="relative z-10 mt-2 w-full sm:w-[60%] lg:w-[65%]">
        <p className="text-blue-200 text-base md:text-lg font-semibold mb-3 tracking-wide">
          Specialized in
        </p>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.15] mb-4 tracking-tight">
          Full Stack Dev <span className="opacity-70">|</span><br />
          AI Automation
        </h2>

        <p className="text-blue-100/90 text-sm md:text-base lg:text-lg mb-8 max-w-xl leading-relaxed">
          I'm a Computer Science student based in Bangkok, passionate about bridging the gap between full-stack development and AI. From building functional dashboards to automating CI/CD pipelines, I love crafting smart solutions for complex problems.
        </p>

        <a
          href="https://github.com/PuriphatXXVII"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full text-base shadow-lg hover:bg-blue-50 transition"
        >
          View GitHub ➔
        </a>
      </div>

      {/* === Tech Stack (defer mount จนกว่า layout animation จะเสร็จ) === */}
      <div className="w-full mt-12 relative z-10 bg-blue-700/80 backdrop-blur-md rounded-3xl p-7 md:p-9 border border-blue-500/50 shadow-xl min-h-60">
        {techReady ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <TechScroller />
          </motion.div>
        ) : (
          <div className="flex items-center gap-2 text-blue-200/80 text-xs font-semibold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-blue-200 animate-pulse" />
            Loading tech stack…
          </div>
        )}
      </div>
    </div>
  )
}

// === CertificatesPanel — placeholder รอเพิ่มเนื้อหา ===
function CertificatesPanel() {
  return (
    <div>
      <p className="text-amber-900 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3">
        Achievements
      </p>
      <h2 className="text-gray-900 text-4xl md:text-6xl font-black tracking-tight mb-3">
        Certificates.
      </h2>
      <p className="text-amber-950/80 text-base md:text-lg max-w-xl leading-relaxed mb-10">
        A growing collection of certifications, courses, and milestones from my CS journey.
      </p>

      <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-10 md:p-14 border border-white/60 flex flex-col items-center text-center overflow-hidden">
        <motion.div
          animate={{ y: [0, -8, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-24 h-24 rounded-3xl bg-linear-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-xl mb-6"
        >
          <FiAward size={48} className="text-white" />
        </motion.div>

        <h3 className="relative text-gray-900 text-2xl md:text-3xl font-black">Coming soon</h3>
        <p className="relative text-amber-950/80 text-base mt-3 max-w-md leading-relaxed">
          I'm putting together a curated list of my certifications. New entries will land here as
          I earn them.
        </p>
      </div>
    </div>
  )
}

export default function ExpandedModal({ expanded, closeCard }: ModalProps) {
  // บอก HeroPanel ว่า layout animation เสร็จแล้วเพื่อ defer TechScroller
  const [layoutReady, setLayoutReady] = useState(false)

  // reset เมื่อปิด
  useEffect(() => {
    if (!expanded) setLayoutReady(false)
  }, [expanded])

  // ESC ปิด + lock body scroll
  useEffect(() => {
    if (!expanded) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCard()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [expanded, closeCard])

  // คำนวณ background สีจากการ์ดที่กด (ต้องตรงกับ HomeGrid เพื่อให้ layoutId morph เนียน)
  const bgClass =
    expanded === 'hero' ? 'bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700' :
    expanded === 'projects' ? 'bg-gray-900' :
    expanded === 'about' ? 'bg-gray-100' :
    expanded === 'connect' ? 'bg-yellow-300' :
    expanded === 'certificates' ? 'bg-linear-to-br from-amber-400 via-orange-400 to-amber-500' : ''

  const lightContent = expanded === 'about' || expanded === 'connect' || expanded === 'certificates'

  return (
    <AnimatePresence>
      {expanded && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-3 md:p-8 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCard}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"
          />

          <motion.div
            key={expanded}
            layoutId={expanded}
            exit={{ opacity: 0 }}
            onLayoutAnimationComplete={() => setLayoutReady(true)}
            className={`relative w-full max-w-5xl max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-4xl md:rounded-[2.5rem] p-6 md:p-10 lg:p-14 scrollbar-none [&::-webkit-scrollbar]:hidden flex flex-col shadow-2xl pointer-events-auto ${bgClass}`}
          >
            {/* === Top-right controls === */}
            <div className="absolute top-5 right-5 md:top-6 md:right-6 flex items-center gap-2.5 z-50">
              {expanded === 'hero' && (
                <>
                  <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition shadow-sm">
                    <FaLinkedinIn size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition shadow-sm">
                    <FaFacebookF size={16} />
                  </a>
                  <a href="https://github.com/PuriphatXXVII" target="_blank" rel="noreferrer" className="w-9 h-9 md:w-10 md:h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition shadow-sm">
                    <FaGithub size={16} />
                  </a>
                </>
              )}
              <button
                onClick={closeCard}
                aria-label="Close"
                className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition shadow-sm ${
                  lightContent
                    ? 'bg-black/10 hover:bg-black/20 text-gray-900'
                    : 'bg-black/20 hover:bg-black/40 text-white'
                } ${expanded === 'hero' ? 'ml-1' : ''}`}
              >
                ✕
              </button>
            </div>

            <div className="pt-4 md:pt-2">
              {expanded === 'hero' && <HeroPanel techReady={layoutReady} />}
              {expanded === 'projects' && <ProjectsSection />}
              {expanded === 'about' && <AboutSection />}
              {expanded === 'connect' && <ConnectSection />}
              {expanded === 'certificates' && <CertificatesPanel />}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
