import firebase from "firebase/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const useParticipantList = (gameId) => {
  const participantRef = firestore.collection("participant");
  const query = participantRef.where("game", "==", gameId);

  const [participants] = useCollectionData(query, { idField: "id" });
  return {
    participants,
  };
};

export default useParticipantList;
