import { Box, Heading } from "@chakra-ui/layout";
import ComponentInput from "../Input/index";
import { Button } from "@chakra-ui/button";
import Select from "react-select";
import { useContext, useState } from "react";
import { DevContext } from "../../providers/Dev";
import TextAreaInput from "../TextAreaInput";

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
    console.log(services);
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
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        backgroundColor: "white",
        input: {
          bgColor: "grey.4",
          m: "9px 0",
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
              onChange={(e) => setLinkedin(e.target.value)}
              placeholderMessage="Linkedin"
            />
            <ComponentInput
              onChange={(e) => setGitHub(e.target.value)}
              placeholderMessage="Github"
            />

            <ComponentInput
              placeholderMessage="R$ 20,00"
              onChange={(e) => setPrice(e.target.value)}
              type="number"
            />
            <ComponentInput
              onChange={(e) => setTecnologyList(e.target.value)}
              placeholderMessage="Ex: HTML,JS,CSS..."
            />
            <Box
              width={{
                mobile: "100%",
                desktop: "90%",
              }}
              padding={{ mobile: "15" }}
            >
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
            <TextAreaInput
              rows="8"
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Fale mais sobre você aqui..."
              register={() => {}}
            />
          </Box>
        </Box>
        <Button
          left={{ mobile: "40%", desktop: "45%" }}
          sx={{
            bgColor: "purple.2",
            color: " white",
            width: "30%",
            transform: "translate(-50%)",
            m: "5",
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
