<template lang="html">
  <div class="container">
    <img src="https://o90cnn3g2.qnssl.com/4103_1460337320.png" class="avater">
    <h1 class="my-name">DARYL</h1>
    <div class="home-nav-content">
      <ul class="home-nav">
        <li>
          <router-link :to="{path: 'blog'}">Blog</router-link>
        </li>
        <li>
          <a href="https://www.github.com">GitHub</a>
        </li>
        <li>
          <a href="http://weibo.com">Weibo</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
  body {
    background-image: url(https://o90cnn3g2.qnssl.com/f617f881800a19d8fea8240c3bfa828ba71e46bc.jpg);
    background-repeat: no-repeat;
    background-size: cover;
  }

  @font-face {
    font-family: 'CormorantGaramond-Light';
    src: url(../assets/CormorantGaramond-Light.ttf);
  }

  .container {
    margin: 15% auto;
    position: relative;

    .avater {
      height: 100px;
      width: 100px;
      border-radius: 50px;
      margin: auto;
      display: block;
    }

    .my-name {
      width: 3.25em;
      margin: 10px auto;
      font-size: 3em;
      color: #fff;
      font-weight: 100;
      font-family: CormorantGaramond-Light;
    }

    .home-nav-content {
      margin: auto;
      width: 16em;

      .home-nav {
        list-style-type: none;

        :last-child {
          border: none;
        }

        li {
          border-right: 1px solid #fff;
          float: left;
          margin-left: 10px;
          padding-right: 10px;

          :hover {
            color: #42b983;
          }

          a {
            text-decoration: none;
            font-family: CormorantGaramond-Light;
            color: #fff;
            -webkit-transition-duration: 0.5s;
            -moz-transition-duration: 0.5s;
            -ms-transition-duration: 0.5s;
            -o-transition-duration: 0.5s;
            transition-duration: 0.5s;
          }
        }
      }
    }
  }
</style>
<script></script>
