<template>
   <v-app id="inspire">
   <!-- <div class="d-flex justify-center">
   <v-col sm="4">
   <v-alert shaped dismissible type=success :value="alertsuccess">
        "Berhasil Autentikasi Data"
      </v-alert>
   <v-alert shaped dismissible type=warning :value="alertwarning">
        "Username / Password Salah"
      </v-alert>
   </v-col>
   </div> -->
      <v-main>
         <v-container fluid fill-height fill-width>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12 cardColor">
                     <!-- <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar> -->
                     <v-card-text align="center">
                        <p style="font-size:1.875em" class="text-2xl font-weight-bold text--primary mb-2">
                            PORTAL APLIKASI
                        </p>
                        <p class="text--primary mb-2">
                            Silahkan Login Untuk Melanjutkan
                        </p>
                     </v-card-text>
                     <v-card-text>
                        <v-form>
                        <span class="text--primary">Username</span>
                           <v-text-field
                                solo
                                v-model="username"
                                label="Masukkan NIP"
                                
                            ></v-text-field>
                        <span class="text--primary">Password</span>
                           <v-text-field
                                solo
                                v-model="password"
                                label="Masukkan ID/ Password SIMPEG"
                                type="password"
                                v-on:keyup.enter="login"
                            ></v-text-field>
                           <v-btn block color="#224D96" class="white--text" @click="login">Masuk</v-btn>
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
      </v-main>
   </v-app>
</template>

<script>
import ServiceAPI from "../../services/service";
export default {
   name: 'LoginDashboard',
   data() {
      return {
         alertsuccess: false,
         username: '',
         password: '',
         alertwarning: false,
      }
   },
   methods: {
      async login() {
         this.$globalData.nip = this.username
         var data = {
            username: this.username,
            password: this.password
         }
         var datainsert = {
            nip: this.username
         }
         await ServiceAPI.insertDefault(datainsert).then(() => {
            ServiceAPI.loginDashboard(data).then((response) => {
               //
                  var nAgt = navigator.userAgent;
                  var browserName  = navigator.appName;
                  var fullVersion  = ''+parseFloat(navigator.appVersion); 
                  var majorVersion = parseInt(navigator.appVersion,10);
                  var nameOffset,verOffset,ix;

                  // In Opera, the true version is after "Opera" or after "Version"
                  if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
                  browserName = "Opera";
                  fullVersion = nAgt.substring(verOffset+6);
                  if ((verOffset=nAgt.indexOf("Version"))!=-1) 
                     fullVersion = nAgt.substring(verOffset+8);
                  }
                  // In MSIE, the true version is after "MSIE" in userAgent
                  else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
                  browserName = "Microsoft Internet Explorer";
                  fullVersion = nAgt.substring(verOffset+5);
                  }
                  // In Chrome, the true version is after "Chrome" 
                  else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
                  browserName = "Chrome";
                  fullVersion = nAgt.substring(verOffset+7);
                  }
                  // In Safari, the true version is after "Safari" or after "Version" 
                  else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
                  browserName = "Safari";
                  fullVersion = nAgt.substring(verOffset+7);
                  if ((verOffset=nAgt.indexOf("Version"))!=-1) 
                     fullVersion = nAgt.substring(verOffset+8);
                  }
                  // In Firefox, the true version is after "Firefox" 
                  else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
                  browserName = "Firefox";
                  fullVersion = nAgt.substring(verOffset+8);
                  }
                  // In most other browsers, "name/version" is at the end of userAgent 
                  else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
                           (verOffset=nAgt.lastIndexOf('/')) ) 
                  {
                  browserName = nAgt.substring(nameOffset,verOffset);
                  fullVersion = nAgt.substring(verOffset+1);
                  if (browserName.toLowerCase()==browserName.toUpperCase()) {
                  browserName = navigator.appName;
                  }
                  }
                  // trim the fullVersion string at semicolon/space if present
                  if ((ix=fullVersion.indexOf(";"))!=-1)
                     fullVersion=fullVersion.substring(0,ix);
                  if ((ix=fullVersion.indexOf(" "))!=-1)
                     fullVersion=fullVersion.substring(0,ix);

                  majorVersion = parseInt(''+fullVersion,10);
                  if (isNaN(majorVersion)) {
                  fullVersion  = ''+parseFloat(navigator.appVersion); 
                  majorVersion = parseInt(navigator.appVersion,10);
                  }

                  var OSName="Unknown OS";
                  if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
                  if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
                  if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
                  if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
                  //
               var wa = {
                  number: response.data.response.data.wanumber + '@c.us',
                  message: 'Anda baru saja login portal aplikasi di perangkat baru menggunakan browser ' + browserName + ' Versi ' + fullVersion + ' Sistem Operasi ' + OSName + '. Untuk lanjut ke login silahkan masukkan kode OTP : *' + response.data.response.data.token +'*'
               }
               if(response.data.response.data.status == 'Autentikasi Berhasil'){
                  ServiceAPI.kirimwa(wa)
                  this.$prompt("Masukkan Kode OTP", "", "Verifikasi", "question",).then((text) => {
                     if(text == response.data.response.data.token){
                        this.alertsuccess=true
                        this.$globalData.dataLogin = response.data.response.data.data
                        localStorage.setItem("resultat", JSON.stringify(response.data.response.data.data));
                        localStorage.setItem("nipat", JSON.stringify(this.username));
                        // this.dataLogin = response.data.response.data.status
                        // alert(this.$dataLogin)
                        this.$router.push({path: '/dashboard'})
                     }else{
                        this.$fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'OTP yang anda masukkan salah',
                        footer: '<a href>Silahkan periksa kode OTP di whatsapp anda</a>'
                        }).then(r => {
                        console.log(r.value);
                        });
                     }
                  });
               }else{
                  this.alertwarning=true
                  this.$fire({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Username atau Password salah',
                        footer: '<a href>Silahkan masukkan username dan password SIMPEG / Id Pegawai</a>'
                        }).then(r => {
                        console.log(r.value);
                        });
               }
            })
         })
      },
   },
   created() {
      var refreshdata = JSON.parse(localStorage.getItem("resultat") || '[]')
      if(refreshdata.length != 0){
         this.$router.push({path: '/dashboard'})
      }
   },
};
</script>

<style>
#inspire {
  background: url('~@/assets/images/14.png')
    no-repeat center center fixed !important;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  background-position: center;
}
.cardColor {
   background-color: rgba(255, 255, 255, 0.5) !important;
   border-color: white !important;
 }
</style>
