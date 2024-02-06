import Image from "next/image";
import grid from "../../../public/grid.png";

export default function MyWork() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <section id="work" className="flex max-w-[1280px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[84px] leading-[104%] ml-10">
            Confira meus trabalhos:
          </h1>
        </div>
        <div>
          <Image src={grid} alt="Gallery" />
        </div>
      </section>
      <div className="flex  mt-10 ">
        <button className="text-white pt-3 pb-3 w-[176px] h-[167] bg-black rounded-[4px]">
          VER TUDO
        </button>
      </div>
    </main>
  );
}
