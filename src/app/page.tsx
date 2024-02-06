import MyHistory from "@/components/MyHistory";
import MyWork from "@/components/MyWorks";
import Image from "next/image";
import banner from "../../public/banner.svg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex w-full items-center justify-center">
        <section id="about" className="flex w-full max-w-[1280px]">
          <div
            id="banner-about"
            className="flex w-full max-w-[1280px] justify-center"
          >
            <div
              id="image"
              className="flex w-full items-center justify-center absolute"
            >
              <Image
                src={banner}
                alt="banner-principal"
                width={1280}
                height={948}
                priority
              />
            </div>
            <div className="flex flex-col w-full items-end text-white mt-28 mr-10 relative ">
              <h1 className="text-[118px] ">Eu sou Leandro.</h1>
              <p className="text-[20px] font-sans mr-44">
                Tatuagens tem poder, não só no corpo como na alma,
                <br /> e meu objetivo é te ajudar a alcançar esses poderes.
              </p>
              <div
                className="flex justify-center mr-[460px] mt-[50px] bg-transparent border-white border-2
              "
              >
                <button className="h-[67px] w-[193px] cursor-pointer ">
                  Saiba mais
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MyHistory />
      <MyWork />
      <Footer />
    </div>
  );
}
