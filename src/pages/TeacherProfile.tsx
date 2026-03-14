import { useParams, Link } from "react-router-dom";
import { Star, MapPin, Clock, Users, ArrowLeft, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { teachers } from "@/data/teachers";

const availableSlots = [
  { day: "Mon", slots: ["10:00 AM", "2:00 PM", "6:00 PM"] },
  { day: "Tue", slots: ["9:00 AM", "1:00 PM", "5:00 PM"] },
  { day: "Wed", slots: ["11:00 AM", "3:00 PM", "7:00 PM"] },
  { day: "Thu", slots: ["10:00 AM", "4:00 PM"] },
  { day: "Fri", slots: ["9:00 AM", "12:00 PM", "6:00 PM"] },
  { day: "Sat", slots: ["10:00 AM", "2:00 PM"] },
];

const reviews = [
  { name: "Aarav K.", rating: 5, text: "Amazing teacher! Learned so much about the dialect and culture in just a few sessions.", date: "2 weeks ago" },
  { name: "Sneha M.", rating: 5, text: "Very patient and knowledgeable. The lessons are always fun and engaging.", date: "1 month ago" },
  { name: "Rohan P.", rating: 4, text: "Great at explaining nuances. Highly recommend for anyone wanting to learn authentically.", date: "1 month ago" },
  { name: "Divya S.", rating: 5, text: "The cultural context added to each lesson makes learning so much richer.", date: "2 months ago" },
];

const TeacherProfile = () => {
  const { id } = useParams();
  const teacher = teachers.find((t) => t.id === Number(id));

  if (!teacher) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="font-display font-bold text-3xl mb-4">Teacher Not Found</h1>
          <Link to="/teachers">
            <Button variant="outline" className="rounded-full">Back to Teachers</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back link */}
      <div className="container pt-6">
        <Link to="/teachers" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Teachers
        </Link>
      </div>

      {/* Profile Header */}
      <section className="container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left: Info */}
          <div className="md:col-span-2">
            <div className="flex items-start gap-5">
              <div className={`w-20 h-20 rounded-full ${teacher.color} text-primary-foreground flex items-center justify-center font-display font-bold text-2xl flex-shrink-0`}>
                {teacher.initials}
              </div>
              <div>
                <h1 className="font-display font-bold text-3xl">{teacher.name}</h1>
                <p className="text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="h-4 w-4" /> {teacher.dialect}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold">{teacher.rating}</span>
                    <span className="text-sm text-muted-foreground">({teacher.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" /> {teacher.experience}
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" /> {teacher.students} students
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="mt-8">
              <h2 className="font-display font-bold text-xl mb-3">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                A passionate native {teacher.language} speaker specializing in {teacher.dialect.toLowerCase()}. 
                With {teacher.experience} of teaching experience and over {teacher.students} students taught, 
                they bring deep cultural knowledge and an engaging teaching style to every session. 
                Their focus areas include {teacher.focus.toLowerCase()}, making lessons both educational and culturally immersive.
              </p>
            </div>

            {/* Specialties */}
            <div className="mt-8">
              <h2 className="font-display font-bold text-xl mb-3">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {teacher.focus.split(" • ").map((s) => (
                  <span key={s} className="bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium">
                    {s}
                  </span>
                ))}
                <span className="bg-accent/10 text-accent px-3 py-1.5 rounded-full text-sm font-medium">
                  {teacher.language}
                </span>
                <span className="bg-muted text-muted-foreground px-3 py-1.5 rounded-full text-sm font-medium">
                  {teacher.dialect}
                </span>
              </div>
            </div>

            {/* What you'll learn */}
            <div className="mt-8">
              <h2 className="font-display font-bold text-xl mb-3">What You'll Learn</h2>
              <ul className="space-y-2">
                {[
                  `Authentic ${teacher.dialect.toLowerCase()} pronunciation and intonation`,
                  `Cultural context behind ${teacher.language} expressions`,
                  `${teacher.focus.split(" • ")[0]} traditions and their linguistic roots`,
                  "Everyday conversational fluency with native-like confidence",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reviews */}
            <div className="mt-8">
              <h2 className="font-display font-bold text-xl mb-4">Student Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.name} className="bg-card border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                          {review.name.slice(0, 2).toUpperCase()}
                        </div>
                        <span className="font-medium text-sm">{review.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Booking Sidebar */}
          <div>
            <div className="bg-card border rounded-lg p-6 sticky top-24">
              <div className="text-center mb-4">
                <span className="font-display font-bold text-3xl">₹{teacher.hourlyRate}</span>
                <span className="text-muted-foreground text-sm block">per hour</span>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full py-6 text-base mb-3">
                Book Trial ₹199
              </Button>
              <Button variant="outline" className="w-full rounded-full py-5 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Book Full Session
              </Button>

              {/* Availability */}
              <div className="mt-6">
                <h3 className="font-display font-bold text-sm mb-3 flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" /> This Week's Availability
                </h3>
                <div className="space-y-3">
                  {availableSlots.map((day) => (
                    <div key={day.day}>
                      <span className="text-xs font-semibold text-muted-foreground uppercase">{day.day}</span>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {day.slots.map((slot) => (
                          <button
                            key={slot}
                            className="text-xs border rounded-full px-3 py-1 text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Free cancellation up to 24h before</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>100% of earnings go to the teacher</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeacherProfile;
