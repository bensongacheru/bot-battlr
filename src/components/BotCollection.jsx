import React, { useEffect, useState } from 'react';
import BotCard from './BotCard';

const BotCollection = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const handleEnlist = (bot) => {
    if (!bot.enlisted) {
      onEnlist(bot);
    }
  };

  return (
    <div className="flex flex-wrap justify-center p-4">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onEnlist={handleEnlist}
          onDischarge={() => {}}
        />
      ))}
    </div>
  );
};

export default BotCollection;
