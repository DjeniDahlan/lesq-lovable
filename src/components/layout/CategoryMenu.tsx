
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, GraduationCap, School, Users, Award, Target } from 'lucide-react';

const categories = [
  {
    label: "SD",
    icon: School,
    subcategories: [
      { 
        name: "SD Kelas 1", 
        link: "/category/sd-kelas-1", 
        courses: 6,
        subjects: [
          { name: "Matematika", link: "/category/sd-kelas-1/matematika" },
          { name: "Bahasa Indonesia", link: "/category/sd-kelas-1/bahasa-indonesia" },
          { name: "IPA", link: "/category/sd-kelas-1/ipa" }
        ]
      },
      { 
        name: "SD Kelas 2", 
        link: "/category/sd-kelas-2", 
        courses: 6,
        subjects: [
          { name: "Matematika", link: "/category/sd-kelas-2/matematika" },
          { name: "Bahasa Indonesia", link: "/category/sd-kelas-2/bahasa-indonesia" },
          { name: "IPA", link: "/category/sd-kelas-2/ipa" }
        ]
      },
      { 
        name: "SD Kelas 3", 
        link: "/category/sd-kelas-3", 
        courses: 6,
        subjects: [
          { name: "Matematika", link: "/category/sd-kelas-3/matematika" },
          { name: "Bahasa Indonesia", link: "/category/sd-kelas-3/bahasa-indonesia" },
          { name: "IPA", link: "/category/sd-kelas-3/ipa" }
        ]
      },
      { 
        name: "SD Kelas 4", 
        link: "/category/sd-kelas-4", 
        courses: 8,
        subjects: [
          { name: "Matematika", link: "/category/sd-kelas-4/matematika" },
          { name: "Bahasa Indonesia", link: "/category/sd-kelas-4/bahasa-indonesia" },
          { name: "IPA", link: "/category/sd-kelas-4/ipa" }
        ]
      },
      { 
        name: "SD Kelas 5", 
        link: "/category/sd-kelas-5", 
        courses: 8,
        subjects: [
          { name: "Matematika", link: "/category/sd-kelas-5/matematika" },
          { name: "Bahasa Indonesia", link: "/category/sd-kelas-5/bahasa-indonesia" },
          { name: "IPA", link: "/category/sd-kelas-5/ipa" }
        ]
      },
      { 
        name: "SD Kelas 6", 
        link: "/category/sd-kelas-6", 
        courses: 8,
        subjects: [
          { name: "Matematika", link: "/category/sd-kelas-6/matematika" },
          { name: "Bahasa Indonesia", link: "/category/sd-kelas-6/bahasa-indonesia" },
          { name: "IPA", link: "/category/sd-kelas-6/ipa" }
        ]
      },
    ]
  },
  {
    label: "SMP",
    icon: BookOpen,
    subcategories: [
      { 
        name: "SMP Kelas 7", 
        link: "/category/smp-kelas-7", 
        courses: 12,
        subjects: [
          { name: "Matematika", link: "/category/smp-kelas-7/matematika" },
          { name: "Bahasa Indonesia", link: "/category/smp-kelas-7/bahasa-indonesia" },
          { name: "Bahasa Inggris", link: "/category/smp-kelas-7/bahasa-inggris" },
          { name: "IPA-Fisika", link: "/category/smp-kelas-7/ipa-fisika" },
          { name: "IPA-Biologi", link: "/category/smp-kelas-7/ipa-biologi" }
        ]
      },
      { 
        name: "SMP Kelas 8", 
        link: "/category/smp-kelas-8", 
        courses: 12,
        subjects: [
          { name: "Matematika", link: "/category/smp-kelas-8/matematika" },
          { name: "Bahasa Indonesia", link: "/category/smp-kelas-8/bahasa-indonesia" },
          { name: "Bahasa Inggris", link: "/category/smp-kelas-8/bahasa-inggris" },
          { name: "IPA-Fisika", link: "/category/smp-kelas-8/ipa-fisika" },
          { name: "IPA-Biologi", link: "/category/smp-kelas-8/ipa-biologi" }
        ]
      },
      { 
        name: "SMP Kelas 9", 
        link: "/category/smp-kelas-9", 
        courses: 12,
        subjects: [
          { name: "Matematika", link: "/category/smp-kelas-9/matematika" },
          { name: "Bahasa Indonesia", link: "/category/smp-kelas-9/bahasa-indonesia" },
          { name: "Bahasa Inggris", link: "/category/smp-kelas-9/bahasa-inggris" },
          { name: "IPA-Fisika", link: "/category/smp-kelas-9/ipa-fisika" },
          { name: "IPA-Biologi", link: "/category/smp-kelas-9/ipa-biologi" }
        ]
      },
    ]
  },
  {
    label: "SMA",
    icon: GraduationCap,
    subcategories: [
      { 
        name: "SMA Kelas 10", 
        link: "/category/sma-kelas-10", 
        courses: 10,
        subjects: [
          { name: "Matematika", link: "/category/sma-kelas-10/matematika" },
          { name: "Bahasa Indonesia", link: "/category/sma-kelas-10/bahasa-indonesia" },
          { name: "Bahasa Inggris", link: "/category/sma-kelas-10/bahasa-inggris" }
        ]
      },
      { 
        name: "SMA Kelas 11 IPA", 
        link: "/category/sma-kelas-11-ipa", 
        courses: 8,
        subjects: [
          { name: "Bahasa Indonesia", link: "/category/sma-kelas-11-ipa/bahasa-indonesia" },
          { name: "Bahasa Inggris", link: "/category/sma-kelas-11-ipa/bahasa-inggris" },
          { name: "Matematika Dasar", link: "/category/sma-kelas-11-ipa/matematika-dasar" },
          { name: "Matematika IPA", link: "/category/sma-kelas-11-ipa/matematika-ipa" },
          { name: "Fisika", link: "/category/sma-kelas-11-ipa/fisika" },
          { name: "Kimia", link: "/category/sma-kelas-11-ipa/kimia" },
          { name: "Biologi", link: "/category/sma-kelas-11-ipa/biologi" }
        ]
      },
      { 
        name: "SMA Kelas 11 IPS", 
        link: "/category/sma-kelas-11-ips", 
        courses: 8,
        subjects: [
          { name: "Bahasa Indonesia", link: "/category/sma-kelas-11-ips/bahasa-indonesia" },
          { name: "Bahasa Inggris", link: "/category/sma-kelas-11-ips/bahasa-inggris" },
          { name: "Matematika Dasar", link: "/category/sma-kelas-11-ips/matematika-dasar" },
          { name: "Ekonomi", link: "/category/sma-kelas-11-ips/ekonomi" },
          { name: "Geografi", link: "/category/sma-kelas-11-ips/geografi" },
          { name: "Sejarah", link: "/category/sma-kelas-11-ips/sejarah" },
          { name: "Sosiologi", link: "/category/sma-kelas-11-ips/sosiologi" }
        ]
      },
      { 
        name: "SMA Kelas 12 IPA", 
        link: "/category/sma-kelas-12-ipa", 
        courses: 8,
        subjects: [
          { name: "Bahasa Indonesia", link: "/category/sma-kelas-12-ipa/bahasa-indonesia" },
          { name: "Bahasa Inggris", link: "/category/sma-kelas-12-ipa/bahasa-inggris" },
          { name: "Matematika Dasar", link: "/category/sma-kelas-12-ipa/matematika-dasar" },
          { name: "Matematika IPA", link: "/category/sma-kelas-12-ipa/matematika-ipa" },
          { name: "Fisika", link: "/category/sma-kelas-12-ipa/fisika" },
          { name: "Kimia", link: "/category/sma-kelas-12-ipa/kimia" },
          { name: "Biologi", link: "/category/sma-kelas-12-ipa/biologi" },
          { name: "TPA", link: "/category/sma-kelas-12-ipa/tpa" }
        ]
      },
      { 
        name: "SMA Kelas 12 IPS", 
        link: "/category/sma-kelas-12-ips", 
        courses: 8,
        subjects: [
          { name: "Bahasa Indonesia", link: "/category/sma-kelas-12-ips/bahasa-indonesia" },
          { name: "Bahasa Inggris", link: "/category/sma-kelas-12-ips/bahasa-inggris" },
          { name: "Matematika Dasar", link: "/category/sma-kelas-12-ips/matematika-dasar" },
          { name: "Ekonomi", link: "/category/sma-kelas-12-ips/ekonomi" },
          { name: "Geografi", link: "/category/sma-kelas-12-ips/geografi" },
          { name: "Sejarah", link: "/category/sma-kelas-12-ips/sejarah" },
          { name: "Sosiologi", link: "/category/sma-kelas-12-ips/sosiologi" },
          { name: "TPA", link: "/category/sma-kelas-12-ips/tpa" }
        ]
      },
    ]
  },
  {
    label: "SNBT UTBK",
    icon: Target,
    subcategories: [
      { name: "Tes Potensi Skolastik (TPS)", link: "/category/snbt-tps", courses: 4 },
      { name: "Tes Literasi Indonesia", link: "/category/snbt-literasi-indonesia", courses: 3 },
      { name: "Tes Literasi Inggris", link: "/category/snbt-literasi-inggris", courses: 3 },
      { name: "Penalaran Matematika", link: "/category/snbt-penalaran-matematika", courses: 3 },
    ]
  },
  {
    label: "Ujian Mandiri",
    icon: Award,
    subcategories: [
      { name: "UM UGM", link: "/category/ujian-mandiri-ugm", courses: 5 },
      { name: "UM UNDIP", link: "/category/ujian-mandiri-undip", courses: 4 },
      { name: "UM UNAIR", link: "/category/ujian-mandiri-unair", courses: 4 },
      { name: "UM ITB", link: "/category/ujian-mandiri-itb", courses: 4 },
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
              <ScrollArea className="h-[400px] w-[400px] md:w-[500px] lg:w-[700px]">
                <div className="grid gap-3 p-4 md:grid-cols-2 lg:grid-cols-3">
                  {category.subcategories.map((subcategory) => (
                    <div key={subcategory.name} className="space-y-2">
                      <Link
                        to={subcategory.link}
                        className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="font-medium">{subcategory.name}</div>
                        <p className="text-sm text-muted-foreground">
                          {subcategory.courses} kursus
                        </p>
                      </Link>
                      
                      {/* Show subjects submenu for SD classes, all SMP classes, SMA Kelas 10, SMA Kelas 11 IPA, SMA Kelas 11 IPS, SMA Kelas 12 IPA, and SMA Kelas 12 IPS */}
                      {subcategory.subjects && (
                        <div className="ml-4 space-y-1">
                          {subcategory.subjects.map((subject) => (
                            <Link
                              key={subject.name}
                              to={subject.link}
                              className="block text-sm text-muted-foreground hover:text-primary hover:underline p-1"
                            >
                              • {subject.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryMenu;
