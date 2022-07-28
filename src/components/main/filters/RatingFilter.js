import React from "react";
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
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <>
            <li>
                <FlexLabel>
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    />
                    <StyledSpanStars >
                        <Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={starImg}/>
                    </StyledSpanStars>
                </FlexLabel>
            </li>
            <li>
                <FlexLabel>
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    />
                    <StyledSpanStars >
                        <Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={starImg}/><Star img={EmptyStarImg}/>
                    </StyledSpanStars>
                </FlexLabel>
            </li>
            <li>
                <FlexLabel>
                    <Checkbox
                    checked={checked}
                    onChange={handleChange}
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
                    checked={checked}
                    onChange={handleChange}
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
                    checked={checked}
                    onChange={handleChange}
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
