import { useState } from "react"

function Button(props: {callback?: () => void}) {
  const [count, setCount] = useState(0)
  return (
    <>
      <button className='rounded-md bg-blue-300 py-2 px-4 hover:bg-blue-400 text-zink-800 font-medium select-none transition-colors'
        onClick={() => { setCount(count + 1); props.callback && props.callback() }}>
        Pressed: {count}
      </button>
    </>
  )
}

export default Button