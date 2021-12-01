<template>





  <div class="q-pa-xl row items-start flex flex-center q-gutter-md">

    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg">

        <div class="absolute-bottom text-subtitle2 text-center">
          Yo Zing
        </div>



        <div class="q-pa-md q-gutter-sm">
          <q-btn label="Menu" color="primary" @click="layout = true" />

          <q-dialog v-model="layout">
            <q-layout view="Lhh lpR fff" container class="bg-white">
              <q-header class="bg-primary">
                <q-toolbar>
                  <!-- <q-btn flat @click="drawer = !drawer" round dense icon="menu" /> -->
                  <q-toolbar-title>Menu</q-toolbar-title>
                  <q-btn flat v-close-popup round dense icon="close" />
                </q-toolbar>


              </q-header>


<!-- 
              <q-drawer bordered v-model="drawer" :width="200" :breakpoint="600" class="bg-grey-3 q-pa-sm">
                <div v-for="n in 10" :key="n">Drawer {{ n }} / 50</div>
              </q-drawer> -->



              <!-- <q-page-container>
                <q-page padding>
                  <p v-for="n in contentSize" :key="n">
                    {{ lorem }}
                  </p>
                </q-page>
              </q-page-container> -->



          <q-item class="bg-grey-3 shadow-2 q-mt-xl">
            <div class="q-pa-md">
              <q-stepper
                v-model="step"
                vertical
                color="primary"
                header-nav
                animated
              >
                <q-step
                  :name="1"
                  title="Hot Warm Up"
                  icon="settings"
                  :done="step > 1"
                >
                    <div class="q-pa-sm item_width">

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Expresso
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            30/-  
                          </q-item-section>
                          <q-item-section>
                            
                              <q-btn-toggle
                                readonly
                                v-model="model"
                                toggle-color="primary"
                                push
                                dense
                                glossy
                                class="q-mr-sm"
                                :options="[
                                  {label: '-', value: 'one'},
                                  {label: '9', value: 'two'},
                                  {label: '+', value: 'three'}
                                ]"
                              />




                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Black Coffee
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            35/-  
                          </q-item-section>
                          <q-item-section>
                              <q-btn-toggle
                                readonly
                                v-model="model"
                                toggle-color="primary"
                                push
                                dense
                                glossy
                                class="q-mr-sm"
                                :options="[
                                  {label: '-', value: 'one'},
                                  {label: '3', value: 'two'},
                                  {label: '+', value: 'three'}
                                ]"
                              />
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Cappuccino
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            40/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Cafe Latte
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            45/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Choco Mocha
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            50/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Irish Mocha
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            60/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Caramel Latte
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            60/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Chocochina
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            50/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list> 

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Hot Chocolate
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            55/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            White Mocha Latte
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            65/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Caramel Hot Mocha Latte
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            65/- 
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Hot Chocolate W Irish
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            60/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Hot Chocolate W Caramel
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            60/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Hot Brown Milk
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            65/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>                     

                    </div>

                  <q-stepper-navigation>
                    <q-btn @click="step = 2" color="primary" label="Continue" />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="2"
                  title="Hot Tea's"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 2"
                >
                    <div class="q-pa-sm item_width">
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Regular Tea
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            20/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Ginger Tea
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            25/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Masala Tea
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            30/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Hot Lemon Tea
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            25/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Black Tea with Ginger
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            20/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Black Tea
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            15/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list> 


                    </div>


                  <q-stepper-navigation>
                    <q-btn @click="step = 3" color="primary" label="Continue" />
                    <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="3"
                  title="Frappelicious"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 3"
                >
                    <div class="q-pa-sm item_width">
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Cold Frappe 
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            80/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Tropical Frappe 
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            85/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Chocolate Frappe
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            90/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Chocolate Frappe with Ice
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            100/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Cold Frappe with Ice
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            105/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Mocha Blend Frappe
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            95/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list> 


                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Chocolate Brownie Frappe
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            95/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Caramel Frappe 
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            95/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Irish Coffee New
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            95/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Crunch Cold Frappe
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            95/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Chocochip Frappe
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            95/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                       

                    </div>

                  <q-stepper-navigation>
                    <q-btn @click="step = 4" color="primary" label="Continue" />
                    <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="4"
                  title="Lemonades"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 4"
                >
                    <div class="q-pa-sm item_width">
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Classic Fresh Lime Soda 
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            70/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Green Apple Soda
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            80/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Cool Blue Lemon
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            85/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Masala Lemonade
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            80/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Water Melon Blush
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            80/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Orange Mojito
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            80/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list> 


                    </div>


                  <q-stepper-navigation>
                    <q-btn @click="step = 5" color="primary" label="Continue" />
                    <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="5"
                  title="Ice Tea's"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 5"
                >
                    <div class="q-pa-sm item_width">
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Lemon Ice Tea
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            70/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Strawberry Ice Tea
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            70/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Peach Ice Tea
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            70/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      

                    </div>

                  <q-stepper-navigation>
                    <q-btn @click="step = 6" color="primary" label="Continue" />
                    <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="6"
                  title="Shakes and Smoothies"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 6"
                >
                    <div class="q-pa-sm item_width">
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Marvelous Mango
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            105/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Crunchy Kiwi
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            105/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Wild Berry
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            90/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Butter Scotch
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            105/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Black Current Shake
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            85/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Smooth Strawberry
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            75/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>


                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Badam Tandai 
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            90/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>
                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Chocolate Brownie Shake
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            105/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                      <q-list dense bordered padding class="rounded-borders">
                        <q-item>
                          <q-item-section>
                            Green Apple Shake
                          </q-item-section>
                           <q-item-section>
                            
                          </q-item-section>
                          <q-item-section>
                            100/-  
                          </q-item-section>
                          <q-item-section>
                            incre
                          </q-item-section>
                        </q-item>
                      </q-list>

                    </div>

                  <q-stepper-navigation>
                    <q-btn @click="step = 7" color="primary" label="Continue" />
                    <q-btn flat @click="step = 5" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="7"
                  title="Dessert"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 7"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 8" color="primary" label="Continue" />
                    <q-btn flat @click="step = 6" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="8"
                  title="Small Bites"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 8"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 9" color="primary" label="Continue" />
                    <q-btn flat @click="step = 7" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="9"
                  title="Chinese Appetizer"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 9"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 10" color="primary" label="Continue" />
                    <q-btn flat @click="step = 8" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="10"
                  title="Soup"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 10"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 11" color="primary" label="Continue" />
                    <q-btn flat @click="step = 9" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="11"
                  title="Main Course"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 11"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 12" color="primary" label="Continue" />
                    <q-btn flat @click="step = 10" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="12"
                  title="Rice & Noodles"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 12"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 13" color="primary" label="Continue" />
                    <q-btn flat @click="step = 11" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

                <q-step
                  :name="13"
                  title="Sizzler"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 13"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 14" color="primary" label="Continue" />
                    <q-btn flat @click="step = 12" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="14"
                  title="COMBO"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 14"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 15" color="primary" label="Continue" />
                    <q-btn flat @click="step = 13" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>

















                <!-- <q-step
                  :name="15"
                  title="Hot Tea's"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 15"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 16" color="primary" label="Continue" />
                    <q-btn flat @click="step = 14" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="16"
                  title="Hot Tea's"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 16"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 17" color="primary" label="Continue" />
                    <q-btn flat @click="step = 15" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="17"
                  title="Hot Tea's"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 17"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 18" color="primary" label="Continue" />
                    <q-btn flat @click="step = 16" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>


                <q-step
                  :name="18"
                  title="Hot Tea's"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 18"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 19" color="primary" label="Continue" />
                    <q-btn flat @click="step = 17" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>



                <q-step
                  :name="19"
                  title="Hot Tea's"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 19"
                >
                  An ad group contains one or more ads which target a shared set of keywords.

                  <q-stepper-navigation>
                    <q-btn @click="step = 20" color="primary" label="Continue" />
                    <q-btn flat @click="step = 18" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>









 -->














                <!-- <q-step
                  :name="3"
                  title="Ad template"
                  icon="assignment"
                  
                >
                  This step won't show up because it is disabled.
                  
                  <q-stepper-navigation>
                    <q-btn @click="step = 4" color="primary" label="Continue" />
                    <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step> -->

                <q-step
                  :name="15"
                  title="Create an ad"
                  icon="add_comment"
                >
                  Try out different ad text to see what brings in the most customers, and learn how to
                  enhance your ads using features like ad extensions. If you run into any problems with
                  your ads, find out how to tell if they're running and how to resolve approval issues.

                  <q-stepper-navigation>
                    <q-btn color="primary" label="Finish" />
                    <q-btn flat @click="step = 14" color="primary" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </q-step>
              </q-stepper>
            </div>
          </q-item>






            </q-layout>
          </q-dialog>
        </div>





        







      </q-img>
    </q-card>















    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Italian Oven
        </div>
      </q-img>
    </q-card>

















    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom text-subtitle2 text-center">
          Login-Zaika
        </div>
      </q-img>
    </q-card>
  </div>


 
</template>

<script>
import { defineComponent } from 'vue';
import { ref, computed } from 'vue'

export default ({
  name: 'PageIndex',
   setup () {
    const moreContent = ref(true)
   {
            return {
            layout: ref(false),

            moreContent,
            drawer: ref(false),
            drawerR: ref(false),
            step: ref(1),
            count:  0,
            model: ref('two'),
            
          }
  }
  },


})



</script>






<style  scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
.item_width{
  max-width: 100%;
}

</style>