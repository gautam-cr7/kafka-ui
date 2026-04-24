import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const ErrorText = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.auth_page.signIn.errorMessage};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  min-height: 44px;
  display: flex;
  justify-content: center;
`;
