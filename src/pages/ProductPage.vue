<script setup>
import {
  getFirestore,
  collection,
  query,
  getDocs,
} from 'firebase/firestore/lite';

import { ref, onMounted } from 'vue';

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
  <q-page>
    <q-item v-for="(kitap, index) in kitaplar" :key="index">
      <div class="productcard-row1">
        <div class="productcard-col1">
          <img :src="kitap.imgUrl" />
        </div>
        <div class="productcard-col2">
          <div class="productcard-row21">
            {{ kitap.name }}
          </div>
          <div class="productcard-row22">
            {{ kitap.author }}
          </div>
          <div class="productcard-row23">
            <div>
              <q-item-label id="product-info-label1"> Satıcı: </q-item-label>
              &nbsp;
              <a id="bookseller-name">{{ kitap.bookseller }}</a>
            </div>
            <div>
              <q-item-label id="product-info-label2"> Yayınevi: </q-item-label>
              &nbsp;
              <q-item-label id="publishing-house-name"
                >{{ kitap.publishingHouse }},{{ kitap.year }}</q-item-label
              >
            </div>
          </div>
        </div>
        <div class="productcard-col3">
          <div class="productcard-row31">
            <div class="productcard-col311">Alıcıya Ait</div>
            &nbsp; &nbsp;
            <div class="productcard-col312">{{ kitap.cost }}TL</div>
          </div>
          <div>
            <button class="btn-add-cart">
              <img src="../assets/red-shopping-cart2.png" />Sepete Ekle
            </button>
          </div>
        </div>
      </div>
    </q-item>
  </q-page>
</template>
<style>
.productcard-row1 {
  height: 200px;

  border-bottom-style: inset;
  border-color: gray;
  border-width: 0.0001mm;
}
.productcard-col1 {
  display: inline-block;
  width: 200px;
}
.productcard-col2 {
  display: inline-block;
  width: 600px;
}
.productcard-col3 {
  display: inline-block;
}
.productcard-col311 {
  display: inline-block;
}
.productcard-col312 {
  display: inline-block;
}
.productcard-row21 {
  color: blue;
  font-size: larger;
}
#bookseller-name {
  color: brown;
  display: inline-block;
}
#publishing-house-name {
  display: inline-block;
}
#product-info-label1 {
  display: inline-block;
  color: gray;
}
#product-info-label2 {
  display: inline-block;
  color: gray;
}
.btn-add-cart {
  color: brown;
  background-color: antiquewhite;
}
</style>
