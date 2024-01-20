<script>
import { defineComponent } from 'vue';

import DropdownMenu from 'src/components/DropdownMenu.vue';

//import { readBuilderProgram } from 'typescript';

export default defineComponent({
  name: 'MainLayout',

  components: {
    DropdownMenu,
  },
});
</script>
<template>
  <q-layout>
    <q-header nonelevated id="header">
      <div class="row1">
        <div class="col11" id="col11">
          <a>
            <router-link to="/">
              <img
                class="logo"
                id="logo"
                src="../assets/logo.svg"
                height="60"
              />
            </router-link>
          </a>
        </div>
        <div class="col12" id="col12">
          <DropdownMenu></DropdownMenu>
        </div>
        <div class="col13" id="col13">
          <a
            title="Online sahaflar, ikinci el kitap satıcıları, kitap dükkanları"
            class="btn-sellers"
            id="btn-sellers"
          >
            <span class="text-sellers" id="text-sellers">
              <router-link class="text-sellers-btn" to="/sahaflar">
                Kitap Satıcıları
              </router-link>
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

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
  <footer class="footer" id="footer"></footer>
</template>

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
  border-right-style: solid;
  border-color: lightblue;
  border-width: 0.01mm;
}
#col12 {
  width: 10%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  border-left-style: solid;
  border-right-style: solid;
  border-color: lightblue;
  border-width: 0.01mm;
}
#col13 {
  width: 10%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  border-left-style: solid;
  border-right-style: solid;
  border-color: lightblue;
  border-width: 0.01mm;
}
#col14 {
  width: 30%;
  height: 80px;
  display: inline-block;
  vertical-align: middle;
  border-left-style: solid;
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
  border-style: solid;
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
  text-decoration: none;
  color: white;
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
  text-decoration: none;
}
.text-sellers-btn {
  text-decoration: none;
  color: darkblue;
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
  border-style: solid;
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
  border-style: solid;
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
  color: black;
}

#footer {
  background-color: brown;
  height: 100px;
}
#drawer {
  display: inline-block;
}
</style>
