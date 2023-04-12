import React from 'react';
import { PanelProps } from '@grafana/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'semantic-ui-css/semantic.css';
import Slider from 'react-slick';
import { Card, Image } from 'semantic-ui-react';
import toilet from './static/toilet.png';
import toilet_cistern from './static/toilet_cistern.png';
import washbasin from './static/washbasin.png';
import sink_pedestal from './static/sink_pedestal.png';
import styled from '@emotion/styled';

interface CustomSlideProps {
  index: number;
  image: string;
  text: string;
}

const StyledCard = styled(Card)`
  & {
    background-color: rgba(19, 20, 24, 0.986) !important;
    box-shadow: none !important;
  }
  & .image {
    margin: 0.5rem !important;
  }
  & .content * {
    color: white !important;
  }
  & img {
    filter: invert(1);
    height: 10rem !important;
    object-fit: contain;
  }
`;

const CustomSlide: React.FC<CustomSlideProps> = ({ index, image, text }) => {
  return (
    <div style={{ margin: '0.5rem' }}>
      <StyledCard centered>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header textAlign="center">{text}</Card.Header>
        </Card.Content>
      </StyledCard>
    </div>
  );
};

interface SettingsTemplate {
  [key: string]: boolean | number | string;
}

export const ImageButtonPanel: React.FC<PanelProps> = ({ options, id, data, width, height }) => {
  const settings: SettingsTemplate = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.floor(width / 150),
    swipeToSlide: true,
    initialSlide: 0,
    adaptiveHeight: true,
  };

  return (
    <Slider {...settings}>
      <CustomSlide index={1} image={toilet} text={'Унитазы'} />
      <CustomSlide index={2} image={sink_pedestal} text={'Умывальники'} />
      <CustomSlide index={3} image={washbasin} text={'Пьедесталы'} />
      <CustomSlide index={4} image={toilet_cistern} text={'Бачки'} />
    </Slider>
  );
};
