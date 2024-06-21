import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    //console.log(location.pathname);
    function pathMathRoute(route) {
        if(route === location.pathname) {
            return true;
        }
    }
  return (
    <div className="bg-slate-50 border-b shadow-sm sticky top-0 z-50">
      <header className="flex items-center justify-between px-3 max-w-6xl mx-auto">
            <div className="flex items-center gap-2 font-semibold cursor-pointer text-gray-700 text-2xl">
               <img src="/favicon1.ico" alt="Logo" className="h-12 cursor-pointer" onClick={() => navigate("/")}/> 
               <h2 className="">Edi_CeM24</h2>
            </div>
            <div>
               <ul className="flex space-x-10 cursor-pointer">
                  <li className={`py-3 text-sm font-semibold text-black border-b-[3px] border-transparent ${pathMathRoute("/") && "text-gray-800 border-b-red-900"}`} onClick={() => navigate("/")}>Home</li>
                  <li className={`py-3 text-sm font-semibold text-black border-b-[3px] border-transparent ${pathMathRoute("/offers") && "text-gray-800 border-b-red-900"}`} onClick={() => navigate("/offers")}>Offers</li>
                  <li className={`py-3 text-sm font-semibold text-black border-b-[3px] border-transparent ${pathMathRoute("/sign-in") && "text-gray-800 border-b-red-900"}`} onClick={() => navigate("/sign-in")}>Sign In</li>
                </ul> 
            </div>
      </header>
    </div>
  )
}
