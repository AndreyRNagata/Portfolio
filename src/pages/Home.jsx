import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main className=" flex-col flex items-center w-full">
      <Header />
      <Banner />

      <Footer />
    </main>
  );
}
