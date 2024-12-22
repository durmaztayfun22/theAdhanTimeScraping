## **TheAdhanTimeScraping** 🚀
Bu proje bazı akaryakıt istasyonlarının verileri JavaScript projesidir.
## **Özellikler** ✨

-   Özellik 1: Veriler güncel bir şekilde gelmektedir.
-   Özellik 2: Hızlı ve güvenli bir altyapıya sahiptir.
## **Kurulum** ⚙️

Projeyi yerel makinenize kurmak için aşağıdaki adımları takip edin:
-   **Depoyu klonlayın:**
     `git clone https://github.com/durmaztayfun22/theAdhanTimeScraping.git` 
    
-   **Gerekli bağımlılıkları yükleyin:**
    `npm install` 
    
-   **Projenizi başlatın:**
    `node index.js`
   ## **Kullanım** 📚

Bu proje, örnek akaryakıt fiyatları verisini bir REST API üzerinden sunar. Diğer projeler, bu veriyi kolayca çekebilir ve kullanabilir. İşte nasıl çalıştığına dair detaylı bir açıklama:

### **Adım 1: Projeyi Başlatın**

Sunucuyu yerel makinenizde başlatmak için aşağıdaki komutları kullanabilirsiniz:
-   **Depoyu klonlayın:**
     `git clone https://github.com/durmaztayfun22/theAdhanTimeScraping.git` 
    
-   **Gerekli bağımlılıkları yükleyin:**
    `npm install` 
    
-   **Projenizi başlatın:**
    `node index.js`
  ### **Adım 2: API Çıktısını Görüntüleyin**

API'ye bir GET isteği göndererek akaryakıt fiyatlarını alabilirsiniz. Örnek bir istek:
	
	`curl http://localhost:3000/api/adhan-time`
API çıktısı şu şekilde olacaktır:
`{
  "city": "İstanbul",
  "date": "2024-12-22",
  "prayer_times": {
    "imsak": "06:45",
    "gunes": "08:10",
    "ogle": "13:15",
    "ikindi": "15:30",
    "aksam": "17:50",
    "yatsi": "19:15"
}
`
### **Adım 3: Veriyi Başka Bir Projeye Çekin**

Bu API'yi başka bir projede kullanmak için `fetch` veya `axios` gibi bir HTTP istemcisi kullanabilirsiniz. Örnek bir React uygulamasında bu veriyi nasıl çekebileceğiniz:
```javascript
import React, { useEffect, useState } from "react";
import axios from "axios";

const EzanSaatleri = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/ezan-saatleri") // Buraya kendi API'nizin URL'sini girin
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Veri çekilirken bir hata oluştu:", error);
      });
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.city} Ezan Saatleri</h1>
          <p>Tarih: {data.date}</p>
          <ul>
            <li>İmsak: {data.prayer_times.imsak}</li>
            <li>Güneş: {data.prayer_times.gunes}</li>
            <li>Öğle: {data.prayer_times.ogle}</li>
            <li>İkindi: {data.prayer_times.ikindi}</li>
            <li>Akşam: {data.prayer_times.aksam}</li>
            <li>Yatsı: {data.prayer_times.yatsi}</li>
          </ul>
        </div>
      ) : (
        <p>Veri yükleniyor...</p>
      )}
    </div>
  );
};

export default EzanSaatleri;


### **Notlar**

-   API'yi uzaktan kullanmak için veritabanı bağlantısını ve sunucu yapılandırmasını güncelleyebilirsiniz.
-   Belirtilen kodlar birer örnektir.
