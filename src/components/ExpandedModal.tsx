import { motion, AnimatePresence } from 'framer-motion'
import { FaLinkedinIn, FaFacebookF, FaGithub } from 'react-icons/fa'
import myPhoto from '../assets/myphoto.jpg'
import TechScroller from './TechScroller'
import type { CardType } from '../hooks/useCard'

interface ModalProps {
  expanded: CardType;
  closeCard: () => void;
}

export default function ExpandedModal({ expanded, closeCard }: ModalProps) {
  return (
    <AnimatePresence>
      {expanded && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 md:p-8 pointer-events-none">
          
          {/* พื้นหลังสีดำเบลอ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCard}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm pointer-events-auto"
          />
          
          {/* ตัวการ์ดที่ขยายออกมา */}
          <motion.div
            layoutId={expanded}
            className={`relative w-full max-w-5xl max-h-[92vh] overflow-y-auto overflow-x-hidden rounded-[2.5rem] p-10 md:p-16 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col shadow-2xl pointer-events-auto ${
              expanded === 'hero' ? 'bg-blue-600' :
              expanded === 'projects' ? 'bg-gray-900' :
              expanded === 'about' ? 'bg-gray-100' :
              expanded === 'connect' ? 'bg-yellow-300' : ''
            }`}
          >
            
            {/* === โซนปุ่ม Social + กากบาท ปิด มุมขวาบน === */}
            <div className="absolute top-8 right-8 flex items-center gap-3 z-50">
              {expanded === 'hero' && (
                <>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition shadow-sm">
                    <FaLinkedinIn size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition shadow-sm">
                    <FaFacebookF size={18} />
                  </a>
                  <a href="https://github.com/PuriphatXXVII" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-md transition shadow-sm">
                    <FaGithub size={18} />
                  </a>
                </>
              )}
              <button
                onClick={closeCard}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition shadow-sm ${
                  expanded === 'about' || expanded === 'connect' 
                    ? 'bg-black/10 hover:bg-black/20 text-gray-900'
                    : 'bg-black/20 hover:bg-black/40 text-white ml-2'
                }`}
              >
                ✕
              </button>
            </div>

            {/* === เนื้อหาหน้า Hero === */}
            {expanded === 'hero' && (
              <div className="text-white flex flex-col h-full justify-between text-left relative min-h-full">
                
                {/* รูปถ่ายลอยตัวสัดส่วนหล่อๆ หัวไม่ขาด */}
                <img
                  src={myPhoto}
                  alt="Puriphat"
                  className="absolute top-[35%] -translate-y-1/2 -right-16 md:-right-24 w-64 h-64 md:w-[24rem] md:h-[24rem] rounded-full object-cover object-[center_20%] border-8 border-white/20 shadow-2xl z-0"
                />

                {/* โซนข้อความพาดหัว */}
                <div className="relative z-10 mt-4 text-left w-full md:w-[60%] lg:w-[65%]">
                  <p className="text-blue-200 text-base md:text-lg font-semibold mb-3 tracking-wide">
                    Specialized in
                  </p>
                  <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.2] mb-4 tracking-tight">
                    Full Stack Dev <span className="opacity-70">|</span><br />
                    AI Automation
                  </h2>

                  {/* === เพิ่ม Description ประโยคที่ 1 ตรงนี้ === */}
                  <p className="text-blue-100/90 text-sm md:text-base lg:text-lg mb-8 max-w-xl leading-relaxed">
                    I'm a Computer Science student based in Bangkok, passionate about bridging the gap between full-stack development and AI. From building functional dashboards to automating CI/CD pipelines, I love crafting smart solutions for complex problems.
                  </p>

                  <a href="https://github.com/PuriphatXXVII" target="_blank" rel="noreferrer" className="inline-block bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full text-base shadow-lg hover:bg-blue-50 transition">
                    View GitHub ➔
                  </a>
                </div>

                {/* === โซน TechScroller: mt-36 === */}
                <div className="w-full mt-12 relative z-10 bg-blue-700/80 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-blue-500/50 shadow-xl">
                  <TechScroller />
                </div>
              </div>
            )}

            {/* === เนื้อหาหน้า Projects === */}
            {expanded === 'projects' && (
               <div className="text-white mt-8 text-left">
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

            {/* === เนื้อหาหน้า About === */}
            {expanded === 'about' && (
              <div className="text-gray-900 mt-8 text-left">
                <h2 className="text-4xl font-black mb-6">About Me</h2>
                <p className="text-xl mb-4 leading-relaxed">Hi! I'm <strong>Puriphat Srikamnoi</strong></p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  Computer Science student from Bangkok, Thailand. Passionate about leveraging artificial intelligence to build intelligent systems that automate workflows and solve complex, real-world problems.
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

            {/* === เนื้อหาหน้า Connect === */}
            {expanded === 'connect' && (
              <div className="text-gray-900 mt-8 text-left">
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
        </div>
      )}
    </AnimatePresence>
  )
}