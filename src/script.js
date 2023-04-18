const cards3 = document.querySelectorAll(".card3");

const playerCardsContainer = document.querySelector(".player-cards-player1");
const playerCardsContainer2 = document.querySelector(".player-cards-player2");
const newGameBtn = document.querySelector(".new-game");
const newGameBtnPlayer2 = document.querySelector(".new-game-player2");
const cardsContainer = document.querySelector(".card-container3");
const scoreContainerPlayer1 = document.getElementById("score-container");
const scoreContainerPlayer2 = document.getElementById(
  "score-container-player2"
);
const buttonsPlayer1 = document.querySelector(".buttons-player1");
const buttonsPlayer2 = document.querySelector(".buttons-player2");
const betBtn = document.getElementById("bet");
const chipsContainerPlayer1 = document.querySelector(".chips-container");
const chipsContainerPlayer2 = document.querySelector(
  ".chips-container-player2"
);
const inputChipsContainerInputPlayer1 = document.querySelector(
  ".chips-container-input-player1"
);
const inputChipsContainerInputPlayer2 = document.querySelector(
  ".chips-container-input-player2"
);
const bank = document.getElementById("bank");

// mygtukaiPlayer2.setAttribute("hidden", true);

const cardsArray = Array.from(cards3);

let activePlayer;

function getMultipleRandom(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  console.log(shuffled);

  return shuffled.slice(0, num);
}
const random6Cards = getMultipleRandom(cardsArray, 6);

function displayCards() {
  const first3Cards = random6Cards.slice(0, 3);
  const last3Cards = random6Cards.slice(3);
  console.log(first3Cards, last3Cards);
  playerCardsContainer.append(...first3Cards);
  playerCardsContainer2.append(...last3Cards);
  calcCardsValuesPlayer1();
  calcCardsValuesPlayer2();
  calculatePointsSum();
  calculatePointsSumPlayer2();
  const sumArray = [
    counterClubs,
    counterSpades,
    counterDiamonds,
    counterHearts,
  ];
  const sumArrayPlayer2 = [
    counterClubsPlayer2,
    counterSpadesPlayer2,
    counterDiamondsPlayer2,
    counterHeartsPlayer2,
  ];
  console.log(sumArray);
  const biggestSum = sumArray.reduce((accum, el) => {
    if (accum <= el) {
      accum = el;
    } else {
      accum = accum;
    }
    return accum;
  }, 0);
  const biggestSumPlayer2 = sumArrayPlayer2.reduce((accum, el) => {
    if (accum <= el) {
      accum = el;
    } else {
      accum = accum;
    }
    return accum;
  }, 0);
  console.log(biggestSum, biggestSumPlayer2);
  scoreContainerPlayer1.textContent = biggestSum;
  scoreContainerPlayer2.textContent = biggestSumPlayer2;
}

function calcCardsValuesPlayer1() {
  for (const card of playerCardsContainer.querySelectorAll(".card3")) {
    if (card.getAttribute("data-card-color") === "spades") {
      spadesArr.push(Number(card.getAttribute("data-card-value")));
    } else if (card.getAttribute("data-card-color") === "diamonds") {
      diamondsArr.push(Number(card.getAttribute("data-card-value")));
    } else if (card.getAttribute("data-card-color") === "clubs") {
      clubsArr.push(Number(card.getAttribute("data-card-value")));
    } else if (card.getAttribute("data-card-color") === "hearts") {
      heartsArr.push(Number(card.getAttribute("data-card-value")));
    }
  }
  // patikrinti ar kortu kombinacija yra kampai

  const containerArrayPlayer1 = Array.from(
    playerCardsContainer.querySelectorAll(".card3")
  );
  const kampaiPlayer1 = containerArrayPlayer1.every((el, i) => {
    console.log(
      el.getAttribute("data-card-value"),
      containerArrayPlayer1[0].getAttribute("data-card-value")
    );
    if (
      el.getAttribute("data-card-value") ===
      Number(containerArrayPlayer1[0].getAttribute("data-card-value"))
    ) {
      scoreContainerPlayer1.textContent = "kampai";
    } else {
    }
  });
  console.log(kampaiPlayer1);

  const containerArrayPlayer2 = Array.from(
    playerCardsContainer2.querySelectorAll(".card3")
  );
  console.log(containerArrayPlayer2);
  const kampaiPlayer2 = containerArrayPlayer2.every((el, i) => {
    console.log(
      el.getAttribute("data-card-value"),
      containerArrayPlayer2[0].getAttribute("data-card-value")
    );
    if (
      el.getAttribute("data-card-value") ===
      Number(containerArrayPlayer2[0].getAttribute("data-card-value"))
    ) {
      scoreContainerPlayer2.textContent = "kampai";
    }
  });
  console.log(kampaiPlayer2);
}

function calcCardsValuesPlayer2() {
  for (const card of playerCardsContainer2.querySelectorAll(".card3")) {
    if (card.getAttribute("data-card-color") === "spades") {
      spadesArrPlayer2.push(Number(card.getAttribute("data-card-value")));
    } else if (card.getAttribute("data-card-color") === "diamonds") {
      diamondsArrPlayer2.push(Number(card.getAttribute("data-card-value")));
    } else if (card.getAttribute("data-card-color") === "clubs") {
      clubsArrPlayer2.push(Number(card.getAttribute("data-card-value")));
    } else if (card.getAttribute("data-card-color") === "hearts") {
      heartsArrPlayer2.push(Number(card.getAttribute("data-card-value")));
    }
  }
}
let clubsArrPlayer2 = [];
let spadesArrPlayer2 = [];
let diamondsArrPlayer2 = [];
let heartsArrPlayer2 = [];
let counterClubsPlayer2 = 0;
let counterSpadesPlayer2 = 0;
let counterDiamondsPlayer2 = 0;
let counterHeartsPlayer2 = 0;

