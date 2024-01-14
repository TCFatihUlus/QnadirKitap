<template>
  <q-page id="row-items-center-justify-evenly">
    <CarouselSlide></CarouselSlide>
    <div class="last-added-title">
      <img class="book-logo" src="../assets/booklogo.png" />
      <div class="last-added">
        <q-item-label class="label-last-added"
          ><a>Son Eklenenler</a></q-item-label
        >
      </div>
    </div>
    <ProductCard></ProductCard>
  </q-page>
</template>

<script lang="ts" src="">
import { defineComponent } from 'vue';
import { onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import CarouselSlide from 'src/components/CarouselSlide.vue';
import ProductCard from 'src/components/ProductCard.vue';
import { fapp } from '../boot/firebase';

export default defineComponent({
  name: 'IndexPage',

  components: { CarouselSlide, ProductCard },
  setup() {
    onMounted(async () => {
      const db = getFirestore(fapp);
      const fbDataName = collection(db, 'books');
      const fbDocs = await getDocs(fbDataName);
      const data = fbDocs.docs.map((doc) => doc.data());
      const docID = fbDocs.docs.map((doc) => doc.id);
      console.log(docID);
      console.log(data);
      return data;
    });
  },
  data() {
    return {
      cart: [{}],
    };
  },
  methods: {},
});
</script>
<style>
#row-items-center-justify-evenly {
  height: 1500px;
}
.products {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.product {
  display: inline-block;
}
.product-image {
  display: block;
  margin-left: 25px;
}
.product-author {
  display: inline-block;
}
.product-cost {
  display: inline-block;
}
.product-name {
  display: block;
}
.label-last-added {
  font-size: larger;
  color: brown;
}
.book-logo {
  display: inline-block;
}
.last-added {
  display: inline-block;
}
.last-added-title {
  margin-top: 20px;
}
</style>
