import React from "react";
import styled from "styled-components";
import theme from "../Styles/theme";
const { fontSizes } = theme;

const Wrapper = styled.div`
  margin: 50px 0 0;
  width: 100%;
`;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
`;

const Title = styled.p`
  font-size: ${fontSizes.lg};
  text-align: center;
  font-weight: 600;
`;

const ListInfo = styled.ol`
  padding: 0;
`;

const Info = styled.li`
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;

const Details = styled.div`
  margin-top: 5px;
  font-size: ${fontSizes.sm};
  text-align: justify;
  font-weight: 300;
`;

const Date = styled.p`
  font-size: ${fontSizes.sm};
  font-weight: 500;
`;

const PrivacyAndPolicy = (props) => {
  return (
    <Wrapper>
      <Container>
        <Title>PRIVACY & POLICY</Title>
        <Details>
          www.thebeuter.com (including website platform, mobile website),
          hereinafter collectively referred to as “Beuter” is committed to
          protecting the privacy of customers’ personal information. Please read
          the “Privacy Policy” below before accessing other content to better
          understand the commitments we make, to respect and protect the rights
          of visitors:
        </Details>
        <ListInfo>
          <Info>
            Collecting personal information:
            <Details>– The information collected will help us:</Details>
            <Details>• Support customers when purchasing products</Details>
            <Details>• Answering customers’ inquiries.</Details>
            <Details>• Provide you with our latest information.</Details>
            <Details>
              • Carry out promotional activities related to Beuter products and
              services.
            </Details>
            <Details>
              – To access and use some services at our website and application,
              you may be required to register with us personal information (Full
              name, Contact phone number, Email … ) All information must be
              accurate and legal.Beuter does not accept any liability related to
              the law of the declared information.
            </Details>
          </Info>
          <Info>
            Use of personal information:
            <Details>
              – Beuter collects and uses your personal information for the
              proper purpose and fully complies with the content of this”
              Privacy Policy “.
            </Details>
            <Details>
              – When necessary, we may use this information to contact you
              directly in the form of email, phone, text … You can also receive
              email providing information. New products, services, information
              about upcoming events or recruitment information … if you
              subscribe to email notification.
            </Details>
            <Info>
              Sharing personal information:
              <Details>
                – Except for the case of” Use of personal information “as stated
                in this policy, we are committed to not disclose your personal
                information to outside.
              </Details>
              <Details>
                – In some cases, we may hire an independent unit to conduct
                market research projects and then your information will be
                provided to this unit to carry out the project. This third party
                will be bound by a confidentiality agreement whereby they are
                only permitted to use the information provided for the purpose
                of completing the project.
              </Details>
              <Details>
                – We may disclose or provide your personal information in the
                following cases where it is absolutely necessary: ​​(a) upon
                request of the legal authorities; (b) in the event that We
                believe that it will help us protect our legitimate rights to
                the law; (c) An emergency and is necessary to protect the
                personal safety of Beuter members.
              </Details>
            </Info>
            <Info>Retrieving personal information:</Info>
            <Details>
              – At any time, you may access and correct your personal
              information according to the appropriate links that we provide.
            </Details>
          </Info>
          <Info>
            Privacy of personal information:
            <Details>
              – When you send your personal information to us, you agree to the
              terms we have stated above, Beuter is committed to protecting your
              personal information in every way possible. Beuter’s e-commerce
              activities, including ensuring the confidentiality of customers’
              information during transactions, have been certified by the
              Ministry of Industry and Trade.
            </Details>
            <Details>
              – Beuter also recommends that you adhere to the following
              guidelines to be able to protect your personal information,
              including:
            </Details>
            <Details>
              • Do not disclose your Username / Username and / or Password to
              anyone, write or use in a place where people can identify and see
              them.
            </Details>
          </Info>
          <Info>
            Use of “cookies”:
            <Details>
              – A cookie is a text file placed on your hard disk by a web
              server. Cookies cannot be used to run programs or deliver viruses
              to your computer. Cookies are assigned to your computer. You and
              may only be read by a web server on the domain that is giving you
              cookies.
            </Details>
            <Details>
              – Beuter uses” cookies “to help personalize and maximize the
              efficiency of your online use when accessing Beuter without
              re-registering existing information.
            </Details>
          </Info>
          <Info>
            Regulations on “spam”:
            <Details>
              – Spam (spam) is the fake email sent by Beuter. Beuter confirms
              that it will only send email to you when and only if you have
              registered or used the service from our system.
            </Details>
            <Details>
              – Beuter commits to not sell, rent or lease your email from a
              third party. If you inadvertently receive unsolicited email from
              our system due to an unintended cause, please Click on the link to
              refuse to receive attached emails or notifications directly to
              Beuter.
            </Details>
          </Info>
          <Info>
            Changes in policy:
            <Details>
              – We can completely change the content in the” Privacy Policy
              “without prior notice, to suit the needs of Beuter as well as the
              needs of feedback from customers. In the context of this policy,
              we will revise the “Last Updated” time below.
            </Details>
          </Info>
          <Info>
            Contact information:
            <Details>
              We always welcome comments, contacts and feedback from customers
              about the” Privacy Policy “. If you have any questions, please
              contact us at the email address. info@thebeuter.com or hotline
              0799.21.0000.
            </Details>
          </Info>
          <Date>Updated: 07/04/2020</Date>
        </ListInfo>
      </Container>
    </Wrapper>
  );
};

export default PrivacyAndPolicy;
