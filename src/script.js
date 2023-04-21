// ----------------------------------Sign up form--------------------------------------------------
const joinBtn = document.querySelector(".join");
const loginBtn = document.querySelector(".login");
const table = document.querySelector(".table");
const currentPlayers = document.querySelector(".current-players");

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
  add,
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
const tablesRef = collection(db, "tables");
const playersRef = collection(db, "players");
const queryOfPlayers = query(playersRef);

//queries
const q = query(tablesRef);
// get collection data
// this return a promise. then() method fires when function getDocs is complete.
// this function contains snapshot of that collection on that moment when we reach it to get it. On that snapshot
// object we have acces to all documents
getDocs(queryOfPlayers)
  .then((snapshot) => {
    let players = [];
    snapshot.docs.forEach((doc) => {
      players.push({ ...doc.data() });
    });
    console.log("players array", players);
    currentPlayers.textContent = players.length;
  })
  .catch((err) => {
    console.log(err.message);
  });

// creating new table collection
document.querySelector(".join-table"), addEventListener("click", () => {});

const playersDocuments = onSnapshot(queryOfPlayers, (snapshot) => {
  let players;
  snapshot.docs.forEach((doc) => {});
});
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
          // console.log(cred.user.displayName);
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
      console.log("user logged in today", cred.user);

      // usernameOnLobby.textContent = cred.user.displayName;
      // console.log("user logged in", cred.user);
      addDoc(playersRef, {
        name: cred.user.displayName,
        email: cred.user.email,
        uid: cred.user.uid,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
});
const joinTableBtnArray = document.querySelectorAll(".join-table");
const hh = {
  tableName: "",
};
let currentPlayersAtTheTable = [];
const unsubAuth = onAuthStateChanged(auth, (user) => {
  console.log("user status changed:", user.uid);
  joinTableBtnArray.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const element = e.target;
      console.log("table name:", element.getAttribute("data-table-name"));
      currentPlayersAtTheTable.push(user.uid);
      hh.tableName = element.getAttribute("data-table-name");
      console.log(currentPlayersAtTheTable);
      addDoc(playersRef, {
        name: user.displayName,
        chips: 40,
        uid: user.uid,
      }).then(() => {
        console.log("player added to the table");
      });
    });
  });

  usernameOnLobby.textContent = user.displayName;
});
console.log("current user", user);

const cont1 = document.querySelector(".player-container1");
// if (!cont1.children) {
// const player = document.createElement("div");
// player.textContent = "ggggggggggggggggggggggggggggggggggggggggggggggggggg";
// player.classList.add("player1");
// cont1.appendChild(player);
// cont1.textContent = "hhhhhhhhhhhhhhhhhhhhhhhhgggggggggggggggggggggggggggg";
console.log(cont1);
