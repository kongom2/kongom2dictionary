import { collection, getDocs, addDoc } from "@firebase/firestore"; // 떄에 따라 추가 doc, getDoc
import { db } from "../../firebase";

// Actions
const LOAD = "card/LOAD"; // Read 카드 불러오기
const ADD = "card/ADD"; // Create 카드 생성
const MODIFY = "card/MODIFY"; // 입력값 변경

// Action Creators
export function loadCard(card_list) {
  return { type: LOAD, card_list };
}
export function addCard(card) {
  return { type: ADD, card };
}
export function modifyCard(input_data) {
  return { type: MODIFY, input_data };
}

const initialState = {
  cardList: [],
};

// 미들웨어
export const loadCardFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "dictionary"));
    console.log(card_data);

    let card_list = [];
    card_data.forEach((c) => {
      card_list.push({ ...c.data() });
    });

    console.log(card_list);
    dispatch(loadCard(card_list));
  };
};

export const addCardFB = (card) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), card);
    let addCard_list = [];
    docRef.forEach((doc) => {
      addCard_list.push({ ...doc.data() });
    });
    console.log(addCard_list);
    dispatch(addCard(addCard_list));
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      return { ...state, cardList: action.card_list };
    }
    case "card/ADD": {
      const addCardData = [...state.cardList, action.card];

      return {
        cardList: addCardData,
      };
    }
    case "card/MODIFY":
      const { input_data } = action;
      state.cardList[input_data.index].word = input_data.card.word;
      state.cardList[input_data.index].desc = input_data.card.desc;
      state.cardList[input_data.index].ex = input_data.card.ex;
      return {
        cardList: [...state.cardList],
      };

    default:
      return state;
  }
}
