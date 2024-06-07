import React, {useEffect,useState} from 'react'
import {HStack,Avatar} from '@chakra-ui/react'
import { TypeAnimation } from 'react-type-animation'

import {
    ChakraProvider,
    Box,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    VStack,
    Text,
    Code,
    Tooltip,
    Image,
    Flex,
    Badge
  } from '@chakra-ui/react';

  const DrawerButton = ({ label, content,percent,offset }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
      <Tooltip hasArrow label='Click me' bg='whiteAlpha' color='white' padding="4" fontSize="xl">

        <li data-name={label} data-percent={percent}  onClick={onOpen} >
        <svg viewBox="-10 -10 220 220">
        <g fill="none" stroke-width="21" transform="translate(100,100)">
        <path d="M 0,-100 A 100,100 0 0,1 86.6,-50" stroke="url(#cl1)"/>
        <path d="M 86.6,-50 A 100,100 0 0,1 86.6,50" stroke="url(#cl2)"/>
        <path d="M 86.6,50 A 100,100 0 0,1 0,100" stroke="url(#cl3)"/>
        <path d="M 0,100 A 100,100 0 0,1 -86.6,50" stroke="url(#cl4)"/>
        <path d="M -86.6,50 A 100,100 0 0,1 -86.6,-50" stroke="url(#cl5)"/>
        <path d="M -86.6,-50 A 100,100 0 0,1 0,-100" stroke="url(#cl6)"/>
        </g>
        </svg>
        <svg viewBox="-10 -10 220 220">
        <path d="M200,100 C200,44.771525 155.228475,0 100,0 C44.771525,0 0,44.771525 0,100 C0,155.228475 44.771525,200 100,200 C155.228475,200 200,155.228475 200,100 Z" stroke-dashoffset={offset}></path>
        </svg>
    </li>
      </Tooltip>


        <Drawer  isOpen={isOpen} placement="right" onClose={onClose} size={'sm'}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton color={'white'} />
            <DrawerBody bgColor={'#28282b'} textColor={'white'}>
          
              {content}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  };
  
  








