import { motion } from 'framer-motion'
import { FaGithub, FaEnvelope, FaPython } from 'react-icons/fa'
import { SiClaude, SiTypescript } from 'react-icons/si'
import { FiMapPin, FiAward } from 'react-icons/fi'
import myPhoto from '../assets/myphoto.jpg'
import type { CardType } from '../hooks/useCard'

interface HomeGridProps {
  setExpanded: (card: CardType) => void;
}

// Hero floating dots — สีต่างๆ
const HERO_DOTS = [
  { top: '12%', left: '52%', size: 6, dur: 5, delay: 0, color: 'bg-white/60' },
  { top: '20%', left: '28%', size: 4, dur: 4, delay: 0.5, color: 'bg-pink-300/80' },
  { top: '70%', left: '40%', size: 5, dur: 6, delay: 1.2, color: 'bg-cyan-300/80' },
  { top: '82%', left: '55%', size: 4, dur: 5, delay: 1.8, color: 'bg-white/50' },
  { top: '38%', left: '15%', size: 3, dur: 7, delay: 0.3, color: 'bg-emerald-300/80' },
  { top: '55%', left: '60%', size: 6, dur: 4.5, delay: 0.8, color: 'bg-amber-300/70' },
  { top: '30%', left: '45%', size: 3, dur: 5.5, delay: 2, color: 'bg-purple-300/70' },
  { top: '90%', left: '30%', size: 5, dur: 4.8, delay: 0.6, color: 'bg-rose-300/70' },
]

const PROJECTS_DOTS = [
  { top: '20%', left: '70%', size: 4, dur: 5, delay: 0 },
  { top: '50%', left: '85%', size: 3, dur: 6, delay: 1 },
  { top: '78%', left: '75%', size: 5, dur: 4.5, delay: 0.5 },
]
const ABOUT_DOTS = [
  { top: '15%', left: '78%', size: 4, dur: 5, delay: 0 },
  { top: '60%', left: '85%', size: 3, dur: 6, delay: 1.2 },
  { top: '40%', left: '70%', size: 5, dur: 4, delay: 0.4 },
]
const CONNECT_SPARKS = [
  { top: '18%', left: '70%', dur: 3.5, delay: 0 },
  { top: '60%', left: '78%', dur: 4, delay: 0.8 },
  { top: '35%', left: '85%', dur: 3, delay: 1.5 },
]
const CERT_SPARKS = [
  { top: '15%', left: '20%', dur: 3, delay: 0 },
  { top: '70%', left: '75%', dur: 4, delay: 1 },
  { top: '40%', left: '85%', dur: 3.5, delay: 0.5 },
]

