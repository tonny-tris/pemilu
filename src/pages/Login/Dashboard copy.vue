<template>
<div id="app">
  <v-app class="api">
  <v-dialog v-model="loading" fullscreen full-width>
        <v-container fluid fill-height style="background-color: rgba(255, 255, 255, 0.5);">
          <v-layout align-center justify-center column fill-height>
            <v-flex row align-center mb-2>
                <v-progress-circular
                  :size="200"
                  :width="15"
                  indeterminate
                  color="#00113f">
                </v-progress-circular>
            </v-flex>
            <v-flex row align-center>
                <strong class="#00113f--text">LOADING ...</strong>
            </v-flex>
        </v-layout>
        </v-container>
  </v-dialog>
  <v-dialog persistent v-model="loadinglogin" fullscreen full-width>
        <v-container fluid fill-height style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card
                    overflow-hidden
                    elevate-on-scroll
                    scroll-target="#ifrmlogin"
                    color="white"
                    width="100%"
                    height="10%"
                  >
                    <v-toolbar height="72%">
                      <v-app-bar-nav-icon></v-app-bar-nav-icon>

                      <v-toolbar-title>{{namaaplikasi}}</v-toolbar-title>

                      <v-spacer></v-spacer>

                      <v-btn icon @click="loadinglogin=false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                  </v-card>
                <!-- <iframe width="100%" height="90%" id="ifrmlogin" src="http://integrator.bondowosokab.go.id:8080/#/loginbaru"></iframe> -->
                <v-app id="inspired">
                      <v-content>
                        <v-container fluid fill-height>
                            <v-layout align-center justify-center>
                              <v-flex xs12 sm8 md4>
                                  <v-card class="elevation-12 cardColor">
                                    <!-- <v-toolbar dark color="primary">
                                        <v-toolbar-title>Login form</v-toolbar-title>
                                    </v-toolbar> -->
                                    <v-row align="center" justify="center">
                                    <v-img src="@/assets/images/loginbaru.svg" max-width="300" max-height="200" class="mb-2"></v-img>
                                    </v-row>
                                    <v-card-text align="center">
                                        <p style="font-size:1.875em" class="text-2xl font-weight-bold text--primary mb-2">
                                            LOGIN REQUIRED
                                        </p>
                                    </v-card-text>
                                    <v-card-text>
                                        <v-form>
                                        <v-text class="text--primary">Username</v-text>
                                          <v-text-field
                                                solo
                                                label="Username"
                                                v-model="usernamebaru"
                                                clearable
                                            ></v-text-field>
                                        <v-text class="text--primary">Password</v-text>
                                          <v-text-field
                                                solo
                                                label="Password"
                                                v-model="passwordbaru"
                                                clearable
                                            ></v-text-field>
                                          <v-btn block color="#224D96" class="white--text" @click="loginbaru">Masuk</v-btn>
                                        </v-form>
                                    </v-card-text>
                                    <v-card-actions>
                                        <!-- <v-spacer></v-spacer> -->
                                        <!-- <v-btn color="primary" to="/">Login</v-btn> -->
                                    </v-card-actions>
                                  </v-card>
                              </v-flex>
                            </v-layout>
                        </v-container>
                      </v-content>
                  </v-app>
        </v-container>
  </v-dialog>
  <v-dialog persistent v-model="frame" fullscreen full-width>
        <v-container fluid fill-height style="background-color: rgba(255, 255, 255, 0.5);">
                <v-card
                    overflow-hidden
                    elevate-on-scroll
                    scroll-target="#ifrm"
                    color="white"
                    width="100%"
                    height="10%"
                  >
                    <v-toolbar height="72%">
                      <v-app-bar-nav-icon></v-app-bar-nav-icon>

                      <v-toolbar-title>{{namaaplikasi}}</v-toolbar-title>

                      <v-spacer></v-spacer>

                      <v-btn icon @click="tutup">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-toolbar>
                  </v-card>
                  <!-- <script :src='alamaturl' type='text/javascript' async='async'></script> -->
                <iframe width="100%" height="90%" id="ifrm" :src="alamaturl"></iframe>
                <!-- <i-vue-frame sandbox width="100%" height="90%" :src=alamaturl /> -->
                <!-- <object :data="alamaturl" width="400" height="300" type="text/html">
                    Alternative Content
                </object> -->
        </v-container>
  </v-dialog>
    <v-container fluid grid-list-xl>
      <v-layout wrap justify-space-around>
        <v-flex v-for="item in images" v-bind:key="item.num">
          <v-card color="rgb(255, 255, 255, 0.18)" class="elevation-12 rounded-xl"  width="350px" height="430px">
            <!-- <v-card-text>{{ image.num }}</v-card-text> -->
            <v-flex>
            <v-card class="mb-6 rounded-lg cardColorr" height="266px">
            <table width="100%" height="100%" align="center" valign="center">
            <tr><td>
                <img class="center" :src="getImgUrl(item.src)" alt="foo" align="center"/>
            </td></tr>
            </table>
            <!-- <img class="center" :src="getImgUrl(item.src)" align="center" /> -->
            </v-card>
            <v-col>
            <v-row sm="6"> <strong class="white--text" style="text-transform:uppercase">{{item.apps}}</strong> </v-row>
            <v-row sm="6"> <b class="mb-2" style="color:#bbbdbf">{{item.singkatan}}</b></v-row>
            </v-col>
            <!-- <v-card-media :src="item.src" height="200px"></v-card-media> -->
            <v-btn block color="blue" class="white--text" @click="coba(item.singkatan, item.apps, item.id)">Masuk</v-btn>
            </v-flex>
          </v-card>
        </v-flex>
        <v-flex v-for="imag in images" :key="imag.num" class="flex-empty">
          <div></div>
        </v-flex>
      </v-layout>
    </v-container>
    <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @logoutApp="logout"
    ></fab>
  </v-app>
