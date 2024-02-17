
const Timer = () => {
  return (
    <div className="w-full flex my-10">
       <div className="w-1/4 flex flex-col gap-2">
         <h1 className="text-[42px] font-semibold">29</h1>
         <p className="text-xs pl-1 font-bold">WEEKS</p>
       </div>
       <div className="w-1/4 flex flex-col gap-2">
         <h1 className="text-[42px] font-bold">04</h1>
         <p className="text-xs pl-1 font-bold">DAYS</p>
       </div>
       <div className="w-1/4 flex flex-col gap-2">
         <h1 className="text-[42px] font-bold">18</h1>
         <p className="text-xs pl-1 font-bold">HOURS</p>
       </div>
       <div className="w-1/4 flex flex-col gap-2">
         <h1 className="text-[42px] font-bold">21</h1>
         <p className="text-xs pl-1 font-bold">MINUTES</p>
       </div>
    </div>
  )
}

export default Timer