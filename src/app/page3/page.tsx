'use client'
import Formulario from "../page2/page";
import { useState } from "react";

export default function Home() {

  const [showForms, setShowForms] = useState(false);

  const ClickNewSale = () => {
    setShowForms(true); 
  };

  return (
      <main className="bg-blue-500 min-h-screen flex items-center justify-center">
       
       <div className="text-right">lll
        <button className="bg-gray-800 text-white p-2 rounded cursor-pointer"
          onClick={ClickNewSale} 
>
          Register New Sale
        </button>
      </div>
      {showForms && <Formulario />}
      </main>
  );
}
