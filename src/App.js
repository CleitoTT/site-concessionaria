import AreaCentro from "./components/AreaCentro";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="w-screen h-screen bg-[#E10029] flex flex-col items-center">
      <Header />
      <AreaCentro />
    </div>
  );
}