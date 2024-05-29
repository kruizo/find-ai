import { useEffect, useState } from "react";
import data from "./assets/AI.json";
import HeroCard from "./components/HeroCard";

export interface Item {
  title: string;
  description: string;
  logoUrl: string;
}

export interface Data {
  [key: string]: Item;
}

function Cards() {
  const [items, setItems] = useState<(Item & { id: string })[]>([]);

  useEffect(() => {
    // Type assertion to ensure data is of type Data
    const jsonData: Data = data;
    const itemsArray = Object.entries(jsonData).map(([key, value]) => ({
      id: key,
      ...value,
    }));
    setItems(itemsArray);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
      {items.map((item) => (
        <HeroCard
          key={item.id}
          logoUrl={item.logoUrl}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Cards;
