import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProject from "@/components/RecentProject";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  overflow-hidden  sm:px-10 px-5">
        <Hero />
        <Grid />
        <RecentProject />
        <Approach />
        <Footer />
    </main>
  );
}