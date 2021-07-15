import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const useStoryList = (gameId) => {
  const gameRef = firestore.collection("story");
  const query = gameRef.where("game", "==", gameId);

  const [stories] = useCollectionData(query, { idField: "id" });
  return {
    stories,
  };
};

export default useStoryList;
