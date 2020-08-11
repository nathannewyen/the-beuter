import React from 'react';
import styled from 'styled-components';
import theme from '../Styles/theme';
import mediaMin from '../Styles/mediaMin';
const { fontSizes } = theme;

const ContactWrapper = styled.div`
	margin: 50px 0;
	width: 100%;
	${mediaMin.desktop`margin-left: 400px;`};
`;

const ContactContainer = styled.div`
	width: 400px;
	margin: 0 auto;
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

const Form = styled.form`margin-top: 30px;`;

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

const ContactForm = (props) => {
	return (
		<ContactWrapper>
			<ContactContainer>
				<Title>CONTACT</Title>
				<ContactSchedule>Please contact us from Monday to Saturday 9am-6pm</ContactSchedule>
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
				<Form>
					<FormLabel>Your Name (required)</FormLabel>
					<FormInput />
					<FormLabel>Your Email (required)</FormLabel>
					<FormInput />
					<FormLabel>Subject</FormLabel>
					<FormInput />
					<FormLabel>Your Message</FormLabel>
					<FormTextarea />
				</Form>
			</ContactContainer>
		</ContactWrapper>
	);
};

export default ContactForm;
