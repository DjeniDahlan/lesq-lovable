
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Clock, Users, BarChart, Award, Star, Play, 
  ChevronDown, ChevronUp, BookOpen, Heart, Share2
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useToast } from '@/hooks/use-toast';
import PurchaseDialog from '@/components/course/PurchaseDialog';

// Mock course data
const courseData = {
  id: '1',
  title: 'Pengembangan Web Frontend dengan React & TypeScript',
  description: 'Pelajari cara membuat aplikasi web modern dengan React, TypeScript, dan tools terkini. Kursus ini dirancang untuk pemula hingga menengah dan akan membantu Anda menjadi developer frontend yang kompeten.',
  longDescription: `
    <p>Dalam kursus ini, Anda akan mempelajari:</p>
    <ul>
      <li>Fundamental React dan konsep component-based architecture</li>
      <li>TypeScript untuk pengembangan yang lebih aman dan terstruktur</li>
      <li>State management dengan Redux dan Context API</li>
      <li>Styling dengan CSS-in-JS dan component libraries</li>
      <li>Testing dan debugging aplikasi React</li>
      <li>Performance optimization dan best practices</li>
      <li>Deployment dan continuous integration</li>
    </ul>
    <p>Kursus ini mencakup berbagai proyek praktis yang akan membantu Anda mengaplikasikan pengetahuan baru Anda dan membangun portofolio yang mengesankan.</p>
  `,
  instructor: 'Budi Santoso',
  instructorTitle: 'Senior Frontend Developer',
  instructorBio: 'Budi adalah seorang pengembang frontend berpengalaman dengan lebih dari 8 tahun pengalaman di berbagai startup dan perusahaan teknologi. Dia telah mengajar lebih dari 50,000 siswa online.',
  instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1740&auto=format&fit=crop',
  price: 599000,
  discountPrice: 299000,
  rating: 4.8,
  reviewCount: 1250,
  studentCount: 15420,
  lastUpdated: 'November 2023',
  language: 'Bahasa Indonesia',
  level: 'Menengah',
  duration: '20 jam',
  lectures: 42,
  category: 'Pengembangan Web',
  tags: ['React', 'TypeScript', 'Frontend', 'Web Development'],
  isBestseller: true,
  isNew: false,
  whatYouWillLearn: [
    'Membangun aplikasi React modern dari dasar hingga deployment',
    'Mengaplikasikan TypeScript untuk kode yang lebih aman dan maintainable',
    'Menerapkan state management yang efektif dengan Redux dan Context API',
    'Menggunakan hooks dan fitur-fitur React terbaru',
    'Mengoptimalkan performa aplikasi web Anda',
    'Menguji aplikasi React dengan Jest dan React Testing Library'
  ],
  requirements: [
    'Pengetahuan dasar HTML, CSS, dan JavaScript',
    'Pemahaman dasar konsep pemrograman',
    'Komputer dengan koneksi internet yang stabil'
  ],
  curriculum: [
    {
      id: 1,
      title: 'Pengenalan React dan TypeScript',
      lectures: [
        { id: '1-1', title: 'Selamat Datang di Kursus', duration: '5:20', preview: true },
        { id: '1-2', title: 'Apa itu React dan Mengapa Menggunakannya?', duration: '10:15', preview: true },
        { id: '1-3', title: 'Setup Development Environment', duration: '12:30', preview: false },
        { id: '1-4', title: 'TypeScript Basics', duration: '15:45', preview: false }
      ]
    },
    {
      id: 2,
      title: 'Fundamental React',
      lectures: [
        { id: '2-1', title: 'Component dan JSX', duration: '14:20', preview: false },
        { id: '2-2', title: 'Props dan State', duration: '18:45', preview: false },
        { id: '2-3', title: 'Event Handling', duration: '12:10', preview: false },
        { id: '2-4', title: 'Conditional Rendering', duration: '9:35', preview: false },
        { id: '2-5', title: 'List dan Keys', duration: '11:25', preview: false }
      ]
    },
    {
      id: 3,
      title: 'TypeScript dengan React',
      lectures: [
        { id: '3-1', title: 'TypeScript dengan Functional Components', duration: '16:40', preview: false },
        { id: '3-2', title: 'Type Props dan Event Handlers', duration: '13:55', preview: false },
        { id: '3-3', title: 'Custom Types dan Interfaces', duration: '18:20', preview: false }
      ]
    }
  ],
  reviews: [
    {
      id: 1,
      user: 'Ahmad Fauzi',
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      rating: 5,
      date: '2 bulan yang lalu',
      comment: 'Kursus yang sangat komprehensif! Saya belajar banyak dan sekarang sudah bisa membuat aplikasi React sendiri. Penjelasannya sangat jelas dan contoh-contohnya relevan dengan kebutuhan industri saat ini.'
    },
    {
      id: 2,
      user: 'Siti Nuraini',
      avatar: 'https://randomuser.me/api/portraits/women/52.jpg',
      rating: 4,
      date: '1 bulan yang lalu',
      comment: 'Materi sangat bagus dan terstruktur. Saya suka bagaimana instruktur menjelaskan konsep-konsep kompleks dengan cara yang mudah dipahami. Alasan saya memberi 4 bintang adalah karena beberapa bagian terlalu cepat untuk pemula seperti saya.'
    },
    {
      id: 3,
      user: 'Rudi Hermawan',
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      rating: 5,
      date: '3 minggu yang lalu',
      comment: 'Salah satu kursus terbaik tentang React dan TypeScript yang pernah saya ikuti. Proyek-proyeknya sangat membantu untuk mengaplikasikan pengetahuan yang didapat. Sangat direkomendasikan!'
    }
  ]
};