const Skills = () => {






  return (
    <HStack h={'full'} pt={['2','12']} justifyContent={'center'} backgroundColor={'#28282b'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} w={'full'}>



<ul class="progress">
    
<DrawerButton
          label="Reactjs"
          content={<VStack w={'full'} h={'-webkit-fit-content'} p={'4'} spacing={'4'}>
           <HStack spacing={'4'} w={'full'}>
            <Avatar boxShadow={'1px 1px 4px white'} src='https://creativebits.org/wp-content/uploads/2023/07/8mx2wdq04h271.png'/>
            <Text fontSize={'2xl'}  fontFamily={'lato'}>My reactjs profile</Text>
            </HStack> 
            <Text textAlign={'justify'}>
    In my second year of B.Tech, I embarked on a journey to learn React. Through numerous projects, I honed my skills, applying React's powerful features to create dynamic and efficient user interfaces. This experience enriched my understanding of front-end development.
      </Text>


<Text mt={'2'}>React Hooks I Use</Text>
<Code p={'4'} rounded={'md'} colorScheme='whiteAlpha'
       children="
       const reactHooks = [
        'useState',
        'useEffect',
        'useContext',
        'useReducer',
        'useCallback',
        'useMemo',
        'useRef',
        'useImperativeHandle',
        'useLayoutEffect',
        'useDebugValue',
        'useParams'
      ];
      
       "
       />

<Text mt={'2'}>React Libraries I Use</Text>
<Code p={'4'}  rounded={'md'} colorScheme='whiteAlpha'
       children="
       const reactLibraries = [
        'react-router-dom',
        'axios',
        'formik',
        'prop-types',
        'redux',
        'react-redux',
        'styled-components',
        'classnames',
        'react-query',
        'material-ui',
        'react-bootstrap',
        'react-icons',
        'react-select',
        'react-spring',
        'react-toastify',
        'recharts',
        'react-helmet',
        'react-table',
        'react-query',
        'framer-motion',
      ];
      
       "
       />


          </VStack>}
          percent={'85%'}
          offset={'534'}
        />

<DrawerButton
          label="UI/UX"
          content={<VStack  w={'full'} h={'-webkit-fit-content'} p={'4'} spacing={'4'}>
           <Text fontSize={'2xl'}  fontFamily={'lato'}>My UI/UX profile</Text>
          
           <Image rounded={'md'} src="https://www.exposit.com/wp-content/uploads/2021/12/Blog_cover-109-scaled.jpeg"/>
        
           <Text textAlign={'justify'}>
In the dynamic realm of UI/UX, I delved into a transformative journey last year. Through innovative designs and user-centric experiences, I honed my skills, crafting interfaces that seamlessly blend aesthetics and functionality. This immersive exploration has fueled my passion for creating impactful, human-centered digital solutions.
     </Text>


<Text mt={'2'}>UI Libraries I Use</Text>

<Flex flexWrap={'wrap'} gap={'2'}>
<Badge children="Chakra UI" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Material UI" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Figma" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Canva" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Scss" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Semantic UI" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/><Badge children="React spring" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/><Badge children="Framer motion" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/><Badge children="Aos" p={'2'} px={'4'} colorScheme='green' textColor={'black'} rounded={'full'}/>
</Flex>


         </VStack>}
          percent={'67%'}
          offset={'421'}
        />



<DrawerButton
          label="Nodejs"
          content={
            <VStack  w={'full'} h={'-webkit-fit-content'} p={'4'} spacing={'4'}>
           <Text fontSize={'2xl'}  fontFamily={'lato'}>My nodejs profile</Text>
          
           <Image rounded={'md'} src="https://e2logy.com/wp-content/uploads/2021/11/node_banner.png"/>
        
           <Text textAlign={'justify'}>
           In my exploration of Node.js in 2021, I navigated the world of server-side JavaScript, mastering its asynchronous power and scalability. From building RESTful APIs to real-time applications, this journey enriched my programming prowess, empowering me to create robust and efficient server-side solutions.
     </Text>

     <Flex flexWrap={'wrap'} gap={'2'}>
<Badge children="Rest API" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Rapid API" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Graphql" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Nodecron" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Authentication" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Websocket" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/><Badge children="CRUD" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/><Badge children="Models" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/><Badge children="Routes" p={'2'} px={'4'} colorScheme='green' textColor={'black'} rounded={'full'}/>
</Flex>

</VStack>
          }
          percent={'60%'}
          offset={'377'}
        />
    
    <DrawerButton
          label="Database"
          content={ <VStack  w={'full'} h={'-webkit-fit-content'} p={'4'} spacing={'4'}>
          <Text fontSize={'2xl'}  fontFamily={'lato'}>My nodejs profile</Text>
         
          <Image rounded={'md'} src="https://assets-global.website-files.com/6130fa1501794e37c21867cf/632de93bd93aa902866fae35_Database%20Components.png"/>
       
          <Text textAlign={'justify'}>
          In the last year, I've acquired hands-on experience with diverse database technologies, including NoSQL and SQL databases, as well as caching databases. My skills extend to working with broker databases, showcasing versatility in implementing and optimizing data storage solutions across a variety of platforms and use cases.
    </Text>

    <Flex flexWrap={'wrap'} gap={'2'}>
<Badge children="MongoDB" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="SQL lite" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Redis" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Caching" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Cloudinary" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Firestore" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
</Flex>

</VStack>}
          percent={'80%'}
          offset={'503'}
        />

    <DrawerButton
          label="Shell scripting"
          content={
          <VStack  w={'full'} h={'-webkit-fit-content'} p={'4'} spacing={'4'}>
          <Text fontSize={'2xl'}  fontFamily={'lato'}>My Shell-scripting profile</Text>
         
          <Image rounded={'md'} src="https://media.licdn.com/dms/image/D4D12AQFyLZBgxb109A/article-cover_image-shrink_600_2000/0/1678105450255?e=2147483647&v=beta&t=uVpOz-H89BuUCtcdN2J5HXp9C5r5h59WMbsJ-gqwjps"/>
       

          <TypeAnimation
        
        sequence={[
          500,
          ' In my exploration of Windows Software Development last year, I delved into the art of shell scripting. Navigating the intricacies of command-line interfaces, I honed skills that empowered seamless automation and efficient system interactions. This journey enriched my understanding of software development, fostering adaptability and innovative problem-solving. ', // initially rendered starting point
   
        ]}
        speed={80}
        style={{ fontSize: '20px',fontFamily: "Moirai One",color:'white'}}
        // repeat={Infinity}
        />

 

</VStack>}
          percent={'55%'}
          offset={'345'}
        />

<DrawerButton
          label="CI/CD"
          content={          <VStack  w={'full'} h={'-webkit-fit-content'} p={'4'} spacing={'4'}>
          <Text fontSize={'2xl'}  fontFamily={'lato'}>My Shell-scripting profile</Text>
         
          <Image rounded={'md'} src="https://cdn.hashnode.com/res/hashnode/image/upload/v1696782749082/7f691ce0-df60-4d0a-9ff5-c37e2c1f1a51.gif?w=1600&h=840&fit=crop&crop=entropy&auto=format,compress&gif-q=60&format=webm"/>
       
          <Flex flexWrap={'wrap'} gap={'5'} w={'full'}>
<Badge children="Docker" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Nginx" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="deployment" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Pipelines" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
</Flex>
          <TypeAnimation
        
        sequence={[
          500,
          'Embarking on the journey of Continuous Integration/Continuous Deployment (CI/CD) through Software Development Life Cycle (SDLC) and embracing DevOps, I gained proficiency in seamless code delivery. This transformative experience enhanced efficiency, collaboration, and accelerated innovation, reinforcing the foundation of agile development and operational excellence.', // initially rendered starting point
   
        ]}
        speed={80}
        style={{ fontSize: '20px',fontFamily: "Moirai One",color:'white'}}
        // repeat={Infinity}
        />

 

</VStack>}
          percent={'70%'}
          offset={'440'}
        />

<DrawerButton
          label="C#(.net)"
          content={   <VStack  w={'full'} h={'-webkit-fit-content'} p={'4'} spacing={'4'}>
          <Text fontSize={'2xl'}  fontFamily={'lato'}>My Shell-scripting profile</Text>
         
          <Image rounded={'md'} src="https://i.redd.it/vzkhe4s8dlab1.gif"/>
       
          <Flex flexWrap={'wrap'} gap={'5'} w={'full'}>
<Badge children="WPF" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Winforms" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="Console" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
<Badge children="ASP" p={'2'} colorScheme='green' textColor={'black'} rounded={'full'}/>
</Flex>
          <TypeAnimation
        
        sequence={[
          500,
          'Over the past year, I have gained substantial experience working with .NET technologies, including .NET Framework, console applications, WPF, MVVM, and UWP  I developed proficiency in building robust and efficient solutions, demonstrating a keen understanding of software development principles and frameworks within the Microsoft ecosystem.'
   
        ]}
        speed={80}
        style={{ fontSize: '20px',fontFamily: "Moirai One",color:'white'}}
        // repeat={Infinity}
        />

 

</VStack>}
          percent={'55%'}
          offset={'325'}
        />
</ul>

<svg width="0" height="0">
<defs>
<linearGradient id="cl1" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="1" y2="1">
    <stop stop-color="#618099"/>
    <stop offset="100%" stop-color="#8e6677"/>
</linearGradient>
<linearGradient id="cl2" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
    <stop stop-color="#8e6677"/>
    <stop offset="100%" stop-color="#9b5e67"/>
</linearGradient>
<linearGradient id="cl3" gradientUnits="objectBoundingBox" x1="1" y1="0" x2="0" y2="1">
    <stop stop-color="#9b5e67"/>
    <stop offset="100%" stop-color="#9c787a"/>
</linearGradient>
<linearGradient id="cl4" gradientUnits="objectBoundingBox" x1="1" y1="1" x2="0" y2="0">
    <stop stop-color="#9c787a"/>
    <stop offset="100%" stop-color="#817a94"/>
</linearGradient>
<linearGradient id="cl5" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
    <stop stop-color="#817a94"/>
    <stop offset="100%" stop-color="#498a98"/>
</linearGradient>
<linearGradient id="cl6" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="1" y2="0">
    <stop stop-color="#498a98"/>
    <stop offset="100%" stop-color="#618099"/>
</linearGradient>


<linearGradient id="cl7" gradientUnits="objectBoundingBox" x1="0" y1="1" x2="0" y2="0">
    <stop stop-color="#817a94"/>
    <stop offset="100%" stop-color="#498a98"/>
</linearGradient>
</defs>
</svg>

 </HStack>

  )
}

export default Skills
