<script setup>
  import { inject } from 'vue';

  const utils = inject('utils');
  
  const capitalized = utils.capitalize('hello world');
  const reversed    = utils.reverseString('Hello');
  const slugged     = utils.slugify('Hello World!!!');
  const camel       = utils.toCamelCase('hello_world_example');
  const chunked     = utils.chunkArray(['a','b','c','d','e','f','g'], 3);
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
  