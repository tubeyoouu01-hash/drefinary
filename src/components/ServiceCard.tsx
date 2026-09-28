import Image from "next/image";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { seedImage } from "@/lib/services";

export function ServiceCard({ id, icon, seed, name, description ,image}: { id: string; icon: string; seed: string; name: string; description: string,image?:string }) {
  const Icon = (Icons as unknown as Record<string, LucideIcon>)[icon] ?? Icons.Factory;
  return (
    <div id={id} className="group overflow-hidden rounded-sm border border-line bg-white scroll-mt-32 hover:border-blue transition-colors">
      <div className="relative h-52 w-full overflow-hidden">
        <Image src={image||seedImage(seed, 900, 600)} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/70 to-transparent" />
        <span className="absolute bottom-3 start-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue text-white">
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
      </div>
      <div className="p-6 border-t-2 border-red/0 group-hover:border-red transition-colors">
        <h3 className="font-display text-2xl font-bold uppercase text-blue-deep mb-2">{name}</h3>
        <p className="text-sm text-slate leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
