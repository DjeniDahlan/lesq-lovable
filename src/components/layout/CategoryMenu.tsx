import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { BookOpen, GraduationCap, School, Users, Award, Target } from 'lucide-react';

const categories = [
  {
    label: "Sekolah Dasar (SD)",
    icon: School,
    subcategories: [
      { name: "Matematika SD", link: "/category/matematika-sd", courses: 45 },
      { name: "IPA SD", link: "/category/ipa-sd", courses: 32 },
      { name: "Bahasa Indonesia SD", link: "/category/bahasa-indonesia-sd", courses: 38 },
    ]
  },
  {
    label: "SMP",
    icon: BookOpen,
    subcategories: [
      { name: "Matematika SMP", link: "/category/matematika-smp", courses: 52 },
      { name: "IPA SMP", link: "/category/ipa-smp", courses: 41 },
      { name: "Bahasa Indonesia SMP", link: "/category/bahasa-indonesia-smp", courses: 34 },
      { name: "Bahasa Inggris SMP", link: "/category/bahasa-inggris-smp", courses: 29 },
    ]
  },
  {
    label: "SMA",
    icon: GraduationCap,
    subcategories: [
      { name: "SMA Umum", link: "/category/sma-umum", courses: 67 },
      { name: "SMA IPA", link: "/category/sma-ipa", courses: 89 },
      { name: "SMA IPS", link: "/category/sma-ips", courses: 56 },
    ]
  },
  {
    label: "SNBT UTBK",
    icon: Target,
    subcategories: [
      { name: "Tes Potensi Skolastik", link: "/category/tps-snbt", courses: 23 },
      { name: "Tes Literasi", link: "/category/literasi-snbt", courses: 18 },
    ]
  },
  {
    label: "Ujian Mandiri",
    icon: Award,
    subcategories: [
      { name: "UM UGM", link: "/category/um-ugm", courses: 15 },
      { name: "UM UNDIP", link: "/category/um-undip", courses: 12 },
    ]
  },
];

const CategoryMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {categories.map((category) => (
          <NavigationMenuItem key={category.label}>
            <NavigationMenuTrigger className="flex items-center gap-2">
              <category.icon className="h-4 w-4" />
              {category.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {category.subcategories.map((subcategory) => (
                  <Link
                    key={subcategory.name}
                    to={subcategory.link}
                    className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                  >
                    <div className="font-medium">{subcategory.name}</div>
                    <p className="text-sm text-muted-foreground">
                      {subcategory.courses} kursus
                    </p>
                  </Link>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryMenu;
