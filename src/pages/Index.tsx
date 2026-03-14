import { CheckCircle, Users, Globe, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeacherCard from "@/components/TeacherCard";
import { teachers } from "@/data/teachers";

const stats = [
  { value: "25+", label: "Expert Teachers" },
  { value: "10", label: "Regional Languages" },
  { value: "15", label: "Distinct Dialects" },
  { value: "5000+", label: "Students" },
];

const highlights = [
  { icon: CheckCircle, label: "Handpicked Native Teachers" },
  { icon: CheckCircle, label: "100% Direct Earnings to Teachers" },
  { icon: CheckCircle, label: "Dialect-Specific Lessons" },
  { icon: CheckCircle, label: "5000+ Learners Taught" },
];

const culturePoints = [
  "Understand subtle humor and local slang",
  "Appreciate regional folk songs and cinema",
  "Connect deeply with family and heritage",
  "Navigate cultural nuances with confidence",
];

const Index = () => {
  const featuredTeachers = teachers.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container py-20 md:py-28 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6">
            <Globe className="h-4 w-4 text-primary-foreground/80" />
            <span className="text-sm text-primary-foreground/90">
              Direct from Native Speakers • No Middlemen • Cultural Depth
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl md:text-6xl text-primary-foreground leading-tight max-w-4xl mx-auto">
            Learn Authentic Regional Indian Languages from{" "}
            <span className="text-accent">Our Curated Experts</span>
          </h1>

          <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Master dialects, folk traditions, and local slang directly from native speakers. Skip the generic apps and dive deep into culture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full px-8 py-6 text-base">
              Book Trial Lesson ₹199
            </Button>
            <Link to="/teachers">
              <Button variant="outline" className="rounded-full px-8 py-6 text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                Meet Our Teachers
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-card border-b">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-2 justify-center">
                <h.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <span className="font-display font-bold text-lg">{s.value}</span>
                <span className="text-sm text-primary-foreground/80">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Teachers */}
      <section className="container py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-3xl">Learn from the Best</h2>
            <p className="text-muted-foreground mt-1">
              Our rigorous selection process ensures you learn from authentic native speakers.
            </p>
          </div>
          <Link to="/teachers" className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            View all 25+ experts <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTeachers.map((t) => (
            <TeacherCard key={t.id} teacher={t} />
          ))}
        </div>

        <Link to="/teachers" className="md:hidden flex items-center justify-center gap-1 mt-6 text-sm font-medium text-primary">
          View all 25+ experts <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      {/* Culture Section */}
      <section className="bg-card">
        <div className="container py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-24 w-24 text-primary/40" />
              </div>
            </div>
            <div>
              <h2 className="font-display font-bold text-3xl mb-4">More Than Just Language</h2>
              <p className="text-muted-foreground mb-6">
                Language is the vessel of culture. Our platform doesn't just teach you grammar; it immerses you in the soul of the region.
              </p>
              <ul className="space-y-3">
                {culturePoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about">
                <Button variant="outline" className="mt-6 rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn about our approach
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
