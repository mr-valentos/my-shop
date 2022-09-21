import React from "react";
import styled from "styled-components";

export default function ProductDescription() {
  return (
    <ProductDescriptionDiv>
      <h1>Origins</h1>
      <h2>
        We work hard to ensure that the fruit and vegetables we sell are fresh
        and high in quality. If we don’t grow them ourselves, we source them
        from carefully chosen suppliers, preferring to buy locally whenever
        possible.
      </h2>
      <h1>How to cook</h1>
      <h2>
        From roasts, salads and soups to casseroles and cakes, Carrots will lend
        sweetness, texture and colour to an enormous number of recipes.
      </h2>
      <h1>Full of Vitamins!</h1>
    </ProductDescriptionDiv>
  );
}



const ProductDescriptionDiv = styled.div`
  > h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 8px;
  }
  > h2 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    margin-bottom: 32px;
  }
`;