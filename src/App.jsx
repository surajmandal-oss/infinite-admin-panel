import { FaAngleDown } from "react-icons/fa";
import "./App.css";
import Identity from "./Identity";
import { Route, Routes } from "react-router";
import NavBar from "./NavBar";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { lazy, Suspense, useState } from "react";
const Dashboard = lazy(() => import("./Dashboard"));
const Users = lazy(() => import("./Users"));
const Leads = lazy(() => import("./Leads"));
const Campalgns = lazy(() => import("./Campalgns"));
const Setting = lazy(() => import("./Setting"));
const Contributing = lazy(() => import("./Contributing"));
const MyTeam = lazy(() => import("./MyTeam"));
function App() {
  const [admin, setAdmin] = useState(false);

  return (
    <>
      <div>
        {admin ? (
          <div className="w-[18%] bg-[#ffffff] h-[30vh] flex flex-col items-center justify-center border-[1.37px] border-solid border-[#dedede] rounded-[12px] absolute right-[20px] top-[50px] text-[#a7a4a4]">
            <div
              onClick={() => setAdmin(!admin)}
              className="absolute top-[-6px] right-[-5px]"
            >
              <RxCross2 style={{ color: "#000000" }} />
            </div>
            <form action="">
              <h6>Admin Details</h6>
              <div className="inputFields flex flex-col gap-[8px]">
                <input type="text" placeholder="Admin Name" required />
                <input type="email" placeholder="Admin Email" required />
                <button
                  style={{ borderRadius: "5px" }}
                  className="border-[1.37px] border-solid border-[#dedede] bg-[#7070ed] text-[#ffffff] p-[5px] font-[600]"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
      <div className="h-[45px] flex bg-[#ffffff] justify-center items-center border-b-[1.37px] border-solid border-[#dedede]">
        <div className="w-[15%] h-[100%] border-r-[1.37px] border-solid border-[#dedede] px-[10px] flex items-center">
          <h6>Infinite Solar LLP</h6>
        </div>
        <div className="w-[85%] h-[100%] flex justify-between items-center px-[40px]">
          <div className="containerRightStyle">
            <input
              className="py-[3px] pr-[3px] pl-[25px] bg-[#dedede] border-none rounded-[10px] w-[200px] placeholder:text-[12px] font-[500]"
              type="search"
              placeholder="Search..."
              spellCheck="false"
            />
          </div>
          <div className="containerRightDetail">
            <Identity />
            <div className="icon">
              <FaAngleDown
                style={{
                  fontSize: "13px",
                  color: "#a7a4a4",
                }}
                onClick={() => setAdmin(!admin)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-[calc(100vh-45px)] w-[100%] flex box-border">
        <div className="flex flex-col justify-between h-[100%] bg-[#ffffff] w-[15%] border-r-[1.37px] border-solid border-[#dedede]">
          <div className="navLinks">
            <NavBar />
          </div>
          <div className="flex items-center justify-between text-[13px] border-t-[1.37px] border-solid border-[#dedede] pt-[15px] pr-[15px] pb-[10px] pl-[10px] cursor-pointer">
            <Identity />
            <FaArrowRightFromBracket />
          </div>
        </div>
        <div className="w-[calc(100%-15%)] py-[5px] px-[70px] bg-[#efeaea]">
          <Suspense fallback={<h2>Loading...</h2>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/campalgns" element={<Campalgns />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/contributing" element={<Contributing />} />
              <Route path="/myTeam" element={<MyTeam />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
