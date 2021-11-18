import { Box, Heading } from "@chakra-ui/layout";
import ComponentInput from "../Input/index";
import { Button } from "@chakra-ui/button";
import Select from "react-select";
import { useContext, useState } from "react";
import { DevContext } from "../../providers/Dev";
import TextAreaInput from "../TextAreaInput";
import { FormLabel } from "@chakra-ui/form-control";

const DevForm = () => {
  const { devRegister } = useContext(DevContext);

  const options = [
    { value: "appDevelopment", label: "Desenvolvimento de Aplicativos" },
    { value: "instWebsite", label: "Website institucional" },
    { value: "systems", label: "Sistemas" },
    { value: "games", label: "Jogos" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "consult", label: "Consultoria" },
  ];

  const userInfo = JSON.parse(localStorage.getItem("galeranerd/user")) || "";

  const [linkedin, setLinkedin] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [price, setPrice] = useState(0);
  const [services, setServices] = useState([]);
  const [tecnologyList, setTecnologyList] = useState("");
  const [about, setAbout] = useState("");
  const data = {
    userId: userInfo.id,
    bio: about,
    contacts: { linkedin, gitHub, email: userInfo.email },
    categories: services.map((i) => i.label),
    hourValue: price,
    services: tecnologyList,
  };

  const onSelectChange = (value) => {
    setServices(value);
    return services;
  };

  const registerDev = () => {
    if (data.categories.length > 0 && price > 0) {
      return devRegister(data);
    }
  };

  return (
    <Box
      border={{
        mobile: "black solid 0.5px",
        desktop: "black solid 2px",
      }}
      sx={{
        width: "100%",
        label: {
          margin: "0",
          fontSize: { mobile: "14px", desktop: "16px" },
          color: "#666665",
        },
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        backgroundColor: "white",
        input: {
          bgColor: "grey.4",
          "::placeholder": {
            color: "#9E9Ea7",
          },
        },
      }}
    >
      <Heading
        fontSize={{
          mobile: "24px",
          desktop: "24px",
        }}
        sx={{ m: 5 }}
        color="black"
      >
        Complete seu cadastro
      </Heading>
      <form>
        <Box
          flexWrap={{
            mobile: "wrap",
            desktop: "nowrap",
          }}
          sx={{
            p: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box
            width={{
              mobile: "100%",
              desktop: "90%",
            }}
            padding={{ desktop: "15" }}
          >
            <ComponentInput
              labelMessage="Linkedin"
              onChange={(e) => setLinkedin(e.target.value)}
              placeholderMessage="Linkedin"
            />
            <ComponentInput
              labelMessage="Github"
              onChange={(e) => setGitHub(e.target.value)}
              placeholderMessage="Github"
            />

            <ComponentInput
              labelMessage="Valor/hora"
              placeholderMessage="R$ 20,00"
              onChange={(e) => setPrice(e.target.value)}
              type="number"
            />
            <ComponentInput
              labelMessage="Quais tecnologias você usa?"
              onChange={(e) => setTecnologyList(e.target.value)}
              placeholderMessage="Ex: HTML,JS,CSS..."
            />
            <Box
              width={{
                mobile: "100%",
                desktop: "100%",
              }}
            >
              <FormLabel>O que você faz?</FormLabel>
              <Select
                options={options}
                isMulti
                closeMenuOnSelect={false}
                onChange={onSelectChange}
                placeholder="Categorias"
              />
            </Box>
          </Box>
          <Box sx={{ width: "100%", height: "100%" }}>
            <FormLabel>Fale um pouco sobre você</FormLabel>
            <TextAreaInput
              rows="8"
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Fale um pouco sobre você aqui..."
              register={() => {}}
            />
          </Box>
        </Box>
        <Button
          sx={{
            bgColor: "purple.2",
            color: " white",
            width: "30%",
            display: "block",
            m: "0 auto 20px",
          }}
          onClick={() => {
            console.log(data);
            registerDev();
          }}
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default DevForm;
