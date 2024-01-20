<template>
  <q-page id="row-items-center-justify-evenly">
    <div>
      <div class="col-essentiallinks">
        <q-list class="list-essential">
          <q-item-label header> Kitaplar </q-item-label>

          <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          />
        </q-list>
      </div>
      <div class="col-carouselslide"><CarouselSlide></CarouselSlide></div>
    </div>
    <div>
      <div class="last-added-title">
        <img class="book-logo" src="../assets/booklogo.png" />
        <div class="last-added">
          <q-item-label class="label-last-added"
            ><a>
              <router-link to="/kitap"> Son Eklenenler </router-link></a
            ></q-item-label
          >
        </div>
      </div>
      <ProductCard></ProductCard>
    </div>
  </q-page>
</template>

<script lang="ts" src="">
import { defineComponent, ref } from 'vue';
import { onMounted } from 'vue';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import CarouselSlide from 'src/components/CarouselSlide.vue';
import ProductCard from 'src/components/ProductCard.vue';
import { fapp } from '../boot/firebase';
import EssentialLink from '../components/EssentialLink.vue';
const linksList = [
  {
    title: '> Bilim ve Teknik',

    link: 'https://quasar.dev',
  },
  {
    title: '> Çizgi Roman',

    link: 'https://github.com/quasarframework',
  },
  {
    title: '> Çocuk Kitapları',

    link: 'https://chat.quasar.dev',
  },
  {
    title: '> Din',

    link: 'https://forum.quasar.dev',
  },
  {
    title: '> Edebiyat',

    link: 'https://twitter.quasar.dev',
  },
  {
    title: '> Ekonomi & İş Dünyası',

    link: 'https://facebook.quasar.dev',
  },
  {
    title: '> Felsefe & Düşünce',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Hukuk',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Osmanlıca',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Referans & Başvuru',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Sağlık',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Sanat',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Sınav ve Ders Kitapları',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Spor',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Tarih',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Toplum & Siyaset',

    link: 'https://awesome.quasar.dev',
  },
  {
    title: '> Diğer & Çeşitli',

    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'IndexPage',

  components: { CarouselSlide, ProductCard, EssentialLink },
  setup() {
    const leftDrawerOpen = ref(false);
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
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
.col-carouselslide {
  display: inline-block;
  vertical-align: top;
}
.col-essentiallinks {
  display: inline-block;
  width: 250px;
  background-color: antiquewhite;
  font-size: smaller;
  height: 570px;
}

.q-item {
  min-height: 30px;
  height: 10px;
}
</style>
