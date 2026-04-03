import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
export default function Contact() {
    return (

        <div className="justify-center">
            <h1 className="text-4xl p-10 font-bold text-center">
                Let&apos;s get in touch
            </h1>
            <div className="flex gap-10 justify-center">
                <div className="w-full max-w-md flex flex-col gap-6">
                    <div className="border-1 border-gray-300 rounded-lg w-100 p-6">
                        <h1 className="text-4xl font-bold">Email</h1>
                        <p className="hover:text-blue-500 text-lg">
                            elenoanzanojr123@gmail.com
                        </p>
                    </div>
                    <div className="border-1 border-gray-300 rounded-lg w-100 p-6">
                        <h1 className="text-4xl font-bold">Phone</h1>
                        <p className="hover:text-blue-500 text-lg">
                            0975-654-7380
                        </p>
                    </div>
                    <div className="flex justify-center gap-15">
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

                <div className="border-1 border-gray-300 rounded-lg p-6">
                    <h2 >Your Name</h2>
                    <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full" />
                    <h2 >Your Email</h2>
                    <input type="email" placeholder="Your Email" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full" />
                    <h2 >Your Message</h2>
                    <textarea placeholder="Your Message" className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full h-32"></textarea>
                    <button className="h-10 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
                </div>
            </div>
        </div>

    )
}