import React from "react";
import { VStack, Text,Stack, Divider, HStack, Heading,Flex,Badge,Button,Image} from "@chakra-ui/react";
import { FaCode, FaEye } from "react-icons/fa";

const Projectcard =({title,desc,img,skills,codeurl,liveurl})=>{
return(
  <Stack  direction={['column-reverse','row']} borderBottom={'1px'} w={"full"} bgColor={'blackAlpha.300'} p={'8'} >
  <VStack w={"full"} alignItems={"start"}>
    <Heading letterSpacing={"wide"} fontSize={"2xl"}>
      {title}
    </Heading>
    <Text
      opacity={"0.8"}
      letterSpacing={"wider"}
      textAlign={"justify"}
    >
    {desc}
    </Text>
    <Text fontSize={'lg'} mt={'4'}>Skills</Text>
    <Flex flexWrap={'wrap'} gap={'4'} w={'full'}>

      {skills.map((skill,index)=>(
         <Badge children={skill} key={index} p={'2'} px={'4'} colorScheme='green' textColor={'black'} rounded={'full'}/>
          ))}
</Flex>
<HStack mt={'4'}>
<a href={codeurl} target="blank">
<Button colorScheme="whiteAlpha"> <FaCode/> &nbsp; View Code</Button>
</a>
<a href={liveurl} target="blank">
<Button textColor={'white'} _hover={{backgroundColor:'none'}} variant={'outline'}> <FaEye/> &nbsp; Live Demo
</Button>
</a>
</HStack>

  </VStack>
  <VStack w={"full"} h={'full'} p={['2','8']}>
    <Image rounded={'lg'} src={img}/>
  </VStack>
</Stack>
);
}

const Projects = () => {

const showritySkills =['Node','Express','MongoDB','React','Redis','Redux'];
const showritydesc = "Showrity, a dynamic web application, seamlessly combines job posting and freelancing, creating a versatile platform for both employers and freelancers. With an intuitive interface, Showrity empowers users to connect effortlessly, facilitating the exchange of skills and opportunities in the ever-evolving job market. Explore a new era of professional connections with Showrity!"

const showrityImage="https://cdn.dribbble.com/users/3050354/screenshots/14646894/media/1f31948afd5401c44d4bae934f07641a.gif";
const showritycodeurl ="https://github.com/xdashutosh/frontshowrity.git";
const showritylive="https://frontshowrity.vercel.app";


const GyanSkills =['Redis','Node','Redux','React','MongoDB','ChakraUI','RazorPay','Nodecron'];
const Gyandesc = "Introducing my innovative education web app, a comprehensive platform enabling seamless course uploads, subscription-based access, and a feature-rich admin dashboard. Empowering learners and educators alike, this dynamic solution facilitates an immersive educational experience, transforming the way knowledge is shared and acquired."

const GyanImage="https://i.pinimg.com/originals/f4/6c/4f/f46c4f0c2842ed57ac3670e35faaa411.gif";
const Gyancodeurl ="https://github.com/xdashutosh/frontend.git";
const Gyanlive="https://frontend-pearl-two.vercel.app/";


const CryptoSkills =['Rapid API','React','Redux','Sqlite','MongoDB','ChakraUI','Nodecron'];
const Cryptodesc = "Explore the world of cryptocurrencies with my cutting-edge information website, offering real-time statistics for over 1000 digital currencies. Dive into the market trends, track live data, and access registration links for each cryptocurrency. Empowering enthusiasts and investors, this platform is your gateway to the dynamic realm of decentralized finance."

const CryptoImage="https://bitpay.com/blog/content/images/size/w600/2022/01/buy-games-with-crypto-blog-header.gif";
const Cryptocodeurl ="https://github.com/xdashutosh/cryptoinfo";
const Cryptolive="https://cryptoinfo-delta.vercel.app/";

  return (
    <VStack
      w={"full"}
      h={"full"}
      bgColor={"#28282b"}
      textColor={"white"}
      px={['0',"32"]}
     pt={'2'}
    >
      <VStack w={"full"} >
        <HStack w={"50%"}>
          <Divider display={['none','inline-block']} color={"#f9f9f9"} />
          <Text
            border={"1px solid #f9f9f9"}
            rounded={"lg"}
            textAlign={"center"}
            w={"100%"}
            letterSpacing={"wider"}
            fontSize={['lg',"3xl"]}
          >
            Projects
          </Text>
          <Divider display={['none','inline-block']} />
        </HStack>
        <Text textAlign={'center'}>
          Real world applications I have used my skillset to design and build
        </Text>
        <VStack mt={'8'} overflowX={'hidden'} px={'4'} w={"full"} h={"full"} spacing={'16'}>
<Projectcard title={"Showrity"} desc={showritydesc} img={showrityImage} skills={showritySkills} codeurl={showritycodeurl} liveurl={showritylive} />

<Projectcard title={"GyanKart"} desc={Gyandesc} img={GyanImage} skills={GyanSkills} codeurl={Gyancodeurl} liveurl={Gyanlive} />
     
<Projectcard title={"Cryptoinfo"} desc={Cryptodesc} img={CryptoImage} skills={CryptoSkills} codeurl={Cryptocodeurl} liveurl={Cryptolive} />



        </VStack>
      </VStack>
    </VStack>
  );
};

export default Projects;
