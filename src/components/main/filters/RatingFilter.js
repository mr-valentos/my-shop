import React, {useState, useEffect, useRef} from "react";
import { useDispatch} from "react-redux";
import { addRatingFilter } from "../../../store/sliceFilter";
import styled from "styled-components";
import Checkbox from "../../Checkbox";
import FilterForm from "./FilterForm";
import starImg from "../../../img/star.svg"
import EmptyStarImg from "../../../img/emptyStar.svg"



export default function RatingFilter(){
    return (
        <FilterForm 
        name={'Rating'} 
        component={Rating}
    /> 
    )
}

function Rating(){
    const dispatch = useDispatch();
    const [oneStar, setOneStar] = useState(false);
    const [twoStars, setTwoStars] = useState(false);
    const [threeStars, setThreeStars] = useState(false);
    const [fourStars, setFourStars] = useState(false);
    const [fiveStars, setFiveStars] = useState(false);

    const checkFiveStars = () => {
        setFiveStars(!fiveStars);
    };
    const checkFourStars = () => {
        setFourStars(!fourStars);
    };
    const checkThreeStars = () => {
        setThreeStars(!threeStars);
    };
    const checkTwoStars = () => {
        setTwoStars(!twoStars);
    };
    const checkOneStar = () => {
        setOneStar(!oneStar);
    };

    const firstUpdate = useRef(true);
    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        } else {
        let rating = []
        if(oneStar){rating.push(1)}
        if(twoStars){rating.push(2)}
        if(threeStars){rating.push(3)}
        if(fourStars){rating.push(4)}
        if(fiveStars){rating.push(5)}
        console.log(rating)
        dispatch(addRatingFilter({rating}))
        }
    });

    return (
        <>
            <li>
                <FlexLabel>
                    <Checkbox
                    checked={fiveStars}
                    onChange={checkFiveStars}
                    />
                    <StyledSpanStars >
                        <Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={starImg}/>
                    </StyledSpanStars>
                </FlexLabel>
            </li>
            <li>
                <FlexLabel>
                    <Checkbox
                    checked={fourStars}
                    onChange={checkFourStars}
                    />
                    <StyledSpanStars >
                        <Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={EmptyStarImg}/>
                    </StyledSpanStars>
                </FlexLabel>
            </li>
            <li>
                <FlexLabel>
                    <Checkbox
                    checked={threeStars}
                    onChange={checkThreeStars}
                    />
                    <StyledSpanStars >
                        <Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={EmptyStarImg}/>
                        <Star img={EmptyStarImg}/>
                    </StyledSpanStars>
                </FlexLabel>
            </li>
            <li>
                <FlexLabel>
                    <Checkbox
                    checked={twoStars}
                    onChange={checkTwoStars}
                    />
                    <StyledSpanStars >
                        <Star img={starImg}/><Star img={starImg}/><Star img={EmptyStarImg}/><Star img={EmptyStarImg}/>
                        <Star img={EmptyStarImg}/>
                    </StyledSpanStars>
                </FlexLabel>
            </li>
            <li>
                <FlexLabel>
                    <Checkbox
                    checked={oneStar}
                    onChange={checkOneStar}
                    />
                    <StyledSpanStars >
                        <Star img={starImg}/><Star img={EmptyStarImg}/><Star img={EmptyStarImg}/><Star img={EmptyStarImg}/>
                        <Star img={EmptyStarImg}/>
                    </StyledSpanStars>
                </FlexLabel>
            </li>

        </>
    )
}



const Star = styled.div`
background: url(${props=>props.img}) 0 0/100% 100% no-repeat;
width:16px;
height:16px;
margin-right: 3px;
`;

const StyledSpanStars = styled.span`
display: flex;
align-items: center;
margin-left: 8px;
`;

const FlexLabel = styled.label`
display: flex;
`;
