
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    title: "Trend Teknologi yang Harus Dikuasai di 2025",
    excerpt: "Perkembangan teknologi yang semakin pesat menuntut kita untuk terus belajar dan mengembangkan diri...",
    author: "Dr. Maya Patel",
    date: "15 April 2025",
    category: "Teknologi",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1740"
  },
  {
    title: "Tips Sukses Menjadi Data Scientist",
    excerpt: "Langkah-langkah dan keterampilan yang diperlukan untuk memulai karir sebagai Data Scientist...",
    author: "Andi Wijaya",
    date: "10 April 2025",
    category: "Karir",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1740"
  },
  {
    title: "Pentingnya Cybersecurity di Era Digital",
    excerpt: "Keamanan siber menjadi semakin krusial seiring dengan meningkatnya transformasi digital...",
    author: "Rini Kusuma",
    date: "5 April 2025",
    category: "Keamanan",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1740"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Blog Les-Q</h1>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
              Wawasan, tips, dan update terbaru seputar teknologi dan pembelajaran online
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <Badge className="mb-4">{post.category}</Badge>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
