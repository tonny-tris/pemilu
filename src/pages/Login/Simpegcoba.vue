<template>
  <v-app>
    <v-dialog v-model="loading" fullscreen full-width>
        <v-container fluid fill-height style="background-color: rgba(255, 255, 255, 0.5);">
          <v-layout justify-center align-center>
            <v-progress-circular
              :size="250"
              :width="7"
              indeterminate
              color="primary">
            </v-progress-circular>
          </v-layout>
        </v-container>
    </v-dialog>
    <v-container fluid v-if="load">
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/icon.png" contain></v-img>
            <p>SIMPEG</p>
          </div>
        </v-col>
        <v-col cols="12" lg="5" class="login-part d-flex align-center justify-center">
          <v-row no-gutters class="align-start">
            <v-col cols="12" class="login-part d-flex align-center justify-center flex-column">
              <div class="login-wrapper pt-md-4 pt-0">
                <v-tabs grow>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#tab-login`">
                    LOGIN
                  </v-tab>
                  <!-- <v-tab :href="`#tab-newUser`">
                    New User
                  </v-tab> -->

                  <v-tab-item :value="'tab-login'" >
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium my-10">Sistem Informasi Kepegawaian</p>
                            <!-- <v-btn height="45" block color="white" elevation="0" class="google text-capitalize">
                              <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                              Sign in with Google</v-btn> -->
                          </v-col>
                          <v-col cols="12" class="d-flex align-center my-8">
                            <v-divider></v-divider>
                            <span class="px-5"> Selamat Datang </span>
                            <v-divider></v-divider>
                          </v-col>
                          <v-form>
                            <v-col>
                              <v-text-field
                                  v-model="username"
                                  :rules="usernameRules"
                                  label="Username"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="password"
                                  :rules="passwordRules"
                                  type="password"
                                  label="Password"
                                  hint="Password SIMPEG"
                                  required
                              ></v-text-field>

                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                  class="text-capitalize"
                                  large
                                  :disabled="password.length === 0 || username.length === 0"
                                  color="primary"
                                  @click="loginsimpeg"
                              >
                                Masuk</v-btn>
                              <!-- <v-btn
                                  class="text-capitalize"
                                  large
                                  :disabled="password.length === 0 || username.length === 0"
                                  color="primary"
                                  @click="loginsipijar"
                              >
                                Sipijar</v-btn> -->
                              <!-- <v-btn large text class="text-capitalize primary--text">Forget Password</v-btn> -->
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>

                  <!-- <v-tab-item :value="'tab-newUser'" >
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">

                          <v-col>
                            <p class="login-slogan display-2 text-center font-weight-medium mt-10">Welcome!</p>
                            <p class="login-slogan display-1 text-center font-weight-medium mb-10">Create your account</p>
                          </v-col>

                          <v-form>
                            <v-col>
                              <v-text-field
                                  v-model="createFullName"
                                  label="Full Name"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="createEmail"
                                  :rules="emailRules"
                                  label="Email Address"
                                  required
                              ></v-text-field>
                              <v-text-field
                                  v-model="createPassword"
                                  :rules="passRules"
                                  type="password"
                                  label="Password"
                                  hint="At least 6 characters"
                                  required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                  large
                                  block
                                  :disabled="createFullName.length === 0 || createEmail.length === 0 || createPassword === 0"
                                  color="primary"
                                  @click="login"
                              >
                                Create your account</v-btn>
                            </v-col>
                          </v-form>

                          <v-col cols="12" class="d-flex align-center my-4">
                            <v-divider></v-divider>
                            <span class="px-5"> or </span>
                            <v-divider></v-divider>
                          </v-col>

                          <v-btn height="45" block color="white" elevation="0" class="google text-capitalize">
                            <v-img src="@/assets/google.svg" max-width="30" class="mr-4"></v-img>
                            Sign in with Google</v-btn>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item> -->

                </v-tabs>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">© 2022 <a href="https://kominfo.bondowosokab.go.id" class="text-decoration-none">Dinas Komunikasi Dan Informatika</a></div>
              </v-footer>
            </v-col>
            
          </v-row>
        </v-col>
        
      </v-row>
      
    </v-container>
  </v-app>
</template>

