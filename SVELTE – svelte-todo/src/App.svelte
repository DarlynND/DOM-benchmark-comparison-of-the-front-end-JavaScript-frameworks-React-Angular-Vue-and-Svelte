<script>
  let tasks = [];

  function generate(count) {
    const start = performance.now();
    tasks = Array.from({ length: count }, (_, i) => ({
      id: i,
      name: `Task ${i}`,
      priority: "Medium"
    }));
    console.log("Svelte render:", performance.now() - start);
  }

  function update() {
    const start = performance.now();
    for (let i = 0; i < 50; i++) {
      tasks[i].name += " updated";
    }
    console.log("Svelte update:", performance.now() - start);
  }

  function remove() {
    const start = performance.now();
    tasks = tasks.slice(50);
    console.log("Svelte delete:", performance.now() - start);
  }
</script>

<h2>Svelte To-Do</h2>
<button on:click={() => generate(1000)}>Generate 1000</button>
<button on:click={update}>Update 50</button>
<button on:click={remove}>Delete 50</button>

<ul>
  {#each tasks as task (task.id)}
    <li>{task.name} – {task.priority}</li>
  {/each}
</ul>
