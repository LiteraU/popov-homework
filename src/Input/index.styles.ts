import styled from "@emotion/styled";

export let Wrapper = styled.div<{ hasError?: boolean }>`
  width: 400px;    
  input {
    width: inherit;
    padding: 10px;    
    ${({ hasError }) =>
    hasError ? 'red' : 'gray'};
    color: ${({ hasError }) =>
    hasError ? 'red)' : 'gray'};
  }

  div {
    color: ${({ hasError }) =>
    hasError ? 'red' : 'gray'};
        
  }
`

export let InputComponent = styled.input``;

export let ErrorMessage = styled.div`
`;