import React, { useState } from "react";
import IRange from "./input-range";
import {
  BackgroundImageContainer,
  Container,
  HeaderContainer,
  Title,
  Subtitle,
  MediaContainer,
  MediaPreview,
  PricePreview,
  PreviewContainer,
  SliderContainer,
  ToggleContainer,
  BottomContainer
} from "./styled";

const Pricing = () => {
  const [selected, setSelected] = useState(1);

  const [checked, setChecked] = useState(false);
  const Switch = () => setChecked(!checked);

  const mode = checked === false ? "month" : "year";

  const prices = [20, 35, 55, 65, 80];
  const pageViews = ["10K", "50K", "100K", "500K", "1M"];
  const index = selected - 1;
  const priceTotal = checked ? (prices[index] / 2) * 12 : prices[index];

  return (
    <Container>
      <BackgroundImageContainer />
      <HeaderContainer>
        <Title>Simple, traffic-based pricing</Title>
        <Subtitle>
          Sign-up for our 30-day trial. No credit card required.
        </Subtitle>
      </HeaderContainer>
      <MediaContainer>
        <PreviewContainer>
          <MediaPreview>{`${pageViews[index]} pageviews`}</MediaPreview>
          <PricePreview>
            {`$${priceTotal}`}
            <span>/ {mode}</span>
          </PricePreview>
        </PreviewContainer>
        <SliderContainer>
          <IRange
            startValue={selected}
            onChange={value => setSelected(value)}
          />
        </SliderContainer>
        <ToggleContainer checked={checked}>
          <span className="text">Monthly Billing</span>
          <label className="switch">
            <input type="checkbox" onClick={Switch} />
            <span className="slideRound"></span>
          </label>
          <span className="text">Yearly Billing</span>
          <span className="discount">
            50% <span className="hide">discount</span>
          </span>
        </ToggleContainer>
        <BottomContainer>
          <ul>
            <li>
              <span>Unlimited websites</span>
            </li>
            <li>
              <span>100% data ownership</span>
            </li>
            <li>
              <span>Email reports</span>
            </li>
          </ul>
          <button>Free 30-day trial</button>
        </BottomContainer>
      </MediaContainer>
    </Container>
  );
};

export default Pricing;
