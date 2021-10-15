//pagina inicial da aplicação

import type { NextPage } from "next";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "ui/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@mui/material";
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from "ui/styles/pages/index.style";

//passa os elementos para a props do componente para assim alterar as informações

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha o seu endereço e veja todos os profissionais da sua localidade."
        }
      />
      <FormElementsContainer>
        <TextFieldMask
          mask={"99.999-999"}
          label={"Digite seu CEP"}
          fullWidth
          variant={"outlined"}
        />
        <Typography color={"error"}>CEP Inválido</Typography>
        <Button
          variant={"contained"}
          color={"secondary"}
          sx={{ width: "220px" }}
        >
          Buscar
        </Button>
      </FormElementsContainer>
      <ProfissionaisPaper>
        <ProfissionaisContainer>
          <UserInformation
            name={"Gabriel Moreira"}
            picture={"https://github.com/JoseGabrielm.png"}
            rating={4}
            description={"São Paulo"}
          />
          <UserInformation
            name={"Gabriel Moreira"}
            picture={"https://github.com/JoseGabrielm.png"}
            rating={4}
            description={"São Paulo"}
          />
          <UserInformation
            name={"Gabriel Moreira"}
            picture={""}
            rating={4}
            description={"São Paulo"}
          />
          <UserInformation
            name={"Gabriel Moreira"}
            picture={"https://github.com/JoseGabrielm.png"}
            rating={4}
            description={"São Paulo"}
          />
          <UserInformation
            name={"Gabriel Moreira"}
            picture={"https://github.com/JoseGabrielm.png"}
            rating={4}
            description={"São Paulo"}
          />
          <UserInformation
            name={"Gabriel Moreira"}
            picture={""}
            rating={4}
            description={"São Paulo"}
          />
        </ProfissionaisContainer>
      </ProfissionaisPaper>
    </div>
  );
};

export default Home;
