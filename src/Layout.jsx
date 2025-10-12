import { Outlet } from "react-router-dom";
import NavBar from './NavBar';

export default function Layout() {
    return (
        <> 
        <NavBar />
        <Outlet />{/*  Didnt understand this part  -> Think it holds the current component.*/}
        
        </>
    )
}
