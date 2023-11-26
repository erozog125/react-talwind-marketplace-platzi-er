import React, { useContext } from 'react'
import { ShoppingCartContext } from '../Context/Context';

export const Card = ( { product } ) => {

  const { title, category, price, id  } = product;

  const context = useContext(ShoppingCartContext)

  return (
    <div key = { id } className=' m-2 bg-slate-100 cursor-pointer w-56 h-60 rounded-lg hover:shadow-lg shadow-violet-900'>
      <figure className='relative mb-3 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/70 rounded-lg text-sm text-blue-900 m-2'>
          { category.name }
        </span>
        <img className='w-full h-3/4 rounded-tl-lg rounded-tr-lg' src = { category.image } alt = { category.name } />
        <button 
          onClick={ () => context.setCount(context.count + 1) }
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 hover:bg-lime-600 text-blue-800'>
          +
        </button>
      </figure>
      <p className='flex justify-between p-1 bg-gray-200'>
        <span className='text-pink-600 text-sm font-extrabold'>{ title }</span>
        <span className='text-purple-800 text-sm font-extrabold'>${ price }</span>
      </p>
    </div>
  )
}
