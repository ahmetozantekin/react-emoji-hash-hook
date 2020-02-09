import React from 'react'
import { useHashEmoji } from 'react-emoji-hash'

const App = () => {
  const textToEmoji = useHashEmoji('Hello World');
  const textToEmoji_2 = useHashEmoji('A.Ozan Tekin',10);
  return (
    <div>
    Hello World: {textToEmoji}
     <br/>
    A.Ozan Tekin:  {textToEmoji_2}
    </div>
  )
}
export default App