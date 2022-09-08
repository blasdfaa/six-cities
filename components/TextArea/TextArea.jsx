import styled from '@emotion/styled';

const TextArea = ({ _error, ...props }) => {
  return <Root {...props}></Root>;
};

const Root = styled.textarea`
  font-size: 16px;
  line-height: 1.1875;
  color: #383838;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
`;

export default TextArea;
