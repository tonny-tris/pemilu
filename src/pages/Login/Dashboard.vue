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
                                                type="password"
                                                v-on:keyup.enter="loginbaru"
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
  <v-dialog persistent v-model="loadinglogin2" fullscreen full-width>
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

                      <v-btn icon @click="loadinglogin2=false">
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
                                                type="password"
                                                v-on:keyup.enter="loginbaru2"
                                                clearable
                                            ></v-text-field>
                                          <v-btn block color="#224D96" class="white--text" @click="loginbaru2">Masuk</v-btn>
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
  <v-dialog persistent v-model="frames" fullscreen full-width>
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
      @whatsApp="whatsapp"
    ></fab>
    <!-- <fab
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @whatsApp="whatsapp"
    ></fab> -->
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
              },
              {
                  name: 'whatsApp',
                  icon: 'phone'
              }
        ],
        loading: false,
        loadinglogin: false,
        loadinglogin2: false,
        jumlahreload: 0,
        jumlahreloadbondowosoku: 0,
        jumlahreloadsikda: 0,
        jumlahreloadsaid: 0,
        jumlahreloadppid: 0,
        jumlahreloadesurat: 0,
        jumlahreloadikm: 0,
        jumlahreloadkeris: 0,
        jumlahreloadsiabbagor: 0,
        jumlahreloadsimpeg: 0,
        jumlahreloadsinobo: 0,
        jumlahreloadsipijar: 0,
        jumlahreloadsipp: 0,
        jumlahreloadsibuba: 0,
        jumlahreloadsinka: 0,
        jumlahreloadbondowosokab: 0,
        jumlahreloadbukutamu: 0,
        frame: false,
        frames: false,
        namaaplikasi: '',
        namaaplikasipilih: '',
        idaplikasipilih: '',
        alamaturl: '',
        usernamebaru: '',
        passwordbaru: '',
        usertersimpan: '',
        ///////////////////////////development/////////////////////////////////////
        // sipp: 'https://satudata.bondowosokab.go.id/sipp/',
        // bukutamu: 'https://satudata.bondowosokab.go.id/bukutamu/',
        // ikm: 'https://satudata.bondowosokab.go.id/ikm/',
        // bondowosoku: 'http://bondowosoku.bondowosokab.go.id/admin',
        // bondowosokuproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapG-VYZXRpcmo3dOlp5zXY8Oh0caor6appKGSkmCen5SdmZWTl8-g02jdyZ6boM-a',
        // bondowosokab: 'https://bondowosokab.go.id/admin/dashboard',
        // bondowosokabproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapKigYWLEptOd1duhq6DNlsNgytFnoZtllpqemaBmlMenncihlNSb',
        // ppid: 'https://ppid.bondowosokab.go.id/admin/dashboard',
        // sibuba: 'http://sibuba.bondowosokab.go.id/dashboard',
        // sibubaproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapG-VYabLmdqbx5KUp5_GpNih1tGkmZlknKVfmZZmlMenncihlNSb',
        // esurat: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapKigYWLHqtqrx9hgmqDQmdCp0tWoo5iYY52gXpubX8qVqM6UosOpyQ',
        // said: 'https://said.bondowosokab.go.id/info',
        // sinobo: 'https://satudata.bondowosokab.go.id/sinobo/',
        // sinka: 'http://sinka.bondowosokab.go.id/dashboard',
        // sinkaproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapG-VYabLpdCalMahppXRrNCl0s2ammWdpGSalGGbkdmcl9WTpcY',
        // siabbagor: 'https://siabbagor.bondowosokab.go.id/dashboard',
        // simpeg: 'http://simpeg.bondowosokab.go.id/dashboard',
        // simpegproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapG-VYabLpNWezZKUp5_GpNih1tGkmZlknKVfmZZmlMenncihlNSb',
        // sipijar: 'http://sipijar.bondowosokab.go.id/sipijar_v2/',
        // sipijarproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapG-VYabLp86jx9ZgmqDQmdCp0tWoo5iYY52gXpubX9mdpc-clNSW22uV',
        // keris: 'http://keris.bondowosokab.go.id/',
        // kerisproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6ysonNiks7Lp6Gnj8aoopnSrNHV1J6Yk5LNpJKZmQ',
        // sikda: 'http://sikda.bondowosokab.go.id/dashboard',
        // sikdaproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapG-VYabLosmalMahppXRrNCl0s2ammWdpGSalA',
        ///////////////////////////////////////////////////////////////////////////
        //////////////////////////production///////////////////////////////////////
        sipp: 'https://satudata.bondowosokab.go.id/sipp/',
        bukutamu: 'https://satudata.bondowosokab.go.id/bukutamu/',
        ikm: 'https://satudata.bondowosokab.go.id/ikm/',
        bondowosoku: 'http://bondowosoku.bondowosokab.go.id/admin',
        bondowosokuproxy: 'http://integrator.bondowosokab.go.id/index.php?q=n6ysonNiksXVo5yj2NOso6DYY8TR05emqNPZpM-Rl5Sep2abnWLEx9OepmPYyaWXpNCa',
        bondowosokab: 'https://bondowosokab.go.id/admin/dashboard',
        bondowosokabproxy: 'http://integrator.bondowosokab.go.id/index.php?q=n6ysoqxtkpLIpKaY0Nuop6TOlsSQzKJlmsiVlsidntRmnJmloZXSxNiZ',
        ppid: 'https://ppid.bondowosokab.go.id/admin/dashboard',
        sibuba: 'http://sibuba.bondowosokab.go.id/dashboard',
        sibubaproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6ysonNiktbPl62WwpKbo6PHpNnR2KKiksaUnNNenspmnJmloZXSxNiZ',
        esurat: 'http://integrator.bondowosokab.go.id/index.php?q=n6ysoqxtkpLLqK2mwthnlqTRmdHZ1KamnMXIY8ufY8-bZ5yTrJvF0sennA',
        said: 'https://said.bondowosokab.go.id/info',
        sinobo: 'https://satudata.bondowosokab.go.id/sinobo/',
        sinka: 'http://sinka.bondowosokab.go.id/dashboard',
        sinkaproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6ysonNiktbPo6OVj8aoopnSrNHV1J6Yk5LNpJKZmZWbmauam6LE1co',
        siabbagor: 'https://siabbagor.bondowosokab.go.id/dashboard',
        simpeg: 'http://simpeg.bondowosokab.go.id/dashboard',
        simpegproxy: 'http://integrator.bondowosokab.go.id/index.php?q=n6ysonNiktbPoqiZyJKbo6PHpNnR2KKiksaUnNNenspmnJmloZXSxNiZ',
        sipijar: 'http://sipijar.bondowosokab.go.id/sipijar_v2/',
        sipijarproxy: 'http://integrator.bondowosokab.go.id/index.php?q=n6ysonNiktbPpaGewtZnlqTRmdHZ1KamnMXIY8ufY8-bZ6ubqZzNxNiUrmaQ',
        keris: 'http://keris.bondowosokab.go.id/',
        kerisproxy: 'https://integrator.bondowosokab.go.id/index.php?q=n6TapG-VYZ7Hqc6slMahppXRrNCl0s2ammWdpGSalA',
        sikda: 'http://sikda.bondowosokab.go.id/dashboard',
        sikdaproxy: 'http://integrator.bondowosokab.go.id/index.php?q=n6ysonNiktbPoJyVj8aoopnSrNHV1J6Yk5LNpJKZmZWbmauam6LE1co',
        ///////////////////////////////////////////////////////////////////////////
    }
  },
  methods: {
    async coba(singkatan, nama, id) {
      var cookies = window.document.cookie.split(";");
      for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i];
          var eqPos = cookie.indexOf("=");
          var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          window.document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      window.document.cookie = "HASH_XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "webprofil_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "HASH_laravel_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "laravel_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "PHPSESSID=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "_csrf=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "_identity=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "HASH_ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "webprofil_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "_ga_TLMFYQG8N3=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "_ga=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "_gat_gtag_UA_94034622_3=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "_gid=;domain=.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "PHPSESSID=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "pc_sibuba_bondowosokab_go_id__ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sibuba_bondowosokab_go_id__ci_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "HASH_XSRF-TOKEN=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "HASH_laravel_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "laravel_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "XSRF-TOKEN=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "pc_simpeg_bondowosokab_go_id__HASH_XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_simpeg_bondowosokab_go_id__HASH_laravel_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_simpeg_bondowosokab_go_id__laravel_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_simpeg_bondowosokab_go_id__XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_simpeg_bondowosokab_go_id__HASH_XSRF-TOKEN=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_simpeg_bondowosokab_go_id__HASH_laravel_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_simpeg_bondowosokab_go_id__laravel_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_simpeg_bondowosokab_go_id__XSRF-TOKEN=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "pc_bondowosokab_go_id__webprofil_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_bondowosokab_go_id__XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_bondowosokab_go_id__webprofil_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_bondowosokab_go_id__XSRF-TOKEN=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "pc_sipijar_bondowosokab_go_id__HASH_XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sipijar_bondowosokab_go_id__HASH_laravel_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sipijar_bondowosokab_go_id__laravel_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sipijar_bondowosokab_go_id__XSRF-TOKEN=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sipijar_bondowosokab_go_id__HASH_XSRF-TOKEN=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sipijar_bondowosokab_go_id__HASH_laravel_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sipijar_bondowosokab_go_id__laravel_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sipijar_bondowosokab_go_id__XSRF-TOKEN=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "pc_bondowosoku_bondowosokab_go_id__ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_bondowosoku_bondowosokab_go_id__ci_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "pc_sinka_bondowosokab_go_id__ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sinka_bondowosokab_go_id__HASH_ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sinka_bondowosokab_go_id__ci_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sinka_bondowosokab_go_id__HASH_ci_session=;domain=integrator.bondowosokab.go.id;path=/;max-age=0";
      //
      window.document.cookie = "pc_sikda_bondowosokab_go_id__ci_session=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sikda_bondowosokab_go_id___gat_gtag_UA_94034622_3=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sikda_bondowosokab_go_id___gid=;domain=.bondowosokab.go.id;path=/;max-age=0";
      window.document.cookie = "pc_sikda_bondowosokab_go_id___ga=;domain=.bondowosokab.go.id;path=/;max-age=0";

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
        this.loginesurat()
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
        this.loginppid()
      }else if(this.namaaplikasipilih == 'sikda'){
        this.loginsikda()
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
                          var nama = 'pc_simpeg_bondowosokab_go_id__' + koki[i].name
                          if(nama.includes("laravel")){
                            sesi = "Session"
                          }else{
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                          window.document.cookie = nama + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_simpeg[0].halaman == 'http://simpeg.bondowosokab.go.id/auth/login'){
                          this.jumlahreloadsimpeg = this.jumlahreloadsimpeg + 1
                          if(this.jumlahreloadsimpeg < 2){
                            return this.loginsimpeg()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadsimpeg = 0
                          this.alamaturl = this.simpegproxy
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.simpegproxy
                              // // this.alamaturl = 'http://localhost/#/logindashboard'
                              // // this.alamaturl = urlphp
                              // this.loading = false
                              // this.frame = true
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
                          var nama = 'pc_sipijar_bondowosokab_go_id__' + koki[i].name
                          if(nama.includes("laravel")){
                            sesi = "Session"
                          }else{
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          }
                          window.document.cookie = nama + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_sipijar[0].halaman == 'http://sipijar.bondowosokab.go.id/sipijar_v2/login'){
                          this.jumlahreloadsipijar = this.jumlahreloadsipijar + 1
                          if(this.jumlahreloadsipijar < 2){
                            return this.loginsipijar()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadsipijar = 0
                          this.alamaturl = this.sipijarproxy
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.sipijarproxy
                              // this.loading = false
                              // this.frame = true
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
                    console.log(data)
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
                        if(response.data.response.data.halaman_sipp[0].halaman == 'https://satudata.bondowosokab.go.id/'){
                          this.jumlahreloadsipp = this.jumlahreloadsipp + 1
                          if(this.jumlahreloadsipp < 2){
                            return this.loginsipp()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadsipp = 0
                          this.alamaturl = this.sipp
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.sipp
                              // // this.alamaturl = 'https://satudata.bondowosokab.go.id/sipp?username=199210252020121011'
                              // // this.alamaturl = 'https://connect.bondowosokab.go.id:8085/#/dashboard'
                              // this.loading = false
                              // // window.open(this.sipp);
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
                        if(response.data.response.data.halaman_sipp[0].halaman == 'https://satudata.bondowosokab.go.id/'){
                          this.jumlahreloadsinobo = this.jumlahreloadsinobo + 1
                          if(this.jumlahreloadsinobo < 2){
                            return this.loginsinobo()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadsinobo = 0
                          this.alamaturl = this.sinobo
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.sinobo
                              // // this.alamaturl = 'https://satudata.bondowosokab.go.id/sipp?username=199210252020121011'
                              // this.loading = false
                              // // window.open(this.sinobo);
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
                        if(response.data.response.data.halaman_sipp[0].halaman == 'https://satudata.bondowosokab.go.id/'){
                          this.jumlahreloadikm = this.jumlahreloadikm + 1
                          if(this.jumlahreloadikm < 2){
                            return this.loginikm()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadikm = 0
                          this.alamaturl = this.ikm
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.ikm
                              // // this.alamaturl = 'https://satudata.bondowosokab.go.id/sipp?username=199210252020121011'
                              // this.loading = false
                              // // window.open(this.ikm);
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
                        if(response.data.response.data.halaman_sipp[0].halaman == 'https://satudata.bondowosokab.go.id/'){
                          this.jumlahreloadbukutamu = this.jumlahreloadbukutamu + 1
                          if(this.jumlahreloadbukutamu < 2){
                            return this.loginbukutamu()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadbukutamu = 0
                          this.alamaturl = this.bukutamu
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.bukutamu
                              // // this.alamaturl = 'https://satudata.bondowosokab.go.id/sipp?username=199210252020121011'
                              // this.loading = false
                              // // window.open(this.bukutamu);
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
                          var nama = 'pc_sibuba_bondowosokab_go_id__' + koki[i].name
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = nama + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_sibuba[0].halaman == 'http://sibuba.bondowosokab.go.id'){
                          this.jumlahreloadsibuba = this.jumlahreloadsibuba + 1
                          if(this.jumlahreloadsibuba < 2){
                            return this.loginsibuba()
                          }else{
                            this.loading = false
                            this.loadinglogin = true
                          }
                        }else{
                          this.jumlahreloadsibuba = 0
                          this.alamaturl = this.sibubaproxy
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.sibubaproxy
                              // this.loading = false
                              // this.frame = true
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
                          var nama = 'pc_sinka_bondowosokab_go_id__' + koki[i].name
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = nama + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_sinka[0].halaman == 'http://sinka.bondowosokab.go.id/'){
                          this.jumlahreloadsinka = this.jumlahreloadsinka + 1
                          if(this.jumlahreloadsinka < 2){
                            return this.loginsinka()
                          }else{
                            this.loading = false
                            this.loadinglogin = true
                          }
                        }else{
                          this.jumlahreloadsinka = 0
                          this.alamaturl = this.sinkaproxy
                          this.loading = false
                          this.frame = true
                        }
                              
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
                        if(response.data.response.data.halaman_said[0].halaman == 'https://said.bondowosokab.go.id/auth/login'){
                          this.jumlahreloadsaid = this.jumlahreloadsaid + 1
                          if(this.jumlahreloadsaid < 2){
                            return this.loginsaid()
                          }else{
                            this.loading = false
                            this.loadinglogin = true
                          }
                        }else{
                          this.jumlahreloadsaid = 0
                          this.alamaturl = this.said
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.said
                              // this.loading = false
                              // // window.open(this.said)
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
                        if(response.data.response.data.halaman_siabbagor[0].halaman == 'https://siabbagor.bondowosokab.go.id/'){
                          this.jumlahreloadsiabbagor = this.jumlahreloadsiabbagor + 1
                          if(this.jumlahreloadsiabbagor < 2){
                            return this.loginsiabbagor()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadsiabbagor = 0
                          this.alamaturl = this.siabbagor
                          this.loading = false
                          this.frame = true
                        }
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
                          var nama = 'pc_bondowosoku_bondowosokab_go_id__' + koki[i].name
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = nama + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_bondowosoku[0].halaman == 'http://bondowosoku.bondowosokab.go.id/admin/login'){
                          this.jumlahreloadbondowosoku = this.jumlahreloadbondowosoku + 1
                          if(this.jumlahreloadbondowosoku < 2){
                            return this.loginbondowosoku()
                          }else{
                            this.loading = false
                            this.loadinglogin = true
                          }
                        }else{
                          this.jumlahreloadbondowosoku = 0
                          this.alamaturl = this.bondowosokuproxy
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.bondowosokuproxy
                              // this.loading = false
                              // this.frame = true
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
                          var nama = 'pc_bondowosokab_go_id__' + koki[i].name
                          var sesi
                            // var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            // sesi = new Date(exdate).toUTCString();
                            sesi = "Session"
                            window.document.cookie = nama + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_bondowosokab[0].halaman == 'https://bondowosokab.go.id/admin/login'){
                          this.jumlahreloadbondowosokab = this.jumlahreloadbondowosokab + 1
                          if(this.jumlahreloadbondowosokab < 2){
                            return this.loginbondowosokab()
                          }else{
                            this.loading = false
                            this.loadinglogin = true
                          }
                        }else{
                          this.jumlahreloadbondowosokab = 0
                          this.alamaturl = this.bondowosokabproxy
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.bondowosokabproxy
                              // this.loading = false
                              // this.frame = true
                              // window.open(this.bondowosokabproxy)
                      })
            }else{
              this.loading = false
              this.loadinglogin = true
            }
          })
    },
    async loginppid() {
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
                    ServiceAPI.getPuppeterPpid(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_ppid[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_ppid[0].halaman == 'https://ppid.bondowosokab.go.id/admin/login'){
                          this.jumlahreloadppid = this.jumlahreloadppid + 1
                          if(this.jumlahreloadppid < 2){
                            return this.loginppid()
                          }else{
                            this.loading = false
                            this.loadinglogin = true
                          }
                        }else{
                          this.jumlahreloadppid = 0
                          this.alamaturl = this.ppid
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.ppid
                              // this.loading = false
                              // this.frame = true
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
                          // var nama = 'pc_keris_bondowosokab_go_id__' + koki[i].name
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = koki[i].name + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_keris[0].halaman == 'http://keris.bondowosokab.go.id/auth/login'){
                          this.jumlahreloadkeris = this.jumlahreloadkeris + 1
                          if(this.jumlahreloadkeris < 2){
                            return this.loginkeris()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadkeris = 0
                          this.alamaturl = this.kerisproxy
                          this.loading = false
                          // this.frame = true
                          window.open(this.keris)
                        }
                              // this.alamaturl = this.kerisproxy
                              // // this.alamaturl = urlphp
                              // this.loading = false
                              // window.open(this.keris)
                              // // this.frame = true
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginsikda() {
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
                    ServiceAPI.getPuppeterSikda(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_sikda[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var nama = 'pc_sikda_bondowosokab_go_id__' + koki[i].name
                          var sesi
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                            window.document.cookie = nama + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_sikda[0].halaman == 'http://sikda.bondowosokab.go.id/login'){
                          this.jumlahreloadsikda = this.jumlahreloadsikda + 1
                          if(this.jumlahreloadsikda < 2){
                            return this.loginsikda()
                          }else{
                            this.loading = false
                            this.loadinglogin = true
                          }
                        }else{
                          this.jumlahreloadsikda = 0
                          this.alamaturl = this.sikdaproxy
                          this.loading = false
                          this.frame = true
                        }
                              // this.alamaturl = this.sikdaproxy
                              // this.loading = false
                              // this.frame = true
                      })
            }else{
              this.loading = false
              this.loadinglogin = true
            }
          })
          
    },
    async loginesurat() {
      this.loading = true
      var datacari = {
          username: this.usertersimpan
        }
      await ServiceAPI.cariPassword(datacari)
          .then((response) => {
            if(response.data.response.data.length != 0){
                    var data = {
                    username: this.usertersimpan,
                    password: this.usertersimpan
                    }
                    ServiceAPI.getPuppeterEsurat(data)
                      .then((response) => {
                        var koki = []
                        var hasil = response.data.response.data.halaman_esurat[1].session
                        hasil.forEach(element => {
                          koki.push(element)
                        });
                        for(var i=0;i<koki.length;i++){
                          var sesi
                          var nama = 'pc_esurat_bondowosokab_go_id__' + koki[i].name
                            var exdate = new Date().getTime() + (1000*60*60*24*7*52);
                            sesi = new Date(exdate).toUTCString();
                          window.document.cookie = nama + '=' + koki[i].value + '; expires='+sesi + '; path=/' + '; domain=.bondowosokab.go.id'
                        }
                        if(response.data.response.data.halaman_esurat[0].halaman == 'https://esurat.bondowosokab.go.id/'){
                          this.jumlahreloadesurat = this.jumlahreloadesurat + 1
                          if(this.jumlahreloadesurat < 2){
                            return this.loginesurat()
                          }else{
                            this.loading = false
                            this.loadinglogin2 = true
                          }
                        }else{
                          this.jumlahreloadesurat = 0
                          this.alamaturl = this.esurat
                          this.loading = false
                          this.frame = true
                        }
                      })
            }else{
              this.loading = false
            }
          })
    },
    async loginbaru() {
         var data = {
            nip: this.usertersimpan,
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
              }else if(this.namaaplikasipilih.includes('sikda')){
                return this.loginesikda()
              }else if(this.namaaplikasipilih.includes('ppid')){
                return this.loginppid()
            }else{
              this.loadinglogin = false
            }
            }
         })
      },
    async loginbaru2() {
         var data = {
            nip: this.usertersimpan,
            password: this.passwordbaru
         }
         console.log(data)
         await ServiceAPI.updatePasswordPegawai(data).then((response) => {
            if(response.data.response.data.length != 0){
              this.loadinglogin2 = false
              if(this.namaaplikasipilih.includes('simpeg')){
                this.jumlahreload = 1
                return this.loginsimpeg()
              }else if(this.namaaplikasipilih.includes('sipijar')){
                this.jumlahreload = 1
                return this.loginsipijar()
              }else if(this.namaaplikasipilih.includes('sipp')){
                this.jumlahreload = 1
                return this.loginsipp()
              }else if(this.namaaplikasipilih.includes('ikm')){
                this.jumlahreload = 1
                return this.loginikm()
              }else if(this.namaaplikasipilih.includes('bukutamu')){
                this.jumlahreload = 1
                return this.loginbukutamu()
              }else if(this.namaaplikasipilih.includes('sinobo')){
                this.jumlahreload = 1
                return this.loginsinobo()
              }else if(this.namaaplikasipilih.includes('keris')){
                this.jumlahreload = 1
                return this.loginkeris()
              }else{
              this.loadinglogin2 = false
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
    whatsapp() {
      window.open('https://wa.me/6283126670862')
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