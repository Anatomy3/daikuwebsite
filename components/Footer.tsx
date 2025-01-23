"use client";
import Link from 'next/link';

export function Footer() {
  const handleConsultation = () => {
    window.open('https://wa.me/+628117597766', '_blank');
  };

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 order-1 md:order-2 mb-8 md:mb-0">
            <Link 
              href="https://wa.me/+628117597766"
              className="bg-[#25D366] p-2 rounded-full hover:bg-opacity-80 transition-all text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12.043.945C5.415.945 0 6.36 0 12.988c0 2.145.557 4.237 1.617 6.088L0 24l5.045-1.617c1.784.974 3.804 1.49 5.856 1.49h.005c6.628 0 12.043-5.415 12.043-12.043 0-3.215-1.253-6.233-3.525-8.505C17.134 1.153 14.67 0 12.044 0l-.001.945zM8.935 6.813c.192 0 .396 0 .57.01.192.01.449.02.684.533.278.627.873 2.212.951 2.373.079.161.127.35.024.557-.102.207-.151.334-.297.52-.146.186-.307.415-.439.557-.146.161-.298.335-.128.652.17.317.755 1.356 1.622 2.196 1.113 1.085 2.053 1.42 2.348 1.577.296.158.466.127.637-.075.17-.201.723-.849.917-1.14.191-.29.383-.241.643-.145.262.098 1.663.785 1.95.928.287.145.479.214.553.334.073.121.073.703-.172 1.38-.245.677-1.443 1.332-1.98 1.37-.508.037-1.367-.127-2.898-.875-3.38-1.604-5.578-5.575-5.748-5.828-.17-.254-1.399-1.856-1.399-3.54 0-1.684.887-2.51 1.199-2.854.312-.345.682-.432.914-.432z"/>
              </svg>
            </Link>
            <Link 
              href="https://www.instagram.com/daikuinterior?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              className="bg-[#E4405F] p-2 rounded-full hover:bg-opacity-80 transition-all text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            <Link 
              href="https://www.threads.net/@daikuinterior?xmt=AQGzinU5_ySnDqvyuCDhgzxaECeWrfJvua88MAWE-RL6vCE"
              className="bg-black p-2 rounded-full hover:bg-opacity-80 transition-all text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="/icons/threads.svg" 
                alt="Threads" 
                className="w-6 h-6 invert"
              />
            </Link>
            <Link 
              href="https://www.tiktok.com/@d.a.i.ku.pekanbaru?is_from_webapp=1&sender_device=pc"
              className="bg-black p-2 rounded-full hover:bg-opacity-80 transition-all text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </Link>
          </div>

          <div className="text-sm text-gray-600 order-2 md:order-1 mt-6 md:mt-0">
            Copyright © 2024 Daiku. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}