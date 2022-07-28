import type { Handler } from '@customTypes/handler';

type Event = {
  body: {
    players: string[];
  };
};

const startGame: Handler<Event, { succes: string }> = async (req, res) => {
  res.json({ succes: 'true' });
};

export const main = startGame;
