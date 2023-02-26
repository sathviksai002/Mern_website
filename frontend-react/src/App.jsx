import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import OurNavbar from './Components/Navbar'
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/esm/Container'

function App() {

  // let number = 0;
  
  const[number, setNumber] = useState(0);
  const [problemList, setProblemList] = useState([]);

  useEffect (function(){
    fetch("https://bz-neetcode-clone.cyclic.app/api/problems?sheet=NeetCode%20All")
    .then(res => res.json())
    .then(res => setProblemList(res));  
  },[])

  //dependency array

  const increasenumber = () =>{
    // number += 1;
    setNumber(number+1);
  }

  return (
    <div className="App">
     <OurNavbar></OurNavbar>
     <Container>
      {JSON.stringify(problemList)}
     </Container>
    </div>
  )
}

export default App