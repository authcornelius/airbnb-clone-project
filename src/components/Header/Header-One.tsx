import LogoCase from "../../assets/Case-Minimalistic.svg";

const HeaderOne = () => {
  return (
    <div className="bg-[#34967C] flex flex-row gap-[17px] justify-center items-center h-24 md:h-12 px-5">
      <img src={LogoCase} alt="Logo" className="w-6 h-6" />
      <h1 className="text-[#FFFFFF] text-[12px] md:text-[16px] text-wrap">
        Overseas trip? Get the latest information on travel guides
      </h1>

      <h1 className="text-[#FFFFFF] bg-[#161117] rounded-full px-3 py-1 text-[14px] whitespace-nowrap">
        More Info
      </h1>
    </div>
  );
};

export default HeaderOne;
