
'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { motion, useInView } from 'framer-motion';

// Register GSAP plugins (only in browser)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PartnershipOpportunities() {
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const headerRef = useRef(null);
  const [activePartner, setActivePartner] = useState(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });
  const [isMobile, setIsMobile] = useState(false);
  const ctaSectionRef = useRef(null);
  const isInView2 = useInView(ctaSectionRef, { once: true, amount: 0.2 });

  // Determine mobile vs desktop
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Partnership types data
  const partnershipTypes = [
    { id: 'knowledge', title: 'Knowledge & Research Collaboration', tagline: 'Creating evidence-based impact.', link: '/partnership/knowledge-research', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>) },
    { id: 'technology', title: 'Technology & Innovation Collaboration', tagline: 'Scaling solutions through digital transformation.', link: '/partnership/technology-innovation', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>) },
    { id: 'media', title: 'Media & Communication Collaboration', tagline: 'Amplifying voices for change.', link: '/partnership/media-communication', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>) },
    { id: 'volunteer', title: 'Volunteer & Capacity-Building Engagements', tagline: 'Nurturing skills and fostering growth.', link: '/partnership/volunteer-capacity', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>) },
    { id: 'government', title: 'Government & Civic Collaboration', tagline: 'Creating systemic change together.', link: '/partnership/government-civic', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M2 20h20"></path><path d="M12 2L3 8v12h18V8L12 2z"></path><path d="M9 14v4"></path><path d="M15 14v4"></path><path d="M9 8v2"></path><path d="M15 8v2"></path></svg>) },
    { id: 'institutional', title: 'Institutional & Infrastructure Support', tagline: 'Building foundations for lasting impact.', link: '/partnership/institutional-infrastructure', icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>) },
  ];

  // Setup GSAP ScrollTrigger animation (desktop only)
  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined') return;
    if (window.innerWidth < 1024) return; // skip on mobile

    ScrollTrigger.getAll().forEach((st) => st.kill());

    const ctx = gsap.context(() => {
      const cardsContainer = cardsContainerRef.current;
      const totalHeight = cardsContainer.scrollHeight;
      const visibleHeight = window.innerHeight;
      const scrollDistance = totalHeight - visibleHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${scrollDistance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });

      tl.to(cardsContainer, {
        y: -scrollDistance,
        ease: 'none',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
  const staggerContainer = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

  return (
    <section    className="py-24 bg-white relative overflow-hidden" id="partnership-opportunities">
      {/* Section header */}
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          {isMobile ? (
            <motion.h2 initial="hidden" animate={isHeaderInView ? 'visible' : 'hidden'} variants={fadeInUp} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl font-bold text-[#F4720B] mb-4 font-title font-light tracking-tight">Partnership Opportunities</motion.h2>
          ) : (
            <h2 className="text-4xl md:text-5xl font-bold text-[#F4720B] mb-4 font-title font-light tracking-tight">Partnership Opportunities</h2>
          )}

          <div className="h-1 w-24 bg-[#F4720B] rounded-full mx-auto mb-6"></div>

          {isMobile ? (
            <motion.p initial="hidden" animate={isHeaderInView ? 'visible' : 'hidden'} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.1 }} className="text-xl text-gray-700 leading-relaxed font-paragraph">True progress comes through collaboration, not just contribution. Partner with JKBF to leverage collective strengths for meaningful social impact.</motion.p>
          ) : (
            <p className="text-xl text-gray-700 leading-relaxed font-paragraph">True progress comes through collaboration, not just contribution. Partner with JKBF to leverage collective strengths for meaningful social impact.</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Mobile view */}
        <div className="lg:hidden">
          <motion.div initial="hidden" animate={isHeaderInView ? 'visible' : 'hidden'} variants={fadeInUp} transition={{ duration: 0.5, delay: 0.2 }} className="w-full mb-8">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?w=1200&auto=format&fit=crop&q=80" alt="Partnership" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F4720B]/90 via-[#F4720B]/50 to-transparent">
                <div className="absolute bottom-0 left-0 w-full p-8">
                  <h3 className="text-white text-2xl font-medium font-title mb-3">Partnering for Change</h3>
                  <p className="text-white text-lg font-light font-paragraph leading-tight">&ldquo;His vision emphasized <span className="font-medium">not charity, but creating opportunities</span> for people to become independent contributors to society.&rdquo;</p>
                  <p className="text-white/80 mt-3 italic">— In memory of Late Shri Jaskaran Bothra</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate={isHeaderInView ? 'visible' : 'hidden'} variants={staggerContainer} className="space-y-6 mt-8">
            {partnershipTypes.map((type) => (
              <motion.div key={type.id} variants={fadeInUp} transition={{ duration: 0.4 }} className={`bg-white p-6 rounded-lg shadow-sm border-l-4 ${activePartner === type.id ? 'border-l-[#F4720B] bg-orange-50' : 'border-l-orange-200 hover:border-l-[#F4720B] hover:bg-orange-50/50'} transition-all duration-300 relative overflow-hidden`} onMouseEnter={() => setActivePartner(type.id)} onMouseLeave={() => setActivePartner(null)}>
                <div className="flex items-start">
                  <div className={`mr-5 bg-orange-100 p-3 rounded-lg transition-all duration-300 ${activePartner === type.id ? 'bg-orange-200 shadow-sm' : 'bg-orange-100'}`}><div className="w-8 h-8 text-[#F4720B]">{type.icon}</div></div>
                  <div>
                    <h3 className="text-xl font-title font-light text-gray-800 mb-1">{type.title}</h3>
                    <p className="text-[#F4720B] font-paragraph text-sm mb-3">{type.tagline}</p>
                    <Link href={type.link} className="flex items-center text-[#F4720B] font-medium text-sm hover:text-orange-800 transition-colors group mt-3">Learn more<svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div ref={ctaSectionRef} className="max-w-7xl md:hidden mx-auto px-4 pb-12 sm:px-6 mt-12 lg:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto text-center bg-[#F4720B] text-white p-10 md:p-12 rounded-lg relative overflow-hidden shadow-md"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/leaf-pattern.png')] bg-no-repeat bg-center bg-contain opacity-20"></div>
          </div>
          
          {/* Decorative SVG Elements */}
          <div className="absolute top-4 left-4 text-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L8 8H16L12 2Z" />
              <path d="M12 22L8 16H16L12 22Z" />
              <path d="M2 12L8 8V16L2 12Z" />
              <path d="M22 12L16 8V16L22 12Z" />
            </svg>
          </div>
          
          <div className="absolute bottom-4 right-4 text-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="8" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="12" cy="12" r="1" />
            </svg>
          </div>
          
          <div className="relative z-10 md:hidden">
            <div className="mx-auto mb-4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-title font-light mb-4">Join Our Mission</h3>
            <p className="text-white/90 font-paragraph mb-8 max-w-2xl mx-auto">
             JKBF welcomes forward-thinking collaborators who share our commitment to dignity, inclusion, and sustainable impact. Partner with us not just to support—but to shape—the future.
            </p>
            
              <Link 
                href="/partnership/partnership-form" 
              className="inline-flex items-center bg-white text-[#F4720B] font-paragraph px-8 py-3 rounded-md hover:bg-orange-50 transition-all transform hover:-translate-y-1 hover:shadow-lg duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                Become a Partner
              </Link>
            </div>
          </motion.div>
      </div>

        {/* Desktop view */}
        <div ref={containerRef} className="hidden lg:block relative w-full h-screen overflow-hidden">
          <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
            {/* Left side (sticky) */}
            <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 lg:sticky top-8">
              <div className="relative h-[500px] lg:h-[690px] rounded-xl overflow-hidden shadow-lg">
                <Image src="https://images.unsplash.com/photo-1580893246395-52aead8960dc?w=1200&auto=format&fit=crop&q=80" alt="Partnership" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F4720B]/90 via-[#F4720B]/50 to-transparent">
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                    <h3 className="text-white text-3xl font-medium font-title mb-4">Partnering for Change</h3>
                    <p className="text-white text-xl font-light font-paragraph leading-tight">&ldquo;His vision emphasized <span className="font-medium">not charity, but creating opportunities</span> for people to become independent contributors to society.&rdquo;</p>
                    <p className="text-white/80 mt-4 italic">— In memory of Late Shri Jaskaran Bothra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side (scrollable cards) */}
            <div className="w-full lg:w-1/2 partnership-cards-wrapper relative overflow-hidden">
              <div ref={cardsContainerRef} className="flex flex-col space-y-6 pb-6">
                {partnershipTypes.map((type) => (
                  <div key={type.id} className={`bg-white p-6 md:p-8 rounded-lg shadow-sm border-l-4 mb-6 ${activePartner === type.id ? 'border-l-[#F4720B] bg-orange-50' : 'border-l-orange-200 hover:border-l-[#F4720B] hover:bg-orange-50/50'} transition-all duration-300 relative overflow-hidden`} onMouseEnter={() => setActivePartner(type.id)} onMouseLeave={() => setActivePartner(null)}>
                    <div className="flex items-start">
                      <div className={`mr-5 bg-orange-100 p-3 rounded-lg transition-all duration-300 ${activePartner === type.id ? 'bg-orange-200 shadow-sm' : 'bg-orange-100'}`}><div className="w-8 h-8 text-[#F4720B]">{type.icon}</div></div>
                      <div>
                        <h3 className="text-xl font-title font-light text-gray-800 mb-1">{type.title}</h3>
                        <p className="text-[#F4720B] font-paragraph text-sm mb-3">{type.tagline}</p>
                        <Link href={type.link} className="flex items-center text-[#F4720B] font-medium text-sm hover:text-orange-800 transition-colors group mt-3">Learn more<svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg></Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
