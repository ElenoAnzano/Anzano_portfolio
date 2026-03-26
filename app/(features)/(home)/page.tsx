import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
export default function Home() {
  return (
    <div>
      <div className="flex items-center gap-30 justify-center h-screen bg-gray-100">
        <div>
          <div className="max-w-md mx-auto">
            <h1 className="text-4xl font-bold mb-4">Hello, I'm Eleno</h1>
            <p className="text-lg text-gray-600 mb-8">
              a software developer who can creating unique and interactive projects. I enjoy turning ideas into engaging digital experiences and continuously learning new technologies to improve my skills
            </p>
          </div>
          <div className="flex gap-5">
            <Link href="/contact">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                Contact</button>
            </Link>
            <Link href="/projects">
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                Explore projects</button>
            </Link>
          </div>
        </div>
        <div>
          <Image src="/myphoto.jpg" className="rounded-lg" alt="My Photo" width={400} height={300} />
        </div>
      </div>
      <div className="flex p-5 justify-center gap-40 text-2xl">
        <a href="https://github.com/ElenoAnzano" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl text-black" />
        </a>
        <a href="https://www.facebook.com/eleno.anzano.3/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-4xl text-blue-600" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-4xl text-sky-500" />
        </a>
      </div>
    </div>
  );
}
