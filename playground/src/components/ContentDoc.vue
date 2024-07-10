<script setup lang="ts">
defineProps<{ doc: Record<string, any> }>()
</script>

<template>
  <div mb-10>
    <div flex items-end gap-6>
      <h3 mb-2 fs-4xl c-gray-3 font-600>
        {{ doc.title }}
        <span v-if="doc.alias" fs-2xl>
          <span ml-5px mr-10px c-gray-6>alias:</span>
          <span c-primary>{{ doc.alias }}</span>
        </span>
      </h3>
      <div py-2 fs-xl c-gray-4>
        {{ doc.desc }}
      </div>
    </div>
    <div grid="~ cols-2 gap-5" p-5 fs-18px card>
      <code>
        <p mb-2 c-primary>
          {{ doc.code }}
        </p>
        <div max-w-380px rd bg-dark-200 p-10px>
          <p v-for="item in doc.compiled" :key="item">{{ item }}</p>
        </div>
      </code>

      <div>
        <p pb-2>
          Preview
        </p>
        <div :class="doc.preview" b="~ dark-1 dashed">
          {{ doc.code }}
        </div>
        <span v-if="doc.preview === 'hide'" fs-12px>You can't see me :)</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
