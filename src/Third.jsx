import styled from 'styled-components';

const Third = ({ status }) => {
  return <Wrapper>{status}</Wrapper>;
};

const Wrapper = styled.div`
  width: 300px;
  height: 100vh;
  flex: 0 0 auto;

  font-size: 30px;

  background-color: palevioletred;
`;

export default Third;
