/**
 * SkinfluenceHer Landing Page
 * Interactive behaviors and utilities
 */

// Set dynamic year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('sf-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scroll with offset for sticky header
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Don't prevent default for hash-only links (like "#")
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Add scroll-based header styling
  let lastScroll = 0;
  const header = document.querySelector('.lp-nav');
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });

  // Add intersection observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all sections and cards
  const animatedElements = document.querySelectorAll('section, .card');
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Add hover tooltip positioning for buttons
  const buttons = document.querySelectorAll('.btn[data-hover]');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      const tooltip = window.getComputedStyle(btn, '::before');
      // Tooltip is handled via CSS, this is for future enhancements
    });
  });

  // Track CTA clicks (for analytics integration)
  const ctaButtons = document.querySelectorAll('.btn--primary');
  ctaButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const ctaText = btn.textContent.trim();
      console.log('CTA clicked:', ctaText);
      
      // Analytics integration point
      // Example: gtag('event', 'cta_click', { 'cta_name': ctaText });
      // Example: plausible('CTA Click', { props: { name: ctaText } });
    });
  });

  // Mobile menu toggle (for future mobile menu implementation)
  const createMobileMenuIfNeeded = () => {
    if (window.innerWidth < 768) {
      const nav = document.querySelector('.nav-links');
      if (nav && !document.querySelector('.mobile-menu-toggle')) {
        // Mobile menu can be added here if needed
        console.log('Mobile view detected');
      }
    }
  };

  window.addEventListener('resize', createMobileMenuIfNeeded);
  createMobileMenuIfNeeded();

  // Add active state to navigation based on scroll position
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Lazy load optimization (if images are added later)
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // Performance monitoring
  if ('PerformanceObserver' in window) {
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
      }
    });

    try {
      perfObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Silently fail if not supported
    }
  }

  // Add easter egg for engagement
  let clickCount = 0;
  const brandDot = document.querySelector('.brand-dot');
  
  if (brandDot) {
    brandDot.addEventListener('click', () => {
      clickCount++;
      if (clickCount === 5) {
        brandDot.style.animation = 'spin 1s ease-in-out';
        setTimeout(() => {
          brandDot.style.animation = '';
          clickCount = 0;
        }, 1000);
      }
    });
  }
});

// Add spin animation for easter egg
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .nav-links a.active {
    color: var(--color-accent);
  }
  
  .nav-links a.active::after {
    width: 100%;
  }
`;
document.head.appendChild(style);

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    // Export any utilities if needed
  };
}
