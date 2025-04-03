import React, { useEffect, useState } from 'react';
import { 
  Brain, 
  Clock, 
  Trophy, 
  HelpCircle, 
  Mail, 
  Phone, 
  Instagram,
  ChevronDown,
  Rocket,
  MapPin,
  Calendar,
  Users,
  Code,
  Zap,
  Award,
  Gift,
  Briefcase,
  Lightbulb,
  Bot,
  Heart,
  Globe,
  Shield
} from 'lucide-react';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const hackathonDate = new Date();
    hackathonDate.setMonth(hackathonDate.getMonth() + 1);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = hackathonDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sections = [
    { id: 'home', name: 'Home', icon: Rocket },
    { id: 'about', name: 'About', icon: Brain },
    { id: 'problems', name: 'Problems', icon: Lightbulb },
    { id: 'timeline', name: 'Timeline', icon: Clock },
    { id: 'prizes', name: 'Prizes', icon: Trophy },
    { id: 'faq', name: 'FAQ', icon: HelpCircle },
    { id: 'contact', name: 'Contact', icon: Mail }
  ];

  const problems = [
    {
      title: "AI for Healthcare",
      description: "Develop innovative AI solutions to improve healthcare accessibility and diagnosis accuracy.",
      icon: Bot,
      category: "Healthcare"
    },
    {
      title: "Mental Health Platform",
      description: "Create a platform to support mental health awareness and provide accessible resources.",
      icon: Heart,
      category: "Wellness"
    },
    {
      title: "Sustainable Cities",
      description: "Build solutions for smart city management and environmental sustainability.",
      icon: Globe,
      category: "Environment"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Develop tools to enhance digital security and protect user privacy.",
      icon: Shield,
      category: "Security"
    }
  ];

  const faqs = [
    {
      question: "What is Gradient Ascent?",
      answer: "A 24-hour hackathon where teams compete to solve real-world problems using technology."
    },
    {
      question: "Who can participate?",
      answer: "Students, professionals, and anyone passionate about technology and innovation."
    },
    {
      question: "Do I need a team?",
      answer: "Teams of 2-4 members are required. Don't worry if you don't have a team - we'll help you find one!"
    },
    {
      question: "What should I bring?",
      answer: "Your laptop, charger, and any hardware you plan to use. We'll provide food, drinks, and a comfortable hacking space."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050510] text-white">
      {/* Space Background with Floating Rocks */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510]/50 to-[#050510]"></div>
        
        {/* Floating Rocks */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-rock animate-rock"
            style={{
              width: Math.random() * 50 + 20 + 'px',
              height: Math.random() * 50 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 4 + 4}s`
            }}
          />
        ))}
      </div>

      {/* Side Navigation */}
      <nav className="side-nav">
        {sections.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setCurrentSection(id)}
            className={`side-nav-item ${currentSection === id ? 'active' : ''}`}
          >
            <span className="side-nav-label">{name}</span>
            <div className={`p-3 rounded-full transition-all duration-300 ${
              currentSection === id 
                ? 'bg-blue-500 text-white' 
                : 'bg-black/30 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white/70'
            }`}>
              <Icon className="w-6 h-6" />
            </div>
          </button>
        ))}
      </nav>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <ChevronDown className="w-6 h-6" />
      </div>

      {/* Home Island */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-24 animate-float max-w-7xl w-full">
          {/* Island Decorations */}
          <div className="crystal w-32 h-32 -top-16 left-16 animate-float" style={{ animationDelay: '1s' }} />
          <div className="crystal w-24 h-24 -bottom-12 right-16 animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="grass w-40 h-12 -bottom-6 left-32" />
          <div className="grass w-36 h-10 -bottom-5 right-40" />
          
          <div className="text-center space-y-12">
            <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Gradient Ascent
            </h1>
            <p className="text-3xl text-blue-300">Where Innovation Meets Impact</p>
            
            <div className="flex justify-center gap-12 my-16">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="w-32 h-32 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-4 hover:border-blue-500/50 transition-all duration-300">
                    <span className="text-5xl font-bold text-blue-400">{value}</span>
                  </div>
                  <span className="text-lg text-white/70 uppercase">{unit}</span>
                </div>
              ))}
            </div>

            <button className="px-12 py-6 bg-blue-500 rounded-full text-white text-xl font-bold hover:bg-blue-600 transition-all duration-300 animate-float">
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* About Island */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 animate-float" style={{animationDelay: '0.2s'}}>
            <div className="crystal w-12 h-12 -top-6 right-6 animate-float" style={{ animationDelay: '0.3s' }} />
            <div className="grass w-16 h-4 -bottom-2 left-8" />
            <Calendar className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Event Date</h3>
            <p className="text-white/70">March 15-16, 2024</p>
          </div>
          
          <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 animate-float" style={{animationDelay: '0.4s'}}>
            <div className="crystal w-10 h-10 -top-4 left-6 animate-float" style={{ animationDelay: '0.5s' }} />
            <div className="grass w-14 h-4 -bottom-2 right-10" />
            <MapPin className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Venue</h3>
            <p className="text-white/70">Tech Innovation Hub</p>
          </div>

          <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 animate-float" style={{animationDelay: '0.6s'}}>
            <div className="crystal w-14 h-14 -top-7 right-8 animate-float" style={{ animationDelay: '0.7s' }} />
            <div className="grass w-20 h-5 -bottom-3 left-12" />
            <Users className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Team Size</h3>
            <p className="text-white/70">2-4 Members</p>
          </div>
        </div>
      </section>

      {/* Problem Statements Island */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-12 max-w-6xl w-full animate-float">
          <div className="crystal w-28 h-28 -top-14 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.9s' }} />
          <div className="grass w-36 h-9 -bottom-4 left-24" />
          <div className="grass w-32 h-8 -bottom-4 right-28" />
          
          <h2 className="text-4xl font-bold mb-12 text-center">Problem Statements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="problem-card">
                <div className="island bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-blue-500/10">
                      <problem.icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-sm text-blue-300">{problem.category}</span>
                      <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                      <p className="text-white/70">{problem.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Island */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-12 max-w-4xl w-full animate-float">
          <div className="crystal w-24 h-24 -top-12 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '0.8s' }} />
          <div className="grass w-32 h-8 -bottom-4 left-20" />
          <div className="grass w-28 h-6 -bottom-3 right-24" />
          
          <h2 className="text-4xl font-bold mb-8 text-center">Event Timeline</h2>
          <div className="space-y-8">
            {[
              { time: '09:00 AM', day: 'Day 1', event: 'Registration & Opening Ceremony', icon: Users },
              { time: '10:00 AM', day: 'Day 1', event: 'Problem Statement Release', icon: Brain },
              { time: '11:00 AM', day: 'Day 1', event: 'Hacking Begins', icon: Code },
              { time: '09:00 AM', day: 'Day 2', event: 'Final Submissions', icon: Zap },
              { time: '02:00 PM', day: 'Day 2', event: 'Presentations', icon: Trophy }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                <div className="flex-shrink-0">
                  <item.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-blue-300">{item.time} - {item.day}</div>
                  <div className="font-semibold">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes Island */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-12 max-w-6xl w-full animate-float">
          <div className="crystal w-32 h-32 -top-16 left-1/2 -translate-x-1/2 animate-float" style={{ animationDelay: '1s' }} />
          <div className="grass w-40 h-10 -bottom-5 left-24" />
          <div className="grass w-36 h-8 -bottom-4 right-28" />
          
          <h2 className="text-4xl font-bold mb-12 text-center">Prize Pool</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { place: '1st Place', prize: '₹50,000', icon: Trophy, color: 'from-yellow-400' },
              { place: '2nd Place', prize: '₹30,000', icon: Award, color: 'from-gray-400' },
              { place: '3rd Place', prize: '₹20,000', icon: Gift, color: 'from-orange-400' }
            ].map((prize, index) => (
              <div key={index} className="prize-card relative overflow-hidden">
                <div className="island bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8 text-center">
                  <div className="prize-glow" />
                  <prize.icon className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-b ${prize.color} to-transparent bg-clip-text text-transparent`} />
                  <h3 className="text-2xl font-bold mb-2">{prize.place}</h3>
                  <p className="text-3xl font-bold text-blue-400">{prize.prize}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="island bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <Briefcase className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Internship Opportunity</h3>
              <p className="text-white/70">Top performers get a chance for paid internships</p>
            </div>
            <div className="island bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
              <Award className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Special Mentions</h3>
              <p className="text-white/70">Recognition for innovative solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Island */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-12 max-w-4xl w-full animate-float">
          <div className="crystal w-20 h-20 -top-10 right-10 animate-float" style={{ animationDelay: '1.2s' }} />
          <div className="crystal w-16 h-16 -bottom-8 left-10 animate-float" style={{ animationDelay: '1.4s' }} />
          <div className="grass w-28 h-7 -bottom-3 right-20" />
          
          <h2 className="text-4xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="island bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Island */}
      <section className="relative min-h-screen flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <a href="mailto:contact@gradientascent.com" className="group">
            <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 animate-float" style={{animationDelay: '0.2s'}}>
              <div className="crystal w-12 h-12 -top-6 left-6 animate-float" style={{ animationDelay: '1.5s' }} />
              <div className="grass w-16 h-4 -bottom-2 right-8" />
              <Mail className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-white/70">contact@gradientascent.com</p>
            </div>
          </a>

          <a href="tel:+1234567890" className="group">
            <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 animate-float" style={{animationDelay: '0.4s'}}>
              <div className="crystal w-10 h-10 -top-5 right-6 animate-float" style={{ animationDelay: '1.6s' }} />
              <div className="grass w-14 h-4 -bottom-2 left-10" />
              <Phone className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-white/70">+123 456 7890</p>
            </div>
          </a>

          <a href="https://instagram.com/gradientascent" target="_blank" rel="noopener noreferrer" className="group">
            <div className="island bg-black/30 backdrop-blur-xl rounded-3xl border border-white/10 p-8 animate-float" style={{animationDelay: '0.6s'}}>
              <div className="crystal w-14 h-14 -top-7 left-8 animate-float" style={{ animationDelay: '1.7s' }} />
              <div className="grass w-18 h-5 -bottom-2 right-12" />
              <Instagram className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <p className="text-white/70">@gradientascent</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;