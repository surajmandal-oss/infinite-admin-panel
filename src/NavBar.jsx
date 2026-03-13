import { NavLink } from "react-router";
import { GoHome } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { LuUserCheck } from "react-icons/lu";
import { GoMegaphone } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { HiOutlineUserGroup } from "react-icons/hi2";
import "./App.css";
export default function NavBar() {
  return (
    <div className="navBar">
      <div className="links flex  flex-col gap-[20px] text-[12px] py-[15px] px-[10px]">
        <NavLink to="/">
          <div className="icon">
            <GoHome size="17" />
          </div>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/users">
          <div className="icon">
            <LuUsers size="17" />
          </div>
          <span>Users</span>
        </NavLink>
        <NavLink to="/leads">
          <div className="icon">
            <LuUserCheck size="17" />
          </div>
          <span>Leads</span>
        </NavLink>
        <NavLink to="/campalgns">
          <div className="icon">
            <GoMegaphone size="17" />
          </div>
          <span>Campalgns</span>
        </NavLink>
        <NavLink to="/setting">
          <div className="icon">
            <IoSettingsOutline size="17" />
          </div>
          <span>Settings</span>
        </NavLink>
        <NavLink to="/contributing">
          <div className="icon">
            <LiaHandsHelpingSolid size="17" />
          </div>
          <span>Contributing</span>
        </NavLink>
        <NavLink to="/myTeam">
          <div className="icon">
            <HiOutlineUserGroup size="17" />
          </div>
          <span>My Team</span>
        </NavLink>
      </div>
    </div>
  );
}
