import Hero from "@/components/Hero/Hero";
import Placements from "@/components/Placements/Placements";
import Testimonials from "@/components/Testimonials/Testimonials"
import Affiliation from "@/components/Affiliation/Affiliation";
import AboutSection from "@/components/AboutSection/AboutSection";
import CampusLife from "@/components/CampusLife/CampusLife";
import AnnouncementBar from "@/components/AnnouncementBar/AnnouncementBar";
import Study from "@/components/Study/Study"

import Gallery from "@/components/Gallery/Gallery"
export default function Home() {
  return (
    <main>
 
      <Hero />
      <AboutSection/>
      <Affiliation/>
      
     <Study/>
      <CampusLife/>
           <Placements/>
           <Gallery/>
      <Testimonials/>
         <AnnouncementBar/>
    </main>
  );
}