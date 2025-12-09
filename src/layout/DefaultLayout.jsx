import { Outlet } from "react-router-dom";
import Header from "../components/Hader";

export default function() {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <footer>Footer</footer>
        </>
    )
}