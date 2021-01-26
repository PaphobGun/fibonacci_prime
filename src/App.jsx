import './index.css';
import { useState, useMemo } from 'react';
import styled from 'styled-components';

import First from './First';
import Second from './Second';
import Third from './Third';
import Constants from './constants';
import { isPrime, isFibonacci } from './utils';

const { IS_PRIME, IS_FIBONACCI } = Constants;

const App = () => {
  const [num, setNum] = useState(0);
  const [method, setMethod] = useState(IS_PRIME);

  const handleOnChangeInput = (value) => {
    setNum(value);
  };

  const handleOnBlur = () => {
    if (num < 0) {
      setNum(1);
    } else {
      setNum(Math.round(num).toFixed(0));
    }
  };

  const handleOnChangeSelect = (value) => {
    setMethod(value);
  };

  const status = useMemo(() => {
    if (method === IS_PRIME) {
      return isPrime(num).toString();
    } else if (method === IS_FIBONACCI) {
      return isFibonacci(num).toString();
    }
  }, [num, method]);

  return (
    <Wrapper>
      <First num={num} onChange={handleOnChangeInput} onBlur={handleOnBlur} />
      <Second value={method} onChange={handleOnChangeSelect} />
      <Third status={status} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

export default App;
