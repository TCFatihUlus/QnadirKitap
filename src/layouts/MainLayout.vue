<template>
  <q-layout>
    <q-header nonelevated id="header">
      <div class="row1">
        <div class="col11" id="col11">
          <img class="logo" id="logo" src="../assets/logo.svg" height="60" />
        </div>
        <div class="col12" id="col12">
          <button
            class="categories-btn"
            id="categories-btn"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="text-dropdown" id="text-dropdown">
              Kategoriler<span class="caret" id="caret"></span>
            </span>
          </button>
        </div>
        <div class="col13" id="col13">
          <a
            title="Online sahaflar, ikinci el kitap satıcıları, kitap dükkanları"
            class="btn-sellers"
            id="btn-sellers"
          >
            <span class="text-sellers" id="text-sellers">
              Kitap Satıcıları
            </span>
          </a>
        </div>
        <div class="col14" id="col14">
          <p class="welcome" id="welcome">
            Hoş geldiniz,
            <a class="btn-signup" id="btn-signup">
              <router-link to="/uyeol" class="text-signup" id="text-signup"
                >Kayıt Ol</router-link
              >
            </a>
            |
            <a class="btn-login" id="btn-login">
              <router-link
                to="/banaozel_siparislerim"
                class="text-login"
                id="text-login"
              >
                Giriş Yap
              </router-link>
            </a>
          </p>
        </div>
        <div class="col15" id="col15">
          <button class="btn-special-for-me" id="btn-special-for-me">
            <img class="icon-user" id="icon-user" src="../assets/180914.png" />
            Bana Özel<span class="caret" id="caret"></span>
          </button>
        </div>
        <div class="col16" id="col16">
          <button clas="btn-shopping-cart" id="btn-shopping-cart">
            <img
              class="icon-shopping-cart"
              id="icon-shopping-cart"
              src="../assets/red-shopping-cart.png"
            />
            <router-link
              to="/sepet"
              class="text-shopping-cart"
              id="text-shopping-cart"
              >Sepetim</router-link
            >
          </button>
        </div>
      </div>
      <div class="row2" id="row2">
        <div class="col21" id="col21">
          <input
            class="searchbar"
            id="searchbar"
            placeholder="Satışta olan 10.961.362 kitap içinde"
            type="text"
            maxlength="50"
            name="kelime"
          />
          <span class="span-search" id="span search">
            <button class="search-btn" id="search-btn" type="submit">
              ARA
            </button>
          </span>
        </div>
        <div class="col22" id="col22">
          <a
            class="search-detalied-btn"
            id="search-detailed-btn"
            title="Kitap arama sayfası - İkinci el kitap ve yeni kitap, dergi, efemera"
            >Detaylı ara</a
          >
        </div>
      </div>
    </q-header>

    <q-drawer show-if-above bordered class="drawer" id="drawer">
      <q-list>
        <q-item-label header> Kitaplar </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <footer class="footer" id="footer"></footer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
//import { readBuilderProgram } from 'typescript';

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
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style>
#header {
  height: 160px;
  width: 100%;
}
#row1 {
  height: 80px;
  width: 100%;
}
#col11 {
  width: 20%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  border-right-style: inset;
  border-color: lightblue;
  border-width: 0.01mm;
}
#col12 {
  width: 10%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  border-left-style: inset;
  border-right-style: inset;
  border-color: lightblue;
  border-width: 0.01mm;
}
#col13 {
  width: 10%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  border-left-style: inset;
  border-right-style: inset;
  border-color: lightblue;
  border-width: 0.01mm;
}
#col14 {
  width: 30%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  border-left-style: inset;
  border-color: lightblue;
  border-width: 0.01mm;
}
#col15 {
  width: 10%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
}
#col16 {
  width: 20%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
}
#row2 {
  background-color: brown;
  height: 80px;
  width: 100%;
}
#col21 {
  display: inline-block;
  width: 80%;
  height: 80px;
}

#col22 {
  display: inline-block;
}
#searchbar {
  height: 50px;
  width: calc(77% - 120px);
  margin-top: 15px;
  margin-left: 120px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: white;
  display: inline-block;
}
#span-search {
  background-color: lightpink;
  display: table-cell;
  position: relative;
  margin-top: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: lightpink;
  height: 50px;
  width: 10%;
}
#search-btn {
  background-color: lightpink;
  display: inline-block;
  margin-left: 0px;
  margin-top: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: lightpink;
  height: 50px;
  width: 10%;
}
#logo {
  vertical-align: top;
  margin-left: 50px;
}
#search-detailed-btn {
  display: inline-block;
  line-height: 80px;
}
#categories-btn {
  display: inline-block;
  height: 80px;
  background-color: white;
  vertical-align: middle;
  width: 100%;
  border: none;
}
#text-dropdown {
  color: darkblue;
  display: inline-block;
}
#btn-sellers {
  display: inline-block;
  height: 80px;
  vertical-align: middle;
  background-color: white;
  border: none;
  width: 100%;
}
#text-sellers {
  color: darkblue;
  display: inline-block;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 80px;
}
#caret {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 2px;
  vertical-align: middle;
  border-top: 4px dashed;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}
#btn-login {
  color: darkblue;
  text-decoration: none;
  display: inline-block;
}
#btn-signup {
  color: darkblue;
  text-decoration: none;
  display: inline-block;
}
#welcome {
  color: black;
  height: 100%;
  line-height: 80px;
  display: inline-block;
  margin-left: 138px;
}
#btn-special-for-me {
  width: 100px;
  height: 30px;
  color: black;
  vertical-align: middle;
  display: inline-block;
  text-align: center;
  margin-top: 25px;
  margin-left: 35px;
  border-style: inset;
  border-width: 0.25mm;
  border-radius: 5px;
  border-color: lightblue;
  background-color: white;
  font-size: smaller;
}
#btn-shopping-cart {
  width: 100px;
  height: 30px;
  color: black;
  vertical-align: middle;
  display: inline-block;
  text-align: center;
  margin-top: 25px;
  border-style: inset;
  border-width: 0.25mm;
  border-radius: 5px;
  border-color: lightblue;
  background-color: white;
  font-size: smaller;
}
#icon-user {
  vertical-align: middle;
  display: inline-block;
}
#icon-shopping-cart {
  vertical-align: middle;
  display: inline-block;
}
#text-signup {
  text-decoration: none;
}
#text-login {
  text-decoration: none;
}
#text-shopping-cart {
  text-decoration: none;
}

#footer {
  background-color: brown;
  height: 100px;
}
#drawer {
  display: inline-block;
}
</style>
