<template>
  <div id="app">
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up "></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Profile</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div class="wrap-banner">
      <router-view class="main"></router-view>
      <vue-particles class="particles"
        color="#002154"
        :particleOpacity="0.7"
        linesColor="#002154"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        :linesWidth="2"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>

    <foot></foot>
  </div>
 </template>

<script>
import Foot from './components/Foot'

export default {
  name: 'app',
  components: {
    Foot
  },
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {
          icon: 'face',
          title: 'About Me',
          link: '/about'
        },
        {
          icon: 'web',
          title: 'Proyects',
          link: '/proyects'
        },
        {
          icon: 'person',
          title: 'Skills',
          link: '/skills'
        }
      ]
      return menuItems
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>

<style>
@import "https://fonts.googleapis.com/css?family=Merienda|Signika+Negative|Ubuntu";

.wrap-banner {
    position: relative;
    -ms-flex-align: center;
    -webkit-box-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.main{
  display: block;
  z-index: 999;
}

.particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

a {
  text-decoration: none;
  color: #002154;
  font-size: 100%;
}

body {
  background-color: #fafafa;
  margin: 0;
  text-align: center;
  font-family: 'Signika Negative', sans-serif;
}

h1 {
  margin: 30px 15px;
  color: #002154;
  font-family: 'Merienda', cursive;
  font-size: 3.5rem;
}

h2 {
  font-family: 'Ubuntu', sans-serif;
  font-size: 2.5rem;
  color: #41709c;
}

h3 {
  font-family: 'Ubuntu', sans-serif;
  color: #8eb8de;
}

.footer-links {
  display: inline-block;
}

/************ class***************/
.footer {
  font-family: 'Ubuntu', sans-se;
  font-size: .8rem;
  color: #bbdcef;
  display: block;
  margin-bottom: 0;
  background-color: #fafafa;
}

.top {
  font-weight: bold;
  opacity: .6;
}

.top-container {
  z-index: 999;
}

/* .middle-container {
  background-color: #8eb8de;
} */

.bottom-container {
  background-color: #bbdcef;
}

.artist {
  text-decoration: underline;
}

/********* Proyects*********/
.responsive-banner {
  display: inline-block;
  margin: 35px;
  width: 80%;
  max-width: 650px;
  min-width: 320px;
  position: relative;
  min-height: 400px;
  max-height: 450px;
  border-radius: 10px;
  overflow: hidden;
  background-image: linear-gradient(to bottom right, #bbdcef, #41709c);
  background-repeat: no-repeat;
  text-align: left;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.container-envelope {
  max-width: calc(100%);
  padding: 15px;
  color: #efefef;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  min-height: 300px;
  max-height: 450px;
}

.col-xs-12 {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 100%;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  -webkit-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
}

@media (min-width: 650px) {
  .col-xs-2 {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
  }

  .container-envelope {
    max-width: calc(100% - 200px);
  }
}

p {
  background-color: #8eb8de;
  clear: both;
  font-family: 'Work Sans', Helvetica, sans-serif;
  text-transform: none;
  text-rendering: optimizeLegibility;
  font-weight: 500;
  line-height: 1.15;
  word-wrap: break-word;
  margin: 1em 0 0.5em;
  margin: 0;
  padding: 0;
  color: #fff;
  position: relative;
  word-wrap: break-word;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.proy {
  position: absolute;
  margin-top: 25%;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

a.more-link {
  background-color: rgba(255, 255, 255, 0.35);
  display: inline-block;
  padding: 12px 18px;
  color: #fff;
  text-decoration: none;
  font: 500 15px 'Work Sans', Helvetica, sans-serif;
  line-height: 1.5;
  text-align: center;
  border: none !important;
  position: relative;
  border-radius: 30px;
  text-transform: uppercase;
  -webkit-transition: .1s all ease-in-out;
  -moz-transition: .1s all ease-in-out;
  -o-transition: .1s all ease-in-out;
  transition: .1s all ease-in-out;
}

a.more-link:hover {
  background-color: rgba(255, 255, 255, 0.50);
}

svg,
.imgProyects {
  fill: rgba(0, 0, 0, 0.1);
  position: absolute;
}

.link {
  background-color: rgba(255, 255, 255, 0.35);
  display: inline-block;
  padding: 12px 18px;
  color: #fff;
  text-decoration: none;
  font: 500 15px 'Work Sans', Helvetica, sans-serif;
  line-height: 1.5;
  text-align: center;
  border: none !important;
  position: absolute;
  border-radius: 30px;
  text-transform: uppercase;
  -webkit-transition: .1s all ease-in-out;
  -moz-transition: .1s all ease-in-out;
  -o-transition: .1s all ease-in-out;
  transition: .1s all ease-in-out;
}

.img {
  width: 10%;
  margin: 1%;
}

.cirle-a {
  bottom: -80px;
  left: -80px;
}

.cirle-b {
  top: -30px;
  right: 70%;
}

.cirle-c {
  top: -330px;
  right: -300px;
}

.cirle-d {
  top: 195px;
  right: 145px;
}

.imgProyects {
  top: 0;
  right: 0;
  max-width: 50%;
}

button,
input,
select,
textarea {
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  color: #90b0bf;
}

.link-container {
  text-align: center;
}

.link-container a.more-link {
  font-family: 'Source Sans Pro', Helvetica, sans-serif;
  background-color: #90b0bf;
  color: #fff;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  text-decoration: none;
  text-transform: none;
  font-weight: 400;
  letter-spacing: 1px;
}

.profilePic {
  width: 30%;
  border-radius: 50%;
}
</style>
