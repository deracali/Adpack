import styled from "styled-components";

const PrimaryText = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: ${(p) => p.align ? "baseline" : "center"};
    position:relative;

    @media(max-width:1183px){
        align-items: ${(p) => p.alignSm ? "center" : "baseline"};
    }
    `;

export default PrimaryText;
