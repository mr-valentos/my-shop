import React, {useState} from "react";
import { useDispatch} from "react-redux";
import styled from "styled-components";
import ReactSlider from "react-slider"
import { addPriceFilter } from "../../../store/sliceFilter";



export default function PriceFilter(){
    const dispatch = useDispatch();
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(99)

    const newPriceRange = (newValues) => {
        setMinPrice(newValues[0])
        setMaxPrice(newValues[1])
        console.log(newValues)
    }
    const setMin = (e) => {
        let value = e.target.value 
        if(!isNaN(value) && +value <= 99){
            setMinPrice(+value)
        }
    }
    const setMax = (e) => {
        let value = e.target.value 
        if(!isNaN(value) && +value <= 99){
            setMaxPrice(+value)
        }
    }
    const setPriceFilter = () => dispatch(addPriceFilter({minPrice, maxPrice}))
    const resPriceFilter = () => {
        let [minPrice, maxPrice] = [0 , 99]
        setMinPrice(minPrice)
        setMaxPrice(maxPrice)
        dispatch(addPriceFilter({minPrice, maxPrice}))  
    }
    

    return (
            <div className="product-filter__price">
                <PriceTitle>Price</PriceTitle>
                <StyledSlider value={[minPrice, maxPrice]} max={99} renderTrack={Track} renderThumb={Thumb} onChange={newPriceRange}/>
                <DivForInputs className="price-inputs">
                    <label >
                        <MinMaxTitle>Min</MinMaxTitle>
                        <InputPrice  value={minPrice} onChange={setMin}></InputPrice>
                    </label>
                    <SpanDash>-</SpanDash>
                    <label>
                        <MinMaxTitle>Max</MinMaxTitle>
                        <InputPrice value={maxPrice} onChange={setMax}></InputPrice>
                    </label>
                </DivForInputs>
                <DivApplyReset>
                        <BtnApply onClick={setPriceFilter}>Apply</BtnApply>
                        <BtnReset onClick={resPriceFilter}>Reset</BtnReset>
                    </DivApplyReset>
                
                
            </div>
    )
}




const PriceTitle = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 27px;
margin-bottom: 23px;
`;

const MinMaxTitle = styled.h2`
font-weight: 600;
font-size: 12px;
line-height: 18px;
`;

const DivForInputs = styled.div`
display: flex;
margin-top: 16px;
justify-content: space-between;
`;

const InputPrice = styled.input`
background: #F9F9F9;
border: 1px solid #D1D1D1;
border-radius: 12px;
height: 42px;
width: 109px;
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
padding-left: 21px;
`;

const SpanDash = styled.span`
font-family: 'Open Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
color: #A9A9A9;
padding-top: 30px;
`;

const DivApplyReset = styled.div`
display: flex;
align-items: center;
margin-top: 31px;
`;

const BtnApply = styled.button`
align-items: center;
padding: 12px 16px;
width: 78px;
height: 48px;
left: 0px;
bottom: 0px;
background: #6A983C;
border: 2px solid #46760A;
border-radius: 12px;
font-weight: 700;
font-size: 15px;
line-height: 22px;
color: #FFFFFF;
`;

const BtnReset = styled.button`
font-weight: 700;
font-size: 15px;
line-height: 22px;
color: #A9A9A9;
width: 67px;
height: 35px;
padding: 6px 12px;
background: #FFFFFF;
border-radius: 12px;
margin-left: 34px;
`;

//============Slider============


const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 6px;
`;

const StyledThumb = styled.div`
    height: 20px;
    line-height: 25px;
    width: 20px;
    text-align: center;
    font-size: 0px;
    background-color: #fff;
    color: black;
    border-radius: 50%;
    border: 1px solid #D1D1D1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    bottom: -6px;
    

    cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0px;
    bottom: 0;
    background: ${props => (props.index === 2 ? '#EBEBEB' : props.index === 1 ? '#6A983C' : '#EBEBEB')};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;
