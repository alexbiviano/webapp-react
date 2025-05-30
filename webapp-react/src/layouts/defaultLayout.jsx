import { Outlet } from "react-router";

const DefaultLayout = () => {
    return (
        <>
            <main className="container">
                <Outlet />
            </main>
        </>
    )
}

export default DefaultLayout; 