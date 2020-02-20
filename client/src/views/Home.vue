<template>
  <div class="home">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="100%"
      img-height="100%"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io.connect('http://localhost:3000')

export default {
  name: 'Home',
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    testEmit () {
      socket.emit('dariClient', 'dariClient')
    },

    onSlideStart (slide) {
      socket.emit('slideStart', slide)
    },

    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  created () {
    socket.on('slideNo', (payload) => {
      this.slide = payload
    })
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.home {
  height: 100vh;
  width: 100vw
}
</style>
