import styled from "styled-components";
import BoxContact from "../styled/BoxContact/BoxContact";
import FooterStyled from "../styled/FooterStyled";
import Twitter from "../../Images/Twitter.png";
import Facebook from "../../Images/Fb.png";
import Instagram from "../../Images/Instagram.png";
import LinkedIn from "../../Images/LinkedIn.png";
import FooterEl from "../styled/FooterEl";



export default function Footer() {

    return (
        <FooterEl>
            <BoxContact />
            <FooterStyled icon1={Twitter} icon2={Facebook} icon3={Instagram} icon4={LinkedIn} />
        </FooterEl>
    )
}
