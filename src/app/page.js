import Header from "./components/header";
import Intro from "./components/intro";
import Intro2 from "./components/intro2";
import Menu from "./components/menu/menu";

export default function Home() {
  return (
    <>
      <div className="Banner">
        <Header />
        <Intro />
        <Intro2 />
      </div>
      <Menu />
    </>
  );
}
