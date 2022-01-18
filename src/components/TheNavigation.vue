<template>
  <!-- Navbar -->
  <Disclosure v-slot="{ open }" as="nav" class="bg-gray-50">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative h-16 flex items-center justify-between border-b border-gray-200">
        <div class="flex items-center">
          <router-link :to="{ name: 'Home' }" class="flex-shrink-0">
            <svg class="h-8 sm:h-10 w-auto" fill="none" viewBox="0 0 282 74" xmlns="http://www.w3.org/2000/svg">
              <rect fill="white" height="73" stroke="black" width="112" x="0.5" y="0.5"/>
              <rect fill="black" height="74" width="169" x="113"/>
              <path
                d="M134.749 28.3122L124.602 14H123.041V31.5764H124.862V17.2642L135.009 31.5764H136.57V14H134.749V28.3122Z"
                fill="white"/>
              <path
                d="M142.546 23.5415H150.611V21.8843H142.546V15.6572H151.262V14H140.724V31.5764H151.392V29.9192H142.546V23.5415Z"
                fill="white"/>
              <path
                d="M154.521 14V31.5764H156.342V25.048H161.025C162.664 25.048 164.017 24.5207 165.11 23.4662C166.203 22.4116 166.749 21.1059 166.749 19.524C166.749 17.9421 166.203 16.6365 165.11 15.5819C164.017 14.5273 162.664 14 161.025 14H154.521ZM156.342 23.3908V15.6572H161.025C162.144 15.6572 163.081 16.0338 163.809 16.762C164.564 17.4902 164.928 18.3941 164.928 19.524C164.928 20.6539 164.564 21.583 163.809 22.3111C163.081 23.0393 162.144 23.3908 161.025 23.3908H156.342Z"
                fill="white"/>
              <path
                d="M182.087 31.5764L175.088 14H173.215L166.217 31.5764H168.142L169.833 27.2576H178.471L180.162 31.5764H182.087ZM174.152 16.1845L177.82 25.6004H170.483L174.152 16.1845Z"
                fill="white"/>
              <path d="M186.247 14H184.426V31.5764H194.573V29.9192H186.247V14Z" fill="white"/>
              <path
                d="M131.548 60C134.905 60 137.949 58.2926 139.432 55.6561L137.819 54.7773C136.674 56.9116 134.254 58.2926 131.548 58.2926C129.285 58.2926 127.412 57.5895 125.981 56.1583C124.55 54.7271 123.821 52.9945 123.821 50.9105C123.821 48.8264 124.55 47.0939 125.981 45.6627C127.412 44.2314 129.285 43.5284 131.548 43.5284C134.254 43.5284 136.674 44.9094 137.819 47.0437L139.432 46.1397C137.897 43.5033 134.905 41.821 131.548 41.821C128.791 41.821 126.501 42.6998 124.706 44.4574C122.911 46.2151 122 48.3745 122 50.9105C122 53.4465 122.911 55.6059 124.706 57.3635C126.501 59.1212 128.791 60 131.548 60Z"
                fill="white"/>
              <path
                d="M157.491 57.3635C159.312 55.5808 160.223 53.4465 160.223 50.9105C160.223 48.3745 159.312 46.2402 157.491 44.4825C155.67 42.6998 153.432 41.821 150.804 41.821C148.177 41.821 145.939 42.6998 144.118 44.4825C142.297 46.2402 141.386 48.3745 141.386 50.9105C141.386 53.4465 142.297 55.5808 144.118 57.3635C145.939 59.1212 148.177 60 150.804 60C153.432 60 155.67 59.1212 157.491 57.3635ZM145.393 56.1583C143.936 54.7271 143.207 52.9694 143.207 50.9105C143.207 48.8515 143.936 47.119 145.393 45.6878C146.85 44.2566 148.645 43.5284 150.804 43.5284C152.964 43.5284 154.759 44.2566 156.216 45.6878C157.673 47.119 158.402 48.8515 158.402 50.9105C158.402 52.9694 157.673 54.7271 156.216 56.1583C154.759 57.5895 152.964 58.2926 150.804 58.2926C148.645 58.2926 146.85 57.5895 145.393 56.1583Z"
                fill="white"/>
              <path
                d="M177.725 42.1223L171.663 51.9148L165.601 42.1223H163.337V59.6987H165.159V44.7838L171.533 55.0786H171.793L178.167 44.7838V59.6987H179.989V42.1223H177.725Z"
                fill="white"/>
              <path
                d="M198.534 42.1223L192.472 51.9148L186.41 42.1223H184.146V59.6987H185.967V44.7838L192.342 55.0786H192.602L198.976 44.7838V59.6987H200.797V42.1223H198.534Z"
                fill="white"/>
              <path
                d="M204.695 53.7227C204.695 55.631 205.319 57.1627 206.568 58.2926C207.817 59.4225 209.456 60 211.46 60C213.463 60 215.102 59.4225 216.351 58.2926C217.6 57.1627 218.224 55.631 218.224 53.7227V42.1223H216.403V53.7227C216.403 56.5349 214.582 58.2926 211.46 58.2926C208.337 58.2926 206.516 56.5349 206.516 53.7227V42.1223H204.695V53.7227Z"
                fill="white"/>
              <path
                d="M233.839 56.4345L223.692 42.1223H222.131V59.6987H223.952V45.3865L234.099 59.6987H235.66V42.1223H233.839V56.4345Z"
                fill="white"/>
              <path d="M239.814 59.6987H241.636V42.1223H239.814V59.6987Z" fill="white"/>
              <path d="M244.25 42.1223V43.7795H249.843V59.6987H251.665V43.7795H257.258V42.1223H244.25Z" fill="white"/>
              <path
                d="M270.945 42.1223L265.533 50.7347L260.095 42.1223H258.04L264.596 52.4421V59.6987H266.418V52.4924L273 42.1223H270.945Z"
                fill="white"/>
              <path
                d="M41.223 42.8942L20.3171 12.9808H13V62.0192H22.6167V32.0357L43.5226 62.0192H50.8397V12.9808H41.223V42.8942Z"
                fill="black"/>
              <path
                d="M83.0244 63C91.9443 63 99.8188 58.5165 104 51.4409L95.7073 46.6071C93.4077 50.8805 88.5993 53.5426 83.0244 53.5426C78.2857 53.5426 74.453 52.0714 71.5262 49.0591C68.669 46.0467 67.2056 42.1937 67.2056 37.5C67.2056 32.7363 68.669 28.8832 71.5262 25.8709C74.453 22.8585 78.2857 21.3874 83.0244 21.3874C88.5993 21.3874 93.2683 23.9794 95.7073 28.3929L104 23.5591C99.8188 16.4835 91.8746 12 83.0244 12C75.7074 12 69.6446 14.4519 64.8363 19.3558C60.0279 24.1896 57.6586 30.2843 57.6586 37.5C57.6586 44.7157 60.0279 50.7404 64.8363 55.6442C69.6446 60.5481 75.7074 63 83.0244 63Z"
                fill="black"/>
            </svg>
          </router-link>

          <!-- Links section -->
          <div class="hidden lg:block lg:ml-10">
            <div class="flex space-x-4">
              <router-link
                :to="{name: 'Home'}"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-900"
              >
                Home
              </router-link>

              <router-link
                :to="{name: 'Category'}"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-900"
              >
                Category
              </router-link>

              <router-link
                :to="{name: 'Forum', params: {id: 1}}"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-900"
              >
                Forum
              </router-link>

              <router-link
                :to="{name: 'Thread'}"
                class="px-3 py-2 rounded-md text-sm font-medium text-gray-900"
              >
                Thread
              </router-link>
            </div>
          </div>
        </div>

        <div class="flex-1 px-2 flex justify-center lg:ml-6 lg:justify-end">
          <!-- Search section -->
          <div class="max-w-lg w-full lg:max-w-xs">
            <label class="sr-only" for="search">Search</label>
            <div class="relative text-gray-400 focus-within:text-gray-500">
              <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon aria-hidden="true" class="h-5 w-5"/>
              </div>
              <input
                id="search"
                class="block w-full bg-white py-2 pl-10 pr-3 border border-gray-300 rounded-md leading-5 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 focus:placeholder-gray-500 sm:text-sm"
                name="search" placeholder="Search" type="search"
              />
            </div>
          </div>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="bg-gray-50 p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" aria-hidden="true" class="block h-6 w-6"/>
            <XIcon v-else aria-hidden="true" class="block h-6 w-6"/>
          </DisclosureButton>
        </div>

        <!-- Actions section -->
        <div class="hidden lg:block lg:ml-4">
          <div class="flex items-center">
            <button
              class="bg-gray-50 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
              type="button">
              <span class="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" class="h-6 w-6"/>
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative flex-shrink-0">
              <div>
                <MenuButton
                  class="bg-gray-50 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    :alt="`${authUser.name} Profile Picture`"
                    :src="authUser.avatar" class="rounded-full h-8 w-8"
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem>
                    <router-link class="block py-2 px-4 text-sm text-gray-700"
                       :to="{ name: 'ProfileShow' }">
                      Profile
                    </router-link>
                  </MenuItem>
                  <MenuItem>
                    <a class="block py-2 px-4 text-sm text-gray-700"
                       href="#">
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a class="block py-2 px-4 text-sm text-gray-700"
                       href="#">
                      Logout
                    </a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation Bar -->
    <DisclosurePanel class="bg-gray-50 border-b border-gray-200 lg:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          as="a"
          class="block px-3 py-2 rounded-md font-medium text-gray-900"
          href="#">
          Home
        </DisclosureButton>
      </div>
      <div class="pt-4 pb-3 border-t border-gray-200">
        <div class="px-5 flex items-center">
          <div class="flex-shrink-0">
            <img
              :alt="`${authUser.name} Profile Picture`"
              :src="authUser.avatar"
              class="rounded-full h-10 w-10"
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-gray-800">{{ authUser.name }}</div>
            <div class="text-sm font-medium text-gray-500">{{ authUser.email }}</div>
          </div>
          <button
            class="ml-auto bg-gray-50 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-purple-500"
            type="button">
            <span class="sr-only">View notifications</span>
            <BellIcon aria-hidden="true" class="h-6 w-6"/>
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <DisclosureButton
            v-for="item in userNavigation" :key="item.name" :href="item.href" as="a"
            class="block rounded-md py-2 px-3 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            {{ item.name }}
          </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>

  </Disclosure>

</template>

<script>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

import { mapGetters } from 'vuex'

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' }
]
const tabs = [
  { name: 'Applied', href: '#', count: '2', current: false },
  { name: 'Phone Screening', href: '#', count: '4', current: false },
  { name: 'Interview', href: '#', count: '6', current: true },
  { name: 'Offer', href: '#', current: false },
  { name: 'Disqualified', href: '#', current: false }
]
const candidates = [
  {
    name: 'Emily Selman',
    email: 'emilyselman@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    applied: 'January 7, 2020',
    appliedDatetime: '2020-07-01T15:34:56',
    status: 'Completed phone screening'
  }
  // More candidates...
]
const publishingOptions = [
  { name: 'Published', description: 'This job posting can be viewed by anyone who has the link.', current: true },
  { name: 'Draft', description: 'This job posting will no longer be publicly accessible.', current: false }
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon
  },
  computed: {
    ...mapGetters(['authUser'])
  },
  setup () {
    const selected = ref(publishingOptions[0])

    return {
      userNavigation,
      tabs,
      candidates,
      publishingOptions,
      selected
    }
  }
}
</script>
