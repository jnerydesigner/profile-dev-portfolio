import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  background: #dfe6e9;
}
h1, h2, h3{
  font-family: 'Poppins', sans-serif;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}

`;
