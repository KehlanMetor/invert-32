const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

iv32 = {
"a": "z",
"b": "y",
"c": "x",
"d": "w",
"e": "v",
"f": "u",
"g": "t",
"h": "s",
"i": "r",
"j": "q",
"k": "p",
"l": "o",
"m": "n",
"n": "m",
"o": "l",
"p": "k",
"q": "j",
"r": "i",
"s": "h",
"t": "g",
"u": "f",
"v": "e",
"w": "d",
"x": "c",
"y": "b",
"z": "a",
" ": "-",
"-": " ",
"!": "¡",
"¡": "!",
"¿": "?",
"?": "¿"
}

const rl = readline.createInterface({ input, output });

rl.question('Convert to iv32\n> ', (text) => {
  rl.close();
  text = text.split("")
  converted = ""
  for (t of text) {
    for (var keys in iv32) {
        if (keys.includes(t)) {
            converted += iv32[t]
        } else {
            converted += t
        }
    }
  }
  console.log(`Converted : ${converted}`)
});