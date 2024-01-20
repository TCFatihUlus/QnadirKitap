<template>
  <q-page>
    <div>
      <q-list>
        <q-item-label class="bookseller-header" header
          >Sahaflar ve Kitap Satıcıları</q-item-label
        >
        <div class="bookseller-row0">
          <div class="col01">
            <img src="../../dist/spa/icons/icon3.png" />
            <input
              class="searchbar"
              id="searchbar2"
              type="text"
              placeholder="Kitapçı Rumuzu"
            />
          </div>
          <div class="col023">
            <div class="col02">
              <select class="bookseller-select" placeholder="TÜMÜ">
                TÜMÜ
              </select>
            </div>
            <div class="col03">
              <button class="btn-03">Satıcı Bul</button>
            </div>
          </div>
        </div>
        <div class="bookseller-row">
          <div class="bookseller-row2">
            <q-item v-for="(sahaf, index) in sahaflar" :key="index">
              <q-item-label>
                <div class="bookseller-row3">
                  <div class="bookseller-col1">
                    <div class="bookseller-name">
                      {{ sahaf.name }}
                    </div>
                    <div>
                      {{ sahaf.location }}
                    </div>
                  </div>
                  <div class="bookseller-col2">
                    <div class="bookseller-col22">
                      <img src="../../dist/spa/icons/icon1.png" />
                      <q-item-label class="bookseller-label1">
                        Kitaplarını Görmek için tıklayınız
                      </q-item-label>
                    </div>
                    <div class="bookseller-col23">
                      <img src="../../dist/spa/icons/icon2.png" />
                      <q-item-label class="bookseller-label2">
                        Efemeralarını Görmek için tıklayınız
                      </q-item-label>
                    </div>
                  </div>
                </div>
              </q-item-label>
            </q-item>
          </div>
        </div>
      </q-list>
    </div>
  </q-page>
</template>
<script setup>
import {
  getFirestore,
  collection,
  query,
  getDocs,
} from 'firebase/firestore/lite';

import { ref, onMounted } from 'vue';

const sahaflar = ref([]);
onMounted(async () => {
  let fbSahaflar = [];
  const db = getFirestore();
  const q = query(collection(db, 'sahaflar'));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
    const sahaf = {
      id: doc.id,
      name: doc.data().name,
      location: doc.data().location,
    };
    fbSahaflar.push(sahaf);
  });
  sahaflar.value = fbSahaflar;
});
</script>
<style>
.bookseller-name {
  font-size: larger;
  color: brown;
}
.bookseller-col1 {
  display: inline-block;
  width: 40%;
  height: 80px;
}
.bookseller-col2 {
  display: inline-block;
  margin-left: 300px;
  width: 200px;
  height: 80px;
}
.bookseller-col22 {
  display: inline-block;
}
.bookseller-col23 {
  display: inline-block;
}

.bookseller-row0 {
  height: 40px;
  width: 100%;
}
.bookseller-row {
  width: 100%;
  height: 90%;
}
.bookseller-label1 {
  width: 80px;
  height: 30px;
  font-size: small;
}
.bookseller-label2 {
  width: 80px;
  height: 30px;
  font-size: small;
}
.bookseller-row3 {
  border-top-width: 0.001mm;
  border-top-color: gray;

  border-bottom-width: 0.001mm;
  border-bottom-color: gray;
  border-bottom-style: inset;
}
.bookseller-header {
  font-size: larger;
  color: black;
}
.col01 {
  width: 68%;
  display: inline-block;
  border-style: solid;
  border-width: 0.0001mm;
  border-color: gray;
  height: 40px;
}
.col02 {
  width: 99px;
  display: inline-block;
  height: 40px;
}
.col03 {
  width: 99px;
  height: 40px;
  display: inline-block;
}
.col023 {
  width: 200px;
  display: inline-block;
  height: 40px;
}
.btn-03 {
  background-color: brown;
  color: white;
  height: 100%;
  width: 100%;
}
.bookseller-select {
  width: 100%;
  height: 100%;
  color: black;
}
#searchbar2 {
  width: 90%;
  display: inline-block;
  border-style: none;
  height: 100%;
}
</style>
