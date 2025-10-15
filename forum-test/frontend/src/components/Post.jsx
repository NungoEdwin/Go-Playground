
import { FaThumbsDown,FaComments, FaThumbsUp,} from "react-icons/fa"
export default ()=>{
    return(
        <>
<div className="flex rounded-lg p-5 flex-col shadow">
    <p>Hey allow me to access that thing in the quagmire adventure since 1950s </p>
    <img alt="image" />
    <div className="flex justify-evenly">
       <ElementItem icon={<FaThumbsUp/>} label="Like"/> 
       <ElementItem icon={<FaComments/>} label="Chat"/> 
       <ElementItem icon={<FaThumbsDown/>} label="Unlike"/> 
    </div>
</div>


        </>
    )
}
const ElementItem=(props)=>{
    return(<div className="flex gap-1">
        <span className="text-2xl">{props.icon}</span>
        <span className="text-xl">{props.label}</span>
    </div>
    )
};