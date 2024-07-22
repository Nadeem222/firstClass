
import Card from './components/Card'

function App() {
  const product = [
    {
      company: "Samsung",
      model: "S24ultra",
      id: 5441,
      price: 499000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0t6jMXH3v-hV3Cf4EgYSBf05wsDC98Q5bdw&s"
    },
    {
      company: "Samsung",
      model: "Galaxy A54",
      id: 5544,
      price: 98000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ArZ1wfTXmr_yVKgcxqqxFpWluit7SZo3EQ&s"
    },
    {
      company: "Oppo",
      model: "Reno 11",
      id: 6655,
      price: 128000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCJF31tEFcugdQsOARQJu_aYUElJwAyJW6jA&s"
    },
    {
      company: "Oppo",
      model: "Oppo A68",
      id: 7254,
      price: 110000
    },
    {
      company: "Apple",
      model: "Iphone 16",
      id: 6521,
      price: 270000,
      image: "https://images.macrumors.com/t/vKCWQYBv5sZhRIPH9FimGV6s0YI=/1600x0/article-new/2023/09/iPhone-16-Side-2-Feature.jpg"
    }
  ]

  return (
    <>
  <div className='flex gap-2 w-full flex-wrap justify-center py-2' >

        {product.map((item)=> {
        return  <Card key={item.id} product={item} />
        })}
  </div>
    </>
  )
}

export default App
