import Header from "../components/header";

export default function Home() {
    return (
        <div className="h-screen animated-bg">
            <Header/>
            <main>
                <h2 className="text-gray-400">Type something</h2>
            </main>
        </div>
    )
}
