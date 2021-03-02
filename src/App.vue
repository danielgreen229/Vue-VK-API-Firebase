<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img class="NavImg" style="padding: 1px;" src="https://wmpics.pics/dm-2W7P5.png"/></router-link>
      <router-link to="/pro"><img class="NavImg" src="https://wmpics.pics/dm-HF18.png"/></router-link>
      <router-link to="/shoped"><img class="NavImg" src="https://wmpics.pics/dm-5N5R.png"/></router-link>
      <router-link to="/profile"><img class="NavImg" src="https://wmpics.pics/dm-BY6F.png"/></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

::-webkit-scrollbar {
  width: 0;
}
//#bfffff

@media (max-width: 767px)
{
  p, div, h, h1, h2, a {
    
    font-size: 15px;
    line-height: 1.13;
  }
  h1 {
    text-align: left;
  
    margin: 0px;
    padding: 0px 20px ;
  }
}



*, :after, :before {
    box-sizing: border-box;
        word-wrap: break-word;
}

body {
  margin: 0px;
  padding: 0px;
    background-color: #fff;
    color: #000;
}



#app {
    font-family: Chobani Serif,serif;
    font-weight: 300;
    font-style: normal;
    font-size: 17px;
    text-align: center;
    color: #2c3e50;
}

h, h1, h2 {
      font-size: 15px;
}


#nav {
    border-radius: 10px;
    background-color: #f7f7f7;
    max-width: 680px;
    display: flex;
    justify-content: space-around;
    padding: 10px 0px 3px;
    z-index: 2;
    position: fixed;
    bottom: 0;
    width: 80%;
    margin: auto;
    right: 0;
    left: 0;
    margin-bottom: 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}





.NavImg {
      height: 30px;
    width: 30px;
}














</style>
