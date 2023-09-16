import Header from "../components/header";
import CtaSection from "../components/cta-section";
import Footer from "../components/footer";

export default function Home() {
    return (
        <div className="animated-bg">
            <Header/>
            <main className="px-6 sm:px-8 md:px-12">
                <CtaSection/>
            </main>
            <Footer/>
        </div>
    )
}
