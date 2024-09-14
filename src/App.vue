<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'


const route = useRoute()
const scrolled = ref(false)
const inHome = ref(true)
const svgPrimary = ref(false)
const showMenu = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
  svgPrimary.value = window.scrollY > 50

}



onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  inHome.value = true

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
    <div v-if="inHome" :class="['  text-xl fixed w-full top-0 transition-colors duration-300',
     { 'bg-white shadow-md text-primary': scrolled,
      'bg-transparent text-white': !scrolled }]"
      >
        <div class="flex justify-between items-center my-4 gap-8 w-3/4 mx-auto">
          <a href="#">
            <h1 class="text-2xl md:text-3xl lg:text-4xl font-Karla font-extrabold cursor-pointer">Meyawo</h1>
          </a>
          <div class="hidden xl:flex gap-8 justify-center items-center font-Karla font-thin">
          
            <ul class="flex space-x-8 justify-center ">
              <li><a href="#home" class=" cursor-pointer hover:text-hoverd">Home</a></li>
              <li><a href="#about" class=" cursor-pointer hover:text-hoverd">About</a></li>
              <li><a href="#portfolio" class=" cursor-pointer hover:text-hoverd">Portfolio</a></li>
              <li><a href="#testomanial" class=" cursor-pointer hover:text-hoverd">Testmonial</a></li>
              <li><a href="#blog" class=" cursor-pointer hover:text-hoverd">Blog</a></li>
              <li><a href="#contact" class=" cursor-pointer hover:text-hoverd">Contact</a></li>
            </ul>
            <RouterLink to="/components" class="p-2 px-4 bg-primary text-white rounded-sm hover:bg-hoverd" >Components</RouterLink>
          </div>
          <svg v-if="!svgPrimary" @click="showMenu = !showMenu" class=" h-6 md:h-8 lg:h-10  xl:hidden fill-white hover:fill-primary cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 384 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
          <svg v-else  @click="showMenu = !showMenu" class=" h-6 md:h-8 lg:h-10 xl:hidden fill-primary hover:fill-hoverd cursor-pointer" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 384 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
        </div>
    </div>
    
      <transition 
      enter-active-class="duration-300 ease-out"
    enter-from-class="transform translate-x-48"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform translate-x-48">
        <div v-if="showMenu" class=" fixed top-16 right-0 flex flex-col h-screen w-fit bg-white gap-8 p-8 items-center shadow-md text-primary text-xl font-Karla font-thin">
        
            <ul class="flex flex-col gap-4 items-start ">
              <li><a href="#home" class=" cursor-pointer hover:text-hoverd">Home</a></li>
              <li><a href="#about" class=" cursor-pointer hover:text-hoverd">About</a></li>
              <li><a href="#portfolio" class=" cursor-pointer hover:text-hoverd">Portfolio</a></li>
              <li><a href="#testomanial" class=" cursor-pointer hover:text-hoverd">Testmonial</a></li>
              <li><a href="#blog" class=" cursor-pointer hover:text-hoverd">Blog</a></li>
              <li><a href="#contact" class=" cursor-pointer hover:text-hoverd">Contact</a></li>
            </ul>
            <RouterLink to="/components" @click="showMenu = !showMenu" class="p-2 px-4 bg-primary text-white rounded-sm hover:bg-hoverd" >Components</RouterLink>
            </div>
      </transition>
    
  <RouterView />
</template>




