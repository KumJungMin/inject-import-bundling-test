
<script lang="ts" setup>
import { capitalize, reverseString, slugify, toCamelCase } from '../utils/stringUtils';
import { chunkArray } from '../utils/arrayUtils';

const capitalized = capitalize('hello world');
const reversed    = reverseString('Hello');
const slugged     = slugify('Hello World!!!');
const camel       = toCamelCase('hello_world_example');
const chunked     = chunkArray(['a','b','c','d','e','f','g'], 3);
</script>

<template>
  <div>
    <h1>PageA</h1>
    <p>capitalize("hello world"): {{ capitalized }}</p>
    <p>reverseString("Hello"): {{ reversed }}</p>
    <p>slugify("Hello World!!!"): {{ slugged }}</p>
    <p>toCamelCase("hello_world_example"): {{ camel }}</p>
    <p>chunkArray(["a","b","c","d","e","f","g"], 3): {{ chunked }}</p>
  </div>
</template>
