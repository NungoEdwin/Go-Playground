import { Link } from "react-router-dom"
export default ()=>{
    return(
        <>
        <div className="navigation-bar flex justify-between mb-50 shadow py-4 rounded">
        {/* NavBar */}
    <h1 className="projectname text-3xl font-bold text-blue-500 ">Forum</h1>
    <div className="nav-options font-medium text-blue-400 basis-1/2">
      <ul className="flex justify-around">
        <Link className='nav-btns' to="/">Home</Link> 
        <Link className='nav-btns' to="/signup">Signup</Link> 
       <Link className='nav-btns' to="/login">Login</Link> 
      </ul>
    </div>
    </div></>
    )
}