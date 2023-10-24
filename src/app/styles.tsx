import styled from "styled-components";

export const StyledBttn = styled.button`
  width: 150px;
  background-color: #40cae9;
  border-radius: 5px;
  margin-top: 15px;
  font-weight: bold;
  height: 30px;
  font-size: 20px;
`;

export const DataWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: #c6c6c6;

  border-radius: 5px;
  padding: 10px;

  box-shadow: 5px 5px 5px #ffffff;

  h1 {
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-top: 50px;
  border-radius: 10px;
`;
