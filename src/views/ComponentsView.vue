<script setup>
import { ref } from 'vue';

const dropdown = ref(false)
const calenderDropdown = ref(false)
const dropdownButton = ref(false)
const splitDropdown = ref(false)
const formDropdown = ref(false)
const colorList = ref([
  {name: "primary" ,color: "bg-purple-100"},
  {name: "secondary" ,color: "bg-secondary"},
  {name: "seccess" ,color: "bg-green-100"},
  {name: "info" ,color: "bg-teal-100"},
  {name: "warning" ,color: "bg-orange-100"},
  {name: "danger" ,color: "bg-pink-100"},
  {name: "dark" ,color: "bg-gray-200"},])
const example = defineModel()
example.value = "Example select"

function showDropdown(){
  dropdown.value = !dropdown.value
}
function showDropdownButton(){
  dropdownButton.value = !dropdownButton.value
}
function showSplitDropdown(){
  splitDropdown.value = !splitDropdown.value
}
function showFormDropdown(){
  formDropdown.value = !formDropdown.value
}
function showCalenderDropdown(){
  calenderDropdown.value = !calenderDropdown.value
}
function dismissing(name){
  colorList.value.forEach((element, i) => {
    if (element.name == name) {
      colorList.value.splice(i, 1)
    }
  });
  
  
}

</script>

