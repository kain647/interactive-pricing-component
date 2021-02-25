import styled from "styled-components";
import bgHeader from "../upload/pattern-circles.svg";

export const BackgroundImageContainer = styled.div`
  display: flex;
	box-sizing: border-box;
  position: absolute;
  background-color: #f1f5fe;
  width: 100%;
  height: 50%;
  border-radius: 0px 0px 0px 300px;
	top: 0;
  z-index: 0;
  @media screen and (max-width: 768px) {
	  display: flex;
	  height: 100%;
	  border-radius: 0px;
  }
`;
export const Container = styled.div`
  display: flex;
	box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    background-size: cover;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 230px;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Manrope", sans-serif;
  background-image: url(${bgHeader});
  background-origin: content-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  margin-bottom: 25px;
  padding: 40px;
  z-index: 1;
  svg {
    opacity: 0.5%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export const Title = styled.h1`
  font-weight: 700;
  color: #293356;
  font-size: 48px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
export const Subtitle = styled.h3`
  font-weight: 600;
  color: #858fad;
  font-size: 22px;
  z-index: 1;
`;
export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  background-color: #fafbff;
  box-shadow: 0px 0px 20px 0px rgb(133 143 173 / 10%);
  border-radius: 5px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
  }
`;
export const PreviewContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 45px;
  padding: 20px 50px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
export const MediaPreview = styled.div`
  display: flex;
  text-transform: uppercase;
  color: #858fad;
  font-weight: 700;
  font-size: 18px;
`;
export const PricePreview = styled.div`
  display: flex;
  width: auto;
  font-size: 44px;
  font-weight: 700;
  color: #293356;
  span {
    display: flex;
    width: 70px;
    align-items: center;
    color: #858fad;
    font-weight: 700;
    font-size: 18px;
    margin-left: 10px;
  }
`;
export const SliderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 45px;
  padding: 20px 50px;
  input {
    height: 8px;
    width: 100%;
    border-radius: 4px;
    outline: none;
    transition: all 450ms ease-in;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const ToggleContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  color: #858fad;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 45px 45px;
  border-bottom: 2px solid rgba(133, 143, 173, 0.1);
  @media screen and (max-width:768px) {
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 30px;
  }
	.text {
    @media screen and (max-width:768px) {
	    display: flex;
	    word-wrap: break-word;
      font-size: 18px;
    }
	}
  .discount {
    background-color: #feece7;
    color: #ff8c66;
    font-size: 0.85em;
    padding: 2px 8px;
    border-radius: 15px;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 24px;
	  border: none;
	  outline: none;
  }
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slideRound {
    border-radius: 34px;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ checked }) => (checked ? "#10d5c2" : "#a5f3eb")};
    transition: 0.2s;
    :before {
      transform: translateX(18px);
      border-radius: 50%;
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: ${({ checked }) => (checked ? "6px" : "-15px")};
      bottom: 3px;
      background-color: white;
      transition: 0.4s;
    }
  }
`;
export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  justify-content: space-between;
  color: #858fad;
  padding: 20px 50px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  ul {
    margin-right: 20px;
  }
  li {
    margin-bottom: 15px;
    list-style-image: url(https://bit.ly/3kkIJAl);
  }
  button {
    width: 200px;
    height: 50px;
    padding: 0;
    border: none;
    outline: none;
    font: inherit;
    background: none;
    background-color: #293356;
    color: #bdccff;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s;
    @media screen and (max-width: 768px) {
      margin-bottom: 15px;
    }
    :hover {
      color: #fff;
    }
    @media screen and (max-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
