import { Box, Heading } from "@chakra-ui/layout";
import ComponentInput from "../Input/index";
import { Button } from "@chakra-ui/button";
import Select from "react-select";
import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const DevForm = () => {
  const formSchema = yup.object().shape({
    linkedin: yup.string().required(),
    services: yup.array()
  });

  const {
    register,
    handleSubmit,
  } = useForm({ resolver: yupResolver(formSchema) });
  const options = [
    { value: "appDevelopment", label: "Desenvolvimento de Aplicativos" },
    { value: "instWebsite", label: "Website institucional" },
    { value: "systems", label: "Sistemas" },
    { value: "games", label: "Jogos" },
    { value: "ecommerce", label: "E-commerce" },
    { value: "consult", label: "Consultoria" },
  ];
  const [linkedin, setLinkedin] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [price, setPrice] = useState(0);
  const [services, setServices] = useState([]);
  const [tecnologyList, setTecnologyList] = useState("");
  const [about, setAbout] = useState("");
  const data = {
    linkedin: linkedin,
    gitHub: gitHub,
    price: price,
    services: services.map((i) => i.label),
    tecnologyList: tecnologyList,
    about: about,
  };
  const consolelogdodata = (data) => {
    console.log(data);
  };
  const onSelectChange = (value) => {
    setServices(value);
  };
  return (
    <Box>
      <Heading color="black" backgroundColor="white">
        Complete seu cadastro
      </Heading>
      <form onSubmit={handleSubmit(consolelogdodata)}>
        <ComponentInput
          register={register}
          registerName="linkedin"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          placeholderMessage="Linkedin"
        />
        <ComponentInput
          value={gitHub}
          onChange={(e) => setGitHub(e.target.value)}
          placeholderMessage="Github"
        />

        <ComponentInput
          placeholderMessage="R$ 20,00"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
        />
        <Select
        {...register("services")}
          defaultValue={services}
          onChange={onSelectChange}
          closeMenuOnSelect={false}
          isMulti
          options={options}
        />
        <ComponentInput
          value={tecnologyList}
          onChange={(e) => setTecnologyList(e.target.value)}
          placeholderMessage="Ex: HTML,JS,CSS..."
        />
        <ComponentInput
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholderMessage="Fale mais sobre você aqui..."
        />
        <Button type="submit" /* onClick={() => console.log(data)} */>
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default DevForm;