<template>
  <div class="flex flex-col gap-4 text-xl items-center py-40 bg-accent">
    <h1 class=" font-Karla font-bold text-4xl text-gray-700">Components</h1>
    <div class="flex gap-2 text-base text-gray-600 justify-center">
      <RouterLink to="/" class=" text-black">Home</RouterLink>
      <p>.</p>
      <p>Components</p>
    </div>
  </div>
  <div class=" flex flex-col gap-4 mx-96 text-primary mt-10 font-Karla">
    <!--  Buttons  -->
    <h4 class=" text-3xl font-extrabold">Buttons</h4>
    <hr class=" h-px bg-gray-600 mb-10">
    <!--  Styles  -->
    <div class="flex flex-col gap-2 mb-8">
      <p class=" font-extrabold">Styles:</p>
      <div class="flex gap-1">
        <button class=" py-2 px-3 text-white text-lg font-light bg-primary hover:bg-hoverd">Default</button>
        <button class=" py-2 px-3 text-primary text-lg font-light bg-white border border-primary hover:bg-primary hover:text-white">outline</button>
        <button class=" py-2 px-3 text-white text-lg font-light rounded bg-primary hover:bg-hoverd">Rounded</button>
        <button class="py-2 px-3 text-white text-lg font-light rounded bg-primary hover:bg-hoverd inline-flex items-center">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>With Icon</span>
        </button>
        <button class="py-2 px-3 text-white text-lg font-light rounded bg-primary hover:bg-hoverd inline-flex items-center justify-center">
        <svg class="fill-current w-4 h-4 mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        </button>
      </div>
    </div>
    <!--  Sizes  -->
    <div class="flex flex-col gap-2 mb-8">
      <p class=" font-extrabold">Sizes:</p>
      <div class="flex gap-1 justify-start items-center">
        <button class=" py-4 px-6 text-white text-xl font-light bg-primary rounded hover:bg-hoverd">Large</button>
        <button class=" py-2 px-3 text-white text-lg font-light  bg-primary hover:bg-hoverd">Regular</button>
        <button class=" py-1 px-2 text-white text-base font-light  bg-primary hover:bg-hoverd">Small</button>
      </div>
    </div>
    <!--  Colors  -->
    <div class="flex flex-col gap-2 mb-8">
      <p class=" font-extrabold">Colors:</p>
      <div class="flex gap-1 justify-start items-center">
        <button class=" py-2 px-3 text-white text-lg font-light  bg-primary hover:bg-hoverd">Primary</button>
        <button class=" py-2 px-3 text-white text-lg font-light bg-gray-800 hover:bg-gray-950">Secondary</button>
        <button class=" py-2 px-3 text-white text-lg font-light bg-green-500 hover:bg-green-600">Success</button>
        <button class=" py-2 px-3 text-white text-lg font-light bg-rose-500 hover:bg-rose-600">Danger</button>
        <button class=" py-2 px-3 text-white text-lg font-ligh bg-orange-500 hover:bg-orange-600">Warning</button>
        <button class=" py-2 px-3 text-white text-lg font-light bg-teal-500 hover:bg-teal-600">Info</button>
        <button class=" py-2 px-3 text-gray-800 text-lg font-light bg-gray-100 hover:bg-gray-200">Light</button>
        <button class=" py-2 px-3 text-white text-lg font-light  bg-gray-800 hover:bg-black">Dark</button>
       
      </div>
    </div>
    <!--  Buttons Tags  -->
    <div class="flex flex-col gap-2 mb-8">
      <p class=" font-extrabold">Buttons Tags:</p>
      <div class="flex gap-1 justify-start items-center">
        <button class=" py-2 px-3 text-white text-lg font-light  bg-primary hover:bg-hoverd">Button</button>
        <button class=" py-2 px-3 text-white text-lg font-light  bg-primary hover:bg-hoverd">Input</button>
        <button class=" py-2 px-3 text-white text-lg font-light  bg-primary hover:bg-hoverd">Submit</button>
        <button class=" py-2 px-3 text-white text-lg font-light  bg-primary hover:bg-hoverd">Reset</button>
       
       
      </div>
    </div>
    <!--  Inputs  -->
    <h4 class=" text-3xl font-extrabold mt-5">Inputs</h4>
    <hr class=" h-px bg-gray-600 mb-10">
    <div class="flex gap-6 w-full">
      <div class="flex flex-col gap-4 basis-1/2">
        <p class=" font-extrabold">Form controls:</p>
        <input type="email" placeholder="Email address" class=" rounded border border-solid border-gray-400 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 p-2">
        <div class="relative">
        <div @click="showCalenderDropdown" class="absolute inset-y-0 start-0 flex items-center ps-3.5 cursor-pointer">
          <svg 
          class="w-4 h-4 cursor-pointer text-gray-400 dark:text-gray-400" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="currentColor" 
          viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
        </div>
        <input type="text" class="bg-white border p-2
         border-gray-400 text-white rounded block w-full ps-10 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1" 
        placeholder="Select date">
        <!-- Calendar -->
        <div v-if="calenderDropdown" class="p-3 space-y-0.5 border border-gray-400 max-w-min rounded absolute bg-white">
          <!-- Months -->
          <div class="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
            <!-- Prev Button -->
            <div class="col-span-1">
              <button type="button" class="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-label="Previous">
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
            </div>
            <!-- End Prev Button -->

            <!-- Month / Year -->
            <div class="col-span-3 flex justify-center items-center gap-x-1">
              <div class="relative">
                <select data-hs-select='{
                    "placeholder": "Select month",
                    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500",
                    "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                    "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                  }' class="hidden">
                  <option value="0">January</option>
                  <option value="1">February</option>
                  <option value="2">March</option>
                  <option value="3">April</option>
                  <option value="4">May</option>
                  <option value="5">June</option>
                  <option value="6" selected>July</option>
                  <option value="7">August</option>
                  <option value="8">September</option>
                  <option value="9">October</option>
                  <option value="10">November</option>
                  <option value="11">December</option>
                </select>
              </div>

              <span class="text-gray-800 dark:text-neutral-200">/</span>

              <div class="relative">
                <select data-hs-select='{
                    "placeholder": "Select year",
                    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                    "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500",
                    "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                    "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                  }' class="hidden">
                  <option selected>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                </select>
              </div>
            </div>
            <!-- End Month / Year -->

            <!-- Next Button -->
            <div class="col-span-1 flex justify-end">
              <button type="button" class=" size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-label="Next">
                <svg class="shrink-0 size-4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
            <!-- End Next Button -->
          </div>
          <!-- Months -->

          <!-- Weeks -->
          <div class="flex pb-1.5">
            <span class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
              Mo
            </span>
            <span class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
              Tu
            </span>
            <span class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
              We
            </span>
            <span class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
              Th
            </span>
            <span class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
              Fr
            </span>
            <span class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
              Sa
            </span>
            <span class="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
              Su
            </span>
          </div>
          <!-- Weeks -->

          <!-- Days -->
          <div class="flex">
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-accent hover:text-primary   focus:outline-none focus:border-primary focus:text-primary dark:text-neutral-200" >
                26
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                27
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                28
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                29
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                30
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                1
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                2
              </button>
            </div>
          </div>
          <!-- Days -->

          <!-- Days -->
          <div class="flex">
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                3
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                4
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                5
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                6
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                7
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                8
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                9
              </button>
            </div>
          </div>
          <!-- Days -->

          <!-- Days -->
          <div class="flex">
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                10
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                11
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                12
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                13
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                14
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                15
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                16
              </button>
            </div>
          </div>
          <!-- Days -->

          <!-- Days -->
          <div class="flex">
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                17
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                18
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                19
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:border-neutral-700">
                20
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                21
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                22
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                23
              </button>
            </div>
          </div>
          <!-- Days -->

          <!-- Days -->
          <div class="flex">
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                24
              </button>
            </div>
            <div >
                <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                25
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                26
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                27
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                28
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                29
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                30
              </button>
            </div>
          </div>
          <!-- Days -->

          <!-- Days -->
          <div class="flex">
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                31
              </button>
            </div>
            <div >
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                1
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                2
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                3
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                4
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                5
              </button>
            </div>
            <div>
              <button type="button" class="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                6
              </button>
            </div>
          </div>
          <!-- Days -->
        </div>
        
         </div>
         <input type="email" readonly placeholder="Read only input" class=" rounded border border-solid border-gray-400 bg-gray-200 text-gray-700 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 p-2">
         <input type="text" disabled class=" disabled:bg-gray-200 bg-white border p-2
         border-gray-400 text-white rounded block w-full  focus:outline-none focus:border-primary focus:ring-primary focus:ring-1" 
        placeholder="Disabled input here">
          <!--  Dropdown  -->   
          <div @click="showDropdown"  class="flex flex-col ">
            <div class="text-gray-400 bg-white   rounded p-2 inline-flex justify-between items-center border border-solid border-gray-400" >{{  example }}<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
            </div>
            
            <!-- Dropdown menu -->
            <div v-if="dropdown" id="dropdown" class=" bg-white divide-y  rounded shadow w-44  text-gray-400 absolute mt-10">
                <ul class=" border border-solid border-gray-400 rounded text-gray-700" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a href="#" @click="example = 1" class="block px-4 py-2 hover:bg-primary hover:text-white">1</a>
                  </li>
                  <li>
                    <a href="#" @click="example = 2" class="block px-4 py-2 hover:bg-primary hover:text-white">2</a>
                  </li>
                  <li>
                    <a href="#" @click="example = 3" class="block px-4 py-2 hover:bg-primary hover:text-white">3</a>
                  </li>
                  <li>
                    <a href="#" @click="example = 4" class="block px-4 py-2 hover:bg-primary hover:text-white">4</a>
                  </li>
                </ul>
            </div>
          </div>
    
          <textarea placeholder="Example textarea" class=" p-2 rounded border border-solid border-gray-400 text-gray-400 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1" cols="10" rows="3"></textarea>
      </div>
      <div class="flex flex-col gap-4 basis-1/2">
        <p class=" font-extrabold">Sizes :</p>
        <input type="text" placeholder="Form control-lg" class=" rounded border border-solid border-gray-400 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 p-2 text-xl">
        <input type="text" placeholder="Default input" class=" rounded border border-solid border-gray-400 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 p-2">
        <input type="text" placeholder="Form control-sm" class=" rounded border border-solid border-gray-400 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 p-2 text-sm">
      </div>

    </div>

    <!--  Dropdowns  -->
    <h4 class=" text-3xl font-extrabold mt-5">Dropdowns</h4>
    <hr class=" h-px bg-gray-600 mb-10">
    <div class=" flex gap-2">
      <!--  DropdownButton  -->
      <div class="flex flex-col gap-0">
  <button @click="showDropdownButton" class="text-gray-800 bg-white border border-gray-400 hover:bg-gray-800 hover:text-white px-5 py-2.5 text-center inline-flex items-center" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg>
  </button>
  
  <!-- Dropdown menu -->
  <div v-if="dropdownButton"  class=" bg-white border border-solid border-gray-400 absolute mt-11">
      <ul class="py-2  text-gray-700 ">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Action</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Another action</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Somthing else here</a>
        </li>
  
      </ul>
  </div>
      </div>
      <!--  Split  -->
      <div class="flex gap-0">
        <button class=" bg-white text-gray-800 border border-solid
         border-gray-400 p-2 hover:bg-gray-800 hover:text-white">Split</button>
        <div class=" flex flex-col gap-0">
          <div @click="showSplitDropdown" class="flex h-full bg-white text-gray-800 border border-solid
           border-gray-400 p-2 items-center hover:bg-gray-800 hover:text-white ">
           <svg  class="w-2.5 h-2.5"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </div>
            <!-- Dropdown menu -->
          <div v-if="splitDropdown"  class=" bg-white border border-solid border-gray-400 absolute mt-11">
              <ul class="py-2  text-gray-700 ">
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Action</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Another action</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Somthing else here</a>
                </li>
              </ul>
          </div>
        </div> 
      </div>
     <!--  FormDropdown  -->
     <div class="flex flex-col gap-0">
      <button @click="showFormDropdown" class="text-gray-800 bg-white border border-gray-400 hover:bg-gray-800 hover:text-white px-5 py-2.5 text-center inline-flex items-center" type="button">Form Dropdown <svg class="w-2.5 h-2.5 ms-3"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
      </button>
      
      <!-- Dropdown menu -->
      <div v-if="formDropdown"  class=" bg-white border border-solid border-gray-400 absolute mt-11 ">
        <div class="flex flex-col gap-4 p-4 items-start">
          <input type="email" placeholder="email@example.com" class=" rounded border border-solid border-gray-400 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 p-2">
          <input type="password" placeholder="password" class=" rounded border border-solid border-gray-400 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 p-2">
          <div class="flex gap-2 text-gray-800">
            <input type="checkbox" class=" rounded border border-solid border-gray-400 focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 p-2">
            <label>Remember me</label>
          </div>
          <button class=" py-2 px-3 w-full text-white text-lg font-light bg-primary hover:bg-hoverd">Sign In</button>
        </div>
        <hr class=" h-px bg-gray-600">
          <ul class="py-2 text-sm  text-gray-700 ">
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">New around here? Sign Up</a>
            </li>
            <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">Forgot password?</a>
            </li>
            
          </ul>
      </div>
          </div>

    </div>

    <!--  Navigations  -->
    <h4 class=" text-3xl font-extrabold mt-5">Navigations</h4>
    <hr class=" h-px bg-gray-600 mb-10">
    <div class="flex flex-col gap-2 text-xl  text-white font-extralight">
      <div class=" flex justify-between bg-primary py-4 px-6 rounded items-center">
        <h6 class="">Primary Color</h6>
        <div class="flex gap-8 text-base justify-evenly items-center">
          <a href="#about">
            <p class="hover:text-gray-200">About Us</p>
          </a>
          <a href="#service">
            <p class="hover:text-gray-200">Our Service</p>
          </a>
          <a href="#team">
            <p class="hover:text-gray-200">Our Team</p>
          </a>
          <a href="#book-table"><button class=" text-black text-base bg-white p-2 hover:bg-gray-200">navbar button</button></a>
        </div>
      </div>
      <div class=" flex justify-between bg-gray-800 py-4 px-6 rounded items-center">
        <h6 class="">Secondary Color</h6>
        <div class="flex gap-8 text-base justify-evenly items-center">
          <a href="#about">
            <p class="hover:text-gray-200">About Us</p>
          </a>
          <a href="#service">
            <p class="hover:text-gray-200">Our Service</p>
          </a>
          <a href="#team">
            <p class="hover:text-gray-200">Our Team</p>
          </a>
          <a href="#book-table"><button class=" text-black text-base bg-white p-2 hover:bg-gray-200">navbar button</button></a>
        </div>
      </div>
      <div class=" flex justify-between bg-green-500  py-4 px-6 rounded items-center">
        <h6 class="">Success Color</h6>
        <div class="flex gap-8 text-base justify-evenly items-center">
          <a href="#about">
            <p class="hover:text-gray-200">About Us</p>
          </a>
          <a href="#service">
            <p class="hover:text-gray-200">Our Service</p>
          </a>
          <a href="#team">
            <p class="hover:text-gray-200">Our Team</p>
          </a>
          <a href="#book-table"><button class=" text-black text-base bg-white p-2 hover:bg-gray-200">navbar button</button></a>
        </div>
      </div>
      <div class=" flex justify-between bg-teal-500 py-4 px-6 rounded items-center">
        <h6 class="">Info Color</h6>
        <div class="flex gap-8 text-base justify-evenly items-center">
          <a href="#about">
            <p class="hover:text-gray-200">About Us</p>
          </a>
          <a href="#service">
            <p class="hover:text-gray-200">Our Service</p>
          </a>
          <a href="#team">
            <p class="hover:text-gray-200">Our Team</p>
          </a>
          <a href="#book-table"><button class=" text-black text-base bg-white p-2 hover:bg-gray-200">navbar button</button></a>
        </div>
      </div>
      <div class=" flex justify-between bg-orange-500 py-4 px-6 rounded items-center">
        <h6 class="">Warning Color</h6>
        <div class="flex gap-8 text-base justify-evenly items-center">
          <a href="#about">
            <p class="hover:text-gray-200">About Us</p>
          </a>
          <a href="#service">
            <p class="hover:text-gray-200">Our Service</p>
          </a>
          <a href="#team">
            <p class="hover:text-gray-200">Our Team</p>
          </a>
          <a href="#book-table"><button class=" text-black text-base bg-white p-2 hover:bg-gray-200">navbar button</button></a>
        </div>
      </div>
      <div class=" flex justify-between bg-rose-500  py-4 px-6 rounded items-center">
        <h6 class="">Danger Color</h6>
        <div class="flex gap-8 text-base justify-evenly items-center">
          <a href="#about">
            <p class="hover:text-gray-200">About Us</p>
          </a>
          <a href="#service">
            <p class="hover:text-gray-200">Our Service</p>
          </a>
          <a href="#team">
            <p class="hover:text-gray-200">Our Team</p>
          </a>
          <a href="#book-table"><button class=" text-black text-base bg-white p-2 hover:bg-gray-200">navbar button</button></a>
        </div>
      </div>
      <div class=" flex justify-between bg-gray-800 py-4 px-6 rounded items-center">
        <h6 class="">Dark Color</h6>
        <div class="flex gap-8 text-base justify-evenly items-center">
          <a href="#about">
            <p class="hover:text-gray-200">About Us</p>
          </a>
          <a href="#service">
            <p class="hover:text-gray-200">Our Service</p>
          </a>
          <a href="#team">
            <p class="hover:text-gray-200">Our Team</p>
          </a>
          <a href="#book-table"><button class=" text-black text-base bg-white p-2 hover:bg-gray-200">navbar button</button></a>
        </div>
      </div>
      <div class=" flex justify-between bg-gray-50 text-gray-800 shadow-sm py-4 px-6 rounded items-center">
        <h6 class="">Dark Color</h6>
        <div class="flex gap-8 text-base justify-evenly items-center">
          <a href="#about">
            <p class="hover:text-gray-400">About Us</p>
          </a>
          <a href="#service">
            <p class="hover:text-gray-400">Our Service</p>
          </a>
          <a href="#team">
            <p class="hover:text-gray-400">Our Team</p>
          </a>
          <a href="#book-table"><button class=" text-black text-base bg-white p-2 hover:bg-gray-200">navbar button</button></a>
        </div>
      </div>
    </div>

     <!--  Paginations  -->
     <h4 class=" text-3xl font-extrabold mt-5">Pagination</h4>
    <hr class=" h-px bg-gray-600 mb-10">
    <div class=" flex flex-col gap-4">
      <div class=" flex gap-4 text-gray-800 text-lg items-center">
        <div class=" p-4 items-center hover:bg-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><path fill="#000000" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
        </div>
        <p class=" p-2 px-4 hover:bg-secondary">1</p>
        <p class=" p-2 px-4 hover:bg-secondary ">2</p>
        <p class=" p-2 px-4 bg-primary text-white">3</p>
        <p class=" p-2 px-4 hover:bg-secondary">4</p>
        <p class=" p-2 px-4 hover:bg-secondary">5</p>
        <div class=" p-4 items-center hover:bg-secondary">
          <svg class="hover:bg-secondary" xmlns="http://www.w3.org/2000/svg" height="12" width="12" viewBox="0 0 512 512"><path fill="#000000" d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </div>
        
      </div>
      
    </div>
    <!--  Badges  -->
    <h4 class=" text-3xl font-extrabold mt-5">Badges</h4>
    <hr class=" h-px bg-gray-600 mb-10">
    <div class=" flex gap-4 items-center text-base text-white font-extralight">
      <div class=" bg-primary px-2 rounded-full">Primary</div>
      <div class=" bg-gray-800 px-2 rounded-full">Secondary</div>
      <div class=" bg-green-500 px-2 rounded-full">Success</div>
      <div class=" bg-teal-500 px-2 rounded-full">Info</div>
      <div class=" bg-orange-500 px-2 rounded-full">Warning</div>
      <div class=" bg-pink-500 px-2 rounded-full">Danger</div>
      <div class=" bg-black px-2 rounded-full">Dark</div>
      <div class=" bg-gray-100 text-gray-800 px-2 rounded-full">Dark</div>
    </div>

    <!--  Alerts  -->
    <h4 class=" text-3xl font-extrabold mt-5">Alerts</h4>
    <hr class=" h-px bg-gray-600 mb-10">
    
    <transition-group leave-active-class="transition-all duration-300 opacity-0">
      <div v-for="color in colorList" :key="color.name" class=" flex flex-col gap-4 items-center">
      
          <div  :class="`flex justify-between items-center p-4 text-gray-800 font-extralight text-lg w-full rounded-md ${color.color}     `">
              <p>A simple {{color.name}} alert—check it out!</p>
              <svg class=" hover:fill-gray-800" @click="dismissing(color.name)" xmlns="http://www.w3.org/2000/svg" height="20" width="15" viewBox="0 0 384 512" fill="#79747f"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
          </div>
      </div>
    </transition-group>
  

    <!--  Tables  -->
    <h4 class=" text-3xl font-extrabold mt-5">Tables</h4>
    <hr class=" h-px bg-gray-600 mb-10">
    
    <table class="table-auto text-gray-800 text-left rtl:text-right mb-10">
      <thead class="border-b-2 border-t">
        <tr>
          <th  class="px-6 py-3">#</th>
          <th  class="px-6 py-3">First</th>
          <th  class="px-6 py-3">Last</th>
          <th  class="px-6 py-3">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class=" border-b">
          <th class="px-6 py-3">1</th>
          <td class="px-6 py-3">Mark</td>
          <td class="px-6 py-3"> Otto</td>
          <td class="px-6 py-3">@mdo</td>
        </tr>
        <tr class=" border-b">
          <th class="px-6 py-3">2</th>
          <td class="px-6 py-3">Jacob</td>
          <td class="px-6 py-3">The Thornton</td>
          <td class="px-6 py-3">@fat</td>
        </tr>
        <tr class=" border-b">
          <th class="px-6 py-3">3</th>
          <td class="px-6 py-3">Larry</td>
          <td class="px-6 py-3">The Bird</td>
          <td class="px-6 py-3">@twitter</td>
        </tr>
      </tbody>
