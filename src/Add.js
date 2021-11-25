import React, { useRef, useState } from "react";
import kongom2img from "./image/bear-face-white.png";
// 리액트 훅
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// 스타일드 컴포넌트 불러오기
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// dictionary 스토어 불러오기
// import { addWord } from "./redux/modules/dictionary";
// firebase
import { db } from "./firebase";
import { collection, addDoc } from "@firebase/firestore";

import "./List.css";

const Add = (props) => {
  // const [word, setWord] = useState("");
  // const [inputWord, setInputWord] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const word_ref = useRef(null);
  const desc_ref = useRef(null);
  const ex_ref = useRef(null);
  console.log(word_ref);

  // const handleChange = (event) => {
  //   setInputWord(event.target.value);
  // };
  return (
    <ListWrap>
      <TitleBox>
        <TitleImage src={kongom2img} />
        <Title>kongom2dictionary</Title>
      </TitleBox>
      <TextBox>
        <Form>
          <Label>단어</Label>
          <Input ref={word_ref} />
          <Label>설명</Label>
          <Input ref={desc_ref} />
          <Label>예시</Label>
          <Input ref={ex_ref} />
        </Form>
        <Stack direction="row" spacing={1} className="buttonBox">
          {/* <Button className="button backBtn" variant="string" color="string">
            뒤로가기
          </Button> */}
          <Button
            className="button addBtn"
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              console.log(word_ref.current.value);
              // dispatch(addWord(word_ref.current.value));
              // dispatch(addWord(desc_ref.current.value));
              // dispatch(addWord(ex_ref.current.value));
              history.push("/");
            }}
          >
            추가하기
          </Button>
        </Stack>
      </TextBox>
    </ListWrap>
  );
};
const Form = styled.form`
  width: 100%;
  height: 500px;
`;
const Label = styled.label`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
`;
const Input = styled.input`
  width: 312px;
  height: 30px;
  padding: 10px;
  font-size: 24px;
  margin: 15px 0px 30px 0px;
  background-color: #fadcda;
  border: 2px solid white;
  color: black;
`;
const TextBox = styled.div`
  background-color: #fadcda;
  box-shadow: 10px 10px 5px #909fa6;
  padding: 32px;
  border-radius: 30px;
`;
// 리스트 Wrap
const ListWrap = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 10px;
  // background-color: #edeef0;
  border-radius: 30px;
`;

// 타이틀 박스
const TitleBox = styled.div`
  margin: 24px auto 24px auto;
  width: 350px;
  display: flex;
  background-color: black;
  color: white;
  border-radius: 20px;
`;
const TitleImage = styled.img`
  width: 32px;
  height: 32px;
  padding: 20px 0px 20px 20px;
  margin: auto 0px;
`;
const Title = styled.h2`
  margin-left: 10px;
  height: 16px;
`;

export default Add;
