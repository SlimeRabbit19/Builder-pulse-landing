import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="w-full h-[118px] border border-black bg-white flex items-center justify-between px-[85px]">
      {/* Logo */}
      <div className="flex items-center">
        <div className="w-[145px] h-[97px] flex items-center justify-center">
          {/* Logo placeholder - will be updated when we have the actual logo */}
          <div className="text-aidas-blue font-inria font-bold text-2xl">
            aidas
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8">
        <Link
          to="/"
          className={`flex items-center justify-center w-[157px] h-[101px] font-inria text-2xl font-bold text-center ${
            location.pathname === "/"
              ? "text-aidas-blue"
              : "text-black hover:text-aidas-blue transition-colors"
          }`}
        >
          Pradžia
        </Link>
        <Link
          to="/apie-mus"
          className={`flex items-center justify-center w-[157px] h-[101px] font-inria text-2xl font-bold text-center ${
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
