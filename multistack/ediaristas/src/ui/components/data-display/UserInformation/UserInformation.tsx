import React from "react";
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInfomation.style";

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
      <UserName>{props.name}</UserName>
      <RatingStyled value={props.rating} readOnly />
      <UserDescription>{props.description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
