<script setup>
  import {
    isEmail,
    isPhone,
    isURL,
    deepClone,
    pick
  } from '@/utils';
  
  const emailCheck = isEmail("test@example.com");
  const phoneCheck = isPhone("010-1234-5678");
  const urlCheck   = isURL("https://example.com");
  
  // 예시 객체
  const originalObj  = { name: "Alice", age: 25, city: "Seoul" };
  const clonedObj    = deepClone(originalObj);
  const pickedObj    = pick(originalObj, ["name", "age"]);
  
  const clonedObjStr = JSON.stringify(clonedObj);
  const pickedObjStr = JSON.stringify(pickedObj);
</script>

<template>
    <div>
      <h1>PageD</h1>
      <p>isEmail("test@example.com"): {{ emailCheck }}</p>
      <p>isPhone("010-1234-5678"): {{ phoneCheck }}</p>
      <p>isURL("https://example.com"): {{ urlCheck }}</p>
      <p>deepClone(obj): {{ clonedObjStr }}</p>
      <p>pick(obj, ["name", "age"]): {{ pickedObjStr }}</p>
    </div>
  </template>
  
  
  