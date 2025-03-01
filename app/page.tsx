"use client";

import { Button } from "../components/ui/button";
import { cn } from "../lib/utils";


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
      <section className="px-6 py-16 text-white bg-black">
        <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold">
        Develop with your favorite tools <span className="text-blue-400">&gt;</span>
      </h2>



          <p className="mt-4 text-lg">
            Launch globally, instantly 🌐 Keep pushing{" "}
            <span className="text-blue-400">↗️</span>
          </p>
        </div>
      </section>
      <section>
      <div className="flex flex-col gap-8 p-10 text-white bg-black md:flex-row">
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

    </div>
  );
}
