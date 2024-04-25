import styled from "styled-components"

const StyledFooter = styled.footer`
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 100%;
`;

const StyledParagraph = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
`;

export function Footer() {
  return (
    <StyledFooter>
      <StyledParagraph>MKS Sistemas © Todos os direitos reservados</StyledParagraph>
    </StyledFooter>
  );
}
