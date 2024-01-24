<script setup>
import { ref, onMounted } from 'vue';
import {
  getFirestore,
  collection,
  query,
  getDocs,
} from 'firebase/firestore/lite';

const kitaplar = ref([]);
onMounted(async () => {
  let fbKitaplar = [];
  const db = getFirestore();
  const q = query(collection(db, 'kitaplar'));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    const kitap = {
      id: doc.id,
      name: doc.data().name,
      author: doc.data().author,
      cost: doc.data().cost,
      genre: doc.data().genre,
      publishingHouse: doc.data().publishingHouse,
      bookseller: doc.data().bookseller,
      imgUrl: doc.data().imgUrl,
      year: doc.data().year,
    };
    fbKitaplar.push(kitap);
  });
  kitaplar.value = fbKitaplar;
});
</script>
<template>
  <div class="products">
    <div class="product" v-for="(kitap, index) in kitaplar" :key="index">
      <router-link :to="'/kitap/' + kitap.name">
        <img class="product-image" :src="kitap.imgUrl" />
      </router-link>
      <div class="product-name">{{ kitap.name }}</div>
      <div>
        <div class="product-author">{{ kitap.author }}</div>
        &nbsp;
        <div class="product-cost">{{ kitap.cost }},00&nbsp;TL</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
