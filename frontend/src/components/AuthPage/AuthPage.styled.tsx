import styled, { css } from 'styled-components';

export const AuthPageStyled = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: ${theme.auth_page.backgroundColor};
    font-family: ${theme.auth_page.fontFamily};
    overflow-x: hidden;
  `
);

export const LoginCard = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 40px;
    width: 440px;
    border-radius: 16px;
    background-color: ${theme.auth_page.signIn.authCard.backgroundColor};
    border: 1px solid ${theme.auth_page.signIn.authCard.borderColor};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    margin-top: 40px;
  `
);

export const CardTitle = styled.h1(
  ({ theme }) => css`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    color: ${theme.auth_page.signIn.titleColor};
    text-align: center;
  `
);

export const CardSubtitle = styled.p(
  ({ theme }) => css`
    margin: -12px 0 0;
    font-size: 14px;
    color: ${theme.auth_page.signIn.authCard.serviceTextColor};
    text-align: center;
  `
);

export const Divider = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    color: ${theme.auth_page.signIn.authCard.serviceTextColor};
    font-size: 12px;

    &::before,
    &::after {
      content: '';
      flex: 1;
      border-top: 1px solid ${theme.auth_page.signIn.authCard.borderColor};
    }
  `
);
