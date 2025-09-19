import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card />
      
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Button Examples</h2>
        
        {/* Size variations */}
        <div className="flex space-x-4 items-center">
          <Button title="Small" styles="bg-blue-500 text-white" size="small" shape="rounded-sm" />
          <Button title="Medium" styles="bg-green-500 text-white" size="medium" shape="rounded-md" />
          <Button title="Large" styles="bg-red-500 text-white" size="large" shape="rounded-full" />
        </div>
        
        {/* Shape variations */}
        <div className="flex space-x-4 items-center">
          <Button title="Rounded Small" styles="bg-purple-500 text-white" size="medium" shape="rounded-sm" />
          <Button title="Rounded Medium" styles="bg-yellow-500 text-black" size="medium" shape="rounded-md" />
          <Button title="Rounded Full" styles="bg-indigo-500 text-white" size="medium" shape="rounded-full" />
          <Button title="Rounded Large" styles="bg-pink-500 text-white" size="medium" shape="rounded-lg" />
        </div>
        
        {/* Style variations */}
        <div className="flex space-x-4 items-center">
          <Button title="Primary" styles="bg-blue-600 hover:bg-blue-700 text-white font-bold" size="medium" shape="rounded-md" />
          <Button title="Secondary" styles="bg-gray-600 hover:bg-gray-700 text-white font-bold" size="medium" shape="rounded-md" />
          <Button title="Success" styles="bg-green-600 hover:bg-green-700 text-white font-bold" size="medium" shape="rounded-md" />
        </div>
      </div>
    </div>
  )
}
export default Landing