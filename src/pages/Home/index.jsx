import { Box, Flex, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import CardHome from "../../components/CardHome";
import CardImg from "../../components/CardImg";

import backgrond from "../../assets/wallpaper.png";
import desenvolvimento from "../../assets/desenvolvimento.svg";
import jogos from "../../assets/jogos.svg";
import institucional from "../../assets/institucional.svg";
import sistemas from "../../assets/sistemas.svg";
import ecommerce from "../../assets/ecommerce.svg";
import consultoria from "../../assets/consultoria.svg";
import amanda from "../../assets/amanda.svg";
import sidney from "../../assets/sidney.svg";
import matheus from "../../assets/matheus.svg";
import debora from "../../assets/debora.svg";
import pedro from "../../assets/pedro.svg";
import paulo from "../../assets/paulo.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import logo from "../../assets/logoGN.svg"

const Home = () => {
  return (
    <Box>
      <Box
        backgroundImage={backgrond}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        color="white"
        p="50px 20px"
      >
        <Heading mb="4">
          GALERA NERD
        </Heading>
        <Text fontSize="16px" >
          rem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500since
        </Text>
        <Button 
          mt="4" 
          p="6"
          w="150px"
          bg="purple.2" color="white" 
          _hover={{backgroundColor: "purple.4"}}
        >
          Saiba Mais
        </Button>
      </Box>
      <Box p="50px 20px" align="right" >
        <Heading mb="4" fontSize="38px"> 
          Quem somos 
        </Heading>
        <Text fontSize="16px" >
          Somos os melhores no nosso segmento, e é tudo graças aos relacionamentos incríveis que formamos com nossos clientes. 
          Ao contrário dos nossos concorrentes, somos dedicados ao desenvolvimento de uma conexão pessoal com cada um dos nossos clientes. 
          Para isso, prestamos serviços de qualidade e estamos à disposição 24 horas por dia, 7 dias por semana. 
          Entre em contato conosco quando estiver pronto para saber mais. Teremos o prazer de conhecê-lo
        </Text>
        <Button 
          mt="4" 
          p="6"
          w="150px"
          bg="purple.2" color="white" 
          _hover={{backgroundColor: "purple.4"}}
        >
          Ver Serviços
        </Button>
      </Box>
      <Box p="30px 20px" >
        <Heading mb="4" fontSize="38px"> 
          Nossos serviços 
        </Heading>
        <Flex wrap="wrap" justify="space-around" >
          <CardHome fontSize="20px">
            <CardImg>
              <Image src={desenvolvimento} />
            </CardImg>
            <Heading mb="4" fontSize="24px"> 
             Desenvolvi<wbr/>mento de Aplicativos
            </Heading>
            <Text fontSize="14px" color="#666665">
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
          </CardHome>
          <CardHome >
            <CardImg>
              <Image src={institucional} />
            </CardImg>
            <Heading mb="4" fontSize="24px"> 
              Website institucional 
            </Heading>
            <Text fontSize="14px" color="#666665">
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
          <CardHome >
            <CardImg>
              <Image src={sistemas} />
            </CardImg>
            <Heading mb="4" fontSize="24px"> 
              Sistemas 
            </Heading>
            <Text fontSize="14px" color="#666665">
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
          <CardHome>
            <CardImg>
              <Image src={jogos} />
            </CardImg>
            <Heading mb="4" fontSize="24px"> 
              Jogos 
            </Heading>
            <Text fontSize="14px" color="#666665">
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
          <CardHome>
            <CardImg>
              <Image src={ecommerce} />
            </CardImg>
            <Heading mb="4" fontSize="24px"> 
              E-commerce 
            </Heading>
            <Text fontSize="14px" color="#666665">
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
          <CardHome>
            <CardImg>
              <Image src={consultoria} />
            </CardImg>
            <Heading mb="4" fontSize="24px"> 
              Consultoria 
            </Heading>
            <Text color="#666665" fontSize="14px" >
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
        </Flex>
        <Box>
            <Heading fontSize="38px" mt="8" >
              Avaliações de clientes
            </Heading>
            <Flex mt="6" overflow="auto">
              <Box bg="purple.5" p="4" border="2px solid" borderColor="purple.2" borderRadius="lg" minWidth="240px" mr="4">
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">Amanda</Heading>
                <Text fontSize="14px" mt="4" color="#666665" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter pedido. Eles foram superprofissionais;
                  atenderam a todas as minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
              <Box bg="purple.5" p="4" border="2px solid" borderColor="purple.2" borderRadius="lg" minWidth="240px" mr="4">
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">Amanda</Heading>
                <Text fontSize="14px" mt="4" color="#666665" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter pedido. Eles foram superprofissionais;
                  atenderam a todas as minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
              <Box bg="purple.5" p="4" border="2px solid" borderColor="purple.2" borderRadius="lg" minWidth="240px" mr="4">
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">Amanda</Heading>
                <Text fontSize="14px" mt="4" color="#666665" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter pedido. Eles foram superprofissionais;
                  atenderam a todas as minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
              <Box bg="purple.5" p="4" border="2px solid" borderColor="purple.2" borderRadius="lg" minWidth="240px" mr="4">
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">Amanda</Heading>
                <Text fontSize="14px" mt="4" color="#666665" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter pedido. Eles foram superprofissionais;
                  atenderam a todas as minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
              <Box bg="purple.5" p="4" border="2px solid" borderColor="purple.2" borderRadius="lg" minWidth="240px" mr="4">
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">Amanda</Heading>
                <Text fontSize="14px" mt="4" color="#666665" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter pedido. Eles foram superprofissionais;
                  atenderam a todas as minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
              <Box bg="purple.5" p="4" border="2px solid" borderColor="purple.2" borderRadius="lg" minWidth="240px" mr="4">
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">Amanda</Heading>
                <Text fontSize="14px" mt="4" color="#666665" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter pedido. Eles foram superprofissionais;
                  atenderam a todas as minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
              <Box bg="purple.5" p="4" border="2px solid" borderColor="purple.2" borderRadius="lg" minWidth="240px" mr="4">
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">Amanda</Heading>
                <Text fontSize="14px" mt="4" color="#666665" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter pedido. Eles foram superprofissionais;
                  atenderam a todas as minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
              <Box bg="purple.5" p="4" border="2px solid" borderColor="purple.2" borderRadius="lg" minWidth="240px" mr="4">
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">Amanda</Heading>
                <Text fontSize="14px" mt="4" color="#666665" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter pedido. Eles foram superprofissionais;
                  atenderam a todas as minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
            </Flex>
        </Box>
      </Box>
      <Box bg="purple.2" color="white" p="50px 10px">
        <Heading fontSize="34px">A equipe responsável por essa idéia:</Heading>
      <Flex mt="8">
        <Image src={sidney} />
        <Box w="2px" mx="4" h="150px" bg="white"></Box>
        <Box>
          <Heading mt="6" fontSize="34px">Sidney Patez</Heading>
          <Text fontSize="16px">Product Owner</Text>
          <Text fontSize="14px"><Image src={github} display="inline-block" mr="2"/>/patezsidney</Text>
          <Text fontSize="14px"><Image src={linkedin} display="inline-block" mr="2"/>/in/sidney-patez</Text>
        </Box>
      </Flex> 
      <Flex mt="8">
        <Image src={debora} />
        <Box w="2px" mx="4" h="150px" bg="white"></Box>
        <Box>
          <Heading mt="6" fontSize="34px">Debora Pavani</Heading>
          <Text fontSize="16px">Scrum Master</Text>
          <Text fontSize="14px"><Image src={github} display="inline-block" mr="2"/>/depavani</Text>
          <Text fontSize="14px"><Image src={linkedin} display="inline-block" mr="2"/>/in/debora-pavani</Text>
        </Box>
      </Flex> 
      <Flex mt="8">
        <Image src={paulo} />
        <Box w="2px" mx="4" h="150px" bg="white"></Box>
        <Box>
          <Heading mt="6" fontSize="34px">Paulo H. Magno</Heading>
          <Text fontSize="16px">Tech Leader</Text>
          <Text fontSize="14px"><Image src={github} display="inline-block" mr="2"/>/PauloHenriqueMagno</Text>
          <Text fontSize="14px"><Image src={linkedin} display="inline-block" mr="2"/>/in/paulohenriquemagno</Text>
        </Box>
      </Flex> 
      <Flex mt="8">
        <Image src={pedro} />
        <Box w="2px" mx="4" h="150px" bg="white"></Box>
        <Box>
          <Heading mt="6" fontSize="34px">Pedro H.  Moreira</Heading>
          <Text fontSize="16px">Quality Assurance</Text>
          <Text fontSize="14px"><Image src={github} display="inline-block" mr="2"/>/pedromenimen</Text>
          <Text fontSize="14px"><Image src={linkedin} display="inline-block" mr="2"/>/in/pedro-henrique2</Text>
        </Box>
      </Flex> 
      <Flex mt="8">
        <Image src={matheus} />
        <Box w="2px" mx="4" h="150px" bg="white"></Box>
        <Box>
          <Heading mt="6" fontSize="34px">Matheus H. Burei</Heading>
          <Text fontSize="16px">Quality Assurance</Text>
          <Text fontSize="14px"><Image src={github} display="inline-block" mr="2"/>/Matheus-Henrique-Burey</Text>
          <Text fontSize="14px"><Image src={linkedin} display="inline-block" mr="2"/>/in/matheus-h-burei</Text>
        </Box>
      </Flex> 
      </Box>
      <Box p="12">
        <Image src={logo} w="130px" mb="6" />
        <Box><Link color="gray" href="#" >+5553999978929</Link></Box>
        <Box><Link color="gray" href="#" >contato@galeranerd.com</Link></Box>
        <Box><Link color="gray" href="#" >Av. Central, n 1234, São Paulo, Brasil</Link></Box>
      </Box>
    </Box>
  )
}

export default Home;
