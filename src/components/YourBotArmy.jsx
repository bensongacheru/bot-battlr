import React from 'react';

const YourBotArmy = ({ bots, onRelease, onDelete }) => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Bot Army</h2>
      <div className="flex flex-wrap justify-center">
        {bots.map((bot) => (
          <div key={bot.id} className="border border-gray-300 p-4 m-2 rounded-lg shadow-lg flex flex-col items-center">
            <img src={bot.avatar_url} alt={bot.name} className="w-24 h-24 rounded-full mb-4" />
            <h3 className="text-xl font-bold mb-2">{bot.name}</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => onRelease(bot)} 
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Release
              </button>
              <button 
                onClick={() => onDelete(bot)} 
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Discharge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
