import { Outlet } from "react-router-dom";
import NavBarDesktop from "./components/NavBarDesktop";
import Footer from "./components/Footer";
import NavBarMobile from "./components/NavBarMobile";

function App() {
  return (
    <>
      <main className="flex flex-col lg:grid lg:grid-cols-[260px_minmax(0,1fr)] w-full border-red-600 border-2">
        <NavBarMobile />
        <section className=" lg:col-span-1 flex flex-col fixed h-screen top-0 ">
          <NavBarDesktop />
        </section>
        <section className="lg:col-start-2 min-h-screen w-full bg-gray-400 flex flex-col">
          <section className="min-h-screen">{<Outlet />}</section>
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
