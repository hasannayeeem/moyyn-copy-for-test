import React from "react";
import { Container } from "../Common/Container.stc";
import { ButtonWrapper, Section } from "../Common";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";
import { Column, Heading, Image, ImageBox, Images, ImagesBox, Review, Row, Testimonial } from "../Common/testimonialStc";

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
          <ButtonWrapper>
          <PrimaryBtn href="https://client.moyyn.com/">
            Signup for free
          </PrimaryBtn>
        </ButtonWrapper>
        </Row>
      </Container>
    </Section>
  );
}

export default Testimonials;
