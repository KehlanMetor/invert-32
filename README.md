# invert-32
Invert 32 is an encoding algorithm that makes your text safe for transmissions

## 💽 How it works
Really simple, it just inverts the letter depending on its position in the alphabet (excluding special characters)

## 💻 Converting index

### To complete the table where each letter of the alphabet is mapped to its corresponding letter at the opposite end of the alphabet, you can follow this pattern:

The alphabet has 26 letters, so you pair the first letter with the last, the second with the second-to-last, and so on.

Here is the complete table:

| ASCII | iv32 |
|-------|-------|
| a     | z     |
| b     | y     |
| c     | x     |
| d     | w     |
| e     | v     |
| f     | u     |
| g     | t     |
| h     | s     |
| i     | r     |
| j     | q     |
| k     | p     |
| l     | o     |
| m     | n     |
| n     | m     |
| o     | l     |
| p     | k     |
| q     | j     |
| r     | i     |
| s     | h     |
| t     | g     |
| u     | f     |
| v     | e     |
| w     | d     |
| x     | c     |
| y     | b     |
| z     | a     |
| space     | -     |
| -     | space     |
| !     | ¡     |
| ¡    | !     |
| ¿     | ?     |
| ?     | ¿     |
