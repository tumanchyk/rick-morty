import incodeLogo from "../../../assets/incode-logo.png";
import githubIcon from "../../../assets/socials/github-icon.svg";
import twitterIcon from "../../../assets/socials/twitter-icon.svg";
import heartIcon from "../../../assets/socials/heart-icon.svg";
import { FooterEl, FooterWrap, Text, LogoBg, Logo, SocialList, Year } from "./Footer.styled";

const Footer = () => {
    return <FooterEl>
        <FooterWrap>
            <Text>performed as part of a test case for the company</Text>
            <div style={{position: "relative"}}>
                <Logo src={incodeLogo} alt="incode logo" />
                <LogoBg />
            </div>
            
            <SocialList>
                <li><img src={githubIcon} alt="github icon" /></li>
                <li><img src={twitterIcon} alt="twitter icon" /></li>
                <li><img src={heartIcon} alt="heart icon" /></li>
            </SocialList>

            <Year>2023</Year>
      </FooterWrap>
  </FooterEl>
};
export default Footer;