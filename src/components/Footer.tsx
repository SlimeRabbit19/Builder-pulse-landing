const Footer = () => {
  return (
    <footer className="w-full h-[255px] bg-[#F5F5F5] flex items-center justify-center relative">
      {/* Logo */}
      <div className="absolute top-[61px] w-[107px] h-[71px] flex items-center justify-center">
        <div className="text-aidas-blue font-inria font-bold text-xl">
          aidas
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center justify-center w-[413px] h-[72px] mt-[69px]">
        <h3 className="text-black text-center font-inria text-2xl font-normal leading-normal">
          Klausos negalios šeimų bendrija
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
