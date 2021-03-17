<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-red-400">
      <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
            <span class="flex p-2 rounded-lg bg-indigo-800">
              <!-- Heroicon name: outline/speakerphone -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </span>
            <p class="ml-3 font-medium text-white truncate">
              <span class="md:hidden"> We've moved packages! </span>
              <span class="hidden md:inline">
                If you've been using <code>@wgytcraft/hosting</code>, move to
                <code>@1hostjs/hosting</code>
              </span>
            </p>
          </div>
          <div
            class="hidden order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"
          >
            <a
              href="#"
              class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
          <div class="hidden order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span class="sr-only">Dismiss</span>
              <!-- Heroicon name: outline/x -->
              <svg
                class="h-6 w-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <AppContainer
      ><section class="px-4 mx-auto my-24 max-w-8xl">
        <div class="flex flex-col lg:flex-row">
          <div
            class="flex flex-col items-center pr-0 mb-8 lg:items-start lg:pr-8 lg:w-2/3"
          >
            <h1
              class="my-8 text-4xl font-semibold leading-none tracking-tight text-center text-gray-900 lg:text-left dark:text-gray-100 sm:text-6xl lg:text-7xl sm:my-12"
            >
              Easy hosting<br />with node.
            </h1>
            <h3
              class="mb-4 text-lg text-center text-gray-700 lg:text-left sm:text-xl lg:text-2xl sm:leading-tight sm:mb-8 dark:text-gray-300"
            >
              Build multiple sites in one package with easy modules
            </h3>
            <div class="flex items-center space-x-6">
              <a href="/installation" class="button-link mx-auto md:mx-0 large">
                Get started
              </a>
              <a
                href="https://github.com/1hostjs/hosting"
                class="pt-px mt-px font-medium text-gray-800 border-b-2 border-transparent dark:text-gray-100 hover:border-gray-800 dark:hover:border-gray-100"
                >Open on GitHub</a
              >
            </div>
          </div>
          <div class="w-full m-auto lg:w-1/3 sm:w-580px">
            <div class="md:pl-2">
              <div
                class="relative flex flex-col w-full h-64 overflow-hidden text-gray-600 bg-gray-800 rounded-lg group"
              >
                <!---->
                <div
                  class="relative flex items-center w-full h-12 border-b border-gray-700"
                >
                  <div class="flex ml-4">
                    <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div class="w-3 h-3 ml-2 bg-yellow-400 rounded-full"></div>
                    <div class="w-3 h-3 ml-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div
                    class="absolute top-0 left-0 flex items-center justify-center w-full h-full"
                  >
                    Bash
                  </div>
                </div>
                <div class="flex flex-1 p-4 font-mono">
                  <span class="inline-block mr-2 font-bold select-none">$</span>
                  <span class="inline-block text-gray-200"
                    >npm install @1hostjs/hosting</span
                  >
                </div>
                <div
                  class="py-2 text-center transition-opacity opacity-0 group-hover:opacity-100"
                ></div>
              </div>
            </div>
          </div>
        </div></section
    ></AppContainer>
  </div>
</template>
<script>
export default {};
</script>
