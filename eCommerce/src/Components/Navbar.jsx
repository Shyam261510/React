import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import { useStore } from "../Context";
import toast from "react-hot-toast";
const Navbar = () => {
  const { category, setFilterData, filterData, cartData, login, setLogin } =
    useStore();
  useEffect(() => console.log(filterData), [filterData]);
  const [visible, setVisisble] = useState(false);
  return (
    <div className=" w-full h-[3.5rem] flex justify-between p-2 items-center shadow-lg shadow-gray-500/50  ">
      <div className="font-bold text-xl text-purple-600 ">
        <NavLink to="/">eCommerce</NavLink>
      </div>
      <div className="flex gap-[2rem]">
        <NavLink to="/cart">
          <div className="relative">
            <div className="absolute top-[-.5rem] left-3 h-5 w-5 flex items-center justify-center rounded-full  text-white text-xs font-bold bg-purple-400">
              <h2>{cartData.length}</h2>{" "}
            </div>

            <ShoppingCartIcon className="text-purple-600" />
          </div>
        </NavLink>
        {/* <h2
          className=" relative cursor-pointer text-purple-700 "
          onClick={() => setVisisble((prev) => !prev)}
        >
          <span>{filterData}</span>{" "}
          <span>
            <ArrowDropDownIcon />
          </span>
        </h2> */}
        {visible && (
          <ul className="flex flex-col absolute  top-[3rem] right-[3rem] p-4 z-2 bg-white ">
            {category.map((data) => (
              <li
                key={data.id}
                className="list-none  text-purple-600 hover:hover:text-purple-800 cursor-pointer hover:font-bold"
                onClick={() => (
                  setFilterData(data.category), setVisisble(false)
                )}
              >
                {data.category}
              </li>
            ))}
          </ul>
        )}

        <div>
          {login ? (
            <LogoutIcon
              onClick={() => (setLogin(false), toast.success("LogOut"))}
              className="text-purple-600"
            />
          ) : (
            <NavLink to="/login">
              {" "}
              <LoginIcon className="text-purple-600" />{" "}
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
