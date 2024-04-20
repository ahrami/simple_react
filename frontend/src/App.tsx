import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='fixed left-0 top-0 w-full h-12 flex items-center bg-white border-b border-zinc-300'>
        <div className='text-lg ml-6 font-medium'>
          <i className='fa-regular fa-heart mr-3'></i>Hello there
        </div>
      </div>
      <div className='fixed left-0 top-12 h-[calc(100%-3rem)] w-64 p-2 bg-white border-r border-zink-300'>
        wawa
      </div>
      <div className='min-h-screen box-border pt-14 ml-64 px-2 bg-white'>
        <button className='rounded-md bg-blue-300 py-2 px-4 hover:bg-blue-400 text-zink-800 font-medium' 
        onClick={() => { setCount(count + 1) }}>
          <i className='fa-solid fa-calculator mr-2'></i>{count}
        </button>
      </div>
    </>
  )
}

export default App
