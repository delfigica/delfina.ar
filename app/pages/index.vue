<script setup lang="ts">
const { t } = useI18n()

const email = 'delfinamariacanas@gmail.com'
const githubUrl = 'https://github.com/delfigica'

const tags = computed(() => [
  t('hero.tags.web'),
  t('hero.tags.software'),
  t('hero.tags.ai'),
  t('hero.tags.mvps')
])
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-6">
    <div class="relative w-full max-w-3xl overflow-hidden rounded-[32px] bg-[#a13a61] px-8 py-10 sm:px-12 sm:py-12 shadow-2xl">
      <!-- Decorative watermark -->
      <span
        class="pointer-events-none select-none absolute -bottom-10 -right-4 font-serif italic text-white/10 text-[160px] sm:text-[220px] leading-none"
        aria-hidden="true"
      >Delfi</span>

      <div class="relative">
        <div class="flex items-start justify-between mb-8">
          <p class="font-serif italic text-white text-lg sm:text-xl">
            {{ t('hero.eyebrow') }}
          </p>
          <p class="text-white/80 text-xs font-semibold tracking-[0.2em] uppercase mt-1">
            {{ t('hero.location') }}
          </p>
        </div>

        <h1 class="font-serif text-white leading-[1.05] text-5xl sm:text-6xl mb-6">
          {{ t('hero.titleLine1') }}<br>
          <span class="italic">{{ t('hero.titleLine2') }}</span>
        </h1>

        <p class="text-white/90 max-w-md mb-6">
          {{ t('hero.description') }}
        </p>

        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tag in tags"
            :key="tag"
            class="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium text-white"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex flex-wrap gap-3 mb-4">
          <UButton
            :href="`mailto:${email}`"
            icon="i-lucide-mail"
            color="neutral"
            variant="solid"
            size="lg"
            class="rounded-full bg-white text-[#a13a61] hover:bg-white/90"
          >
            {{ t('hero.writeMe') }}
          </UButton>
          <UButton
            :href="githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            icon="i-simple-icons-github"
            color="neutral"
            variant="outline"
            size="lg"
            class="rounded-full border-white/50 text-white hover:bg-white/10"
          >
            {{ t('hero.github') }}
          </UButton>
          <UButton
            href="/cv.pdf"
            target="_blank"
            icon="i-lucide-file-text"
            color="neutral"
            variant="outline"
            size="lg"
            class="rounded-full border-white/50 text-white hover:bg-white/10"
          >
            {{ t('hero.cv') }}
          </UButton>
        </div>

        <a
          :href="`mailto:${email}`"
          class="text-white/90 text-sm underline underline-offset-2 hover:text-white"
        >{{ email }}</a>
      </div>
    </div>
  </div>
</template>
