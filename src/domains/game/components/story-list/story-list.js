import React from "react";
import styles from "./story-list.module.css";
import { Title } from "common/components";
import AddStory from "../add-story.js/add-story";
import useStoryList from "@domains/game/hooks/use-story-list";
import useSelectStory from "@domains/game/hooks/use-select-story";

const SortStories = (a, b) => {
  if (a.createAt === null || b.createAt === null) return Number.MAX_VALUE;
  return a.createAt.seconds - b.createAt.seconds;
};

const Story = ({ index, name, onClick, isSelected, score }) => {
  const selectedClass = isSelected ? "selected" : "";
  return (
    <button onClick={onClick} className={styles.buttonnone}>
      <div className={`${styles.story} ${styles[selectedClass]}`}>
        <p className={styles.p}>
          #{index + 1} {name}
        </p>
        <p className={styles.score}>{score}</p>
      </div>
    </button>
  );
};

const StoryList = ({ game }) => {
  const { stories = [] } = useStoryList(game.id);
  const { handleUpdateGameStory } = useSelectStory(game.id);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Title variant="h6">Stories</Title>
      </div>
      <div className={styles.containerStories}>
        {stories.sort(SortStories).map((story, index) => (
          <Story
            onClick={() => handleUpdateGameStory(story.id)}
            isSelected={story.id === game.story}
            key={index}
            index={index}
            {...story}
          />
        ))}
      </div>
      <AddStory gameId={game.id} />
    </div>
  );
};

export default StoryList;
