import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-[rgba(255,255,255,0.8)] via-[rgba(255,255,255,0.8)] to-[rgba(0,161,233,0.8)]">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="text-center space-y-6">
          <h1 className="font-inria text-6xl font-bold text-black">404</h1>
          <h2 className="font-inria text-3xl font-bold text-aidas-blue">
            Puslapis nerastas
          </h2>
          <p className="font-inria text-xl text-black/70 max-w-md">
            Atsiprašome, bet puslapis, kurio ieškote, neegzistuoja arba buvo
            perkeltas.
          </p>
          <Link
            to="/"
            className="inline-block bg-aidas-blue text-white font-inria font-bold text-lg px-8 py-3 rounded-lg hover:bg-aidas-blue/90 transition-colors"
          >
            Grįžti į pradžią
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
