import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import theme from "../Styles/theme";
import media from "../Styles/media";
const { fontSizes } = theme;

const SizeChartWrapper = styled.div`
  width: 100%;
  margin: 50px 0 0;
`;

const SizeChartContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.p`
  font-size: ${fontSizes.lg};
  font-weight: 600;
`;

const ImageSizeChart = styled.img`
  src: url(${(props) => props.src});
  width: 400px;
`;

const LogoBeuter = styled.img`
  src: url(${(props) => props.src});
  width: 350px;
`;

const SizeChart = (props) => {
  return (
    <SizeChartWrapper>
      <SizeChartContainer>
        <Title>Size Chart</Title>
        <ImageSizeChart src="https://thebeuter.com/wp-content/uploads/2020/04/1-5-scaled.jpg" />
        <ImageSizeChart src="https://thebeuter.com/wp-content/uploads/2020/07/1-1-scaled.jpg" />
        <ImageSizeChart src="https://thebeuter.com/wp-content/uploads/2020/04/3-3-scaled.jpg" />
        <ImageSizeChart src="https://thebeuter.com/wp-content/uploads/2020/04/4-3-scaled.jpg" />
        <ImageSizeChart src="https://thebeuter.com/wp-content/uploads/2020/04/5-1-scaled.jpg" />
        <ImageSizeChart src="https://thebeuter.com/wp-content/uploads/2020/04/6-1-scaled.jpg" />
        <ImageSizeChart src="https://thebeuter.com/wp-content/uploads/2020/07/8-scaled.jpg" />
        <ImageSizeChart src="https://thebeuter.com/wp-content/uploads/2020/07/7-2-scaled.jpg" />
        <LogoBeuter src="https://thebeuter.com/wp-content/uploads/2020/04/7-3-scaled.jpg" />
      </SizeChartContainer>
    </SizeChartWrapper>
  );
};

export default SizeChart;
