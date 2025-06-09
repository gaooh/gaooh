import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "profile", label: "Profile" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const linkClasses = "block px-4 py-2 hover:text-blue-500";

  return (
    <nav className="fixed w-full bg-white shadow z-10">
      <div className="max-w-4xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">My Portfolio</div>
        <div className="md:hidden">
          <button onClick={toggle} className="p-2">
            <span className="sr-only">Open Menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={linkClasses}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={linkClasses}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
