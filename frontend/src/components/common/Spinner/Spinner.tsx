/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import { SpinnerProps } from 'components/common/Spinner/types';

import * as S from './Spinner.styled';

const defaultProps: SpinnerProps = {
  size: 80,
  borderWidth: 10,
  emptyBorderColor: false,
  marginLeft: 0,
};

const Spinner: React.FC<SpinnerProps> = (props) => (
  <S.Spinner
    role="progressbar"
    aria-label="Loading"
    aria-busy="true"
    aria-valuemin={0}
    aria-valuemax={100}
    {...props}
  />
);

Spinner.defaultProps = defaultProps;

export default Spinner;
