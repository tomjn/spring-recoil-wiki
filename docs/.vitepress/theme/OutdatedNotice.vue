<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>
<template>
  <div v-if="frontmatter.outdated" class="outdated-notice">
    This page describes an older version of Spring and may be out of date. For the
    maintained engine see <a href="https://recoilengine.org/">Recoil</a>.
  </div>
</template>
<style>
.outdated-notice {
  border: 1px solid var(--vp-c-warning-1, #d97706);
  background: var(--vp-c-warning-soft, #fff7ed);
  padding: 0.6rem 0.9rem; border-radius: 6px; margin: 0 0 1rem; font-size: 0.9rem;
}
</style>
