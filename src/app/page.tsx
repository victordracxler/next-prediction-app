"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Container, DataWrapper, StyledBttn } from "./styles";
import styled from "styled-components";

export default function Home() {
  const [inputVal, setInputVal] = useState("");

  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`);
  };

  return (
    <>
      <Container>
        <DataWrapper>
          <div>
            <h1>Enter Your Name</h1>
          </div>

          <StyledForm onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Type your name...'
              onChange={(e) => setInputVal(e.target.value)}
              value={inputVal}
              className='text-black'
            />
            <StyledBttn type='submit'>Predict data</StyledBttn>
          </StyledForm>
        </DataWrapper>
      </Container>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    height: 35px;
  }
`;
