import Header from "../components/Header";
import Footer from "../components/Footer";
import Servicos from "../components/Servicos";

export default function Home() {
  return (
    <main className=" flex-col flex items-center w-full">
      <Header />
      <Servicos />
      <Footer />
    </main>
  );
}
