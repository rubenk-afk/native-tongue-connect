import { CheckCircle, Heart, Shield, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  { icon: Heart, title: "Cultural Authenticity", desc: "Every teacher is a native speaker who grew up immersed in their regional culture." },
  { icon: Shield, title: "Quality Assured", desc: "Rigorous selection ensures only the best educators join our curated panel." },
  { icon: Users, title: "Direct Connection", desc: "No middlemen. Students connect directly with teachers, and teachers keep 100% of their earnings." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container py-16 text-center">
        <h1 className="font-display font-extrabold text-3xl md:text-5xl text-primary-foreground">About RegionalD2C</h1>
        <p className="mt-3 text-primary-foreground/80 max-w-xl mx-auto">
          Bridging learners with authentic native language experts across India.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-display font-bold text-3xl mb-4">Our Mission</h2>
        <p className="text-muted-foreground text-lg">
          We believe language learning should be personal, cultural, and authentic. Generic apps teach grammar — we teach the soul of a language through native speakers who live and breathe their regional traditions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div key={v.title} className="bg-card rounded-lg border p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
              <v.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </div>
);

export default About;
