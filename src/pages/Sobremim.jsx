import Header from "../components/Header";
import Footer from "../components/Footer";
import Sobremim from "../components/Sobremim";
export default function Home() {
  return (
    <main className=" flex-col flex items-center w-full">
      <Header />
      <Sobremim />
      <Footer />
    </main>
  );
}
