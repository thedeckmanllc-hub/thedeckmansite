'use client';

import React, { useState, useEffect } from 'react';

export function BrutalistIndustrial() {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'sanding',
      title: 'DECK SANDING',
      description: 'Professional deck sanding services that restore your weathered wood to its original beauty. We remove years of wear, splinters, and gray oxidation to reveal the stunning grain beneath.',
      features: ['Deep grain restoration', 'Splinter removal', 'Surface preparation', 'Dust-free process'],
      price: 'From $2.50/sq ft'
    },
    {
      id: 'staining',
      title: 'DECK STAINING',
      description: 'Premium staining and sealing that protects your investment for years. UV-resistant formulas that enhance natural wood grain and defend against the elements.',
      features: ['Premium oil-based stains', 'UV protection', 'Water resistance', 'Custom color matching'],
      price: 'From $3.00/sq ft'
    },
    {
      id: 'rebuild',
      title: 'DECK REBUILD',
      description: 'Complete deck reconstruction from foundation to finish. Custom designs that maximize your outdoor living space with premium materials and expert craftsmanship.',
      features: ['Structural assessment', 'Custom design', 'Premium materials', 'Code compliance'],
      price: 'Custom quote'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#1a1512',
      color: '#e8e0d5',
      fontFamily: '"IBM Plex Mono", monospace',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Noise Texture Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        opacity: 0.04,
        pointerEvents: 'none',
        zIndex: 1000
      }} />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: 'clamp(12px, 3vw, 20px) clamp(16px, 5vw, 48px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: scrollY > 50 ? 'rgba(26, 21, 18, 0.95)' : 'transparent',
        backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
        borderBottom: scrollY > 50 ? '1px solid #2d2520' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Logo */}
          <div style={{
            height: 'clamp(40px, 8vw, 50px)',
            width: 'clamp(90px, 15vw, 120px)',
            background: 'linear-gradient(135deg, #c9a87c 0%, #b87333 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(18px, 4vw, 24px)',
            letterSpacing: '2px',
            color: '#1a1512'
          }}>
            TDM
          </div>
        </div>

        <div style={{ display: window.innerWidth < 768 ? 'none' : 'flex', gap: 'clamp(24px, 4vw, 48px)', alignItems: 'center' }} className="hidden md:flex">
          {['Services', 'Projects', 'Process', 'Contact'].map((item, i) => (
            <a key={i} href={`#${item.toLowerCase()}`} className="nav-link" style={{ fontSize: 'clamp(10px, 1.5vw, 11px)' }}>
              {item.toUpperCase()}
            </a>
          ))}
          <button className="brutalist-btn" style={{ padding: 'clamp(10px, 2vw, 12px) clamp(18px, 3vw, 24px)', fontSize: 'clamp(10px, 1.5vw, 12px)' }}>
            GET QUOTE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="brutalist-btn md:hidden" style={{ padding: '10px 20px', fontSize: '11px' }}>
          MENU
        </button>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 'clamp(60px, 10vh, 120px) clamp(16px, 5vw, 48px) clamp(40px, 8vh, 80px)',
        position: 'relative'
      }} className="px-4 sm:px-6 lg:px-12">
        {/* Grid Lines - Hidden on mobile */}
        <div className="grid-line hidden lg:block" style={{ left: 'clamp(16px, 5vw, 48px)', top: 0, bottom: 0, width: '1px' }} />
        <div className="grid-line hidden lg:block" style={{ left: '33%', top: 0, bottom: 0, width: '1px' }} />
        <div className="grid-line hidden lg:block" style={{ left: '66%', top: 0, bottom: 0, width: '1px' }} />
        <div className="grid-line hidden lg:block" style={{ right: 'clamp(16px, 5vw, 48px)', top: 0, bottom: 0, width: '1px' }} />

        {/* Vertical Text - Hidden on mobile */}
        <div className="vertical-text hidden lg:block" style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(8px, 1.2vw, 10px)',
          letterSpacing: '4px',
          color: '#5c4d3d'
        }}>
          PROFESSIONAL DECK SERVICES — USA
        </div>

        <div style={{ maxWidth: '1400px', width: '100%', marginTop: 'clamp(20px, 5vh, 60px)', textAlign: 'center' }}>
          <p className="float-up stagger-1" style={{
            fontSize: 'clamp(10px, 2vw, 13px)',
            letterSpacing: 'clamp(2px, 1vw, 5px)',
            color: '#d4a574',
            marginBottom: 'clamp(20px, 4vh, 32px)',
            fontWeight: 600
          }}>
            SANDING • STAINING • RECONSTRUCTION
          </p>

          <h1 className="float-up stagger-2" style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(48px, 12vw, 180px)',
            lineHeight: '0.9',
            marginBottom: 'clamp(28px, 6vh, 56px)',
            color: '#f5ede3',
            letterSpacing: '2px'
          }}>
            CRAFTING<br />
            <span style={{ color: '#d4a574' }}>OUTDOOR</span><br />
            SPACES
          </h1>

          <p className="float-up stagger-3" style={{
            fontSize: 'clamp(14px, 2.5vw, 17px)',
            lineHeight: '1.7',
            color: '#a89a8a',
            maxWidth: '700px',
            margin: '0 auto clamp(32px, 6vh, 56px)',
            fontWeight: 400,
            padding: '0 16px'
          }}>
            Expert deck restoration and construction services. From precision sanding
            to complete rebuilds, we transform weathered wood into stunning outdoor
            living spaces that stand the test of time.
          </p>

          <div className="float-up stagger-4" style={{ display: 'flex', gap: 'clamp(12px, 3vw, 24px)', justifyContent: 'center', flexWrap: 'wrap', padding: '0 16px' }}>
            <button className="brutalist-btn" style={{ fontSize: 'clamp(11px, 2vw, 13px)', padding: 'clamp(14px, 2.5vh, 18px) clamp(24px, 4vw, 40px)' }}>VIEW PROJECTS</button>
            <button className="brutalist-btn" style={{
              borderColor: '#6b5c4a',
              color: '#a89a8a',
              fontSize: 'clamp(11px, 2vw, 13px)',
              padding: 'clamp(14px, 2.5vh, 18px) clamp(24px, 4vw, 40px)'
            }}>
              OUR PROCESS
            </button>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on mobile */}
        <div className="hidden md:flex" style={{
          position: 'absolute',
          bottom: 'clamp(24px, 5vh, 48px)',
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ fontSize: 'clamp(9px, 1.2vw, 10px)', letterSpacing: '3px', color: '#3d332a' }}>SCROLL</span>
          <div style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(to bottom, #b87333, transparent)'
          }} />
        </div>
      </section>

      {/* Marquee Banner */}
      <div style={{
        borderTop: '1px solid #2d2520',
        borderBottom: '1px solid #2d2520',
        padding: '20px 0',
        overflow: 'hidden',
        background: '#211c18'
      }}>
        <div className="marquee" style={{
          display: 'flex',
          gap: '80px',
          whiteSpace: 'nowrap'
        }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '80px' }}>
              {['SANDING', 'STAINING', 'SEALING', 'REPAIR', 'REBUILD', 'DESIGN'].map((text, j) => (
                <span key={j} style={{
                  fontFamily: '"Bebas Neue", sans-serif',
                  fontSize: '24px',
                  letterSpacing: '4px',
                  color: j % 2 === 0 ? '#c9a87c' : '#b87333'
                }}>
                  {text} ◆
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" style={{
        padding: '120px 48px',
        position: 'relative',
        background: '#1e1915'
      }} className="wood-grain-bg">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '80px',
          gap: '60px'
        }}>
          <div>
            <p style={{
              fontSize: '13px',
              letterSpacing: '4px',
              color: '#d4a574',
              marginBottom: '20px',
              fontWeight: 600
            }}>
              [01] SERVICES
            </p>
            <h2 style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: 'clamp(50px, 7vw, 90px)',
              lineHeight: '1',
              color: '#f5ede3'
            }}>
              WHAT WE DO
            </h2>
          </div>
          <p style={{
            maxWidth: '480px',
            fontSize: '16px',
            lineHeight: '1.9',
            color: '#9d8e7d',
            textAlign: 'right',
            marginTop: '20px'
          }}>
            From minor repairs to complete reconstructions, The Deck Man delivers
            exceptional craftsmanship on every project.
          </p>
        </div>

        {/* Service Tabs */}
        <div style={{
          display: 'flex',
          gap: '48px',
          borderBottom: '1px solid #2d2520',
          marginBottom: '60px'
        }}>
          {services.map((service, i) => (
            <button
              key={service.id}
              className={`service-tab ${activeService === i ? 'active' : ''}`}
              onClick={() => setActiveService(i)}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start'
        }}>
          <div>
            <span style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '120px',
              color: '#252019',
              lineHeight: '1'
            }}>
              0{activeService + 1}
            </span>
            <h3 style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '56px',
              marginTop: '-40px',
              marginBottom: '28px',
              color: '#d4a574',
              letterSpacing: '1px'
            }}>
              {services[activeService].title}
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.9',
              color: '#9d8e7d',
              marginBottom: '40px',
              fontWeight: 400
            }}>
              {services[activeService].description}
            </p>
            <div style={{ marginBottom: '40px' }}>
              {services[activeService].features.map((feature, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px 0',
                  borderBottom: '1px solid #2d2520'
                }}>
                  <span style={{ color: '#d4a574', fontSize: '12px', fontWeight: 700 }}>◆</span>
                  <span style={{
                    fontSize: '14px',
                    letterSpacing: '0.5px',
                    color: '#b3a394',
                    fontWeight: 500
                  }}>{feature}</span>
                </div>
              ))}
            </div>
            <p style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '28px',
              color: '#d4a574',
              letterSpacing: '1px'
            }}>
              {services[activeService].price}
            </p>
          </div>

          <div style={{
            aspectRatio: '4/3',
            background: 'linear-gradient(135deg, #2d2520 0%, #1a1512 100%)',
            border: '1px solid #3d332a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              fontSize: '10px',
              letterSpacing: '2px',
              color: '#4d3d2d'
            }}>
              SERVICE IMAGE
            </div>
            {/* Placeholder Pattern */}
            <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.05 }}>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#b87333" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <span style={{
              fontFamily: '"Bebas Neue", sans-serif',
              fontSize: '140px',
              color: '#2d2520'
            }}>
              {services[activeService].id.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '80px 48px',
        borderTop: '1px solid #2d2520',
        borderBottom: '1px solid #2d2520',
        background: '#1a1512'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '48px'
        }}>
          {[
            { number: '15+', label: 'YEARS EXPERIENCE' },
            { number: '500+', label: 'PROJECTS COMPLETED' },
            { number: '100%', label: 'SATISFACTION RATE' },
            { number: '24HR', label: 'RESPONSE TIME' }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <span style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '72px',
                color: i % 2 === 0 ? '#d4a574' : '#c9a87c',
                letterSpacing: '2px'
              }}>
                {stat.number}
              </span>
              <p style={{
                fontSize: '11px',
                letterSpacing: '3px',
                color: '#7a6b5a',
                marginTop: '12px',
                fontWeight: 600
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: '120px 48px',
        background: '#211c18'
      }}>
        <div style={{ marginBottom: '80px' }}>
          <p style={{
            fontSize: '13px',
            letterSpacing: '4px',
            color: '#d4a574',
            marginBottom: '20px',
            fontWeight: 600
          }}>
            [02] PROCESS
          </p>
          <h2 style={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: 'clamp(50px, 7vw, 90px)',
            lineHeight: '1',
            color: '#f5ede3'
          }}>
            HOW WE WORK
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '32px'
        }}>
          {[
            { num: '01', title: 'ASSESS', desc: 'Free on-site evaluation of your deck condition and your vision for the space.' },
            { num: '02', title: 'PLAN', desc: 'Detailed proposal with transparent pricing and timeline for your project.' },
            { num: '03', title: 'EXECUTE', desc: 'Expert craftsmanship with minimal disruption to your daily routine.' },
            { num: '04', title: 'DELIVER', desc: 'Final walkthrough, care instructions, and warranty documentation.' }
          ].map((step, i) => (
            <div key={i} style={{
              padding: '32px',
              background: '#1a1512',
              border: '1px solid #2d2520',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}>
              <span style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '56px',
                color: '#d4a574',
                display: 'block',
                marginBottom: '20px'
              }}>{step.num}</span>
              <h3 style={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: '28px',
                marginBottom: '16px',
                color: '#d4a574',
                letterSpacing: '1px'
              }}>{step.title}</h3>
              <p style={{
                fontSize: '15px',
                lineHeight: '1.8',
                color: '#9d8e7d',
                fontWeight: 400
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '160px 48px',
        textAlign: 'center',
        background: '#1a1512'
      }}>
        <p style={{
          fontSize: '13px',
          letterSpacing: '5px',
          color: '#d4a574',
          marginBottom: '32px',
          fontWeight: 600
        }}>
          READY TO START?
        </p>
        <h2 style={{
          fontFamily: '"Bebas Neue", sans-serif',
          fontSize: 'clamp(50px, 9vw, 110px)',
          marginBottom: '56px',
          color: '#f5ede3',
          lineHeight: '1.1',
          letterSpacing: '2px'
        }}>
          LET&apos;S BUILD YOUR<br />
          <span style={{ color: '#d4a574' }}>PERFECT DECK</span>
        </h2>
        <button className="brutalist-btn" style={{
          fontSize: '14px',
          padding: '20px 48px',
          letterSpacing: '3px'
        }}>
          GET FREE ESTIMATE
        </button>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '48px',
        borderTop: '1px solid #2d2520',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#171310'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            height: '36px',
            width: '86px',
            background: 'linear-gradient(135deg, #c9a87c 0%, #b87333 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '18px',
            letterSpacing: '2px',
            color: '#1a1512',
            opacity: 0.8
          }}>
            TDM
          </div>
          <span style={{ fontSize: '10px', letterSpacing: '2px', color: '#5c4d3d' }}>
            © 2024 THE DECK MAN. ALL RIGHTS RESERVED.
          </span>
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          {['Privacy', 'Terms', 'Sitemap'].map((item, i) => (
            <a key={i} href="#" style={{
              color: '#5c4d3d',
              textDecoration: 'none',
              fontSize: '10px',
              letterSpacing: '2px'
            }}>
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
