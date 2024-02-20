"use client";

import Item from './item.js';
import { useState } from 'react';
import items from './items.json';

export default function ItemList() {
    
  const [sortBy, setSortBy] = useState('name');



  if (sortBy === 'name') {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === 'category') {
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  //create an array with all the categories
  let categories = items.map((item) => item.category);
  categories.sort();
  let uniqueCategories = [...new Set(categories)];
  categories = uniqueCategories;

  return (
    <main>
      
      <div className="p-2 m-2">
        Sort By:
        <button className={"p-2 m-2 rounded-lg " + (sortBy === 'name' ? 'bg-orange-500' : 'bg-orange-700')} onClick={() => setSortBy('name')}>Name</button>
        <button className={"p-2 m-2 rounded-lg " + (sortBy === 'category' ? 'bg-orange-500' : 'bg-orange-700')} onClick={() => setSortBy('category')}>Category</button>
        <button className={"p-2 m-2 rounded-lg " + (sortBy === 'Group By Category' ? 'bg-orange-500' : 'bg-orange-700')} onClick={() => setSortBy('Group By Category')}>Grouped Category</button>
      </div>
      
        <div className='p-2 m-2'>
          {sortBy != 'Group By Category' ? 
            items.map((item) => (
              <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
            )) :
            categories.map((category, index) => (
              <ul key={index}>
                <li className="text-xl capitalize" >{category}</li>
                <li>

                  {(items.filter((item) => item.category === category)).map((item) => (
                    <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                  ))}

                </li>
              </ul>
            ))}
        </div>

    </main>
  );
}