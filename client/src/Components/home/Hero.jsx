import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);

  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <div className="min-h-screen pb-20 bg-[#f8f9fc]">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
          <a href="/">
            <img src="logo.svg" alt="logo" className="h11 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
            <a href="#" className="hover:text-[#2d4a8a] transition">
              Home
            </a>
            <a href="#features" className="hover:text-[#2d4a8a] transition">
              Features
            </a>
            <a href="#testimonials" className="hover:text-[#2d4a8a] transition">
              Testimonials
            </a>
            <a href="#cta" className="hover:text-[#2d4a8a] transition">
              Contact
            </a>
          </div>

          <div className="flex gap-2">
            <Link
              to="/app?state=register"
              className={`px-6 py-2 bg-[#2d4a8a] hover:bg-[#1e3a7a] active:scale-95 transition-all rounded-full text-white ${
                user ? "hidden" : "md:block hidden"
              }`}
            >
              Get started
            </Link>
            <Link
              to="/app?state=login"
              className={`px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900 ${
                user ? "hidden" : "md:block hidden"
              }`}
            >
              Login
            </Link>
            <Link
              to="/app"
              className={`px-8 py-2 bg-[#2d4a8a] hover:bg-[#1e3a7a] active:scale-95 transition-all rounded-full text-white ${
                !user ? "hidden" : "md:block hidden"
              }`}
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden active:scale-90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
          <button
            onClick={() => setMenuOpen(false)}
            className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-[#2d4a8a] hover:bg-[#1e3a7a] transition text-white rounded-md flex"
          >
            X
          </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
          <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-blue-300 blur-[100px] opacity-30"></div>

          {/* Headline + CTA */}
          <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px] text-[#0f172a]">
            Build a Resume That Gets <br />
            You <span style={{ color: "#c9982a" }}>Hired</span>
          </h1>

          <p className="max-w-md text-center text-base my-7 text-slate-500">
            Create, edit and download professional resumes with AI-powered
            assistance.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link
              to="/app"
              className="bg-[#2d4a8a] hover:bg-[#1e3a7a] text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-[#4a6aaa] flex items-center transition-colors mt-10 mb-10"
            >
              Get started
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
                className="lucide lucide-arrow-right ml-1 size-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-2.5 mt-6 w-full max-w-2xl">
            <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-2.5 flex-1 min-w-[160px] max-w-[220px]">
              <div className="size-8 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d4a8a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-800">
                  AI-powered writing
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-2.5 flex-1 min-w-[160px] max-w-[220px]">
              <div className="size-8 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d4a8a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-800">
                  Multiple templates
                </p>
                <p className="text-[11px] text-slate-500">
                  Professional designs ready
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-2.5 flex-1 min-w-[160px] max-w-[220px]">
              <div className="size-8 rounded-lg bg-[#eef2ff] flex items-center justify-center shrink-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2d4a8a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-medium text-slate-800">
                  Download as PDF
                </p>
                <p className="text-[11px] text-slate-500">
                  One click, ready to send
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

                    * {
                        font-family: 'Poppins', sans-serif;
                    }
                `}
      </style>
    </>
  );
};

export default Hero;
