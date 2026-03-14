import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t mt-20">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-lg">
              Regional<span className="text-accent">D2C</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground">
            Learn authentic regional Indian languages directly from native speakers.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/teachers" className="block text-sm text-muted-foreground hover:text-primary">Find Teachers</Link>
            <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary">About Us</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Languages</h4>
          <p className="text-sm text-muted-foreground">Tamil • Bengali • Marathi • Telugu • Kannada • Gujarati</p>
        </div>
      </div>
      <div className="border-t mt-8 pt-6 text-center text-xs text-muted-foreground">
        © 2026 RegionalD2C. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
