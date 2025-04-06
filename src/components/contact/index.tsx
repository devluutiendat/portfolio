import ContactForm from "./ContactForm";
import ThankYou from "./ThankYou";

export default function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-orange text-center">
        Contact Me
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  border border-cyan rounded-lg shadow-lg overflow-hidden bg-backgroundCat">
        <ContactForm />
        <ThankYou />
      </div>
    </div>
  );
}
