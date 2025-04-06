import siteMetadata from "@/data/siteMetadata";
import { Facebook, Mail, Phone } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="max-w-2xl mx-auto bg-backgroundCat text-center p-8 rounded-lg shadow-lg space-y-6">
      <p className="text-lg text-cyan max-w-xl mx-auto">
        Thank you for visiting my website! I'm really happy that you took the
        time to learn more about me and what I do.
      </p>

      <p className="text-md text-cyan max-w-xl mx-auto">
        If you're interested, feel free to contact me through the following
        channels:
      </p>

      <div className="flex justify-center gap-6 text-cyan">
        <a
          href={`tel:+84${siteMetadata.phone}`}
          className="hover:text-green transition-colors"
          aria-label="Call"
        >
          <Phone />
        </a>
        <a
          href={`${siteMetadata.Facebook}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-orange transition-colors"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
        <a
          href={`mailto: ${siteMetadata.email}`}
          className="hover:text-pink transition-colors"
          aria-label="Email"
        >
          <Mail />
        </a>
      </div>

      <img
        src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif"
        alt="Thankful cat"
        className="w-64 h-64 object-contain mx-auto rounded-lg"
      />

      <p className="text-md text-cyan max-w-lg mx-auto">
        Leave your information and I’ll get back to you as soon as possible!
      </p>
    </div>
  );
}
