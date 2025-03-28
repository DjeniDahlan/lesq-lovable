
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
import { BookOpen, PenTool, ShoppingBag, Database, Code, Lightbulb, Languages, Music } from 'lucide-react';

const categories = [
  {
    label: "Pengembangan Web",
    icon: BookOpen,
    subcategories: [
      { name: "HTML & CSS", link: "/category/html-css", courses: 245 },
      { name: "JavaScript", link: "/category/javascript", courses: 321 },
      { name: "React", link: "/category/react", courses: 187 },
      { name: "Vue", link: "/category/vue", courses: 121 },
      { name: "Angular", link: "/category/angular", courses: 98 },
      { name: "PHP", link: "/category/php", courses: 154 },
      { name: "Node.js", link: "/category/nodejs", courses: 143 },
      { name: "WordPress", link: "/category/wordpress", courses: 132 },
    ]
  },
  {
    label: "Desain",
    icon: PenTool,
    subcategories: [
      { name: "UI/UX Design", link: "/category/ui-ux", courses: 178 },
      { name: "Graphic Design", link: "/category/graphic-design", courses: 203 },
      { name: "Photoshop", link: "/category/photoshop", courses: 132 },
      { name: "Illustrator", link: "/category/illustrator", courses: 98 },
      { name: "Figma", link: "/category/figma", courses: 87 },
      { name: "3D & Animation", link: "/category/3d-animation", courses: 65 },
    ]
  },
  {
    label: "Bisnis",
    icon: ShoppingBag,
    subcategories: [
      { name: "Entrepreneurship", link: "/category/entrepreneurship", courses: 143 },
      { name: "Digital Marketing", link: "/category/digital-marketing", courses: 187 },
      { name: "Sales", link: "/category/sales", courses: 98 },
      { name: "Finance", link: "/category/finance", courses: 112 },
      { name: "Project Management", link: "/category/project-management", courses: 76 },
      { name: "E-commerce", link: "/category/ecommerce", courses: 93 },
    ]
  },
  {
    label: "Data Science",
    icon: Database,
    subcategories: [
      { name: "Machine Learning", link: "/category/machine-learning", courses: 87 },
      { name: "Python", link: "/category/python", courses: 132 },
      { name: "Data Analysis", link: "/category/data-analysis", courses: 76 },
      { name: "SQL", link: "/category/sql", courses: 54 },
      { name: "Big Data", link: "/category/big-data", courses: 43 },
      { name: "R", link: "/category/r-programming", courses: 32 },
    ]
  },
  {
    label: "Mobile",
    icon: Code,
    subcategories: [
      { name: "Flutter", link: "/category/flutter", courses: 76 },
      { name: "React Native", link: "/category/react-native", courses: 65 },
      { name: "Swift", link: "/category/swift", courses: 43 },
      { name: "Kotlin", link: "/category/kotlin", courses: 54 },
      { name: "Android Development", link: "/category/android", courses: 87 },
      { name: "iOS Development", link: "/category/ios", courses: 76 },
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
        <NavigationMenuItem>
          <Link to="/categories">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Semua Kategori
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoryMenu;
