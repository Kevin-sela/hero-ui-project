'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="px-6 py-10 text-white bg-black">
      <div className="grid max-w-6xl grid-cols-2 gap-6 mx-auto md:grid-cols-4">
        {/* Products */}
        <div>
          <h4 className="mb-3 font-bold">Products</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['AI', 'Enterprise', 'Fluid Compute', 'Next.js', 'Observability', 'Previews', 'Rendering', 'Security', 'Turbo', 'v0'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Resources */}
        <div>
          <h4 className="mb-3 font-bold">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Community', 'Docs', 'Guides', 'Help', 'Integrations', 'Pricing', 'Resources', 'Solution Partners', 'Templates'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-3 font-bold">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['About', 'Blog', 'Careers', 'Changelog', 'Contact Us', 'Customers', 'Partners', 'Privacy Policy', 'Legal'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-3 font-bold">Social</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2"><FaGithub /> GitHub</li>
            <li className="flex items-center gap-2"><FaLinkedin /> LinkedIn</li>
            <li className="flex items-center gap-2"><FaTwitter /> Twitter</li>
            <li className="flex items-center gap-2"><FaYoutube /> YouTube</li>
          </ul>
        </div>
      </div>

      {/* Status Indicator */}
      <div className="flex items-center gap-2 mt-6 text-sm text-blue-400">
        <span className="w-2 h-2 bg-blue-400 rounded-full"></span> All systems normal
      </div>
    </footer>
  );
}
