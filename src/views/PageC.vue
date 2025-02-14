<script setup>
  import { inject } from 'vue';

  const utils = inject('utils');
  
  const clamped   = utils.clamp(15, 0, 10);         // 10
  const formatted = utils.formatDate(new Date(2023, 0, 15)); // "2023-01-15"
  const parsed    = utils.parseDate("2023-01-15");  // Date 객체
  const dayOfWeek = utils.getDayOfWeek(new Date(2023, 0, 15)); // 0=일,1=월...
  const weekend   = utils.isWeekend(new Date(2023, 0, 15));    // true or false
  </script>
  
<template>
    <div>
      <h1>PageC</h1>
      <p>clamp(15, 0, 10): {{ clamped }}</p>
      <p>formatDate(new Date(2023, 0, 15)): {{ formatted }}</p>
      <p>parseDate("2023-01-15"): {{ parsed }}</p>
      <p>getDayOfWeek(new Date(2023, 0, 15)): {{ dayOfWeek }}</p>
      <p>isWeekend(new Date(2023, 0, 15)): {{ weekend }}</p>
    </div>
  </template>
  
  