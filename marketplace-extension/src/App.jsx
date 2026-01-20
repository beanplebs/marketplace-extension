import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { useState } from 'react'
import ItemList from './ItemList';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ItemList items={[
        { name: "Sample Item", description: "This is a sample item description.", purchasedPrice: 10.00, listedPrice: 15.00 },
        { name: "Another Item", description: "This is another item description.", purchasedPrice: 18.00, listedPrice: 20.00 }
      ]} />
    </>
  )
}

export default App
