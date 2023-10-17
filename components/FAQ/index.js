import React, { useState } from "react";
import styled from "styled-components";
import { Container } from "../Common/Container.stc";
import { ButtonWrapper } from "../moyyn-sections/AtAGlanceSection";
import { PrimaryBtn } from "../Common/PrimaryBtn.stc";
import { SecondaryBtn } from "../Common/SecondaryBtn.stc";
import { MdKeyboardArrowDown } from "react-icons/md";

const Section = styled.section`
  width: 1440px;
  display: flex;
  justify-content: center;
  padding: 0 0 30px 0;
`;

const ImageColumn = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 494px;
  height: 277px;
`;

const ContentColumn = styled.div`
  flex: 1;
`;

const Heading = styled.h2`
  font-size: 24px;
`;

const ToggleItem = styled.div`
  margin: 10px 0;
`;

const ToggleTitle = styled.a`
  text-decoration: none;
  color: ${(props) => (props.isOpen ? "#6EB6FF" : "#54595F")};
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #eeeeee;
`;

const ToggleIcon = styled.i`
  margin-right: 5px;
  display: flex;
  justify-content: right;
`;

const ToggleContent = styled.div`
  height: ${(props) => (props.isOpen ? "100%" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: all 0.3s;
  grid-column-start: 1;
  grid-column-end: 3;
  color: #7a7a7a;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  margin: 10px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-center;
`;

// Data for the FAQ items
const faqItems = [
  {
    question: "Is Moyyn really for free?",
    answer: `Yes, of course. It’s 100% free to try it out! You do not need a credit card to use the platform. You can post up to 2 jobs for free and as you scale, we support and grow together with you. Once you try it out, you can opt for our premium services like the subscription model which gives access to 31000+ candidates in the talent pool or you can choose Pay per hire model or book on-demand recruiters for several hours for active sourcing, pre-selection, and managing candidates. You can easily upgrade to any of our premium products to publish more job ads at a time, get statistics and insights on your job ads, and add more users. For more information and comparison of premium products, please get in touch with us.`,
    tag: <MdKeyboardArrowDown />,
  },
  {
    question: "How long can I use Moyyn for free?",
    answer:
      "You can post up to 2 jobs and use the platform for 30 days for free without commitment/credit card. After 30 days, you can choose either a subscription model, pay-per-hire model, or on-demand recruiter model. We will support you in all ways possible to hire the best talent.",
    tag: <MdKeyboardArrowDown />,
  },
  {
    question: "What is Pay-per-hire model?",
    answer:
      "This model is designed for roles that are hard to fill. Once you choose this model, you will get a dedicated recruiter who will asses the candidates, perform active sourcing on 5+ platforms, and pre-select and interview the candidates. Usually, we get an upfront fee before starting the tasks, but for limited-time and for young startups, the upfront fee is not applicable. ",
    tag: <MdKeyboardArrowDown />,
  },
  {
    question: "Why is Moyyn very cost-effective compared to other solutions?",
    answer:
      "Our mission is to support the next generation of recruiters with modern tools that allow hiring efficient, fast, and more cost-effective. Especially for SMEs and startups who have limited resources and very few people on the recruitment team, we want to be their right hand when it comes to scaling their team. Compared to larger job platforms where companies spend a huge amount of money in posting every job, Moyyn allows everyone to multipost for free, access a huge talent pool, and also provides on-demand support for any recruitment-related tasks.",
    tag: <MdKeyboardArrowDown />,
  },
  {
    question: "Who is an on-demand recruiter?",
    answer:
      "If you are dealing with multiple positions and do not have enough resources, Moyyn provides you with on-demand recruiters who can support you in candidate acquisition, active sourcing, interviews, and many more. You can book our on-demand recruitment services on an hourly basis based on your needs. ",
    tag: <MdKeyboardArrowDown />,
  },
  {
    question: "How does Moyyn protect data of candidates and clients?",
    answer:
      "Data protection is a key element of Moyyn. Protecting customers and clients data and earning their trust is pivotal to us. We have implemented and strive to develop technical and organizational measures to ensure secure processing of information at all stages. You can find more info about it in our Data Security page.",
    tag: <MdKeyboardArrowDown />,
  },
  {
    question: "I already have an ATS. Why do I need Moyyn?",
    answer:
      "We are a sourcing solution. ATS aims to provide you with tools to manage candidates effectively. But we come in the first stage of hiring: sourcing the right candidates faster by providing all tools necessary – multiposting, active sourcing, on-demand recruiters, talent pool, and many more to come!",
    tag: <MdKeyboardArrowDown />,
  },
  // Add more FAQ items as needed
];

function FAQSection() {
  const [openItems, setOpenItems] = useState(
    Array(faqItems.length).fill(false)
  );

  const toggleItem = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  return (
    <Section>
      <Container width={`1140px`} padding={`10px`}>
        <Row>
          <ImageColumn>
            <Image
              src="https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-19-1024x576.png"
              alt="Moyyn"
            />
          </ImageColumn>
          <ContentColumn>
            <Heading>Questions?</Heading>
            {faqItems.map((item, index) => (
              <ToggleItem key={index}>
                <ToggleTitle onClick={() => toggleItem(index)} isOpen={openItems[index]}>
                  {item.question}
                  <ToggleIcon>{item.tag}</ToggleIcon>
                  <ToggleContent isOpen={openItems[index]}>
                    {item.answer}
                  </ToggleContent>
                </ToggleTitle>
              </ToggleItem>
            ))}
            <ButtonWrapper align={`left`}>
              <PrimaryBtn href="https://client.moyyn.com/">
                Signup for free
              </PrimaryBtn>
            </ButtonWrapper>
            <ButtonWrapper align={`left`}>
              <SecondaryBtn href="https://calendly.com/book-quirin/30min?month=2023-03">
                Book a demo
              </SecondaryBtn>
            </ButtonWrapper>
          </ContentColumn>
        </Row>
      </Container>
    </Section>
  );
}

export default FAQSection;

// import React from 'react';
// import styled from 'styled-components';

// const MainSection = styled.section`
//   width: 1440px;
//   left: -150px;
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const ImageColumn = styled.div`
//   flex: 1;
// `;

// const Image = styled.img`
//   width: 980px;
//   height: 551px;
// `;

// const ContentColumn = styled.div`
//   flex: 1;
// `;

// const Heading = styled.h2`
//   font-size: 24px;
// `;

// const ToggleItem = styled.div`
//   margin: 10px 0;
// `;

// const ToggleTitle = styled.a`
//   text-decoration: none;
//   color: #333;
//   display: flex;
//   align-items: center;
// `;

// const ToggleIcon = styled.i`
//   margin-right: 5px;
// `;

// const Button = styled.a`
//   display: inline-block;
//   background-color: #007BFF;
//   color: #fff;
//   padding: 10px 20px;
//   text-decoration: none;
//   border-radius: 4px;
//   font-weight: bold;
//   margin: 10px;
// `;

// // Data for the FAQ items
// const faqItems = [
//   {
//     question: 'Is Moyyn really for free?',
//     answer: 'Yes, of course. It’s 100% free to try it out! ...',
//   },
//   {
//     question: 'How long can I use Moyyn for free?',
//     answer: 'You can post up to 2 jobs and use the platform ...',
//   },
//   // Add more FAQ items as needed
// ];

// function FAQSection() {
//   return (
//     <MainSection>
//       <Container>
//         <ImageColumn>
//           <Image
//             src="https://moyyn.com/wp-content/uploads/2023/01/The-next-generation-job-platform-is-Modern.-Cost-effective.-AI.-Introducing-Moyyn-19-1024x576.png"
//             alt="Moyyn"
//             width="980"
//             height="551"
//           />
//         </ImageColumn>
//         <ContentColumn>
//           <Heading>Questions?</Heading>
//           {faqItems.map((item, index) => (
//             <ToggleItem key={index}>
//               <ToggleTitle href="">
//                 <ToggleIcon className="fas fa-angle-right"></ToggleIcon>
//                 {item.question}
//               </ToggleTitle>
//               <div>{item.answer}</div>
//             </ToggleItem>
//           ))}
//           <Button href="https://client.moyyn.com/">Signup for free</Button>
//           <Button href="https://calendly.com/book-quirin/30min?month=2023-03">Book a demo</Button>
//         </ContentColumn>
//       </Container>
//     </MainSection>
//   );
// }

// export default FAQSection;
