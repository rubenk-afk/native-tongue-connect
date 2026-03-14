export interface Teacher {
  id: number;
  name: string;
  initials: string;
  language: string;
  dialect: string;
  focus: string;
  rating: number;
  reviews: number;
  experience: string;
  hourlyRate: number;
  students: number;
  color: string;
}

export const teachers: Teacher[] = [
  { id: 1, name: "Priya S.", initials: "PR", language: "Tamil", dialect: "Madurai Dialect", focus: "Folk Songs • Cinema", rating: 4.9, reviews: 247, experience: "5+ yrs", hourlyRate: 299, students: 1200, color: "bg-primary" },
  { id: 2, name: "Rahul B.", initials: "RA", language: "Bengali", dialect: "Kolkata Dialect", focus: "Rabindra Sangeet • Poetry", rating: 4.8, reviews: 189, experience: "7+ yrs", hourlyRate: 349, students: 892, color: "bg-accent" },
  { id: 3, name: "Vikram P.", initials: "VI", language: "Marathi", dialect: "Mumbai Dialect", focus: "Theatre • Conversation", rating: 4.7, reviews: 156, experience: "4+ yrs", hourlyRate: 319, students: 634, color: "bg-primary" },
  { id: 4, name: "Kavitha R.", initials: "KA", language: "Tamil", dialect: "Chennai Dialect", focus: "Classical • Literature", rating: 4.8, reviews: 203, experience: "6+ yrs", hourlyRate: 279, students: 987, color: "bg-accent" },
  { id: 5, name: "Arnab D.", initials: "AR", language: "Bengali", dialect: "Dhaka Sylheti Dialect", focus: "Diaspora • Modern", rating: 4.6, reviews: 134, experience: "3+ yrs", hourlyRate: 289, students: 445, color: "bg-primary" },
  { id: 6, name: "Sunita K.", initials: "SU", language: "Marathi", dialect: "Pune Dialect", focus: "Lavani • Folk", rating: 4.9, reviews: 178, experience: "8+ yrs", hourlyRate: 329, students: 723, color: "bg-accent" },
  { id: 7, name: "Ravi T.", initials: "RA", language: "Telugu", dialect: "Hyderabad Dialect", focus: "Cinema • Slang", rating: 4.7, reviews: 167, experience: "5+ yrs", hourlyRate: 269, students: 601, color: "bg-primary" },
  { id: 8, name: "Ananya G.", initials: "AN", language: "Telugu", dialect: "Andhra Coastal Dialect", focus: "Coastal Dialect • Heritage", rating: 4.8, reviews: 145, experience: "4+ yrs", hourlyRate: 249, students: 534, color: "bg-accent" },
  { id: 9, name: "Deepa M.", initials: "DE", language: "Kannada", dialect: "Bangalore Dialect", focus: "Modern • IT Culture", rating: 4.7, reviews: 198, experience: "6+ yrs", hourlyRate: 309, students: 756, color: "bg-primary" },
  { id: 10, name: "Meera J.", initials: "ME", language: "Gujarati", dialect: "Ahmedabad Dialect", focus: "Business • Traditional", rating: 4.8, reviews: 212, experience: "7+ yrs", hourlyRate: 339, students: 845, color: "bg-accent" },
  { id: 11, name: "Sanjay R.", initials: "SA", language: "Kannada", dialect: "Mysore Dialect", focus: "Literature • Classical", rating: 4.6, reviews: 123, experience: "5+ yrs", hourlyRate: 259, students: 412, color: "bg-primary" },
  { id: 12, name: "Pooja V.", initials: "PO", language: "Gujarati", dialect: "Surat Dialect", focus: "Conversational • Food Culture", rating: 4.9, reviews: 231, experience: "6+ yrs", hourlyRate: 289, students: 678, color: "bg-accent" },
];

export const languages = ["All", "Tamil", "Bengali", "Marathi", "Telugu", "Kannada", "Gujarati"];