const CourseDetail = () => {
  const { id } = useParams();
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const { toast } = useToast();
  const [isPurchaseDialogOpen, setIsPurchaseDialogOpen] = useState(false);
  const [isTrialDialogOpen, setIsTrialDialogOpen] = useState(false);
  
  const toggleSection = (sectionId: number) => {
    if (activeSection === sectionId) {
      setActiveSection(null);
    } else {
      setActiveSection(sectionId);
    }
  };
  
  const addToWishlist = () => {
    toast({
      title: "Ditambahkan ke wishlist",
      description: `${courseData.title} telah ditambahkan ke wishlist Anda`,
    });
  };
  
  const shareCourse = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link disalin",
      description: "Link kursus telah disalin ke clipboard",
    });
  };

  const handleBuyNow = () => {
    setIsPurchaseDialogOpen(true);
  };

  const handleFreeTrial = () => {
    setIsTrialDialogOpen(true);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header */}
        <section className="bg-gray-900 text-white py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Link to="/category/web" className="text-blue-300 hover:underline text-sm">
                    Pengembangan Web
                  </Link>
                  <span className="text-gray-400">›</span>
                  <Link to="/category/frontend" className="text-blue-300 hover:underline text-sm">
                    Frontend
                  </Link>
                </div>
                
                <h1 className="text-2xl sm:text-3xl font-bold mb-4">{courseData.title}</h1>
                
                <p className="text-gray-300 mb-4">{courseData.description}</p>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  {courseData.isBestseller && (
                    <Badge variant="secondary" className="bg-yellow-500 text-black">Bestseller</Badge>
                  )}
                  {courseData.isNew && (
                    <Badge variant="secondary" className="bg-green-500 text-white">Baru</Badge>
                  )}
                  
                  <div className="flex items-center">
                    <span className="text-yellow-500 font-medium mr-1">{courseData.rating.toFixed(1)}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          size={14} 
                          className={i < Math.floor(courseData.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-400"} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-300 ml-1">
                      ({courseData.reviewCount} ulasan)
                    </span>
                  </div>
                  
                  <span className="text-sm text-gray-300">
                    {courseData.studentCount.toLocaleString()} peserta
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-gray-300 mb-6">
                  <span>Dibuat oleh</span>
                  <Link to="/instructor/budi-santoso" className="text-blue-300 hover:underline ml-1">
                    {courseData.instructor}
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>Terakhir diperbarui {courseData.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={16} />
                    <span>{courseData.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart size={16} />
                    <span>{courseData.level}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img 
                    src={courseData.thumbnail} 
                    alt={courseData.title} 
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button variant="outline" className="rounded-full bg-white text-black hover:bg-white">
                      <Play className="h-6 w-6 fill-current" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-baseline mb-2">
                      <span className="text-2xl font-bold">
                        Rp {courseData.discountPrice?.toLocaleString()}
                      </span>
                      {courseData.discountPrice && (
                        <span className="text-base text-muted-foreground line-through ml-2">
                          Rp {courseData.price.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {courseData.discountPrice && (
                      <div className="text-sm text-red-500">
                        {Math.round((1 - courseData.discountPrice / courseData.price) * 100)}% diskon! Berakhir dalam 2 hari
                      </div>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <Button className="w-full" onClick={handleBuyNow}>Beli Sekarang</Button>
                    <Button variant="outline" className="w-full" onClick={handleFreeTrial}>
                      Coba Gratis 7 Hari
                    </Button>
                  </div>
                  
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    Garansi uang kembali 30 hari
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <h3 className="font-medium">Kursus ini mencakup:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                        <span>{courseData.duration} konten video on-demand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BookOpen className="h-4 w-4 mt-1 flex-shrink-0" />
                        <span>{courseData.lectures} kuliah</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award className="h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Sertifikat penyelesaian</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Users className="h-4 w-4 mt-1 flex-shrink-0" />
                        <span>Forum diskusi</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 flex gap-2">
                    <Button variant="ghost" size="icon" onClick={addToWishlist}>
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={shareCourse}>
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Content Tabs */}
        <section className="py-12">
          <div className="container">
            <Tabs defaultValue="overview">
              <TabsList className="w-full max-w-md mb-8">
                <TabsTrigger value="overview" className="flex-1">Ikhtisar</TabsTrigger>
                <TabsTrigger value="curriculum" className="flex-1">Kurikulum</TabsTrigger>
                <TabsTrigger value="instructor" className="flex-1">Instruktur</TabsTrigger>
                <TabsTrigger value="reviews" className="flex-1">Ulasan</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Apa yang akan Anda pelajari</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {courseData.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-green-500 mt-1">✓</div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Persyaratan</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    {courseData.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Deskripsi</h2>
                  <div dangerouslySetInnerHTML={{ __html: courseData.longDescription }} />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4">Ditujukan untuk</h2>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pengembang yang ingin belajar React dan TypeScript</li>
                    <li>Frontend developer yang ingin meningkatkan keterampilan mereka</li>
                    <li>Developer yang ingin beralih ke teknologi modern</li>
                    <li>Pemula yang memiliki pengetahuan dasar JavaScript</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-2">Konten Kursus</h2>
                  <div className="text-sm text-muted-foreground">
                    {courseData.curriculum.reduce((total, section) => total + section.lectures.length, 0)} kuliah • {courseData.duration} total
                  </div>
                </div>
                
                <div className="space-y-4">
                  {courseData.curriculum.map((section) => (
                    <div key={section.id} className="border rounded-md overflow-hidden">
                      <div 
                        className="flex justify-between items-center bg-muted p-4 cursor-pointer"
                        onClick={() => toggleSection(section.id)}
                      >
                        <div className="font-medium flex items-center gap-2">
                          {activeSection === section.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                          <span>{section.title}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {section.lectures.length} kuliah
                        </div>
                      </div>
                      
                      {activeSection === section.id && (
                        <div className="p-4 bg-white">
                          {section.lectures.map((lecture) => (
                            <div 
                              key={lecture.id} 
                              className="py-3 flex justify-between items-center border-b last:border-b-0"
                            >
                              <div className="flex items-start gap-3">
                                <Play className="h-4 w-4 mt-1" />
                                <div>
                                  <div className="font-medium text-sm">{lecture.title}</div>
                                  {lecture.preview && (
                                    <span className="text-xs text-blue-500">Preview</span>
                                  )}
                                </div>
                              </div>
                              <div className="text-sm text-muted-foreground">{lecture.duration}</div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="instructor">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img 
                    src={courseData.instructorAvatar} 
                    alt={courseData.instructor} 
                    className="w-24 h-24 rounded-full"
                  />
                  
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{courseData.instructor}</h2>
                    <p className="text-muted-foreground mb-4">{courseData.instructorTitle}</p>
                    
                    <div className="flex gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="font-medium">4.7</span>
                        <span className="text-muted-foreground text-sm">Rating Instruktur</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <Users className="h-5 w-5 text-primary" />
                        <span className="font-medium">45,231</span>
                        <span className="text-muted-foreground text-sm">Siswa</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <span className="font-medium">12</span>
                        <span className="text-muted-foreground text-sm">Kursus</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{courseData.instructorBio}</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-yellow-500 mb-2">{courseData.rating.toFixed(1)}</div>
                      <div className="flex justify-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={20} 
                            className={i < Math.floor(courseData.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <div className="text-muted-foreground">{courseData.reviewCount} ulasan</div>
                    </div>
                    
                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        // Generate random percentages for this mock
                        const percentage = rating === 5 ? 78 : 
                                          rating === 4 ? 15 : 
                                          rating === 3 ? 5 : 
                                          rating === 2 ? 1 : 1;
                        
                        return (
                          <div key={rating} className="flex items-center gap-3">
                            <div className="flex items-center gap-1">
                              <span>{rating}</span>
                              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            </div>
                            <Progress className="h-2 flex-1" value={percentage} />
                            <span className="text-sm text-muted-foreground">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold mb-6">Ulasan</h2>
                    
                    <div className="space-y-6">
                      {courseData.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <img src={review.avatar} alt={review.user} className="w-10 h-10 rounded-full" />
                              <div>
                                <div className="font-medium">{review.user}</div>
                                <div className="flex items-center gap-2">
                                  <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                      <Star 
                                        key={i}
                                        size={14} 
                                        className={i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"} 
                                      />
                                    ))}
                                  </div>
                                  <span className="text-sm text-muted-foreground">{review.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Purchase Dialog */}
      <PurchaseDialog
        isOpen={isPurchaseDialogOpen}
        onClose={() => setIsPurchaseDialogOpen(false)}
        courseTitle={courseData.title}
        courseId={id || '1'}
        isTrial={false}
        price={courseData.discountPrice || courseData.price}
      />

      {/* Trial Dialog */}
      <PurchaseDialog
        isOpen={isTrialDialogOpen}
        onClose={() => setIsTrialDialogOpen(false)}
        courseTitle={courseData.title}
        courseId={id || '1'}
        isTrial={true}
      />
    </div>
  );
};

export default CourseDetail;
