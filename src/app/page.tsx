import InfoForm from "@/components/InfoForm";
import MyHistory from "@/components/MyHistory";
import MyWork from "@/components/MyWorks";

export default function Home() {
  return (
    <main>
      <div>
        <section
          id="about"
          className="flex w-full h-[946px] bg-[url('../../public/banner.svg')]"
        >
          <div
            id="banner-about"
            className="flex w-full items-center max-w-[1280px] "
          >
            <div className="flex flex-col w-full items-end text-white mb-40">
              <h1 className="text-[118px]">Eu sou Leandro.</h1>
              <p className="text-[20px] font-sans">
                Tatuagens tem poder, não só no corpo como na alma, e meu
                objetivo é te ajudar a alcançar esses poderes.
              </p>
              <div
                className="flex justify-center mr-[640px] mt-[50px] bg-transparent border-white border-2
              "
              >
                <button className="h-[67px] w-[193px]">Saiba mais</button>
              </div>
            </div>
          </div>
        </section>
        <MyHistory />
        <MyWork />
        <InfoForm />
      </div>
    </main>
  );
}
