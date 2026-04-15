import "./assets/hooks.css";
function App() {
const username  = "React Counter"
  return (
    <>
    <h1 className="text-black-800 text-5xl font-bold">{username}</h1>    
    <button className="btnDesign">
        Reset Value
      </button>
    </>
  )
}

export default App
