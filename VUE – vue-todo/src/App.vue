<script setup>
import { ref } from "vue";

const tasks = ref([]);

const generate = (count) => {
  const start = performance.now();
  tasks.value = Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Task ${i}`,
    priority: "Medium",
  }));
  console.log("Vue render:", performance.now() - start);
};

const update = () => {
  const start = performance.now();
  for (let i = 0; i < 50; i++) {
    tasks.value[i].name += " updated";
  }
  console.log("Vue update:", performance.now() - start);
};

const remove = () => {
  const start = performance.now();
  tasks.value.splice(0, 50);
  console.log("Vue delete:", performance.now() - start);
};
</script>

<template>
  <h2>Vue To-Do</h2>
  <button @click="generate(1000)">Generate 1000</button>
  <button @click="update">Update 50</button>
  <button @click="remove">Delete 50</button>

  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.name }} – {{ task.priority }}
    </li>
  </ul>
</template>
