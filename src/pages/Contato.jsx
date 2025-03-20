import Header from "../components/Header";
import Footer from "../components/Footer";
import Contato from "../components/Contatos";
export default function Home() {
  return (
    <main className=" flex-col flex items-center w-full">
      <Header />
      <Contato/>
      <Footer />
    </main>
  );
}
