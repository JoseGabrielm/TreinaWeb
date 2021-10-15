import { Avatar, styled, Rating } from "@mui/material";

//define as avaliações como grid, separa em linhas por elemento e define o nome das mesmas com "grid-template-areas"
//e depois designa cada elemento para sua posição nomeada anteriormente utilizando "grid-area" em cada elemento
export const UserInformationContainer = styled("div")`
  display: grid; //define como grid
  grid-template-columns: 60px 1fr; //dimensões do grid
  grid-template-rows: repeat(3, auto); //linhas do grid
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";

  background-color: ${({ theme }) => theme.palette.grey["50"]};
  padding: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(0.5) + " " + theme.spacing(2)};
  align-items: center;
`;
export const UserName = styled("div")`
  grid-area: name;
  font-weight: bolder;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
export const UserDescription = styled("div")`
  grid-area: description;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;
export const AvatarStyled = styled(Avatar)`
  grid-area: avatar;
  width: 100%;
  height: initial;
  aspect-ratio: 1;
`;
export const RatingStyled = styled(Rating)`
  grid-area: rating;
  font-size: 14px;
`;
