
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
          
          {/* Company Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/affiliates" element={<Affiliates />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
