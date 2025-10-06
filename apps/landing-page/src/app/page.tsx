'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import MainSearchModal from '../components/MainSearchModal';
import { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  Music,
  Building,
  PartyPopper,
  Star,
  ChevronDown,
  Heart,
  Shield,
  Clock,
  IndianRupee,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Camera,
  Utensils,
  Search,
  MessageCircle,
  Smile,
  Gift,
  CheckCircle,
  ArrowRight,
  X,
  Menu,
  ChevronRight,
} from 'lucide-react';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [showSearchModal, setShowSearchModal] = useState(false);
  type EventType = {
    id: string;
    title: string;
    icon: string;
    tagline: string;
    desc: string;
    gradient: string;
    budget: string;
  };
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  type Orb = {
    width: number;
    height: number;
    left: string;
    top: string;
    color: string;
    x: number;
    y: number;
    duration: number;
  };
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const { scrollYProgress } = useScroll();
  const heroRef = useRef(null);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % 6);
    }, 3000);
    const stepInterval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 4000);
    return () => {
      clearInterval(categoryInterval);
      clearInterval(stepInterval);
    };
  }, []);

  useEffect(() => {
    setOrbs(
      [...Array(15)].map((_, i) => ({
        width: Math.random() * 250 + 60,
        height: Math.random() * 250 + 60,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        color:
          i % 4 === 0
            ? 'rgba(251, 146, 60, 0.06)'
            : i % 4 === 1
              ? 'rgba(251, 113, 133, 0.06)'
              : i % 4 === 2
                ? 'rgba(251, 191, 36, 0.06)'
                : 'rgba(244, 114, 182, 0.06)',
        x: Math.random() * 80 - 40,
        y: Math.random() * 80 - 40,
        duration: Math.random() * 12 + 8,
      })),
    );
  }, []);

  const categories = [
    {
      icon: <Building size={40} />,
      title: 'Dream Venues',
      color: 'from-rose-400 to-orange-400',
      desc: 'Where your story begins - magical spaces for unforgettable moments',
      count: '200+',
    },
    {
      icon: <Music size={40} />,
      title: 'Live Entertainment',
      color: 'from-amber-400 to-rose-400',
      desc: 'Music that moves hearts and creates memories that last forever',
      count: '150+',
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Stunning Decor',
      color: 'from-orange-400 to-pink-400',
      desc: 'Transform spaces into wonderlands that capture your vision',
      count: '180+',
    },
    {
      icon: <Utensils size={40} />,
      title: 'Delicious Catering',
      color: 'from-rose-400 to-amber-400',
      desc: 'Flavors that bring people together and create joy',
      count: '220+',
    },
    {
      icon: <Camera size={40} />,
      title: 'Precious Moments',
      color: 'from-pink-400 to-orange-400',
      desc: 'Capturing emotions, laughter, and tears of joy forever',
      count: '130+',
    },
    {
      icon: <PartyPopper size={40} />,
      title: 'Expert Planning',
      color: 'from-amber-400 to-pink-400',
      desc: 'Your stress-free journey to the perfect celebration',
      count: '90+',
    },
  ];

  const steps = [
    {
      icon: <Heart size={48} />,
      title: 'Share Your Vision',
      desc: 'Tell us about your dreams, your story, and what makes this celebration special to you and your loved ones.',
      color: 'from-rose-400 to-orange-400',
    },
    {
      icon: <Smile size={48} />,
      title: 'Discover Perfect Matches',
      desc: 'We connect you with vendors who understand your vision and share your excitement for creating magic.',
      color: 'from-amber-400 to-pink-400',
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'Build Your Dream Team',
      desc: 'Chat with passionate professionals who care about making your celebration everything you imagined.',
      color: 'from-orange-400 to-rose-400',
    },
    {
      icon: <Gift size={48} />,
      title: 'Celebrate Effortlessly',
      desc: 'Relax and enjoy every moment while we handle the details and make your celebration shine.',
      color: 'from-pink-400 to-amber-400',
    },
  ];

  const eventTypes: EventType[] = [
    {
      id: 'wedding',
      title: 'Weddings',
      icon: '💑',
      tagline: 'Two Hearts, One Journey',
      desc: 'Where forever begins with the blessings of those you love most',
      gradient: 'from-rose-500 to-pink-600',
      budget: '₹8-15L',
    },
    {
      id: 'birthday',
      title: 'Birthdays',
      icon: '🎂',
      tagline: 'Another Year of Blessings',
      desc: 'Honoring the gift of life and the joy you bring to others',
      gradient: 'from-amber-500 to-orange-600',
      budget: '₹50K-3L',
    },
    {
      id: 'babyshower',
      title: 'Baby Showers',
      icon: '👶',
      tagline: 'Welcoming New Life',
      desc: 'Celebrating the miracle of new beginnings and growing families',
      gradient: 'from-cyan-500 to-blue-600',
      budget: '₹30K-1.5L',
    },
    {
      id: 'anniversary',
      title: 'Anniversaries',
      icon: '💝',
      tagline: 'Years of Togetherness',
      desc: 'Commemorating enduring love and cherished memories',
      gradient: 'from-purple-500 to-pink-600',
      budget: '₹40K-2L',
    },
    {
      id: 'engagement',
      title: 'Engagements',
      icon: '💍',
      tagline: 'Promise of Forever',
      desc: 'The beautiful beginning of a lifetime commitment',
      gradient: 'from-pink-500 to-rose-600',
      budget: '₹3-8L',
    },
    {
      id: 'corporate',
      title: 'Family Reunions',
      icon: '👨‍👩‍👧‍👦',
      tagline: 'Bonds That Matter',
      desc: 'Bringing loved ones together to celebrate your shared journey',
      gradient: 'from-amber-400 to-orange-400',
      budget: '₹1-5L',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: orb.width,
              height: orb.height,
              background: `radial-gradient(circle, ${orb.color}, transparent)`,
              left: orb.left,
              top: orb.top,
            }}
            animate={{
              x: [0, orb.x],
              y: [0, orb.y],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-lg' : 'bg-white/90 backdrop-blur-xl'} border-b border-orange-100`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 via-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
              C
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
              Celebro
            </span>
          </motion.div>

          <div className="hidden lg:flex gap-10 items-center">
            {['Services', 'How It Works', 'Stories', 'About'].map((item, i) => (
              <motion.a
                key={i}
                href={`#${item.toLowerCase().replace(' ', '')}`}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium text-sm relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-amber-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(251, 113, 133, 0.35)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSearchModal(true)}
              className="bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg"
            >
              Start Your Journey
            </motion.button>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 pt-24"
      >
        <motion.div style={{ opacity, scale }} className="z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <div className="flex items-center gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-rose-100">
              <Heart className="text-rose-500" size={20} fill="currentColor" />
              <span className="text-sm font-semibold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
                Creating Joy for 10,000+ Families
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight"
          >
            Moments That
            <br />
            <span className="bg-gradient-to-r from-rose-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              Touch Hearts
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Every celebration is a story of love, joy, and togetherness. We help
            you create magical moments that your family will cherish forever.
            Because the best memories deserve perfect planning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(251, 113, 133, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSearchModal(true)}
              className="group bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <Heart size={24} fill="currentColor" />
              <span>Begin Your Story</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full font-bold text-lg hover:border-rose-500 hover:text-rose-600 transition-all"
            >
              See Happy Families
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              {
                icon: <Users size={32} />,
                number: '10K+',
                label: 'Happy Families',
                color: 'from-rose-400 to-orange-400',
              },
              {
                icon: <Heart size={32} />,
                number: '500+',
                label: 'Passionate Vendors',
                color: 'from-amber-400 to-pink-400',
              },
              {
                icon: <Star size={32} />,
                number: '4.9/5',
                label: 'Love Rating',
                color: 'from-orange-400 to-rose-400',
              },
              {
                icon: <Smile size={32} />,
                number: '98%',
                label: 'Pure Joy Rate',
                color: 'from-pink-400 to-amber-400',
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-3 shadow-lg`}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <ChevronDown size={40} className="text-rose-400 opacity-60" />
        </motion.div>
      </section>

      <MainSearchModal />

      {/* Featured Vendors Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-br from-orange-50 to-rose-50">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 via-orange-50/20 to-amber-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
                Handpicked Excellence
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Featured Vendors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate professionals who bring celebrations to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Royal Gardens',
                category: 'Venue',
                rating: 4.9,
                reviews: 234,
                image: '🏛️',
                price: '₹₹₹',
                tagline: 'Where dreams unfold',
              },
              {
                name: 'Lens & Light',
                category: 'Photography',
                rating: 4.8,
                reviews: 189,
                image: '📸',
                price: '₹₹',
                tagline: 'Capturing emotions',
              },
              {
                name: 'Divine Decor',
                category: 'Decoration',
                rating: 5.0,
                reviews: 156,
                image: '✨',
                price: '₹₹₹',
                tagline: 'Creating magic',
              },
              {
                name: 'Spice Symphony',
                category: 'Catering',
                rating: 4.9,
                reviews: 312,
                image: '🍽️',
                price: '₹₹',
                tagline: 'Culinary excellence',
              },
            ].map((vendor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer border border-gray-100 hover:border-rose-200 transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 flex items-center justify-center text-6xl relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {vendor.image}
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">
                        {vendor.name}
                      </h3>
                      <p className="text-sm text-gray-600">{vendor.category}</p>
                    </div>
                    <span className="text-amber-600 font-bold text-sm">
                      {vendor.price}
                    </span>
                  </div>
                  <p className="text-xs text-rose-600 font-semibold mb-3">
                    {vendor.tagline}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {vendor.rating} ({vendor.reviews})
                    </span>
                  </div>
                  <button className="w-full py-2.5 border-2 border-rose-500 text-rose-600 rounded-lg font-semibold hover:bg-rose-500 hover:text-white transition-all text-sm">
                    View Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-bold hover:shadow-xl transition-all inline-flex items-center gap-2">
              <span>Explore All Vendors</span>
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="howitworks"
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
                Your Journey
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              From Dream to Reality
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, heartfelt journey to your perfect celebration
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-32 h-1 bg-gradient-to-r from-rose-200 via-orange-200 to-amber-200"></div>

            <div className="grid lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  onHoverStart={() => setActiveStep(i)}
                  className="relative"
                >
                  <div className="flex justify-center mb-8">
                    <motion.div
                      animate={activeStep === i ? { scale: [1, 1.2, 1] } : {}}
                      transition={{ duration: 0.5 }}
                      className={`w-24 h-24 rounded-full flex items-center justify-center font-bold text-2xl shadow-xl z-10 transition-all duration-500 ${
                        activeStep === i
                          ? `bg-gradient-to-br ${step.color} text-white`
                          : 'bg-white text-gray-400 border-4 border-gray-200'
                      }`}
                    >
                      {i + 1}
                    </motion.div>
                  </div>

                  <motion.div
                    animate={activeStep === i ? { y: -10 } : { y: 0 }}
                    className={`p-8 rounded-3xl transition-all duration-500 ${
                      activeStep === i
                        ? `bg-gradient-to-br ${step.color} text-white shadow-2xl`
                        : 'bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-center mb-6">{step.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-center">
                      {step.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed text-center ${activeStep === i ? 'text-white/90' : 'text-gray-600'}`}
                    >
                      {step.desc}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-32 bg-gradient-to-br from-orange-50 to-rose-50"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold">
                Our Heart & Soul
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Services Made with Love
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every service is chosen with care, passion, and dedication to
              making your celebration extraordinary
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                onHoverStart={() => setActiveCategory(i)}
                className="relative group cursor-pointer"
              >
                <div
                  className={`rounded-3xl p-10 transition-all duration-500 h-full ${
                    activeCategory === i
                      ? `bg-gradient-to-br ${cat.color} text-white shadow-2xl`
                      : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <motion.div
                    animate={
                      activeCategory === i
                        ? { rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }
                        : {}
                    }
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                  >
                    {cat.icon}
                  </motion.div>

                  <div
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                      activeCategory === i ? 'bg-white/20' : 'bg-gray-100'
                    }`}
                  >
                    {cat.count} Loving Partners
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{cat.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${activeCategory === i ? 'text-white/90' : 'text-gray-600'}`}
                  >
                    {cat.desc}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      activeCategory === i ? { width: '100%' } : { width: 0 }
                    }
                    className={`h-1 rounded-full mt-6 ${activeCategory === i ? 'bg-white/40' : 'bg-rose-200'}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="stories"
        className="py-32 bg-gradient-to-br from-rose-600 via-orange-500 to-amber-500 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle, white 2px, transparent 2px)',
              backgroundSize: '50px 50px',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-block mb-4">
              <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                Heartfelt Stories
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Love, Laughter & Memories
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Real emotions, real celebrations, real families sharing their joy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Ananya & Rohan',
                role: 'Wedding, Mumbai',
                text: "Our wedding wasn't just perfect - it was magical. Celebro understood that we weren't just planning an event, but creating the beginning of our forever. Every smile, every tear of joy, every blessing from our families was captured beautifully. Thank you for making our dreams come true!",
                rating: 5,
                image: '💑',
                emotion: 'Pure Love',
              },
              {
                name: 'Rajesh Kumar',
                role: "Daughter's Birthday, Delhi",
                text: "Watching my little princess's face light up with joy was priceless. Celebro didn't just organize a party - they created a day of pure magic that she'll remember forever. As a father, seeing your child that happy is everything. Forever grateful!",
                rating: 5,
                image: '👧',
                emotion: 'Fatherly Pride',
              },
              {
                name: 'The Mehta Family',
                role: '50th Anniversary, Bangalore',
                text: 'Celebrating 50 years of togetherness with all our children and grandchildren was a dream. Celebro brought three generations together with so much warmth and care. The way they honored our journey and traditions made us feel truly special.',
                rating: 5,
                image: '👴👵',
                emotion: 'Family Love',
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl hover:bg-white/15 transition-all border border-white/20"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-amber-300 text-amber-300"
                    />
                  ))}
                </div>
                <p className="text-white/95 mb-6 leading-relaxed italic text-base">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
                      {review.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{review.name}</h4>
                      <p className="text-sm text-white/70">{review.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/70">Feeling</div>
                    <div className="text-sm font-semibold text-white">
                      {review.emotion}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Your Trust is Our Foundation
            </h3>
            <p className="text-gray-600">
              Verified, secure, and always reliable
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: <CheckCircle size={36} />,
                title: 'Verified Vendors',
                desc: 'Background checked & quality assured',
                color: 'text-green-600',
              },
              {
                icon: <Shield size={36} />,
                title: 'Secure Payments',
                desc: 'SSL encrypted & PCI compliant',
                color: 'text-blue-600',
              },
              {
                icon: <Clock size={36} />,
                title: '24/7 Support',
                desc: 'Always here when you need us',
                color: 'text-purple-600',
              },
              {
                icon: <Award size={36} />,
                title: 'Best Prices',
                desc: 'Price match guarantee',
                color: 'text-amber-600',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100"
              >
                <div className={`${item.color} mb-3 inline-block`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-1 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Live Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500 rounded-2xl p-8 text-white text-center"
          >
            <div className="flex flex-col md:flex-row items-center justify-around gap-6">
              <div>
                <div className="text-4xl font-bold mb-1">47</div>
                <div className="text-sm opacity-90">Events This Week</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">₹2.3Cr+</div>
                <div className="text-sm opacity-90">Bookings This Month</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">10,234</div>
                <div className="text-sm opacity-90">Happy Celebrations</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-1">99.2%</div>
                <div className="text-sm opacity-90">Customer Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-rose-600 via-orange-500 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)',
              backgroundSize: '100% 100%',
            }}
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto text-center px-6"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            className="text-8xl mb-8"
          >
            🎊
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Your Story Begins Here
          </h2>

          <p className="text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
            Life's most beautiful moments deserve to be celebrated with love,
            care, and joy. Let us help you create memories that will warm your
            heart for years to come.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSearchModal(true)}
              className="group bg-white text-rose-600 px-12 py-6 rounded-full font-bold text-xl shadow-2xl flex items-center gap-3 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-amber-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Heart size={24} className="relative z-10" fill="currentColor" />
              <span className="relative z-10">Start Your Celebration</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="border-3 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Become a Partner
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-12 flex-wrap"
          >
            {[
              { icon: <Heart size={24} />, text: 'Made with Love' },
              { icon: <Shield size={24} />, text: 'Trusted by Families' },
              { icon: <Smile size={24} />, text: 'Joy Guaranteed' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white/90">
                {item.icon}
                <span className="font-semibold">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 mb-6 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-amber-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  C
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-amber-400 bg-clip-text text-transparent">
                  Celebro
                </span>
              </motion.div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Creating moments of joy, love, and togetherness. Because every
                celebration deserves to be unforgettable.
              </p>
              <div className="flex gap-4">
                {['F', 'I', 'T', 'L'].map((social, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-rose-500 hover:to-amber-500 flex items-center justify-center cursor-pointer transition-all"
                  >
                    <span className="text-xs font-bold">{social}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Explore</h4>
              <ul className="space-y-3 text-sm">
                {[
                  'About Our Story',
                  'How We Work',
                  'Services',
                  'Testimonials',
                  'Join Our Team',
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-rose-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-rose-400 group-hover:w-4 transition-all"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">
                For Partners
              </h4>
              <ul className="space-y-3 text-sm">
                {[
                  'Become a Vendor',
                  'Partner Login',
                  'Success Stories',
                  'Resources',
                  'Support',
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-amber-400 group-hover:w-4 transition-all"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Connect</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone
                    size={18}
                    className="text-rose-400 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div className="text-gray-400 mb-1">Let's Talk</div>
                    <a
                      href="tel:+919876543210"
                      className="text-white hover:text-rose-400 transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail
                    size={18}
                    className="text-amber-400 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div className="text-gray-400 mb-1">Write to Us</div>
                    <a
                      href="mailto:hello@celebro.in"
                      className="text-white hover:text-amber-400 transition-colors"
                    >
                      hello@celebro.in
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin
                    size={18}
                    className="text-orange-400 mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <div className="text-gray-400 mb-1">Visit Us</div>
                    <span className="text-white">Mumbai, Maharashtra</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                Made with love in India. © {new Date().getFullYear()} Celebro.
                All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-500 hover:text-rose-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-amber-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-orange-400 transition-colors"
                >
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Search Modal */}
      {showSearchModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSearchModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div
              className={`relative p-8 ${selectedEvent ? `bg-gradient-to-br ${selectedEvent.gradient}` : 'bg-gradient-to-br from-rose-500 to-orange-500'} text-white rounded-t-3xl`}
            >
              <button
                onClick={() => setShowSearchModal(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <X size={20} />
              </button>

              {selectedEvent ? (
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{selectedEvent.icon}</div>
                    <div>
                      <h2 className="text-3xl font-bold">
                        {selectedEvent.title}
                      </h2>
                      <p className="text-white/80 text-sm">
                        {selectedEvent.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90">{selectedEvent.desc}</p>
                </div>
              ) : (
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    Start Your Journey
                  </h2>
                  <p className="text-white/90">
                    Tell us what you're celebrating
                  </p>
                </div>
              )}
            </div>

            <div className="p-8">
              <div className="relative mb-6">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search vendors, services, locations..."
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-rose-500/20 text-gray-900"
                />
              </div>

              {!selectedEvent && (
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">
                    Choose Your Event Type
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {eventTypes.map(event => (
                      <button
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        className="p-4 rounded-xl border-2 border-gray-200 hover:border-rose-500 transition-all text-left group"
                      >
                        <div className="text-3xl mb-2">{event.icon}</div>
                        <div className="font-bold text-gray-900 text-sm">
                          {event.title}
                        </div>
                        <div className="text-xs text-gray-600">
                          {event.budget}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {selectedEvent && (
                <div>
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                      <Users className="mx-auto mb-2 text-rose-500" size={22} />
                      <div className="text-sm font-bold text-gray-900">
                        200+
                      </div>
                      <div className="text-xs text-gray-600">Vendors</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                      <IndianRupee
                        className="mx-auto mb-2 text-amber-500"
                        size={22}
                      />
                      <div className="text-xs font-bold text-gray-900">
                        {selectedEvent.budget}
                      </div>
                      <div className="text-xs text-gray-600">Budget</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
                      <Star
                        className="mx-auto mb-2 text-orange-500"
                        size={22}
                      />
                      <div className="text-sm font-bold text-gray-900">
                        4.9/5
                      </div>
                      <div className="text-xs text-gray-600">Rating</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Popular Services
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Venues',
                        'Photographers',
                        'Catering',
                        'Decor',
                        'Entertainment',
                        'Planning',
                      ].map((service, i) => (
                        <button
                          key={i}
                          className="flex items-center justify-between p-3 bg-gray-50 hover:bg-rose-50 rounded-xl transition-all group border border-transparent hover:border-rose-200"
                        >
                          <span className="text-sm font-medium text-gray-700 group-hover:text-rose-600">
                            {service}
                          </span>
                          <ChevronRight
                            className="text-gray-400 group-hover:text-rose-600"
                            size={18}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  className={`flex-1 py-4 px-6 ${selectedEvent ? `bg-gradient-to-r ${selectedEvent.gradient}` : 'bg-gradient-to-r from-rose-500 to-pink-600'} text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                >
                  <Heart size={18} />
                  <span>Start Planning</span>
                </button>
                {selectedEvent && (
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-rose-500 hover:text-rose-600 transition-all"
                  >
                    Change Event
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
