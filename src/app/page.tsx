import Hero from "@/components/Hero";
import ExperienceCard from "@/components/ExperienceCard";
import SkillBentoGrid from "@/components/SkillBentoGrid";

export default function Home() {
  const experiences = [
    {
      role: "Humas",
      event: "NEOBIZZ FEST 2025",
      period: "Okt - Des 2025",
      tasks: [
        "Menyusun dan mendistribusikan proposal kemitraan kepada calon sponsor.",
        "Memastikan seluruh kewajiban kontrak dan atribut sponsor terpenuhi secara akurat di lapangan.",
        "Menangani perubahan alur acara dan berkoordinasi lintas divisi secara cepat.",
      ],
    },
    {
      role: "Content & Marketing Strategist",
      event: "UMKM Rumah Bumbu Annisa",
      period: "Mei - Juli 2025",
      tasks: [
        "Mengelola akun media sosial UMKM dan membuat lebih dari 30 konten promosi.",
        "Menyusun strategi konten untuk meningkatkan daya tarik dan mendukung pertumbuhan brand secara digital.",
        "Memperkuat branding digital melalui promosi visual dan caption menarik.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-pink-300 selection:text-white font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-32">
        
        {/* Section 1: Hero */}
        <section id="hero">
          <Hero />
        </section>

        {/* Section 2: Experience */}
        <section id="experience" className="space-y-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">Pengalaman</h2>
            <p className="text-pink-600 mt-3 font-medium text-lg">Perjalanan karir & proyek yang saya kelola</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} index={idx} />
            ))}
          </div>
        </section>

        {/* Section 3: Skills (Bento Grid) */}
        <section id="skills" className="space-y-10">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">Keahlian</h2>
            <p className="text-pink-600 mt-3 font-medium text-lg">Apa yang bisa saya lakukan</p>
          </div>
          <SkillBentoGrid />
        </section>

        {/* Section 4: Education */}
        <section id="education" className="space-y-10 pb-20">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight">Pendidikan</h2>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-pink-100 flex flex-col md:flex-row gap-10 justify-between items-start md:items-center hover:shadow-xl hover:shadow-pink-100/50 transition-all duration-500">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-dark">Politeknik Negeri Banjarmasin</h3>
              <p className="text-pink-600 font-semibold text-lg">D4 Bisnis Digital</p>
              <p className="text-gray-500">Angkatan 2023 - Diharapkan Lulus: 2027</p>
            </div>
            <div className="hidden md:block w-px h-24 bg-pink-200"></div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-dark">SMAN 1 Banjarmasin</h3>
              <p className="text-pink-600 font-semibold text-lg">Jurusan IPS</p>
              <p className="text-gray-500">2020 - 2023</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
