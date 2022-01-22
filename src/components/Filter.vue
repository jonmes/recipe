<template>
  <aside
    class="fixed h-0 inset-y-0 z-10 flex-shrink-0 w-64 bg-white border-r lg:static focus:outline-none"
  >
    <div class="flex flex-col h-full">
      <!-- Components links -->
      <div x-data="{ isActive: false, open: false }">
        <!-- active classes 'bg-indigo-100 dark:bg-indigo-600' -->
        <div
          class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600"
        >
          <span aria-hidden="true">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </span>
          <span class="ml-2 text-sm"> Components </span>
          <span aria-hidden="true" class="ml-auto">
            <!-- active class 'rotate-180' -->
            <svg
              class="w-4 h-4 transition-transform transform"
              :class="{ 'rotate-180': open }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <div
          x-show="open"
          class="mt-2 space-y-2 px-7"
          role="menu"
          arial-label="Components"
        >
          <!-- active & hover classes 'text-gray-700 dark:text-light' -->
          <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
          >
            Alerts
          </a>
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
          >
            Buttons
          </a>
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
          >
            Cards
          </a>
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
          >
            Dropdowns
          </a>
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
          >
            Forms
          </a>
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
          >
            Lists
          </a>
          <a
            href="#"
            role="menuitem"
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
          >
            Modals
          </a>
        </div>
      </div>

      <div x-data="{ isActive: false, open: false }">
        <!-- active classes 'bg-indigo-100 dark:bg-indigo-600' -->
        <div
          class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-indigo-100 dark:hover:bg-indigo-600"
        >
          <span aria-hidden="true">
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-watch"
            >
              <circle cx="12" cy="12" r="7"></circle>
              <polyline points="12 9 12 12 13.5 13.5"></polyline>
              <path
                d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"
              ></path>
            </svg>
          </span>
          <span class="ml-2 text-sm"> Duration </span>
          <span aria-hidden="true" class="ml-auto">
            <!-- active class 'rotate-180' -->
            <svg
              class="w-4 h-4 transition-transform transform"
              :class="{ 'rotate-180': open }"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <div
          x-show="open"
          class="mt-2 space-y-2 px-7"
          role="menu"
          arial-label="Components"
        >
          <!-- active & hover classes 'text-gray-700 dark:text-light' -->
          <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->

          <label
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
          >
            <input
              type="radio"
              name="time"
              class="form-checkbox h-5 w-5 rounded border-2 text-green"
              checked
            /><span class="ml-2">1 - 15 min</span>
          </label>

          <label
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
          >
            <input
              type="radio"
              name="time"
              class="form-checkbox rounded border-2 h-5 w-5 text-green"
              checked
            /><span class="ml-2">15 -30 min</span>
          </label>

          <label
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
          >
            <input
              type="radio"
              name="time"
              class="form-checkbox rounded border-2 h-5 w-5 text-green"
              checked
            /><span class="ml-2">30 min - 1 hour</span>
          </label>

          <label
            class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700"
          >
            <input
              type="radio"
              name="time"
              class="form-checkbox rounded border-2 h-5 w-5 text-green"
              checked
            /><span class="ml-2">Over 1 hour</span>
          </label>
        </div>
      </div>

      <!-- Sidebar footer -->
    </div>
  </aside>
</template>
