import ProductTable from "../src/components/ProductTable";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-4">Hello There</h1>
        <img 
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHEybUyNDF4OHdvYTYwaXh2eW9wOTBpemExZmthemk4NTh4Y3ljZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xTiIzJSKB4l7xTouE8/giphy.gif" 
          alt="Hello There General Kenobi"
          className="rounded-lg shadow-lg mb-8"
        />
        <ProductTable />
      </div>
    </main>
  );
}