## Reflection Report

During this benchmark project, several challenges were encountered while
optimizing DOM operations across different JavaScript frameworks.

In React, managing state immutability was essential to prevent unnecessary
re-renders. While the Virtual DOM provides efficient diffing, rendering large
lists still requires careful optimization.

Angular presented challenges due to its change detection mechanism. Although
powerful and robust, Angular’s automatic checks introduced noticeable overhead
when handling large DOM updates.

Vue offered a balanced experience. Its reactive system allowed efficient DOM
updates with minimal configuration. However, improper handling of reactive
references could lead to performance degradation.

Svelte demonstrated the best performance in most scenarios. Its compile-time
approach eliminated the need for a Virtual DOM, resulting in faster rendering
and updates, especially with large datasets.

Overall, this benchmark shows that performance depends not only on raw speed
but also on architectural choices such as reactivity models, DOM abstraction,
and compile-time optimizations.
