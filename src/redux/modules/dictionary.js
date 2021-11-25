import { collection, doc, getDoc, getDocs, addDoc } from "@firebase/firestore";
import { db } from "../../firebase";

// Actions
const LOAD = "card/LOAD";
// const ADD = "card/ADD";

// Action Creators
export function loadCard(card_list) {
  return { type: LOAD, card_list };
}
// export function addWord(word) {
//   return { type: ADD, word };
// }

const initialState = {
  isLoaded: false,
  wordList: [],
  // wordList: [
  //   { word: "dictionary", desc: "사전", ex: "dictionary이다." },
  //   { word: "dictionary", desc: "사전", ex: "dictionary이다." },
  //   { word: "dictionary", desc: "사전", ex: "dictionary이다." },
  //   { word: "dictionary", desc: "사전", ex: "dictionary이다." },
  //   { word: "dictionary", desc: "사전", ex: "dictionary이다." },
  //   { word: "dictionary", desc: "사전", ex: "dictionary이다." },
  // ],
  lastValue: 0,
};

// 미들웨어
export const wordsFB = () => {
  return async function (dispatch) {
    const card_data = await getDocs(collection(db, "dictionary"));
    console.log(card_data);

    let card_list = [];
    card_data.forEach((c) => {
      card_list.push({ ...c.data() });
    });
    // card_data.forEach((card) => {
    //   const cardObject = {
    //     id: card.id,
    //     ...card.data(),
    //   };

    //   card_list.push(cardObject);
    // });
    console.log(card_list);
    dispatch(loadCard(card_list));
  };
};

// side effects, only as applicable
// e.g. thunks, epics, etc
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "card/LOAD": {
      return { ...state, wordList: action.card_list };
    }
    // case "word/ADD": {
    //   console.log(action);
    //   return { ...state, wordList: action.wordList };
    // }

    default:
      return state;
  }
}
