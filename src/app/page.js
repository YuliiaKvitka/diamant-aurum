import About from "@/components/about/About";
import Advantages from "@/components/advantages/Advantages";
import Clients from "@/components/clients/Clients";
import Hero from "@/components/hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div> 
      <Head>
        <title>Діамант Аурум</title>
      <link rel="canonical" href="http://localhost:3001/" />
      </Head>
      <main>
        <Hero />
        <About />
        <Advantages />
        <Clients/>
      </main>
    </div>
    );
    
}
