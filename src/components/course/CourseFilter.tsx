
import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const categories = [
  "Semua Kategori",
  "Pengembangan Web",
  "Bisnis",
  "Desain Grafis",
  "Pemasaran Digital",
  "Pengembangan Pribadi",
  "Fotografi",
  "Musik",
  "Data Science",
  "Mobile Development",
];

const levels = ["Semua Level", "Pemula", "Menengah", "Mahir"];

const ratings = [
  { value: "4.5", label: "4.5 & ke atas" },
  { value: "4.0", label: "4.0 & ke atas" },
  { value: "3.5", label: "3.5 & ke atas" },
  { value: "3.0", label: "3.0 & ke atas" },
];

const CourseFilter = () => {
  const [category, setCategory] = useState("Semua Kategori");
  const [level, setLevel] = useState("Semua Level");
  const [rating, setRating] = useState("4.0");
  const [priceRange, setPriceRange] = useState([0, 2000000]);

  return (
    <div className="space-y-6">
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Filter
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[300px]" align="start">
            <div className="p-4 space-y-4">
              <div>
                <h3 className="font-medium mb-2">Kategori</h3>
                <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
                  {categories.map((cat) => (
                    <DropdownMenuRadioItem key={cat} value={cat}>
                      {cat}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Level</h3>
                <DropdownMenuRadioGroup value={level} onValueChange={setLevel}>
                  {levels.map((lvl) => (
                    <DropdownMenuRadioItem key={lvl} value={lvl}>
                      {lvl}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Rating</h3>
                <DropdownMenuRadioGroup value={rating} onValueChange={setRating}>
                  {ratings.map((rate) => (
                    <DropdownMenuRadioItem key={rate.value} value={rate.value}>
                      {rate.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Harga</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={priceRange}
                    max={2000000}
                    step={50000}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex justify-between mt-2 text-sm">
                    <span>Rp {priceRange[0].toLocaleString()}</span>
                    <span>Rp {priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="hidden md:block space-y-6">
        <Accordion type="multiple" defaultValue={["category", "level", "rating", "price"]}>
          <AccordionItem value="category">
            <AccordionTrigger>Kategori</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat} className="flex items-center">
                    <button
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted text-sm text-left"
                      onClick={() => setCategory(cat)}
                    >
                      <span>{cat}</span>
                      {category === cat && <Check className="h-4 w-4 text-primary" />}
                    </button>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="level">
            <AccordionTrigger>Level</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {levels.map((lvl) => (
                  <div key={lvl} className="flex items-center">
                    <button
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted text-sm text-left"
                      onClick={() => setLevel(lvl)}
                    >
                      <span>{lvl}</span>
                      {level === lvl && <Check className="h-4 w-4 text-primary" />}
                    </button>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="rating">
            <AccordionTrigger>Rating</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {ratings.map((rate) => (
                  <div key={rate.value} className="flex items-center">
                    <button
                      className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted text-sm text-left"
                      onClick={() => setRating(rate.value)}
                    >
                      <span>{rate.label}</span>
                      {rating === rate.value && <Check className="h-4 w-4 text-primary" />}
                    </button>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="price">
            <AccordionTrigger>Harga</AccordionTrigger>
            <AccordionContent>
              <div className="px-2">
                <Slider
                  defaultValue={priceRange}
                  max={2000000}
                  step={50000}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span>Rp {priceRange[0].toLocaleString()}</span>
                  <span>Rp {priceRange[1].toLocaleString()}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <Button className="w-full">Terapkan Filter</Button>
      </div>
    </div>
  );
};

export default CourseFilter;
