import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-t from-[rgba(255,255,255,0.8)] via-[rgba(255,255,255,0.8)] to-[rgba(0,161,233,0.8)]">
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-8 lg:px-[88px] py-8 sm:py-16 lg:py-[165px]">
          <div className="max-w-[1552px] mx-auto relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              {/* Left Content */}
              <div className="space-y-4 lg:space-y-6 order-2 lg:order-1">
                {/* Main Heading */}
                <h1 className="font-inria text-4xl sm:text-6xl lg:text-[96px] font-bold leading-none text-black">
                  Klausos negalios šeimų bendrija
                </h1>

                {/* Aidas in blue */}
                <h2 className="font-inria text-4xl sm:text-6xl lg:text-[96px] font-bold leading-none text-aidas-blue">
                  „Aidas"
                </h2>

                {/* Description */}
                <p className="font-inria text-base sm:text-xl lg:text-2xl font-normal leading-normal text-black/70 max-w-[562px] lg:mt-[157px] mt-8">
                  Bendruomenė, skirta klausos negalią turinčių šeimų palaikymui,
                  pagalbai ir tarpusavio bendravimui
                </p>
              </div>

              {/* Right Content - Hero Image */}
              <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                <div
                  className="w-full max-w-[745px] aspect-[745/559] rounded-[32px] overflow-hidden bg-gray-200 flex items-center justify-center bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage:
                      "url(https://cdn.builder.io/api/v1/image/assets%2F798047acf0eb4eac841acf7aa9d1acd8%2F8fe185fdfd2547ddaea61e4f62aa052f)",
                  }}
                >
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
