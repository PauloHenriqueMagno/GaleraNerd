import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import CategoryCardList from "../../components/CategoryCardList";

import backgrond from "../../assets/wallpaper.png";
import amanda from "../../assets/amanda.svg";
import sidney from "../../assets/sidney.svg";
import matheus from "../../assets/matheus.svg";
import debora from "../../assets/debora.svg";
import pedro from "../../assets/pedro.svg";
import paulo from "../../assets/paulo.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import logo from "../../assets/logoGN.svg";
import imghome from "../../assets/imghome.png";

const Home = () => {
  return (
    <>
      <Header />

      <Box
        backgroundImage={backgrond}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        color="white"
        p="50px 20px"
        h={{ mobile: "400px", desktop: "600px" }}
      >
        <Flex
          maxW="1280px"
          margin="0 auto"
          h="100%"
          direction="column"
          justifyContent="center"
        >
          <Heading mb="4">GALERA NERD</Heading>
          <Text fontSize="16px" maxW="500px">
            Sem dificuldade, sem burocracia e sem demora! <br />
            Uma maneira simples de encontrar o desenvolvedor para tirar o seu
            projeto do papel.
          </Text>
          <Button
            as="a"
            href="#quemSomos"
            mt="4"
            p="6"
            w="150px"
            bg="purple.2"
            color="white"
            _hover={{ backgroundColor: "purple.4" }}
          >
            Saiba Mais
          </Button>
        </Flex>
      </Box>
      <Box maxW="1280px" m="auto">
        <Flex align="center" justify="center" id="quemSomos">
          <Image
            src={imghome}
            display={{ mobile: "none", desktop: "inline-block" }}
            borderRadius="lg"
            mx="4"
          />
          <Box p="50px 20px" align="right">
            <Heading mb="4" fontSize="38px">
              Quem somos
            </Heading>
            <Text fontSize="16px" maxW="760px">
              Somos os melhores no nosso segmento, e é tudo graças aos
              relacionamentos incríveis que formamos com nossos clientes. Ao
              contrário dos nossos concorrentes, somos dedicados ao
              desenvolvimento de uma conexão pessoal com cada um dos nossos
              clientes. Para isso, prestamos serviços de qualidade e estamos à
              disposição 24 horas por dia, 7 dias por semana. Entre em contato
              conosco quando estiver pronto para saber mais. Teremos o prazer de
              conhecê-lo
            </Text>
            <Button
              as="a"
              href="#servicos"
              mt="4"
              p="6"
              w="150px"
              bg="purple.2"
              color="white"
              _hover={{ backgroundColor: "purple.4" }}
            >
              Ver Serviços
            </Button>
          </Box>
        </Flex>
        <Box p="30px 20px" id="servicos">
          <Heading mb="4" fontSize="38px">
            Nossos serviços
          </Heading>
          <CategoryCardList />
          <Box>
            <Heading
              fontSize="38px"
              mt="8"
              align={{ mobile: "left", desktop: "center" }}
            >
              Avaliações de clientes
            </Heading>
            <Flex
              mt="6"
              wrap={{ mobile: "no-wrap", desktop: "wrap" }}
              overflow="auto"
              justify={{ mobile: "start", desktop: "space-around" }}
            >
              <Box
                bg="purple.6"
                p="4"
                maxW="350px"
                border="2px solid"
                borderColor="purple.2"
                borderRadius="lg"
                minWidth="240px"
                m="2"
              >
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">
                  Amanda
                </Heading>
                <Text fontSize="14px" mt="4" color="black.2" lineHeight="24px">
                  Há uma infinidade de coisas boas sobre a qualidade dessa
                  empresa. Super recomendo!
                </Text>
              </Box>
              <Box
                bg="purple.6"
                p="4"
                maxW="350px"
                border="2px solid"
                borderColor="purple.2"
                borderRadius="lg"
                minWidth="240px"
                m="2"
              >
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">
                  Amanda
                </Heading>
                <Text fontSize="14px" mt="4" color="black.2" lineHeight="24px">
                  Toda a experiência foi fácil e amigável, e o preço foi muito
                  razoável. Não sei o que teria feito sem o serviço deles.
                </Text>
              </Box>
              <Box
                bg="purple.6"
                p="4"
                border="2px solid"
                maxW="350px"
                borderColor="purple.2"
                borderRadius="lg"
                minWidth="240px"
                m="2"
              >
                <Image src={amanda} />
                <Heading mt="6" fontSize="20px">
                  Amanda
                </Heading>
                <Text fontSize="14px" mt="4" color="black.2" lineHeight="24px">
                  Eu sinceramente recebi o melhor serviço que poderia ter
                  pedido. Eles foram superprofissionais; atenderam a todas as
                  minhas necessidades e me ajudaram muito.
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box bg="purple.2" color="white" p="50px 10px">
          <Heading fontSize="34px">
            A equipe responsável por essa idéia:
          </Heading>
          <Flex
            direction={{ mobile: "column", desktop: "row" }}
            wrap="wrap"
            justify="space-around"
          >
            <Flex mt="8">
              <Image src={sidney} />
              <Box w="2px" mx="4" bg="white"></Box>
              <Box>
                <Heading mt="6" fontSize="24px">
                  Sidney Patez
                </Heading>
                <Text fontSize="16px">Product Owner</Text>
                <Text fontSize="14px">
                  <Image src={github} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://github.com/patezsidney/"
                    target="_blank"
                  >
                    /patezsidney
                  </Link>
                </Text>
                <Text fontSize="14px">
                  <Image src={linkedin} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://linkedin.com/in/sidney-patez/"
                    target="_blank"
                  >
                    /in/sidney-patez
                  </Link>
                </Text>
              </Box>
            </Flex>
            <Flex mt="8">
              <Image src={debora} />
              <Box w="2px" mx="4" bg="white"></Box>
              <Box>
                <Heading mt="6" fontSize="24px">
                  Debora Pavani
                </Heading>
                <Text fontSize="16px">Scrum Master</Text>
                <Text fontSize="14px">
                  <Image src={github} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://github.com/depavani/"
                    target="_blank"
                  >
                    /depavani
                  </Link>
                </Text>
                <Text fontSize="14px">
                  <Image src={linkedin} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://linkedin.com/in/debora-pavani/"
                    target="_blank"
                  >
                    /in/debora-pavani
                  </Link>
                </Text>
              </Box>
            </Flex>
            <Flex mt="8">
              <Image src={paulo} />
              <Box w="2px" mx="4" bg="white"></Box>
              <Box>
                <Heading mt="6" fontSize="24px">
                  Paulo H. Magno
                </Heading>
                <Text fontSize="16px">Tech Leader</Text>
                <Text fontSize="14px">
                  <Image src={github} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://github.com/PauloHenriqueMagno/"
                    target="_blank"
                  >
                    /PauloHenri
                    <wbr />
                    queMagno
                  </Link>
                </Text>
                <Text fontSize="14px">
                  <Image src={linkedin} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://linkedin.com/in/paulohenriquemagno/"
                    target="_blank"
                  >
                    /in/paulo
                    <wbr />
                    henriquemagno
                  </Link>
                </Text>
              </Box>
            </Flex>
            <Flex mt="8">
              <Image src={pedro} />
              <Box w="2px" mx="4" bg="white"></Box>
              <Box>
                <Heading mt="6" fontSize="24px">
                  Pedro H. Moreira
                </Heading>
                <Text fontSize="16px">Quality Assurance</Text>
                <Text fontSize="14px">
                  <Image src={github} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://github.com/pedromenimen/"
                    target="_blank"
                  >
                    /pedromenimen
                  </Link>
                </Text>
                <Text fontSize="14px">
                  <Image src={linkedin} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://linkedin.com/in/pedro-henrique2/"
                    target="_blank"
                  >
                    /in/pedro-henrique2
                  </Link>
                </Text>
              </Box>
            </Flex>
            <Flex mt="8">
              <Image src={matheus} />
              <Box w="2px" mx="4" bg="white"></Box>
              <Box>
                <Heading mt="6" fontSize="24px">
                  Matheus H. Burei
                </Heading>
                <Text fontSize="16px">Quality Assurance</Text>
                <Text fontSize="14px">
                  <Image src={github} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://github.com/Matheus-Henrique-Burey/"
                    target="_blank"
                  >
                    /Matheus-Henrique-Burey
                  </Link>
                </Text>
                <Text fontSize="14px">
                  <Image src={linkedin} display="inline-block" mr="2" />
                  <Link
                    color="white"
                    href="https://linkedin.com/in/matheus-h-burei/"
                    target="_blank"
                  >
                    /in/matheus-h-burei
                  </Link>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Flex
          p="12"
          wrap="wrap"
          justify={{ mobile: "start", desktop: "space-around" }}
          direction={{ mobile: "column", desktop: "row" }}
        >
          <Image src={logo} w="130px" mb="6" />
          <Box>
            <Box>
              <Link color="gray" href="#">
                +5599999999999
              </Link>
            </Box>
            <Box>
              <Link color="gray" href="#">
                contato@galeranerd.com
              </Link>
            </Box>
            <Box>
              <Link color="gray" href="#">
                Av. Central, n 1234, São Paulo, Brasil
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
