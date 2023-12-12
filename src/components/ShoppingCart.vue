<template>
  <title>İkinci el kitap ve yeni kitap</title>

  <q-layout class="layout-shopping-cart" id="layout-shopping-cart">
    <q-page-container>
      <div>
        <img
          class="img-shopping-cart"
          id="img-shopping-cart"
          src="../assets/sepet.png"
        />
        <label class="label-shopping-cart" id="label-shopping-cart">
          Sepetiniz Boş
        </label>
        <button class="btn-return" id="btn-return">
          <router-link to="/" class="text-return" id="text-return"
            >Ana Sayfaya Dön</router-link
          >
        </button>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ShoppingCart',
});
</script>
<style>
#btn-return {
  display: inline-block;
  background-color: brown;
  color: white;
  margin-left: 43%;
}
#label-shopping-cart {
  display: inline-block;
  background-color: white;
  color: black;
  margin-left: 45%;
}
#img-shopping-cart {
  display: inline-block;
  margin-left: 33.5%;
}
#text-return {
  color: white;
  text-decoration: none;
}
#footer-container {
  background-color: brown;
  height: 300px;
}
#footer {
  background-color: brown;
  height: 300px;
}
#layout-shopping-cart {
  display: inline-block;
}
</style>
