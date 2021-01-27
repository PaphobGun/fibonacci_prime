import styled from 'styled-components';

import Constants from './constants';

const { IS_PRIME, IS_FIBONACCI } = Constants;

const Second = ({ value, onChange }) => {
  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <div className="content">
        <select value={value} onChange={handleOnChange}>
          <option value={IS_PRIME}>isPrime</option>
          <option value={IS_FIBONACCI}>isFibonacci</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  flex: 1;
  overflow: scroll;
  min-width: 100px;
  background-color: paleturquoise;

  .content {
    min-width: 600px;
  }
`;

export default Second;
