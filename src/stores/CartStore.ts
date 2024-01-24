import { defineStore } from 'pinia';
import {
  getFirestore,
  collection,
  query,
  getDocs,
} from 'firebase/firestore/lite';

import { ref } from 'vue';
const kitaplar = ref([]);
export const useCartStore = defineStore('CartStore', {
  state: () => {
    let fbKitaplar = [];
    const db = getFirestore();
    const q = query(collection(db, 'kitaplar'));
    const querySnapshot = getDocs(q);

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
  },
});
