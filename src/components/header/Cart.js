import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import productsImg from "../../img/products.jpeg";
import starImg from "../../img/blackStar.svg"
import emptyStarImg from "../../img/emptyStar.svg"

export default function Cart() {
  const products = useSelector((state) => state.cart.cart);
  console.log(products);

  return (
    <CartDiv>
      <div className="cart-prodact">
        <Head>
          <h1>Shopping cart</h1>
          <button type="button">Close</button>
        </Head>
        <Products>
          {products.map((product) => (
            <div key={product.id}>
              <PictureBlock image={productsImg}>
                <div></div>
                <button type="button">
                  <h3>Remove</h3>
                </button>
              </PictureBlock>
              <ProductInfo>
                <div>
                  <h1>{product.name}</h1>
                  <Flex>
                    <Info>
                      <h3>Brand:</h3>
                      <h3>Freshnes:</h3>
                    </Info>
                    <Info>
                      <h2>{product.brand}</h2>
                      <h2>1 day old</h2>
                    </Info>
                  </Flex>
                </div>

                <Flex>
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return (
                      <Star
                        key={ratingValue}
                        img={ratingValue <= product.rating ? starImg : emptyStarImg}
                      />
                    );
                  })}
                </Flex>
                <div></div>
              </ProductInfo>
            </div>
          ))}
        </Products>
      </div>
      <div className="cart-prodact"></div>
    </CartDiv>
  );
}

const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  * > h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
  }
  * > h2 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
  * > h3 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: #a9a9a9;
  }
  * > button {
    background-color: inherit;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;

  > h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 32px;
  > div {
    display: flex;
  }
`;

const PictureBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 16px;

  > div {
    background: url(${(props) => props.image}) center/contain no-repeat;
    height: 70px;
    width: 100px;
    border-radius: 12px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  > h3 {
    margin-right: 14px;
  }
`;

const Flex = styled.div`
  display: flex;
`;

const Star = styled.div`
  background: url(${(props) => props.img}) 0 0/100% 100% no-repeat;
  width: 16px;
  height: 16px;
  margin: 8px 3px 0px 0px;
`;
