import React from "react";
import { Title } from "common/components";
import styles from "./story-detail.module.css";
import Actions from "./actions";
import Score from "./score";
import Divider from "@material-ui/core/Divider";
import Participants from "../participants/participants";
import useStory from "@domains/game/hooks/use-story";
import VotingCards from "../voting-cards/voting-cards";
import { useUserSession } from "common/hooks";
import useParticipantList from "@domains/game/hooks/use-participant-list";
import useParticipantScore from "@domains/game/hooks/use-participant-score";
import useFlipCards from "@domains/game/hooks/use-flip-cards";
import { getScore } from "common/utils/helpers/score";

const StoryDetail = ({ game }) => {
  const { user = {} } = useUserSession();
  const { participants = [] } = useParticipantList(game.id);
  const { handleResetAllParticipantScore } = useParticipantScore();
  const { story = {} } = useStory(game.story);
  const { handleflipCards, handleAddScoreStory } = useFlipCards(game.id);

  const handleReset = () => {
    handleResetAllParticipantScore(game.id);
    handleflipCards(false);
  };

  const handleFlip = () => {
    handleflipCards(true);
    const cleanScores = participants.filter((p) => p.score !== "-");
    const score =
      cleanScores.length > 0 ? getScore(cleanScores.map((p) => p.score)) : "-";
    handleAddScoreStory(story.id, score);
  };

  const handleResetScore = () => {
    handleAddScoreStory(story.id, "-");
    handleResetAllParticipantScore(game.id);
    handleflipCards(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Score score={story.score} />
        <div>
          <Title variant="h3" className={styles.title}>
            {game.name}
          </Title>
          <Title variant="h4" className={styles.subtitle}>
            Story: {story.name}
          </Title>
          <Actions
            handleResetAllParticipantScore={handleReset}
            handleFlipCards={handleFlip}
            game={game}
            handleResetScore={handleResetScore}
          />
        </div>
      </div>

      <div className={styles.participants}>
        <div>
          <Title variant="h5">Participants</Title>
          <p>
            Share this URL to invite more persons to this room. Code of this
            room : <strong>{game.id}</strong>
          </p>
        </div>

        <Divider />
        <Participants participants={participants} game={game} />
      </div>
      <div className={styles.voting}>
        <VotingCards
          game={game}
          participant={participants.find((p) => p.user === user.uid)}
        />
      </div>
    </div>
  );
};

export default StoryDetail;
