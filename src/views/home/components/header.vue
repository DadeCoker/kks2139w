<script setup lang="ts">
import { homeNav, homeOutNav } from '@/common/nav/homeNav'
import Logo from '@/components/logo.vue'
import ThemeToggle from '@/components/themeToggle.vue'
function toOutNav(path: string) {
  window.location.href = path
}
</script>

<template>
  <div id="header">
    <Logo />
    <ul class="nav" data-aos="zoom-out-right">
      <li v-for="(navItem, idx) in homeNav" :key="idx">
        <router-link v-if="!navItem.tooltip" :to="navItem.path || ''">{{
          navItem.name
        }}</router-link>
      </li>
      <li v-for="(navItem, idx) in homeOutNav" @click="toOutNav(navItem.path)" :key="idx">
        <i :class="navItem.icon" :style="{ color: navItem.color }" />
        {{ navItem.name }}
      </li>
    </ul>
    <div class="operator" data-aos="zoom-out-left">
      <theme-toggle />
      <!-- <button class="linear-color-btn" @click="$router.push('/editor?type=10front_end')">
        <i class="iconfont icon-technology"></i>
        开始创作
      </button> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  height: 60px;
  line-height: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px;
  text-align: center;
  color: var(--font-color);
  font-weight: bold;
}
</style>
