
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Play, Star, Clock, Award, Users, Globe, 
  CheckCircle, BookOpen, FileText, MessageCircle 
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [showMore, setShowMore] = useState(false);
  
  // Mock course data - in a real app, you would fetch this based on the ID
  const course = {
    id,
    title: 'Pengembangan Web Frontend dengan React & TypeScript',
    description: 'Kursus lengkap tentang pengembangan frontend modern menggunakan React.js dan TypeScript. Pelajari cara membangun aplikasi web yang responsif, dapat diskalakan, dan mudah dipelihara dengan praktik terbaik industri.',
    instructor: {
      name: 'Budi Santoso',
      title: 'Senior Frontend Developer',
      bio: 'Budi adalah pengembang frontend dengan pengalaman lebih dari 8 tahun di perusahaan teknologi terkemuka. Ia telah membantu ribuan siswa untuk menguasai React melalui kursus-kursus online.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      courses: 12,
      students: 15420,
      rating: 4.8
    },
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1740&auto=format&fit=crop',
    price: 599000,
    discountPrice: 299000,
    rating: 4.8,
    reviewCount: 1250,
    level: 'Menengah',
    duration: '20 jam',
    studentCount: 15420,
    lastUpdated: 'November 2023',
    language: 'Bahasa Indonesia',
    category: 'Pengembangan Web',
    tags: ['React', 'TypeScript', 'Frontend', 'Web Development'],
    isBestseller: true,
    whatYouWillLearn: [
      'Membangun aplikasi web modern dengan React.js dan TypeScript',
      'Menerapkan manajemen state dengan Redux dan React Context API',
      'Membuat UI responsif dan menarik dengan CSS-in-JS',
      'Menerapkan praktik terbaik dalam pengembangan frontend',
      'Mengintegrasikan API REST dan GraphQL ke aplikasi React',
      'Menguji aplikasi React dengan Jest dan React Testing Library',
      'Mengoptimalkan kinerja aplikasi frontend'
    ],
    requirements: [
      'Pengetahuan dasar HTML, CSS, dan JavaScript',
      'Pemahaman fundamental tentang pemrograman',
      'Komputer dengan akses internet dan browser modern',
      'Tidak diperlukan pengalaman React sebelumnya'
    ],
    curriculum: [
      {
        section: 'Pengenalan dan Persiapan',
        lectures: [
          { title: 'Selamat Datang di Kursus', duration: '5 menit', type: 'video', preview: true },
          { title: 'Menyiapkan Lingkungan Pengembangan', duration: '15 menit', type: 'video', preview: false },
          { title: 'Pengenalan React.js dan TypeScript', duration: '20 menit', type: 'video', preview: false },
          { title: 'Memahami JSX dan TSX', duration: '25 menit', type: 'video', preview: false },
        ]
      },
      {
        section: 'Dasar-dasar React',
        lectures: [
          { title: 'Komponen dan Props', duration: '30 menit', type: 'video', preview: false },
          { title: 'State dan Lifecycle', duration: '35 menit', type: 'video', preview: false },
          { title: 'Penanganan Event', duration: '25 menit', type: 'video', preview: false },
          { title: 'Latihan: Membuat Counter App', duration: '20 menit', type: 'exercise', preview: false },
        ]
      },
      {
        section: 'TypeScript dalam React',
        lectures: [
          { title: 'Tipe-tipe Dasar dalam TypeScript', duration: '25 menit', type: 'video', preview: false },
          { title: 'Antarmuka dan Tipe untuk Props', duration: '30 menit', type: 'video', preview: false },
          { title: 'Generic Types dan Utilitas Tipe', duration: '40 menit', type: 'video', preview: false },
          { title: 'Latihan: Refaktor Aplikasi ke TypeScript', duration: '35 menit', type: 'exercise', preview: false },
        ]
      },
      {
        section: 'Manajemen State Lanjutan',
        lectures: [
          { title: 'Context API', duration: '30 menit', type: 'video', preview: false },
          { title: 'Hooks: useState, useEffect, useContext', duration: '45 menit', type: 'video', preview: false },
          { title: 'Redux dengan TypeScript', duration: '50 menit', type: 'video', preview: false },
          { title: 'Proyek: Aplikasi To-Do dengan State Management', duration: '60 menit', type: 'project', preview: false },
        ]
      },
      {
        section: 'Routing dan Navigasi',
        lectures: [
          { title: 'Pengenalan React Router', duration: '25 menit', type: 'video', preview: false },
          { title: 'Route Parameters dan Query Strings', duration: '30 menit', type: 'video', preview: false },
          { title: 'Navigasi Terpogram dan Guards', duration: '35 menit', type: 'video', preview: false },
          { title: 'Latihan: Membuat Multi-page Application', duration: '40 menit', type: 'exercise', preview: false },
        ]
      }
    ],
    reviews: [
      {
        id: '1',
        user: 'Ahmad Faisal',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 5,
        date: '15 Oktober 2023',
        comment: 'Kursus yang sangat komprehensif dan mudah diikuti. Materi dijelaskan dengan sangat baik dan proyek-proyek yang disertakan sangat membantu pemahaman.'
      },
      {
        id: '2',
        user: 'Ratna Dewi',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        rating: 4,
        date: '2 September 2023',
        comment: 'Sangat bermanfaat bagi saya yang ingin beralih ke frontend development. Penjelasan tentang TypeScript sedikit terlalu cepat, tapi secara keseluruhan kursus ini luar biasa.'
      },
      {
        id: '3',
        user: 'Dimas Prayoga',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        rating: 5,
        date: '20 Agustus 2023',
        comment: 'Budi adalah instruktur yang luar biasa! Cara dia menjelaskan konsep-konsep kompleks menjadi sangat mudah dipahami. Saya sekarang bisa membuat aplikasi React dengan percaya diri.'
      }
    ]
  };
  
  // Calculate total curriculum content
  const totalLectures = course.curriculum.reduce((total, section) => total + section.lectures.length, 0);
  const totalDuration = course.curriculum.reduce((total, section) => {
    return total + section.lectures.reduce((secTotal, lecture) => {
      const minutes = parseInt(lecture.duration.split(' ')[0]);
      return secTotal + minutes;
    }, 0);
  }, 0);
  
  // Format total duration to hours and minutes
  const hours = Math.floor(totalDuration / 60);
  const minutes = totalDuration % 60;
  const formattedTotalDuration = `${hours} jam ${minutes} menit`;
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Course Header */}
        <section className="bg-gray-900 text-white py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 text-sm text-blue-300 mb-4">
                  <Link to={`/category/${course.category.toLowerCase().replace(' ', '-')}`} className="hover:underline">
                    {course.category}
                  </Link>
                  {' > '}
                  <span>React</span>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                
                <p className="text-lg text-gray-300 mb-6">{course.description.substring(0, 150)}...</p>
                
                <div className="flex items-center gap-4 text-sm mb-6">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span>{course.rating.toFixed(1)}</span>
                    <span className="text-gray-400 ml-1">({course.reviewCount} ulasan)</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{course.studentCount.toLocaleString()} siswa</span>
                  </div>
                </div>
                
                <div className="text-sm mb-6">
                  <p>Dibuat oleh <Link to={`/instructor/${course.instructor.name.replace(' ', '-')}`} className="text-blue-300 hover:underline">{course.instructor.name}</Link></p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Durasi: {course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    <span>Level: {course.level}</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-4 h-4 mr-1" />
                    <span>Bahasa: {course.language}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Terakhir diupdate: {course.lastUpdated}</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:ml-auto max-w-md w-full bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-video w-full">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <Button variant="outline" className="rounded-full bg-white bg-opacity-90 text-primary hover:bg-white hover:text-primary">
                      <Play className="h-6 w-6 fill-current" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold">Rp {course.discountPrice?.toLocaleString()}</span>
                    <span className="text-lg text-muted-foreground line-through ml-2">
                      Rp {course.price.toLocaleString()}
                    </span>
                    <span className="ml-2 text-green-600 font-medium">
                      {Math.round(((course.price - (course.discountPrice || 0)) / course.price) * 100)}% diskon
                    </span>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <Button className="w-full text-base py-6">Beli Sekarang</Button>
                    <Button variant="outline" className="w-full text-base py-6">Tambahkan ke Wishlist</Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground mb-6">
                    <p>Jaminan uang kembali 30 hari</p>
                    <p>Akses penuh seumur hidup</p>
                  </div>
                  
                  <div className="text-sm space-y-2">
                    <h3 className="font-medium">Kursus ini mencakup:</h3>
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {course.duration} video on-demand
                    </p>
                    <p className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      5 artikel dan sumber daya
                    </p>
                    <p className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      Akses di perangkat seluler dan TV
                    </p>
                    <p className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      Sertifikat penyelesaian
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course Content */}
        <section className="py-12">
          <div className="container">
            <div className="max-w-4xl">
              <Tabs defaultValue="content">
                <TabsList className="mb-8">
                  <TabsTrigger value="content">Konten Kursus</TabsTrigger>
                  <TabsTrigger value="instructor">Instruktur</TabsTrigger>
                  <TabsTrigger value="reviews">Ulasan</TabsTrigger>
                </TabsList>
                
                <TabsContent value="content" className="space-y-8">
                  {/* What You'll Learn */}
                  <div className="border rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Yang Akan Anda Pelajari</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Requirements */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">Prasyarat</h2>
                    <ul className="list-disc pl-5 space-y-2">
                      {course.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Course Description */}
                  <div>
                    <h2 className="text-xl font-bold mb-4">Deskripsi Kursus</h2>
                    <div className={`relative ${!showMore && 'max-h-60 overflow-hidden'}`}>
                      <p className="mb-4">{course.description}</p>
                      <p className="mb-4">
                        Kursus ini dirancang untuk pemula hingga tingkat menengah yang ingin mempelajari pengembangan frontend modern dengan React dan TypeScript. Anda akan belajar dari dasar hingga teknik lanjutan melalui video tutorial, latihan praktis, dan proyek-proyek nyata.
                      </p>
                      <p className="mb-4">
                        Setiap modul membangun keterampilan Anda secara bertahap, mulai dari konsep dasar React hingga penggunaan TypeScript untuk membuat aplikasi yang lebih aman dan mudah dipelihara. Anda akan mempelajari praktik terbaik dalam pengembangan frontend, manajemen state, routing, dan teknik pengujian.
                      </p>
                      <p className="mb-4">
                        Di akhir kursus, Anda akan mampu membangun aplikasi web React yang kompleks dan siap untuk produksi, menggunakan TypeScript untuk meningkatkan kualitas kode Anda.
                      </p>
                      
                      {!showMore && (
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
                      )}
                    </div>
                    <button 
                      className="text-primary font-medium mt-2"
                      onClick={() => setShowMore(!showMore)}
                    >
                      {showMore ? 'Tampilkan lebih sedikit' : 'Tampilkan lebih banyak'}
                    </button>
                  </div>
                  
                  {/* Course Curriculum */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-bold">Kurikulum Kursus</h2>
                      <div className="text-sm text-muted-foreground">
                        {totalLectures} pelajaran • {formattedTotalDuration}
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {course.curriculum.map((section, idx) => (
                        <div key={idx} className="border rounded-lg overflow-hidden">
                          <div className="bg-muted p-4">
                            <h3 className="font-medium">{section.section}</h3>
                            <p className="text-sm text-muted-foreground">
                              {section.lectures.length} pelajaran • {
                                (() => {
                                  const mins = section.lectures.reduce((total, lecture) => total + parseInt(lecture.duration), 0);
                                  const hrs = Math.floor(mins / 60);
                                  const remaining = mins % 60;
                                  return hrs > 0 ? `${hrs} jam ${remaining} menit` : `${mins} menit`;
                                })()
                              }
                            </p>
                          </div>
                          <div className="divide-y">
                            {section.lectures.map((lecture, lectureIdx) => (
                              <div key={lectureIdx} className="p-4 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  {lecture.type === 'video' ? (
                                    <Play className="h-4 w-4 text-muted-foreground" />
                                  ) : lecture.type === 'exercise' ? (
                                    <FileText className="h-4 w-4 text-muted-foreground" />
                                  ) : (
                                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                                  )}
                                  <div>
                                    <p className="font-medium">{lecture.title}</p>
                                    <p className="text-xs text-muted-foreground">{lecture.duration}</p>
                                  </div>
                                </div>
                                {lecture.preview && (
                                  <Button variant="link" size="sm">Pratinjau</Button>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor">
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img 
                        src={course.instructor.avatar} 
                        alt={course.instructor.name}
                        className="w-24 h-24 rounded-full object-cover" 
                      />
                      <div>
                        <h2 className="text-xl font-bold mb-1">{course.instructor.name}</h2>
                        <p className="text-muted-foreground mb-4">{course.instructor.title}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm mb-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span>{course.instructor.rating.toFixed(1)} Rating</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-4 w-4" />
                            <span>{course.reviewCount} Ulasan</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{course.instructor.students.toLocaleString()} Siswa</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{course.instructor.courses} Kursus</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium mb-3">Tentang Instruktur</h3>
                      <p>{course.instructor.bio}</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold mb-2">{course.rating.toFixed(1)}</div>
                        <div className="flex mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              className={`h-5 w-5 ${i < Math.floor(course.rating) ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Rating Kursus</p>
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        {[5, 4, 3, 2, 1].map((num) => {
                          const percent = num === 5 ? 78 : num === 4 ? 15 : num === 3 ? 5 : num === 2 ? 1 : 1;
                          return (
                            <div key={num} className="flex items-center gap-2">
                              <div className="flex items-center w-20">
                                <span className="text-sm mr-1">{num}</span>
                                <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                              </div>
                              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-yellow-500 rounded-full" 
                                  style={{ width: `${percent}%` }}
                                ></div>
                              </div>
                              <span className="text-sm w-12">{percent}%</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="font-bold text-lg">Ulasan Siswa</h3>
                      
                      {course.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6">
                          <div className="flex items-start gap-4">
                            <img 
                              src={review.avatar} 
                              alt={review.user}
                              className="w-12 h-12 rounded-full" 
                            />
                            <div>
                              <p className="font-medium">{review.user}</p>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i}
                                      className={`h-4 w-4 ${i < review.rating ? "fill-yellow-500 text-yellow-500" : "text-gray-300"}`} 
                                    />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <p>{review.comment}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <div className="text-center">
                        <Button variant="outline">Lihat Lebih Banyak Ulasan</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
