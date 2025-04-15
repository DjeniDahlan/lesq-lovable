import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CourseDetail from "./pages/CourseDetail";
import Search from "./pages/Search";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Student from "./pages/dashboard/Student";
import Instructor from "./pages/dashboard/Instructor";
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
import Privacy from "./pages/support/Privacy";
import Terms from "./pages/support/Terms";
import Accessibility from "./pages/support/Accessibility";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/student" element={<Student />} />
          <Route path="/dashboard/instructor" element={<Instructor />} />
          
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
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
