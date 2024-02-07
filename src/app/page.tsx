import MyHistory from "@/components/MyHistory";
import MyWork from "@/components/MyWorks";
import Image from "next/image";
import banner from "../../public/banner.png";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <main className="flex w-screen justify-center">
        <section id="about" className="flex w-screen h-screen max-w-[1280px]">
          <div
            id="image"
            className="flex max-h-[948px] h-screen max-w-[1280px] justify-center absolute"
          >
            <Image src={banner} alt="intro" priority />
          </div>
          <div id="banner-about" className="flex w-full justify-center">
            <div className="flex flex-col w-full lg:items-end items-center text-white mt-28 lg:mr-10 relative ">
              <h1 className="text-[50px] lg:text-[118px]">Eu sou Leandro.</h1>
              <p className="text-sm lg:text-[20px] font-sans lg:mr-44">
                Tatuagens tem poder, não só no corpo como na alma,
                <br /> e meu objetivo é te ajudar a alcançar esses poderes.
              </p>
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
