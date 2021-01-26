import styled from 'styled-components';

const First = ({ num, onChange, onBlur }) => {
  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      onBlur();
    }
  };

  const handleOnChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <Wrapper>
      <input
        type="number"
        value={num}
        onKeyPress={handleOnKeyPress}
        onChange={handleOnChange}
        onBlur={onBlur}
      />
      <p>
        Input will be validated/transformed <br />
        when blur (no focus) or press enter key.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 200px;
  height: 100vh;
  background-color: palegreen;
  flex: 0 0 auto;
`;

export default First;
