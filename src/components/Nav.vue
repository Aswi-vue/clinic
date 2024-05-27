<template>
  <header>
    <h1>CLINIC</h1>
    <div class="card">
      <Menubar :model="menu">
        <template #item="{ item, props, hasSubmenu }">
          <router-link
            v-if="item.route"
            v-slot="{ href, navigate }"
            :to="item.route"
            custom
          >
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </router-link>
          <a
            v-else
            v-ripple
            :href="item.url"
            :target="item.target"
            v-bind="props.action"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
          </a>
        </template>
      </Menubar>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const menu = ref([
  {
    label: "Home",
    icon: "pi pi-home",
     command: () => {
      router.push("/");
    },
  },
  {
    label: "About",
    icon: "pi pi-star",
    command: () => {
      router.push("/about");
    },
  },
  {
    label: "Services",
    icon: "pi pi-search",
    command: () => {
      router.push("/services");
    },
  },
  {
    label: "Pricing",
    icon: "pi pi-bolt",
     command: () => {
      router.push("/pricing");
    },
  },
  {
    label: "Events",
    icon: "pi pi-server",
  },
  {
    label: "Teaching Module",
    icon: "pi pi-pencil",
  },
  {
    label: "Features",
    icon: "pi pi-palette",
    items: [
      {
        label: "Apollo",
        icon: "pi pi-palette",
      },
      {
        label: "Ultima",
        icon: "pi pi-palette",
      },
    ],
  },
  {
    label: "Contact",
    icon: "pi pi-envelope",
  },
]);
</script>

<style>
h1 {
  color: black !important;
}
header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
}
</style>
