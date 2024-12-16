const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const { cities } = require('./citiesAndDistrict');
const app = express();
const PORT = 3030;

app.use(cors());

const getCitiesData = async () => {
    try {
        const res = await axios.get('https://www.takvim.com.tr/get/getcities');
	//yeni yorum satırı eklendi -furkan
        const cities = res.data;
        return cities;  
    } catch (error) {
        console.error('HATA:', error.message);
    }
};

const AdhanCanakkale = async () => {
    try {
        const response = await axios.get('https://webapi.tmgrup.com.tr/PrayTimes/GetPrayTimesPostgre?cityName=canakkale&dayAfter=7');
        const dat = response.data;
        return dat;
    } catch (error) {
        console.error('HATA:', error.message);
    }
};

const normalizeCityName = (cityName) => {
    const turkishChars = {
        'Ç': 'C', 'Ğ': 'G', 'İ': 'I', 'Ö': 'O', 'Ş': 'S', 'Ü': 'U',
        'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u'
    };

    return cityName
        .replace(/[\u00C0-\u024F]/g, char => turkishChars[char] || char) // Türkçe karakterleri değiştir
        .toLowerCase(); // Küçük harfe dönüştür
};

const fetchAdhanTimes1 = async () => {
    try {
        const requests = cities.map(city => {
            const normalizedCityName = normalizeCityName(city.value);
            console.log(`Şehir: ${city.label}, Normalize edilmiş: ${normalizedCityName}`);

            return axios
                .get(`https://webapi.tmgrup.com.tr/PrayTimes/GetPrayTimesPostgre?cityName=${encodeURIComponent(normalizedCityName)}&dayAfter=1`)
                .then(response => ({
                    city: city.label,
                    data: response.data
                }))
                .catch(error => ({
                    city: city.label,
                    error: error.message
                }));
        });

        const results = await Promise.all(requests);
        console.log('Sonuçlar:', results);
        return results;
    } catch (error) {
        console.error('Ezan vakitleri alınırken hata oluştu:', error.message);
    }
};

const fetchAdhanTimes7 = async () => {
    try {
        const requests = cities.map(city => {
            const normalizedCityName = normalizeCityName(city.value);
            console.log(`Şehir: ${city.label}, Normalize edilmiş: ${normalizedCityName}`);

            return axios
                .get(`https://webapi.tmgrup.com.tr/PrayTimes/GetPrayTimesPostgre?cityName=${encodeURIComponent(normalizedCityName)}&dayAfter=7`)
                .then(response => ({
                    city: city.label,
                    data: response.data
                }))
                .catch(error => ({
                    city: city.label,
                    error: error.message
                }));
        });

        const results = await Promise.all(requests);
        console.log('Sonuçlar:', results);
        return results;
    } catch (error) {
        console.error('Ezan vakitleri alınırken hata oluştu:', error.message);
    }
};



app.get('/getCities', async (req, res) => {
    try{
        const city = await getCitiesData();
        res.json(city);
        console.log(city);
    } catch (error) {
        console.error('Şehir verileri alınamadı:', error);
        res.status(500).send('Şehir verileri alınamadı.');
    }
});

app.get('/Canakkale', async (req, res) => {
    try {
        const canakkaleEzan = await AdhanCanakkale();
        res.json(canakkaleEzan);
        console.log(canakkaleEzan);
    } catch (error) {
        console.error('Çanakkale ezan verileri alınamadı:', error);
        res.status(500).send('Çanakkale ezan verileri alınamadı.');
    }
});

app.get('/allAdhanTimeCitiesDay1', async (req, res) => {
    try {
        const allAdhanTimes = await fetchAdhanTimes1();
        res.json(allAdhanTimes);
        console.log('Tüm şehirlerin ezan vakitleri başarıyla alındı.');
    } catch (error) {
        console.error('Ezan vakitleri alınamadı:', error);
        res.status(500).send('Ezan vakitleri alınamadı.');
    }
});

app.get('/allAdhanTimeCitiesDay1/:city', async (req, res) => {
    const { city } = req.params;
    try {
        const normalizedInputCity = normalizeCityName(city);
        const allAdhanTimes = await fetchAdhanTimes1();

        const cityData = allAdhanTimes.find(
            item => normalizeCityName(item.city) === normalizedInputCity
        );

        if (cityData) {
            res.json(cityData.data); 
        } else {
            res.status(404).send({ error: 'Şehir bulunamadı.' });
        }
    } catch (error) {
        console.error('Şehir ezan vakitleri alınamadı:', error);
        res.status(500).send('Şehir ezan vakitleri alınamadı.');
    }
});

app.get('/allAdhanTimeCitiesDay7', async (req, res) => {
    try {
        const allAdhanTimes = await fetchAdhanTimes7();
        res.json(allAdhanTimes);
        console.log('Tüm şehirlerin ezan vakitleri başarıyla alındı.');
    } catch (error) {
        console.error('Ezan vakitleri alınamadı:', error);
        res.status(500).send('Ezan vakitleri alınamadı.');
    }
});

app.get('/allAdhanTimeCitiesDay7/:city', async (req, res) => {
    const { city } = req.params;
    try {
        const normalizedInputCity = normalizeCityName(city);
        const allAdhanTimes = await fetchAdhanTimes7();

        const cityData = allAdhanTimes.find(
            item => normalizeCityName(item.city) === normalizedInputCity
        );

        if (cityData) {
            res.json(cityData.data);
        } else {
            res.status(404).send({ error: 'Şehir bulunamadı.' });
        }
    } catch (error) {
        console.error('Şehir ezan vakitleri alınamadı:', error);
        res.status(500).send('Şehir ezan vakitleri alınamadı.');
    }
});

app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
    setInterval(getCitiesData, 10000); // Her 10 saniyede bir verileri güncelle
});
