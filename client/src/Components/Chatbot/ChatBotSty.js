import { styled } from "styled-components";

export const IconDiv = styled.div`
  width: 40px;
  height: 40px;
  background-color: #0055ff;
  padding: 10px;
  border-radius: 35px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  transition: all ease 0.5s;
  z-index: 9;
  .material-symbols-outlined {
    font-size: 40px;
    color: white;
  }
  &:hover {
    transform: rotate(360deg);
    /* transform: scale(1.2); */
  }
`;

export const ModalContent = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px 10px 3px 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: fixed;
  bottom: 105px;
  right: 35px;
  z-index: 13;
  padding: 10px 5px 20px 5px;
`;

export const ModalBottom = styled.div`
  background-color: #f7f7f7;
  z-index: 14;
  bottom: 95px;
  right: 39px;
  position: fixed;
  width: 25px;
  height: 25px;
  border-radius: 4px;
  box-shadow: 8px -8px 10px rgb(178 178 178 / 0.3);
  transform: rotate(135deg);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-between;
  border-bottom: 3px dashed #dfdfdf;
  padding: 10px;
  .material-symbols-outlined {
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
    color: #aaa;
    float: right;
  }
`;

export const Profile = styled.div`
  display: flex;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .name {
    display: flex;
    align-items: center;
    color: #333333;
    font-size: 18px;
    font-weight: 800;
  }
`;

export const ChatBox = styled.div`
  margin-top: 5px;
  width: 100%;
  height: 77%;
  overflow-x: hidden;
  overflow-y: scroll;
  .speech-bubble {
    position: relative;
    background: #ffeb60;
    border-radius: 0.4em;
    width: max-content;
    max-width: 70%;
    padding: 5px;
    right: 0;
    margin: 10px;
    margin-left: auto;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    color: #333333;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  }
  .speech-bubble:after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-left-color: #ffeb60;
    border-right: 0;
    border-top: 0;
    margin-top: -6px;
    margin-right: -10px;
  }

  .chatbot-bubble {
    position: relative;
    background: lightblue;
    border-radius: 0.4em;
    width: max-content;
    max-width: 80%;
    flex-wrap: wrap;
    padding: 5px;
    right: 0;
    margin: 10px;
    margin-right: auto;
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
    color: #333333;
  }

  .chatbot-bubble:after {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-right-color: lightblue;
    border-left: 0;
    border-top: 0;
    margin-top: -6px;
    margin-left: -10px;
  }
`;

export const InputBox = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 18px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  z-index: 99;
  input {
    height: 30px;
    width: 273px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #dfdfdf;
  }
  button {
    background: #0055ff;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    font-weight: bold;
    color: white;
    padding: 0 8px;
    cursor: pointer;
  }
`;
