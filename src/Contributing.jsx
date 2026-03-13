import { LiaHandsHelpingSolid } from "react-icons/lia";
import "./App.css";
import { CiCalendar, CiFilter } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { LuPhone } from "react-icons/lu";
import { BsBox } from "react-icons/bs";
import { GoMegaphone } from "react-icons/go";
import { CgEye } from "react-icons/cg";
export default function Contributing() {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="contriHeading flex flex-col">
        <h3>
          <LiaHandsHelpingSolid size="25" color="#1449bd" /> Contributing Leads
        </h3>
        <span className="text-[13px] text-[#757171]">
          Leads you are contributing to (1 total)
        </span>
      </div>
      <div className="contributingInputFields w-[100%] bg-[#ffffff] p-[10px] border-[1.37px] border-solid border-[#dedede] rounded-[7px]">
        <button
          type="button"
          style={{ fontSize: "13px" }}
          className="border-[1px] border-solid border-[#b9b1b1] flex items-center gap-2  p-[5px] hover:bg-[#918f8f] hover:text-[#ffffff] transition duration-200"
        >
          <CiFilter /> Filters
          <IoIosArrowUp className="text-[11px] opacity-45" />
        </button>
        <div className="w-[100%] border-[1px] border-solid border-[#dedede] mb-[7px]"></div>
        <div className="flex flex-wrap gap-[15px]">
          <div className="contributingInfo">
            <label htmlFor="name">Contact Name</label>
            <input
              id="name"
              type="text"
              placeholder="Search by contact name..."
            />
          </div>
          <div className="contributingInfo">
            <label htmlFor="mobile">Contact Mobile</label>
            <input
              id="mobile"
              type="text"
              placeholder="Search by mobile number..."
            />
          </div>
          <div className="contributingInfo">
            <label htmlFor="lead">Lead Stage</label>
            <select name="" id="lead">
              <option value="">All Stages</option>
              <option value="">option1</option>
              <option value="">option2</option>
            </select>
          </div>
          <div className="contributingInfo">
            <label htmlFor="product">Product</label>
            <select name="" id="product">
              <option value="">All products</option>
              <option value="">option1</option>
              <option value="">option2</option>
            </select>
          </div>
          <div className="contributingInfo">
            <label htmlFor="campaign">Campaign</label>
            <select name="" id="campaign">
              <option value="">All campaigns</option>
              <option value="">option1</option>
              <option value="">option2</option>
            </select>
          </div>
          <div className="contributingInfo">
            <label htmlFor="state">State</label>
            <select name="" id="state">
              <option value="">All States</option>
              <option value="">option1</option>
              <option value="">option2</option>
            </select>
          </div>
          <div className="contributingInfo">
            <label htmlFor="district">District</label>
            <select name="" id="district">
              <option value="">All Districts</option>
              <option value="">option1</option>
              <option value="">option2</option>
            </select>
          </div>
          <div className="contributingInfo">
            <label htmlFor="callFrom">Contact Mobile</label>
            <input id="callFrom" type="date" />
          </div>
          <div className="contributingInfo">
            <label htmlFor="callTo">Next Call To</label>
            <input id="callTo" type="date" />
          </div>
          <div className="contributingInfo">
            <label htmlFor="createdFrom">Created From</label>
            <input id="createdFrom" type="date" />
          </div>
          <div className="contributingInfo">
            <label htmlFor="createdTo">Created To</label>
            <input id="createdTo" type="date" />
          </div>
          <div className="contributingInfo">
            <label htmlFor="updatedFrom">Updated From</label>
            <input id="updatedFrom" type="date" />
          </div>
          <div className="contributingInfo">
            <label htmlFor="updatedTo">Updated To</label>
            <input id="updatedTo" type="date" />
          </div>
        </div>
      </div>
      <div className="w-[100%] border-[1.37px] border-solid border-[#dedede] rounded-[7px] overflow-hidden">
        <div className="dataHeading flex justify-between items-center bg-[#e7e8ec] py-[10px] border-b-[1.37px] border-solid border-[#dedede]">
          <h6>CONTACT INFO</h6>
          <h6>STAGE</h6>
          <h6>PRODUCT</h6>
          <h6>CAMPAIGN</h6>
          <h6>NEXT CALL</h6>
          <h6>ASSIGNED TO</h6>
          <h6>ACTIONS</h6>
        </div>
        <div className="data py-[10px] flex justify-around items-center bg-[#ffffff]">
          <div className="flex flex-col items-center">
            <label className="text-[10px] font-[600]" htmlFor="">
              Rafiq
            </label>
            <div className="userDetail ud">
              <div className="userIcon">
                <LuPhone />
              </div>
              <div className="number">9758423682</div>
            </div>
          </div>
          <div className="leadButton">
            <button>Lead</button>
          </div>
          <div className="userProduct ud">
            <div className="userIcon">
              <BsBox />
            </div>
            <label htmlFor="">3KW On-Grid</label>
          </div>
          <div className="userCampaign ud">
            <div className="userIcon">
              <GoMegaphone />
            </div>
            <label htmlFor="">Online FB Ad</label>
          </div>
          <div className="userCall ud">
            <div className="userIcon">
              <CiCalendar />
            </div>
            <label htmlFor="">Feb 28,2026</label>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="" className="text-[10px] font-[600]">
              Suman Haldar
            </label>
            <div className="text-[9px]">infinitesolor27@gmail.com</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="userIcon eyeIcon">
              <CgEye />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] border-[1.37px] border-solid border-[#dedede] rounded-[7px] py-[5px] px-[15px] text-[11px] font-[500]">
        <span>Showing 1 to 1 of 1 results</span>
      </div>
    </div>
  );
}
