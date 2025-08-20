import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.svg";
import Search from "../../assets/Magnifer.svg";

const HeaderTwo = () => {
  return (
    <div className="flex flex-row justify-between items-center px-4 md:px-10 py-3">
      {/* Logo (hidden on small screens) */}
      <div className="hidden md:flex">
        <img src={Logo} alt="site logo" className="w-16 h-auto" />
      </div>

      {/* Search Section */}
      <div className="flex flex-col md:flex-row border-2 md:border-4 border-[#F6F6F6] rounded-full items-center px-4 py-2 w-full max-w-4xl gap-2 md:gap-6">
        {/* Location */}
        <div className="flex flex-col text-center md:text-left">
          <span className="text-xs font-semibold">Location</span>
          <input
            type="text"
            placeholder="Search for destination"
            className="outline-none text-sm md:text-base"
          />
        </div>

        {/* Divider (only show on desktop) */}
        <div className="hidden md:block w-px h-8 bg-gray-200"></div>

        {/* Check-in */}
        <div className="flex flex-col text-center md:text-left">
          <span className="text-xs font-semibold">Check in</span>
          <input
            type="date"
            placeholder="Add date"
            className="outline-none text-sm md:text-base"
          />
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-200"></div>

        {/* Check-out */}
        <div className="flex flex-col text-center md:text-left">
          <span className="text-xs font-semibold">Check out</span>
          <input
            type="date"
            placeholder="Add date"
            className="outline-none text-sm md:text-base"
          />
        </div>

        <div className="hidden md:block w-px h-8 bg-gray-200"></div>

        {/* People */}
        <div className="flex flex-col text-center md:text-left">
          <span className="text-xs font-semibold">People</span>
          <input
            type="number"
            placeholder="Add guest"
            className="outline-none text-sm md:text-base"
          />
        </div>

        {/* Search Button */}
        <button className="bg-[#FFA800] text-white p-3 rounded-full flex items-center justify-center">
          <img src={Search} alt="search" className="w-11" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center">
        {/* Profile icon (mobile only) */}
        <div className="lg:hidden">
          <img src={Profile} alt="profile" className="w-10 h-10 md:w-12 md:h-12" />
        </div>

        {/* Auth buttons (desktop only) */}
        <div className="hidden lg:flex lg:flex-row lg:gap-4">
          <button className="bg-[#34967C] text-white px-6 py-2 md:px-10 md:py-3 rounded-full whitespace-nowrap">
            Sign in
          </button>
          <button className="border border-[#ECECEC] text-black px-6 py-2 md:px-10 md:py-3 rounded-full whitespace-nowrap">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
