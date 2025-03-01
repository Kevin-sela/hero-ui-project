"use client";


import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "../components/ui/button";
//import Footer from "../app/components/Footer"; // Ensure the Footer component exists or comment this line out if not needed
import { cn } from "../lib/utils";

const data = [
  { name: "Jan", views: 1200, clicks: 800 },
  { name: "Feb", views: 1800, clicks: 1200 },
  { name: "Mar", views: 2200, clicks: 1500 },
  { name: "Apr", views: 3000, clicks: 1900 },
  { name: "May", views: 4000, clicks: 2500 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && Array.isArray(payload) && payload.length) {

    return (
      <div className="p-3 text-white bg-black rounded-lg shadow-lg">
        <p>Views: {payload[0].value} <span className="text-blue-400">+{Math.floor(Math.random() * 50)}%</span></p>

      </div>
    );
  }
  return null;
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-24">
      <div className="relative flex items-center justify-center w-full max-w-5xl border border-zinc-100/15">
        {/* Background Grid */}
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              index === 0 ? "invisible" : "absolute top-0 left-0",
              "grid grid-cols-12 w-full z-10"
            )}
          >
            {Array.from({ length: 12 * 8 }).map((_, itemIndex) => {
              const row = Math.floor(itemIndex / 12) + 1;
              const col = (itemIndex % 12) + 1;
              const shouldRemoveBorder =
                (row >= 2 && row <= 4 && col >= 2 && col <= 11) ||
                (row === 5 && col >= 2 && col <= 11);
              return (
                <div
                  key={itemIndex}
                  className={cn(
                    "aspect-square border-zinc-100/15 border-r border-b border-l border-t",
                    shouldRemoveBorder && "border-none"
                  )}
                />
              );
            })}
          </div>
        ))}

        {/* Hero Section */}
        <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
          <div className="max-w-3xl px-6 mb-32">
            <h1 className="mb-6 text-5xl font-bold text-white">
              Your complete platform for the web.
            </h1>
            <p className="mb-6 text-2xl text-zinc-300">
              Vercel provides the developer tools and cloud infrastructure to
              build, scale, and secure a faster, more personalized web.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="default" size="lg" className="rounded-full">
                Get Started
              </Button>
              <Button variant="secondary" size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Background Radial Gradient */}
        <div className="absolute inset-0 flex items-center justify-center before:absolute before:inset-0 dark:before:bg-[radial-gradient(150%_150%_at_50%_140%,transparent_0,transparent_50%,var(--background)_76%)] before:bg-[radial-gradient(150%_150%_at_50%_140%,transparent_0,transparent_50%,#f5f5f5_76%)]">
          <div
            className="grid w-full h-full place-items-center"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 70%, rgba(0, 0, 0, 0) 0deg, rgba(0, 89, 171, 0.8) 72deg, rgba(15, 255, 169, 0.8) 144deg, rgba(255, 206, 32, 0.8) 216deg, rgba(197, 0, 0, 0.8) 288deg, rgba(0, 0, 0, 0) 1turn)",
            }}
          />
        </div>
      </div>

      {/* Development Section */}
      <section className="flex flex-col w-full px-6 py-16 text-white bg-black md:flex-row">
        {/* Content of the section */}
     
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Develop with your favorite tools <span className="text-blue-400">&gt;</span>

            <span className="text-blue-400">&gt;</span>
          </h2>



          <p className="mt-4 text-lg">
            Launch globally, instantly 🌐 Keep pushing{" "}
            <span className="text-blue-400">↗️</span>
          </p>
        </div>
        </section>
      <section>
        <div className="flex flex-col w-full gap-8 p-10 text-white bg-black md:flex-row">
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="text-sm text-gray-400">&gt;_ Git-connected Deploys</h3>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              <span className="text-white">From localhost to https, in seconds.</span>
            </h2>
            <p className="mt-2 text-gray-400">Deploy from Git or your CLI.</p>
            <div className="p-4 mt-4 font-mono text-sm bg-gray-900 rounded-md">
              <p>▲ ~ vercel-site/ git push</p>
              <p>Enumerating objects: 1, done.</p>
              <p>Counting objects: 100% (1/1), done.</p>
              <p>Writing objects: 100% (1/1), 72 bytes, done.</p>
              <p>Total 1 (delta 0), reused 0 (delta 0).</p>
              <p>To github.com:vercel/vercel-site.git</p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            <h3 className="text-sm text-gray-400">💬 Collaborative pre-production</h3>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              <span className="text-white">Every deploy is remarkable.</span>
            </h2>
            <p className="mt-2 text-gray-400">Chat with your team on real, production-grade UI, not just designs.</p>

            <div className="mt-4 space-y-3">
              <div className="p-3 text-sm bg-gray-800 rounded-md">Swapped out the <span className="p-1 bg-gray-700 rounded">button</span> for some variants we needed.</div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs bg-blue-600 rounded-full">Pranathi</span>
                <div className="p-3 text-sm bg-gray-800 rounded-md">How about this instead?</div>
              </div>
              <div className="p-3 text-sm bg-gray-800 rounded-md">I like it. Does this work with the brand tweaks <span className="text-blue-400">@mamuso</span>?</div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 text-xs bg-red-600 rounded-full">Rauno</span>
                <div className="p-3 text-sm bg-gray-800 rounded-md">This looks great! ⬆️</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Analytics Section */}

      {/* Deploy Section */}
      <section className="flex flex-col w-full bg-black ">
        <div className='max-w-6xl mx-auto'>
        <Card className="flex flex-col w-full p-6 text-white bg-black">
          <h3 className="text-sm text-gray-400"></h3>
          <h2 className="text-2xl font-bold">Privacy-friendly, lightweight Analytics.</h2>
          <p className="text-gray-400">Upgrade your post-launch workflow with actionable, real-time insights.</p>

          <CardContent className="mt-4">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Line type="monotone" dataKey="views" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="clicks" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        </div>
      </section>
