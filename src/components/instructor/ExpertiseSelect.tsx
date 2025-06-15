
import React from 'react';
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type ExpertiseOption = {
  id: string;
  label: string;
};

const expertiseOptions: ExpertiseOption[] = [
  // Sekolah Dasar
  { id: 'sd-math', label: 'Matematika SD' },
  { id: 'sd-science', label: 'IPA SD' },
  { id: 'sd-indonesian', label: 'Bahasa Indonesia SD' },
  { id: 'sd-english', label: 'Bahasa Inggris SD' },
  
  // SMP
  { id: 'smp-math', label: 'Matematika SMP' },
  { id: 'smp-physics', label: 'IPA Fisika SMP' },
  { id: 'smp-biology', label: 'IPA Biologi SMP' },
  { id: 'smp-indonesian', label: 'Bahasa Indonesia SMP' },
  { id: 'smp-english', label: 'Bahasa Inggris SMP' },
  
  // SMA IPA
  { id: 'sma-math-ipa', label: 'Matematika SMA IPA' },
  { id: 'sma-physics', label: 'Fisika SMA' },
  { id: 'sma-chemistry', label: 'Kimia SMA' },
  { id: 'sma-biology', label: 'Biologi SMA' },
  
  // SMA IPS
  { id: 'sma-math-ips', label: 'Matematika SMA IPS' },
  { id: 'sma-geography', label: 'Geografi SMA' },
  { id: 'sma-history', label: 'Sejarah SMA' },
  { id: 'sma-economics', label: 'Ekonomi SMA' },
  { id: 'sma-sociology', label: 'Sosiologi SMA' },
  
  // Bahasa
  { id: 'sma-indonesian', label: 'Bahasa Indonesia SMA' },
  { id: 'sma-english', label: 'Bahasa Inggris SMA' },
  
  // Persiapan Ujian
  { id: 'snbt-utbk', label: 'SNBT-UTBK' },
  { id: 'ujian-mandiri', label: 'Ujian Mandiri PTN' },
  { id: 'tpa-tps', label: 'TPA/TPS' },
  { id: 'literasi-indonesia', label: 'Literasi Bahasa Indonesia' },
  { id: 'literasi-english', label: 'Literasi Bahasa Inggris' },
  { id: 'penalaran-math', label: 'Penalaran Matematika' },
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
      {expertiseOptions.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => toggleExpertise(option.id)}
          className={cn(
            "flex items-center justify-between px-3 py-2 text-sm border rounded-lg transition-colors text-left",
            selected.includes(option.id)
              ? "border-primary bg-primary/10 text-primary"
              : "border-input hover:bg-accent hover:text-accent-foreground"
          )}
        >
          {option.label}
          {selected.includes(option.id) && <Check className="h-4 w-4 ml-2 flex-shrink-0" />}
        </button>
      ))}
    </div>
  );
}
