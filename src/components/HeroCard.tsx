import { Button } from "@/components/ui/button";

interface HeroCardProps {
  title: string;
  description: string;
  className?: string;
  logoUrl: string;
}
function HeroCard({ title, description, logoUrl }: HeroCardProps) {
  return (
    <div
      className={`p-5 justify-between bg-[#16181D] flex flex-col rounded-lg hover:cursor-pointer`}
    >
      <div className="hero-card space-y-4">
        <h2 className="text-2xl font-bold text-slate-200">{title}</h2>
        <div className="flex justify-center">
          <img
            src={logoUrl}
            alt="logo"
            className="h-48 w-full object-cover self-center"
          />
        </div>
        <p className="text-base text-start text-slate-300">{description}</p>
      </div>
      <div className="flex gap-2 pt-5">
        <Button size={"sm"} variant={"default"}>
          Learn more
        </Button>
      </div>
    </div>
  );
}

export default HeroCard;
