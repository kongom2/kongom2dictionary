//firebase.js
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import firebase from "firebase/compat/app";

const firebaseConfig = {
  // firebase 설정과 관련된 개인 정보
  // apiKey: "AIzaSyBBCO5mfmmfinJIWgDHMOinsfZu5D6YBXs",
  // authDomain: "kongom2dictionary-d6063.firebaseapp.com",
  // projectId: "kongom2dictionary-d6063",
  // storageBucket: "kongom2dictionary-d6063.appspot.com",
  // messagingSenderId: "828355069566",
  // appId: "1:828355069566:web:463efd986820e8b043fa2f",
  // measurementId: "G-5FEPJZ3HL3",
  apiKey: "AIzaSyDZFBiaexxQhehAA42AeFjIPgy1Xdre8SM",
  authDomain: "kongom2dictionary.firebaseapp.com",
  projectId: "kongom2dictionary",
  storageBucket: "kongom2dictionary.appspot.com",
  messagingSenderId: "221405126405",
  appId: "1:221405126405:web:de4102f43460e46d10e16c",
};

initializeApp(firebaseConfig);
const db = getFirestore();

export { db };

// // firebaseConfig 정보로 firebase 시작
// firebase.initializeApp(firebaseConfig);

// // firebase의 firestore 인스턴스를 변수에 저장
// const firestore = firebase.firestore();

// // 필요한 곳에서 사용할 수 있도록 내보내기
// export { firestore };
