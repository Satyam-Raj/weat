



<template>
  <q-layout view="hHh lpr fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <!-- <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar> -->
          WEat
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :width="200"  bordered>
      <!-- drawer content -->


      <!-- <q-icon 
        class="q-pa-md"
        name="fad fa-burger-soda" 
        size="lg"
        color="primary"
      /> -->

      <q-list>

        <q-item
         to = "/"
         clickable 
         v-ripple
         exact
         >
        <q-item-section avatar>
          <q-icon name="home" size="md" />
        </q-item-section>

        <q-item-section>Home</q-item-section>
        </q-item>
      </q-list>




      <q-list>

        <q-item
         to = "/profile"
         clickable 
         v-ripple
          exact
         >
        <q-item-section avatar>
          <q-icon  name="person" size="md" />
        </q-item-section>

        <q-item-section>Profile</q-item-section>
        </q-item>
      </q-list>




      <q-list>

        <q-item
         to = "/wallet"
         clickable 
         v-ripple
          exact

         >
        <q-item-section avatar>
          <q-icon  name="account_balance_wallet" size="md" />
        </q-item-section>

        <q-item-section>Wallet</q-item-section>
        </q-item>
      </q-list>  




      <q-list>

        <q-item
         to = "/order_history"
         clickable 
         v-ripple
          exact

         >
        <q-item-section avatar>
          <q-icon  name="history" size="md" />
        </q-item-section>

        <q-item-section>Order History</q-item-section>
        </q-item>
      </q-list>  



      <q-list>

        <q-item
         to = "/about"
         clickable 
         v-ripple
          exact

         >
        <q-item-section avatar>
          <q-icon  name="help" size="md" />
        </q-item-section>

        <q-item-section>About</q-item-section>
        </q-item>
      </q-list>      




      <q-list>

        <q-item
         to = "/settings"
         clickable 
         v-ripple
          exact

         >
        <q-item-section avatar>
          <q-icon  name="settings" size="md" />
        </q-item-section>

        <q-item-section>Settings</q-item-section>
        </q-item>
      </q-list>



      <q-list>

        <q-item
         to = "/logout"
         clickable 
         v-ripple
          exact


         >
        <q-item-section avatar>
          <q-icon  name="logout" size="md" />
        </q-item-section>

        <q-item-section>Logout</q-item-section>
        </q-item>
      </q-list>



    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>