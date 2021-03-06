import React from "react";
import {
  FooterStyled,
  FooterContainer,
  FooterTitle,
  AppList,
} from "./Footer.style";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: "400px" }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={"body2"} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nemo modi nihil qui et quisquam asperiores perferendis, aliquid,
            magnam cupiditate aut ipsum est omnis natus atque a quae dolores
            eligendi.
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos</FooterTitle>
          <AppList>
            <li>
              <a href={"/"} target="_blank" rel={"noopener noreferrer"}>
                <img src="/img/logos/app-store.png" alt={"AppStore"} />
              </a>
            </li>
            <li>
              <a href={"/"} target="_blank" rel={"noopener noreferrer"}>
                <img src="/img/logos/google-play.png" alt={"Google Play"} />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};
export default Footer;