</div>
</template>

<script>
import ServiceAPI from "../../services/service";
import fab from 'vue-fab'
export default{
  name: 'Dashboard',
  components: {
    fab
  },
  data () {
    return {
        // images: [{"src": "icon.png", "num": "1"}, {"src": "icon.png", "num": "2"}, {"src": "icon.png", "num": "3"}, {"src": "icon.png", "num": "4"}, {"src": "icon.png", "num": "5"}, {"src": "icon.png", "num": "6"}, {"src": "icon.png", "num": "7"}],
        images: Array,
        position: 'bottom-right',
        bgColor: '#099440',
        fabActions: [
              {
                  name: 'logoutApp',
                  icon: 'logout'
              }
        ],
        loading: false,
        loadinglogin: false,
        frame: false,
        frames: false,
        namaaplikasi: '',
        namaaplikasipilih: '',
        idaplikasipilih: '',
        alamaturl: '',
        usernamebaru: '',
        passwordbaru: '',
        usertersimpan: '',
        sipp: 'https://satudata.bondowosokab.go.id/sipp/',
        bukutamu: 'http://satudata.bondowosokab.go.id/bukutamu/',
        ikm: 'http://satudata.bondowosokab.go.id/ikm/',
        bondowosoku: 'http://bondowosoku.bondowosokab.go.id/admin',
        bondowosokab: 'https://bondowosokab.go.id/admin/dashboard',
        sibuba: 'http://sibuba.bondowosokab.go.id/dashboard',
        esurat: '',
        said: 'https://said.bondowosokab.go.id/info',
        sinobo: 'http://satudata.bondowosokab.go.id/sinobo/',
        sinka: 'http://sinka.bondowosokab.go.id/dashboard',
        siabbagor: 'https://siabbagor.bondowosokab.go.id/dashboard',
        simpeg: 'http://simpeg.bondowosokab.go.id/dashboard',
        sipijar: 'http://sipijar.bondowosokab.go.id/sipijar_v2/',
        keris: 'http://keris.bondowosokab.go.id/',
    }
  },
  methods: {
    async coba(singkatan, nama, id) {
      window.document.cookie = "HASH_XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "HASH_laravel_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "laravel_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "PHPSESSID=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "_csrf=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "_identity=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "HASH_ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "webprofil_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      this.namaaplikasi = singkatan
      this.namaaplikasipilih = nama
      this.idaplikasipilih = id
      if(this.namaaplikasipilih == 'sipp'){
        this.loginsipp()
      }else if(this.namaaplikasipilih == 'bukutamu'){
        this.loginbukutamu()
      }else if(this.namaaplikasipilih == 'ikm'){
        this.loginikm()
      }else if(this.namaaplikasipilih == 'bondowosoku'){
        this.loginbondowosoku()
      }else if(this.namaaplikasipilih == 'bondowosokab'){
        this.loginbondowosokab()
      }else if(this.namaaplikasipilih == 'sibuba'){
        this.loginsibuba()
      }else if(this.namaaplikasipilih == 'esurat'){
        alert("Segera Hadir")
      }else if(this.namaaplikasipilih == 'said'){
        this.loginsaid()
      }else if(this.namaaplikasipilih == 'sinobo'){
        this.loginsinobo()
      }else if(this.namaaplikasipilih == 'sinka'){
        this.loginsinka()
      }else if(this.namaaplikasipilih == 'siabbagor'){
        this.loginsiabbagor()
      }else if(this.namaaplikasipilih == 'simpeg'){
        this.loginsimpeg()
      }else if(this.namaaplikasipilih == 'sipijar'){
        this.loginsipijar()
      }else if(this.namaaplikasipilih == 'keris'){
        this.loginkeris()
      }else if(this.namaaplikasipilih == 'ppid'){
        alert("Segera Hadir")
      }else if(this.namaaplikasipilih == 'sikda'){
        alert("Segera Hadir")
      }
    },
    async loginsimpeg() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: response.data.response.data[0].password_encoded
                    }
                    ServiceAPI.getPuppeter(data)
                      .then((response) => {
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
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                          window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              this.alamaturl = this.simpeg
                              // this.alamaturl = 'http://localhost/#/logindashboard'
                              // this.alamaturl = urlphp
                              this.loading = false
                              this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginsipijar() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: response.data.response.data[0].password_encoded
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
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                          window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              this.alamaturl = this.sipijar
                              this.loading = false
                              this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginsipp() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: response.data.response.data[0].password_encoded
                    }
                    ServiceAPI.getPuppeterSipp(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_sipp[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                          var nama = koki[i].name
                          if(nama.includes("_csrf")){
                            sesi = "Session"
                          }else if(nama.includes("PHPSESSID")){
                            sesi = "Session"
                         }
                          else{
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                            // window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; domain=.bondowosokab.go.id ; path=/ ; SameSite=None ; Secure'
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; domain=.bondowosokab.go.id ; path=/ ; SameSite=Lax'
                        }
                              // this.alamaturl = this.sipp
                              // this.alamaturl = 'https://satudata.bondowosokab.go.id/sipp?username=199210252020121011'
                              // this.alamaturl = 'https://connect.bondowosokab.go.id:8085/#/dashboard'
                              this.loading = false
                              window.open(this.sipp);
                              // this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginsinobo() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: response.data.response.data[0].password_encoded
                    }
                    ServiceAPI.getPuppeterSipp(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_sipp[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                          var nama = koki[i].name
                          if(nama.includes("_csrf")){
                            sesi = "Session"
                          }else if(nama.includes("PHPSESSID")){
                            sesi = "Session"
                         }
                          else{
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; domain=.bondowosokab.go.id ; path=/ ; SameSite=Lax'
                        }
                              // this.alamaturl = this.sipp
                              // this.alamaturl = 'https://satudata.bondowosokab.go.id/sipp?username=199210252020121011'
                              this.loading = false
                              window.open(this.sinobo);
                              // this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginikm() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: response.data.response.data[0].password_encoded
                    }
                    ServiceAPI.getPuppeterSipp(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_sipp[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                          var nama = koki[i].name
                          if(nama.includes("_csrf")){
                            sesi = "Session"
                          }else if(nama.includes("PHPSESSID")){
                            sesi = "Session"
                         }
                          else{
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; domain=.bondowosokab.go.id ; path=/ ; SameSite=Lax'
                        }
                              // this.alamaturl = this.sipp
                              // this.alamaturl = 'https://satudata.bondowosokab.go.id/sipp?username=199210252020121011'
                              this.loading = false
                              window.open(this.ikm);
                              // this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginbukutamu() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: response.data.response.data[0].password_encoded
                    }
                    ServiceAPI.getPuppeterSipp(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_sipp[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                          var nama = koki[i].name
                          if(nama.includes("_csrf")){
                            sesi = "Session"
                          }else if(nama.includes("PHPSESSID")){
                            sesi = "Session"
                         }
                          else{
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; domain=.bondowosokab.go.id ; path=/ ; SameSite=Lax'
                        }
                              // this.alamaturl = this.sipp
                              // this.alamaturl = 'https://satudata.bondowosokab.go.id/sipp?username=199210252020121011'
                              this.loading = false
                              window.open(this.bukutamu);
                              // this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginsibuba() {
      this.loading = true
      var datacari = {
          userapps_id: this.idaplikasipilih
        }
      await ServiceAPI.cariCredentialLogin(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: response.data.response.data[0].username,
                    password: response.data.response.data[0].password
                    }
                    ServiceAPI.getPuppeterSibuba(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_sibuba[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              this.alamaturl = this.sibuba
                              this.loading = false
                              this.frame = true
                      })
            }else{
              this.loading = false
              this.loadinglogin = true
            }
          })
    },
    async loginsinka() {
      this.loading = true
      var datacari = {
          userapps_id: this.idaplikasipilih
        }
      await ServiceAPI.cariCredentialLogin(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: response.data.response.data[0].username,
                    password: response.data.response.data[0].password
                    }
                    ServiceAPI.getPuppeterSinka(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_sinka[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              this.alamaturl = this.sinka
                              this.loading = false
                              this.frame = true
                      })
            }else{
              this.loading = false
              this.loadinglogin = true
            }
          })
    },
    async loginsaid() {
      this.loading = true
      var datacari = {
          userapps_id: this.idaplikasipilih
        }
      await ServiceAPI.cariCredentialLogin(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: response.data.response.data[0].username,
                    password: response.data.response.data[0].password
                    }
                    ServiceAPI.getPuppeterSaid(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_said[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              // this.alamaturl = this.said
                              this.loading = false
                              window.open(this.said)
                              // this.frame = true
                      })
            }else{
              this.loading = false
              this.loadinglogin = true
            }
          })
    },
    async loginsiabbagor() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: response.data.response.data[0].id.toString()
                    }
                    ServiceAPI.getPuppeterSiabbagor(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_siabbagor[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              this.alamaturl = this.siabbagor
                              this.loading = false
                              this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginbondowosoku() {
      this.loading = true
      var datacari = {
          userapps_id: this.idaplikasipilih
        }
      await ServiceAPI.cariCredentialLogin(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: response.data.response.data[0].username,
                    password: response.data.response.data[0].password
                    }
                    ServiceAPI.getPuppeterBondowosoku(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_bondowosoku[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              this.alamaturl = this.bondowosoku
                              this.loading = false
                              this.frame = true
                      })
            }else{
              this.loading = false
              this.loadinglogin = true
            }
          })
    },
    async loginbondowosokab() {
      this.loading = true
      var datacari = {
          userapps_id: this.idaplikasipilih
        }
      await ServiceAPI.cariCredentialLogin(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: response.data.response.data[0].username,
                    password: response.data.response.data[0].password
                    }
                    ServiceAPI.getPuppeterBondowosokab(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_bondowosokab[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              this.alamaturl = this.bondowosokab
                              this.loading = false
                              this.frame = true
                      })
            }else{
              this.loading = false
              this.loadinglogin = true
            }
          })
    },
    async loginkeris() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: response.data.response.data[0].password_encoded
                    }
                    ServiceAPI.getPuppeterKeris(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_keris[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                              this.alamaturl = this.keris
                              // this.alamaturl = 'http://localhost/#/logindashboard'
                              // this.alamaturl = urlphp
                              this.loading = false
                              this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginbaru() {
         var data = {
            nip: this.$globalData.nip,
            username: this.usernamebaru,
            password: this.passwordbaru,
            jenis: this.namaaplikasipilih
         }
         console.log(data)
         await ServiceAPI.insertCredential(data).then((response) => {
            if(response.data.response.data.length != 0){
              this.loadinglogin = false
              if(this.namaaplikasipilih.includes('sibuba')){
                return this.loginsibuba()
              }else if(this.namaaplikasipilih.includes('bondowosoku')){
                return this.loginbondowosoku()
              }else if(this.namaaplikasipilih.includes('bondowosokab')){
                return this.loginbondowosokab()
              }else if(this.namaaplikasipilih.includes('esurat')){
                return this.loginesurat()
              }else if(this.namaaplikasipilih.includes('said')){
                return this.loginsaid()
              }else if(this.namaaplikasipilih.includes('sinka')){
                return this.loginsinka()
            }else{
              this.loadinglogin = false
            }
            }
         })
      },
    tutup() {
      this.alamaturl = ''
      this.frame = false
    },
    logout() {
      window.localStorage.clear();
      this.$router.push({path: '/logindashboard'})
    },
    getImgUrl: function (imagePath) {
      return require('@/assets/' + imagePath);
    },
    getImgUrll: function (imagePath) {
      return require('@/assets/images/' + imagePath);
    },
  },
  created() {
    // alert(login.data().dataLogin)
    // var refreshdata = this.$globalData.dataLogin
    // var refreshdata = []
    var user = JSON.parse(localStorage.getItem("nipat") || '[]')
    this.usertersimpan = user.toString()
    var refreshdata = JSON.parse(localStorage.getItem("resultat") || '[]')
    if(refreshdata.length != 0){
      var data = []
      for(var i = 0; i < refreshdata.length; i++){
        data.push({"src":refreshdata[i].apps_id + ".png", "num": i+1, "apps":refreshdata[i].apps_id, "singkatan":refreshdata[i].singkatan, "id":refreshdata[i].id})
        this.images = data
        // alert(this.images.apps[0])
      }
    }else{
        this.$router.push({path: '/logindashboard'})
    }
    // alert(data[0].apps)
    // alert(this.$globalData.dataLogin.length)
  }

  }

</script>

<style lang="scss">
.flex {
  flex-grow: 0;
}

.flex-empty {
  height: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  
  div {
    width: 350px;
  }
}

.api {
    padding-top: 30px !important;
    padding-bottom: 30px !important;
    background-color: #00113f !important;
}

.cardColorr {
   background-color: rgba(255, 255, 255, 1) !important;
   border-color: transparent !important;
 }

.center {
  display: block;
  margin: auto;
  width: 100%;
  align: center;
}
</style>