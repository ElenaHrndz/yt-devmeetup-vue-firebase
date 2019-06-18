<!-- <template>
  <v-alert error dismissible @input="onClose" :value="true">
    {{ text }}
  </v-alert>
</template>

<script>
  export default {
    props: ['text'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script> -->
<template>
<div id="app">
  <!--<img src="./assets/logo.png">-->
  <div class="wrap-banner">
    <div class="main-title">
      <h2>
        Vue-Particles
      </h2>
      <p class="subtitle">
        Vue.js component for particles backgrounds
      </p>
      <p class="subtitle">
        SSR compatible
      </p>
      <br>
      <a class="gh-button" target="_blank" href="https://github.com/creotip/vue-particles"><span class="gh-button__icon"></span>Download</a>
    </div>
    <vue-particles color="#ffffff" :particleOpacity="0.7" linesColor="#ffffff" :particlesNumber="80" shapeType="circle" :particleSize="5" :linesWidth="2" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true"
      hoverMode="grab" :clickEffect="true" clickMode="push">
    </vue-particles>

  </div>
  <main-content></main-content>
  <foot></foot>
</div>
</template>

<!-- <template>
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
      <vue-particles
        color="#002154"
        :particleOpacity="0.7"
        linesColor="#002154"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="5"
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
    <main-content>
      <main>
        <router-view></router-view>
      </main>
    </main-content>
    <foot></foot>
  </div>
 </template> -->
