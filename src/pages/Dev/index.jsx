import DevForm from "../../components/DevForm";
import ProjectCard from "../../components/ProjectCard";
import HeaderComponent from "../../components/Header";
import { Box, Flex, Accordion, Heading } from "@chakra-ui/react";
import { useContext } from "react";
import { ProjectsContext } from "../../providers/Projects";

const Dev = () => {
  const { projectList } = useContext(ProjectsContext);
  return (
    <>
      <HeaderComponent />
      <Flex
        align="center"
        justifyContent={{ mobile: "center", desktop: "center" }}
        bgGradient={{
          mobile: "linear(to-b, purple.2 85%, white 35%)",
          desktop: "linear(to-b, purple.2 50%, white 50%, )",
        }}
      >
        <Box
          m={{ mobile: "20px", desktop: "60px" }}
          flex-direction="column"
          justifyContent="space-around"
          h="100vh"
          w="100vw"
          maxWidth="1280"
        >
          <DevForm />
          <Heading
            mt="10"
            fontSize={{
              mobile: "24px",
              desktop: "34px",
            }}
          >
            Meus projetos
          </Heading>
          <Accordion mt="50px" defaultIndex={[0]} allowMultiple>
            <ProjectCard
              id="1"
              devId="1"
              projectId="1"
              description="Um projeto inovador para uma Preciso de um site simples para minha empresa. Que mostre os produtos e possa linkar com o número do whatsapp para finalizar o pedido via pix. Não trabalho com cartão então não há a necessidade de inserir via de pagamento online no site, apenas mostrar os produtos."
              status="Confirmar o orçamento"
              budget="Seu projeto de um ecommerce tomará em média uma semana para que fique pronto. O valor do orçamento cobre a mão de obra do serviço e além disso haverá um gasto fixo mensal de 50 reais para hospedagem do site.
                O valor do orçamento é de: 600 reais."
            />
            {projectList.map((project) => (
              <ProjectCard
                id={project.userId}
                devId={project.devId}
                projectId={project.id}
                description={project.requestDescription}
                status={project.stats}
                budget={project.budget}
              />
            ))}
          </Accordion>
        </Box>
      </Flex>
    </>
  );
};

export default Dev;
