import { Resend } from "resend";
import { zodType } from "@/components/InfoForm";

/*const contact = contactForm((state) => state.contacts);
const extractedFields = contact.map((obj) => ({
  name: obj.name,
  email: obj.email,
  message: obj.message,
}));
const firstObject = extractedFields[0];
*/
type DataType = {
  name: string;
  email: string;
  message: string;
};
export default async function POST(data: DataType) {
  const resend = new Resend("re_F12cphYn_84QWgNDky5NaMVsq8MWVpnGv");

  const email = await resend.emails.send({
    from: data.email,
    to: ["um.dois.quase.tres@gmail.com"],
    subject: "Hello world",
    html: data.message,
  });
  console.log(email);
}
