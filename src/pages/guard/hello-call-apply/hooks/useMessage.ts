import { useState } from 'react';

export const useMessage = (initialMessage: string) => {
  const [message, setMessage] = useState(initialMessage);

  const changeMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  return {
    message,
    setMessage: changeMessage,
  };
};
