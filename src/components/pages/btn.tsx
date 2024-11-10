import React from 'react'

function Button(props:{text:string}) {
  return (
   <button className='font-semibold px-4 p-3 rounded-xl transition-all inline-block hover:scale-105 bg-zinc-700 text-white hover:bg-zinc-400 '>{props.text}</button>


  )
}

export default Button