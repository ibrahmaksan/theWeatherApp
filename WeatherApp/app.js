const request = require('postman-request')

const url = 'https://api.weatherapi.com/v1/current.json?key=cdb0104ec65b49e183f234109242103&q=Bursa' // hava durumu 
// verisini elde edeceğimiz url. çıktısı Json şeklinde olacak.


request({ url: url, json:true}, (error, response) => {  // karşıdan gelen yanıt response un içine yüklenir
    
    if (error){ // response dönmediyse buraya girer.
        console.log("Hava durumu servisine bağlantı kurulamadı.")
    } else if(response.body.error){ //response.body.error içinde hata var mı?
        console.log("Girilen konum bilgisi bulunamadı")
    } else {
        console.log(
            'Şehir: ' + response.body.location.name+ // şehir adını verir.
            '\nTarih: ' + response.body.location.localtime+ // güncel tarihi verir.
            '\nHava sıcaklığı (°C): ' + response.body.current.temp_c + // güncel hava sıcaklığını verir.
            '\nHissedilen (°C) : ' + response.body.current.feelslike_c) // hissedilen hava sıcaklığını verir.

    }
});
