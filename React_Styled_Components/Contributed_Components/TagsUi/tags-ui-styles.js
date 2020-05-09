import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const FieldContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 600px;
  min-height: 48px;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const TagTitle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  text-transform: capitalize;
  line-height: 24px;
  background-color: ${COLORS.PRIMARY};
  padding: 6px 18px;
  margin: 6px;
  border-radius: 40px;
`;

export const CrossIcon = styled.img`
  height: 16px;
  margin-left: 5px;
  cursor: pointer;
`;

export const InputWrapper = styled.div`
  min-height: 48px;
  min-width: 60px;
  display: flex;
  flex: 1;
  overflow: hidden;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  color: ${COLORS.PRIMARY};
  border: transparent;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 12px;
  outline: none;
  font-family: 'Inter', sans-serif;
`;
