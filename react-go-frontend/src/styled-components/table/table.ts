import styled from "styled-components";

export const CustomRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

export const CustomColumn = styled.div`
  flex: 1;
  padding: 0 15px;
  max-width: 100%;

  @media (min-width: 768px) {
    flex: 50%;
  }

  @media (min-width: 992px) {
    flex: 33.33%;
  }

  @media (min-width: 1200px) {
    flex: 25%;
  }
`;

export const LoginLink = styled.a`
  margin-left: auto;
  padding: 0 15px;
`;
