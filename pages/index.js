import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroPage from "../pages/heroPage";
import Clients from "./clients";
import Services from "./services";
import News from "./news";
import Contact from "../components/Contact";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div>
      <Head>
        <title>Bicycle Digital</title>
        <meta name="description" content="A Branding and Marketing Agency" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <Navbar />
      <HeroPage />
      <News />
      <Services />
      
      <Contact />
      <Footer />
    </div>
  );
}
