import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-storage.js";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUUrRTwB4sRxugqa1CzDu8qpJ0fQkmH6c",
  authDomain: "web-intensive-f8a48.firebaseapp.com",
  projectId: "web-intensive-f8a48",
  storageBucket: "web-intensive-f8a48.appspot.com",
  messagingSenderId: "934242528933",
  appId: "1:934242528933:web:36beeb6345f88a021a674c",
  measurementId: "G-JBRH49SYEY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
const listRef = ref(storage, "img");
const starsRef = ref(
  storage,
  "img/BFX_Robo__shogo_shimada-removebg-preview.png"
);
getDownloadURL(starsRef).then((url) => {
  listAll(listRef)
  let arr = 
    then((res) => {
      res.prefixes.forEach((folderRef) => {});
      res.items.forEach((itemRef) => {});
    })
    .catch((error) => {});
    let html = `    <img src="${url}" alt="">`
    document.querySelector(".img").innerHTML = html;
});
