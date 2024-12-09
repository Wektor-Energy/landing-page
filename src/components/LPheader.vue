<template lang="ts">
  <header class="app-header">
    <div class="header-container">
      <h1 class="app-title">My App</h1>
      <!-- Buttons or additional content can be added here -->
    </div>
  </header>
</template>
<script>
export default {
  name: "LPheader"
}
</script>
<style lang="css">
.app-header {
  background-color: #4caf50;
  /* Change to match your theme */
  color: white;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.app-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>