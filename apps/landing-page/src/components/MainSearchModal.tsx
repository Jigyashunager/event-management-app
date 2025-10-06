import { useState } from 'react';
import {
  Heart,
  ArrowRight,
  Users,
  IndianRupee,
  ChevronRight,
  Search,
  X,
  Calendar,
  Sparkles,
} from 'lucide-react';

type Category = {
  id: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  gradient: string;
  hoverGradient: string;
  stats: { vendors: string; avgBudget: string; duration: string };
  popular: string[];
};

export default function EventCategoryHero() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const categories = [
    {
      id: 'wedding',
      title: 'Weddings',
      icon: '💑',
      tagline: 'Where Forever Begins',
      description:
        'Create the wedding of your dreams with perfect vendors and stunning venues',
      gradient: 'from-rose-500/90 to-pink-600/90',
      hoverGradient: 'from-rose-500 to-pink-600',
      stats: { vendors: '200+', avgBudget: '₹8-15L', duration: '6-12 months' },
      popular: [
        'Venues',
        'Photographers',
        'Catering',
        'Decor',
        'Entertainment',
        'Makeup',
      ],
    },
    {
      id: 'birthday',
      title: 'Birthdays',
      icon: '🎂',
      tagline: 'Celebrate Another Year',
      description:
        'From first birthdays to milestones, make every year unforgettable',
      gradient: 'from-amber-500/90 to-orange-600/90',
      hoverGradient: 'from-amber-500 to-orange-600',
      stats: { vendors: '180+', avgBudget: '₹50K-3L', duration: '1-2 months' },
      popular: [
        'Venues',
        'Themes',
        'Entertainment',
        'Cakes',
        'Decor',
        'Photos',
      ],
    },
    {
      id: 'babyshower',
      title: 'Baby Showers',
      icon: '👶',
      tagline: 'Welcome New Life',
      description:
        'Celebrate new beginnings with love, joy, and beautiful memories',
      gradient: 'from-cyan-500/90 to-blue-600/90',
      hoverGradient: 'from-cyan-500 to-blue-600',
      stats: { vendors: '120+', avgBudget: '₹30K-1.5L', duration: '3-6 weeks' },
      popular: ['Decor', 'Catering', 'Games', 'Gifts', 'Photos', 'Venues'],
    },
    {
      id: 'anniversary',
      title: 'Anniversaries',
      icon: '💝',
      tagline: 'Years of Togetherness',
      description:
        'Honor your journey of love with an intimate or grand celebration',
      gradient: 'from-purple-500/90 to-pink-600/90',
      hoverGradient: 'from-purple-500 to-pink-600',
      stats: { vendors: '150+', avgBudget: '₹40K-2L', duration: '2-8 weeks' },
      popular: ['Venues', 'Dining', 'Decor', 'Photos', 'Music', 'Gifts'],
    },
    {
      id: 'engagement',
      title: 'Engagements',
      icon: '💍',
      tagline: 'Promise of Forever',
      description: 'Mark the beginning of your beautiful journey together',
      gradient: 'from-pink-500/90 to-rose-600/90',
      hoverGradient: 'from-pink-500 to-rose-600',
      stats: { vendors: '160+', avgBudget: '₹3-8L', duration: '2-4 months' },
      popular: ['Venues', 'Rings', 'Photos', 'Decor', 'Catering', 'Music'],
    },
    {
      id: 'corporate',
      title: 'Corporate',
      icon: '🎊',
      tagline: 'Professional Excellence',
      description:
        'Create impactful experiences from conferences to celebrations',
      gradient: 'from-slate-600/90 to-gray-700/90',
      hoverGradient: 'from-slate-600 to-gray-700',
      stats: { vendors: '140+', avgBudget: '₹1-10L', duration: '1-3 months' },
      popular: [
        'Venues',
        'Catering',
        'Tech',
        'Logistics',
        'Team Events',
        'Speakers',
      ],
    },
  ];

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        
        .glass-card {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
        
        .modal-enter {
          animation: modalEnter 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes modalEnter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>

      <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 pt-20 pb-12 overflow-hidden">
        {/* Subtle Grid Background */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Minimal Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 glass-card rounded-full border border-gray-200/50 mb-6">
              <Sparkles className="text-rose-500" size={16} />
              <span className="text-sm font-medium text-gray-700">
                Choose Your Event
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              What are you celebrating?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your event type and connect with the perfect vendors
            </p>
          </div>

          {/* Modern Category Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {categories.map((category, index) => (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowSearchModal(true);
                }}
                className="group relative cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div
                  className={`relative h-56 rounded-2xl overflow-hidden transition-all duration-300 ${
                    hoveredCard === category.id
                      ? 'scale-[1.02] shadow-2xl'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${hoveredCard === category.id ? category.hoverGradient : category.gradient} transition-all duration-500`}
                  />

                  {/* Shimmer Effect on Hover */}
                  {hoveredCard === category.id && (
                    <div className="absolute inset-0 shimmer" />
                  )}

                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-between text-white">
                    <div>
                      <div
                        className={`text-5xl mb-3 inline-block ${hoveredCard === category.id ? 'animate-float' : ''}`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm text-white/80 mb-2">
                        {category.tagline}
                      </p>
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                        {category.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white/90">
                        {category.stats.vendors} vendors
                      </span>
                      <ArrowRight
                        size={18}
                        className={`transition-transform ${hoveredCard === category.id ? 'translate-x-1' : ''}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modern Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="glass-card bg-white/80 rounded-2xl p-4 border border-gray-200/50 shadow-xl">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search events, vendors, locations..."
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50/50 rounded-xl border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500/50 transition-all text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <button className="px-6 py-3.5 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all">
                  Search
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-xs text-gray-500 py-1.5">Trending:</span>
                {['Venues', 'Photographers', 'Catering', 'Decor'].map(
                  (tag, i) => (
                    <button
                      key={i}
                      className="px-3 py-1.5 bg-gray-100/80 hover:bg-rose-50 hover:text-rose-600 rounded-lg text-xs font-medium text-gray-700 transition-all"
                    >
                      {tag}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Modal */}
      {showSearchModal && selectedCategory && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSearchModal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto modal-enter"
          >
            {/* Modal Header */}
            <div
              className={`relative p-8 bg-gradient-to-br ${selectedCategory.hoverGradient} text-white rounded-t-3xl`}
            >
              <button
                onClick={() => setShowSearchModal(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-white/20 glass-card rounded-xl flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl">{selectedCategory.icon}</div>
                <div>
                  <h2 className="text-3xl font-bold">
                    {selectedCategory.title}
                  </h2>
                  <p className="text-white/80 text-sm">
                    {selectedCategory.tagline}
                  </p>
                </div>
              </div>
              <p className="text-white/90">{selectedCategory.description}</p>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 text-center border border-gray-200/50">
                  <Users className="mx-auto mb-2 text-rose-500" size={22} />
                  <div className="text-xl font-bold text-gray-900">
                    {selectedCategory.stats.vendors}
                  </div>
                  <div className="text-xs text-gray-600">Vendors</div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 text-center border border-gray-200/50">
                  <IndianRupee
                    className="mx-auto mb-2 text-amber-500"
                    size={22}
                  />
                  <div className="text-base font-bold text-gray-900">
                    {selectedCategory.stats.avgBudget}
                  </div>
                  <div className="text-xs text-gray-600">Budget</div>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 text-center border border-gray-200/50">
                  <Calendar
                    className="mx-auto mb-2 text-orange-500"
                    size={22}
                  />
                  <div className="text-xs font-bold text-gray-900">
                    {selectedCategory.stats.duration}
                  </div>
                  <div className="text-xs text-gray-600">Timeline</div>
                </div>
              </div>

              {/* Services Grid */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Popular Services
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedCategory.popular.map((service, i) => (
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

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <button
                  className={`flex-1 py-3.5 px-6 bg-gradient-to-r ${selectedCategory.hoverGradient} text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2`}
                >
                  <Heart size={18} />
                  <span>Start Planning</span>
                </button>
                <button className="flex-1 py-3.5 px-6 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-rose-500 hover:text-rose-600 transition-all">
                  Browse Vendors
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
