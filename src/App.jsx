// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Roadmap from "./components/Roadmap";
// import Companies from "./components/Companies";
// import Analytics from "./components/Analytics";
// import Testimonials from "./components/Testimonials";
// import CTA from "./components/CTA";
// import Footer from "./components/Footer";
// import AboutUs from "./components/AboutUs";
// import Contact from "./components/Contact";
// import "./App.css"


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Features/>
//       <Roadmap/>
//       <Companies/>
//       <Testimonials/>
//       <CTA/>
//       <Analytics/>
//       <AboutUs/>
//       <Contact/>
//       <Footer/>
//     </>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";
import ResumeBuilder from "./pages/ResumeBuilder"
import ApplicationTracker from "./pages/ApplicationTracker";
import MockTestTracker from "./pages/MockTestTracker";
import Dashboard from "./pages/DashBoard";
import PlacementCalculator from "./pages/PlacementCalculator";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
       <Route
       path="/tracker"
       element={<ApplicationTracker/>}
       />
       <Route
       path="/mocktest"
       element={<MockTestTracker/>}/>
       <Route
          path="/resume"
          element={<ResumeBuilder />}/>
        <Route
        path="/Dashboard"
        element={<Dashboard/>}/>
        <Route
        path="/PlacementCalculator"
        element={<PlacementCalculator/>}/>
      </Routes>


    </BrowserRouter>
  );
}

export default App;