import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useState } from "react";
import { useStore } from "../Context";
const Navbar = () => {
  const { category, setFilterData, filterData } = useStore();
  useEffect(() => console.log(filterData), [filterData]);
  const [visible, setVisisble] = useState(false);

  return (
    <div className="w-full h-[3.5rem] flex justify-between p-2 items-center shadow-lg shadow-gray-500/50 ">
      <div className="font-bold text-xl text-purple-600 ">
        <NavLink to="/">eCommerce</NavLink>
      </div>
      <div className="flex gap-[2rem]">
        <NavLink to="/cart">
          <ShoppingCartIcon className="text-purple-600 " />
        </NavLink>
        <h2
          className=" relative cursor-pointer text-purple-700 "
          onClick={() => setVisisble((prev) => !prev)}
        >
          <span>{filterData}</span>{" "}
          <span>
            <ArrowDropDownIcon />
          </span>
        </h2>
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

        <NavLink to="/login">
          <LoginIcon className="text-purple-600 mr-4" />
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
