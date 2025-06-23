import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="w-full">
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <section className="w-full px-4 sm:px-8 lg:px-[88px] py-8 sm:py-16 lg:py-[80px] bg-gradient-to-r from-[#B8E6FF] to-[#B8E6FF]">
          <div className="max-w-[1552px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6 order-2 lg:order-1">
                <h1 className="font-inria text-3xl sm:text-4xl lg:text-[48px] font-bold leading-tight text-black">
                  Apie <span className="text-aidas-blue">„Aidas"</span>
                </h1>
                <p className="font-inria text-base sm:text-lg text-black max-w-[400px]">
                  Klausos negalios šeimų bendrija „Aidas" - tai bendruomenė,
                  skirta klausos negalią turinčių šeimų palaikymui ir pagalbai
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full px-4 sm:px-8 lg:px-[88px] py-12 sm:py-16 lg:py-[80px] bg-white">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="w-12 h-12 bg-aidas-blue rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h2 className="font-inria text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mb-8">
              Mūsų misija
            </h2>
            <p className="font-inria text-base sm:text-lg text-black/70 max-w-[800px] mx-auto">
              Siekiame sukurti stiprią ir palaikančią bendruomenę, kuri padėtų
              klausos negalią turinčioms šeimoms jaustis supratoms, palaikomoms
              ir integruotoms visuomenėje.
            </p>
          </div>
        </section>

        {/* Vision Section */}
        <section className="w-full px-4 sm:px-8 lg:px-[88px] py-12 sm:py-16 lg:py-[80px] bg-gray-50">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="w-12 h-12 bg-aidas-blue rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <h2 className="font-inria text-2xl sm:text-3xl lg:text-[36px] font-bold text-black mb-8">
              Mūsų vizija
            </h2>
            <p className="font-inria text-base sm:text-lg text-black/70 max-w-[800px] mx-auto">
              Stipri bendruomeniškai ir socialiai lygiaveriška aplinka auginti
              vaikus su klausos negalia.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full px-[88px] py-[80px] bg-white">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-inria text-[36px] font-bold text-black text-center mb-12">
              Mūsų komanda
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-inria text-xl font-bold text-black mb-2">
                  Kristina Rimkienė
                </h3>
                <p className="font-inria text-aidas-blue">Pirmininkė</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-inria text-xl font-bold text-black mb-2">
                  Simona Petrovskaja
                </h3>
                <p className="font-inria text-aidas-blue">
                  Pirmininkės pavaduotoja
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-inria text-xl font-bold text-black mb-2">
                  Virga Rimkuvienė
                </h3>
                <p className="font-inria text-aidas-blue">
                  Lietuvių gestų kalbos vertėja, terapeutė
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-inria text-xl font-bold text-black mb-2">
                  Vaida Rauktienė
                </h3>
                <p className="font-inria text-aidas-blue">Savanonė</p>
              </div>

              {/* Team Member 5 */}
              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-inria text-xl font-bold text-black mb-2">
                  Šarūnė Tilvikaitė
                </h3>
                <p className="font-inria text-aidas-blue">Savanonė</p>
              </div>

              {/* Team Member 6 */}
              <div className="bg-gray-200 rounded-lg p-6 text-center">
                <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <h3 className="font-inria text-xl font-bold text-black mb-2">
                  Nina Šamakova
                </h3>
                <p className="font-inria text-aidas-blue">Savanonė</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full px-[88px] py-[80px] bg-gray-50">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-inria text-[36px] font-bold text-black text-center mb-12">
              Mūsų vertybės
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Value 1 */}
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="w-12 h-12 bg-aidas-blue rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="font-inria text-2xl font-bold text-black mb-4">
                  Parama ir supratimas
                </h3>
                <p className="font-inria text-base text-black/70">
                  Teikiame emocinę paramą ir praktišką pagalbą šeimoms,
                  susidūrusioms su klausos negalios iššūkiais.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-gray-200 rounded-lg p-8">
                <div className="w-12 h-12 bg-aidas-blue rounded-lg flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="font-inria text-2xl font-bold text-black mb-4">
                  Bendruomeniškumas
                </h3>
                <p className="font-inria text-base text-black/70">
                  Skatinami tarpusavio ryšiai ir bendravimu tarp šeimų,
                  dalijanties patirtimi ir žiniomis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full px-[88px] py-[80px] bg-aidas-blue">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 className="font-inria text-[36px] font-bold text-white mb-8">
              Susisiekite su mumis
            </h2>
            <p className="font-inria text-lg text-white mb-12">
              Turite klausimų ar norite prisijungti prie mūsų bendruomenės?
              Mielai išgirsime iš jūsų!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              {/* Phone */}
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="font-inria text-xl font-bold mb-2">Telefonas</h3>
                <p className="font-inria text-base">+370 000 0000</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="font-inria text-xl font-bold mb-2">
                  El. paštas
                </h3>
                <p className="font-inria text-base">bendruomene@aidas.lt</p>
              </div>

              {/* Address */}
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-white rounded"></div>
                </div>
                <h3 className="font-inria text-xl font-bold mb-2">Adresas</h3>
                <p className="font-inria text-base">Sėmėnų g. 2, Kaunas</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
