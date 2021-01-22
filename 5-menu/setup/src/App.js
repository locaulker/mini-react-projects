import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = items.map(item => item.category)
const uniqueValues = new Set(allCategories)
const uniqueCategories = ['all', ...uniqueValues]
console.log(uniqueCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(uniqueCategories)

  const filteredItems = category => {
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter(item => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App
