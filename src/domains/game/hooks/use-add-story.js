import { useState } from "react";
import firebase from "firebase/app";

const firestore = firebase.firestore();

const useAddStory = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const handleCreateStory = async (name, gameId) => {
    setLoading(true);
    try {
      await firestore.collection("story").add({
        name,
        game: gameId,
        createAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setSuccess(true);
    } catch (e) {}

    setLoading(false);
  };

  return {
    handleCreateStory,
    isLoading,
    isSuccess,
  };
};

export default useAddStory;
