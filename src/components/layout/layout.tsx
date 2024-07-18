import Navbar from "../navigation/navigation-bar/navbar";
import { Outlet } from "react-router-dom"
import Footer from "../navigation/footer/footer";


const Layout = () => {
    return (
        <>
            <header><Navbar /></header>
            <main><Outlet /></main>
            <footer><Footer /></footer>
        </>
    )
}

export default Layout;