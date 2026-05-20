import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaRobot, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiSharp, SiNextdotjs, SiVite, SiTailwindcss, SiDotnet, SiExpress, SiSocketdotio, SiMongodb, SiPostgresql, SiGithubactions } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const techGroups = [
  { title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C#', 'HTML', 'CSS'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', '.NET MAUI'] },
  { title: 'Backend', items: ['Node.js', 'Express', '.NET Backend', 'Socket.io'] },
  { title: 'Database', items: ['MongoDB', 'SQL', 'PostgreSQL'] },
  { title: 'DevOps', items: ['GitHub Actions', 'Docker', 'Git', 'VS Code'] },
  { title: 'AI', items: ['Claude AI', 'Anthropic API', 'Prompt Engineering'] }
];

const getIcon = (tech: string) => {
  switch (tech) {
    case 'Python': return <FaPython className="text-blue-500 text-lg" />;
    case 'TypeScript': return <SiTypescript className="text-blue-600 text-lg" />;
    case 'JavaScript': return <SiJavascript className="text-yellow-500 text-lg" />;
    case 'Java': return <FaJava className="text-red-500 text-lg" />;
    case 'C#': return <SiSharp className="text-purple-600 text-lg" />;
    case 'HTML': return <FaHtml5 className="text-orange-500 text-lg" />;
    case 'CSS': return <FaCss3Alt className="text-blue-500 text-lg" />;
    case 'React': return <FaReact className="text-cyan-500 text-lg" />;
    case 'Next.js': return <SiNextdotjs className="text-black text-lg" />;
    case 'Vite': return <SiVite className="text-purple-500 text-lg" />;
    case 'Tailwind CSS': return <SiTailwindcss className="text-cyan-400 text-lg" />;
    case '.NET MAUI':
    case '.NET Backend': return <SiDotnet className="text-purple-600 text-lg" />;
    case 'Node.js': return <FaNodeJs className="text-green-500 text-lg" />;
    case 'Express': return <SiExpress className="text-black text-lg" />;
    case 'Socket.io': return <SiSocketdotio className="text-black text-lg" />;
    case 'MongoDB': return <SiMongodb className="text-green-600 text-lg" />;
    case 'SQL': return <FaDatabase className="text-gray-500 text-lg" />;
    case 'PostgreSQL': return <SiPostgresql className="text-blue-400 text-lg" />;
    case 'GitHub Actions': return <SiGithubactions className="text-blue-500 text-lg" />;
    case 'Docker': return <FaDocker className="text-blue-500 text-lg" />;
    case 'Git': return <FaGitAlt className="text-orange-500 text-lg" />;
    case 'VS Code': return <VscVscode className="text-blue-500 text-lg" />;
    case 'Claude AI':
    case 'Anthropic API':
    case 'Prompt Engineering': return <FaRobot className="text-indigo-500 text-lg" />;
    default: return <span className="w-2 h-2 rounded-full bg-gray-400"></span>;
  }
};

const allTechs = techGroups.flatMap(g => g.items);
const midPoint = Math.ceil(allTechs.length / 2);
const row1 = allTechs.slice(0, midPoint);
const row2 = allTechs.slice(midPoint);

// ก๊อปปี้ 2 ชุดให้ยาวพอและใช้ทำ Seamless Loop
const displayRow1 = [...row1, ...row1];
const displayRow2 = [...row2, ...row2];

export default function TechScroller() {
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full mt-4">
      {/* ใช้ translate3d เพื่อบังคับใช้การ์ดจอ (GPU) คำนวณ ทำให้ลื่นขึ้นมาก และปรับเวลาให้ช้าลง */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        @keyframes scroll-right {
          0% { transform: translate3d(-100%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
          will-change: transform;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="flex items-center justify-between mb-4 px-2">
        <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
          Tech Stack
        </p>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setShowAll(true); }}
          className="text-xs bg-white/10 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-white/20 transition border border-white/20 z-10 relative shadow-sm"
        >
          ✦ View All
        </button>
      </div>

      <div
         className="flex flex-col gap-4 overflow-hidden relative w-full"
         style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        {/* แถวที่ 1 เลื่อนซ้าย */}
        <div className="flex w-full">
          <div className="flex w-max animate-scroll-left gap-3 pr-3">
            {displayRow1.map((tech, idx) => (
              <span key={`r1a-${idx}`} className="bg-white text-gray-900 shadow-sm flex items-center gap-2 text-sm px-4 py-2 rounded-full whitespace-nowrap font-semibold">
                {getIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
          <div className="flex w-max animate-scroll-left gap-3 pr-3" aria-hidden="true">
            {displayRow1.map((tech, idx) => (
              <span key={`r1b-${idx}`} className="bg-white text-gray-900 shadow-sm flex items-center gap-2 text-sm px-4 py-2 rounded-full whitespace-nowrap font-semibold">
                {getIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* แถวที่ 2 เลื่อนขวา */}
        <div className="flex w-full">
          <div className="flex w-max animate-scroll-right gap-3 pr-3">
            {displayRow2.map((tech, idx) => (
              <span key={`r2a-${idx}`} className="bg-white text-gray-900 shadow-sm flex items-center gap-2 text-sm px-4 py-2 rounded-full whitespace-nowrap font-semibold">
                {getIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
          <div className="flex w-max animate-scroll-right gap-3 pr-3" aria-hidden="true">
            {displayRow2.map((tech, idx) => (
              <span key={`r2b-${idx}`} className="bg-white text-gray-900 shadow-sm flex items-center gap-2 text-sm px-4 py-2 rounded-full whitespace-nowrap font-semibold">
                {getIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* View All Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {showAll && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => { e.stopPropagation(); setShowAll(false); }}
                className="absolute inset-0 bg-black/85"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 rounded-[2.5rem] p-8 md:p-12 max-w-4xl w-full max-h-[85vh] overflow-y-auto relative shadow-2xl border border-gray-700 z-10"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); setShowAll(false); }}
                  className="absolute top-6 right-6 bg-gray-800 text-gray-300 hover:text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition"
                >
                  ✕ Close
                </button>

                <p className="text-blue-400 text-xs font-medium uppercase tracking-widest mb-1">
                  Overview
                </p>
                <h2 className="text-white text-4xl font-black mb-10">
                  Technical <span className="text-gray-500">Stack.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {techGroups.map(group => (
                    <div key={group.title}>
                      <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 border-b border-gray-800 pb-2">
                        {group.title}
                      </p>
                      <div className="space-y-3 mt-4">
                        {group.items.map(item => (
                          <div key={item} className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-900 shadow-sm">
                              {getIcon(item)}
                            </div>
                            <span className="text-gray-200 text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}