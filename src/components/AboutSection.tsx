import type { ReactNode } from 'react'

// === AboutPanel — เนื้อหาด้านในของ modal เมื่อกดการ์ด About ===
export default function AboutSection() {
  return (
    <div className="text-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
        {/* === LEFT: hero text + quote + info === */}
        <div className="lg:col-span-2">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-3 leading-[0.95] tracking-tight">
            <span className="text-gray-400">Hi, I'm</span>{' '}
            <span className="text-gray-900">Puriphat</span>
          </h2>
          <p className="text-gray-500 text-xl md:text-2xl mb-8 font-bold">
            Full Stack &amp; AI Developer
          </p>

          <p className="text-gray-700 text-base md:text-lg mb-2 leading-relaxed max-w-2xl">
            Computer Science student based in Bangkok, specializing in full-stack development and
            AI automation. Dedicated to building intelligent systems that automate workflows and
            turn complex problems into elegant, real-world solutions.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-600 text-lg md:text-xl my-10 max-w-2xl leading-relaxed">
            "I'm dedicated to creating intelligent digital experiences that automate the boring
            so people can focus on what matters."
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <InfoCard label="Age" value="22 years old" />
            <InfoCard label="Status" value="CS Student" />
            <InfoCard label="Interests" value="AI, Automation, Full-Stack" />
          </div>
        </div>

        {/* === RIGHT: work + education === */}
        <aside className="lg:col-span-1 space-y-9">
          <SectionBlock title="Work Experience">
            <p className="text-gray-500 text-sm italic leading-relaxed">
              Open to internships and junior software roles. Real experience will land here soon —
              in the meantime, check my GitHub for the latest builds.
            </p>
          </SectionBlock>

          <SectionBlock title="Education">
            <p className="text-gray-500 text-xs mb-1 font-medium">2022 — Present</p>
            <p className="text-gray-900 font-bold text-lg leading-tight">Computer Science</p>
            <p className="text-blue-600 text-sm font-semibold mt-1">Bangkok University</p>
            <p className="text-gray-500 text-sm italic mt-0.5">School of IT &amp; Innovation</p>
          </SectionBlock>
        </aside>
      </div>
    </div>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl px-5 py-3.5 shadow-sm">
      <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-bold">{label}</p>
      <p className="text-gray-900 font-bold mt-1 text-sm">{value}</p>
    </div>
  )
}

function SectionBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-gray-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-3">
        {title}
      </p>
      <div>{children}</div>
    </div>
  )
}
