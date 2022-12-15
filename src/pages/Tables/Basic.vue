<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">Monitoring Instalasi SIPP</h1>
      <v-row>
        <v-col cols="12">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-6 pb-3">
              <div class="dropdown-box">
              <Dropdown
                :options="pilihanOPD"
                v-on:selected="validateSelection"
                :disabled="false"
                :maxItem="1000"
                placeholder="Pilih OPD">
              </Dropdown>
              </div>
              <!-- <v-spacer></v-spacer> -->
              <!-- <p>Employee List</p> -->
              <v-spacer></v-spacer>
              <download-excel :data="dataEkspor" :export-fields="fields" :json_meta="json_meta" name="SIPP.xls" style='margin-right:16px'>
                Excel
                <v-icon color="success">  mdi-vector-arrange-above</v-icon>
              </download-excel>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Cari Pegawai"
                clearable
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="dataPerson"
              :search="search"
              item-key="nama_asn">
              <template v-slot:[`item.sudah_registrasi`]="{ item }">
                <v-btn small v-bind:color= "item.sudah_registrasi != 'YA' ? 'error' : 'success'">
                {{item.sudah_registrasi}}
              </v-btn>
              </template>
              <template v-slot:[`item.sudah_absen`]="{ item }">
                <v-btn small v-bind:color= "item.sudah_absen != 'YA' ? 'error' : 'success'">
                {{item.sudah_absen}}
              </v-btn>
              </template>
                  <template v-slot:[`item.actions`]="{ item }">
                  <v-col cols="auto">
                  <v-dialog
                    transition="dialog-top-transition"
                    max-width="600"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon small class="mr-2" color="primary" v-bind="attrs" v-on="on" @click="datafoto = item.photo">mdi-account</v-icon>
                      <!-- <v-btn
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                      >From the top</v-btn> -->
                    </template>
                    <template v-slot:default="dialog">
                      <v-card>
                        <v-toolbar
                          color="primary"
                          dark
                        >Detail ASN</v-toolbar>
                        <div class="text-center">
                        <v-avatar size="200">
                          <img
                            v-bind:src="datafoto.toLowerCase()"
                          />
                        </v-avatar>
                        </div>
                        <v-card-text>
                          <div class="text-h6 pa-2">Nama</div><div style='margin-right:16px'></div>:<div class="text-h6 pa-12">{{item.photo}}</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn
                            text
                            @click="dialog.value = false"
                          >Tutup</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
                  </template>
              <!-- <template v-slot:[`item.actions`]="{  }">
                <v-icon small class="mr-2" @click="showModal=true">mdi-pencil</v-icon>
              </template> -->
            </v-data-table>
            <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Rekapitulasi</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="textColor">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters class="pb-5">
                <div class="mr-4">
                  <v-icon color="primary" class="ml-n2">
                    mdi-circle-medium
                  </v-icon>
                  <span class="card-light-grey">Sudah Install</span>
                </div>
                <div>
                  <v-icon color="red"> mdi-circle-medium </v-icon>
                  <span class="card-light-grey">Belum Install</span>
                </div>
                <div>
                  <v-icon color="yellow"> mdi-circle-medium </v-icon>
                  <span class="card-light-grey">Belum Absen</span>
                </div>
                <div>
                  <v-icon color="green"> mdi-circle-medium </v-icon>
                  <span class="card-light-grey">Sudah Absen</span>
                </div>
              </v-row>
              <v-row no-gutters class="pb-3">
                <v-col>
                  <div class="text-h6 card-light-grey font-weight-regular">
                    Sudah Install
                  </div>
                  <v-progress-linear
                    :value= "jumlahsudahinstall"
                    background-color="#ececec"
                    color="primary"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-3">
                <v-col>
                  <div class="text-h6 card-light-grey font-weight-regular">
                    Belum Install
                  </div>
                  <v-progress-linear
                    :value="jumlahbeluminstall"
                    background-color="#ececec"
                    color="red"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-3">
                <v-col>
                  <div class="text-h6 card-light-grey font-weight-regular">
                    Belum Absen
                  </div>
                  <v-progress-linear
                    :value="jumlahbelumabsen"
                    background-color="#ececec"
                    color="warning"
                  ></v-progress-linear>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-1">
                <v-col>
                  <div class="text-h6 card-light-grey font-weight-regular">
                    Sudah Absen
                  </div>
                  <v-progress-linear
                    :value="jumlahsudahabsen"
                    background-color="#ececec"
                    color="success"
                  ></v-progress-linear>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <ApexChart
              type="donut"
              :height="300"
              :options="apexPie.options"
              :series="apexPie.series"
            ></ApexChart>
            <v-spacer></v-spacer>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>


