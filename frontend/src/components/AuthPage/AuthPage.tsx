import React from 'react';
import { useAuthSettings } from 'lib/hooks/api/appConfig';
import { AuthType } from 'generated-sources';
import GoogleSignInButton from 'components/AuthPage/SignIn/OAuthSignIn/GoogleSignInButton/GoogleSignInButton';

import Header from './Header/Header';
import BasicSignIn from './SignIn/BasicSignIn/BasicSignIn';
import OAuthSignIn from './SignIn/OAuthSignIn/OAuthSignIn';
import * as S from './AuthPage.styled';

function AuthPage() {
  const { data } = useAuthSettings();

  const showBasicAuth =
    data?.authType === AuthType.LDAP ||
    data?.authType === AuthType.LOGIN_FORM;

  const showOAuth =
    data?.authType === AuthType.OAUTH2;

  return (
    <S.AuthPageStyled>
      <Header />
      <S.LoginCard>
        <S.CardTitle>Sign in to Kafbat UI</S.CardTitle>
        <S.CardSubtitle>
          Manage your Apache Kafka clusters
        </S.CardSubtitle>

        {showBasicAuth && <BasicSignIn />}
        {showOAuth && <OAuthSignIn oAuthProviders={data?.oAuthProviders} />}

        {(showBasicAuth || showOAuth) && (
          <S.Divider>or</S.Divider>
        )}

        <GoogleSignInButton />
      </S.LoginCard>
    </S.AuthPageStyled>
  );
}

export default AuthPage;
