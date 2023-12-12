<template>
  <div class="q-pa-md2">
    <q-btn-dropdown class="button-categories" label="Kategoriler">
      <div class="dropdown-categories">
        <div class="col-books">
          <q-item-label class="label-dropdown">Kitaplar</q-item-label>
          <ul class="list-dropdown">
            <li><a>Bilim ve Teknik</a></li>
            <li><a>Çizgi Roman</a></li>
            <li><a>Din</a></li>
            <li><a>Edebiyat</a></li>
            <li><a>Ekonomi & İş Dünyası</a></li>
            <li><a>Felsefe & Düşünce</a></li>
            <li><a>Hukuk</a></li>
            <li><a>Referans & Başvuru</a></li>
            <li><a>Sanat</a></li>
            <li><a>Spor</a></li>
            <li><a>Tarih</a></li>
            <li><a>Toplum & Siyaset</a></li>
          </ul>
        </div>
        <div class="col-magazines">
          <q-item-label class="label-dropdown">Dergiler</q-item-label>
          <ul class="list-dropdown">
            <li><a>Bilgisayar</a></li>
            <li><a>Bilim ve Teknik</a></li>
            <li><a>Çocuk Dergileri</a></li>
            <li><a>Din, Felsefe</a></li>
            <li><a>Edebiyat</a></li>
            <li><a>Ekonomi, İktisat</a></li>
            <li><a>Hukuk</a></li>
            <li><a>Magazin, Moda</a></li>
            <li><a>Sağlık, Yaşam</a></li>
            <li><a>Spor</a></li>
            <li><a>Tarih</a></li>
            <li><a>Toplum & Siyaset</a></li>
          </ul>
        </div>
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
  width: 50%;
}
.col-magazines {
  display: inline-block;
  width: 50%;
}
.dropdown-categories {
  height: 500px;
  width: 600px;
}
.label-dropdown {
  font-size: larger;
  color: brown;
  margin-top: 10px;
  margin-left: 10px;
}
.list-dropdown {
  margin-top: 10px;
  margin-left: 10px;
  list-style-type: none;
}
</style>
