import { ContactUs } from "@/components/Contactus";
import Footer from "@/components/Footer";
import Landingpage from "@/components/Landingpage";
import Mail from "@/components/Mail";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import Scroll from "@/components/Scroll";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] relative">
      <Head>
        <title>Baihaki</title>
      </Head>
      <Mail />
      {/* <ContactUs /> */}
      <Navbar />
      <Landingpage />
      <Project />
      <Footer />
    </div>
  );
}
