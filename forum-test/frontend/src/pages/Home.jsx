import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"

export default function Home(){
    return(
        <>
        <Navbar></Navbar>
        <div className=" grid  grid-cols-8 gap-5 items-start">
            <div className="bg-blue-300 col-start-1 col-end-3 h-screen"><Sidebar/></div>
            <div className="bg-amber-300 col-start-3 col-end-7">Balaa</div>
            <div className="bg-green-200 col-start-7 col-end-9">Caala</div>
        
        </div>
        
        </>
    )
}