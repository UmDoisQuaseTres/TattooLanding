"use client";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: String;
  email: String;
  message: String;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <main className="flex w-full items-center justify-center mt-20">
      <footer className="flex w-full max-w-[1280px] h-[250px] bg-footer justify-center items-center">
        <div>
          <h1 className="text-white">
            Leandro Viana - Tatuador profissional - todos os direitos
            reservados.2024.
          </h1>
          <div
            id="socialMedia"
            className="flex gap-2 justify-center mt-14 items-center pr-[18px]"
          >
            <button id="Facebook" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={40}
                height={40}
                viewBox="0 0 30 30"
              >
                <path d="M15 3C8.373 3 3 8.373 3 15c0 6.016 4.432 10.984 10.206 11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475 1.693-5 4.581-5 1.383 0 2.115.103 2.461.149v2.753h-1.97c-1.226 0-1.654 1.163-1.654 2.473v1.724h3.593l-.487 3.154h-3.106v8.697C22.481 26.083 27 21.075 27 15c0-6.627-5.373-12-12-12z" />
              </svg>
            </button>
            <button id="Instagram" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={40}
                height={40}
                viewBox="0 0 30 30"
              >
                <path d="M9.998 3C6.139 3 3 6.142 3 10.002v10C3 23.861 6.142 27 10.002 27h10C23.861 27 27 23.858 27 19.998v-10C27 6.139 23.858 3 19.998 3h-10zM22 7a1 1 0 110 2 1 1 0 010-2zm-7 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0 2a4 4 0 00-4 4 4 4 0 004 4 4 4 0 004-4 4 4 0 00-4-4z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </main>
  );
}
