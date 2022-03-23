<template>
  <AppLayout>
    <template v-slot:header>
      <secondary-nav></secondary-nav>
    </template>
    <div class="mx-4 sm:mx-0">
      <div>
        <nav class="hidden sm:flex items-center text-sm leading-5 font-medium">
          <a
            href="#"
            class="
              text-gray-500
              hover:text-gray-700
              transition
              duration-150
              ease-in-out
            "
          >
            {{ $t("support.ticket.support") }}
          </a>
          <svg
            class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <a
            href="#"
            class="
              text-gray-500
              hover:text-gray-700
              transition
              duration-150
              ease-in-out
            "
          >
            {{ $t("support.ticket.tickets") }}
          </a>
          <svg
            class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
          <a
            href="#"
            class="
              text-gray-500
              hover:text-gray-700
              transition
              duration-150
              ease-in-out
            "
          >
            {{ $t("support.ticket.overview") }}
          </a>
        </nav>
      </div>
      <div class="mt-2 md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
          <h2
            class="
              text-2xl
              font-bold
              leading-7
              text-gray-900
              sm:text-3xl sm:leading-9 sm:truncate
            "
          >
            {{ $t("support.ticket.your_tickets") }}
          </h2>
        </div>
        <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
           <router-link to="/support/ticket/create" >
          <span class="md:ml-3 shadow-sm rounded-md">
            <a
              href="#"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                text-sm
                leading-5
                font-medium
                rounded-md
                text-white
                bg-blue-600
                hover:bg-blue-500
                focus:outline-none
                focus:shadow-outline-blue
                focus:border-blue-700
                active:bg-blue-700
                transition
                duration-150
                ease-in-out
              "
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                />
              </svg>
              {{ $t("support.ticket.create_ticket") }}
            </a>
          </span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="rounded-md bg-green-50 p-4 my-4 shadow">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg
            class="h-5 w-5 text-green-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div class="ml-3">
          <p class="text-sm leading-5 text-green-800">
            Wir haben deine Bewertung für unseren Support gespeichert. Vielen
            Dank für dein Feedback!
          </p>
        </div>
      </div>
    </div>

            <div class="my-8 mx-4 sm:mx-0 m">
                <div class="grid grid-cols-1 row-gap-6 gap-4 col-gap-4 md:grid-cols-8">
                    <div  class="md:col-span-2">
                        <div @click="ticketOpened = !ticketOpened" :class="ticketOpened ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'" class="bg-white  overflow-hidden shadow rounded-lg p-4 cursor-pointer hover:bg-blue-600 hover:text-white">
                           Show Ticket
                        </div>
                    </div>

                    <div v-if="ticketOpened" class="md:col-span-6">
                        
                        <div class="bg-white shadow overflow-hidden sm:rounded-md">
                            <ul v-for="ticket in tickets" :key="ticket">
                                <li>
                                    <a href="">
                                        <div class="px-4 py-4 flex items-center sm:px-6">
                                            <div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                                                <div>
                                                    <div class="text-sm leading-5 font-medium text-blue-600 truncate">
                                                        {{ticket.subject}}
                                                    </div>
                                                    <div class="mt-1 flex items-center">
                                                        <div class="flex items-center text-xs leading-5 text-gray-500">
                                                            <div> {{ticket.id}} </div>
                                                            <div class="ml-2">Last answer</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="mt-4 flex-shrink-0 sm:mt-0 mb-1">
                                                    
                                                    <span v-if="ticket.status === 'Open'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800">
                                                                    <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                                                                        <circle cx="4" cy="4" r="3" />
                                                                    </svg>
                                                                    {{ticket.status}}
                                                                </span>

                                                    <span v-else-if="ticket.status === 'Customer'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                                    <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-blue-400" fill="currentColor" viewBox="0 0 8 8">
                                                                        <circle cx="4" cy="4" r="3" />
                                                                    </svg>
                                                                     }
                                                                </span>
                                                    <span v-else-if="ticket.status === 'Close'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
                                                                    <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-gray-400" fill="currentColor" viewBox="0 0 8 8">
                                                                        <circle cx="4" cy="4" r="3" />
                                                                    </svg>
                                                                      {{ticket.status}}
                                                                </span>
                                                    <span v-else-if="ticket.status === 'Auto Customer'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
                                                                    <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-gray-400" fill="currentColor" viewBox="0 0 8 8">
                                                                        <circle cx="4" cy="4" r="3" />
                                                                    </svg>
                                                                    {{ticket.status}}
                                                                </span>
                                                    <span v-else-if="ticket.status === 'Spam'" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800">
                                                                    <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                                                                        <circle cx="4" cy="4" r="3" />
                                                                    </svg>
                                                                   {{ticket.status}}
                                                                </span>
                                                </div>
                                            </div>
                                            <router-link to="/support/ticket/:id">
                                            <div class="ml-5 flex-shrink-0">
                                                <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                                </svg>
                                            </div>
                                            </router-link>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                      
                         <div class="bg-white shadow sm:rounded-lg">
                            <div class="px-4 py-5 sm:p-6 mt-8">
                                <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                                    <p>
                                        Create Ticket
                                    </p>
                                </div>
                                <div class="mt-3 text-sm leading-5">
                                    <a href=" ">
                                      <router-link to="/support/ticket/create" class="px-8 py-2 rounded-md bg-blue-600 text-white">Create</router-link>
                                    </a>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>


  </AppLayout>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import AppLayout from "@/components/layout/AppLayout";
import SecondaryNav from "@/components/support/SecondaryNav";
import ShowTicket from './ShowTicket.vue';

export default {
  name: "Ticket",
  components: { SecondaryNav, AppLayout },
  data() {
return {
   ticketOpened: true,
            tickets: [
                {
                    id: 1,
                    subject: 'Ticket Subject',
                    affected_server_id: 2,
                  affected_payment_id: 12,
                    status: 'Open'
                },
                {
                    id: 2,
                    subject: 'Ticket Another Subject',
                    affected_server_id: 4,
                    affected_payment_id: 22,
                    status: 'Close'
                },
                {
                    id: 3,
                    subject: 'Ticket Another Subject Two',
                    affected_server_id: 42,
                    affected_payment_id: 221,
                    status: 'Open'
                }
            ]
        }  
  },
  computed: {
    ...mapGetters(["userTicketsSuccess"]),
  },
  methods: {
    ...mapActions({
      handleUserTickets: "userTickets",
    }),
    ticketShow(){
      this.ticketOpened = !this.ticketOpened
      }
  },
  mounted() {
    this.$store.dispatch("userTickets");
  },
};
</script>