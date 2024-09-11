"use client"
import React, { useState } from "react";

const page = () => {
    const [display, setDisplay] = useState("")

    const appendToDisplay = (value) => {
        setDisplay((prev) => prev + value)
    }

    const clearDisplay = () => {
        setDisplay("")
    }

    const deleteLast = () => {
        setDisplay((prev) => prev.slice(0, -1))
    }

    const calculateResult = () => {
        try{
            setDisplay(eval(display).toString())
        } catch (error) {
            setDisplay("Error")
        }
    }

  return (
    <div className=" bg-gray-100 flex items-center justify-center min-h-screen">
      <div className=" bg-white p-6 rounded-lg shadow-lg max-w-xs mx-auto">
        <div className=" mb-4 text-center text-2xl font-bold">Calculator</div>
        <div className=" grid grid-cols-4 gap-2">
          <input
            type="text"
            value={display}
            className=" col-span-4 text-right p-2 border rounded-lg mb-2"
            disabled
          />
          <button onClick={clearDisplay} className=" bg-red-500 p-4 rounded-lg">C</button>
          <button onClick={deleteLast} className=" bg-red-500 p-4 rounded-lg">DEL</button>
          <button onClick={() =>appendToDisplay("%")} className=" bg-blue-500 p-4 rounded-lg">%</button>
          <button onClick={() =>appendToDisplay("/")} className=" bg-blue-500 p-4 rounded-lg">/</button>
          <button onClick={() =>appendToDisplay("7")} className=" bg-gray-300 p-4 rounded-lg">7</button>
          <button onClick={() =>appendToDisplay("8")} className=" bg-gray-300 p-4 rounded-lg">8</button>
          <button onClick={() =>appendToDisplay("9")} className=" bg-gray-300 p-4 rounded-lg">9</button>
          <button onClick={() =>appendToDisplay("*")} className=" bg-blue-500 p-4 rounded-lg">*</button>
          <button onClick={() =>appendToDisplay("4")} className=" bg-gray-300 p-4 rounded-lg">4</button>
          <button onClick={() =>appendToDisplay("5")} className=" bg-gray-300 p-4 rounded-lg">5</button>
          <button onClick={() =>appendToDisplay("6")} className=" bg-gray-300 p-4 rounded-lg">6</button>
          <button onClick={() =>appendToDisplay("-")} className=" bg-blue-500 p-4 rounded-lg">-</button>
          <button onClick={() =>appendToDisplay("1")} className=" bg-gray-300 p-4 rounded-lg">1</button>
          <button onClick={() =>appendToDisplay("2")} className=" bg-gray-300 p-4 rounded-lg">2</button>
          <button onClick={() =>appendToDisplay("3")} className=" bg-gray-300 p-4 rounded-lg">3</button>
          <button onClick={() =>appendToDisplay("+")} className=" bg-blue-500 p-4 rounded-lg">+</button>
          <button onClick={() =>appendToDisplay("0")} className=" bg-yellow-500 p-4 rounded-lg col-span-2">0</button>
          <button onClick={() =>appendToDisplay(".")} className=" bg-gray-300 p-4 rounded-lg">.</button>
          <button onClick={() =>calculateResult("0")} className=" bg-green-500 p-4 rounded-lg">=</button>
        </div>
      </div>
    </div>
  );
};

export default page;
// "use client"
// import React, { useState } from 'react';


// const keys = [
//   ['Esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'PrtSc', 'Del'],
//   ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
//   ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
//   ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
//   ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift'],
//   ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'Win', 'Menu', 'Ctrl'],
// ];

// function App() {
//   const [input, setInput] = useState('');

//   const handleClick = (key) => {
//     setInput((prevInput) => prevInput + key);
//   };

//   const handleSpecialKey = (key) => {
//     if (key === 'Backspace') {
//       setInput((prevInput) => prevInput.slice(0, -1));
//     } else if (key === 'Space') {
//       setInput((prevInput) => prevInput + ' ');
//     } else if (key === 'Enter') {
//       setInput((prevInput) => prevInput + '\n');
//     } else if (key === 'Tab') {
//       setInput((prevInput) => prevInput + '\t');
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <h1 className="text-4xl font-bold mb-8">Virtual Keyboard</h1>
//       <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl">
//         <div className="mb-4 p-4 bg-gray-200 rounded text-left text-lg h-40 overflow-auto whitespace-pre-wrap">
//           {input || 'Start typing...'}
//         </div>
//         <div className="space-y-2">
//           {keys.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex space-x-2 justify-center">
//               {row.map((key) => (
//                 <button
//                   key={key}
//                   onClick={() =>
//                     ['Backspace', 'Enter', 'Space', 'Tab'].includes(key)
//                       ? handleSpecialKey(key)
//                       : handleClick(key)
//                   }
//                   className={`bg-blue-500 text-white p-2 rounded 
//                   ${key === 'Backspace' ? 'w-24' : 
//                     key === 'Tab' ? 'w-28' : 
//                     key === 'CapsLock' ? 'w-20' : 
//                     key === 'Enter' ? 'w-20' : 
//                     key === 'Shift' ? 'w-28' : 
//                     key === 'Space' ? 'w-full' : 
//                     'w-14'} 
//                   h-12 flex items-center justify-center`}
//                 >
//                   {key === ' ' ? 'Space' : key}
//                 </button>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
