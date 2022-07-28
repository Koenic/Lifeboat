import { main } from './handler';
export default {
  handler: main,
  events: [
    {
      http: {
        path: '/startgame',
        method: 'post',
      },
    },
  ],
};
