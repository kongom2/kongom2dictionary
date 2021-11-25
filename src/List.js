import React from "react";
import kongom2img from "./image/bear-face-white.png";
// 리액트 훅
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
// 스타일드 컴포넌트 불러오기
import styled from "styled-components";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { useDispatch } from "react-redux";
import { wordsFB } from "./redux/modules/dictionary";

import "./List.css";

const List = (props) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(wordsFB());
  }, []);
  const history = useHistory();
  const wordData = useSelector((state) => state.dictionary.wordList);
  console.log(wordData);

  return (
    <ListWrap>
      <TitleBox>
        <TitleImage src={kongom2img} />
        <Title>kongom2dictionary</Title>
      </TitleBox>
      {wordData.map((u, i) => {
        return (
          <Card key={i}>
            <ContentTitle>단어</ContentTitle>
            <Content>{u.word}</Content>
            <ContentTitle>설명</ContentTitle>
            <Content>{u.desc}</Content>
            <ContentTitle>예시</ContentTitle>
            <Content style={{ color: "rgb(9, 132, 227)", fontWeight: "bold" }}>
              {u.ex}
            </Content>
          </Card>
        );
      })}

      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <AddButton>
        <Fab
          onClick={() => {
            history.push("/add");
          }}
          aria-label="add"
          className="addButtonFab"
          color="primary"
        >
          <AddIcon className="addIcon"></AddIcon>
        </Fab>
      </AddButton>
    </ListWrap>
  );
};
const ContentTitle = styled.div`
  font-weight: bold;
  text-decoration: underline;
`;
const Content = styled.div`
  margin: 10px 10px;
`;

// 리스트 Wrap
const ListWrap = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 10px;
  // background-color: #edeef0;
  border-radius: 30px;
`;
// 추가하기 버튼
const AddButton = styled.div`
  width: 400px;
  position: fixed;
  bottom: 60px;
`;

// 컨텐츠 카드
const Card = styled.div`
  width: 350px;
  height: 220px;
  padding: 16px;
  //   border: 3px solid black;
  border-radius: 30px;
  box-shadow: 10px 10px 5px #909fa6;
  margin: 32px auto;
  //   background-color: #fadcda;
  background-color: #fef5d4;
`;

// 타이틀 박스
const TitleBox = styled.div`
  margin: 24px auto 0px auto;
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

export default List;
