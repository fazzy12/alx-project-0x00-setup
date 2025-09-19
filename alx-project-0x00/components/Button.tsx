import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, size = "medium", shape = "rounded-md", className = "" }) => {
  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3"
  }
  
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full"
  }
  
  return (
    <button className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white ${className}`}>
      {title}
    </button>
  )
}

export default Button