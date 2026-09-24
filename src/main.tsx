import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeSections } from "./components/HomeSections";
import { LegalNotice } from "./components/LegalNotice";
import { WhatsAppChat } from "./components/WhatsAppChat";
import { useEffect, useState } from "react";

export default function App() {
    const [isLegalPage, setIsLegalPage] = useState(
        () => window.location.hash === "#mentions-legales",
    );

    useEffect(() => {
        const handleHashChange = () => {
            setIsLegalPage(window.location.hash === "#mentions-legales");
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <>
            <Header />
            {isLegalPage ? <LegalNotice /> : <main><HomeSections /></main>}
            <Footer />
        </>
    );
}

createRoot(document.getElementById("root")!).render(
    <>
        <App />
        <WhatsAppChat />
    </>,
);
