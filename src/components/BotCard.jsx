import React from 'react';

const BotCard = ({ bot, onEnlist, onDischarge }) => {
  return (
    <div className="border border-gray-300 p-4 m-2 rounded-lg shadow-lg flex flex-col items-center">
      <img src={bot.avatar_url} alt={bot.name} className="w-24 h-24 rounded-full mb-4" />
      <h3 className="text-xl font-bold mb-2">{bot.name}</h3>
      <p className="text-gray-700 mb-4">{bot.catchphrase}</p>
      <div className="flex space-x-2">
        <button 
          onClick={() => onEnlist(bot)} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Enlist
        </button>
        <button 
          onClick={() => onDischarge(bot)} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Discharge
        </button>
      </div>
    </div>
  );
};

export default BotCard;
