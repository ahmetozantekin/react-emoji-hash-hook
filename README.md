# react-emoji-hash

> react hook for text hash as emojis 

[![NPM](https://img.shields.io/npm/v/react-emoji-hash.svg)](https://www.npmjs.com/package/react-emoji-hash) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-emoji-hash
```

## Usage

```jsx
import React, { Component } from 'react'
import { useHashEmoji } from 'react-emoji-hash'

const App = () => {
  const textToEmoji = useHashEmoji('Hello World');
  const textToEmoji_2 = useHashEmoji('Hello World');
  return (
    <div>
    Hello World: {textToEmoji} // output: Hello World: 👘🐷🇰🇭💾
     <br/>
    A.Ozan Tekin:  {textToEmoji_2} // output: Hello World: 🍄🇲🇹🚻🐍
    </div>
  )
}
```

## License

MIT © [ahmetozantekin](https://github.com/ahmetozantekin)
