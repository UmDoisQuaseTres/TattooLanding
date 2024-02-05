"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import SendMail from "@/app/api/send/route";
import { z } from "zod";
import contactForm from "../stateStorage";

const infoContactFormSchema = z.object({
  name: z.string().min(2).max(60),
  email: z.string().email().min(2).max(50),
  message: z.string().min(2).max(150),
});

export type zodType = z.infer<typeof infoContactFormSchema>;

export default function App() {
  /* const addContact = contactForm((state) => state.addContact);*/
  const { register, handleSubmit } = useForm<zodType>();
  const onSubmit: SubmitHandler<zodType> = (data) => {
    /*addContact(data);*/
    SendMail(data);
  };
  const contact = contactForm((state) => state.contacts);
  return (
    <div>
      <div>
        {contact?.map((contact) => (
          <p key={Math.random()}>{contact.name}</p>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input {...register("name")} />
        <label>Email:</label>
        <input {...register("email")} />
        <label>Mensagem</label>
        <input {...register("message")} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
