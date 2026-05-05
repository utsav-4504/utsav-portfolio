// ===== ADVANCED GSAP ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, TextPlugin);

  // ===== LOADING SCREEN =====
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    gsap.to(loadingScreen, {
      opacity: 0,
      duration: 0.5,
      delay: 2,
      onComplete: () => {
        loadingScreen.style.display = 'none';
        initAnimations();
      }
    });
  } else {
    initAnimations();
  }

  function initAnimations() {
    // ===== HERO SECTION ANIMATIONS =====
    const heroTl = gsap.timeline();

    // Navbar Animation
    heroTl
      .from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .from('.nav-brand', {
        x: -50,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.nav-link', {
        y: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.3');

    // Hero Content Animation
    heroTl
      .from('.greeting-text', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      .from('.title-word', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.hero-actions', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.hero-stats', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3');

    // Hero Visual Animation
    heroTl
      .from('.profile-bg', {
        scale: 0,
        rotation: -180,
        duration: 1,
        ease: 'back.out(1.7)'
      }, '-=1')
      .from('.profile-image', {
        scale: 0,
        rotation: 180,
        duration: 1,
        ease: 'back.out(1.7)'
      }, '-=0.8')
      .from('.floating-element', {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.5');

    // Scroll Indicator
    gsap.from('.scroll-indicator', {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 2,
      ease: 'power2.out'
    });

    // ===== MORPHING TEXT ANIMATION =====
    const morphTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    morphTl
      .to('.title-word:nth-child(2)', {
        duration: 0.5,
        text: 'Creative',
        ease: 'power2.inOut'
      })
      .to('.title-word:nth-child(2)', {
        duration: 0.5,
        text: 'Passionate',
        ease: 'power2.inOut'
      }, '+=2')
      .to('.title-word:nth-child(2)', {
        duration: 0.5,
        text: 'Innovative',
        ease: 'power2.inOut'
      }, '+=2')
      .to('.title-word:nth-child(2)', {
        duration: 0.5,
        text: 'Developer',
        ease: 'power2.inOut'
      }, '+=2');

    // ===== FLOATING ELEMENTS =====
    gsap.to('.floating-element', {
      y: 'random(-20, 20)',
      x: 'random(-20, 20)',
      rotation: 'random(-10, 10)',
      duration: 'random(3, 6)',
      ease: 'power2.inOut',
      stagger: 0.2,
      repeat: -1,
      yoyo: true
    });

    // ===== BACKGROUND SHAPES =====
    gsap.to('.bg-shape', {
      rotation: 360,
      duration: 'random(20, 40)',
      ease: 'none',
      stagger: 2,
      repeat: -1
    });

    // ===== SCROLL PROGRESS =====
    gsap.to('.scroll-progress-bar', {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });

    // ===== ABOUT SECTION =====
    const aboutTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    aboutTl
      .from('.about-intro h3', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      })
      .from('.about-description', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.detail-item', {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.experience-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }, '-=0.5');

    // About Visual Animation
    gsap.from('.about-image-container', {
      scrollTrigger: {
        trigger: '.about-visual',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)'
    });

    gsap.from('.about-stats', {
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    // ===== SKILLS SECTION =====
    gsap.from('.section-badge', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.section-title', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.skill-category', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Animate skill bars
    gsap.from('.skill-progress', {
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 60%',
        toggleActions: 'play none none reverse'
      },
      width: 0,
      duration: 1.5,
      stagger: 0.1,
      ease: 'power2.out'
    });

    // Icon animations
    gsap.from('.icon-item', {
      scrollTrigger: {
        trigger: '.skill-icons',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      scale: 0,
      rotation: -180,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.7)'
    });

    // ===== SERVICES SECTION =====
    const servicesTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    servicesTl
      .from('.services-section .section-badge', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      .from('.services-section .section-title', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.service-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      }, '-=0.4');

    // Service card hover animations
    document.querySelectorAll('.service-card').forEach((card, index) => {
      const icon = card.querySelector('.service-icon');
      const content = card.querySelector('.service-content');

      card.addEventListener('mouseenter', () => {
        gsap.to(icon, {
          scale: 1.1,
          rotation: 5,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(content, {
          y: -5,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(content, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // ===== PROJECTS SECTION =====
    gsap.from('.projects-section .section-badge', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.projects-section .section-title', {
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.filter-btn', {
      scrollTrigger: {
        trigger: '.filter-buttons',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power2.out'
    });

    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    // Project card hover animations
    document.querySelectorAll('.project-card').forEach(card => {
      const image = card.querySelector('.project-image img');
      const overlay = card.querySelector('.project-overlay');
      const content = card.querySelector('.project-content');

      card.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.6,
          ease: 'power2.out'
        });
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(content, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.6,
          ease: 'power2.out'
        });
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(content, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // ===== CONTACT SECTION =====
    const contactTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
      }
    });

    contactTl
      .from('.contact-info h3', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      })
      .from('.contact-intro p', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.contact-item', {
        x: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.3')
      .from('.social-icons', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.contact-form', {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      }, '-=0.5');

    // ===== FOOTER =====
    gsap.from('.footer-content', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });

    gsap.from('.footer-bottom', {
      scrollTrigger: {
        trigger: '.footer-bottom',
        start: 'top 90%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });

    // ===== FLOATING BUTTONS =====
    gsap.from('.whatsapp-float', {
      x: 100,
      opacity: 0,
      duration: 0.8,
      delay: 3,
      ease: 'power2.out'
    });

    // Pulse animation for WhatsApp button
    gsap.to('.whatsapp-float', {
      scale: 1.05,
      duration: 1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      delay: 4
    });

    // ===== TESTIMONIALS SECTION =====
    gsap.from('.testimonials-section .section-badge', {
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.testimonials-section .section-title', {
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: '.testimonials-grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // ===== EDUCATION SECTION =====
    gsap.from('.education-section .section-badge', {
      scrollTrigger: {
        trigger: '.education-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });

    gsap.from('.education-section .section-title', {
      scrollTrigger: {
        trigger: '.education-section',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      ease: 'power2.out'
    });

    gsap.from('.timeline-item', {
      scrollTrigger: {
        trigger: '.education-timeline',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: 'power2.out'
    });

    // ===== BACK TO TOP BUTTON =====
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', () => {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: 0,
        ease: 'power2.inOut'
      });
    });

    // ===== NAVIGATION ACTIVE STATE =====
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    function updateActiveNav() {
      const scrollY = window.scrollY;

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // ===== SMOOTH SCROLLING =====
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetSection,
            offsetY: 80
          },
          ease: 'power2.inOut'
        });
      });
    });

    // ===== PARTICLE SYSTEM =====
    function createParticles() {
      const particlesContainer = document.querySelector('.particles-container');
      if (!particlesContainer) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 4 + 2}px;
          height: ${Math.random() * 4 + 2}px;
          background: ${Math.random() > 0.5 ? 'var(--primary-color)' : 'var(--accent-color)'};
          border-radius: 50%;
          opacity: ${Math.random() * 0.5 + 0.1};
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;

        particlesContainer.appendChild(particle);

        gsap.to(particle, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          opacity: 0,
          duration: Math.random() * 10 + 5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
          delay: Math.random() * 5
        });
      }
    }

    createParticles();

    // ===== MOUSE FOLLOWING CURSOR =====
    const cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: var(--gradient-primary);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
      cursor.style.opacity = '0';
    });

    function updateCursor() {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.left = `${cursorX - 10}px`;
      cursor.style.top = `${cursorY - 10}px`;

      requestAnimationFrame(updateCursor);
    }

    updateCursor();

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe elements for additional animations
    document.querySelectorAll('.service-card, .project-card, .skill-category').forEach(el => {
      observer.observe(el);
    });

    // ===== FORM ANIMATION =====
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

    formInputs.forEach(input => {
      input.addEventListener('focus', () => {
        gsap.to(input.parentElement.querySelector('.form-line'), {
          width: '100%',
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      input.addEventListener('blur', () => {
        if (!input.value) {
          gsap.to(input.parentElement.querySelector('.form-line'), {
            width: '0%',
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      });
    });

    // ===== MAGNETIC BUTTONS =====
    document.querySelectorAll('.btn, .social-link, .project-link').forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });

    // ===== STAGGER ANIMATIONS =====
    // gsap.set('.stagger-item', { opacity: 0, y: 50 });

    ScrollTrigger.batch('.stagger-item', {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      }),
      start: 'top 80%'
    });

    // ===== TEXT REVEAL ANIMATION =====
    document.querySelectorAll('.reveal-text').forEach(text => {
      gsap.from(text, {
        scrollTrigger: {
          trigger: text,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        duration: 1,
        text: '',
        ease: 'power2.out'
      });
    });

    // ===== RESPONSIVE ANIMATIONS =====
    function handleResize() {
      ScrollTrigger.refresh();
    }

    window.addEventListener('resize', handleResize);

    // ===== PERFORMANCE OPTIMIZATION =====
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveNav();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
  }
});

window.addEventListener('load', () => {
  initAnimations();
});