export default function HomeGrid({ setExpanded }: HomeGridProps) {
  return (
    <div className="max-w-350 w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">

      {/* === 1. HERO CARD (col-span-2) — gradient + multi-color animations === */}
      <motion.div
        layoutId="hero"
        onClick={() => setExpanded('hero')}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="md:col-span-2 min-h-105 lg:min-h-120 bg-linear-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-[2.5rem] md:rounded-[3rem] p-6 sm:p-10 lg:p-12 flex flex-col justify-between cursor-pointer overflow-hidden relative shadow-lg"
      >
        {/* === Animated colored blobs === */}
        <motion.div aria-hidden className="absolute -bottom-32 -right-32 w-md h-112 bg-blue-400 rounded-full blur-3xl opacity-60 pointer-events-none"
          animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute -top-24 -left-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-40 pointer-events-none"
          animate={{ x: [0, 25, -15, 0], y: [0, 20, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-300 rounded-full blur-3xl opacity-35 pointer-events-none"
          animate={{ scale: [1, 1.3, 0.9, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute bottom-0 left-1/3 w-72 h-72 bg-emerald-400 rounded-full blur-3xl opacity-25 pointer-events-none"
          animate={{ x: [0, -20, 20, 0], y: [0, 15, -10, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute top-0 right-1/4 w-56 h-56 bg-amber-300 rounded-full blur-3xl opacity-25 pointer-events-none"
          animate={{ scale: [1, 1.2, 1], y: [0, 10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />

        {/* Floating colored dots */}
        {HERO_DOTS.map((d, i) => (
          <motion.div key={i} aria-hidden className={`absolute rounded-full ${d.color} pointer-events-none`}
            style={{ top: d.top, left: d.left, width: d.size, height: d.size }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.95, 0.3] }}
            transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }} />
        ))}

        {/* Available badge */}
        <div className="relative z-10 flex items-center gap-2 self-start bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          <motion.span className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
          Available for work
        </div>

        <div className="relative z-10 mt-4 text-left pr-28 sm:pr-0 sm:w-2/3">
          <p className="text-blue-200 text-sm md:text-base font-semibold mb-4 tracking-wide">Specialized in</p>
          <h2 className="text-white text-[1.7rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] mb-6 tracking-tight">
            Full Stack Dev |<br/>AI Automation
          </h2>
        </div>

        <div className="flex items-end mt-10 relative z-10 md:w-2/3">
          <span className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full text-base shadow-md">
            See More
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>➔</motion.span>
          </span>
        </div>

        {/* Photo with idle float */}
        <motion.img src={myPhoto} alt="Puriphat"
          className="absolute top-1/2 -right-12 sm:-right-12 md:-right-16 w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded-full object-cover object-[center_20%] border-4 border-white/40 shadow-2xl z-10"
          style={{ y: '-50%' }}
          animate={{ translateY: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />

        {/* Rotating dashed ring */}
        <motion.div aria-hidden className="absolute top-1/2 -right-16 sm:-right-20 md:-right-24 w-56 h-56 sm:w-64 sm:h-64 md:w-96 md:h-96 -translate-y-1/2 rounded-full border-2 border-dashed border-white/20 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />

        {/* Counter-rotating second ring */}
        <motion.div aria-hidden className="absolute top-1/2 -right-12 sm:-right-16 md:-right-20 w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80 -translate-y-1/2 rounded-full border border-white/10 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }} />
      </motion.div>

      {/* === 2. PROJECTS CARD === */}
      <motion.div
        layoutId="projects"
        onClick={() => setExpanded('projects')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer shadow-lg min-h-75 relative overflow-hidden"
      >
        <motion.div aria-hidden className="absolute -bottom-20 -right-16 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-50 pointer-events-none"
          animate={{ scale: [1, 1.3, 1], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute -top-12 -left-12 w-48 h-48 bg-purple-500 rounded-full blur-3xl opacity-35 pointer-events-none"
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute top-1/2 left-1/2 w-40 h-40 bg-pink-500 rounded-full blur-3xl opacity-20 pointer-events-none"
          animate={{ scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />

        {PROJECTS_DOTS.map((d, i) => (
          <motion.div key={i} aria-hidden className="absolute rounded-full bg-indigo-300/60 pointer-events-none"
            style={{ top: d.top, left: d.left, width: d.size, height: d.size }}
            animate={{ y: [0, -12, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }} />
        ))}

        <motion.div aria-hidden className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full border-2 border-dashed border-indigo-400/20 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />

        <div className="text-left relative z-10">
          <p className="text-gray-400 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">Featured</p>
          <h2 className="text-white text-3xl font-bold">Projects</h2>

          <div className="mt-6 space-y-2.5">
            {[
              { tech: 'Python · Claude AI', Icon: SiClaude, color: 'text-indigo-300' },
              { tech: 'React · TypeScript', Icon: SiTypescript, color: 'text-blue-300' },
              { tech: 'CI/CD Automation', Icon: FaPython, color: 'text-emerald-300' },
            ].map((row, i) => (
              <motion.div key={row.tech} initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2.5">
                <span className="text-indigo-400 font-mono text-xs">▸</span>
                <row.Icon className={`${row.color} text-sm`} />
                <span className="text-gray-300 text-sm font-medium">{row.tech}</span>
              </motion.div>
            ))}

            <motion.div className="flex items-center gap-2.5"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}>
              <span className="text-indigo-400 font-mono text-xs">▸</span>
              <span className="text-gray-500 text-sm font-mono">_</span>
            </motion.div>
          </div>
        </div>
        <p className="text-gray-500 text-xs md:text-sm mt-6 font-medium relative z-10">Tap to explore →</p>
      </motion.div>

      {/* === 3. ABOUT CARD === */}
      <motion.div
        layoutId="about"
        onClick={() => setExpanded('about')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-gray-100 rounded-[2.5rem] md:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer shadow-lg border border-gray-200 min-h-70 relative overflow-hidden"
      >
        <motion.div aria-hidden className="absolute -top-12 -left-12 w-56 h-56 bg-blue-200/70 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 25, 0], y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute -bottom-20 -right-12 w-48 h-48 bg-pink-200/80 rounded-full blur-3xl pointer-events-none"
          animate={{ scale: [1, 1.2, 1], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute top-1/2 right-1/4 w-32 h-32 bg-purple-200/60 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />

        {ABOUT_DOTS.map((d, i) => (
          <motion.div key={i} aria-hidden className="absolute rounded-full bg-blue-400/50 pointer-events-none"
            style={{ top: d.top, left: d.left, width: d.size, height: d.size }}
            animate={{ y: [0, -10, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: d.dur, repeat: Infinity, ease: 'easeInOut', delay: d.delay }} />
        ))}

        <div className="text-left relative z-10">
          <motion.div className="inline-block text-2xl mb-2"
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}>
            👋
          </motion.div>
          <p className="text-gray-500 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">About Me</p>
          <h2 className="text-gray-900 text-3xl font-bold leading-tight">Learn more about me</h2>
          <p className="text-gray-600 text-base mt-4 leading-relaxed">
            CS Student passionate about AI &amp; automation. Based in Bangkok.
          </p>

          <motion.div className="inline-flex items-center gap-1.5 mt-4 bg-white border border-gray-200 px-3 py-1.5 rounded-full shadow-sm"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
            <FiMapPin size={12} className="text-blue-600" />
            <span className="text-gray-700 text-xs font-bold">Bangkok, TH</span>
          </motion.div>
        </div>
        <p className="text-gray-400 text-xs md:text-sm mt-6 font-medium relative z-10">Tap to know more →</p>
      </motion.div>

      {/* === 4. CERTIFICATES CARD (col-span-1) — amber/gold === */}
      <motion.div
        layoutId="certificates"
        onClick={() => setExpanded('certificates')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-linear-to-br from-amber-400 via-orange-400 to-amber-500 rounded-[2.5rem] md:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer shadow-lg border border-amber-500 min-h-70 relative overflow-hidden"
      >
        <motion.div aria-hidden className="absolute -top-20 -right-12 w-72 h-72 bg-yellow-300 rounded-full blur-3xl opacity-60 pointer-events-none"
          animate={{ x: [0, -15, 0], y: [0, 10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute -bottom-20 -left-12 w-56 h-56 bg-rose-300 rounded-full blur-3xl opacity-40 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], x: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />

        {CERT_SPARKS.map((s, i) => (
          <motion.div key={i} aria-hidden
            className="absolute text-amber-900/80 pointer-events-none font-black text-base"
            style={{ top: s.top, left: s.left }}
            animate={{ scale: [0, 1.2, 0], rotate: [0, 180] }}
            transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}>
            ✦
          </motion.div>
        ))}

        <div className="text-left relative z-10">
          <p className="text-amber-900 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">Achievements</p>
          <h2 className="text-gray-900 text-3xl font-bold leading-tight">Certificates</h2>

          {/* Animated award badge */}
          <motion.div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-md mt-4 border border-amber-300"
            animate={{ y: [0, -6, 0], rotate: [0, -5, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
            <FiAward size={26} className="text-amber-500" />
          </motion.div>
        </div>

        <p className="text-amber-900/80 text-xs md:text-sm mt-6 font-medium relative z-10">Tap to view →</p>
      </motion.div>

      {/* === 5. CONNECT CARD (col-span-1) — yellow, content stacked === */}
      <motion.div
        layoutId="connect"
        onClick={() => setExpanded('connect')}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-yellow-300 rounded-[2.5rem] md:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer shadow-lg border border-yellow-400 min-h-70 relative overflow-hidden"
      >
        <motion.div aria-hidden className="absolute -top-24 -right-12 w-72 h-72 bg-orange-300 rounded-full blur-3xl opacity-60 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], x: [0, -15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div aria-hidden className="absolute -bottom-20 -left-8 w-56 h-56 bg-amber-300 rounded-full blur-3xl opacity-50 pointer-events-none"
          animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }} />

        {CONNECT_SPARKS.map((s, i) => (
          <motion.div key={i} aria-hidden
            className="absolute text-yellow-700/80 pointer-events-none font-black text-base"
            style={{ top: s.top, left: s.left }}
            animate={{ scale: [0, 1.1, 0], rotate: [0, 180] }}
            transition={{ duration: s.dur, repeat: Infinity, ease: 'easeInOut', delay: s.delay }}>
            ✦
          </motion.div>
        ))}

        <div className="text-left relative z-10">
          <p className="text-yellow-700 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">Get in touch</p>
          <h2 className="text-gray-900 text-4xl font-black">Connect.</h2>

          <div className="flex flex-col gap-2 mt-5">
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-2 bg-yellow-200 text-yellow-900 font-bold rounded-xl px-4 py-2.5 border border-yellow-400/50 shadow-sm text-sm w-fit">
              <FaGithub />
              GitHub
            </motion.span>
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="flex items-center gap-2 bg-yellow-200 text-yellow-900 font-bold rounded-xl px-4 py-2.5 border border-yellow-400/50 shadow-sm text-sm w-fit">
              <FaEnvelope />
              Email
            </motion.span>
          </div>
        </div>

        <motion.div aria-hidden className="flex items-center gap-1.5 text-yellow-800/80 text-[10px] font-bold mt-4 relative z-10"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
          <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-500"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }} />
          Replies within 24h
        </motion.div>
      </motion.div>
    </div>
  )
}
