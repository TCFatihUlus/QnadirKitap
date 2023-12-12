<template>
  <q-page>
    <div id="row-register1">
      <div class="col-register-lbl" id="col-register-lbl">
        <q-item-label class="label-register" id="label-register">
          Kayıt Ol
        </q-item-label>
      </div>
      <div class="col-login-btn" id="col-login-btn">
        <button class="login-btn-2" id="login-btn-2">
          <router-link
            to="/banaozel_siparislerim"
            class="router-login"
            id="router-login"
            >Giriş Yap</router-link
          >
        </button>
      </div>
    </div>
    <div class="row-register2" id="row-register2">
      <div class="col-register1" id="col-register1">
        <div class="col-register11" id="col-register11">
          <q-item-label class="label-register-form">Ad*:</q-item-label>
          <input class="input-register-form" />
          <q-item-label class="label-register-form">Soyad*:</q-item-label>
          <input class="input-register-form" />
          <q-item-label class="label-register-form">Ülke*:</q-item-label>
          <select class="select-register-form"></select>
          <q-item-label class="label-register-form">Şehir*:</q-item-label>
          <select class="select-register-form"></select>
          <q-item-label class="label-register-form">E-posta*:</q-item-label>
          <input class="input-register-form" />
          <q-item-label class="label-register-form">Şifre*:</q-item-label>
          <input type="password" class="input-register-form" />
          <q-item-label class="label-register-form"
            >Şifre(Tekrar)*:</q-item-label
          >
          <input type="password" class="input-register-form" />
          <div>
            <div class="col-radio1" id="col-radio2">
              <q-item-label class="label-register-form">
                Kampanya, duyuru<br />
                e-postası almak istiyorum:
              </q-item-label>
            </div>
            <div class="col-radio2" id="col-radio2">
              <input type="radio" value="Evet" checked name="ebulten" />
              Evet
              <input type="radio" value="Hayır" name="ebulten" />
              Hayır
            </div>
            <q-item-label id="label-contract">
              <input type="checkbox" /> Kullanıcı Sözleşmesini Kabul Ediyorum
            </q-item-label>
          </div>
          <button id="button-register-form">Gönder</button>
        </div>

        <div class="col-register12" id="col-register12">
          <q-item-label
            class="label-membership-benefits2"
            id="label-membership-benefits2"
            >Üyelik Avantajları;</q-item-label
          >
          <ul class="membership-benefits2" id="membership-benefits2">
            <li>
              Satın almak istediğiniz ürünleri güvenli ticaret döngüsüyle
              rahatlıkla sipariş edebilirsiniz.
            </li>
            <li>
              Ürünlerle ilgili satıcılara mesaj göndererek bilgi alabilirsiniz.
            </li>
            <li>
              Beğendiğiniz ürünleri izlediklerinize ekleyerek daha sonra
              incelemek ya da sipariş etmek üzere saklayabilirsiniz.
            </li>
            <li>
              İlginizi çeken kategorileri ve satıcıları favorilerinize
              ekleyebilir, favori kelimeler oluşturabilirsiniz. Favorilerinizle
              ilgili ürünler siteye eklendiğinde bilgi maili alabilirsiniz.
            </li>
          </ul>
        </div>
      </div>
      <div class="col-register2" id="col-register2">
        <a class="transaction-guide" id="transaction-guide">
          <img src="../assets/information.png" />
          İşlem Rehberi</a
        >
        <div class="col-register2-row2" id="col-register2-row2">
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
  </q-page>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SignUpPage',
});
</script>
<style>
#col-register-lbl {
  display: inline-block;
}
#col-login-btn {
  display: inline-block;
  margin-left: 53.5%;
}
#login-btn-2 {
  border-radius: 3px;
  background-color: brown;
  color: white;
}
#row-register1 {
  margin-top: 10px;
}
#router-login {
  color: white;
  text-decoration: none;
}
#label-register {
  font-size: larger;
}
#row-register2 {
  height: 1000px;
  margin-top: 10px;
}
#col-register1 {
  height: 900px;
  background-color: whitesmoke;
  display: inline-block;
  width: 66%;
}
#col-register2 {
  height: 1000px;
  display: inline-block;
  width: 28%;
  vertical-align: top;
  margin-left: 30px;
}
#col-register2-row2 {
  display: inline-block;
  border-color: gray;
  border-width: 0.00001mm;
  border-style: solid;
}
#list-transaction-guide {
  list-style-type: none;
}
#col-register11 {
  display: inline-block;
  width: 50%;
  height: 800px;
  vertical-align: top;
}
#col-register12 {
  display: inline-block;
  width: 50%;
  height: 800px;
  vertical-align: top;
}
#label-membership-benefits2 {
  font-size: large;
  margin-top: 20px;
}
.label-register-form {
  font-size: large;
  margin-top: 20px;
  margin-left: 20px;
}
.input-register-form {
  width: 90%;
  margin-left: 20px;
  border-radius: 3px;
  height: 50px;
}
.select-register-form {
  width: 90%;
  margin-left: 20px;
  border-radius: 3px;
  height: 50px;
}
#col-radio1 {
  width: 50%;
  display: inline-block;
}
#col-radio2 {
  width: 50%;
  display: inline-block;
}
#label-contract {
  color: blue;
  margin-left: 20px;
}
#button-register-form {
  width: 80%;
  margin-left: 20px;
  background-color: brown;
  vertical-align: top;
  height: 50px;
  border-radius: 3px;
  color: white;
}
</style>
