import firebase from "firebase/app";
import { useDocumentData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const useStory = (storyId) => {
  const storyRef = firestore.collection("story");
  const query = storyRef.doc(storyId);
  const [story] = useDocumentData(query, { idField: "id" });

  return {
    story,
  };
};

export default useStory;
