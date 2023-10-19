import React from "react";
import styled from "styled-components";
import { Container } from "../../../Common/Container.stc";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import FooterBottom from "./Footer";


const Section = styled.section`
  width: 1440px;
`;

const Row = styled.div`
  display: flex;
  align-items: ${(align) => align || ""};
  gap: 30px;
`;

const Column = styled.div`
  width: 100%;
  // width: ${(props) => props.width || "20%"};
  padding: 10px;
`;

const Heading = styled.h3`
  font-size: 34px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #000;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 26px;
  font-weight: 400;
  color: #7a7a7a;
`;
const Lists = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;
const Icons = styled.ul`
  margin: 22px 0 0 0;
  display: flex;
  gap: 12px;
`;
const ListItem = styled.li`
  list-style: none;
  margin: 7.5px 0;
  .text-primary {
    color: #6eb6ff;
  }
  display: flex;
  align-items: center;
`;
const items = {
  socilaIcons:[
    {
      network: "Facebook",
      icon: <BsFacebook></BsFacebook>,
      target: "_blank",
    },
    {
      network: "Linkedin",
      icon: <BsLinkedin />,
      target: "_blank",
    },
    {
      network: "Twitter",
      icon: <BsTwitter />,
      target: "_blank",
    },
    {
      network: "Instagram",
      icon: <BsInstagram />,
      target: "_blank",
    },
  ],
  links: [
    {
      text: "Submit your CV",
      link: "#",
    },
    {
      text: "For Companies",
      link: "#",
    },
    {
      text: "Blog",
      link: "#",
    },
    {
      text: "Next Gen HR Newsletter",
      link: "#",
    },
    {
      text: "Investment enquiries",
      link: "#",
    },
  ],
  supportedBy: [
    {
      src: "https://moyyn.com/wp-content/uploads/2020/04/1_SIB_Logo.png",
      alt: "SIB Logo",
      width: "47px",
      height: "12px",
    },
    {
      src: "https://moyyn.com/wp-content/uploads/2020/03/S2A-european-union-social-fund.jpg",
      alt: "SIB Logo",
      width: "47px",
      height: "49px",
    },
    {
      src: "https://moyyn.com/wp-content/uploads/2020/04/3_be_Berlin_Logo-768x187.png",
      alt: "SIB Logo",
      width: "55px",
      height: "13px",
    },
  ],
  awards: [
      {
        "src": "https://moyyn.com/wp-content/uploads/2021/02/unnamed-300x177.png",
        "alt": "Award Image",
        "width": "55px"
      },
      {
        "src": "https://moyyn.com/wp-content/uploads/2021/02/contest_logo-1-300x191.png",
        "alt": "Award Image",
        "width": "34%"
      },
      {
        "src": "https://moyyn.com/wp-content/uploads/2021/02/download-3-300x148.png",
        "alt": "Award Image",
        "width": "34%"
      },
      {
        "src": "https://moyyn.com/wp-content/uploads/2021/02/cropped-CEF41B0F-4043-4368-9293-15C6C8E95511-2-300x100.png",
        "alt": "Award Image",
        "width": "34%"
      }
    ],  
  address: [
        {
          "link": "https://moyyn.com/index.php/terms-and-conditions-2",
          "text": "Terms"
        },
        {
          "link": "https://moyyn.com/index.php/privacy",
          "text": "Privacy"
        },
        {
          "link": "https://moyyn.com/data-security",
          "text": "Data Security and GDPR"
        },
        {
          "link": "https://moyyn.com/index.php/imprint",
          "text": "Imprint"
        }
      ]
};

// Define the component
const FooterStc = () => {
  return (
    <Section>
      <Container width={`1140px`} padding={`80px 0`}>
        <Heading>Help & Support</Heading>
        <Row>
          <Column>
            <Title>Email Us</Title>
            <Description>talent@moyyn.com</Description>
            {/* <Row aling={`start`}> */}
                  <Icons>
              {items['socilaIcons'].map((icon) => {
                return (
                    <>{icon.icon}</>
                );
              })}
              </Icons>
            {/* </Row> */}
          </Column>
          <Column>
            <Title>Address</Title>
            <Description>
              Moyyn UG (formerly MyHelpBuddy) Factory Berlin, Lohmühlenstraße
              65, 12435 Berlin
            </Description>
            {
              items['address'].map((item)=>{
                return <ListItem>
                  <a className="footer_ul_li-link" href={item.link}>
                      {item.text}
                    </a>
                </ListItem>
              })
            }
          </Column>
          <Column>
            <Title>Links</Title>
            <Lists className="footer_ul">
              {items["links"].map((item) => {
                return (
                  <ListItem>
                    <MdKeyboardArrowRight className="text-primary" />
                    <a className="footer_ul_li-link" href={item.link}>
                      {item.text}
                    </a>
                  </ListItem>
                );
              })}
            </Lists>
          </Column>
          <Column>
            <Title>Supported by</Title>
            <Lists>
              {items["supportedBy"].map((item) => {
                return (
                  <ListItem>
                    <img {...item} />
                  </ListItem>
                );
              })}
            </Lists>
          </Column>
          <Column>
            <Title>Awards</Title>
            <Lists>
              {items["awards"].map((item) => {
                return (
                  <ListItem>
                    <img {...item} />
                  </ListItem>
                );
              })}
            </Lists>
          </Column>
        </Row>
      </Container>
      <FooterBottom />
    </Section>
  );
};

export default FooterStc;
