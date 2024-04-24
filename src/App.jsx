import { useState } from "react";
import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./assets/components/CoffeeCard";
import Header from "./assets/components/Header";

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees , setCoffees] = useState(loadedCoffee)
  return (
    
    <div>
      <Header></Header>
      <div className="m-20">
      
      <h1 className='mb-20 text-center text-6xl text-purple-600'>Total Coffees : {coffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {
          coffees.map(coffee=><CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}
          ></CoffeeCard>)
        }
      </div>
      
    </div>
    </div>
  )
}

export default App
