<script setup lang="ts"></script>

<template>
  <div class="dark">
    <header pt-10 fs-center>
      <h1 from="#d566c2" to="#009ff7" inline-block bg-gradient-to-br bg-clip-text fs-8xl c-transparent font-extrabold>
        Unoist
      </h1>
      <p pt-5 fs-xl>
        Make using UnoCSS simpler and easier.
      </p>
    </header>
    <main py-10>
      <div feed-box>
        <ContentDoc v-for="(doc, i) in docs" :key="i" :doc />
      </div>
    </main>
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 15px;
  display: block;
  background: transparent;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  min-height: 100px;
  border: 6px solid transparent;
  display: block;
  background: #787878;
  border-radius: 10px;
  background-clip: padding-box;
}

html {
  scroll-behavior: smooth;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  --at-apply: 'bg-cool-gray-950 c-light-9 font-nunito';
}
</style>
