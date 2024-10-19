<template>
  <v-app>
    <v-app-bar app>
      <!-- 其他导航项 -->
      <v-btn to="/chat">{{ $t('nav.chat') }}</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
