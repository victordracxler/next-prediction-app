"use client";

import { Container, DataWrapper, StyledBttn } from "@/app/styles";
import Link from "next/link";

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredictedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredictedCountry = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

export default async function Page({ params }: Params) {
  const ageData = getPredictedAge(params.name);
  const genderData = getPredictedGender(params.name);
  const countryData = getPredictedCountry(params.name);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);

  return (
    <Container>
      <DataWrapper>
        <h1>Personal Info</h1>
        <div>Name: {params.name}</div>
        <div>Age: {age?.age}</div>
        <div>Gender: {gender?.gender}</div>
        <div>Country: {country?.country[0]?.country_id}</div>

        <Link href='/'>
          <StyledBttn>Back</StyledBttn>
        </Link>
      </DataWrapper>
    </Container>
  );
}
