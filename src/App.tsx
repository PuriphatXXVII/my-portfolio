import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiHome, FiGrid, FiUser, FiMail } from 'react-icons/fi' // อิมพอร์ตไอคอนสำหรับเมนูด้านซ้าย
import myPhoto from './assets/myphoto.jpg'
import TechScroller from './components/TechScroller'

type CardType = 'hero' | 'projects' | 'about' | 'connect' | null;

export default function App() {
  const [expanded, setExpanded] = useState<CardType>(null)
  const closeCard = () => setExpanded(null)

  return (
    // เพิ่ม padding ด้านซ้าย (md:pl-32 lg:pl-40) เพื่อหลบพื้นที่ให้แถบเมนูด้านซ้าย
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8 lg:p-12 md:pl-32 lg:pl-40 flex flex-col items-center">
      
      {/* --- โซน Side Navigation (แถบเมนูด้านซ้าย) --- */}
      <nav className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 bg-gray-900/95 backdrop-blur-md rounded-[2rem] py-8 px-4 flex-col items-center gap-8 shadow-2xl border border-gray-800">
        {/* โลโก้ตัวย่อชื่อ */}
        <div className="text-white font-black text-xl mb-4 border-b border-gray-700 pb-6 w-full text-center">
          PS
        </div>
        {/* ปุ่มเมนูต่างๆ */}
        <button className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200" title="Home">
          <FiHome size={22} />
        </button>
        <button className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200" title="Projects">
          <FiGrid size={22} />
        </button>
        <button className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200" title="About">
          <FiUser size={22} />
        </button>
        <button className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200 mt-4" title="Contact">
          <FiMail size={22} />
        </button>
      </nav>

      {/* --- โซน Header (ชื่อบนสุดกึ่งกลางหน้าจอ) --- */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center mb-10 md:mb-14 mt-4 md:mt-8"
      >
        <p className="text-gray-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2">
          Portfolio of
        </p>
        <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight">
          Puriphat Srikamnoi
        </h1>
      </motion.div>

      {/* --- โซนหน้าแรก (Bento Grid) --- */}
      <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        
        {/* 1. Hero Card */}
        <motion.div
          layoutId="hero"
          onClick={() => setExpanded('hero')}
          className="md:col-span-2 min-h-[400px] lg:min-h-[480px] bg-blue-600 rounded-[2.5rem] md:rounded-[3rem] p-10 lg:p-12 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform overflow-hidden relative shadow-lg"
        >
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 mt-4">
            <p className="text-blue-200 text-sm md:text-base font-semibold mb-4 tracking-wide">
              Specialized in
            </p>
            <h2 className="text-white text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] mb-6 tracking-tight">
              Full Stack Dev |<br/>AI Automation
            </h2>
            <p className="text-blue-100 text-sm md:text-base max-w-lg leading-relaxed">
              Building intelligent systems that automate workflows and solve real-world problems with AI.
            </p>
          </div>

          <div className="flex items-end justify-between mt-10 relative z-10">
            <button className="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full text-base shadow-md hover:bg-blue-50 transition">
              See More ➔
            </button>
            <img src={myPhoto} alt="Puriphat" className="w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover border-4 border-white/20 shadow-lg" />
          </div>
        </motion.div>

        {/* 2. Projects Card */}
        <motion.div
          layoutId="projects"
          onClick={() => setExpanded('projects')}
          className="bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform shadow-lg min-h-[300px]"
        >
          <div>
            <p className="text-gray-400 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">Featured</p>
            <h2 className="text-white text-3xl font-bold">Projects</h2>
            <div className="mt-6 space-y-4">
              <div className="bg-gray-800 rounded-2xl p-5 border border-gray-700">
                <h3 className="text-white font-bold text-base">AI-Powered CI/CD Monitor</h3>
                <p className="text-gray-400 text-xs mt-1.5">Claude AI • GitHub Actions</p>
              </div>
              <div className="bg-gray-800/50 rounded-2xl p-5 border border-gray-700 border-dashed">
                <p className="text-gray-500 text-sm font-medium">More coming soon...</p>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-xs md:text-sm mt-6 font-medium">↗ Click to view all</p>
        </motion.div>

        {/* 3. About Card */}
        <motion.div
          layoutId="about"
          onClick={() => setExpanded('about')}
          className="bg-gray-100 rounded-[2.5rem] md:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform shadow-lg border border-gray-200 min-h-[250px]"
        >
          <div>
            <p className="text-gray-500 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">About Me</p>
            <h2 className="text-gray-900 text-3xl font-bold">Learn more about me</h2>
            <p className="text-gray-600 text-base mt-4 leading-relaxed">
              CS Student passionate about AI, automation, and building things that matter. Based in Bangkok.
            </p>
          </div>
          <p className="text-gray-400 text-xs md:text-sm mt-6 font-medium">↗ Click for more</p>
        </motion.div>

        {/* 4. Connect Card */}
        <motion.div
          layoutId="connect"
          onClick={() => setExpanded('connect')}
          className="md:col-span-2 bg-yellow-300 rounded-[2.5rem] md:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform shadow-lg border border-yellow-400 min-h-[250px]"
        >
          <div>
            <p className="text-yellow-700 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">Get in touch</p>
            <h2 className="text-gray-900 text-5xl font-black">Connect.</h2>
            <div className="flex gap-4 mt-8">
              <span className="flex items-center gap-2 bg-yellow-200 text-yellow-900 font-bold rounded-2xl px-6 py-3.5 border border-yellow-400/50 shadow-sm text-lg">
                GitHub
              </span>
              <span className="flex items-center gap-2 bg-yellow-200 text-yellow-900 font-bold rounded-2xl px-6 py-3.5 border border-yellow-400/50 shadow-sm text-lg">
                Email
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* --- โซน Modal (แสดงตอนกดขยายการ์ด) --- */}
      <AnimatePresence>
        {expanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeCard}
              className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId={expanded}
              className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-5xl max-h-[92vh] z-50 rounded-[2.5rem] p-10 md:p-16 overflow-y-auto flex flex-col shadow-2xl ${
                expanded === 'hero' ? 'bg-blue-600' :
                expanded === 'projects' ? 'bg-gray-900' :
                expanded === 'about' ? 'bg-gray-100' :
                expanded === 'connect' ? 'bg-yellow-300' : ''
              }`}
            >
              <button
                onClick={closeCard}
                className="absolute top-8 right-8 w-12 h-12 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition z-50"
              >
                ✕
              </button>

              {expanded === 'hero' && (
                <div className="text-white flex flex-col h-full justify-between text-left">
                  <div className="relative z-10 mt-4">
                    <p className="text-blue-200 text-lg md:text-xl font-semibold mb-4 tracking-wide">
                      Specialized in
                    </p>
                    <h2 className="text-white text-6xl md:text-7xl lg:text-[5rem] font-black leading-[1.1] mb-6 tracking-tight">
                      Full Stack Dev |<br/>AI Automation
                    </h2>
                    <p className="text-blue-100 text-xl max-w-3xl leading-relaxed">
                      Computer Science student from Bangkok, Thailand. Passionate about leveraging artificial intelligence to build intelligent systems that automate workflows and solve complex, real-world problems.
                    </p>
                  </div>

                  <div className="flex items-end justify-between mt-10 mb-12 relative z-10">
                    <a href="https://github.com/PuriphatXXVII" target="_blank" rel="noreferrer" className="bg-white text-blue-600 font-bold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-blue-50 transition">
                      View GitHub ➔
                    </a>
                    <img src={myPhoto} alt="Puriphat" className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-8 border-white/20 shadow-2xl" />
                  </div>

                  <div className="w-full mt-auto bg-blue-700/30 rounded-3xl p-8 md:p-10 border border-blue-500/30 shadow-inner">
                    <TechScroller />
                  </div>
                </div>
              )}

              {expanded === 'projects' && (
                 <div className="text-white">
                    <h2 className="text-4xl font-black mb-8">Projects</h2>
                    <div className="bg-gray-800 rounded-2xl p-6 mb-4 border border-gray-700">
                      <h3 className="text-xl font-bold">AI-Powered CI/CD Monitor</h3>
                      <p className="text-gray-400 text-sm mt-2 mb-4">Automatically detects pipeline failures, analyzes errors with Claude AI, and sends alerts to Discord.</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                         <span className="bg-blue-600/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-400/20">Python</span>
                         <span className="bg-blue-600/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-400/20">Claude AI</span>
                         <span className="bg-blue-600/30 text-blue-300 text-xs px-3 py-1 rounded-full border border-blue-400/20">GitHub Actions</span>
                      </div>
                      <a href="https://github.com/PuriphatXXVII/ai-cicd-monitor" target="_blank" rel="noreferrer" className="inline-block bg-white text-gray-900 font-bold px-5 py-2 rounded-full text-sm">
                         View on GitHub
                      </a>
                    </div>
                 </div>
              )}

              {expanded === 'about' && (
                <div className="text-gray-900">
                  <h2 className="text-4xl font-black mb-6">About Me</h2>
                  <p className="text-xl mb-4 leading-relaxed">Hi! I'm <strong>Puriphat Srikamnoi</strong></p>
                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                    I'm passionate about <strong>AI Automation</strong> and <strong>Full Stack Development</strong>.
                    Currently focused on integrating AI into DevOps workflows using tools like Claude AI and GitHub Actions.
                  </p>
                  
                  <h3 className="font-bold text-xl mb-4">Goals</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700 text-lg">
                     <li>Build AI-powered automation tools</li>
                     <li>Learn Cloud & Kubernetes</li>
                     <li>Land a tech job with 6-figure salary</li>
                     <li>Contribute to open source</li>
                  </ul>
                </div>
              )}

              {expanded === 'connect' && (
                <div className="text-gray-900">
                  <h2 className="text-4xl font-black mb-4">Let's Connect.</h2>
                  <p className="text-gray-700 mb-8 text-lg">Feel free to reach out for collaboration!</p>
                  <div className="space-y-4 max-w-sm">
                    <a href="https://github.com/PuriphatXXVII" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-yellow-200 rounded-2xl px-6 py-4 font-bold text-lg hover:bg-yellow-400 transition border border-yellow-400/50 shadow-sm">
                       GitHub - PuriphatXXVII
                    </a>
                    <a href="mailto:puriphat.srik@bumail.net" className="flex items-center gap-4 bg-yellow-200 rounded-2xl px-6 py-4 font-bold text-lg hover:bg-yellow-400 transition border border-yellow-400/50 shadow-sm">
                       Email - puriphat.srik@bumail.net
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}