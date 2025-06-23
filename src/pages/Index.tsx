import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-[rgba(255,255,255,0.8)] via-[rgba(255,255,255,0.8)] to-[rgba(0,161,233,0.8)]">
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="w-full px-[88px] py-[165px]">
          <div className="max-w-[1552px] mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left Content */}
              <div className="space-y-6">
                {/* Main Heading */}
                <h1 className="font-inria text-[96px] font-bold leading-none text-black max-w-[738px]">
                  Klausos negalios šeimų bendrija
                </h1>

                {/* Aidas in blue */}
                <h2 className="font-inria text-[96px] font-bold leading-none text-aidas-blue max-w-[368px]">
                  „Aidas"
                </h2>

                {/* Description */}
                <p className="font-inria text-2xl font-normal leading-normal text-black/70 max-w-[562px] mt-[157px]">
                  Bendruomenė, skirta klausos negalią turinčių šeimų palaikymui,
                  pagalbai ir tarpusavio bendravimui
                </p>
              </div>

              {/* Right Content - Hero Image */}
              <div className="flex justify-end">
                <div className="w-[745px] h-[559px] rounded-[32px] overflow-hidden bg-gray-200 flex items-center justify-center">
                  {/* Placeholder for hero image */}
                  <div className="text-gray-500 text-center">
                    <p className="text-lg">Hero Image</p>
                    <p className="text-sm">745x559px</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
