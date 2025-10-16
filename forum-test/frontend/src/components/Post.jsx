
import { FaThumbsDown,FaComments, FaThumbsUp,} from "react-icons/fa"
export default ({post})=>{
    return(
        <>
<div className="flex rounded-lg p-5 flex-col shadow">
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    <img  src={post.image} alt="image" style={{ width: '200px', height: 'auto', borderRadius: '8px' }}/>
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