import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'
import { FaGithub, FaPython, FaDiscord } from 'react-icons/fa'
import { SiClaude, SiFastapi, SiGithubactions, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTypescript, SiTailwindcss, SiVite } from 'react-icons/si'
import { FiArrowLeft, FiArrowUpRight, FiExternalLink, FiCode } from 'react-icons/fi'

type Category = 'AI' | 'WEB' | 'AUTOMATION'
type Status = 'live' | 'in-progress' | 'concept'
type ThemeKey = 'indigo' | 'emerald' | 'rose' | 'amber'

type Project = {
  id: string
  title: string
  tagline: string
  description: string
  category: Category
  status: Status
  year: string
  tags: { label: string; icon: ReactNode }[]
  repo?: string
  demo?: string
  highlights: string[]
  theme: ThemeKey
  previewLabel: string
}

// 👉 เพิ่มโปรเจกต์ที่นี่
const PROJECTS: Project[] = [
  {
    id: 'smartdesk-ai',
    title: 'SmartDesk AI',
    tagline: 'Turn your docs into a 24/7 AI support agent',
    description:
      'A multi-tenant RAG support SaaS: businesses upload their docs, embed one line of code, and let AI resolve customer questions — accurately, instantly, and grounded in their own content with citations.',
    category: 'AI',
    status: 'live',
    year: '2026',
    tags: [
      { label: 'Next.js', icon: <SiNextdotjs /> },
      { label: 'FastAPI', icon: <SiFastapi /> },
      { label: 'Claude AI', icon: <SiClaude /> },
      { label: 'pgvector', icon: <SiPostgresql /> },
    ],
    repo: 'https://github.com/PuriphatXXVII/SmartDesk-AI',
    demo: 'https://smart-desk-ai-lyart.vercel.app',
    highlights: [
      'Full RAG pipeline — parse → chunk → embed (Voyage) → pgvector cosine search → Claude answers with citations',
      'Multi-tenant with Clerk auth, per-org isolation, and a 5 KB embeddable chat widget (one script tag)',
      'Shipped end-to-end: Next.js on Vercel, FastAPI on Railway, Postgres/pgvector on Supabase, Redis on Upstash',
    ],
    theme: 'rose',
    previewLabel: 'RAG · SaaS',
  },
  {
    id: 'jobradar-ai',
    title: 'JobRadar AI',
    tagline: 'An AI agent team that hunts jobs for you — daily',
    description:
      'A multi-agent pipeline that scrapes remote dev jobs, ranks each one 0–100 against your profile using a multi-model AI consensus (Claude Opus + Haiku), and ships a daily digest — running itself every morning via GitHub Actions.',
    category: 'AUTOMATION',
    status: 'live',
    year: '2026',
    tags: [
      { label: 'Node.js', icon: <SiNodedotjs /> },
      { label: 'Playwright', icon: <FiCode /> },
      { label: 'Claude AI', icon: <SiClaude /> },
      { label: 'GitHub Actions', icon: <SiGithubactions /> },
    ],
    repo: 'https://github.com/PuriphatXXVII/jobradar-ai',
    highlights: [
      'Multi-agent pipeline — Scout (Playwright scrape) → Matcher (AI rank) → Reporter (digest) → Orchestrator',
      'Multi-model consensus — Claude Opus + Haiku score each job independently; disagreements get flagged for review',
      'Fully automated — runs itself daily on GitHub Actions and commits the fresh digest (~16s end-to-end)',
    ],
    theme: 'amber',
    previewLabel: 'Multi-Agent · AI',
  },
  {
    id: 'ai-cicd-monitor',
    title: 'AI-Powered CI/CD Monitor',
    tagline: 'Pipelines that explain themselves',
    description:
      'Detects pipeline failures, asks Claude to explain the root cause in plain English, and pushes real-time alerts to Discord — so broken builds never go unnoticed.',
    category: 'AI',
    status: 'live',
    year: '2025',
    tags: [
      { label: 'Python', icon: <FaPython /> },
      { label: 'Claude AI', icon: <SiClaude /> },
      { label: 'GitHub Actions', icon: <SiGithubactions /> },
      { label: 'Discord', icon: <FaDiscord /> },
    ],
    repo: 'https://github.com/PuriphatXXVII/ai-cicd-monitor',
    highlights: [
      'Parses CI logs and surfaces the root cause automatically',
      'Uses the Anthropic API to explain failures in plain language',
      'Real-time alerts straight to a Discord channel',
    ],
    theme: 'indigo',
    previewLabel: 'AI · CI/CD',
  },
  {
    id: 'portfolio-2026',
    title: 'This Portfolio',
    tagline: 'Built end-to-end, deployed via GitHub Pages',
    description:
      'A bento-grid portfolio built with React 19, TypeScript and Framer Motion. Click-to-expand cards, smooth layout transitions, custom scroll-spy navigation.',
    category: 'WEB',
    status: 'live',
    year: '2026',
    tags: [
      { label: 'React', icon: <SiReact /> },
      { label: 'TypeScript', icon: <SiTypescript /> },
      { label: 'Tailwind', icon: <SiTailwindcss /> },
      { label: 'Vite', icon: <SiVite /> },
    ],
    repo: 'https://github.com/PuriphatXXVII/my-portfolio',
    demo: 'https://puriphatxxvii.github.io/my-portfolio/',
    highlights: [
      'Shared element transitions powered by Framer Motion layoutId',
      'Card-only navigation — click to expand, no scrolling',
      'GPU-accelerated marquee for the tech stack',
    ],
    theme: 'emerald',
    previewLabel: 'Portfolio · 2026',
  },
]

