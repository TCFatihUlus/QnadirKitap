<template>
  <title>İkinci el kitap ve yeni kitap</title>

  <q-layout class="layout-shopping-cart" id="layout-shopping-cart">
    <q-page-container v-for="sepet in sepetim" :key="sepet.id">
      <div>{{ sepet.name }}</div>
      <div>{{ sepet.author }}</div>
    </q-page-container>
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
<script setup>
import { defineComponent } from 'vue';
import { ref, onMounted } from 'vue';
import {
  getFirestore,
  collection,
  query,
  getDocs,
} from 'firebase/firestore/lite';
defineComponent({
  name: 'ShoppingCart',
  data() {
    return {
      sepetim: [],
    };
  },
  methods: {
    addProduct() {
      db.collection('sepetim').add(this.kitap);
    },
    async getSepetim() {
      this.sepet = [];

      const q = query(
        collection(this.$db, 'sepetim'),
        where('done', '==', false)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((kitap) => {
        console.log({ ...kitap.data() });
        this.sepetim.push({ ...kitap.data() });
      });

      this.loading = false;
    },
  },
});
const sepetim = ref([]);
const kitaplar = ref([]);
onMounted(async () => {
  let fbSepetim = [];
  const db = getFirestore();
  const q = query(collection(db, 'sepetim'));
  const querySnapshot = await getDocs(q);
  let fbKitaplar = [];
  const db1 = getFirestore();
  const q1 = query(collection(db1, 'kitaplar'));
  const querySnapshot1 = await getDocs(q1);

  querySnapshot1.forEach((doc) => {
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
  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    const sepet = {
      id: doc.id,
      name: doc.data().name,
      author: doc.data().author,
      cost: doc.data().cost,
      bookseller: doc.data().bookseller,
      imgUrl: doc.data().imgUrl,
    };
    fbSepetim.push(sepet);
  });
  sepetim.value = fbSepetim;
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
  margin-left: 35.5%;
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
