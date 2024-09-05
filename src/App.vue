<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import router from './router';
import { useRoute } from 'vue-router'


const route = useRoute()
const scrolled = ref(false)
const inHome = ref(true)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}



onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  inHome.value = true
  console.log(inHome.value)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  
})

// Watch for route changes
watch(route, (newRoute) => {
  if (newRoute.name === 'home') { 
    inHome.value = true
  }else
  inHome.value = false
})




</script>

<template>
    <div v-if="inHome" :class="[' flex gap-4 justify-between px-80 py-5 text-xl fixed m-auto w-full top-0 left-0 transition-colors duration-300', { 'bg-white shadow-md text-primary': scrolled, 'bg-transparent text-white': !scrolled }]"
      >
        <h1 class="text-4xl font-Karla font-extrabold">Meyawo</h1>
        <div class="flex gap-4 justify-center items-center font-Karla font-thin">
          <RouterLink to="/">Home</RouterLink>
          <p>About</p>
          <p>Portfolio</p>
          <p>Testmonial</p>
          <p>Blog</p>
          <p>Contact</p>
          <RouterLink to="/about" class="p-2 px-4 bg-primary text-white rounded-sm" >Components</RouterLink>
          <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><path fill="#ffffff"  opacity="0.8" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </div>
    </div>
  
    
  <RouterView />
</template>




