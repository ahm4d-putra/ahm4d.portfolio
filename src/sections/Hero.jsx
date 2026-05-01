import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/Button";

// Daftarkan plugin GSAP
gsap.registerPlugin(ScrollTrigger);

// --- Custom Icons ---

const ArrowDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5v14" />
    <path d="m19 12-7 7-7-7" />
  </svg>
);

const GithubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

// --- Helper Function ---

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// --- Main Component ---

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    // 1. Setup GSAP Context (Best Practice untuk React)
    const ctx = gsap.context(() => {
      // Animasi Entrance (Muncul pertama kali)
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-role", {
        y: 30,
        opacity: 0,
        duration: 1,
      })
        .from(
          ".hero-title-line",
          {
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.2,
          },
          "-=0.6",
        )
        .from(
          ".hero-desc",
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8",
        )
        .from(
          ".hero-btn-item",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
          },
          "-=0.6",
        )
        .from(
          ".hero-social-item",
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
          },
          "-=0.4",
        );

      // Animasi Parallax Scroll (Kesan Mewah)
      gsap.to(".hero-title", {
        y: -150,
        opacity: 0.1,
        scale: 0.9,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(".blob-1", {
        x: 100,
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(".blob-2", {
        x: -100,
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, containerRef); // Scope animasi hanya di dalam containerRef

    // Cleanup saat komponen unmount
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="blob-1 absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
        <div className="blob-2 absolute bottom-1/4 right-1/4 w-80 h-80 bg-burgundy/20 rounded-full filter blur-3xl" />

        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#6c756b"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-role inline-block mb-8 px-4 py-2 glass rounded-lg">
            <code className="text-sm text-accent font-mono">
              <span className="text-muted">const</span> role ={" "}
              <span className="text-light">"Full-Stack Engineer"</span>;
            </code>
          </div>

          {/* Penting: overflow-hidden buat animasi reveal */}
          <h1 className="hero-title font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 overflow-hidden">
            <span className="hero-title-line block text-light">
              I build real things
            </span>
            <span className="hero-title-line block gradient-text">
              that actually work
            </span>
          </h1>

          <p className="hero-desc text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            A software engineering student focused on building performant and
            scalable applications, while continuously learning to create
            impactful solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <div className="hero-btn-item">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo("projects")}
              >
                View My Work
                <ArrowDown size={18} />
              </Button>
            </div>

            <div className="hero-btn-item">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo("contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {[
              {
                icon: GithubIcon,
                href: "https://github.com/ahm4d-putra",
                label: "GitHub",
              },
              {
                icon: InstagramIcon,
                href: "https://www.instagram.com/ahmaddd9_?igsh=MTU2dnh6bTJjd2todg==",
                label: "Instagram",
              },
            ].map(({ icon: Icon, href, label }) => (
              <div key={label} className="hero-social-item">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-lg text-muted hover:text-accent hover:border-accent/30 transition-colors inline-block"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
