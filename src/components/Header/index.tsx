import logo from "../../assets/image.png";
import { IoSunnyOutline } from "react-icons/io5";

function Header() {
  return (
    <div className="bg-[#1f2535] h-17.5 rounded-[20px] w-full max-w-[1080px] flex items-center justify-between my-12.5">
      <div className="flex items-center">
         <img className="w-15 h-15" src={logo} alt="Logo" />
        <h2 className="text-[#f9fefff1] font-bold text-xl">Extensões</h2>
      </div>
      <div className="bg-[#2F354D] w-12 h-12 flex items-center justify-center rounded-[10px] mr-4">
        <IoSunnyOutline size={25} color={"#FFFFFF"} />
      </div>
    </div>
  );
}

export default Header;
