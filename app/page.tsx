import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="pt-24 flex items-center justify-center flex-col">
      <div className="max-w-5xl w-full relative border border-zinc-100/15 flex items-center justify-center">
        {/* Background Grid */}
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className={cn(
              index == 0 ? "invisible" : "absolute top-0 left-0",
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
        <div className="absolute inset-0 flex items-center justify-center text-center z-20">
          <div className="max-w-3xl px-6 mb-32">
            <h1 className="text-5xl font-bold text-white mb-6">
              Your complete platform for the web.
            </h1>
            <p className="text-2xl text-zinc-300 mb-6">
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

        <div className="absolute inset-0 flex items-center justify-center before:absolute before:inset-0 dark:before:bg-[radial-gradient(150%_150%_at_50%_140%,transparent_0,transparent_50%,var(--background)_76%)] before:bg-[radial-gradient(150%_150%_at_50%_140%,transparent_0,transparent_50%,#f5f5f5_76%)]">
          <div
            className="w-full h-full grid place-items-center"
            style={{
              background:
                "conic-gradient(from 180deg at 50% 70%, rgba(0, 0, 0, 0) 0deg, rgba(0, 89, 171, 0.8) 72deg, rgba(15, 255, 169, 0.8) 144deg, rgba(255, 206, 32, 0.8) 216deg, rgba(197, 0, 0, 0.8) 288deg, rgba(0, 0, 0, 0) 1turn)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
