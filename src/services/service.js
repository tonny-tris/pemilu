import axios from "axios";
import http from "../http-common";

class ServiceAPI {
    ///////////////development////////////////////
    // getOPD() {
    //     return http.get("/getsatker");
    // }
    // loginDashboard(data) {
    //     return http.post('/logindashboard', data)
    // }
    // insertDefault(data) {
    //     return http.post('/insertdefault', data);
    // }
    // getPuppeter(data) {
    //     return http.post(`/getpuppeter`, data);
    // }
    // getPuppeterKeris(data) {
    //     return http.post(`/getpuppeterkeris`, data);
    // }
    // getPuppeterSipijar(data) {
    //     return http.post(`/getpuppetersipijar`, data);
    // }
    // getPuppeterSipp(data) {
    //     return http.post(`/getpuppetersipp`, data);
    // }
    // cariPassword(data) {
    //     return http.post('/caripassword', data)
    // }
    // updatePasswordPegawai(data) {
    //     return http.post(`/updatepasswordpegawai`, data);
    // }
    // getPuppeterSiabbagor(data) {
    //     return http.post(`/getpuppetersiabbagor`, data);
    // }
    // getPuppeterPpid(data) {
    //     return http.post(`/getpuppeterppid`, data);
    // }
    // getPuppeterBondowosoku(data) {
    //     return http.post(`/getpuppeterbondowosoku`, data);
    // }
    // getPuppeterSibuba(data) {
    //     return http.post(`/getpuppetersibuba`, data);
    // }
    // getPuppeterSaid(data) {
    //     return http.post(`/getpuppetersaid`, data);
    // }
    // getPuppeterSinka(data) {
    //     return http.post(`/getpuppetersinka`, data);
    // }
    // cariCredentialLogin(data) {
    //     return http.post(`/caricredentiallogin`, data);
    // }
    // cariCredentialApps(data) {
    //     return http.post(`/caricredentialapps`, data);
    // }
    // insertCredential(data) {
    //     return http.post(`/insertcredential`, data);
    // }
    // getPuppeterSikda(data) {
    //     return http.post(`/getpuppetersikda`, data);
    // }
    // getPuppeterEsurat(data) {
    //     return http.post(`/getpuppeteresurat`, data);
    // }
    // getPuppeterBondowosokab(data) {
    //     return http.post(`/getpuppeterbondowosokab`, data);
    // }
    // kirimwa(data) {
    //     return axios.post('https://integrator.bondowosokab.go.id/index.php?q=n6TapG-VYZ_RmsalztOlrGuaZZFiktWepptjopuko5OelQ', data)
    // }
    //////////////////////////////////////////////////
    ///////////////production/////////////////////////
    loginDashboard(data) {
        return http.post('https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZNKmn6GgnZTWy8ikmabF', data)
    }
    cariPassword(data) {
        return http.post('https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZMmYqqGimqbW2tWnnA', data)
    }
    cariCredentialApps(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZMmYqqGVq5jHyNSpoZXNxamkqA`, data);
    }
    cariCredentialLogin(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZMmYqqGVq5jHyNSpoZXN0KibntE`, data);
    }
    insertCredential(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM-lq52krZbVyMqapqjKxaU`, data);
    }
    insertDefault(data) {
        return http.post('https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM-lq52krZfIyceqpKg', data);
    }
    getPuppeter(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18un`, data);
    }
    getPuppeterKeris(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18uno5nTzaw`, data);
    }
    getPuppeterSipijar(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53RzaOVpw`, data);
    }
    getPuppeterSipp(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53R1A`, data);
    }
    getPuppeterSiabbagor(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53CxpuVnNKn`, data);
    }
    getPuppeterBondowosokab(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unmqPPyKirpNakzcPH`, data);
    }
    getPuppeterPpid(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unqKTKyA`, data);
    }
     getPuppeterBondowosoku(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unmqPPyKirpNakzdc`, data);
    }
    getPuppeterSibuba(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53D2ZuV`, data);
    }
    getPuppeterSaid(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq5XKyA`, data);
    }
    getPuppeterSinka(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53Pz5o`, data);
    }
    getPuppeterSikda(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53MyJo`, data);
    }
    getPuppeterEsurat(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unnafW1pqo`, data);
    }
    kirimwa(data) {
        return axios.post('https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2tnYZSVqMmemZOknaulmprI', data)
    }
    /////////////////////////////////////////////////


    
    // loginDashboard(data) {
    //     return http.post('/logindashboard', data)
    // }

    // loginDashboard(data) {
    //     return http.post('https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZNKmn6GgnZTWy8ikmabF', data)
    // }

    // cariPassword(data) {
    //     return http.post('/caripassword', data)
    // }
    // cariPassword(data) {
    //     return http.post('https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZMmYqqGimqbW2tWnnA', data)
    // }

    // cariCredentialApps(data) {
    //     return http.post(`/caricredentialapps`, data);
    // }
    // cariCredentialApps(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZMmYqqGVq5jHyNSpoZXNxamkqA`, data);
    // }

    // cariCredentialLogin(data) {
    //     return http.post(`/caricredentiallogin`, data);
    // }
    // cariCredentialLogin(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZMmYqqGVq5jHyNSpoZXN0KibntE`, data);
    // }

    // insertCredential(data) {
    //     return http.post(`/insertcredential`, data);
    // }
    // insertCredential(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM-lq52krZbVyMqapqjKxaU`, data);
    // }

    // insertDefault(data) {
    //     return http.post('/insertdefault', data);
    // }
    // insertDefault(data) {
    //     return http.post('https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM-lq52krZfIyceqpKg', data);
    // }

    // getTables(data) {
    //     return http.post(`/getrekap`, data);
    // }
    getTables(data) {
        return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKqXpJTT`, data);
    }

    // getPuppeter(data) {
    //     return http.post(`/getpuppeter`, data);
    // }
    // getPuppeter(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18un`, data);
    // }

    // getPuppeterKeris(data) {
    //     return http.post(`/getpuppeterkeris`, data);
    // }
    // getPuppeterKeris(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18uno5nTzaw`, data);
    // }

    // getPuppeterSipijar(data) {
    //     return http.post(`/getpuppetersipijar`, data);
    // }
    // getPuppeterSipijar(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53RzaOVpw`, data);
    // }

    // getPuppeterSipp(data) {
    //     return http.post(`/getpuppetersipp`, data);
    // }
    // getPuppeterSipp(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53R1A`, data);
    // }

    // getPuppeterSiabbagor(data) {
    //     return http.post(`/getpuppetersiabbagor`, data);
    // }
    // getPuppeterSiabbagor(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53CxpuVnNKn`, data);
    // }

    // getPuppeterBondowosokab(data) {
    //     return http.post(`/getpuppeterbondowosokab`, data);
    // }
    // getPuppeterBondowosokab(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unmqPPyKirpNakzcPH`, data);
    // }

    // getPuppeterPpid(data) {
    //     return http.post(`/getpuppeterppid`, data);
    // }
    // getPuppeterPpid(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unqKTKyA`, data);
    // }

    // getPuppeterBondowosoku(data) {
    //     return http.post(`/getpuppeterbondowosoku`, data);
    // }
    //  getPuppeterBondowosoku(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unmqPPyKirpNakzdc`, data);
    // }

    // getPuppeterSibuba(data) {
    //     return http.post(`/getpuppetersibuba`, data);
    // }
    // getPuppeterSibuba(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53D2ZuV`, data);
    // }

    // getPuppeterSaid(data) {
    //     return http.post(`/getpuppetersaid`, data);
    // }
    // getPuppeterSaid(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq5XKyA`, data);
    // }

    // getPuppeterSinka(data) {
    //     return http.post(`/getpuppetersinka`, data);
    // }
    // getPuppeterSinka(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53Pz5o`, data);
    // }

    // getPuppeterSikda(data) {
    //     return http.post(`/getpuppetersikda`, data);
    // }
    // getPuppeterSikda(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unq53MyJo`, data);
    // }

    // getPuppeterEsurat(data) {
    //     return http.post(`https://integrator.bondowosokab.go.id/index.php?q=n6ysonNikpSWaGZll5VnZWWbY5aSn2hsYZSVltSZZM2crKinqaPI18unnafW1pqo`, data);
    // }
}

export default new ServiceAPI();