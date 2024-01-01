<script setup>

</script>

<template>
  <main class="stock-page">
    <h1>Stock</h1>
    <p>This is the Stock page</p>
  <div class="card" style="width: 13rem;">
  <img src="../assets/logo.png" class="card-img-top" alt="chicken">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text"> card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
  </main>
</template>

<style lang="scss" scoped>
.card {
  background-color:#8f898d;
  border-radius:30px;
  border: 4px solid #a1a1a1;
  padding:20px;
}

.card .pic img {
  width: 100%;
}

.card .card-header{
  border-bottom:none;
  background-color:transparent;
}

.card .title {
  color:#444444;
}

.card .text {
  color:#444444;
}

.card-footer{
  border-top:none !important;
  background-color:transparent !important;
}
</style>