<script>
import mock from './mock'
import Dropdown from 'vue-simple-search-dropdown';
import ServiceAPI from "../../services/service";
import JsonExcel from "vue-json-excel";
import ApexChart from 'vue-apexcharts'
import config from '../../config';

export default {
  name: 'Tables',
  components: { Dropdown, "downloadExcel" : JsonExcel, ApexChart},
  data() {
    return {
      mock,
      pilihanOPD: [],
      dataPerson: [],
      dataEkspor: [],
      selectedSementarOPD: { name: null, id: null },
      headers: [
        { text: "ID", align: "start", sortable: true, value: "id" },
        { text: "NIP", value: "nip", sortable: true },
        { text: "NAMA ASN", value: "nama_asn", sortable: true },
        { text: "STATUS", value: "status_id", sortable: true },
        { text: "JABATAN", value: "jabatan_description", sortable: true },
        { text: "INSTALL", value: "sudah_registrasi", sortable: true },
        { text: "ABSENSI", value: "sudah_absen", sortable: true },
        { text: "INFO", value: "actions", sortable: false }
      ],
      search: '',
      position: 'top-right',
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8",
          },
        ],
      ],
      fields: {
            'ID': 'id',
            'NIP': 'nip_baru',
            'NAMA': 'nama_asn',
            'STATUS': 'status_id',
            'JABATAN': 'jabatan_description',
            'INSTALL': 'sudah_registrasi',
            'ABSEN': 'sudah_absen'
        },
        apexPie: {
          options: {
            dataLabels: {
              enabled: true
            },
            colors: [config.light.primary, config.light.secondary, config.light.warning, config.light.success],
            labels: ["Sudah Install", "Belum Install", "Belum Absen", "Sudah Absen"],
            legend: {
              position: 'bottom',
              horizontalAlign: 'center',
            }
          },
          series: this.generatePieSeries(),
        },
        jumlahbeluminstall: 0,
        jumlahbelumabsen: 0,
        jumlahsudahinstall: 0,
        jumlahsudahabsen: 0,
        variabledataditemukan: false,
        datafoto: ''.toLowerCase(),
    }
  },
  methods: {
    getpilihanopd() {
      var hasil = []
      ServiceAPI.getOPD()
        .then((response) => {
          for(var i = 0; i< response.data.response.data.length; i++){
            hasil.push({id: response.data.response.data[i].skpd_id, name: response.data.response.data[i].satuan_kerja})
            this.pilihanOPD.push({id: response.data.response.data[i].skpd_id, name: response.data.response.data[i].satuan_kerja})
          }
        })    
        .catch(() => {
        });
    },
    validateSelection(selection) {
            this.selectedSementarOPD = selection.id;
            if(selection.id != null){
              this.getTable();
            }
    },
    getTable() {
      var data = {
        skpd_id: this.selectedSementarOPD
      }
      // console.log(data)
      ServiceAPI.getTables(data)
        .then((response) => {
          // console.log(response.data.response.data)
          this.dataPerson = []
          this.dataEkspor = []
          for(var i = 0; i< response.data.response.data.length; i++){
            this.dataPerson.push(response.data.response.data[i])
            this.dataPerson = this.dataPerson.map(this.getDisplay)
            this.dataEkspor.push(response.data.response.data[i])
            // console.log(this.dataPerson[i])
          }
          this.dataPerson.forEach(e => {
            if(e.id){
              var index = this.dataEkspor.findIndex(x => x.id === e.id);
              this.dataEkspor[this.dataEkspor.findIndex(obj => obj.id === e.id)] = {...this.dataPerson[index], nip_baru: "'"+e.nip }
            }
          })
          // console.log(this.dataEkspor)
          this.variabledataditemukan = true
          this.generatePieSeries()
        })
        .catch(() => {
          this.dataPerson = []
          this.dataEkspor = []
          this.jumlahbeluminstall = 0
          this.jumlahbelumabsen = 0
          this.jumlahsudahinstall = 0
          this.jumlahsudahabsen = 0
          this.variabledataditemukan = false
          this.generatePieSeries()
        });
    },
    getDisplay(dataPerson) {
      return {
        id: dataPerson.id,
        nip: dataPerson.nip,
        nama_asn: dataPerson.nama_asn,
        status_id: dataPerson.status_id,
        jabatan_description: dataPerson.jabatan_description.toUpperCase(),
        sudah_registrasi: dataPerson.sudah_registrasi,
        sudah_absen: dataPerson.sudah_absen,
        photo: dataPerson.photo
      };
    },
    addSuccessNotification() {
      this.$toast.success("Data Ditemukan", {
        position: this.position,
        timeout: 6000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true
      });
    },
    addErrorNotification() {
      this.$toast.error("Data Tidak Ditemukan", {
        position: this.position,
        timeout: 6000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true
      });
    },
    generatePieSeries() {
        let series = [0,0,0,0];
        let sudah_registrasi = [];
        let belum_registrasi = [];
        let sudah_absen = [];
        let belum_absen = [];
        if(this.dataPerson != null){
          for (let i=0; i < this.dataPerson.length; i++) {
            if(this.dataPerson[i].sudah_registrasi == 'YA'){
              sudah_registrasi.push('1')
            }
            if(this.dataPerson[i].sudah_registrasi == 'BELUM'){
              // console.log('belum')
              belum_registrasi.push('1')
            }
            if(this.dataPerson[i].sudah_absen == 'YA'){
              sudah_absen.push('1')
            }
            if(this.dataPerson[i].sudah_absen == 'BELUM'){
              belum_absen.push('1')
            }
          }
          this.apexPie.series = []
          this.apexPie.series.push(sudah_registrasi.length)
          this.apexPie.series.push(belum_registrasi.length)
          this.apexPie.series.push(belum_absen.length)
          this.apexPie.series.push(sudah_absen.length)
          // console.log('hasil :', this.apexPie.series[1])
          if(this.variabledataditemukan == true){
            this.jumlahsudahinstall = this.apexPie.series[0]/(this.apexPie.series[0]+this.apexPie.series[1]+this.apexPie.series[2]+this.apexPie.series[3])*100
            this.jumlahbeluminstall = this.apexPie.series[1]/(this.apexPie.series[0]+this.apexPie.series[1]+this.apexPie.series[2]+this.apexPie.series[3])*100
            this.jumlahsudahabsen = this.apexPie.series[3]/(this.apexPie.series[0]+this.apexPie.series[1]+this.apexPie.series[2]+this.apexPie.series[3])*100
            this.jumlahbelumabsen = this.apexPie.series[2]/(this.apexPie.series[0]+this.apexPie.series[1]+this.apexPie.series[2]+this.apexPie.series[3])*100
          }
        }
        
      return series;
    },
  },
  mounted() {
    this.getpilihanopd()
  }
}

</script>

<style src="./Basic.scss" lang="scss"></style>
<style src="../Icons/Icons.scss" lang="scss"/>
<style scoped>

</style>
