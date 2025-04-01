import { LoadingScreen } from "./components/LoadingScreen"
import { useState } from "react"
import { Navbar } from "./components/Navbar"


function App() {
  const [isloading, setISLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
     {!isloading &&<LoadingScreen  onComplete={()=> setISLoading(true)}/>}
     <div className="min-h-screen transition-opacity duration-700 ${
      isloading ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100">
        <Navbar menuOpen={menuOpen
          } setMenuOpen={setMenuOpen}/>
      
      </div>
    </>
  )
}

export default App
