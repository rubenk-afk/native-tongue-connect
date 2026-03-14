import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeacherCard from "@/components/TeacherCard";
import { teachers, languages } from "@/data/teachers";

const Teachers = () => {
  const [search, setSearch] = useState("");
  const [activeLanguage, setActiveLanguage] = useState("All");

  const filtered = useMemo(() => {
    return teachers.filter((t) => {
      const matchesLang = activeLanguage === "All" || t.language === activeLanguage;
      const matchesSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.dialect.toLowerCase().includes(search.toLowerCase()) ||
        t.focus.toLowerCase().includes(search.toLowerCase());
      return matchesLang && matchesSearch;
    });
  }, [search, activeLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container py-16 text-center">
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground">
            Our Curated Panel of 25+ Native Experts
          </h1>
          <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
            Find the perfect teacher to guide your cultural and linguistic journey. Filter by language, dialect, or specialty.
          </p>
        </div>
      </section>

      {/* Search & Filters */}
      <div className="container -mt-6 relative z-10">
        <div className="bg-card rounded-xl shadow-lg border p-4 md:p-6 flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, dialect, or specialty..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLanguage(lang)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeLanguage === lang
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container py-10">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((t) => (
              <TeacherCard key={t.id} teacher={t} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">No teachers found matching your criteria.</p>
            <button onClick={() => { setSearch(""); setActiveLanguage("All"); }} className="mt-2 text-primary underline text-sm">
              Clear filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Teachers;
