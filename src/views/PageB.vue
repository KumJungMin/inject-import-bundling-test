
<script lang="ts" setup>
// array 관련 함수: flattenArray, uniqueArray
import { flattenArray, uniqueArray } from '../utils/arrayUtils';
// math 관련 함수: add, subtract, randomInt
import { add, subtract, randomInt } from '../utils/mathUtils';

const flattened = flattenArray<number>([1, [2, [3, 4]], 5]);
const uniques   = uniqueArray<number>([1,2,2,3,4,4,4]);
const sum       = add(10, 5);
const diff      = subtract(10, 5);
const rand      = randomInt(1, 100);
</script>
<template>
  <div>
    <h1>PageB</h1>
    <p>flattenArray([1, [2, [3, 4]], 5]): {{ flattened }}</p>
    <p>uniqueArray([1,2,2,3,4,4,4]): {{ uniques }}</p>
    <p>add(10, 5): {{ sum }}</p>
    <p>subtract(10, 5): {{ diff }}</p>
    <p>randomInt(1, 100): {{ rand }}</p>
  </div>
</template>
