import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomeSections } from "./components/HomeSections";
import { WhatsAppChat } from "./components/WhatsAppChat";

export default function App() {
    return (
        <>
            <Header />
            <main><HomeSections /></main>
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
