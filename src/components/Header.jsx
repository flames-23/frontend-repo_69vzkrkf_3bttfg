import { Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full px-6 py-6 flex items-center justify-center">
      <div className="flex items-center gap-3 text-rose-600">
        <Heart className="w-7 h-7 fill-rose-500/20" />
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Our 11th Month Treasure Hunt
        </h1>
      </div>
    </header>
  );
}
