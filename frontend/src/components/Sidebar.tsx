function Sidebar() {
  return (
    <div className='fixed left-0 top-12 h-[calc(100%-3rem)] w-64 -translate-x-full lg:translate-x-0 bg-white border-r border-zink-300'>
      <div className="px-4 py-2 border-b border-zinc-300 text-lg hover:bg-zinc-200 cursor-pointer transition-all">
        <i className='fa-solid fa-sliders mr-3'></i>
        <span>Sidebar Button</span>
      </div>
    </div>
  )
}

export default Sidebar