import { Link ,useLocation} from "react-router-dom"
export default ()=>{
  const {pathname}=useLocation();
    return(
        <>
        <div className="navigation-bar flex justify-between mb-5 shadow py-4 rounded">
        {/* NavBar */}
    <h1 className="projectname text-3xl font-bold text-blue-500 ">Forum</h1>
    <div className="nav-options font-medium text-blue-400 basis-1/4">
      <ul className="flex  justify-between">
        {pathname==='/'&& <>
        <Link className='nav-btns' to="/signup">Signup</Link> 
       <Link className='nav-btns' to="/login">Login</Link> </>
       }
       {pathname==='/signup'&& <>
        <Link className='nav-btns' to="/">Home</Link> 
       <Link className='nav-btns' to="/login">Login</Link> </>
       }

        {pathname==='/login'&& <>
        <Link className='nav-btns' to="/">Home</Link> 
        <Link className='nav-btns' to="/signup">Signup</Link> </>
       }
      </ul>
    </div>
    </div>
    </>
    )
}