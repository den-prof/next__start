import { FC, PropsWithChildren } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";


const Layout: FC<PropsWithChildren> = ({children}) => {
    return(
        <>
            <Header/>
            <main className="container">
                {children}
            </main>
            <Footer/>
        </>
    )
}

export default Layout