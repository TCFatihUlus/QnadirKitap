<script setup>
import { QForm } from 'quasar';
import { reactive } from 'vue';

import { useAuthStore } from '../stores/auth';

const loginForm = reactive({
  email: undefined,
  password: undefined,
});
const authStore = useAuthStore();
</script>
<template>
  <q-layout>
    <q-page-container>
      <q-item-label class="label-login" id="label-login">
        Üye Girişi
      </q-item-label>

      <q-form class="form1" @submit.prevent="authStore.handleLogin(loginForm)">
        <div class="row3" id="row3">
          <div class="col1" id="col1">
            <div class="col3" id="col3">
              <q-item-label class="label-email" id="label-email">
                Email
              </q-item-label>
              <input
                class="input-email"
                id="input-email"
                placeholder="eposta"
                v-model="loginForm.email"
              />
              <q-item-label> Şifre </q-item-label>
              <input
                type="password"
                class="input-password"
                id="input-password"
                placeholder="Sifre"
                v-model="loginForm.password"
              />
              <div class="row4" id="row4">
                <div class="col5" id="col5">
                  <input type="checkbox" />Beni Hatırla
                </div>
                <div class="col6" id="col6">
                  <a class="label-forgot-password" id="label-forgot-password">
                    Şifremi Unuttum
                  </a>
                </div>
                <button type="submit" class="button-login" id="button-login">
                  Giriş
                </button>
              </div>
            </div>
            <div class="col4" id="col4">
              <q-item-label class="label-not-member" id="label-not-member">
                Üye değil misiniz?
              </q-item-label>
              <button
                on-click="#uyeol"
                class="button-signup"
                id="button-signup"
              >
                <router-link to="/uyeol" id="router-signup"
                  >Üye Olun</router-link
                >
              </button>
              <q-item-label
                class="label-membership-benefits"
                id="label-membership-benefits"
              >
                Üyelik Avantajları;
              </q-item-label>
              <ul class="membership-benefits" id="membership-benefits">
                <li>Güvenli ticaret döngüsü</li>
                <li>Satıcılara mesaj gönderme</li>
                <li>İzleme listesine kitap ekleme</li>
                <li>Sepetinizde kitap saklama</li>
                <li>Favori kelimeler belirleme</li>
              </ul>
            </div>
          </div>

          <div class="col2" id="col2">
            <a class="transaction-guide" id="transaction-guide">
              <img src="../assets/information.png" />
              İşlem Rehberi</a
            >
            <div class="col23" id="col23">
              <ul class="list-transaction-guide" id="list-transaction-guide">
                <li><a>Sistem nasıl işliyor?</a></li>
                <li><a>İstediğim ürünü nasıl alırım?</a></li>
                <li><a>Nasıl ödeme yapabilirim?</a></li>
                <li><a>Kargo ücreti ne kadar?</a></li>
                <li><a>Teslimat süresi nedir?</a></li>
                <li><a>Elden satış imkanı var mı?</a></li>
                <li><a>Ürün hakkında nasıl bilgi alırım?</a></li>
                <li><a>Siparişimi nasıl takip edebilirim?</a></li>
                <li>
                  <a>Birden fazla satıcıdan ürün alırsam nasıl gönderilir?</a>
                </li>
                <li><a>Kargo birleştirme nedir?</a></li>
              </ul>
            </div>
          </div>
        </div>
      </q-form>
    </q-page-container>
  </q-layout>
</template>

<style>
#label-email {
  color: black;
}

#row3 {
  height: 100%;
  margin-top: 10px;
}
#col1 {
  display: inline-block;
  width: 66%;
  height: 400px;
  vertical-align: middle;
  background-color: whitesmoke;
}
#col2 {
  display: inline-block;
  width: 28%;
  margin-left: 30px;
  height: 400px;
  vertical-align: middle;
}
#col23 {
  border-color: gray;
  border-width: 0.00001mm;
  border-style: solid;
}
#col3 {
  display: inline-block;
  width: 50%;
  height: 400px;
  vertical-align: middle;
}
#col4 {
  display: inline-block;
  width: 50%;
  height: 400px;
  vertical-align: middle;
}
#label-login {
  color: black;
  font-size: larger;
  margin-top: 20px;
}
#label-email {
  color: black;
  font-size: large;
  margin-top: 30px;
}
#label-password {
  color: black;
  font-size: large;
}
#row4 {
  height: 50px;
}
#col5 {
  height: 50px;
  width: 50%;
  display: inline-block;
}
#col6 {
  height: 50px;
  width: 50%;
  display: inline-block;
}
#label-forgot-password {
  text-decoration: none;
  color: blue;
}
#input-email {
  width: 80%;
  border-radius: 3px;
  height: 50px;
}
#input-password {
  border-radius: 3px;
  width: 80%;
  height: 50px;
}
#button-login {
  border-radius: 3px;
  width: 80%;
  height: 50px;
  color: white;
  background-color: brown;
}
#label-not-member {
  color: black;
  font-size: large;
  margin-left: 30px;
  margin-top: 30px;
}
#button-signup {
  border-radius: 3px;
  width: 80%;
  height: 50px;
  color: white;
  background-color: brown;
  margin-left: 30px;
  text-decoration: none;
}
.transaction-guide {
  color: brown;
  vertical-align: top;
  text-decoration: none;
  font-size: larger;
}
#router-signup {
  color: white;
  text-decoration: none;
  height: 50px;
  width: 100%;
}

#label-membership-benefits {
  font-size: large;
  margin-left: 27px;
  margin-top: 5px;
}
.form1 {
  height: 100%;
}
</style>
