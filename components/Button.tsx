import { cva, VariantProps } from "class-variance-authority";
import { FC } from 'react';

const buttonClasses = cva([
    "rounded-3xl",
    "font-bold",
    "hover:scale-110",
    "active:scale-100",
    "transition",
    "duration-200",
    "ease-in-out",
],{
    variants: {
        intent: {
            primary: [
                "bg-violet-500",
                "text-white",
                "border-transparent",
                "hover:bg-violet-600"
            ],

            secondary: [
                "bg-white",
                "text-black",
                "border-gray-400",
                "hover:bg-gray-100",
                "border-solid",
                "border-2",
                "border-gray-800"

            ],
            text: ["bg-transparent", "text-black", "hover:bg-gray-100"],
        },
        size: {
            
        }
    }
}

)

const Button = ({ children }) => {
    return (
        <button>
            { children }
        </button>
    )
}

export default Button;