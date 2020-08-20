import React, { useState } from "react";
import { navigate } from "@reach/router";
import styled from "styled-components";
import theme from "../Styles/theme";
import media from "../Styles/media";
import emailjs from "emailjs-com";
const { fontSizes } = theme;

const ContactWrapper = styled.div`
  margin-top: 50px;
  width: 100vw;
`;

const ContactContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  ${media.mobileL`
  	width: 100%;
  	padding: 1rem;	
  `};
`;

const Title = styled.p`
  font-size: ${fontSizes.lg};
  font-weight: 600;
  text-align: center;
`;

const ContactSchedule = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;

const ContactInfo = styled.p`
  font-size: ${fontSizes.xs};
  line-height: 5px;
`;

const Store = styled.span`
  line-height: 15px;
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;

const Location = styled.span`
  font-size: ${fontSizes.sm};
  font-weight: 300;
`;

const Form = styled.form`
  margin-top: 30px;
`;

const FormLabel = styled.p`
  font-size: ${fontSizes.sm};
  margin: 0.4rem 0;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 5px;
`;

const FormTextarea = styled.textarea`
  display: block;
  resize: none;
  height: 150px;
  width: 100%;
`;

const SendButton = styled.button`
  background-color: black;
  font-size: ${fontSizes.md};
  font-weight: 500;
  letter-spacing: 2px;
  color: white;
  margin: 20px auto;
  padding: 5px 0;
  border: 0;
  display: inline-block;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

const MessageHasBeenSent = styled.p`
  font-size: ${fontSizes.s};
`;

const CheckIcon = styled.span`
  font-size: ${fontSizes.s};
  color: #32cd32;
  font-weight: 500;
`;

const ContactForm = (props) => {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_jM7BvR2b",
        e.target,
        "user_OsjJoIL5qJAV8EltHyBnW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setHasBeenSubmitted(true);
    e.target.reset();
  };

  return (
    <ContactWrapper>
      <ContactContainer>
        <Title>CONTACT</Title>
        <ContactSchedule>
          Please contact us from Monday to Saturday 9am-6pm
        </ContactSchedule>
        <ContactInfo>Phone: +84 799.21.0000</ContactInfo>
        <ContactInfo>Email:info@thebeuter.com</ContactInfo>
        <ContactInfo>
          <Store>
            Store 1: <Location>@thenewplayground_saigon </Location>
          </Store>
        </ContactInfo>
        <ContactInfo>
          <Store>
            Store 2:
            <Location> Room 44 – 42 Tôn Thất Thiệp, Quận 1, Saigon </Location>
          </Store>
        </ContactInfo>
        <ContactInfo>
          <Store>
            Store 3:
            <Location> 3rd Floor 14C Ngô Thì Nhậm, Hoàn Kiếm, Hà Nội</Location>
          </Store>
        </ContactInfo>

        {/* Form */}
        <Form onSubmit={sendEmail}>
          <FormLabel>Your Name (required)</FormLabel>
          <FormInput type="text" name="user_name" />
          <FormLabel>Your Email (required)</FormLabel>
          <FormInput type="email" name="user_email" />
          <FormLabel>Subject</FormLabel>
          <FormInput type="text" name="subject" />
          <FormLabel>Your Message</FormLabel>
          <FormTextarea name="message" />
          <SendButton type="submit">Send</SendButton>
        </Form>
        {hasBeenSubmitted ? (
          <MessageHasBeenSent>
            Thank you for your message. It has been sent{" "}
            <CheckIcon className="fal fa-check" />.
          </MessageHasBeenSent>
        ) : null}
      </ContactContainer>
    </ContactWrapper>
  );
};

export default ContactForm;
