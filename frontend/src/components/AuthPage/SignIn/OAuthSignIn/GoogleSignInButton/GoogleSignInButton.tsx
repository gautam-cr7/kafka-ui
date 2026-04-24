import React, { useEffect, useRef, useState } from 'react';

import * as S from './GoogleSignInButton.styled';

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;

const GoogleSignInButton: React.FC = () => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return;

    const existingScript = document.getElementById('google-gsi-script');
    if (existingScript) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-gsi-script';
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setError('Failed to load Google Sign-In.');
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !buttonRef.current || !GOOGLE_CLIENT_ID) return;

    window.google?.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: (response: { credential: string }) => {
        // TODO: Call your UMS API here with response.credential (Google ID token)
        // eslint-disable-next-line no-console
        console.log('Google ID token:', response.credential);
      },
    });

    window.google?.accounts.id.renderButton(buttonRef.current, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      shape: 'rectangular',
      width: '360',
    });
  }, [scriptLoaded]);

  if (!GOOGLE_CLIENT_ID) return null;

  return (
    <S.Wrapper>
      {error && <S.ErrorText>{error}</S.ErrorText>}
      <S.ButtonContainer ref={buttonRef} />
    </S.Wrapper>
  );
};

export default GoogleSignInButton;
