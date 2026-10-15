// Import Images, Logo And Icons
import KolbesabzLogo from "/src/assets/images/Kolbe-Sabz-Logo-Typography.webp";
import { Search } from "lucide-react";
import { HiOutlineLogin } from "react-icons/hi";
import { Menu } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { User } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { MapPin } from "lucide-react";

function Navbar() {
  return (
    <>
      {/* Navbar */}

      <nav className="w-full h-fit !p-5 flex items-center flex-col border border-gray-400/30">
        {/* Top Section */}

        <div className="w-full flex items-center justify-between">
          {/* Right Side(Logo And Search Box) */}

          <div className="flex items-center gap-16">
            {/* Logo */}

            <div>
              <img className="w-40" src={KolbesabzLogo} alt="Kolbe Sabz Logo" />
            </div>

            {/* Search Box */}

            <div className="flex items-center h-fit rounded-3xl overflow-hidden">
              <input
                className="w-80 h-10 !p-3 outline-none text-sm "
                type="text"
                placeholder="جست و جوی در بین محصولات..."
              />

              <div className="w-fit !p-2 rounded-l-2xl cursor-pointer group bg-[#0b7d39]">
                <Search
                  className="group-hover:scale-[1.04]"
                  color="#fff"
                  size={16}
                />
              </div>
            </div>
          </div>

          {/* Left Side (Btns) */}

          <div className="flex items-center ">
            <button className="w-32 h-9 cursor-pointer border border-[#e0e0e2] rounded-2xl flex items-center justify-center gap-2">
              <HiOutlineLogin size={22} />
              <span className="font-bold text-sm">ورود | ثبت نام</span>
            </button>
            <button className="w-32 h-9 cursor-pointer rounded-2xl flex items-center justify-center gap-2">
              <ShoppingCart />
              {/* Quantity Of Card */}
              <div className="w-4 h-4 flex items-center justify-center !pt-1 absolute top-7 left-22 bg-[#0b7d39] rounded-full text-white text-[10px]">
                <span>5</span>
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Navbar */}

        <div className="w-full h-18 flex items-center justify-between text-[#333333] font-bold !p-8 gap-4 !mt-4 ">
          {/* Options */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm cursor-pointer !ml-12">
              <Menu size={20} />
              دسته بندی محصولات
            </div>
            <div className="flex items-center gap-4 !mt-2">
              <div className="flex flex-col text-[#5c5c5c] group items-center gap-1 text-xs cursor-pointer">
                صفحه اصلی
                <div className="w-full h-0.5 duration-300 opacity-0 group-hover:opacity-100 bg-[#0b7d39]"></div>
              </div>
              <div className="flex flex-col text-[#5c5c5c] group items-center gap-1 text-xs cursor-pointer">
                شگفت انگیز ها
                <div className="w-full h-0.5 duration-300 opacity-0 group-hover:opacity-100 bg-[#0b7d39]"></div>
              </div>
              <div className="flex flex-col text-[#5c5c5c] group items-center gap-1 text-xs cursor-pointer">
                مجله ها
                <div className="w-full h-0.5 duration-300 opacity-0 group-hover:opacity-100 bg-[#0b7d39]"></div>
              </div>
              <div className="flex flex-col text-[#5c5c5c] group items-center gap-1 text-xs cursor-pointer">
                پرفروش ها
                <div className="w-full h-0.5 duration-300 opacity-0 group-hover:opacity-100 bg-[#0b7d39]"></div>
              </div>
              <div className="flex flex-col text-[#5c5c5c] group group items-center gap-1 text-xs cursor-pointer">
                <div className="flex">
                  پشتیبانی
                  <ChevronDown
                    className="duration-300 group-hover:rotate-180"
                    size={16}
                  />
                </div>
                <div className="w-full h-0.5 duration-300 opacity-0 group-hover:opacity-100 bg-[#0b7d39]"></div>
              </div>
            </div>
          </div>

          {/* Choose Address */}

          <div className="flex items-center cursor-pointer text-sm">
            <MapPin size={16} />
            <span>انتخاب آدرس</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
