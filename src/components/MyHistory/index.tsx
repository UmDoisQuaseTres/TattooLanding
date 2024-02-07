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
          <h1 className="text-[50px] lg:text-7xl lg:leading-[108%] mb-5">
            Minha
            <br /> história:
          </h1>
          <h1 className="lg:text-lg lg:leading-[187%] font-sans">
            Trabalhando com tatuagens desde 2000, trilhando um caminho de
            desafios, supereações e muitos investimentos. Venha conhecer meu
            trabalho. É só clicar no botão abaixo:
          </h1>
          <div
            className="flex lg:justify-center items-center mt-10 mb-10 lg:mb-0 
              "
          >
            <button className="text-lg cursor-pointer h-[37px] w-[97px] lg:h-[67px] lg:w-[193px] border-black border-2 rounded-sm">
              SAIBA MAIS
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
