import styled from "styled-components";
import MsgIconWhite from "../Images/msgIconWhite.png";
import PhoneIconWhite from "../Images/phoneIconWhite.png";
import Adapt from "../components/Services/Adapt/Adapt";
import ServicesImg1 from "../Images/ServiceImg1.png";
import ServicesImg2 from "../Images/ServiceImg2.png";
import BoxContact from "../components/styled/BoxContact/BoxContact";
import FooterStyled from "../components/styled/FooterStyled";
import FooterEl from "../components/styled/FooterEl";
import Twitter from "../Images/Twitter.png";
import Facebook from "../Images/Fb.png";
import Instagram from "../Images/Instagram.png";
import LinkedIn from "../Images/LinkedIn.png";
import BannerFooter from "../components/styled/BannerFooter";
import BannerEl from "../components/styled/BannerStyled";
import ServicesTopMenu from "../components/TopMenu/ServicesTopMenu";
import Projects from "../components/Services/Projects/Projects";
import ServicesImg01 from "../Images/ServicesImg-01.png";
import ServicesImg02 from "../Images/ServicesImg-02.png";
import ServicesImg03 from "../Images/ServicesImg-03.png";
import ServicesImg04 from "../Images/ServicesImg-04.png";
import ServicesImg05 from "../Images/ServicesImg-05.png";
import ServicesImg06 from "../Images/ServicesImg-06.png";
import Result from "../components/Services/Result/Result";
import BannerColored from "../components/Services/Banner/BannerColored";

const FooterItem = styled(FooterEl)`
transform:translateY(-350px);
`;


export default function Services() {
    return (
        <>
            <BannerEl padding color="#19776E">
                <ServicesTopMenu icon1={MsgIconWhite} icon2={PhoneIconWhite} />
            </BannerEl>
            <Adapt image1={ServicesImg1} image2={ServicesImg2} />
            <Projects image1={ServicesImg01} image2={ServicesImg02} image3={ServicesImg03} image4={ServicesImg04} image5={ServicesImg05} image6={ServicesImg06} />
            <Result />
            <BannerColored />
            <BannerFooter />
            <FooterItem>
                <BoxContact />
                <FooterStyled icon1={Twitter} icon2={Facebook} icon3={Instagram} icon4={LinkedIn} />
            </FooterItem>
        </>
    )
}