const FILTERS = ['ALL', 'AI', 'WEB', 'AUTOMATION'] as const
type Filter = (typeof FILTERS)[number]

const THEME = {
  indigo: {
    bg: 'from-indigo-500 via-blue-600 to-purple-700',
    glow: 'bg-indigo-400',
    chip: 'bg-indigo-500/20 text-indigo-200 border-indigo-300/30',
    accent: 'text-indigo-300',
  },
  emerald: {
    bg: 'from-emerald-400 via-teal-500 to-cyan-600',
    glow: 'bg-emerald-300',
    chip: 'bg-emerald-500/20 text-emerald-200 border-emerald-300/30',
    accent: 'text-emerald-300',
  },
  rose: {
    bg: 'from-rose-400 via-pink-500 to-fuchsia-600',
    glow: 'bg-rose-300',
    chip: 'bg-rose-500/20 text-rose-200 border-rose-300/30',
    accent: 'text-rose-300',
  },
  amber: {
    bg: 'from-amber-400 via-orange-500 to-red-500',
    glow: 'bg-amber-300',
    chip: 'bg-amber-500/20 text-amber-200 border-amber-300/30',
    accent: 'text-amber-300',
  },
} as const

const STATUS = {
  live: { label: '● Live', cls: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30' },
  'in-progress': { label: '◐ In progress', cls: 'bg-amber-500/15 text-amber-300 border-amber-400/30' },
  concept: { label: '○ Concept', cls: 'bg-gray-500/15 text-gray-300 border-gray-400/30' },
} as const

// === ProjectTile (กดเพื่อดูรายละเอียด) ===
function ProjectTile({ project, onSelect }: { project: Project; onSelect: () => void }) {
  const theme = THEME[project.theme]
  return (
    <motion.button
      onClick={onSelect}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className={`relative block w-full rounded-2xl overflow-hidden cursor-pointer aspect-4/3 bg-linear-to-br ${theme.bg} group shadow-lg text-left`}
    >
      {/* glow */}
      <motion.div
        className={`absolute -top-16 -left-16 w-64 h-64 ${theme.glow} rounded-full blur-3xl opacity-50 pointer-events-none`}
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-12 -right-10 w-56 h-56 bg-white/25 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* category badge */}
      <span className="absolute top-3 right-3 bg-black/40 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider z-10 backdrop-blur-md">
        {project.category}
      </span>

      {/* center preview label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-0">
        <FiCode size={32} className="text-white/70 mb-2" />
        <span className="text-white font-black text-xl md:text-2xl drop-shadow-lg">
          {project.previewLabel}
        </span>
      </div>

      {/* bottom overlay with title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/85 via-black/40 to-transparent z-10">
        <h3 className="text-white font-bold text-base md:text-lg drop-shadow leading-tight">
          {project.title}
        </h3>
        <p className="text-white/70 text-xs mt-0.5 truncate">{project.tagline}</p>
      </div>

      {/* hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/40 transition" />
    </motion.button>
  )
}

// === ProjectDetail (หน้ารายละเอียดเต็ม) ===
function ProjectDetail({ project, onBack }: { project: Project; onBack: () => void }) {
  const theme = THEME[project.theme]
  const status = STATUS[project.status]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="text-white"
    >
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold mb-6 transition group"
      >
        <FiArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to projects
      </button>

      {/* === Big preview === */}
      <div className={`relative h-60 md:h-72 rounded-3xl overflow-hidden bg-linear-to-br ${theme.bg} mb-6`}>
        <motion.div
          className={`absolute -top-20 -left-20 w-96 h-96 ${theme.glow} rounded-full blur-3xl opacity-50`}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -right-16 w-80 h-80 bg-white/30 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border backdrop-blur-md ${status.cls}`}>
            {status.label}
          </span>
          <span className="text-white/85 text-xs font-bold tracking-widest uppercase backdrop-blur-md bg-black/25 px-3 py-1.5 rounded-full">
            {project.year}
          </span>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <FiCode size={48} className="text-white/80 mb-3" />
          <p className="text-white text-3xl md:text-4xl font-black tracking-tight drop-shadow-lg">
            {project.previewLabel}
          </p>
        </div>
      </div>

      {/* === Content === */}
      <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">{project.title}</h2>
      <p className={`mt-2 text-base md:text-lg font-semibold ${theme.accent}`}>{project.tagline}</p>

      <p className="text-gray-300 text-base mt-5 leading-relaxed max-w-2xl">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {project.tags.map((t) => (
          <span
            key={t.label}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${theme.chip}`}
          >
            <span className="text-base leading-none">{t.icon}</span>
            {t.label}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <h3 className="text-white font-bold text-lg mt-8 mb-3">Key features</h3>
      <ul className="space-y-2.5 max-w-2xl">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
            <span className={`${theme.accent} mt-0.5 shrink-0`}>▹</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3 mt-8 pt-6 border-t border-gray-800">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-5 py-2.5 rounded-full text-sm hover:bg-blue-50 transition shadow-md"
          >
            <FiExternalLink size={16} />
            Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:bg-gray-700 transition border border-gray-700"
          >
            <FaGithub size={16} />
            Source Code
          </a>
        )}
      </div>
    </motion.div>
  )
}

