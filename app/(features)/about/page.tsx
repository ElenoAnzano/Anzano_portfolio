import Image from "next/image";
import {Experience} from "@/components/Experience";
export default function AboutHero() {
    return (
        <div className="bg-gray-100">
        <div className="flex flex-col items-center justify-center p-10">
            <Image className="rounded-full" src="/myphoto.jpg" alt="My Photo" width={150} height={150} />
            <p>Eleno Anzano Jr</p><br></br> 
            <h2 className="text-4xl font-bold mb-4">About</h2>
            <p className="text-lg text-center text-gray-800 w-200 mb-8">
                I am a passionate developer with experience in building web applications using modern technologies such as Next.js, React, Tailwind CSS with TypeScript. I focus on creating high-performance, scalable, and user-friendly solutions. I enjoy collaborating on projects, solving complex problems, and continuously learning new technologies to improve my craft.
            </p>
        </div>
                <h2 className="text-2xl font-bold mb-4">Experience</h2>
                <Experience />     
        </div>
    );
}