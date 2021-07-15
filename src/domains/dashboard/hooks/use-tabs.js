import { useState } from "react";

const useTabs = () => {
  const [tab, setTab] = useState(0);

  return {
    setTab,
    tab,
  };
};

export default useTabs;
