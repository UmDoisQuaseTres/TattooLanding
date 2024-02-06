import Image from "next/image";
import numberone from "@/public/numberone.svg";

export default function MyHistory() {
  return (
    <div>
      <section className="flex max-h-[948px] max-w-[1280px] items-center">
        <div className="w-full flex justify-between">
          <Image
            src={numberone}
            priority
            alt="number one"
            height={600}
            width={500}
          />
          <h1 className="mr-[400px] mt-[100px] text-[85px] leading-[108%]">
            Minha
            <br /> história:
          </h1>
        </div>
        <div id="legend" className="w-full max-h-[262px] mr-[150px] ">
          <h1 className="text-[18px] leading-[187%] font-sans">
            Trabalhando com tatuagens desde 2000, trilhando um caminho de
            desafios, supereações e muitos investimentos. Venha conhecer meu
            trabalho. É só clicar no botão abaixo:
          </h1>
          <div
            className="flex justify-center items-center mt-10 h-[67px] w-[193px] bg-transparent border-black border-2
              "
          >
            <button className="text-[18px] cursor-pointer">SAIBA MAIS </button>
          </div>
        </div>
      </section>
    </div>
  );
}
