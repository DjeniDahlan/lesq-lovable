
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
    label: "SD",
    icon: School,
    subcategories: [
      { name: "Matematika", link: "/category/sd", courses: 3 },
      { name: "Ilmu Pengetahuan Alam (IPA)", link: "/category/sd", courses: 3 },
      { name: "Bahasa Indonesia", link: "/category/sd", courses: 3 },
    ]
  },
  {
    label: "SMP",
    icon: BookOpen,
    subcategories: [
      { name: "Matematika", link: "/category/smp", courses: 4 },
      { name: "Ilmu Pengetahuan Alam (IPA)", link: "/category/smp", courses: 4 },
      { name: "Bahasa Indonesia", link: "/category/smp", courses: 4 },
      { name: "Bahasa Inggris", link: "/category/smp", courses: 4 },
    ]
  },
  {
    label: "SMA",
    icon: GraduationCap,
    subcategories: [
      { name: "SMA Umum", link: "/category/sma-umum", courses: 4 },
      { name: "SMA IPA", link: "/category/sma-ipa", courses: 4 },
      { name: "SMA IPS", link: "/category/sma-ips", courses: 4 },
    ]
  },
  {
    label: "SNBT UTBK",
    icon: Target,
    subcategories: [
      { name: "Tes Potensi Skolastik (TPS)", link: "/category/snbt-utbk", courses: 2 },
      { name: "Tes Literasi", link: "/category/snbt-utbk", courses: 2 },
    ]
  },
  {
    label: "Ujian Mandiri",
    icon: Award,
    subcategories: [
      { name: "UM UGM", link: "/category/ujian-mandiri", courses: 2 },
      { name: "UM UNDIP", link: "/category/ujian-mandiri", courses: 2 },
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
