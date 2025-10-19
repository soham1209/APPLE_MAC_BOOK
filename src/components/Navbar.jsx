import React, { useRef } from "react";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navbarRef = useRef(null);

  useGSAP(() => {
    const navbar = navbarRef.current;
    
    if (!navbar) return;

    // Initial state - solid background
    gsap.set(navbar, {
      backgroundColor: "rgba(0, 0, 0, 1)",
      backdropFilter: "blur(0px)",
    });

    // Scroll animation - transition to glass effect
    gsap.to(navbar, {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
      backdropFilter: "blur(20px)",
      ease: "power2.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "200px top",
        scrub: 1,
      }
    });
  }, { scope: navbarRef });

  return (
    <header ref={navbarRef} className="navbar p-4">
      <nav>
        <img src="/logo.svg" alt="Apple logo" />
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
            <button>
                <img src="/search.svg" alt="Search" />
            </button>
            <button>
                <img src="/cart.svg" alt="Cart" />
            </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
