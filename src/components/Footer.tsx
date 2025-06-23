const Footer = () => {
  return (
    <footer className="w-full min-h-[255px] bg-[#F5F5F5] flex flex-col items-center justify-center py-8 px-4">
      {/* Logo */}
      <div className="w-[107px] h-[71px] flex items-center justify-center mb-6">
        <div className="text-aidas-blue font-inria font-bold text-xl">
          aidas
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center justify-center max-w-[413px]">
        <h3 className="text-black text-center font-inria text-xl sm:text-2xl font-normal leading-normal">
          Klausos negalios šeimų bendrija
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
