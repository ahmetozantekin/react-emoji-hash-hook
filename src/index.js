import React, { useState } from 'react'
const Emojis = require('./emojis.json');

export const useHashEmoji = (str) => {
  let [strState] = useState(str);
  var hashedString = hashCode(strState);
  return convertToEmoji(hashedString);
}

const hashCode = (str) => {
  if (Array.prototype.reduce){
      return str.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  } 
  var hash = 0;
  if (str.length === 0) return hash;
  for (var i = 0; i < str.length; i++) {
      var character  = str.charCodeAt(i);
      hash  = ((hash<<5)-hash)+character;
      hash = hash & hash; //Convert to 32bit integer
  }
  return hash;
}

const convertToEmoji = (hStr, hashLength = 4) => {
  const hexHash = hexEncode(hStr.toString());
  const decimalHash = parseInt(hexHash, 16);
  let emojiIndex = decimalHash % Math.pow(Emojis.length, hashLength);

  let emojiString = '';
  for (let ii = 0; ii < hashLength; ii++) {
    emojiString = `${Emojis[emojiIndex % Emojis.length]}${emojiString}`;
    emojiIndex = Math.floor(emojiIndex / Emojis.length);
  }
  
  return emojiString;
  
}

const hexEncode = (str) =>{
  var hex, i;

  var result = "";
  for (i=0; i<str.length; i++) {
      hex = str.charCodeAt(i).toString(16);
      result += ("000"+hex).slice(-4);
  }

  return result
}