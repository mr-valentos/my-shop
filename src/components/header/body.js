import React, {useState} from "react";
import Select from 'react-select'
import styled from "styled-components";
import userImg from "../../img/person.svg"
import cartImg from "../../img/bag.svg"
import downImg from "../../img/down.svg"
import searchImg from "../../img/search.svg"

const options = [
  { value: 'all', label: 'All categories' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function HeadBody() {
  const [currentCategory, setCurrentCategory] = useState('all')

  const getValue = () => options.find(ctg => ctg.value === currentCategory)

  const onChange = (newValue) => setCurrentCategory(newValue.value)

  let valueDef = { value: 'all', label: 'All categories' }
    return(
        <DivBody className='header-body'>
          <div className='logo'>
            <H1>Freshfood</H1>
          </div>
          <DivSearch className='search'>
            <Select classNamePrefix='custom-select' options={options} defaultValue={valueDef} onChange={onChange}/>
            {/* <BtnCategory type='button'>All categories</BtnCategory> */}
            <DivForInput><InputSearch type='text' placeholder='search'></InputSearch></DivForInput>
            <BtnSearch type='button'></BtnSearch>
          </DivSearch>
          <DivUserCart className='user_cart'>
            <DivUser img={userImg} className='user'>
              <SpanCounter>4</SpanCounter>
            </DivUser>
            <DivUser img={cartImg} className='cart'>
              <SpanCounter>4</SpanCounter>
            </DivUser>
          </DivUserCart>
        </DivBody>
    )
}



const DivBody = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 130px;
`;

const H1 = styled.h1`
font-family: 'Poppins', sans-serif;
font-size: 28px;
font-weight: 700;
`;

const DivSearch = styled.div`
display: flex;
align-items: center;
height: 42px;
background: #F9F9F9;
border: 1px solid #D1D1D1;
border-radius: 12px;
`;

const DivUser = styled.div`
position: relative;
background: url(${props=>props.img}) 0 0/100% 100% no-repeat;
width:24px;
height:24px;
`;

const DivUserCart = styled.div`
display: flex;
justify-items: center;
gap: 40px;
`;
 
const BtnCategory = styled.button`
font-family: 'Poppins', sans-serif;
background: inherit;
font-size: 15px;
font-weight: 700;
padding-left: 16px;
&:after {
    content: url(${downImg});
    padding-left: 8px;
    padding-right: 24px;
  }
`;

const BtnSearch = styled.button`
background: url(${searchImg}) 50% 50% /16px 16px no-repeat;
width: 16px;
height: 16px;
margin: 0px 16px 0px 12px;
/* background-position: 50% 50%; */
`;

const InputSearch = styled.input`
background: inherit;
height: 19px;
&::placeholder{
  color: #A9A9A9;
}

`;

const DivForInput = styled.div`
&:before {
    content: '';
    padding-right: 24px;
    border-left: 1px solid #D1D1D1;
  }
`;

const SpanCounter = styled.span`
position:absolute;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 18px;

color: #FFFFFF;
text-align:center;
width: 16px;
height: 16px;
top: 14px;
left: -4px;

background: #E6704B;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
border-radius: 12px;
`;