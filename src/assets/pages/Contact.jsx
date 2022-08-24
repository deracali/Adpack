import TopMenuNav from "../components/TopMenu/TopMenu";
import MessageIcon from "../Images/messageIcon.png";
import PhoneIcon from "../Images/phoneIcon.png";
import Footer from "../components/Footer/Footer";

export default function Contact() {
    return (
        <>
            <TopMenuNav icon1={MessageIcon} icon2={PhoneIcon} />
            <Footer />
        </>
    )
}
