import { useState,useEffect } from 'react';
import './App.css';
import {HStack,Heading,Text,VStack} from '@chakra-ui/react';
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';




function App() {

  const [showName, setShowName] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowName(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);




  return showName?(
    
    <HStack w={'full'} h={'100vh'} bgColor={'#28282b'}justifyContent={'center'} alignItems={'center'}>

      <div class="wrapper">
  <h1 class="glitch">

  <Text  fontSize={'7xl'} fontWeight={'bolder'} textColor={'white'} >Ɔ<b style={{color:'#90ee90'}}>∀</b></Text>

  </h1>
</div>


    </HStack>
  ): (
  <BrowserRouter>
  <Header/>
  <Routes>
  <Route path='/skills' element={<Skills/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path ="/projects" element={<Projects/>}/>
  </Routes>
  </BrowserRouter>

  );
}

export default App;
