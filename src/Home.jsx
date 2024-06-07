import {
  Box,
  HStack,
  Text,
  VStack,
  Heading,
  Button,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/react";

import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import { FaPlaneDeparture, FaBookReader, FaHeart } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { MdWorkHistory } from "react-icons/md";
import { BsGithub, BsLinkedin, BsReddit } from "react-icons/bs";

const steps = [
  {
    title: "2020-2021",
    description:
      "In 2020, I embarked on a transformative journey into the world of technology by choosing engineering as my career path. This pivotal decision marked the beginning of my exploration into the intricate realms of computer science and technology. As a budding engineer, I delved into diverse subjects, ranging from programming languages and algorithms to software development. Throughout the academic year 2020-2021, I honed my skills, gaining a profound understanding of the foundational principles that underpin the ever-evolving field of technology. This period of immersive learning not only equipped me with technical expertise but also instilled in me a passion for innovation and problem-solving. The experiences of this academic year laid a solid foundation, shaping my trajectory for future academic and professional endeavors in the dynamic and exciting landscape of technology.",
  },

  {
    title: "2021-2022",
    description:
      "In 2021 and 2022, understanding of engineering concepts, immersing myself in the intricacies of operating systems, database management systems, data structures, and algorithms. While grappling with the complexities of these subjects presented challenges, the process was undeniably enjoyable. Exploring the inner workings of operating systems revealed the intricate dance of software and hardware, while delving into database management systems provided insights into efficient data organization. Tackling data structures and algorithms brought a sense of logic and precision to problem-solving. Despite the difficulties encountered along the way, the learning experience was enriching and fulfilling. This period not only expanded my knowledge base but also fostered a resilient and problem-solving mindset, laying the groundwork for my ongoing academic journey in the dynamic field of engineering.",
  },

  {
    title: "2023-Present",
    description: `
  WOoooooh! My pivotal journey by securing my first internship at DRDO, Delhi, where I delved into the intricacies of the MERN stack. Over three transformative months, I honed my skills and gained hands-on experience in developing cutting-edge applications. This invaluable opportunity not only deepened my understanding of software development but also exposed me to real-world challenges.
  Following my enriching internship, I transitioned to a dynamic role as a Software Engineer at "Orage Technologies," an innovative Indian tech startup. In this vibrant environment, I actively contributed to various projects, leveraging my expertise in the MERN stack. The fast-paced nature of the startup allowed me to thrive, fostering continuous learning and growth. Building diverse projects at "Orage Technologies" not only expanded my technical repertoire but also solidified my passion for crafting impactful solutions in the ever-evolving landscape of technology.
  `,
  },
];

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); //

  return (
    <>
      <Box
        h={"90vh"}
        backgroundImage={
          "https://user-images.githubusercontent.com/40719899/205479251-ffba5354-583f-491b-a1ef-ce919083e2b1.gif"
        }
        backgroundColor={"#050A30"}
        backgroundPosition={"center"}
        backgroundSize={"contain"}
        backgroundRepeat={"no-repeat"}
        w={"full"}
      >
        <Stack direction={["column", "row"]} w={"full"} h={"full"}>
    

          <VStack
            justifyContent={"end"}
            alignItems={"end"}
            h={"full"}
            w={"full"}
            p={"4"}
          >
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Reactjs", // initially rendered starting point
                1000,
                "UI/UX",
                1000,
                "Nodejs",
                1000,
                "Express",
                1000,
                "Redis",
                1000,
                "SQLite",
                1000,
                "Nextjs",
                1000,
                ".NET",
                1000,
                "Mongodb",
                1000,
                "Docker",
                1000,
                "Nginx",
                1000,
                "SSL",
                1000,
                "CI/CD",
                1000,
              ]}
              speed={50}
              style={{
                fontSize: "2em",
                fontFamily: "Moirai One",
                color: "white",
              }}
              repeat={Infinity}
            />
          </VStack>
        </Stack>
      </Box>
      <Box
        w={"full"}
        px={["4", "16"]}
        bgColor={"#28282b"}
        fontFamily={"lato"}
        textColor={"white"}
      >
        <VStack w={"full"} p={["4", "2"]}>
          <Heading
            fontSize={"8vw"}
            className="myself"
            w={"full"}
            letterSpacing={"wider"}
            style={{ textShadow: "-0.08em 0.03em 0.12em rgba(0,0,0,0.7)" }}
          >
            Skilled/Experienced software engineer FullStack developer
            <Divider />
          </Heading>

          <Text
            fontFamily={"lato"}
            opacity={"0.9"}
            w={["100%", "50%"]}
            alignSelf={"end"}
            textAlign={"justify"}
            fontSize={["6vw", "2vw"]}
          >
            <b>O</b>ver the past 2+ years, I've worked in various areas of
            digital design, including front-end development, backend
            development, react-native apps, UI/UX. I'm proud to have worn many
            hats. These days, I focus on efficient design and code, and wooh! i
            am excited as its my last year of graduation @btech
            <Divider />
          </Text>

          <div className="cardiv">
            <span className="carword">C</span>
            <span className="carword">A</span>
            <span className="carword">R</span>
            <span className="carword">E</span>
            <span className="carword">E</span>
            <span className="carword">R</span>
          </div>

          <HStack w={"full"} h={"full"} pb={"16"}>
            <Stepper
              w={"full"}
              size={"lg"}
              index={activeStep}
              colorScheme="green"
              orientation="vertical"
              height="120vh"
              gap="8"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator
                    h={["50px", "100px"]}
                    w={["50px", "100px"]}
                    bgColor={"White"}
                    color={"black"}
                  >
                    <StepStatus
                      complete={<FaPlaneDeparture size={"36"} />}
                      active={<FaBookReader size={"36"} />}
                      incomplete={<MdWorkHistory size={"36"} />}
                    />
                  </StepIndicator>

                  <Box
                    flexShrink="0"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <StepTitle>
                      <Heading>{step.title}</Heading>
                    </StepTitle>
                    <StepDescription
                      fontSize="xl"
                      w="70vw"
                      boxSizing="border-box"
                      textColor="white"
                      opacity="0.8"
                    >
                      {/* {step.description} */}
                      

                      <Text fontSize={["6vw", "2vw"]} >
                        {expanded
                          ? step.description
                          : `${step.description.slice(0, 300)}...`}
                      </Text>
                      <Button
                        onClick={toggleExpansion}
                        bgColor={"transparent"}
                        textDecor={"underline"}
                        variant={"unstyled"}
                        size="sm"
                      >
                        {expanded ? "Show less" : "Read more"}
                      </Button>
                    </StepDescription>
                  </Box>

                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </HStack>
        </VStack>
      </Box>
      <HStack  display={['none','flex']} w={'full'}  justifyContent={'space-around'} textColor={'white'} p={'8'} bgColor={'#05001d'} fontSize={'xl'}>
        <Text >Made with <FaHeart color="pink"/> ayushi.chaudhary.cse.2020@miet.ac.in</Text>
        <HStack spacing={'4'} textColor={'white'}  fontSize={'xl'}>
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
    </>
  );
};

export default Home;
