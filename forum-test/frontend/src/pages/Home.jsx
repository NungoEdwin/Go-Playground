import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"
import Post from "../components/Post"
import CreatePost from "../components/Createpost"
import {useState} from 'react'

export default function Home(){
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
    return(
        <>
        <Navbar></Navbar>
        <div className="create-post flex flex-col items-center">
        {showModal&&<CreatePost closeModal={closeModal} showModal={showModal}/>}
        {!showModal&&<button className="bg-gray-700 p-2 m-1 rounded text-blue-500" onClick={openModal}>Post</button>}
        </div>
        <div className=" grid  grid-cols-8 gap-5 items-stretch">
            <div className=" col-start-1 col-end-3 h-screen rounded-2xl p-5 shadow-2xl">{<Sidebar/>}</div>
            <div className=" col-start-3 col-end-7  rounded p-5">{<Post/>}</div>
            <div className=" col-start-7 col-end-9 shadow-xl rounded p-5">Chat Area</div>
        
        </div>
        
        </>
    )
}