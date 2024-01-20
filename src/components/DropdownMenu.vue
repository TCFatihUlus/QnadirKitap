<template>
  <div class="q-pa-md2">
    <q-btn-dropdown class="button-categories" label="Kategoriler">
      <div class="dropdown-categories">
        <div class="col-books">
          <q-item-label class="label-dropdown">Kitaplar</q-item-label>

          <div class="col-book12">
            <ul class="list-dropdown1">
              <div class="col-books1">
                <li><a>- Bilim ve Teknik</a></li>
                <li><a>- Çizgi Roman</a></li>
                <li><a>- Din</a></li>
                <li><a>- Edebiyat</a></li>
                <li><a>- Ekonomi & İş Dünyası</a></li>
                <li><a>- Felsefe & Düşünce</a></li>
                <li><a>- Hukuk</a></li>
                <li><a>- Osmanlıca</a></li>
                <li><a>- Referans & Başvuru</a></li>
              </div>
            </ul>

            <ul class="list-dropdown2">
              <div class="col-books2">
                <li><a>- Sağlık</a></li>
                <li><a>- Sanat</a></li>
                <li><a>- Sınav ve Ders Kitapları</a></li>
                <li><a>- Spor</a></li>
                <li><a>- Tarih</a></li>
                <li><a>- Toplum & Siyaset</a></li>
                <li><a>- Diğer & Çeşitli</a></li>
              </div>
            </ul>
          </div>
        </div>
        <div class="col-magazines">
          <q-item-label class="label-dropdown">Dergiler</q-item-label>

          <div class="col-magazines1">
            <ul class="list-dropdown3">
              <li><a>- Bilgisayar</a></li>
              <li><a>- Bilim ve Teknik</a></li>
              <li><a>- Çocuk Dergileri</a></li>
              <li><a>- Din, Felsefe</a></li>
              <li><a>- Edebiyat</a></li>
              <li><a>- Ekonomi, İktisat</a></li>
              <li><a>- Gezi, Coğrafya</a></li>
              <li><a>- Hukuk</a></li>
              <li><a>- Kadın Dergileri</a></li>
              <li><a>- Magazin, Moda</a></li>
            </ul>
          </div>
          <div class="col-magazines2">
            <ul class="list-dropdown4">
              <li><a>- Mimarlık, Dekorasyon</a></li>
              <li><a>- Mizah, Karikatür</a></li>
              <li><a>- Otomobil</a></li>
              <li><a>- Sağlık, Yaşam</a></li>
              <li><a>- Sanat</a></li>
              <li><a>- Spor</a></li>
              <li><a>- Tarih</a></li>
              <li><a>- Toplum & Siyaset</a></li>
              <li><a>- Yeme, İçme</a></li>
              <li><a>- Diğer</a></li>
            </ul>
          </div>
        </div>
        <div class="col-ephemera">
          <q-item-label class="label-dropdown"
            >Sanat & Koleksiyon (Efemera)</q-item-label
          >

          <ul class="list-dropdown5">
            <div class="col-ephemera1">
              <li><a>- Afiş & Poster</a></li>
              <li><a>- Belge, Evrak</a></li>
              <li><a>- Film & Müzik</a></li>
              <li><a>- Fotoğraf & Kartpostal</a></li>
              <li><a>- Gazete Arşivi</a></li>
              <li><a>- Hat & Resim</a></li>
              <li><a>- Obje</a></li>
              <li><a>- Para & Madalya</a></li>
              <li><a>- Plak</a></li>
              <li><a>- Pul & Filateli</a></li>
            </div>
            <div class="col-ephemera2">
              <li><a>- Takvim</a></li>
              <li><a>- Diğer</a></li>
            </div>
          </ul>
        </div>
      </div>
      <div class="all-categories">
        <a class="btn-all-categories">Tüm Kategorileri Gör</a>
      </div>
    </q-btn-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DropdownMenu',
  setup() {
    return {};
  },
});
</script>
<style>
.button-categories {
  background-color: white;
  width: 100%;
  height: 80px;
  color: darkblue;
  box-shadow: none;
  border-style: none;
  text-shadow: none;
  text-align: center;
  border-color: white;
  vertical-align: middle;
  border-radius: 0;
}
.col-books {
  display: inline-block;
  width: 33%;
  vertical-align: top;
}
.col-magazines {
  display: inline-block;
  width: 33%;
}
.col-ephemera {
  display: inline-block;
  width: 33%;
}
.dropdown-categories {
  height: 330px;
  width: 1200px;
}
.label-dropdown {
  font-size: larger;
  color: brown;
  margin-top: 10px;
  margin-left: 10px;
  width: 396px;
}
.list-dropdown1 {
  margin-top: 10px;

  list-style-type: none;
  display: inline-block;
  padding-left: 10px;
}
.list-dropdown2 {
  margin-top: 10px;
  list-style-type: none;
  display: inline-block;
  vertical-align: top;
  padding-left: 10px;
}
.list-dropdown3 {
  margin-top: 10px;
  list-style-type: none;
  display: inline-block;
  padding-left: 10px;
}
.list-dropdown4 {
  margin-top: 10px;
  list-style-type: none;
  display: inline-block;
  padding-left: 10px;
}
.list-dropdown5 {
  margin-top: 10px;
  list-style-type: none;
  padding-left: 10px;
  display: inline-block;
}
.scroll {
  overflow: hidden;
}

.col-books1 {
  display: inline-block;
  height: 189px;
}
.col-books2 {
  display: inline-block;
  height: 189px;
  vertical-align: top;
}
.col-magazines1 {
  display: inline-block;
}
.col-magazines2 {
  display: inline-block;
}
.col-ephemera1 {
  display: inline-block;
}
.col-ephemera2 {
  display: inline-block;
  vertical-align: top;
}
.all-categories {
  height: 40px;
}
.btn-all-categories {
  text-decoration: none;
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