</table>
  <p class=" font-extrabold">Striped rows:</p>
<table class="table-auto text-gray-800 text-left rtl:text-right mb-10">
      <thead class="border-b-2 border-t border-gray-300">
        <tr>
          <th  class="px-6 py-3">#</th>
          <th  class="px-6 py-3">First</th>
          <th  class="px-6 py-3">Last</th>
          <th  class="px-6 py-3">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-gray-200 border-b border-gray-300">
          <th class="px-6 py-3">1</th>
          <td class="px-6 py-3">Mark</td>
          <td class="px-6 py-3"> Otto</td>
          <td class="px-6 py-3">@mdo</td>
        </tr>
        <tr class=" border-b border-gray-300">
          <th class="px-6 py-3">2</th>
          <td class="px-6 py-3">Jacob</td>
          <td class="px-6 py-3">The Thornton</td>
          <td class="px-6 py-3">@fat</td>
        </tr>
        <tr class="bg-gray-200 border-b border-gray-300">
          <th class="px-6 py-3">3</th>
          <td class="px-6 py-3">Larry</td>
          <td class="px-6 py-3">The Bird</td>
          <td class="px-6 py-3">@twitter</td>
        </tr>
      </tbody>
</table>

<table class="table-auto text-gray-800 text-left rtl:text-right mb-10">
      <thead class="border border-b-2">
        <tr>
          <th  class="px-6 py-3">#</th>
          <th  class="px-6 py-3">First</th>
          <th  class="px-6 py-3">Last</th>
          <th  class="px-6 py-3">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr class=" border">
          <th class="px-6 py-3 border-r">1</th>
          <td class="px-6 py-3 border-r">Mark</td>
          <td class="px-6 py-3 border-r"> Otto</td>
          <td class="px-6 py-3 ">@mdo</td>
        </tr>
        <tr class=" border">
          <th class="px-6 py-3 border-r">2</th>
          <td class="px-6 py-3 border-r">Jacob</td>
          <td class="px-6 py-3 border-r">The Thornton</td>
          <td class="px-6 py-3 ">@fat</td>
        </tr>
        <tr class=" border">
          <th class="px-6 py-3 border-r">3</th>
          <td class="px-6 py-3 ">Larry The Bird</td>
          <td class="px-6 py-3 border-r"></td>
          <td class="px-6 py-3">@twitter</td>
        </tr>
      </tbody>
</table>


    <!-- Footer -->
    <hr class=" h-px bg-gray-600 my-5">
    <div class="flex justify-between  pb-6">
      <p class=" text-gray-400">Copyright 2024 © DevCRUD Distribution ThemeWagon</p>
      <div class="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512" fill="#6B7280"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512" fill="#6B7280"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="35" width="45" viewBox="0 0 680 580" fill="#6B7280"><path d="M386.1 228.5c1.8 9.7 3.1 19.4 3.1 32C389.2 370.2 315.6 448 204.8 448c-106.1 0-192-85.9-192-192s85.9-192 192-192c51.9 0 95.1 18.9 128.6 50.3l-52.1 50c-14.1-13.6-39-29.6-76.5-29.6-65.5 0-118.9 54.2-118.9 121.3 0 67.1 53.4 121.3 118.9 121.3 76 0 104.5-54.7 109-82.8H204.8v-66h181.3zm185.4 6.4V179.2h-56v55.7h-55.7v56h55.7v55.7h56v-55.7H627.2v-56h-55.7z"/></svg>
      
      </div>
    </div>
  </div>
</template>








