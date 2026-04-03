import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-300 text-black py-6 mt-auto">
      <div className="flex justify-center gap-40 text-2xl">
        <a href="https://github.com/ElenoAnzano" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl" />
        </a>
        <a href="https://www.facebook.com/eleno.anzano.3/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-4xl text-blue-600" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-4xl text-sky-500" />
        </a>
      </div>
    </footer>
  );
}