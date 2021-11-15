import { Box, Flex, Heading, Text, Button, Image } from "@chakra-ui/react";
import CardHome from "../../components/CardHome";
import CardImg from "../../components/CardImg";

import backgrond from "../../assets/wallpaper.png";
import desenvolvimento from "../../assets/desenvolvimento.svg";
import jogos from "../../assets/jogos.svg";
import institucional from "../../assets/institucional.svg";
import sistemas from "../../assets/sistemas.svg";
import ecommerce from "../../assets/ecommerce.svg";
import consultoria from "../../assets/consultoria.svg";

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
        <Heading mb="4" > 
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
        <Heading mb="4" > 
          Nossos serviços 
        </Heading>
        <Flex wrap="wrap" justify="space-around" >
          <CardHome fontSize="20px">
            <CardImg>
              <Image src={desenvolvimento} />
            </CardImg>
            <Heading mb="4"> 
             Desenvolvi<wbr/>mento de Aplicativos
            </Heading>
            <Text fontSize="14px" >
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
          </CardHome>
          <CardHome >
            <CardImg>
              <Image src={institucional} />
            </CardImg>
            <Heading mb="4" > 
              Website institucional 
            </Heading>
            <Text fontSize="14px" >
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
          <CardHome >
            <CardImg>
              <Image src={sistemas} />
            </CardImg>
            <Heading mb="4" > 
              Sistemas 
            </Heading>
            <Text fontSize="14px" >
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
          <CardHome>
            <CardImg>
              <Image src={jogos} />
            </CardImg>
            <Heading mb="4" > 
              Jogos 
            </Heading>
            <Text fontSize="14px" >
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
          <CardHome>
            <CardImg>
              <Image src={ecommerce} />
            </CardImg>
            <Heading mb="4" > 
              E-commerce 
            </Heading>
            <Text fontSize="14px" >
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
          <CardHome>
            <CardImg>
              <Image src={consultoria} />
            </CardImg>
            <Heading mb="4" > 
              Consultoria 
            </Heading>
            <Text fontSize="14px" >
              Criar um aplicativo parte da vontade que se tem de oferecer um serviço diferenciado para o público e seus clientes.
            </Text>
           </CardHome>
        </Flex>
        <Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Home;
