import Image from "next/image";
import numberone from "@/public/numberone.svg";

export default function MyHistory() {
  return (
    <section className="flex w-full mt-16 max-w-[1280px] items-center">
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
          desafios, supereações e muitos investimentos. Venha conhecer meu
          trabalho. É só clicar no botão abaixo:
        </h1>
        <div
          className="flex justify-center items-center mt-10 h-[67px] w-[193px] border-black border-2
              "
        >
          <button className="text-lg cursor-pointer">SAIBA MAIS </button>
        </div>
      </div>
    </section>
  );
}
