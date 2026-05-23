import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'

// 👉 ใส่ลิงก์ LinkedIn ของคุณตรงนี้ (ถ้ายังไม่มี ปล่อยว่างไว้ ระบบจะขึ้นปุ่ม "เพิ่ม LinkedIn" ให้)
const LINKEDIN_URL: string = ''
const GITHUB_URL = 'https://github.com/PuriphatXXVII'
const EMAIL = 'puriphat.srik@bumail.net'

// === ConnectPanel — เนื้อหาด้านในของ modal เมื่อกดการ์ด Connect ===
export default function ConnectSection() {
  return (
    <div>
      <p className="text-yellow-700 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-3">
        Get in touch
      </p>
      <h2 className="text-gray-900 text-4xl md:text-6xl font-black tracking-tight">
        Let's Connect.
      </h2>
      <p className="text-gray-800/80 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
        I'm open to internships and junior software roles, freelance work, and interesting
        collaborations. Feel free to reach out — I'll get back to you.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 max-w-2xl">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-gray-900 text-white rounded-2xl px-6 py-4 font-bold hover:bg-gray-800 transition shadow-sm"
        >
          <FaGithub size={22} className="shrink-0" />
          <span className="truncate">GitHub</span>
        </a>

        <a
          href={`mailto:${EMAIL}`}
          className="flex items-center gap-4 bg-white text-gray-900 rounded-2xl px-6 py-4 font-bold hover:bg-yellow-50 transition shadow-sm border border-yellow-400/50"
        >
          <FaEnvelope size={22} className="shrink-0 text-yellow-600" />
          <span className="truncate">{EMAIL}</span>
        </a>

        {LINKEDIN_URL ? (
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-[#0a66c2] text-white rounded-2xl px-6 py-4 font-bold hover:opacity-90 transition shadow-sm"
          >
            <FaLinkedinIn size={22} className="shrink-0" />
            <span className="truncate">LinkedIn</span>
          </a>
        ) : (
          <span className="flex items-center gap-4 bg-yellow-200/60 text-yellow-800 rounded-2xl px-6 py-4 font-bold border-2 border-dashed border-yellow-500/40">
            <FiPlus size={22} className="shrink-0" />
            <span className="truncate">Add your LinkedIn</span>
          </span>
        )}
      </div>
    </div>
  )
}
