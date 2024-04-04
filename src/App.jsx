import { useState } from "react"
import Display from "./Components/Display"
import data from "./data"

// styling
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Stack } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';


function App() {
  const [display, setDisplay] = useState([]);
  function showHandler() {
    setDisplay(data)
  }
  function hideHandler() {
    setDisplay([])
  }
  return (
    <Container className="p-3 bg-light">
      <h1 className="blockquote text-center text-info bg-dark">Display List </h1>
      <ListGroup>
        {display.length > 0 ?
          (display.map((item) => <Display key={item.id} {...item}></Display>)
          )
          :
          (
            <p className="text-center ">Click On button to display ...</p>
          )}

      </ListGroup>
      <Stack direction="horizontal" className="d-flex justify-content-center" gap={2}>
        <Button as="a" variant="primary" onClick={hideHandler}>Hide List</Button>

        <Button as="a" variant="success" onClick={showHandler}>Show List</Button>
      </Stack>

    </Container>)
}
export default App

















// ---------------------------------------------
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
