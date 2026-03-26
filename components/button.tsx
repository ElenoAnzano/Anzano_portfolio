// type ButtonProps = {
//     text: string;
//     onClick?: () => void;
//     className?: string;
// };

// export default function Button({text, onClick, className}: ButtonProps){
//     <button onClick={onClick} className={`px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${className}`}>
//         {text}
//     </button>
// }

export default function Button(){
    return(
        <button className={`px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300`}>
            Learn More
        </button>
    )
}