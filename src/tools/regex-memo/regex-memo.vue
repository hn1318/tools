<script setup lang="ts">
import { useThemeVars } from 'naive-ui';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import MemoZh from './regex-memo.content.md';
import MemoEn from './regex-memo.content.en.md';

const themeVars = useThemeVars();
const { locale } = useI18n();
const Memo = computed(() => (locale.value || '').startsWith('zh') ? MemoZh : MemoEn);
</script>

<template>
  <div>
    <component :is="Memo" />
  </div>
</template>

<style lang="less" scoped>
::v-deep(pre) {
  margin: 0;
  padding: 15px 22px;
  background-color: v-bind('themeVars.cardColor');
  border-radius: 4px;
  overflow: auto;
}
::v-deep(table) {
  border-collapse: collapse;
}
::v-deep(table), ::v-deep(td), ::v-deep(th) {
  border: 1px solid v-bind('themeVars.textColor1');
  padding: 5px;
}
::v-deep(a) {
  color: v-bind('themeVars.textColor1');
}
</style>
