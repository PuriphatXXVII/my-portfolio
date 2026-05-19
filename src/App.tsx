import myPhoto from './assets/myphoto.jpg'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-10">
      {/* Side Navigation */}
      <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 bg-gray-100 rounded-2xl p-3 shadow-lg">
        {['🏠', '👤', '🚀', '📬'].map((icon, i) => (
          <button key={i} className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-blue-100 transition text-lg">
            {icon}
          </button>
        ))}
      </nav>

      {/* Bento Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Hero Card */}
        <div className="md:col-span-2 bg-blue-600 rounded-3xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-48 h-48 bg-blue-500 rounded-full -mr-10 -mb-10 opacity-50" />
          <div className="absolute right-16 bottom-0 w-32 h-32 bg-blue-400 rounded-full opacity-30" />
          <div>
            <p className="text-blue-200 text-sm font-medium mb-2">PORTFOLIO OF</p>
            <h1 className="text-white text-4xl font-black leading-tight mb-3">
              Puriphat<br />Srikamnoi
            </h1>
            <p className="text-blue-100 font-semibold text-lg">⚡ Full Stack Dev & AI Automation Engineer</p>
            <p className="text-blue-200 text-sm mt-2 max-w-sm">
              Building intelligent systems that automate workflows and solve real-world problems with AI.
            </p>
          </div>
          <div className="flex items-end justify-between mt-4">
            <a href="https://github.com/PuriphatXXVII" target="_blank"
              className="bg-white text-blue-600 font-bold px-5 py-2 rounded-full text-sm hover:bg-blue-50 transition">
              View GitHub →
            </a>
            <img src={myPhoto} alt="Puriphat"
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg" />
          </div>
        </div>

        {/* Projects Card */}
        <div className="bg-gray-900 rounded-3xl p-6 flex flex-col justify-between min-h-[320px] cursor-pointer hover:scale-[1.02] transition">
          <div>
            <p className="text-gray-400 text-xs font-medium mb-1">FEATURED</p>
            <h2 className="text-white text-xl font-bold">🤖 Projects</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="bg-gray-800 rounded-2xl p-3">
              <p className="text-white font-semibold text-sm">AI-Powered CI/CD Monitor</p>
              <p className="text-gray-400 text-xs mt-1">Claude AI + GitHub Actions + Discord</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-3">
              <p className="text-gray-400 text-sm">More coming soon...</p>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-3">↗ View all projects</p>
        </div>

        {/* About Card */}
        <div className="bg-gray-100 rounded-3xl p-6 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition">
          <div>
            <p className="text-gray-500 text-xs font-medium mb-1">ABOUT ME</p>
            <h2 className="text-gray-900 text-xl font-bold">Learn more about me</h2>
          </div>
          <p className="text-gray-600 text-sm mt-3">
            CS Student passionate about AI, automation, and building things that matter. Based in Bangkok 🇹🇭
          </p>
          <p className="text-gray-400 text-xs mt-3">↗ About me</p>
        </div>

        {/* Tech Stack Card */}
        <div className="bg-blue-50 rounded-3xl p-6 cursor-pointer hover:scale-[1.02] transition">
          <p className="text-blue-400 text-xs font-medium mb-1">SKILLS</p>
          <h2 className="text-gray-900 text-xl font-bold mb-4">🛠️ Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['Python', 'TypeScript', 'React', 'Node.js', 'Docker', 'Claude AI', 'GitHub Actions', 'MongoDB'].map(skill => (
              <span key={skill} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Connect Card */}
        <div className="bg-yellow-300 rounded-3xl p-6 flex flex-col justify-between cursor-pointer hover:scale-[1.02] transition">
          <div>
            <p className="text-yellow-700 text-xs font-medium mb-1">GET IN TOUCH</p>
            <h2 className="text-gray-900 text-3xl font-black">Connect.</h2>
          </div>
          <div className="space-y-2 mt-4">
            <a href="https://github.com/PuriphatXXVII" target="_blank"
              className="flex items-center gap-2 bg-yellow-200 rounded-2xl px-4 py-2 text-sm font-semibold hover:bg-yellow-100 transition">
              🐙 GitHub
            </a>
            <a href="mailto:puriphat.srik@bumail.net"
              className="flex items-center gap-2 bg-yellow-200 rounded-2xl px-4 py-2 text-sm font-semibold hover:bg-yellow-100 transition">
              ✉️ Email
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}