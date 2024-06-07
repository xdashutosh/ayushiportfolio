import React, { useEffect} from 'react'
import {HStack,Tab,TabList,Tabs,Text,useDisclosure,Drawer,DrawerBody,DrawerHeader,DrawerOverlay,VStack,DrawerContent,DrawerFooter} from '@chakra-ui/react'
import { FiCoffee, FiMenu } from "react-icons/fi";
import { FaDownload, FaGraduationCap } from "react-icons/fa";
import {  BsStack } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsReddit } from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { isMobile } from 'react-device-detect';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()


    useEffect(() => {
        AOS.init();
      }, []);



  return isMobile?(<>
  <HStack w={'full'} bgColor={'#28282b'} p={'4'} justifyContent={'space-between'}  >
      <FiMenu color='white' size={'24'} onClick={onOpen}/>
      <Drawer 
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        >
        
        <DrawerOverlay />
        <DrawerContent style={{ width: "20vw" }} textColor={'white'} bgColor='#28282b'>
          <DrawerHeader>
          <Text  fontSize={'lg'} fontWeight={'bolder'} textColor={'white'}>Ɔ<b style={{color:'#90ee90'}}>∀</b></Text>
          </DrawerHeader>

          <DrawerBody>
          <VStack w={'full'} justifyContent={'center'} spacing={'8'}>
     <Link to={'/'}>
     <FiCoffee size={'24'} onClick={onClose} className='Arrowright'/>
     </Link> 
     <Link to={'/skills'}>
      <FaGraduationCap size={'24'} onClick={onClose} className='Arrowright'/>
     </Link>
     <Link to={'/projects'}>
      <BsStack size={'24'} onClick={onClose} className='Arrowright'/>
     </Link>
          </VStack>
          </DrawerBody>
          <DrawerFooter w={'ful'} justifyContent={'center'}>
            <VStack spacing={'8'}>
   <Text fontWeight={'bold'} transform={'rotate(90deg)'}>Resume</Text>
 <a href='https://www.canva.com/design/DAGHWS409gE/nLYRdhW2I_Bl23XkB8E37A/view?utm_content=DAGHWS409gE&utm_campaign=designshare&utm_medium=link&utm_source=editor' target='blank'>
    <FaDownload size={'24'} onClick={onClose} className='Arrowright'/>
  </a>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Text textAlign={'center'} fontSize={'2xl'} fontWeight={'bolder'} textColor={'white'}>Ɔ<b style={{color:'#90ee90'}}>∀</b></Text>

      <HStack spacing={'4'} textColor={'white'} data-aos="fade-up" data-aos-duration="1000"  fontSize={'xl'}>
      <a href="https://www.linkedin.com/in/ashutosh-chaudhary-b558b4208/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="blank">
        <BsLinkedin  className='Arrowright'/>
        </a> 
       <a href="https://www.reddit.com/user/xdayushi/" target="blank">
         <BsReddit className='Arrowright'/>
        </a>
        <a href="https://github.com/xdayushi" target="blank">
        <BsGithub className='Arrowright'/>
        </a>
    </HStack>

  </HStack>
  
  </>):(
    <HStack w={'full'} p={'4'} display={['none','flex']} bgColor={'#28282b'}  justifyContent={'space-between'}>
    <Tabs variant='soft-rounded'colorScheme='whiteAlpha'data-aos="fade-up" data-aos-duration="1000" >
  <TabList>
  <Tab > 
    <Link to="/">
    <HStack fontSize={'md'} textColor={'white'}  ><FiCoffee className="Arrowright" />  <Text>Home</Text></HStack>
      </Link>
    </Tab>
    <Tab>
    <Link to="/skills">
    <HStack fontSize={'md'} textColor={'white'} ><FaGraduationCap className="Arrowright"/><Text>Skills</Text></HStack>
      </Link>
    </Tab>
    <Tab>
    <Link to="/projects" >
    <HStack fontSize={'md'} textColor={'white'}><BsStack className="Arrowright"/> <Text>Projects</Text></HStack>
      </Link>
    </Tab>
    <Tab>
    <Link to="https://www.canva.com/design/DAGHWS409gE/nLYRdhW2I_Bl23XkB8E37A/view?utm_content=DAGHWS409gE&utm_campaign=designshare&utm_medium=link&utm_source=editor" target='blank'>
    <HStack fontSize={'md'} textColor={'white'}><FaDownload className="Arrowright"/> <Text>Resume</Text></HStack>
      </Link>
    </Tab>
  </TabList>
</Tabs>

<Text w={'20%'} textAlign={'left'} fontSize={'4xl'} fontWeight={'bolder'} textColor={'white'} data-aos="fade-up" data-aos-duration="1000" >Ɔ<b style={{color:'#90ee90'}}>∀</b></Text>
<HStack spacing={'4'} textColor={'white'} data-aos="fade-up" data-aos-duration="1000"  fontSize={'xl'}>
<a href="https://www.linkedin.com/in/ashutosh-chaudhary-b558b4208/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="blank">
        <BsLinkedin  className='Arrowright'/>
        </a> 
       <a href="https://www.reddit.com/user/xdayushi/" target="blank">
         <BsReddit className='Arrowright'/>
        </a>
        <a href="https://github.com/xdayushi" target="blank">
        <BsGithub className='Arrowright'/>
        </a>
    </HStack>
    </HStack>
  )
}

export default Header
