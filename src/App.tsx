import { useState, useEffect } from "react";
import { 
  Award, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  Phone, 
  MessageSquare, 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Heart, 
  Activity, 
  Globe, 
  Menu, 
  X,
  ExternalLink,
  Shield
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Image generated path
const DOCTOR_IMAGE = "/images/dr-vikramaditya.jpg";
const WHATSAPP_LINK = "https://wa.me/919876768558?text=Hi%20Dr.%20Sabharwal%2C%20I'd%20like%20to%20book%20an%20appointment%20at%20CCDC";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedIaSection, setSelectedIaSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Information Architecture Definition for Interactive UX presentation
  const iaSections = [
    {
      id: "hero",
      title: "1. The Entry of Trust (Hero)",
      objective: "Immediate elite positioning, trust establishment, and conversion.",
      trustBoosters: ["18+ Years of pedigree", "Painless dentistry promise", "Chandigarh elite location"],
      fearReducers: ["Painless technology emphasized", "Friendly, high-pedigree Doctor's face", "Direct private connection"],
      cta: "WhatsApp Direct line with warm, pre-filled text."
    },
    {
      id: "clinical",
      title: "2. Precision & Comfort Philosophy",
      objective: "Differentiate from standard dental clinics through medical science & comfort.",
      trustBoosters: ["Computer-controlled local anesthesia", "Zero-fear sedation protocols", "Acoustic comfort headsets"],
      fearReducers: ["No needle terror", "Virtually zero sound during operations", "Empathetic, slow-paced medical care"],
      cta: "Learn about painless procedures."
    },
    {
      id: "services",
      title: "3. Precision Treatment Suite",
      objective: "Showcase world-class, high-value cosmetic and reconstructive services.",
      trustBoosters: ["Immediate Loading Nobel Biocare Implants", "Digital Smile Design (DSD)", "Porcelain Veneers matching natural translucency"],
      fearReducers: ["Visual simulator of results before starting", "FDA-approved materials only", "Lifetime implant warranty"],
      cta: "Inquire about customized treatment plans."
    },
    {
      id: "tourism",
      title: "4. Gentle Dental Experience",
      objective: "Provide world-class treatment with zero discomfort.",
      trustBoosters: ["18 Years of continuous clinical track record", "PRIME TIME Award for Best Implant & Laser Clinic", "ECHS Army Chandimandir empanelment"],
      fearReducers: ["Empathetic, slow-paced dentistry", "Computerized anesthetic delivery systems", "Strict surgical-grade hygiene standards"],
      cta: "Book your personalized treatment plan."
    },
    {
      id: "pedigree",
      title: "5. Dr. Sabharwal's Pedigree",
      objective: "Build deep human connection & professional respect.",
      trustBoosters: ["Post-Graduate Certificate in Oral Implantology (PGCOI)", "18 Years of dedicated clinical experience", "Direct hand-written promise of care"],
      fearReducers: ["Treatment always directly led by Dr. Sabharwal", "Transparent diagnosis with digital scans", "No hidden specialists"],
      cta: "Read Dr. Sabharwal's painless commitment."
    },
    {
      id: "gallery",
      title: "6. Rolex-Standard Gallery",
      objective: "Showcase perfect aesthetic results with absolute clinical transparency.",
      trustBoosters: ["High-contrast, high-definition unedited smile makeovers", "Authentic patient video stories"],
      fearReducers: ["No exaggerated photoshopping", "Real patients, real journeys, natural-looking results"],
      cta: "View smile makeover catalog."
    }
  ];

  return (
    <div className="min-h-screen bg-brand-50 font-sans text-brand-800 selection:bg-brand-200 selection:text-brand-900 overflow-x-hidden">
      
      {/* Top micro-banner for trust and international patients */}
      <div className="bg-brand-950 text-brand-100 text-[11px] md:text-xs tracking-widest uppercase py-2 px-4 border-b border-brand-900/40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-300 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
              Painless Precision Dentistry
            </span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">ESTD. 2008 · Sector 19, Chandigarh</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300 flex items-center gap-1">
              <Shield className="h-3 w-3 text-brand-300" />
              ECHS Army Chandimandir Empaneled
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-brand-100/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex justify-between items-center">
          {/* Logo Brand area with Geometric Balance Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 teal-gradient rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md shrink-0">
              C
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-brand-950">
                  CCDC
                </span>
                <div className="h-3.5 w-[1px] bg-brand-300" />
                <span className="font-mono text-[9px] tracking-widest text-gold-600 font-bold uppercase">
                  Precision
                </span>
              </div>
              <span className="hidden sm:inline font-sans text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">
                Centre for Complete Dental Care
              </span>
            </div>
          </div>

          {/* Desktop Luxury Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-brand-900">
            <a href="#hero" className="hover:text-gold-600 transition-colors duration-200">Home</a>
            <a href="#ia-preview" className="hover:text-gold-600 transition-colors duration-200 flex items-center gap-1">
              Architecture Preview
              <span className="bg-gold-100 text-gold-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
            </a>
            <div className="h-4 w-[1px] bg-slate-200" />
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-gold-500" />
              <span>Chandigarh, India</span>
            </div>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-500 hover:bg-brand-600 text-white text-xs md:text-sm font-medium tracking-wider uppercase px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/20 group cursor-pointer"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Direct WhatsApp</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-b border-brand-100/50 shadow-lg px-4 pt-2 pb-6 flex flex-col gap-4"
            >
              <a 
                href="#hero" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-900 font-medium py-2 hover:text-gold-600 transition-colors"
              >
                Home
              </a>
              <a 
                href="#ia-preview" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-brand-900 font-medium py-2 hover:text-gold-600 transition-colors flex items-center justify-between"
              >
                <span>Information Architecture Preview</span>
                <span className="bg-gold-100 text-gold-700 text-[9px] px-2 py-0.5 rounded-full font-bold">INFO</span>
              </a>
              <div className="border-t border-slate-100 my-1" />
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <MapPin className="h-3.5 w-3.5 text-gold-500" />
                <span>Sector 19, Chandigarh, India</span>
              </div>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-500 text-white text-center text-sm font-medium tracking-wider uppercase py-3 rounded-full flex items-center justify-center gap-2"
              >
                <MessageSquare className="h-4 w-4 fill-white" />
                <span>Book via WhatsApp</span>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-[calc(100vh-6rem)] flex items-center py-12 md:py-20 lg:py-24 bg-gradient-to-b from-brand-50/50 to-white overflow-hidden">
        
        {/* Subtle Luxury Ambient Background elements */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-brand-200/20 rounded-full filter blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-100/30 rounded-full filter blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8">
              
              {/* Accent-Border with Hero Typography from Geometric Balance */}
              <div className="accent-border pl-6 space-y-4">
                <div className="inline-flex items-center gap-2 bg-brand-100/80 border border-brand-200/50 px-3 py-1.5 rounded-full w-fit">
                  <Award className="h-4 w-4 text-brand-500" />
                  <span className="font-mono text-[10px] md:text-xs font-bold tracking-widest text-brand-800 uppercase">
                    18 Years of Painless, Precision Dentistry
                  </span>
                </div>
                
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-950 leading-[1.1]">
                  Centre For Complete <br />
                  <span className="text-brand-500 font-light font-serif">Dental Care (CCDC)</span>
                </h1>
              </div>

              {/* Clinic Quality Stamp */}
              <p className="font-sans text-base sm:text-lg md:text-xl text-slate-600 font-light max-w-2xl leading-relaxed pl-6">
                Led by clinical pioneer <span className="font-medium text-brand-900">Dr. Vikramaditya Sabharwal</span>, CCDC combines state-of-the-art dental precision with empathetic, zero-fear painless protocols in Chandigarh, India.
              </p>

              {/* Credibility Micro-Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-brand-100/50 py-6">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-brand-950">Virtually Painless Technology</h4>
                    <p className="text-xs text-slate-500">Computerized gentle delivery systems</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gold-100 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-brand-950">Rigorous Sterilization</h4>
                    <p className="text-xs text-slate-500">Surgical-grade autoclaves & cleanrooms</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-brand-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Shield className="h-3.5 w-3.5 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-brand-950">ECHS Army Empaneled</h4>
                    <p className="text-xs text-slate-500">Trusted clinical care for defense veterans</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-gold-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="h-3.5 w-3.5 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm text-brand-950">Immediate Rehabilitation</h4>
                    <p className="text-xs text-slate-500">Single-day implants & premium smile veneers</p>
                  </div>
                </div>
              </div>

              {/* Conversion Zone with Geometric Balance Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pl-6">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teal-gradient text-white text-center font-bold tracking-wide uppercase px-8 py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-brand-700/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 cursor-pointer"
                >
                  <MessageSquare className="h-5 w-5 fill-white" />
                  <span>Book Painless Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-center px-2">
                  <a 
                    href="https://share.google/t1abCeX7RiKtKkCd8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-brand-950 hover:text-brand-600 underline flex items-center gap-1.5 transition-colors duration-200 cursor-pointer"
                  >
                    <span>Read Our Reviews on Google</span>
                    <ExternalLink className="h-3.5 w-3.5 text-gold-600" />
                  </a>
                </div>
              </div>

              {/* Location Trust Stamp */}
              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 justify-center sm:justify-start pl-6">
                <span>SECTOR 19, CHANDIGARH</span>
                <span>·</span>
                <span>DIRECT DR. WHATSAPP ACTIVE</span>
              </div>

            </div>

            {/* Right Doctor Image / Elegant Frame Column from Geometric Balance */}
            <div className="lg:col-span-5 relative flex justify-center">
              
              {/* Backing decorative lines (Tesla/Rolex geometry) */}
              <div className="absolute -inset-4 border border-teal-200/40 rounded-3xl -z-10 transform rotate-1 scale-[0.98] pointer-events-none" />
              <div className="absolute -inset-2 border border-brand-300/30 rounded-3xl -z-10 transform -rotate-1 scale-[1.01] pointer-events-none" />
              
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-brand-50 to-brand-100 aspect-[3/4] border border-brand-200 doctor-frame flex flex-col justify-center items-center">
                
                {/* Minimalist Premium Placeholder in Center */}
                <div className="mb-16 flex flex-col items-center opacity-40">
                  <ShieldCheck className="h-16 w-16 text-brand-700/80 stroke-[1]" />
                  <span className="font-serif tracking-widest text-[10px] uppercase text-brand-900 mt-3 font-light">CCDC CHANDIGARH</span>
                </div>

                {/* Glassmorphic Trust Plate Overlay on Image (Bottom) */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-brand-950/95 via-brand-950/80 to-transparent">
                  <div className="backdrop-blur-sm bg-white/10 border border-white/10 rounded-xl p-4 text-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-semibold">Chief Surgeon</span>
                        <h3 className="font-serif text-lg font-medium tracking-wide mt-0.5">Dr. Vikramaditya Sabharwal</h3>
                        <p className="text-xs text-brand-200">BDS, PGCOI · Oral Implantologist</p>
                      </div>
                      <div className="bg-gold-500/20 border border-gold-500/40 p-1.5 rounded-lg shrink-0">
                        <Award className="h-5 w-5 text-gold-300" />
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-300">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                        European Academy Certified
                      </span>
                      <span className="font-mono text-gold-400">PGCOI CERTIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Floating Experience Glass Card from Theme (Top-Right) */}
                <div className="absolute top-4 right-4 glass-card p-3 rounded-xl shadow-lg border border-white/40">
                  <div className="flex flex-col text-brand-950 items-center px-2">
                    <span className="text-xl font-bold font-mono">18+</span>
                    <span className="text-[8px] uppercase font-bold tracking-tighter opacity-80 mt-0.5">Years Exp</span>
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="absolute top-4 left-4 bg-brand-500/90 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase py-1 px-2.5 rounded-full border border-brand-400/30 flex items-center gap-1 shadow-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Clinically Active
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="border-y border-brand-200/60 bg-white py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-brand-100">
            
            {/* Badge 1 */}
            <div className="flex items-center gap-4 py-4 sm:py-2 lg:px-6 first:pl-0">
              <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100">
                <Clock className="h-5 w-5 text-brand-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">Established</span>
                <span className="text-sm font-semibold text-brand-950 mt-0.5">Est. 2008 in Chandigarh</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-4 py-4 sm:py-2 lg:px-6">
              <div className="h-10 w-10 rounded-xl bg-gold-50 flex items-center justify-center shrink-0 border border-gold-100">
                <Award className="h-5 w-5 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold-600 font-bold">Prime Time Award</span>
                <span className="text-sm font-semibold text-brand-950 mt-0.5">Best Implant & Laser Dentistry Clinic</span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-4 py-4 sm:py-2 lg:px-6">
              <div className="h-10 w-10 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 border border-brand-100">
                <ShieldCheck className="h-5 w-5 text-brand-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-bold">Defence Services</span>
                <span className="text-sm font-semibold text-brand-950 mt-0.5">ECHS Army Chandimandir Empanelled</span>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center gap-4 py-4 sm:py-2 lg:px-6">
              <div className="h-10 w-10 rounded-xl bg-gold-50 flex items-center justify-center shrink-0 border border-gold-100">
                <Sparkles className="h-5 w-5 text-gold-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold-600 font-bold">European Academy</span>
                <span className="text-sm font-semibold text-brand-950 mt-0.5">Certified in Endodontics</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section id="meet-doctor" className="py-20 md:py-24 bg-gradient-to-b from-white to-brand-50/30 relative overflow-hidden">
        {/* Subtle decorative background circles */}
        <div className="absolute top-1/2 -right-16 w-80 h-80 bg-brand-100/40 rounded-full filter blur-3xl pointer-events-none" />
        <div className="absolute -left-16 bottom-0 w-80 h-80 bg-gold-50/50 rounded-full filter blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="font-mono text-[10px] font-bold text-gold-600 tracking-widest uppercase">The Clinical Mind</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-950 mt-2">
              Meet Dr. Vikramaditya <span className="font-semibold text-gradient">Sabharwal</span>
            </h2>
            <div className="h-1 w-20 bg-brand-500 mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Timeline Career Column (Left 7-columns) */}
            <div className="lg:col-span-7 space-y-8">
              <p className="text-base md:text-lg font-light leading-relaxed text-slate-600">
                With a deep commitment to gentle surgical standards, Dr. Sabharwal has sculpted a pristine clinical reputation over 18 years of active surgical practice. His clinical path blends premium institutional wisdom with rich charitable service.
              </p>

              {/* Career Timeline Grid */}
              <div className="relative border-l border-brand-200 pl-6 ml-3 space-y-8">
                
                {/* Milestone 1 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-brand-500 border-4 border-white shadow" />
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-gold-600 uppercase">Foundational Era</span>
                    <h4 className="text-base font-semibold text-brand-950">Began Career at PGI Rohtak</h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                      Rigorous clinical training and deep institutional exposure at the premier Post Graduate Institute of Dental Sciences, Rohtak, establishing an uncompromising diagnostic foundation.
                    </p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-brand-500 border-4 border-white shadow" />
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-gold-600 uppercase">Clinical Leadership</span>
                    <h4 className="text-base font-semibold text-brand-950">Served at Apollo Hospitals, Ludhiana</h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                      Spearheaded high-complexity cases, delivering international dental treatment methodologies under world-class safety policies.
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-brand-500 border-4 border-white shadow" />
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-gold-600 uppercase">Empathetic Duty</span>
                    <h4 className="text-base font-semibold text-brand-950">Headed Bharat Vikas Parishad Charitable Wing</h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                      Dedicated 3 years directing the charitable dental wing in Chandigarh, optimizing gentle painless treatment systems for thousands of local patients.
                    </p>
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-gold-500 border-4 border-white shadow" />
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-bold tracking-wider text-gold-600 uppercase font-bold">European Standardization</span>
                    <h4 className="text-base font-semibold text-brand-950">Certified in Endodontics — European Academy</h4>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                      Advanced specialization in pain-free microscopic root canal treatment (RCT) protocols, assuring extreme therapeutic precision.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Warm styled quote block (Right 5-columns) */}
            <div className="lg:col-span-5">
              <div className="glass-card bg-brand-100/40 border border-brand-200/50 p-8 rounded-2xl relative shadow-md">
                
                {/* Visual quote mark indicator */}
                <div className="absolute -top-6 -left-2 text-[100px] font-serif text-brand-200/40 leading-none select-none">
                  “
                </div>

                <div className="relative z-10 space-y-6">
                  
                  {/* Quote Text */}
                  <blockquote className="font-serif text-lg md:text-xl font-light italic leading-relaxed text-brand-950">
                    &ldquo;We are strongly concerned to a patient's pain and its dental complaints throughout the dental treatment and try to make the procedures easy, painless and comfortable for the patient so that a relation of full faith and fairness can be built between patient and the doctor!&rdquo;
                  </blockquote>

                  {/* Concluding slogan highlight */}
                  <div className="border-t border-brand-200/40 pt-4">
                    <p className="font-sans text-sm font-bold text-gold-600 tracking-wide uppercase">
                      &ldquo;So Smile, because the world Smiles with YOU!!&rdquo;
                    </p>
                  </div>

                  {/* Signature / Credentials block */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="h-10 w-10 rounded-full overflow-hidden border border-brand-300">
                      <img 
                        src={DOCTOR_IMAGE} 
                        alt="Dr. Vikramaditya Sabharwal Signature Avatar" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-serif text-sm font-semibold text-brand-950">Dr. Vikramaditya Sabharwal</h5>
                      <span className="font-mono text-[9px] tracking-wider text-slate-500 uppercase">Director & Founder, CCDC</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-24 bg-white relative border-t border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-brand-100/60 border border-brand-200/50 px-3 py-1.5 rounded-full">
              <Sparkles className="h-3.5 w-3.5 text-brand-500" />
              <span className="font-mono text-[10px] font-bold tracking-widest text-brand-800 uppercase">
                Expertise & Mastercraft
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-950">
              Precision <span className="font-semibold text-gradient">Treatment Suite</span>
            </h2>
            <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full" />
            <p className="font-sans text-sm md:text-base text-slate-500 max-w-2xl mx-auto pt-2">
              Every procedure is calibrated to premium clinical standards, emphasizing absolute safety, zero discomfort, and long-term diagnostic perfection.
            </p>
          </div>

          {/* 6-Card Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="group relative bg-brand-50/25 border border-brand-100 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-100/60 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-12 w-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-950 mb-3">Immediate Dental Implants</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Single sitting surgical procedure delivering structural stability and same-day functional teeth.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-gold-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Inquire protocol</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-brand-50/25 border border-brand-100 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-100/60 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-12 w-12 rounded-xl bg-gold-100 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-950 mb-3">Zirconia Crowns</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Metal-free, premium CAD-designed crowns mimicking the exquisite translucency of natural enamel.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-gold-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Inquire protocol</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-brand-50/25 border border-brand-100 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-100/60 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-12 w-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-950 mb-3">Dental Veneers</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Individually sculpted porcelain veneers for an flawless, symmetrical, and enduring smile makeover.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-gold-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Inquire protocol</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-brand-50/25 border border-brand-100 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-100/60 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-12 w-12 rounded-xl bg-gold-100 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-950 mb-3">Invisalign</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Premium clear orthodontic aligners providing comfortable, virtually invisible bite correction.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-gold-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Inquire protocol</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-brand-50/25 border border-brand-100 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-100/60 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-12 w-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-950 mb-3">Smile Designing</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Comprehensive aesthetic calibration incorporating Digital Smile Design (DSD) parameters.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-gold-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Inquire protocol</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>

            {/* Card 6 */}
            <div className="group relative bg-brand-50/25 border border-brand-100 p-8 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-brand-100/60 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-500 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="h-12 w-12 rounded-xl bg-gold-100 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-brand-950 mb-3">Root Canal Treatment</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-light">
                Microscope-aided endodontic treatments ensuring microscopic precision and painless comfort.
              </p>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-mono font-bold text-gold-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Inquire protocol</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>

          </div>

          {/* Direct WhatsApp Call to Action below grid */}
          <div className="mt-16 bg-brand-50 border border-brand-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100/20 rounded-full filter blur-2xl pointer-events-none" />
            <div className="space-y-2 text-center md:text-left">
              <h4 className="font-serif text-xl font-bold text-brand-950">Inquire About Customized Clinical Protocols</h4>
              <p className="text-xs text-slate-500 max-w-xl">
                Every patient receives an individual diagnostic map. Speak directly to Dr. Sabharwal's clinic desk via secure WhatsApp to explore painless treatments.
              </p>
            </div>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="teal-gradient text-white text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-md shrink-0 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <MessageSquare className="h-4 w-4 fill-white" />
              <span>Book Appointment</span>
            </a>
          </div>

        </div>
      </section>

      {/* Loved by Patients in Chandigarh Section */}
      <section className="py-16 bg-brand-50/50 border-t border-brand-100 relative z-20 overflow-hidden">
        {/* Decorative background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-200/20 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="glass-card bg-white/80 border border-brand-200/50 p-8 md:p-12 rounded-3xl shadow-xl shadow-brand-100/30 text-center space-y-6 md:space-y-8">
            
            {/* Elegant G badge representation */}
            <div className="mx-auto flex items-center justify-center">
              <div className="h-16 w-16 rounded-2xl bg-white shadow-md border border-brand-100 flex items-center justify-center relative group">
                <span className="font-serif text-3xl font-extrabold text-gradient">G</span>
                <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white p-1 rounded-full border border-white">
                  <ShieldCheck className="h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-3">
              <span className="font-mono text-[10px] font-bold text-gold-600 tracking-widest uppercase block">Verified Patient Sentiments</span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-brand-950">
                Loved by Patients in <span className="font-semibold text-gradient">Chandigarh & Beyond</span>
              </h2>
              <p className="font-sans text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Patient faith is earned through precision and absolute transparency. View real, unedited case feedback and diagnostic journeys published directly by our patients on Google.
              </p>
            </div>

            {/* Premium Button */}
            <div className="pt-2 flex justify-center">
              <a 
                href="https://share.google/t1abCeX7RiKtKkCd8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-950 hover:bg-brand-900 text-white text-xs md:text-sm font-bold tracking-wider uppercase px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-brand-950/20 active:scale-95 group cursor-pointer"
              >
                <span>Read Our Reviews on Google</span>
                <ExternalLink className="h-4 w-4 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Information Architecture & Future Experience Roadmap Section */}
      <section id="ia-preview" className="py-20 md:py-24 bg-white border-t border-brand-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-gold-100/80 border border-gold-200 px-3 py-1 rounded-full">
              <Sparkles className="h-3.5 w-3.5 text-gold-600" />
              <span className="font-mono text-[10px] font-bold tracking-widest text-gold-800 uppercase">
                World-Class Clinical UX Blueprint
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-slate-900 leading-tight">
              CCDC Information Architecture
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
              We design digital dental experiences with Mayo Clinic precision and Rolex prestige. Below is the comprehensive structural blueprint designed to maximize absolute trust and convert elite international patients.
            </p>
          </div>

          {/* Interactive IA Display Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* List of Navigation Nodes (Left side) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              {iaSections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedIaSection(sec.id)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 border flex justify-between items-center group cursor-pointer ${
                    selectedIaSection === sec.id
                      ? "bg-brand-500 border-brand-600 text-white shadow-xl shadow-brand-500/10 translate-x-2"
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200/60 text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 rounded-full ${selectedIaSection === sec.id ? "bg-gold-400" : "bg-slate-400 group-hover:bg-brand-400"}`} />
                    <span className="text-sm font-semibold tracking-wide">{sec.title}</span>
                  </div>
                  <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${selectedIaSection === sec.id ? "text-gold-300 translate-x-1" : "text-slate-400"}`} />
                </button>
              ))}
            </div>

            {/* Deep-Dive Interactive Precision-styled Card (Right side) */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 rounded-2xl p-6 md:p-8 shadow-sm min-h-[400px] flex flex-col justify-between">
              
              {/* Dynamic Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIaSection}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* Title & Core Objective */}
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] font-bold text-gold-600 tracking-widest uppercase">UX & CRO Focus</span>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-brand-950">
                      {iaSections.find((s) => s.id === selectedIaSection)?.title.split(" ").slice(1).join(" ")}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed italic">
                      &ldquo;{iaSections.find((s) => s.id === selectedIaSection)?.objective}&rdquo;
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/80">
                    
                    {/* Trust boosters list */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-[10px] font-bold text-emerald-700 tracking-wider uppercase flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                        Trust Multipliers
                      </h4>
                      <ul className="space-y-2">
                        {iaSections.find((s) => s.id === selectedIaSection)?.trustBoosters.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Fear reducers list */}
                    <div className="space-y-3">
                      <h4 className="font-mono text-[10px] font-bold text-slate-800 tracking-wider uppercase flex items-center gap-1.5">
                        <Heart className="h-3.5 w-3.5 text-brand-500" />
                        Fear Defusal Tactics
                      </h4>
                      <ul className="space-y-2">
                        {iaSections.find((s) => s.id === selectedIaSection)?.fearReducers.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <span className="text-slate-400 font-bold mt-0.5">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* CTA Design */}
                  <div className="pt-4 border-t border-slate-200/80">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-semibold block">Section Action Call (CTA)</span>
                    <span className="text-xs text-slate-700 font-medium block mt-1">
                      {iaSections.find((s) => s.id === selectedIaSection)?.cta}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

              {/* Static visual layout stamp */}
              <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>STRUCTURE DESIGNED BY CCDC BRAND TEAM</span>
                <span>CHANDIGARH, IN</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit-us" className="py-20 md:py-24 bg-white relative border-t border-brand-100 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="font-mono text-[10px] font-bold text-gold-600 tracking-widest uppercase">Location & Hours</span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-950 mt-2">
              Visit Our <span className="font-semibold text-gradient">Chandigarh Clinic</span>
            </h2>
            <div className="h-1 w-20 bg-brand-500 mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            
            {/* Left Column: Details Cards */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Address Card */}
              <div className="accent-border pl-6 space-y-2">
                <div className="flex items-center gap-2 text-brand-500 font-mono text-[10px] font-bold tracking-wider uppercase">
                  <MapPin className="h-4 w-4" />
                  <span>Clinic Address</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-950">CCDC Chandigarh</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  House No-1273, Sector 22 B, Ground Floor,<br />
                  Chandigarh, 160022, <span className="text-brand-600 font-medium">behind Hotel Sunbeam</span>
                </p>
              </div>

              {/* Contact Numbers Card */}
              <div className="accent-border pl-6 space-y-2">
                <div className="flex items-center gap-2 text-brand-500 font-mono text-[10px] font-bold tracking-wider uppercase">
                  <Phone className="h-4 w-4" />
                  <span>Direct Desk & Appointments</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-950">Call our Clinicians</h3>
                <div className="space-y-1 text-sm text-slate-600 font-light">
                  <p className="flex items-center gap-2">
                    <span className="font-medium text-brand-950">+91 98767 68558</span>
                    <span className="text-slate-400">|</span>
                    <span className="font-medium text-brand-950">+91 78145 04050</span>
                  </p>
                  <p>
                    <span className="text-xs text-slate-400 font-mono">Landline:</span>{" "}
                    <span className="font-medium text-brand-950">0172 5000 348</span>
                  </p>
                </div>
              </div>

              {/* Clinic Hours Card */}
              <div className="accent-border pl-6 space-y-2">
                <div className="flex items-center gap-2 text-brand-500 font-mono text-[10px] font-bold tracking-wider uppercase">
                  <Clock className="h-4 w-4" />
                  <span>Operational Hours</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-brand-950">Session Timings</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  <span className="font-medium text-brand-950">Monday - Saturday</span><br />
                  10:00 AM - 1:30 PM &amp; 4:30 PM - 7:30 PM
                </p>
                <div className="pt-1">
                  <span className="inline-block text-[10px] font-mono text-gold-600 font-bold uppercase tracking-wider bg-gold-50 border border-gold-100 px-2.5 py-0.5 rounded-full">
                    Sunday Closed
                  </span>
                </div>
              </div>

              {/* Elegant Direct Call/WhatsApp CTA */}
              <div className="pt-4 border-t border-brand-100/60 flex items-center gap-4">
                <a 
                  href="tel:+919876768558"
                  className="bg-brand-50 border border-brand-200/50 hover:bg-brand-100 text-brand-950 text-xs font-bold tracking-wider uppercase px-5 py-3.5 rounded-2xl flex items-center gap-2 transition-colors duration-300"
                >
                  <Phone className="h-4 w-4 text-brand-500" />
                  <span>Call Direct</span>
                </a>
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teal-gradient text-white text-xs font-bold tracking-wider uppercase px-6 py-3.5 rounded-2xl flex items-center gap-2 shadow-md hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4 fill-white" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>

            </div>

            {/* Right Column: Embedded Google Map */}
            <div className="lg:col-span-7 relative">
              <div className="absolute -inset-3 border border-brand-200/40 rounded-3xl -z-10 transform rotate-1 pointer-events-none" />
              <div className="absolute -inset-1.5 border border-brand-300/30 rounded-3xl -z-10 transform -rotate-1 pointer-events-none" />
              
              <div className="w-full h-full min-h-[350px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-xl border border-brand-200 bg-brand-50 relative">
                <iframe 
                  src="https://maps.google.com/maps?q=House%20No-1273,%20Sector%2022%20B,%20Chandigarh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location for Centre for Complete Dental Care (CCDC)"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Trust and Dental Tourism Highlights Grid */}
      <section className="py-20 bg-brand-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2 p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Medical Quality</span>
              <h3 className="font-serif text-xl font-light">Surgical Sterile Guarantee</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our clinic maintains surgical-grade cleanrooms, using state-of-the-art sterilization autoclaves and air purifiers to ensure flawless patient safety.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Elite Service</span>
              <h3 className="font-serif text-xl font-light">Global Patient Experience</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Empathetic care, luxury lodging assistance, customized travel planning, and complete clinical guides to make your journey entirely seamless.
              </p>
            </div>

            <div className="space-y-2 p-6 rounded-xl bg-white/5 border border-white/10">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest">Patient Assurance</span>
              <h3 className="font-serif text-xl font-light">Transparency Pledge</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Full transparent pricing shared before any travel bookings are initiated. All dental implants are loaded with lifetime warranties directly from manufacturers.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-white/10 text-center text-xs text-slate-400 space-y-3">
            <p className="font-serif tracking-widest uppercase text-gold-400 text-[10px]">Centre for Complete Dental Care (CCDC)</p>
            <p>© 2026 CCDC Dental Clinic. Built on medical aesthetics and precision dental guidelines.</p>
            <p className="text-[11px] opacity-70">
              Designed & Developed by{" "}
              <a 
                href="https://zeradental.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gold-300 hover:text-gold-200 underline underline-offset-4 transition-colors font-medium"
              >
                Zera Dental
              </a>
            </p>
          </div>

        </div>
      </section>

      {/* Floating Sticky Bottom WhatsApp Button (Visible on Scroll / Large Screens) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
          >
            {/* Elegant chat prompt speech bubble */}
            <div className="hidden md:block bg-white text-slate-900 border border-brand-100 shadow-xl rounded-2xl px-4 py-2.5 text-xs font-medium max-w-[240px] text-right pointer-events-none mb-1">
              <span className="text-gold-600 block text-[9px] font-mono tracking-widest uppercase font-semibold">Online Assistant</span>
              Chat directly with Dr. Sabharwal
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact via WhatsApp"
              className="bg-[#25D366] hover:bg-[#20ba59] text-white p-4 md:p-5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative cursor-pointer"
            >
              {/* Outer pulse circle */}
              <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping -z-10" />
              <MessageSquare className="h-6 w-6 md:h-7 md:w-7 fill-white text-white" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
