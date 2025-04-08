import React, { useEffect, useState } from 'react';

const App = () => {
  const [val, setVal] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect called");
  }, []);

  return (
    <>
      <div className="max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center">Value: {val}</h1>
        <div className="flex gap-x-7 items-center justify-around mt-9">
          <button 
            className="bg-green-500 px-3 py-2 text-white font-medium" 
            onClick={() => setVal(val + 1)}
          >
            Increment
          </button>
          <button 
            className="bg-red-500 px-3 py-2 text-white font-medium" 
            onClick={() => setVal(val - 1)}
          >
            Decrement
          </button>
        </div>
      </div>

      <div className="max-w-2xl m-5 border border-slate-200 rounded-md shadow-md h-[30vh] mx-auto flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center">Name: {name}</h1>
        <div className="flex gap-x-7 items-center justify-around mt-9">
          <input 
            type="text" 
            className="p-3 border border-slate-500 bg-slate-100" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
      </div>
    </>
  );
}

export default App;