<script>
  import ServiceAPI from "../../services/service";

  export default {
    name: 'Simpegcoba',
    data() {
      return {
        loading: true,
        load: false,
        username: '',
        usernameRules: [
          v => !!v || 'Username is required',
          v => v.length >= 18 || 'Min 18 characters'
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 1 || 'Min 1 characters'
        ]
      }
    },
    methods: {
      loginsimpeg(){
        this.loading = true
        var data = {
          username: this.username,
          password: this.password,
          jenis: 'simpeg'
        }
        var datacredential = {
            username: this.username,
            password: this.password,
            jenis: 'simpeg'
        }
        ServiceAPI.getPuppeter(data)
          .then((response) => {
            var halaman = response.data.response.data.halaman_simpeg[0].halaman
            var koki = []
            var hasil = response.data.response.data.halaman_simpeg[1].session
            hasil.forEach(element => {
              koki.push(element)
            });
            for(var i=0;i<koki.length;i++){
              var sesi
              var nama = koki[i].name
              if(nama.includes("laravel")){
                sesi = "Session"
              }else{
                sesi = new Date(koki[i].expires * 1000)
              }
              window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
            }
            ServiceAPI.insertCredential(datacredential).then((res) => {
              console.log(halaman)
                if(halaman == 'http://simpeg.bondowosokab.go.id/auth/login'){
                  this.loading = false
                }else{
                  this.loading = false
                  console.log(res)
                  window.location.href = "http://simpeg.bondowosokab.go.id/dashboard"; 
                }
            })
            // window.location.href = "http://simpeg.bondowosokab.go.id/dashboard"; 
          })
          .catch((e) => {
            this.loading = false
            console.log(e)
          });
      },
      loginsipijar(){
        var data = {
          username: this.username,
          password: this.password
        }
        var datacredential = {
            username: this.username,
            password: this.password
        }
        ServiceAPI.getPuppeterSipijar(data)
          .then((response) => {
            var koki = []
            var hasil = response.data.response.data.halaman_sipijar[1].session
            hasil.forEach(element => {
              koki.push(element)
            });
            for(var i=0;i<koki.length;i++){
              var sesi
              var nama = koki[i].name
              if(nama.includes("laravel")){
                sesi = "Session"
              }else{
                sesi = new Date(koki[i].expires * 1000)
              }
              window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id';
            }
            ServiceAPI.insertCredential(datacredential).then((res) => {
                console.log(res)
                window.location.href = "http://sipijar.bondowosokab.go.id/sipijar_v2/"; 
            })
            // window.location.href = "http://sipijar.bondowosokab.go.id/sipijar_v2/"; 
          })
          .catch((e) => {
            console.log(e)
          });
      }
    },
    async beforeCreate() {
      this.loading = true
      this.load = false
      console.log(this.$route.query.id)
      // var datacari = {
      //     user_id: this.$route.query.id,
      //     apps_id: 'simpeg'
      //   }
      // await ServiceAPI.cariCredentialApps(datacari)
      //     .then((response) => {
            // var is_ssl = window.location.protocol === "https:";
            // var ss = is_ssl ? ";SameSite=None" : ";SameSite=Lax";
            // var sec = is_ssl ? ";secure" : "";
            // if(response.data.response.data.length != 0){
            //     var dataketemu = {
            //     userapps_id: response.data.response.data[0].id
            //   }
            //   ServiceAPI.cariCredentialLogin(dataketemu).then((res) => {
            //       if(res.data.response.data.length != 0){
                    var data = {
                    username: "199210252020121011",
                    password: "Tonny@kominfo2020"
                    }
                    // var datacredential = {
                    //     username: res.data.response.data[0].username,
                    //     password: res.data.response.data[0].password
                    // }
                    ServiceAPI.getPuppeter(data)
                      .then((response) => {
                        alert(response.data.response.data.halaman_simpeg[0].halaman)
                        // var halaman = response.data.response.data.halaman_simpeg[0].halaman
                        var koki = []
                        var hasil = response.data.response.data.halaman_simpeg[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                          var nama = koki[i].name
                          if(nama.includes("laravel")){
                            sesi = "Session"
                          }else{
                            // sesi = new Date(koki[i].expires * 1000)
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                          window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        // ServiceAPI.insertCredential(datacredential).then((res) => {
                        //     if(halaman == 'http://simpeg.bondowosokab.go.id/auth/login'){
                        //       this.loading = false
                        //     }else{
                        //       this.loading = false
                        //       console.log(res)
                        //       window.location.href = "http://simpeg.bondowosokab.go.id/dashboard";
                        //     }
                        // })
                        this.loading = false
                        console.log(response)
                        window.location.href = "http://simpeg.bondowosokab.go.id/dashboard"; 
                      })
                  // }else{
                  //   this.loading = false
                  //   this.load = true
                  // }
              // })
            // }else{
            //   this.loading = false
            //   this.load = true
            // }
          // })
    },
  }

</script>

<style src="./Login.scss" lang="scss"/>
