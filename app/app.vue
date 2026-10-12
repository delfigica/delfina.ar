<script setup lang="ts">
useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: '#f7e2e8' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..700&family=Inter:wght@400;500;600;700&display=swap' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

useSeoMeta({
  title: 'Delfina Cañas — Desarrolladora de software',
  description: 'Construyo sitios, productos y herramientas que resuelven problemas reales, de la idea al lanzamiento.'
})
</script>

<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
