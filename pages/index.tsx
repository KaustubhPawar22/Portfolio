import Hero from '../components/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Hero />

      <section id="about" className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-3xl text-left p-8">
          <h2 className="text-3xl font-bold mb-4">About — Kaustubh Pawar</h2>
          <p className="text-lg text-slate-700 mb-4">
            I'm Kaustubh, a Computer Science graduate (B.Sc., D.G. Ruparel College, May 2023; GPA: 8.75/10)
            interested in Business Analytics and Data Science. I received an unconditional offer for MSc
            Business Analytics at Warwick Business School (starting 27 Sep 2025) and build data-driven projects
            to tell impactful stories.
          </p>
          <p className="text-slate-600">
            My projects include Stack Overflow trend analysis, an Air Quality analysis using CPCB data,
            and a business case study for a student-focused food pass. I focus on clear visuals, reproducible
            analysis, and production-ready dashboards.
          </p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="max-w-4xl p-8">
          <h2 className="text-3xl font-semibold mb-6">Selected Projects</h2>
          <ul className="space-y-6 text-slate-700">
            <li>
              <h3 className="text-xl font-bold">Stack Overflow Trend Analysis</h3>
              <p className="text-sm">Trend analysis, co-occurrence, and emerging vs. declining tech using Stack Exchange data.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Air Quality Analysis (India)</h3>
              <p className="text-sm">CPCB-driven air pollution trends, pollutant analysis, and health impact visualisations.</p>
            </li>
            <li>
              <h3 className="text-xl font-bold">Zomato Campus Pass — Business Case Study</h3>
              <p className="text-sm">Market sizing, pricing, CAC vs LTV model, and student behavior insights for a campus food pass.</p>
            </li>
          </ul>
        </div>
      </section>

      <footer className="py-12 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Kaustubh Pawar — Built with Next.js, Tailwind & Framer Motion
      </footer>
    </main>
  )
}
