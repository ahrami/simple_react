import Button from "./Button"
import axios from "axios"
import { useEffect, useState } from "react"

const BACKEND = import.meta.env.VITE_BACKEND_URL + ":" + import.meta.env.VITE_BACKEND_PORT

function App() {  
  const [count, setCount] = useState<null | number>(null)
  
  useEffect(() => {
    const abortController = new AbortController();
    axios.get(BACKEND, { signal: abortController.signal }).then(res => {
      console.log(res.data)
      setCount(res.data.count)
    }).catch(err => {
      if (err.name !== 'CanceledError') {
        console.log(err.message);
      }
    })
    return () => { abortController.abort() }
  }, [])

  function add(value: number) {
    setCount(null)
    axios.post(BACKEND + "/add", { value }).then(res => {
      console.log(res.data)
      setCount(res.data.count)
    }).catch(err => {
      console.log(err.message);
    })
  }

  function subtract(value: number) {
    setCount(null)
    axios.post(BACKEND + "/subtract", { value }).then(res => {
      console.log(res.data)
      setCount(res.data.count)
    }).catch(err => {
      console.log(err.message);
    })
  }

  function requestCount() {
    setCount(null)
    axios.get(BACKEND).then(res => {
      console.log(res.data)
      setCount(res.data.count)
    }).catch(err => {
      console.log(err.message);
    })
  }
  
  return (
    <>
      <div className='fixed left-0 top-0 w-full h-12 flex items-center bg-white border-b border-zinc-300'>
        <div className='text-lg ml-4 font-medium'>
          <i className='fa-regular fa-heart mr-3'></i>
          <span>Simple React</span>
        </div>
      </div>
      <div className='fixed left-0 top-12 h-[calc(100%-3rem)] w-64 bg-white border-r border-zink-300'>
        <div className="px-4 py-2 border-b border-zinc-300 text-lg hover:bg-zinc-200 cursor-pointer transition-all">
          <i className='fa-solid fa-sliders mr-3'></i>
          <span>Sidebar Button</span>
        </div>
      </div>
      <div className='min-h-screen box-border pt-16 ml-64 px-4 bg-white font-medium'>
        <div className="flex flex-col gap-2">
          <div className="font-medium text-xl">
            <i className="fa-solid fa-calculator mr-3"></i>
            <span>Counter</span>
          </div>
          <div className="my-2 border-b border-zinc-300"></div>
          <div className="flex gap-2 items-center">
            <div className="w-24">Add 1</div>
            <Button callback={() => { add(1) }} icon={<i className="fa-solid fa-plus"></i>}></Button>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-24">Add 3</div>
            <Button callback={() => { add(3) }} icon={<i className="fa-solid fa-plus"></i>}></Button>
          </div>
          <div className="my-2 border-b border-zinc-300"></div>
          <div className="flex gap-2 items-center">
            <div className="w-24">Subtract 1</div>
            <Button callback={() => { subtract(1) }} icon={<i className="fa-solid fa-minus"></i>}></Button>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-24">Subtract 3</div>
            <Button callback={() => { subtract(3) }} icon={<i className="fa-solid fa-minus"></i>}></Button>
          </div>
          <div className="my-2 border-b border-zinc-300"></div>
          <div className="flex gap-2 items-center">
            <div className="w-24">Get Count</div>
            <Button callback={requestCount}></Button>
          </div>
          <div className="my-2 border-b border-zinc-300"></div>
          <div className="text-xl">
            <span className="font-normal">Current Count: </span>
            {count !== null && <span className="text-red-600 font-bold">{count}</span>}
            {count === null && <span className="text-red-600 font-bold">Loading...</span>}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
