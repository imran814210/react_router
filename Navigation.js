import { Link, Navigate, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Admin from './Admin';
import User from './User'
const USER_TYPE={
    ADMIN_USER:'admin user',
    NORMAL_USER:'normal user',
    ALL_USER:'all user'
};
const CURRENT_USER=USER_TYPE.ALL_USER;
function Navigation(){
    // function adminElement({children}){
    //     if(CURRENT_USER===USER_TYPE.ADMIN_USER){
    //         return<>{children}</>
    //     }            
    //     else {
    //         return <div>You have not right to access</div>
    //         //return <Navigate to={"/"}/>
    //      }
    // }
    function adminElement(component){
        return CURRENT_USER===USER_TYPE.ADMIN_USER?component:<><div>You have not enough permission to access this page</div></>
    }
    function userElement(component){
        return CURRENT_USER===USER_TYPE.ALL_USER?component:<Navigate to={'/'}/>
    }
    return(
        <>
        <h1>Hello Navigation</h1>
            {/* <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='*' element={<div>Page Not Found</div>}></Route>
            </Routes> */}
            <div style={{display:'flex', gap:12,padding:8}}>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                {CURRENT_USER===USER_TYPE.ADMIN_USER?<Link to={'/contact'}>Contact</Link>:""}
                <Link to={'/user'}>All User</Link>
                <Link to={'/admin'}>Admin</Link>
                <div>You are logged in as a {CURRENT_USER}</div>
            </div>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/admin' element={adminElement(<Admin/>)}></Route>
                {/* <Route path='/admin' element={<adminElement><Admin/></adminElement>}></Route> */}
                <Route path='/user' element={userElement(<User/>)}></Route>
                <Route path='*' element={<div>Page Not Found</div>}></Route>
            </Routes>
        </>
    )




}
export default Navigation;