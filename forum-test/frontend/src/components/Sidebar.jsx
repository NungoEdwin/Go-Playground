import { FaHome,FaUser,FaCog,FaSignOutAlt } from "react-icons/fa";
export default ()=>{
    return(
        <>
        <div className="flex flex-col gap-5">
        <ElementItem icon={<FaHome/>} label="Home"/>
        <ElementItem icon={<FaUser/>} label="Profile"/>
        <ElementItem icon={<FaSignOutAlt/>} label="SignOut"/>
        <ElementItem icon={<FaCog/>} label="Settings"/>

        </div>
        
        </>
    )
};
const ElementItem=(props)=>{
    return(<div className="flex gap-1">
        <span className="text-2xl">{props.icon}</span>
        <span className="text-xl">{props.label}</span>
    </div>
    )
};
