<template>
  <v-app>

    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        TAPIOCARIA VUE
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
        <v-container>
          <router-view>
          </router-view>
        </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'App'
  }
</script>
