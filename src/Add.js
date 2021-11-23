import React from "react";
import kongom2img from "./image/bear-face-white.png";
// 리액트 훅
import { useHistory } from "react-router-dom";
// 스타일드 컴포넌트 불러오기
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./List.css";

const Add = (props) => {
  const history = useHistory();
  return (
    <ListWrap>
      <TitleBox>
        <TitleImage src={kongom2img} />
        <Title>kongom2dictionary</Title>
      </TitleBox>
      <TextBox>
        <TextField
          className="textArea"
          label="단어"
          variant="outlined"
          margin="normal"
        />
        <TextField
          className="textArea"
          label="설명"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
        />
        <TextField
          className="textArea"
          label="예시"
          variant="outlined"
          margin="normal"
          multiline
          rows={2}
        />
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
