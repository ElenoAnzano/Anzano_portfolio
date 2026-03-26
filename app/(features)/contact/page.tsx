import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
export default function Contact() {
    return (

        <div className="justify-center bg-gray-100 items-center h-screen bg-gray-100">
            <h1 className="text-4xl p-10 text-gray-1000 font-bold text-center">
                Let's get in touch
            </h1>
            <div className="flex items-center gap-10 justify-center">
                <div className="w-full max-w-md flex flex-col gap-6">
                    <div className="border-1 border-gray-300 rounded-lg w-100 p-6">
                        <h1 className="text-4xl text-gray-800 font-bold">Email</h1>
                        <p className="hover:text-blue-500 text-lg text-gray-600 mb-8">
                            elenoanzanojr123@gmail.com
                        </p>
                    </div>
                    <div className="border-1 border-gray-300 rounded-lg w-100 p-6">
                        <h1 className="text-4xl text-gray-800 font-bold">Phone</h1>
                        <p className="hover:text-blue-500 text-lg text-gray-600 mb-8">
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
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <h2 className="text-gray-1000">First Name</h2>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border text-gray-800 border-gray-300 rounded-lg px-4 py-2 w-full"
                            />
                        </div>

                        <div className="flex flex-col w-1/2">
                            <h2 className="text-gray-1000">Last Name</h2>
                            <input 
                                type="text"
                                placeholder="Your Last Name"
                                className="border text-gray-800 border-gray-300 rounded-lg px-4 py-2 w-full"
                            />
                        </div>
                    </div>
                    <h2 className="text-gray-800">Your Email</h2>
                    <input type="email" placeholder="Your Email" className="border text-gray-800 border-gray-300 rounded-lg px-4 py-2 mb-4 w-full" />
                    <h2 className="text-gray-800">Your Message</h2>
                    <textarea placeholder="Your Message" className="border text-gray-800 border-gray-300 rounded-lg px-4 py-2 mb-4 w-full h-32"></textarea>
                    <button className="h-10 w-full bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
                </div>
            </div>
        </div>

    )
}