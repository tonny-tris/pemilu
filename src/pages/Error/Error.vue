<template>
  <v-app>
    <v-container fluid class="error-page">
      <v-row class="logo-wrapper">
        <v-img src="@/assets/icon.png" contain width="62" height="48"></v-img>
        <span class="logo-title">INTEGRATOR</span>
      </v-row>
      <v-row class="d-flex justify-center">
        <v-col cols="8">
          <div class="card">
            <span class="error-logo">404</span>
            <p class="error-text">Oops. Halaman Yang Anda Cari Tidak Ditemukan</p>
            <p class="error-subtext">Kami Akan Membawa Anda Kembali</p>

            <v-btn
                class="text-capitalize"
                dark
                x-large
                :color="config.light.primary"
                @click="beranda"
            >
              Kembali Ke Beranda
            </v-btn>
          </div>
        </v-col>
      </v-row>
  </v-container>
  </v-app>
</template>

<script>
import config from '@/config';

export default {
  name: 'CobaError',
  data(){
    return{
      config
    }
  },
  methods: {
    beranda() {
      window.location.href = "https://satudata.bondowosokab.go.id/";
    }
  }
};
</script>

<style src="./Error.scss" lang="scss"></style>
