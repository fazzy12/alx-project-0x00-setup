import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      <Card />
      
      <div className="mt-8 space-y-4">
        <h2 className="text-lg font-semibold">Button Examples</h2>
        <div className="flex space-x-4">
          <Button title="Small Rounded" size="small" shape="rounded-full" />
          <Button title="Medium Default" size="medium" />
          <Button title="Large Rounded" size="large" shape="rounded-md" />
        </div>
        <div className="flex space-x-4">
          <Button title="Primary" className="bg-blue-600 hover:bg-blue-700" />
          <Button title="Secondary" className="bg-gray-600 hover:bg-gray-700" />
          <Button title="Success" className="bg-green-600 hover:bg-green-700" />
        </div>
      </div>
    </div>
  )
}
export default Landing