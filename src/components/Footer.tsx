import Logo from "../assets/whiteLogo.svg"

const Footer = () => {
  const menu = [
    {
      id: 1,
      name: "Terms of Service",
    },
    {
      id: 2,
      name: "Policy service",
    },
    {
      id: 3,
      name: "Cookies Policy",
    },
    {
      id: 4,
      name: "Partners",
    },
  ];
  return (
    <div className="">
      <div className="bg-[#34967C] h-7"></div>

      <div className="bg-[#222222] px-10">
        <div className="grid grid-cols-3">
          <div className="border">
            <img src={Logo} alt="" />
            <h1 className="text-[#CACACA]">Test</h1>
          </div>

          <div className="border col-span-2">
            <h1 className="text-[#CACACA]">Test</h1>

            <h1 className="text-[#CACACA]">Test</h1>
            <h1 className="text-[#CACACA]">Test</h1>
          </div>
        </div>

        <div className="text-[#CACACA] space-y-10 lg:space-y-0 lg:flex lg:flex-row text-center justify-between py-5 border-t border-[#FFFFFF17]">
          <h1 className="text-[16px] clear-start">
            Some hotel requires you to cancel more than 24 hours before
            check-in. Details{" "}
            <span className="text-[#34967C] cursor-pointer">here</span>
          </h1>

          <div className="flex flex-row gap-10 justify-center items-center">
            {menu?.map((item) => (
              <h1 key={item?.id} className="cursor-pointer">
                {item?.name}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