<section className="flex flex-col w-full max-w-5xl p-8 text-white bg-black ">

        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            <span className="text-white">Ready to deploy?</span> Start building with a free account.
          </h2>
          <p className="mt-2 text-gray-400">
            Speak to an expert for your <span className="text-blue-400">Pro</span> or <span className="text-purple-400">Enterprise</span> needs.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-6 md:flex-row">
          <Button className="px-6 py-2 text-black bg-white rounded-lg">Start Deploying</Button>
          <Button className="px-6 py-2 text-white bg-gray-800 rounded-lg">Talk to an Expert</Button>
        </div>

        <div className="flex flex-col items-start justify-between pt-6 mt-8 border-t border-gray-700 md:flex-row">
          <div>
            <h3 className="font-semibold text-white">Explore Vercel Enterprise</h3>
            <p className="text-gray-400">with an interactive product tour, trial, or a personalized demo.</p>
          </div>
          <Button className="px-6 py-2 mt-4 text-white bg-gray-800 rounded-lg md:mt-0">Explore Enterprise</Button>

        </div>
      </section>
  
<footer className="w-full px-6 py-10 text-white bg-black ">
      <div className="grid max-w-6xl grid-cols-2 gap-10 mx-auto md:grid-cols-4">
        {/* Products */}
        <div className="w-full">
          <h4 className="mb-4 font-bold">Products</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['AI', 'Enterprise', 'Fluid Compute', 'Next.js', 'Observability', 'Previews', 'Rendering', 'Security', 'Turbo', 'v0'].map((item) => (
              <li key={item} className="block">{item}</li>
            ))}
          </ul>
        </div>
        
        {/* Resources */}
        <div className="w-full">
          <h4 className="mb-4 font-bold">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Community', 'Docs', 'Guides', 'Help', 'Integrations', 'Pricing', 'Resources', 'Solution Partners', 'Templates'].map((item) => (
              <li key={item} className="block">{item}</li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="w-full">
          <h4 className="mb-4 font-bold">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            {['About', 'Blog', 'Careers', 'Changelog', 'Contact Us', 'Customers', 'Partners', 'Privacy Policy', 'Legal'].map((item) => (
              <li key={item} className="block">{item}</li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div className="w-full">
          <h4 className="mb-4 font-bold">Social</h4>
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
          </div>
      
  );
}
