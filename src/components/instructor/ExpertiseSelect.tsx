
import React from 'react';
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ExpertiseOption = {
  id: string;
  label: string;
};

const expertiseOptions: ExpertiseOption[] = [
  { id: 'math', label: 'Matematika' },
  { id: 'physics', label: 'Fisika' },
  { id: 'chemistry', label: 'Kimia' },
  { id: 'biology', label: 'Biologi' },
  { id: 'english', label: 'Bahasa Inggris' },
  { id: 'indonesian', label: 'Bahasa Indonesia' },
  { id: 'programming', label: 'Pemrograman' },
  { id: 'design', label: 'Desain' },
  { id: 'business', label: 'Bisnis' },
  { id: 'music', label: 'Musik' },
];

interface ExpertiseSelectProps {
  selected: string[];
  onChange: (expertise: string[]) => void;
}

export function ExpertiseSelect({ selected, onChange }: ExpertiseSelectProps) {
  const toggleExpertise = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((item) => item !== id));
    } else if (selected.length < 3) {
      onChange([...selected, id]);
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {expertiseOptions.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => toggleExpertise(option.id)}
          className={cn(
            "flex items-center justify-between px-3 py-2 text-sm border rounded-lg transition-colors",
            selected.includes(option.id)
              ? "border-primary bg-primary/10 text-primary"
              : "border-input hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {option.label}
          {selected.includes(option.id) && <Check className="h-4 w-4 ml-2" />}
        </button>
      ))}
    </div>
  );
}
