<template>
  <q-page>
    <div class="productinfo-row1">
      <div class="productinfo-col1">
        <div>
          <img />
        </div>
        <div class="productinfo-col2">
          <div class="productinfo-row21">
            <div>{{ this.$route.params.id }}</div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <div class="productinfo-row22"></div>
        <div class="productinfo-row23">
          <button class="btn-addToCart">Sepete Ekle</button>
          <button class="btn-askToSeller">Satıcıya Soru Sor</button>
        </div>
      </div>
      <div class="productinfo-col3"></div>
    </div>
    *
  </q-page>
</template>
<script setup>
import { defineComponent, ref, onMounted } from 'vue';
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

defineComponent({
  data() {
    return {
      kitaplar: {},
    };
  },
  props: [kitaplar],
  mounted() {
    this.name = this.$route.params.id;
    this.kitap = this.kitaplar.find((kitap) => kitap.id == this.id);
  },
});
</script>
<style>
.productinfo-row1 {
  height: 1000px;
}
.productinfo-col1 {
  display: inline-block;
  height: 500px;
  width: 350px;
}
.productinfo-col2 {
  display: inline-block;
  height: 500px;
  width: 500px;
}
.productinfo-col3 {
  display: inline-block;
  height: 500px;
  width: 350px;
}
.btn-addToCart {
  display: inline-block;
}
.btn-askToSeller {
  display: inline-block;
}
.productcard-row21 {
  height: 150px;
}
.productinfo-row22 {
  height: 150px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-color: gray;
  border-width: 0.0001mm;
}
.productinfo-row23 {
  height: 150px;
}
</style>
