<template lang="html">
  <div id="app">
    <div class="title-container">
      <div>
        <h3 class="title">
          Our Projects
        </h3>
      </div>
       <div class="filters">
        <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'DESIGN' }" v-on:click="setFilter('DESIGN')">ART</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'WEB' }" v-on:click="setFilter('WEB')">WORKSHOPS</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'ATR' }" v-on:click="setFilter('ART')">DOODLES</span>
      </div>
    </div>

     <transition-group class="projects" name="projects" >
      <div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" v-bind:key="project.title" v-for="project in projects">
        <div class="project-image-wrapper">
          <img class="project-image" v-bind:src="project.image">
          <div class="gradient-overlay"></div>
          <div class="circle">
            <span class="project-title">{{project.title}}</span>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script type="text/javascript">
 // export default{
 //   name:'proyects'
 // }
</script>

<style media="screen" scoped="">
html,body {
  margin:0;
  font-family: 'Dawning of a New Day', cursive;
}

.title-container {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

.title {
  font-family: 'Dawning of a New Day', cursive;
  font-size:30pt;
  font-weight:normal;
}

.project-title {
font-size:16pt
}

.filter {
  font-family:arial;
  padding: 6px 6px;
  cursor:pointer;
  border-radius: 6px;
  transition: all 0.35s;
}

.filter.active {
  box-shadow:0px 1px 3px 0px #00000026;
}

.filter:hover {
  background:lightgray;
}

.projects {
  margin-bottom:50px;
  margin-top:25px;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity:0;
}

.projects-leave-to{
  transform: translatey(30px);
  opacity:0;
}

.projects-leave-active {
  position: absolute;
  z-index:-1;
}

.circle {
  text-align:center;
  position:absolute;
  bottom:-38px;
  left:40px;
  width:100px;
  height:100px;
  border-radius:50px;
/* 	border:1px solid black; */
  display:flex;
  box-shadow: 0px -4px 3px 0px #494d3257;
  justify-content:center;
  align-items:center;
  background-color:#fff;
/* 	box-shadow:0px -3px 3px #484848a6; */
}

.project {
  transition: all .35s ease-in-out;
  margin:10px;
  box-shadow:0px 2px 8px lightgrey;
  border-radius:3px;
  width:180px;
  height:200px;
  display:flex;
  flex-direction:column;
  align-items:center;
}

.project-image-wrapper {
  position:relative;
}

.gradient-overlay {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:150px;
  opacity:0.09;
  background:
    linear-gradient(to bottom, rgba(0,210,247,0.65) 0%,rgba(0,210,247,0.64) 1%,rgba(0,0,0,0) 100%),
    linear-gradient(to top, rgba(247,0,156,0.65) 0%,rgba(247,0,156,0.64) 1%,rgba(0,0,0,0) 100%);
  border-bottom-left-radius:10px;
  border-bottom-right-radius:10px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}

.project-image {
  width:100%;
  height:150px;
  border-bottom-left-radius:5px;
  border-bottom-right-radius:5px;
  border-top-left-radius:3px;
  border-top-right-radius:3px;
}
</style>

<!-- <template>
  <div class="">
    <h1>Proyects</h1>
    <aside class="responsive-banner">
      <div class="container-envelope">
        <svg class="cirle-a" height="160" width="160">
          <circle cx="80" cy="80" r="80"/>
        </svg>
         <svg class="cirle-b" height="60" width="60">
          <circle cx="30" cy="30" r="30"/>
        </svg>
        <svg class="cirle-c" height="600" width="600">
          <circle cx="300" cy="300" r="300"/>
        </svg>
       <svg class="cirle-d" height="60" width="60">
          <circle cx="30" cy="30" r="30"/>
        </svg>
        <img class="imgProyects" src="../../assets/images/Sci-films.png" />
        <div class="col-xs-12">
          <p>This is a web page specialized on sci-films movies.</p>
          <a target="_blank" href="https://github.com/ElenaHrndz/Sci-Films" class="more-link">Code</a>
          <a target="_blank" href="https://elenahrndz.github.io/Sci-Films/src/" class="more-link">Demo</a>
        </div>
      </div>
    </aside>

    <aside class="responsive-banner">
      <div class="container-envelope">
        <svg class="cirle-a" height="160" width="160">
          <circle cx="80" cy="80" r="80"/>
        </svg>
         <svg class="cirle-b" height="60" width="60">
          <circle cx="30" cy="30" r="30"/>
        </svg>
        <svg class="cirle-c" height="600" width="600">
          <circle cx="300" cy="300" r="300"/>
        </svg>
       <svg class="cirle-d" height="60" width="60">
          <circle cx="30" cy="30" r="30"/>
        </svg>
        <img class="imgProyects" src="../../assets/images/imgOriginal/mdlinks-finder.png" />
        <div class="col-xs-12">
          <p>mdlink-finder is a library of npm that proves links on .md files to verify the status and the amount of them.</p>
          <a target="_blank" href="https://github.com/ElenaHrndz/mdlinks-finder" class="more-link">Code</a>
          <a target="_blank" href="https://www.npmjs.com/package/mdlinks-finder" class="more-link">Demo</a>
        </div>
      </div>
    </aside>

    <aside class="responsive-banner">
      <div class="container-envelope">
        <svg class="cirle-a" height="160" width="160">
          <circle cx="80" cy="80" r="80"/>
        </svg>
         <svg class="cirle-b" height="60" width="60">
          <circle cx="30" cy="30" r="30"/>
        </svg>
        <svg class="cirle-c" height="600" width="600">
          <circle cx="300" cy="300" r="300"/>
        </svg>
       <svg class="cirle-d" height="60" width="60">
          <circle cx="30" cy="30" r="30"/>
        </svg>
        <img class="imgProyects" src="../../assets/images/imgOriginal/Encrypt.png" />
        <div class="col-xs-12">
          <p>On Encrypt you can codify your messages to keep them on secret.</p>
          <a target="_blank" href="https://github.com/ElenaHrndz/Encrypt" class="more-link">Code</a>
          <a target="_blank" href="https://elenahrndz.github.io/Encrypt/src/" class="more-link">Demo</a>
        </div>
      </div>
    </aside>

    <aside class="responsive-banner">
      <div class="container-envelope">
        <svg class="cirle-a" height="160" width="160">
          <circle cx="80" cy="80" r="80"/>
        </svg>
         <svg class="cirle-b" height="60" width="60">
          <circle cx="30" cy="30" r="30"/>
        </svg>
        <svg class="cirle-c" height="600" width="600">
          <circle cx="300" cy="300" r="300"/>
        </svg>
       <svg class="cirle-d" height="60" width="60">
          <circle cx="30" cy="30" r="30"/>
        </svg>
        <iframe class="linkProyects" src="https://www.youtube.com/embed/JfRaFqmBzew" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="col-xs-12">
          <p>A really exciting running game with 16 levels and infinite mode.</p>
          <a target="_blank" href="https://play.google.com/store/apps/details?id=com.andoid.FoodRun" class="more-link">Download</a>
        </div>
      </div>
    </aside>
  </section>
  </div>
</template> -->

<!-- // <script>
// export default {
//   name: "proyects"
// }
  // export default {
  //   data () {
  //     return {
  //       email: '',
  //       password: ''
  //     }
  //   },
  //   computed: {
  //     user () {
  //       return this.$store.getters.user
  //     },
  //     error () {
  //       return this.$store.getters.error
  //     },
  //     loading () {
  //       return this.$store.getters.loading
  //     }
  //   },
  //   watch: {
  //     user (value) {
  //       if (value !== null && value !== undefined) {
  //         this.$router.push('/')
  //       }
  //     }
  //   },
  //   methods: {
  //     onSignin () {
  //       this.$store.dispatch('signUserIn', {email: this.email, password: this.password})
  //     },
  //     onDismissed () {
  //       this.$store.dispatch('clearError')
  //     }
  //   }
  // }
</script> -->
