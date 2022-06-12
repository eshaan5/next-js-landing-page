import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Download from "../components/Download";
import Service from "../components/Service";
import Top from "../components/Top";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aaja Khaja!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      </Head>

      <main>
        <Top />
        <Service />
        <About />
        <Download />
        <Contact />
      </main>

      <footer>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>

        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>
      </footer>
    </div>
  );
}
