import App from "./components/app";
import Header from "./components/header";
import Intro from "./components/intro";
import Intro2 from "./components/intro2";
import Menu from "./components/menu/menu";
import Review from "./components/review";
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
    </>
  );
}
