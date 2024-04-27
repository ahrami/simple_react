import Button from "./Button"
import axios from "axios"
import { useEffect, useState } from "react"

const BACKEND = import.meta.env.VITE_BACKEND_URL + ":" + import.meta.env.VITE_BACKEND_PORT

function Counter() {
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
      <div className="my-2 border-b border-zinc-300"></div>
    </div>
  )
}

export default Counter