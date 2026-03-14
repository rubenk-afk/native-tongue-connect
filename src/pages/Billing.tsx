import { CheckCircle, Zap, Crown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plans = [
  {
    name: "Explorer",
    icon: Zap,
    price: 999,
    period: "month",
    description: "Perfect for beginners exploring a new language",
    features: [
      "4 sessions per month (1/week)",
      "1 language of your choice",
      "Basic dialect training",
      "Session recordings access",
      "Email support",
    ],
    cta: "Start Exploring",
    popular: false,
    color: "border-border",
  },
  {
    name: "Immersive",
    icon: Crown,
    price: 2499,
    period: "month",
    description: "For serious learners who want cultural depth",
    features: [
      "12 sessions per month (3/week)",
      "Up to 2 languages",
      "Advanced dialect & slang training",
      "Session recordings access",
      "Cultural immersion workshops",
      "Priority scheduling",
      "Chat support with teacher",
    ],
    cta: "Go Immersive",
    popular: true,
    color: "border-primary",
  },
  {
    name: "Mastery",
    icon: Sparkles,
    price: 4999,
    period: "month",
    description: "Unlimited access for the dedicated learner",
    features: [
      "Unlimited sessions",
      "All languages & dialects",
      "1-on-1 mentorship program",
      "Session recordings access",
      "Cultural immersion workshops",
      "Priority scheduling",
      "Direct teacher WhatsApp access",
      "Progress tracking & certificates",
    ],
    cta: "Achieve Mastery",
    popular: false,
    color: "border-border",
  },
];

const faqs = [
  { q: "Can I switch plans anytime?", a: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle." },
  { q: "What happens to unused sessions?", a: "Unused sessions don't carry over to the next month. We encourage you to make the most of each session!" },
  { q: "Is there a free trial?", a: "We offer a ₹199 trial lesson with any teacher so you can experience the quality before committing to a plan." },
  { q: "Can I change my teacher?", a: "Absolutely. You can book sessions with any teacher in your plan's language allowance." },
];

const Billing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="container py-16 text-center">
        <h1 className="font-display font-extrabold text-4xl md:text-5xl">
          Simple, Transparent <span className="text-accent">Pricing</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Choose a plan that fits your learning goals. All plans include access to our curated native speakers.
        </p>
      </section>

      {/* Plans */}
      <section className="container pb-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-xl border-2 ${plan.color} p-6 flex flex-col ${
                plan.popular ? "shadow-lg scale-[1.02]" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <div className="flex items-center gap-2 mb-2">
                <plan.icon className={`h-5 w-5 ${plan.popular ? "text-primary" : "text-muted-foreground"}`} />
                <h3 className="font-display font-bold text-xl">{plan.name}</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="font-display font-extrabold text-4xl">₹{plan.price.toLocaleString("en-IN")}</span>
                <span className="text-muted-foreground text-sm">/{plan.period}</span>
              </div>

              <Button
                className={`w-full rounded-full py-5 font-semibold mb-6 ${
                  plan.popular
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-card border-t">
        <div className="container py-16 max-w-3xl">
          <h2 className="font-display font-bold text-2xl text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border rounded-lg p-5">
                <h3 className="font-display font-bold text-sm mb-1">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Billing;
