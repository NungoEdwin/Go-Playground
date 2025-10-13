import { Link } from "react-router-dom"
function Login() {

  return (
    <>
    <div>
    <div className="navigation-bar flex justify-between mb-50 shadow py-4 rounded">
        {/* NavBar */}
    <h1 className="projectname text-3xl font-bold text-blue-500 ">Forum</h1>
    <div className="nav-options font-medium text-blue-400 basis-1/2">
      <ul className="flex justify-around">
        <Link className='nav-btns' to="/">Home</Link> 
        <Link className='nav-btns' to="/signup">Signup</Link> 
        <li className='nav-btns'><a href=""></a>Contact</li>
      </ul>
    </div>
    </div>
    {/* LoginForm Area*/}
    <div className="content flex  items-center justify-center align-middle mx-auto my-0">

    <form action="" className="p-35  rounded-2xl shadow-2xl">
      <label>Username/Email: </label>
      <input type="email" className="bg-gray-200 rounded p-1 mb-1 " placeholder="example@yahoo.com"/>
      <br></br><label>Password: </label>
      <input type="password" className="bg-gray-200 rounded p-1"/>
      <br />
      <input type="button" className="bg-gray-700 p-2.5 text-blue-500 rounded cursor-grab" value="Submit"/>
    </form>
    </div>
    
   </div>
      
    </>
  )
}

export default Login
