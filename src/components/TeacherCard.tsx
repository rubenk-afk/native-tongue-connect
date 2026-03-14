import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import type { Teacher } from "@/data/teachers";

const TeacherCard = ({ teacher }: { teacher: Teacher }) => {
  return (
    <div className="bg-card rounded-lg border p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-12 h-12 rounded-full ${teacher.color} text-primary-foreground flex items-center justify-center font-display font-bold text-sm`}>
          {teacher.initials}
        </div>
        <span className="text-xs font-semibold uppercase tracking-wide bg-muted px-2.5 py-1 rounded-full text-muted-foreground">
          {teacher.language}
        </span>
      </div>

      <h3 className="font-display font-bold text-lg text-foreground">{teacher.name}</h3>
      <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
        <MapPin className="h-3 w-3" /> {teacher.dialect}
      </p>

      <div className="mt-3 pt-3 border-t">
        <p className="text-xs text-muted-foreground">
          <span className="font-medium text-foreground">Focus:</span> {teacher.focus}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-accent text-accent" />
            <span className="text-sm font-semibold">{teacher.rating}</span>
            <span className="text-xs text-muted-foreground">({teacher.reviews})</span>
          </div>
          <span className="text-xs text-muted-foreground">{teacher.students} students</span>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-3 border-t">
        <div>
          <span className="font-display font-bold text-lg text-foreground">₹{teacher.hourlyRate}</span>
          <span className="text-xs text-muted-foreground block">PER HOUR</span>
        </div>
        <Link
          to={`/teacher/${teacher.id}`}
          className="text-sm font-medium text-primary border border-primary px-4 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default TeacherCard;
