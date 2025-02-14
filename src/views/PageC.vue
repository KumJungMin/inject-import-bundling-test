<script lang="ts" setup>
// math 관련 함수: clamp
import { clamp } from '../utils/mathUtils';
// date 관련 함수: formatDate, parseDate, getDayOfWeek, isWeekend
import { formatDate, parseDate, getDayOfWeek, isWeekend } from '../utils/dateUtils';

const clamped   = clamp(15, 0, 10);
const formatted = formatDate(new Date(2023, 0, 15));
const parsedDate = parseDate('2023-01-15');
const dayOfWeek = getDayOfWeek(new Date(2023, 0, 15));
const weekend   = isWeekend(new Date(2023, 0, 15));
</script>

<template>
  <div>
    <h1>PageC</h1>
    <p>clamp(15, 0, 10): {{ clamped }}</p>
    <p>formatDate(new Date(2023, 0, 15)): {{ formatted }}</p>
    <p>parseDate("2023-01-15"): {{ parsedDate }}</p>
    <p>getDayOfWeek(new Date(2023, 0, 15)): {{ dayOfWeek }}</p>
    <p>isWeekend(new Date(2023, 0, 15)): {{ weekend }}</p>
  </div>
</template>

