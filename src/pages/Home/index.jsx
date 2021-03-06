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
import richard from "../../assets/richard.jpeg";
import samuel from "../../assets/samuel.png";

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
      <Box>
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
                Somos os melhores no nosso segmento, e ?? tudo gra??as aos
                relacionamentos incr??veis que formamos com nossos clientes. Ao
                contr??rio dos nossos concorrentes, somos dedicados ao
                desenvolvimento de uma conex??o pessoal com cada um dos nossos
                clientes. Para isso, prestamos servi??os de qualidade e estamos ??
                disposi????o 24 horas por dia, 7 dias por semana. Entre em contato
                conosco quando estiver pronto para saber mais. Teremos o prazer de
                conhec??-lo
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
                Ver Servi??os
              </Button>
            </Box>
          </Flex>
          <Box p="30px 20px" id="servicos">
            <Heading mb="4" fontSize="38px">
              Nossos servi??os
            </Heading>
            <CategoryCardList />
            <Box>
              <Heading
                fontSize="38px"
                mt="8"
                align={{ mobile: "left", desktop: "center" }}
              >
                Avalia????es de clientes
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
                  <Image boxSize="120px" borderRadius="full" src={amanda} />
                  <Heading mt="6" fontSize="20px">
                    Amanda
                  </Heading>
                  <Text fontSize="14px" mt="4" color="black.2" lineHeight="24px">
                    H?? uma infinidade de coisas boas sobre a qualidade dessa
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
                  <Image boxSize="120px" borderRadius="full" src={samuel} />
                  <Heading mt="6" fontSize="20px">
                    Samuel
                  </Heading>
                  <Text fontSize="14px" mt="4" color="black.2" lineHeight="24px">
                    Toda a experi??ncia foi f??cil e amig??vel, e o pre??o foi muito
                    razo??vel. N??o sei o que teria feito sem o servi??o deles.
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
                  <Image boxSize="120px" borderRadius="full" src={richard} />
                  <Heading mt="6" fontSize="20px">
                    Richard
                  </Heading>
                  <Text fontSize="14px" mt="4" color="black.2" lineHeight="24px">
                    Eu sinceramente recebi o melhor servi??o que poderia ter
                    pedido. Eles foram superprofissionais; atenderam a todas as
                    minhas necessidades e me ajudaram muito.
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Box>
        <Box bg="purple.2" color="white" p="50px 10px">
          <Box maxW="1280px" m="auto">
            <Heading fontSize="34px">
              A equipe respons??vel por essa id??ia:
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
        </Box>
        <Flex
          maxW="1280px"
          m="auto"
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
                Av. Central, n 1234, S??o Paulo, Brasil
              </Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
