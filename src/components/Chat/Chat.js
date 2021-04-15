import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import '../Chat/Chat.css';
import Info from '../Info/Info';
import Input from '../input/Input';
import Messages from '../Messages/Messages';

let socket;
const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://falcon-chat.herokuapp.com/';

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT, {
      transports: ['websocket', 'polling', 'flashsocket'],
    });
    setName(name);
    setRoom(room);
    console.log(socket);
    socket.emit('join', { name, room }, () => {});

    return () => {
      socket.emit('disconnected');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  return (
    <div className="chatFrame">
      <div className="chatBox">
        <Info room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;