
  <script setup>
  import { inject } from 'vue';

  const utils = inject('utils');
  
  const flattened = utils.flattenArray([1, [2, [3, 4]], 5]);
  const uniques   = utils.uniqueArray([1,2,2,3,4,4,4]);
  const sum       = utils.add(10, 5);
  const diff      = utils.subtract(10, 5);
  const rand      = utils.randomInt(1, 100);
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
  