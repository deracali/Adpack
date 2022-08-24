import TopMenuNav from "../components/TopMenu/TopMenu";
import HeroHomePage from "../components/HeroHomPage/HeroHomePage";
import styled from "styled-components";
import Row from "../components/ServeRow/Row";
import Impact from "../components/Impact/Impact";
import MessageIcon from "../Images/messageIcon.png";
import PhoneIcon from "../Images/phoneIcon.png";
import HomePageIcon1 from "../Images/homePage-Icon1.png";
import HomePageIcon2 from "../Images/homePage-Icon2.png";
import HomePageIcon3 from "../Images/homePage-Icon3.png";
import HomePageImg4 from "../Images/homePage-img4.png";
import HomePageCurve from "../Images/homePage-curve.png";
import HomePageDots from "../Images/homePage-Dots.png";
import frame1 from "../Images/Frame1.png";
import frame2 from "../Images/Frame2.png";
import frame3 from "../Images/Frame3.png";
import frame4 from "../Images/Frame4.png";
import frame5 from "../Images/Frame5.png";
import frame6 from "../Images/Frame6.png";
import ImgCurve1 from "../Images/homePage-img-curve1.png";
import ImgCurve2 from "../Images/homePage-img-curve2.png";
import founderImg from "../Images/homePage-img5.png";
import Expertise from "../components/Expertise/Expertise";
import ImgCurve from "../components/CurvedImg/Imgcurve";
import Founder from "../components/Founder/Founder";
import TestiMonials from "../components/styled/TestiMonials/TestiMonials"
import FooterEl from "../components/styled/FooterEl";
import BoxContact from "../components/styled/BoxContact/BoxContact";
import FooterStyled from "../components/styled/FooterStyled";
import Twitter from "../Images/Twitter.png";
import Facebook from "../Images/Fb.png";
import Instagram from "../Images/Instagram.png";
import LinkedIn from "../Images/LinkedIn.png";

const FooterItem = styled(FooterEl)`
transform:translateY(-350px);
`;

export default function HomePage() {
    return (
        <>
            <TopMenuNav icon1={MessageIcon} icon2={PhoneIcon} />
            <HeroHomePage />
            <Row
                headertext="Here to serve you best"
                subheading="We provide exceptional management and strategic consuting services to small and medium sized businesses in a wide range of industries, our team to ensure performance and increased profitability. "
                image1={HomePageIcon1}
                image2={HomePageIcon2}
                image3={HomePageIcon3}
                subtext1="Strong Partnerships"
                text1="Building strong relationships with our clients."
                subtext2="Strategic Consulting"
                text2="Providing our clients with objective and experienced advice to drive growth."
                subtext3="Performance Optimization"
                text3="Managing daily operations to optimize profitability and performance"
            />
            <Impact image1={HomePageImg4} image2={HomePageCurve} image3={HomePageDots} />
            <Expertise headertext="Our area of expertise"
                image1={frame1}
                image2={frame2}
                image3={frame3}
                image4={frame4}
                image5={frame5}
                image6={frame6}
                subtext1="Business development and strategy"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim."
                subtext2="Marketing analysis"
                text2="Providing our clients with objective and experienced advice to drive growthLorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim."
                subtext3="Cost reduction analysis"
                text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim."
                subtext4="Restructuring and Re-organization"
                text4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim."
                subtext5="S.M.E Turnke Analysis"
                text5="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim."
                subtext6="Training services"
                text6="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim." />
            <ImgCurve image1={ImgCurve1} image2={HomePageDots} image3={ImgCurve2} image4={HomePageDots} />
            <Founder image1={founderImg} image2={HomePageDots} />
            <TestiMonials></TestiMonials>
            <FooterItem>
                <BoxContact />
                <FooterStyled icon1={Twitter} icon2={Facebook} icon3={Instagram} icon4={LinkedIn} />
            </FooterItem>
        </>
    )
}
