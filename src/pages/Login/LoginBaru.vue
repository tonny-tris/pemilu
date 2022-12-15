<template>
   <v-app id="inspired">
   <div class="d-flex justify-center">
   <v-col sm="4">
   <v-alert shaped dismissible type="success" :value="alert">
        Berhasil Login.
      </v-alert>
   </v-col>
   </div>
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
                                v-model="username"
                                clearable
                            ></v-text-field>
                        <v-text class="text--primary">Password</v-text>
                           <v-text-field
                                solo
                                label="Password"
                                v-model="password"
                                clearable
                            ></v-text-field>
                           <v-btn block color="#224D96" class="white--text" @click="muncul">Masuk</v-btn>
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
</template>

<script>
import ServiceAPI from "../../services/service";
export default {
   name: 'LoginBaru',
   data() {
      return {
         alert: false,
         username: '',
         password: '',
         jenis: '',
      }
   },
   methods: {
      async muncul() {
         var data = {
            username: this.username,
            password: this.password,
            jenis: this.jenis
         }
         console.log(data)
         await ServiceAPI.insertCredential(data).then(() => {
            alert("berhasil")
         })
      },
   },
   mounted() {
    // alert(login.data().dataLogin)
    this.jenis = this.$globalData.idapp
    alert(this.jenis)
    // alert(data[0].apps)
    // alert(this.$globalData.dataLogin.length)
  }
};
</script>

<style>
#inspired {
  background-color: #ebf9ff;
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
