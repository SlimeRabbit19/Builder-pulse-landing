import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full min-h-[118px] border border-black bg-white flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 lg:px-[85px] py-4 sm:py-0">
      {/* Logo */}
      <div className="flex items-center mb-4 sm:mb-0">
        <div className="w-[120px] sm:w-[145px] h-[80px] sm:h-[97px] flex items-center justify-center">
          {/* Logo with background image */}
          <div
            className="w-full h-full bg-gray-200 rounded flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://cdn.builder.io/api/v1/image/assets%2F798047acf0eb4eac841acf7aa9d1acd8%2F14a3a7a737f14a2e98eb6a8bdaa261d2)",
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-2 sm:gap-4 lg:gap-8">
        <Link
          to="/"
          className={`flex items-center justify-center w-[120px] sm:w-[157px] h-[60px] sm:h-[101px] font-inria text-lg sm:text-2xl font-bold text-center ${
            location.pathname === "/"
              ? "text-aidas-blue"
              : "text-black hover:text-aidas-blue transition-colors"
          }`}
        >
          Pradžia
        </Link>
        <Link
          to="/apie-mus"
          className={`flex items-center justify-center w-[120px] sm:w-[157px] h-[60px] sm:h-[101px] font-inria text-lg sm:text-2xl font-bold text-center ${
            location.pathname === "/apie-mus"
              ? "text-aidas-blue"
              : "text-black hover:text-aidas-blue transition-colors"
          }`}
        >
          Apie mus
        </Link>
      </nav>
    </header>
  );
};

export default Header;
