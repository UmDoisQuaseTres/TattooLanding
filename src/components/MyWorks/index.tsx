import Image from "next/image";
import grid from "../../../public/grid.png";

export default function MyWork() {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <section id="work" className="flex max-w-[1280px]">
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] lg:text-[84px] lg:leading-[104%] ml-10">
            Confira meus trabalhos:
          </h1>
        </div>
        <div>
          <Image src={grid} alt="Gallery" />
        </div>
      </section>
      <div className="flex lg:mt-10">
        <button className="text-sm lg:text-[15px] text-white pt-3 pb-3 w-[88px] h-[35px] lg:w-[176px] lg:h-[70px] bg-black rounded-[4px]">
          VER TUDO
        </button>
      </div>
    </main>
  );
}
