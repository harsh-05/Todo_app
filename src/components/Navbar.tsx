import { BsMoonStars } from "react-icons/bs";
import { CiGrid41, CiSearch } from "react-icons/ci";
import { LiaAtomSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    return (
      <div className=" flex justify-between">
        <div className=" flex items-center py-3 px-5 gap-3">
          {/* Button to change the state of sidebar, controlling with recoil atom. */}
          <button>
            <RxHamburgerMenu className="w-6 h-6" />
          </button>
          <span className=" flex items-center text-xl font-bold text-logoColor">
            <LiaAtomSolid className="w-8 h-8" />
            DoIt
          </span>
        </div>
        <div className=" flex justify-center items-center  py-3 px-5 gap-5">
          <button><CiSearch className="w-6 h-6 " /></button>
          <button><CiGrid41 className="w-6 h-6" /></button>
          <button><BsMoonStars className="w-6 h-6" /></button>
        </div>
      </div>
    );
}

export default Navbar;