import styled from "styled-components";

export interface StyledHeroProps {
  image?: string;
}

export const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props: StyledHeroProps) =>
      props.image ||
      "https://images.unsplash.com/photo-1592494804071-faea15d93a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
