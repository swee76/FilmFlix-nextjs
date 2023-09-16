import Header from "../components/header";
import CtaSection from "../components/cta-section";
import Footer from "../components/footer";
import OurTeam from "../components/our-team";
import OurWork from "../components/our-work";

export default function Home() {
    return (
        <div className="animated-bg">
            <Header/>
            <main className="px-6 sm:px-8 md:px-12 py-5">
                <CtaSection/>
                <OurWork/>
                <OurTeam/>
            </main>
            <Footer/>
        </div>
    )
}
