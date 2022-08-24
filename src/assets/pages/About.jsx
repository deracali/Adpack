import TopMenuNav from "../components/TopMenu/TopMenu";
import MessageIcon from "../Images/messageIcon.png";
import PhoneIcon from "../Images/phoneIcon.png";
import AboutImg from "../Images/AboutImg.png"
import Rectangle from "../Images/Rectangle.png";
import AboutHero from "../components/About/Hero/AboutHero";
import Row from "../components/ServeRow/Row";
import Frame7 from "../Images/Frame7.png";
import Frame8 from "../Images/Frame8.png";
import Frame9 from "../Images/Frame9.png";
import Consultants from "../components/About/Consultants/Consultants";
import AboutImg1 from "../Images/About-Img1.png";
import AboutImg2 from "../Images/About-Img2.png";
import AboutImg3 from "../Images/About-Img3.png";
import Trusted from "../components/About/Trusted/Trusted";
import TrustedImg1 from "../Images/TrustedImg1.png";
import TrustedImg2 from "../Images/TrustedImg2.png";
import TrustedImg3 from "../Images/TrustedImg3.png";
import TrustedImg4 from "../Images/TrustedImg4.png";
import TrustedImg5 from "../Images/TrustedImg5.png";
import TrustedImg6 from "../Images/TrustedImg6.png";
import Footer from "../components/Footer/Footer";

export default function About() {
    return (
        <>
            <TopMenuNav icon1={MessageIcon} icon2={PhoneIcon} />
            <AboutHero image1={AboutImg} image2={Rectangle} />
            <Row
                headertext="Here to serve you best"
                subheading="We provide exceptional management and strategic consuting services to small and medium sized businesses in a wide range of industries, our team to ensure performance and increased profitability. "
                image1={Frame7}
                image2={Frame8}
                image3={Frame9}
                subtext1="Excellence"
                text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim."
                subtext2="Client-focused"
                text2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim."
                subtext3="Trust and Integrity"
                text3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel pellentesque eu facilisis arcu. Risus elit, eget vel sodales eu. Urna, cursus enim."
            />
            <Consultants image1={AboutImg1} image2={AboutImg2} image3={AboutImg3} />
            <Trusted image1={TrustedImg1} image2={TrustedImg2} image3={TrustedImg3} image4={TrustedImg4} image5={TrustedImg5} image6={TrustedImg6} />
            <Footer />
        </>
    )
}
7