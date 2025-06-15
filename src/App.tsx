
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourseDetail from "./pages/CourseDetail";
import Search from "./pages/Search";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import InstructorRegister from "./pages/instructor/Register";
import Student from "./pages/dashboard/Student";
import Instructor from "./pages/dashboard/Instructor";
import AdminDashboard from "./pages/admin/AdminDashboard";
import About from "./pages/company/About";
import Careers from "./pages/company/Careers";
import Media from "./pages/company/Media";
import Blog from "./pages/company/Blog";
import Affiliates from "./pages/company/Affiliates";
import Courses from "./pages/courses/Courses";
import Categories from "./pages/categories/Categories";
import Pricing from "./pages/pricing/Pricing";
import BecomeInstructor from "./pages/instructor/BecomeInstructor";
import Business from "./pages/business/Business";
import Government from "./pages/government/Government";
import Support from "./pages/support/Support";
import Contact from "./pages/support/Contact";
import Privacy from "./pages/legal/Privacy";
import Terms from "./pages/legal/Terms";
import Accessibility from "./pages/legal/Accessibility";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Account Pages
import Profile from "./pages/account/Profile";
import Settings from "./pages/account/Settings";
import Purchases from "./pages/account/Purchases";

// Instructor Account Pages
import InstructorProfile from "./pages/instructor/Profile";
import InstructorSettings from "./pages/instructor/Settings";
import InstructorPayouts from "./pages/instructor/Payouts";

// Category Pages
import SekolahDasar from "./pages/categories/SekolahDasar";
import SekolahMenengahPertama from "./pages/categories/SekolahMenengahPertama";
import SDKelas123 from "./pages/categories/SDKelas123";
import SMAIPA from "./pages/categories/SMAIPA";
import SMAIPS from "./pages/categories/SMAIPS";
import SNBTUTBK from "./pages/categories/SNBTUTBK";
import UjianMandiri from "./pages/categories/UjianMandiri";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/instructor" element={<InstructorRegister />} />
          
          {/* Account Routes */}
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/settings" element={<Settings />} />
          <Route path="/account/purchases" element={<Purchases />} />
          
          {/* Instructor Account Routes */}
          <Route path="/instructor/profile" element={<InstructorProfile />} />
          <Route path="/instructor/settings" element={<InstructorSettings />} />
          <Route path="/instructor/payouts" element={<InstructorPayouts />} />
          
          <Route path="/dashboard/student" element={<Student />} />
          <Route path="/dashboard/instructor" element={<Instructor />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          
          {/* Company Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/press" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/affiliates" element={<Affiliates />} />
          
          {/* Learning Routes */}
          <Route path="/courses" element={<Courses />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/become-instructor" element={<BecomeInstructor />} />
          <Route path="/for-business" element={<Business />} />
          <Route path="/for-government" element={<Government />} />
          
          {/* Support Routes */}
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Specific Category Routes */}
          <Route path="/category/sd-kelas-1" element={<SekolahDasar />} />
          <Route path="/category/sd-kelas-2" element={<SekolahDasar />} />
          <Route path="/category/sd-kelas-3" element={<SekolahDasar />} />
          <Route path="/category/sd-kelas-4" element={<SekolahDasar />} />
          <Route path="/category/sd-kelas-5" element={<SekolahDasar />} />
          <Route path="/category/sd-kelas-6" element={<SekolahDasar />} />
          <Route path="/category/sd-kelas-1-3" element={<SDKelas123 />} />
          <Route path="/category/smp-kelas-7" element={<SekolahMenengahPertama />} />
          <Route path="/category/smp-kelas-8" element={<SekolahMenengahPertama />} />
          <Route path="/category/smp-kelas-9" element={<SekolahMenengahPertama />} />
          <Route path="/category/sma-kelas-10" element={<Categories />} />
          <Route path="/category/sma-kelas-11-ipa" element={<SMAIPA />} />
          <Route path="/category/sma-kelas-11-ips" element={<SMAIPS />} />
          <Route path="/category/sma-kelas-12-ipa" element={<SMAIPA />} />
          <Route path="/category/sma-kelas-12-ips" element={<SMAIPS />} />
          <Route path="/category/snbt-tps" element={<SNBTUTBK />} />
          <Route path="/category/snbt-literasi-indonesia" element={<SNBTUTBK />} />
          <Route path="/category/snbt-literasi-inggris" element={<SNBTUTBK />} />
          <Route path="/category/snbt-penalaran-matematika" element={<SNBTUTBK />} />
          <Route path="/category/ujian-mandiri-ugm" element={<UjianMandiri />} />
          <Route path="/category/ujian-mandiri-undip" element={<UjianMandiri />} />
          <Route path="/category/ujian-mandiri-unair" element={<UjianMandiri />} />
          <Route path="/category/ujian-mandiri-itb" element={<UjianMandiri />} />
          
          {/* Legacy Category Routes (for backward compatibility) */}
          <Route path="/category/sd" element={<SekolahDasar />} />
          <Route path="/category/smp" element={<SekolahMenengahPertama />} />
          <Route path="/category/sma-ipa" element={<SMAIPA />} />
          <Route path="/category/sma-ips" element={<SMAIPS />} />
          <Route path="/category/snbt-utbk" element={<SNBTUTBK />} />
          <Route path="/category/ujian-mandiri" element={<UjianMandiri />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
