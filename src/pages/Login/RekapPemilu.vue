<template>
   <v-app>
      <v-row>
         <v-col cols="12" sm="12">
            <v-card>
                <!-- <div>
                    <v-text-field
                        label="Cari Pengguna"
                        solo 
                        outlined
                        dense
                        v-model="search"
                    ></v-text-field>
                </div> -->
               <v-card-title>
                  Daftar
                  <v-spacer></v-spacer>
                  <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Cari Pemilih"
                  single-line
                  hide-details
                  ></v-text-field>
               </v-card-title>
               <v-data-table
                  :headers="headers"
                  :items="daftarpemilih"
                  :search="search"
                  :items-per-page="15"
                  :item-class="itemRowBackground"
                  :loading="loading"
                  loading-text="Sedang Memuat Data..."
                  height="770px"
               >
               </v-data-table>
            </v-card>
         </v-col>
      </v-row>
   </v-app>
</template>

<script>
  import ServiceAPI from "../../services/service";
  import { Observable, interval } from "rxjs";

  export default {
    name: 'RekapPemilu',
    data () {
      return {
        loading: true,
        start: 0,
        timeout: null,
        rowHeight: 24,
        perPage: 25,
        search: '',
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'id_pemilih',
            class: 'warnaheader'
          },
          { text: 'Nama', value: 'nama_pemilih', class: 'warnaheader', sortable: false, },
          { text: 'No KK', value: 'no_kk', class: 'warnaheader', sortable: false, },
          { text: 'NIK', value: 'nik', class: 'warnaheader', sortable: false, },
          { text: 'Alamat', value: 'alamat', class: 'warnaheader', sortable: false, },
          { text: 'Status', value: 'status', class: 'warnaheader', sortable: false, },
        ],
        daftarpemilih: [],
      }
    },
    methods: {
      itemRowBackground: function (item) {
        return item.jk == 'P' ? 'style-2' : 'style-2'
      },
    },
    mounted: async function() {
      var datakirim = {
        "desa": this.$route.query.desa
      }
      const time = 1000;
      var a 
      var subscription
      const jsFrameworks = interval(time).pipe(
      a = Observable.create( ( observer ) => {
          ServiceAPI.rekappemilu(datakirim)
          .then( ( response ) => {
              observer.next( response.data.response.data );
              observer.complete();
          } )
          .catch( ( error ) => {
              observer.error( error );
          } );
      } ),
      subscription = a.subscribe( {
          next: data => {
            for(var i = 0; i< data.length; i++){
              this.daftarpemilih.push({...data[i]})
            }
            this.loading = false
          },
          complete: data => console.log( '[complete]', data),
      } ),
      subscription
      )
      return jsFrameworks
    },
    watch: {
        search() {
            const data = this.daftarpemilih
            if (this.search.length > 0) { 
            if (data.filter(item => item.nama_pemilih === this.search)) { 
                this.items = data.filter(item => item.nama_pemilih === this.search);
            } 
            // else {
            //     this.search = '';
            //     this.fetchSearch();
            // }
            } 
            // else {
            // this.fetchSearch();
            // }
        }
    },
  }
</script>

<style>
.style-1 {
  background-color: rgb(225, 245, 254)
}
.style-2 {
  background-color: rgb(255, 255, 255)
}
.warnaheader {
  background-color: rgb(144, 202, 249)
}
.virtual-scroll-table {
  max-height: 400px;
  overflow: auto;
}
</style>