// === Grid view (filters + project tiles) ===
function ProjectGrid({
  filter,
  setFilter,
  projects,
  onSelect,
}: {
  filter: Filter
  setFilter: (f: Filter) => void
  projects: Project[]
  onSelect: (p: Project) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="text-white"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <p className="text-gray-400 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2">
            {PROJECTS.length} PROJECT{PROJECTS.length === 1 ? '' : 'S'} IN ALL
          </p>
          <h2 className="text-white text-5xl md:text-6xl font-black tracking-tight leading-[0.95]">
            Selected
            <br />
            <span className="text-gray-600">Works.</span>
          </h2>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 md:justify-end">
          {FILTERS.map((f) => {
            const isActive = filter === f
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full transition ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white border border-gray-700 hover:border-gray-500'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-active"
                    className="absolute inset-0 bg-gray-700 rounded-full border border-gray-600"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{f}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
          >
            <ProjectTile project={p} onSelect={() => onSelect(p)} />
          </motion.div>
        ))}

        {/* Coming-soon tile */}
        {filter === 'ALL' && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: projects.length * 0.06 }}
            className="relative rounded-2xl overflow-hidden aspect-4/3 bg-linear-to-br from-gray-700 to-gray-800 border-2 border-dashed border-gray-600 flex flex-col items-center justify-center p-6 text-center"
          >
            <FiArrowUpRight size={32} className="text-gray-400 mb-3" />
            <p className="text-gray-300 font-bold text-base">More on the way</p>
            <a
              href="https://github.com/PuriphatXXVII"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-white text-xs mt-2 underline-offset-2 hover:underline transition"
            >
              Browse GitHub →
            </a>
          </motion.div>
        )}
      </div>

      {projects.length === 0 && filter !== 'ALL' && (
        <p className="text-gray-500 text-sm italic mt-6 text-center">
          No projects in this category yet.
        </p>
      )}
    </motion.div>
  )
}

// === ProjectsPanel (default export) ===
export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('ALL')
  const [selected, setSelected] = useState<Project | null>(null)

  const filtered =
    filter === 'ALL' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <AnimatePresence mode="wait">
      {selected ? (
        <ProjectDetail
          key="detail"
          project={selected}
          onBack={() => setSelected(null)}
        />
      ) : (
        <ProjectGrid
          key="grid"
          filter={filter}
          setFilter={setFilter}
          projects={filtered}
          onSelect={setSelected}
        />
      )}
    </AnimatePresence>
  )
}
