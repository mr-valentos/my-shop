import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ProductDescription from "./ProductDescription";
import ProductQuestions from "./ProductQuestions";
import ProductReviews from "./ProductReviews";
import productsImg from "../../img/products.jpeg";
import { BtnBuy } from "./ProductList";
import plusImg from "../../img/plus.svg";
import arrowLeft from "../../img/arrowLeft.svg";
import starImg from "../../img/star.svg";
import empStarImg from "../../img/emptyStar.svg";

export default function Product() {
  let params = useParams();
  let id = params.id;
  const product = useSelector((state) =>
    state.products.product.filter((p) => p.id === +id)
  )[0];
  console.log(product);
  const [rating, setRating] = useState(product.rating);
  const [hover, setHover] = useState(null);

  return (
    <ProductBlock className="product">
      <Link to="/">
        <BackBtn img={arrowLeft}></BackBtn>
      </Link>
      <ProductInfo className="product__info">
        <ImgDiv className="product__info-img">
          <Img image={productsImg}></Img>
        </ImgDiv>
        <PriceDiv className="product__info-price">
          <div>
            <h1>{product.name}</h1>
            <FlexDiv>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={ratingValue}>
                    <HiddenRadio
                      type="radio"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <Star
                      img={
                        ratingValue <= (hover || rating) ? starImg : empStarImg
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </FlexDiv>
          </div>
          <div>
            <h2>
              Carrots from Tomissy Farm are one of the best on the market.
              Tomisso and his family are giving a full love to his Bio products.
              Tomisso’s carrots are growing on the fields naturally.
            </h2>
          </div>
          <TablesDiv>
            <Table>
              <tbody>
                <tr>
                  <TdLabel>id:</TdLabel>
                  <td>{product.id}</td>
                </tr>
                <tr>
                  <TdLabel>Category:</TdLabel>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <TdLabel>Brand:</TdLabel>
                  <td>{product.brand}</td>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <TdLabel>Freshness:</TdLabel>
                  <td>1 days old</td>
                </tr>
                <tr>
                  <TdLabel>Delivery:</TdLabel>
                  <td>in 2 days</td>
                </tr>
                <tr>
                  <TdLabel>Delivety area:</TdLabel>
                  <td>Czech republic</td>
                </tr>
              </tbody>
            </Table>
          </TablesDiv>
          <PriceAndBtn>
            <PriceBlock>
              <h1>{product.price} USD</h1>
              <h2>{48.56}</h2>
              <div></div>
            </PriceBlock>
            <FlexDiv>
              <label>
                Amount:
                <Input
                  type="number"
                  placeholder="1"
                  min="1"
                  defaultValue={"1"}
                ></Input>
              </label>
              <BtnBuy>
                <Plus img={plusImg} />
                Add to cart
              </BtnBuy>
            </FlexDiv>
          </PriceAndBtn>
        </PriceDiv>
      </ProductInfo>
      <AboutProduct />
    </ProductBlock>
  );
}

function AboutProduct() {
  const [check, setCheck] = useState(1);

  return (
    <MainDiv className="product__description">
      <DivWithLinks>
        <DivForLink checked={check === 1}>
          <Link to="" onClick={() => setCheck(1)}>
            <h1>Description</h1>
          </Link>
        </DivForLink>
        <DivForLink checked={check === 2}>
          <Link to="reviews" onClick={() => setCheck(2)}>
            <h1>Reviews</h1>
          </Link>
        </DivForLink>
        <DivForLink checked={check === 3}>
          <Link to="questions" onClick={() => setCheck(3)}>
            {" "}
            <h1>Questions</h1>
          </Link>
        </DivForLink>
      </DivWithLinks>
      <Routes>
        <Route path="/" element={<ProductDescription />} />
        <Route path="/reviews" element={<ProductReviews />} />
        <Route path="/questions" element={<ProductQuestions />} />
      </Routes>
    </MainDiv>
  );
}

// ========================= Style ==========================

/* #region  Product */
const ProductBlock = styled.div`
  margin: 0px 130px;
  border-top: 1px solid rgba(15, 15, 15, 0.05);
`;

const BackBtn = styled.div`
  background: url(${(props) => props.img}) 0 0/100% 100% no-repeat;
  width: 30px;
  height: 30px;
  margin: 15px;
`;

const ProductInfo = styled.div`
  display: flex;
  padding: 0px 15px;
  margin-bottom: 62px;
`;

const ImgDiv = styled.div`
  width: 50%;
  padding-right: 15px;
`;

const Img = styled.div`
  background: url(${(props) => props.image}) center/contain no-repeat;
  width: 100%;
  height: 100%;
`;

const HiddenRadio = styled.input`
  display: none;
`;

const Star = styled.div`
  background: url(${(props) => props.img}) center/contain no-repeat;
  width: 20px;
  height: 20px;
  margin-right: 2px;
`;

const PriceDiv = styled.div`
  width: 50%;
  padding-left: 15px;
  * > h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 140%;
    color: #151515;
  }
  * > h2 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 23px;
    color: #151515;
  }
  > div {
    margin-bottom: 40px;
  }
`;

const TablesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

const Table = styled.table`
  width: 45%;
  * > td {
    padding-bottom: 12px;
  }
`;

const TdLabel = styled.td`
  color: #a9a9a9;
`;

const PriceAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 36px;
  border: 1px solid #f5f5f5;
  border-radius: 12px;
  padding: 16px;
  margin-right: 36px;
  margin-bottom: 0px !important;
`;

const PriceBlock = styled.div`
  font-weight: 600;
  /* margin-right: 90px; */
  > h1 {
    font-family: "Poppins";
    font-style: normal;
    font-size: 26px;
    line-height: 39px;
    color: #6a983c;
  }
  > h2 {
    font-size: 12px;
    line-height: 18px;
    text-decoration-line: line-through;
    color: #a9a9a9;
  }
`;

const Input = styled.input`
  align-items: center;
  padding: 14px 0px 14px 10px;
  background: #f9f9f9;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  width: 60px;
  margin-right: 24px;
`;

const Plus = styled.div`
  background: url(${(props) => props.img}) 0 0/100% 100% no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

const FlexDiv = styled.div`
  display: flex;
`;
/* #endregion */

/* #region  About */
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivWithLinks = styled.div`
  display: flex;
  width: 70%;
  margin-bottom: 47px;

  * > h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #151515;
    padding: 0px 0px 16px 0px;
  }
`;

const DivForLink = styled.div`
  flex-grow: 1;
  text-align: center;
  border-bottom: 1px solid ${(props) => (props.checked ? "#6A983C" : "#F5F5F5")};
`;
/* #endregion */
