import Image from "next/image";
import numberone from "@/public/numberone.svg";

export default function MyHistory() {
  return (
    <main className="flex w-full items-center justify-center">
      <section
        id="myhistory "
        className="flex w-full max-w-[1280px] items-center justify-center"
      >
        <div className=" flex w-full">
          <Image
            src={numberone}
            priority
            alt="number one"
            height={600}
            width={500}
          />
        </div>
        <div id="legend" className="w-full ">
          <h1 className="text-7xl leading-[108%] mb-5">
            Minha
            <br /> história:
          </h1>
          <h1 className="text-lg leading-[187%] font-sans">
            Trabalhando com tatuagens desde 2000, trilhando um caminho de
            desafios, superações e muitos investimentos. Venha conhecer meu
            trabalho.
          </h1>
          <div
            className="flex justify-center items-center mt-10 
              "
          >
            <button className="text-lg cursor-pointer h-[67px] w-[193px] border-black border-2">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
