import { useState } from "react";
import firebase from "firebase/app";
import { useRouter } from "next/router";
import { useUserSession } from "common/hooks";
import useAddParticipant from "@domains/game/hooks/use-add-participant";

const firestore = firebase.firestore();

const useCreateGame = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const { user } = useUserSession();
  const routes = useRouter();
  const { handleCreateParticipant } = useAddParticipant();

  const handleCreateGame = async (name, description = "") => {
    setLoading(true);
    try {
      const { id } = await firestore.collection("game").add({
        name,
        description,
        user: user.uid,
      });

      await handleCreateParticipant(id);

      setSuccess(true);
      routes.push(`/game/${id}`);
    } catch (e) {}

    setLoading(false);
  };

  return {
    handleCreateGame,
    isLoading,
    isSuccess,
  };
};

export default useCreateGame;
