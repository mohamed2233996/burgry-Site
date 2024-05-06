import App from "./components/app";
import Articls from "./components/articls/articls";
import Footer from "./components/footer";
import Header from "./components/header";
import Intro from "./components/intro";
import Intro2 from "./components/intro2";
import Menu from "./components/menu/menu";
import Offer from "./components/offer";
import Review from "./components/review";
import Subscribe from "./components/subscribe";
import Video from "./components/video";

export default function Home() {
  return (
    <>
      <div className="Banner">
        <Header />
        <Intro />
        <Intro2 />
      </div>
      <Menu />
      <Video />
      <App />
      <Review />
      <Offer />
      <Articls />
      <Subscribe />
      <Footer />
    </>
  );
}
