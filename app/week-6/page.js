"use client"

import { useState } from "react";
import itemData from './items.json';
import ItemList from './item-list.js';
import NewItem from './new-item.js';

export default function Page() {

    const [items, setItems] = useState(itemData);

    const addItem = (item) => {
        setItems([...items, item]);
    }

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    }
 
  return (
    <main className=' bg-eggshell'>
        <h1 className='text-3xl font-bold m-2 mt-0 text-black'>Shopping List</h1>
        <NewItem onAddItem={addItem}/>
        <ItemList items={items} onDelete={deleteItem}/>
        
    </main>
    
  );
}