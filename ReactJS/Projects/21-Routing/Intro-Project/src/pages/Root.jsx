import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
// import classes from "./root.module.css";

export default function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}