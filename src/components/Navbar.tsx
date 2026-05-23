import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiFolder, FiAward, FiUser, FiSend, FiChevronLeft } from 'react-icons/fi'
import type { CardType } from '../hooks/useCard'

// Intro id = 'hero' → กด Intro แล้วเปิด Hero modal เลย
const NAV_ITEMS = [
  { id: 'hero' as CardType, label: 'Intro', icon: FiHome },
  { id: 'projects' as CardType, label: 'Projects', icon: FiFolder },
  { id: 'certificates' as CardType, label: 'Certificates', icon: FiAward },
  { id: 'about' as CardType, label: 'About Me', icon: FiUser },
  { id: 'connect' as CardType, label: 'Connect', icon: FiSend },
]

interface NavbarProps {
  active: CardType
  onNavigate: (card: CardType) => void
}

export default function Navbar({ active, onNavigate }: NavbarProps) {
  // default = collapsed → เปิดเว็บมาเห็นแค่ไอคอน + PS brand, ผู้ใช้กดขยายเอง
  const [collapsed, setCollapsed] = useState(true)

  return (
    <>
      {/* === Desktop: navbar แนวตั้ง collapse/expand ได้ === */}
      <motion.nav
        aria-label="Primary"
        initial={false}
        animate={{ width: collapsed ? 80 : 224 }}
        transition={{ type: 'spring', stiffness: 280, damping: 30 }}
        className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 bg-gray-900/95 backdrop-blur-md rounded-4xl py-6 px-5 flex-col shadow-2xl border border-gray-800 overflow-hidden"
      >
        {/* === Header swap: "NAVIGATION" ↔ "PS" === */}
        <div className="h-7 mb-5 relative">
          <AnimatePresence mode="wait" initial={false}>
            {collapsed ? (
              <motion.div
                key="brand"
                initial={{ opacity: 0, y: -6, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* PS brand — gradient ขยับ */}
                <motion.span
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ backgroundSize: '200% 100%' }}
                  className="text-lg font-black tracking-wider bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  PS
                </motion.span>
              </motion.div>
            ) : (
              <motion.p
                key="nav-header"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -6 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center text-gray-500 text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap pl-1"
              >
                NAVIGATION
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* === Nav items === */}
        <div className="relative flex flex-col gap-2.5">
          {/* Timeline line วิ่งผ่านกึ่งกลางไอคอน */}
          <div className="absolute left-4.75 top-5 bottom-5 w-px bg-gray-700/70" aria-hidden />

          {NAV_ITEMS.map((item) => {
            const isActive = active === item.id
            const Icon = item.icon
            return (
              <motion.button
                key={String(item.id)}
                onClick={() => onNavigate(item.id)}
                title={item.label}
                aria-current={isActive ? 'page' : undefined}
                whileHover={{ x: collapsed ? 0 : 2 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center gap-4 group py-1 whitespace-nowrap"
              >
                <div
                  className={`relative w-10 h-10 flex items-center justify-center rounded-xl shrink-0 transition-all ${
                    isActive
                      ? ''
                      : 'bg-gray-800 border border-gray-700 group-hover:border-gray-500'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navActiveDesktop"
                      className="absolute inset-0 bg-white rounded-xl shadow-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {/* glow ตอน active */}
                  {isActive && (
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 rounded-xl bg-white/30 blur-md"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}
                  <Icon
                    size={17}
                    className={`relative z-10 transition-colors ${
                      isActive ? 'text-gray-900' : 'text-gray-400 group-hover:text-white'
                    }`}
                  />
                </div>

                {/* label — fade out เมื่อ collapse */}
                <motion.span
                  animate={{ opacity: collapsed ? 0 : 1, x: collapsed ? -8 : 0 }}
                  transition={{ duration: 0.18 }}
                  className={`text-sm font-bold transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                  }`}
                >
                  {item.label}
                </motion.span>
              </motion.button>
            )
          })}
        </div>

        {/* === Toggle button === */}
        <div className="mt-6 flex justify-end">
          <motion.button
            onClick={() => setCollapsed((c) => !c)}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition shrink-0"
            aria-label={collapsed ? 'Expand navigation' : 'Collapse navigation'}
            title={collapsed ? 'Expand' : 'Collapse'}
          >
            <motion.div
              animate={{ rotate: collapsed ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
            >
              <FiChevronLeft size={14} />
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* === Mobile: แถบล่างกลางจอ === */}
      <nav
        aria-label="Primary mobile"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 backdrop-blur-md rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl border border-gray-800"
      >
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.id
          const Icon = item.icon
          return (
            <button
              key={String(item.id)}
              onClick={() => onNavigate(item.id)}
              title={item.label}
              aria-current={isActive ? 'page' : undefined}
              className="relative w-11 h-11 flex items-center justify-center rounded-full transition-transform active:scale-95"
            >
              {isActive && (
                <motion.span
                  layoutId="navActiveMobile"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <Icon
                size={18}
                className={`relative z-10 transition-colors ${
                  isActive ? 'text-gray-900' : 'text-gray-400'
                }`}
              />
            </button>
          )
        })}
      </nav>
    </>
  )
}
