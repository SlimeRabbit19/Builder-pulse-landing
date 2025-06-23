const Footer = () => {
  return (
    <footer className="w-full min-h-[255px] bg-[#F5F5F5] flex flex-col items-center justify-center py-8 px-4">
      {/* Logo */}
      <div className="w-[107px] h-[71px] flex items-center justify-center mb-6">
        {/* Logo with background image */}
        <div
          className="w-full h-full bg-gray-200 rounded flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2F798047acf0eb4eac841acf7aa9d1acd8%2F14a3a7a737f14a2e98eb6a8bdaa261d2)",
          }}
        />
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
