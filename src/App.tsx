import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";


import Home from "./pages/Home";
import About from "./pages/AboutUsPage";
import CourseDetails from "./pages/Course";
import TuitionFees from "./pages/TuitionFees";
import ContactUs from "./pages/ContactUs";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>



     


      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<CourseDetails />} />
          <Route path="/tuition" element={<TuitionFees />} />
          <Route path="/contact" element={<ContactUs />} />
          
  
        </Routes>
      </BrowserRouter>
                  
                        </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
