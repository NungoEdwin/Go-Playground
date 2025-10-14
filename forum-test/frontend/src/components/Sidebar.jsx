import { FaHome } from "react-icons/fa";
export default ()=>{
    return(
        <>
        <div className="flex flex-col">
        <ElementItem icon={<FaHome/>} label="Home"/>
        <ElementItem icon={<FaHome/>} label=""/>
        <ElementItem icon={<FaHome/>} label="Home"/>

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
