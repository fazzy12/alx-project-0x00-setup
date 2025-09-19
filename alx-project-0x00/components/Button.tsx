import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ title, styles, size = "medium", shape = "rounded-md" }) => {
  const sizeClasses = {
    small: "text-sm px-3 py-1",
    medium: "text-base px-4 py-2",
    large: "text-lg px-6 py-3"
  }
  
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
    "rounded-lg": "rounded-lg"
  }
  
  return (
    <button className={`${sizeClasses[size]} ${shapeClasses[shape]} ${styles}`}>
      {title}
    </button>
  )
}

export default Button