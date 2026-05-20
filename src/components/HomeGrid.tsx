import { motion } from 'framer-motion'
import myPhoto from '../assets/myphoto.jpg'
import type { CardType } from '../hooks/useCard'

interface HomeGridProps {
  setExpanded: (card: CardType) => void;
}

export default function HomeGrid({ setExpanded }: HomeGridProps) {
  return (
    <div className="max-w-[1400px] w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
      
      {/* 1. Hero Card */}
      <motion.div
        layoutId="hero"
        onClick={() => setExpanded('hero')}
        className="md:col-span-2 min-h-[400px] lg:min-h-[480px] bg-blue-600 rounded-[2.5rem] md:rounded-[3rem] p-10 lg:p-12 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform overflow-hidden relative shadow-lg"
      >
        <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-50 translate-x-1/3 translate-y-1/3 overflow-hidden"></div>
        
        {/* ล็อกความกว้างข้อความไว้ที่ 2/3 เพื่อไม่ให้ไปทับกับรูปด้านขวา */}
        <div className="relative z-10 mt-4 text-left md:w-2/3">
          <p className="text-blue-200 text-sm md:text-base font-semibold mb-4 tracking-wide">
            Specialized in
          </p>
          <h2 className="text-white text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[1.1] mb-6 tracking-tight">
            Full Stack Dev |<br/>AI Automation
          </h2>
        </div>

        <div className="flex items-end mt-10 relative z-10 md:w-2/3">
          <button className="bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full text-base shadow-md hover:bg-blue-50 transition">
            See More ➔
          </button>
        </div>

        {/* === ท่าจัดรูปให้อยู่ตรงกลางขวา และล้นขอบ (ตามวงแดงเป๊ะ!) === */}
        <img 
          src={myPhoto} 
          alt="Puriphat" 
          className="absolute top-1/2 -translate-y-1/2 -right-12 md:-right-16 w-48 h-48 md:w-72 md:h-72 rounded-full object-cover object-[center_20%]  border-4 border-white/20 shadow-2xl z-10" 
        />
      </motion.div>

      {/* 2. Projects Card */}
      <motion.div
        layoutId="projects"
        onClick={() => setExpanded('projects')}
        className="bg-gray-900 rounded-[2.5rem] md:rounded-[3rem] p-8 lg:p-10 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition-transform shadow-lg min-h-[300px]"
      >
        <div className="text-left">
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
        <div className="text-left">
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
        <div className="text-left">
          <p className="text-yellow-700 text-xs md:text-sm font-semibold mb-2 tracking-widest uppercase">Get in touch</p>
          <h2 className="text-gray-900 text-5xl font-black">Connect.</h2>
          <div className="flex gap-4 mt-8 justify-start">
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
  )
}