<script setup>


</script>

<template>
  <div id="#" class="h-screen items-center flex flex-col mt-[-350px] bg-gradient-to-b from-primary via-secondary to-transparent " >

    <!-- Header -->
    <div id="home" class="flex flex-col gap-8 text-start flex-wrap max-w-fit  font-Karla font-bold text-8xl text-gray-700" v-scroll="onScroll">
      <h1 class="mt-[500px] text-gray-500">HI!</h1>
      <h1>I am Zaki</h1>
      <h1>Bousmaha</h1>
      <div class="flex flex-col gap-2 text-4xl font-Karla font-extralight uppercase text-gray-500">
        <h2>Frontend Web</h2>
        <h2>Designer</h2>
      </div>
      <div class="flex flex-wrap max-w-fit bg-primary text-white rounded-full text-base font-light px-4 py-2 justify-center">Visit My Works</div>
    </div>
    <!--       Hwo am i        -->
    <section id="about" class=" w-3/5">
      <div  class="flex items-center mt-80 mb-40 ">
        <img src="../assets/images/man.png" alt="">
      
        <div class=" flex flex-col gap-4 text-lg font-thin font-Karla text-gray-500">
          <p>Who Am I ?</p>
          <h3 class=" text-primary font-extrabold text-4xl mb-4">About Me</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste
            culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!</p>
            <div class=" text-primary bg-transparent border-solid border-primary rounded-full border text-center max-w-fit p-2 px-4 hover:bg-primary hover:text-white">Download CV</div>
        </div>
      </div>
    </section>

    <!--       What i do        -->
    <div  class="flex flex-col gap-4 items-center font-thin font-Karla text-gray-500 ">
      <p>What I Do ?</p>
      <h3 class=" text-primary font-extrabold text-4xl">Service</h3>
      <div class="grid grid-cols-4 gap-6  mt-10">
        
        <div class=" max-h-80 max-w-80 flex flex-col gap-6 items-center rounded-sm border  p-20 text-primary font-extrabold text-2xl 
        group overflow-hidden">
         <img src="../assets/images/pencil-case.svg" class=" h-14 group-hover:scale-75  group-hover:-translate-y-10 transition duration-300"/>         
          <h4 class="group-hover:-translate-y-12 transition duration-300">Sapiente</h4>
          <p class=" mt-32 group-hover:-translate-y-44 transition duration-300 text-lg text-gray-700 font-extralight text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div class=" max-h-80 max-w-80 flex flex-col gap-6 items-center rounded-sm border  p-20 text-primary font-extrabold text-2xl 
        group overflow-hidden">
         <img src="../assets/images/responsive.svg" class=" h-14 group-hover:scale-75  group-hover:-translate-y-10 transition duration-300"/>         
          <h4 class="group-hover:-translate-y-12 transition duration-300">Sapiente</h4>
          <p class=" mt-32 group-hover:-translate-y-44 transition duration-300 text-lg text-gray-700 font-extralight text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div class=" max-h-80 max-w-80 flex flex-col gap-6 items-center rounded-sm border  p-20 text-primary font-extrabold text-2xl 
        group overflow-hidden">
         <img src="../assets/images/toolbox.svg" class=" h-14 group-hover:scale-75  group-hover:-translate-y-10 transition duration-300"/>         
          <h4 class="group-hover:-translate-y-12 transition duration-300">Sapiente</h4>
          <p class=" mt-32 group-hover:-translate-y-44 transition duration-300 text-lg text-gray-700 font-extralight text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
          <div class=" max-h-80 max-w-80 flex flex-col gap-6 items-center rounded-sm border  p-20 text-primary font-extrabold text-2xl 
        group overflow-hidden">
         <img src="../assets/images/analytics.svg" class=" h-14 group-hover:scale-75  group-hover:-translate-y-10 transition duration-300"/>         
          <h4 class="group-hover:-translate-y-12 transition duration-300">Sapiente</h4>
          <p class=" mt-32 group-hover:-translate-y-44 transition duration-300 text-lg text-gray-700 font-extralight text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
              
      </div>
    </div>

    <!--       what i did        -->
    <section id="portfolio">
      <div  class="flex flex-col gap-4 items-center font-thin font-Karla text-gray-500  ">
        <p class=" mt-40">What I Did ?</p>
        <h3 class=" text-primary font-extrabold text-4xl mb-20">Portfolio</h3>
        <div class="grid grid-cols-3 gap-6 mb-80 min-h-96">
      
          <div class=" min-w-96 rounded-sm text-primary font-extrabold text-2xl
          group overflow-hidden" style="background-image: url('src/assets/images/folio-1.jpg');">
            <div class=" flex flex-col gap-2 justify-center items-center min-w-full min-h-full backdrop-blur-sm bg-white/10 scale-0 group-hover:scale-100 transition duration-200">
              <h4 class="">Web Designing</h4>
              <p class=" transition duration-300 text-lg text-black font-extralight text-center">Category: Web Templates</p>
            </div>
            </div>
            <div class="min-w-96 rounded-sm text-primary font-extrabold text-2xl
          group overflow-hidden" style="background-image: url('src/assets/images/folio-2.jpg');">
            <div class=" flex flex-col gap-2 justify-center items-center min-w-full min-h-full backdrop-blur-sm bg-white/10 scale-0 group-hover:scale-100 transition duration-200">
              <h4 class="">Web Designing</h4>
              <p class=" transition duration-300 text-lg text-black font-extralight text-center">Category: Web Templates</p>
            </div>
            </div>
            <div class="min-w-96 rounded-sm text-primary font-extrabold text-2xl
          group overflow-hidden" style="background-image: url('src/assets/images/folio-3.jpg');">
            <div class=" flex flex-col gap-2 justify-center items-center min-w-full min-h-full backdrop-blur-sm bg-white/10 scale-0 group-hover:scale-100 transition duration-200">
              <h4 class="">Web Designing</h4>
              <p class=" transition duration-300 text-lg text-black font-extralight text-center">Category: Web Templates</p>
            </div>
            </div>
      
      
        </div>
      </div>
    </section>


    <!--       How Much I Charge ?        -->
    <div class="flex flex-col gap-4 items-center font-thin font-Karla text-gray-500  ">
      <p>How Much I Charge ?</p>
      <h3 class=" text-primary font-extrabold text-4xl mb-20">My Pricing</h3>
      <div class="grid grid-cols-3 mb-80 min-h-96 max-h-fit">
        
        <div class=" min-w-96 text-primary font-extrabold text-4xl 
        group overflow-hidden border p-6 hover:-translate-y-2 duration-200">         
          <div class=" flex flex-col gap-6 justify-center items-center min-w-full min-h-full  group-hover:scale-100 transition duration-200">
            <img src="../assets/images/scooter.svg" class=" h-20" alt="">
            <h4 class="">Free</h4>
            <div class="flex flex-col gap-6 text-lg text-gray-400 font-extralight text-center">
              <p >accusamus reprehenderit</p>
              <p >provident dolorem</p>
              <p >quos neque</p>
              <p >fugiat quibusdam</p>
            </div>
            <h4 class=" font-extralight text-2xl text-red-400">X</h4>
            <h4 class=" font-extralight text-2xl text-red-400">X</h4>
            <h1 class=" text-5xl font-light text-gray-700"><span class=" text-4xl ">$</span>0.00/Month</h1>
            <div class=" bg-primary text-white p-2 text-lg font-extralight cursor-pointer hover:bg-hoverd">Subscribe</div>
          </div>
          </div>
          <div class=" min-w-96 text-primary font-extrabold text-4xl 
        group overflow-hidden border p-6 hover:-translate-y-2 duration-200">         
          <div class=" flex flex-col gap-6 justify-center items-center min-w-full min-h-full  group-hover:scale-100 transition duration-200">
            <img src="../assets/images/shipped.svg" class=" h-20" alt="">
            <h4 class="">Basic</h4>
            <div class="flex flex-col gap-6 text-lg text-gray-400 font-extralight text-center">
              <p >accusamus reprehenderit</p>
              <p >provident dolorem</p>
              <p >quos neque</p>
              <p >fugiat quibusdam</p>
              <p >accusamus laboriosam</p>
            </div>
            <h4 class=" font-extralight text-2xl text-red-400">X</h4>
            <h1 class=" text-5xl font-light text-gray-700"><span class=" text-4xl ">$</span>9.99/Month</h1>
            <div class=" bg-primary text-white p-2 text-lg font-extralight cursor-pointer hover:bg-hoverd">Subscribe</div>
          </div>
          </div>
          <div class=" min-w-96 text-primary font-extrabold text-4xl 
        group overflow-hidden border p-6 hover:-translate-y-2 duration-200">         
          <div class=" flex flex-col gap-6 justify-center items-center min-w-full min-h-full  group-hover:scale-100 transition duration-200">
            <img src="../assets/images/startup.svg" class=" h-20" alt="">
            <h4 class="">Premium</h4>
            <div class="flex flex-col gap-6 text-lg text-gray-400 font-extralight text-center">
              <p >accusamus reprehenderit</p>
              <p >provident dolorem</p>
              <p >quos neque</p>
              <p >fugiat quibusdam</p>
              <p>accusamus laboriosam</p>
              <p>inventore omnis</p>
            </div>
            <h1 class=" text-5xl font-light text-gray-700"><span class=" text-4xl ">$</span>99.9/Month</h1>
            <div class=" bg-primary text-white p-2 text-lg font-extralight cursor-pointer hover:bg-hoverd">Subscribe</div>
          </div>
          </div>  
      </div>
    </div>

    <!--      Want to work with me?        -->
    <div class=" flex justify-evenly items-center w-full bg-primary text-white py-20">
      <div class="flex flex-col gap-2">
        <h4 class=" text-3xl font-bold font-Karla">Want to work with me?</h4>
        <p class=" text-xl font-extralight">Always feel Free to Contact & Hire me</p>
      </div>
      <div class=" bg-white cursor-pointer text-black font-Karla rounded-sm px-4 p-2 font-bold text-xl hover:bg-gray-100">Hire Me</div>
    </div>

     <!--       What Think Client About Me ?        -->
     <div id="testomanial" class="flex flex-col gap-4 items-center font-thin font-Karla text-gray-500 ">
      <p class=" mt-40">What Think Client About Me ?</p>
      <h3 class=" text-primary font-extrabold text-4xl">Testmonial</h3>
      <div class="grid grid-cols-2 mx-80 gap-20  mt-10">
        
        <div class=" max-h-60  flex gap-6 py-6 items-center rounded-sm border  p-2 text-primary font-extrabold text-xl 
        ">
         <img src="../assets/images/avatar2.jpg" class=" h-20 rounded-full ml-[-50px]"/>         
          <div class="flex flex-col gap-4">
            <p class="text-lg text-gray-400 font-extralight text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
            <h4 >Emily Reb</h4>
            
          </div>
          </div>
          <div class=" max-h-60  flex gap-6 py-6 items-center rounded-sm border  p-2 text-primary font-extrabold text-xl 
        ">
         <img src="../assets/images/avatar3.jpg" class=" h-20 rounded-full ml-[-50px]"/>         
          <div class="flex flex-col gap-4">
            <p class="text-lg text-gray-400 font-extralight text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque doloribus autem aperiam earum nostrum omnis blanditiis corporis perspiciatis adipisci nihil.</p>
            <h4 >Emily Reb</h4>
            
          </div>
          </div>
         
              
      </div>
    </div>

    <!--       Recent Posts?       -->
    <div id="blog" class="flex flex-col gap-4 items-center font-extralight font-Karla text-gray-700 ">
      <p class="mt-40">Recent Posts?</p>
      <h3 class=" text-primary font-extrabold text-4xl">Blog</h3>
      <div class="grid grid-rows-2 mx-96 gap-20 mb-40 mt-10">
        
        <div class=" max-h-96  flex  gap-6 items-center rounded-sm border  text-primary font-extrabold text-xl overflow-hidden
        " >
        <img src="../assets/images/img-1.jpg" class=" h-96 w-96 "/>
          <div class="flex flex-col gap-4">
            <h4 >Consectetur adipisicing elit</h4>
            <div class="flex gap-4 text-base font-normal text-gray-400">
              <p>By: Admin</p>
              <div class="flex gap-1 items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                 viewBox="0 0 512 512"><path fill="#f75b26" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                <p>234</p>
              </div>
              <div class="flex gap-1 items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                 viewBox="0 0 512 512"><path fill="#000000" d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/></svg>
                <p>123</p>
              </div>
            </div>
            <p class="text-base text-gray-400 font-normal text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id deleniti. Rerum debitis facilis accusantium neque numquam mollitia modi quasi distinctio.</p>
            <p class="text-base text-gray-800 font-normal text-start">Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid consequuntur repudiandae.</p>
            <p class="text-base text-gray-400 font-normal text-start">Magnam in repellat enim harum omnis aperiam! Explicabo illo, commodi, dolor blanditiis cupiditate harum nisi vero accusamus laudantium voluptatibus dolores quae obcaecati.</p>
            <div class="flex items-center gap-2 text-base font-normal">Read more 
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="16"
              viewBox="0 0 512 512"><path fill="#695aa6" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg></div>
            
          </div>
          </div>
          <div class=" max-h-96  flex gap-6  items-center rounded-sm border   text-primary font-extrabold text-xl overflow-hidden
        ">
         <img src="../assets/images/img-2.jpg" class=" h-96 w-96"/>         
         <div class="flex flex-col gap-4">
            <h4 >Consectetur adipisicing elit</h4>
            <div class="flex gap-4 text-base font-normal text-gray-400">
              <p>By: Admin</p>
              <div class="flex gap-1 items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                 viewBox="0 0 512 512"><path fill="#f75b26" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"/></svg>
                <p>456</p>
              </div>
              <div class="flex gap-1 items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                 viewBox="0 0 512 512"><path fill="#000000" d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"/></svg>
                <p>264</p>
              </div>
            </div>
            <p class="text-base text-gray-400 font-normal text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit excepturi laborum enim, vitae ipsam atque eum, ad iusto consequuntur voluptas, esse doloribus. Perferendis porro quisquam vitae exercitationem aliquid, minus eos laborum repudiandae, cumque debitis iusto omnis praesentium? Laborum placeat sit adipisci illum tempore maxime, esse qui quae? Molestias excepturi corporis similique doloribus. Esse vitae earum architecto nulla non dolores illum at perspiciatis quod, et deleniti cupiditate reiciendis harum facere, delectus eum commodi soluta distinctio sit repudiandae possimus sunt. Ipsum, rem.</p>
            <div class="flex items-center gap-2 text-base font-normal">Read more 
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              height="16"
              viewBox="0 0 512 512"><path fill="#695aa6" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg></div>
            
          
            
          </div>
          </div>
         
              
      </div>
    </div>
    <!--       How can you communicat       -->
    <div id="contact" class="flex flex-col gap-4 items-center font-Karla font-extralight text-gray-700 w-1/2 mx-auto ">
      <div class="flex flex-col gap-1 items-center mb-10">
        <p>How can you communicat?</p>
        <h4 class="text-primary font-extrabold text-4xl">Contact Me</h4>
      </div>
      <div class="flex min-w-full justify-center gap-4">
        <input type="text" placeholder="Your Name" class=" rounded border border-solid border-gray-400 bg-transparent w-1/2 p-2 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1"/>
        <input type="email" placeholder="Enter Email" class=" rounded border border-solid border-gray-400 bg-transparent w-1/2 p-2 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1"/>
      </div>
      <textarea name="message" placeholder="Write Somthing" class="rounded border border-solid border-gray-400 bg-transparent w-full p-2 h-40 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1"/>
      <div class="border border-solid border-primary text-primary font-extralight rounded bg-transparent hover:bg-primary hover:text-white p-2 mt-5 mb-32 cursor-pointer">Send Message</div>

    </div>

    <hr class=" w-5/6 h-px bg-gray-900 mx-auto mb-5"/>
    <!-- Footer -->
    <div class="flex justify-between w-5/6 pb-6">
      <p class=" text-gray-400">Copyright 2024 © DevCRUD Distribution ThemeWagon</p>
      <div class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512" fill="#6B7280"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512" fill="#6B7280"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="35" width="45" viewBox="0 0 680 580" fill="#6B7280"><path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"/></svg>
      </div>
    </div>
  </div>
  
</template>
