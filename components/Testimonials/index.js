import React from "react";
import styled from "styled-components";
import { Container } from "../Common/Container.stc";

// Create styled components with styles
const Section = styled.section`
  width: 1440px;
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  width: 100%;
`;

const Column = styled.div`
  flex: 1;
  padding: 15px;
`;
const Images = styled.div`
  display: flex;
  align-items: center;
  padding: 80px 0;
`;
const ImagesBox = styled.div`
  flex-basis: calc(16.666% - 20px);
  max-width: calc(16.666% - 20px);
  margin: 10px;
`;

const Heading = styled.h2`
  margin: 30px 0;
  text-align: center;
  color: #000000;
  font-family: "Poppins", Sans-serif;
  font-size: 36px;
  line-height: 42px;
`;

const Testimonial = styled.div`
  font-size: 18px;
  color: #666;
  width: 50%;
  text-align: right;
  margin: 0 20px 0 0;
`;

const ImageBox = styled.div`
  width: 50%;
`;

const Image = styled.img`
  max-width: 80%;
  height: auto;
`;

const Review = styled.div`
  display: flex;
  padding: 30px 0; 
`;
const images = [
  "https://moyyn.com/wp-content/uploads/2021/07/paradoxcat.jpg",
  "https://moyyn.com/wp-content/uploads/2021/07/bltzr.png",
  "https://moyyn.com/wp-content/uploads/2021/07/murmuras.png",
  "https://moyyn.com/wp-content/uploads/2021/07/Reply_-_LOGO_300dpi.jpg",
  "https://moyyn.com/wp-content/uploads/2021/07/Matchbase_logo_black_big-1.png",
  "https://moyyn.com/wp-content/uploads/2021/07/Kienbaum_Logo_2019.jpg",
  "https://moyyn.com/wp-content/uploads/2021/07/davinci_fav_icon_dark-1.png",
];
function Testimonials() {
  return (
    <Section>
      <Container width={`1140px`} padding={`10px`}>
        <Row>
          <Column>
            <Heading>Clients who trust us</Heading>
          </Column>
          <Review>
            <Testimonial>
              "With the help of Moyyn, we hired our Head of Engineering.
              <div>The andidates were top notch and so was the support. </div>
              Expectations exceeded."
            </Testimonial>
            <ImageBox>
            <Image
              src="https://moyyn.com/wp-content/uploads/2021/01/sawayo.png"
              alt="Sawayo Logo"
              width={`230px`}
            />
          </ImageBox>
          </Review>
        </Row>
        <Row>
          <Images>
            {images.map((img) => {
              return (
                <ImagesBox>
                  <Image src={img} alt="" />
                </ImagesBox>
              );
            })}
          </Images>
        </Row>
      </Container>
    </Section>
  );
}

export default Testimonials;
