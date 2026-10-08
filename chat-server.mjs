import {randomUUID} from 'node:crypto';
import {MOVIE_QUOTES} from './src/movie-quotes.js';

export const CHAT_LIMIT = 60;
export const CHAT_TEXT_LIMIT = 240;
export const CHAT_INTERVAL = 1500;

export function createRoomChat(send) {
  return {
    history(ws,room) { send(ws,{type:'chat-history',code:room.code,messages:room.chat || []}); },
    handle(ws,action,room,player) {
      if (!room || !player || player.ws !== ws) throw new Error('Join a room to chat.');
      let text,quoteId;
      if (action.type === 'chat-dialogue') {
        if (typeof action.quoteId !== 'string' || !Object.hasOwn(MOVIE_QUOTES,action.quoteId)) throw new Error('Choose a dialogue from the list.');
        quoteId = action.quoteId;
        text = MOVIE_QUOTES[quoteId].text;
      } else {
        if (typeof action.text !== 'string') throw new Error('Write a message first.');
        text = action.text.replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,' ').trim();
        if (!text) throw new Error('Write a message first.');
        if ([...text].length > CHAT_TEXT_LIMIT) throw new Error('Keep your message within 240 characters.');
      }
      const now = Date.now(),remaining = CHAT_INTERVAL - (now - (player.lastChat || 0));
      if (remaining > 0) {
        send(ws,{type:'chat-error',message:'One moment before your next message.',retryAfterMs:remaining});
        return;
      }
      player.lastChat = now;
      const message = {id:randomUUID(),kind:quoteId?'dialogue':'text',seat:ws.seat,playerId:player.id,
        name:player.name,text,...(quoteId?{quoteId}:{}),timestamp:now};
      room.chat ||= [];
      room.chat.push(message);
      if (room.chat.length > CHAT_LIMIT) room.chat.splice(0,room.chat.length-CHAT_LIMIT);
      room.touched = now;
      for (const other of room.seats) if (other?.ws) send(other.ws,{type:'chat-message',code:room.code,message});
    }
  };
}