let clubsArr = [];
let spadesArr = [];
let diamondsArr = [];
let heartsArr = [];
let counterClubs = 0;
let counterSpades = 0;
let counterDiamonds = 0;
let counterHearts = 0;
function calculatePointsSum() {
  for (let i = 0; i < clubsArr.length; i++) {
    counterClubs = counterClubs + clubsArr[i];
  }
  for (let i = 0; i < spadesArr.length; i++) {
    counterSpades = counterSpades + spadesArr[i];
  }
  for (let i = 0; i < diamondsArr.length; i++) {
    counterDiamonds = counterDiamonds + diamondsArr[i];
  }
  for (let i = 0; i < heartsArr.length; i++) {
    counterHearts = counterHearts + heartsArr[i];
  }
}

function calculatePointsSumPlayer2() {
  for (let i = 0; i < clubsArrPlayer2.length; i++) {
    counterClubsPlayer2 = counterClubsPlayer2 + clubsArrPlayer2[i];
  }
  for (let i = 0; i < spadesArrPlayer2.length; i++) {
    counterSpadesPlayer2 = counterSpadesPlayer2 + spadesArrPlayer2[i];
  }
  for (let i = 0; i < diamondsArrPlayer2.length; i++) {
    counterDiamondsPlayer2 = counterDiamondsPlayer2 + diamondsArrPlayer2[i];
  }
  for (let i = 0; i < heartsArr.length; i++) {
    counterHeartsPlayer2 = counterHeartsPlayer2 + heartsArrPlayer2[i];
  }
}

function bet() {
  chipsContainerPlayer1.textContent =
    chipsContainerPlayer1.textContent - inputChipsContainerInputPlayer1.value;
  bank.textContent = bank.textContent + inputChipsContainerInputPlayer1.value;
  buttonsPlayer1.setAttribute("hidden", true);
}
// newGameBtn.addEventListener("click", displayCards);
// betBtn.addEventListener("click", bet);

// ----------------------------------Sign up form--------------------------------------------------
const joinBtn = document.querySelector(".join");
const loginBtn = document.querySelector(".login");
const table = document.querySelector(".table");
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  updateEmail,
  updateProfile,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCLskM7Sjdwq6NKMIEcFpqMJlzYM2nkQJc",
  authDomain: "trinka-58735.firebaseapp.com",
  projectId: "trinka-58735",
  storageBucket: "trinka-58735.appspot.com",
  messagingSenderId: "1009858824896",
  appId: "1:1009858824896:web:4c3a362710b2e3205dfb25",
  measurementId: "G-1N1Y6CF3ME",
};
// init firebase app
initializeApp(firebaseConfig);

//init services
// database connection
const db = getFirestore();
const auth = getAuth();
const user = auth.currentUser;

// collection reference
const colRef = collection(db, "tables");

//queries
const q = query(colRef, orderBy("createdAt"));
// get collection data
// this return a promise. then() method fires when function getDocs is complete.
// this function contains snapshot of that collection on that moment when we reach it to get it. On that snapshot
// object we have acces to all documents
getDocs(q)
  .then((snapshot) => {
    let tables = [];
    snapshot.docs.forEach((doc) => {
      tables.push({ ...doc.data(), id: doc.id });
    });
    console.log(tables);
  })
  .catch((err) => {
    console.log(err.message);
  });

// creatinga new document on firestore database
// addDoc(colRef, {
//   maxPlayers: 8,
//   currentNumberOfPlayers: 0,
//   createdAt: serverTimestamp(),
// });
// event handlers
const docRef = doc(db, "tables", "aoO5aAfGAne8pA4QuhFB");
// getDoc(docRef).then((doc) => {
//   const { currentNumberOfPlayers, maxPlayers } = doc.data();
//   console.log(currentNumberOfPlayers, maxPlayers);
// });
// getDoc(docRef).then((doc) => {
//   console.log(doc.data(), doc.id);
// });
onSnapshot(docRef, (doc) => {
  // console.log(doc.data(), doc.id);
});

document.querySelector(".new-acc-form").setAttribute("hidden", false);

joinBtn.addEventListener("click", function () {
  document.querySelector(".new-acc-form").removeAttribute("hidden");
});
const signupForm = document.querySelector(".signup");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameValue = document.getElementById("username").value;

  document.querySelector(".new-acc-form").setAttribute("hidden", false);
  const email = signupForm.email.value;
  const password = signupForm.password.value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("user created:", cred.user);
      // signupForm.reset();
      updateProfile(cred.user, {
        displayName: usernameValue,
      })
        .then(() => {
          console.log("profile updated");
          console.log(cred.user.displayName);
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    })
    .catch((err) => {
      console.log(err.message);
    });
  console.log(auth.currentUser);
  sendEmailVerification(auth.currentUser).then(() => {
    console.log("email verification sent", auth.currentUser);
  });
});
console.log(document.getElementById("username").value);
const logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
  signOut(auth).then(() => {
    usernameOnLobby.textContent = "";
    console.log("the user signed out");
  });
});
document.querySelector(".login-acc-form").setAttribute("hidden", false);
loginBtn.addEventListener("click", function () {
  document.querySelector(".login-acc-form").removeAttribute("hidden");
});
const usernameOnLobby = document.querySelector(".username");
const loginForm = document.querySelector(".loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".login-acc-form").setAttribute("hidden", false);
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      usernameOnLobby.textContent = cred.user.displayName;
      console.log(cred.user);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log("user status changed:", user);
  usernameOnLobby.textContent = user.displayName;
});
