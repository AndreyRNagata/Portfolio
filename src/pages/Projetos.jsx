import Header from "../components/Header";
import Projeto from "../components/ListaProjetos";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className=" flex-col flex items-center w-full">
      <Header />
      <Projeto />
      <Footer />
    </main>
  );
}
