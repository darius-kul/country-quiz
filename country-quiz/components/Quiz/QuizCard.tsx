import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

export const QuizCard: FC<PropsWithChildren> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

const CardWrapper = styled.div`
  background: #ffffff;
  border-radius: 1.5rem;
  padding: 4.25rem 2rem;
`;
