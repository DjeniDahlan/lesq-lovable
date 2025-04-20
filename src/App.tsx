
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
          
          <Route path="/dashboard/student" element={<Student />} />
          <Route path="/dashboard/instructor" element={<Instructor />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/affiliates" element={<Affiliates />} />
          
          <Route path="/courses" element={<Courses />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/become-instructor" element={<BecomeInstructor />} />
          <Route path="/for-business" element={<Business />} />
          <Route path="/for-government" element={<Government />} />
          
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
