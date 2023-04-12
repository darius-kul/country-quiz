import { FC } from "react";
import styled from "styled-components";

interface IOption {
  option: string;
  variant: string;
  isCorrect: boolean;
}

export const Option: FC<IOption> = ({ isCorrect, option, variant }) => {
  return (
    <OptionWrapper>
      <OptionContainer>
        <p>{variant}</p>
        <p>{option}</p>
      </OptionContainer>
    </OptionWrapper>
  );
};

const OptionContainer = styled.div`
  display: flex;
  column-gap: 2.875rem;
`;

const OptionWrapper = styled.div`
  padding: 1.1875rem;
  border: 2px solid rgba(96, 102, 208, 0.7);
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #f9a826;
    border: 2px solid #f9a826;
    color: white;
  }
  border-radius: 0.75rem;
  cursor: pointer;
`;
