const cities = [
  { label: 'Adana', value: 'Adana' },
  { label: 'Adıyaman', value: 'Adıyaman' },
  { label: 'Afyonkarahisar', value: 'Afyonkarahisar' },
  { label: 'Ağrı', value: 'Ağrı' },
  { label: 'Aksaray', value: 'Aksaray' },
  { label: 'Amasya', value: 'Amasya' },
  { label: 'Ankara', value: 'Ankara' },
  { label: 'Antalya', value: 'Antalya' },
  { label: 'Ardahan', value: 'Ardahan' },
  { label: 'Artvin', value: 'Artvin' },
  { label: 'Aydın', value: 'Aydın' },
  { label: 'Balıkesir', value: 'Balıkesir' },
  { label: 'Bartın', value: 'Bartın' },
  { label: 'Batman', value: 'Batman' },
  { label: 'Bayburt', value: 'Bayburt' },
  { label: 'Bilecik', value: 'Bilecik' },
  { label: 'Bingöl', value: 'Bingöl' },
  { label: 'Bitlis', value: 'Bitlis' },
  { label: 'Bolu', value: 'Bolu' },
  { label: 'Burdur', value: 'Burdur' },
  { label: 'Bursa', value: 'Bursa' },
  { label: 'Çanakkale', value: 'Çanakkale' },
  { label: 'Çankırı', value: 'Çankırı' },
  { label: 'Çorum', value: 'Çorum' },
  { label: 'Denizli', value: 'Denizli' },
  { label: 'Diyarbakır', value: 'Diyarbakır' },
  { label: 'Düzce', value: 'Düzce' },
  { label: 'Edirne', value: 'Edirne' },
  { label: 'Elazığ', value: 'Elazığ' },
  { label: 'Erzincan', value: 'Erzincan' },
  { label: 'Erzurum', value: 'Erzurum' },
  { label: 'Eskişehir', value: 'Eskişehir' },
  { label: 'Gaziantep', value: 'Gaziantep' },
  { label: 'Giresun', value: 'Giresun' },
  { label: 'Gümüşhane', value: 'Gümüşhane' },
  { label: 'Hakkari', value: 'Hakkari' },
  { label: 'Hatay', value: 'Hatay' },
  { label: 'Iğdır', value: 'Iğdır' },
  { label: 'Isparta', value: 'Isparta' },
  { label: 'İstanbul', value: 'İstanbul' },
  { label: 'İzmir', value: 'İzmir' },
  { label: 'Kahramanmaraş', value: 'Kahramanmaraş' },
  { label: 'Karabük', value: 'Karabük' },
  { label: 'Karaman', value: 'Karaman' },
  { label: 'Kars', value: 'Kars' },
  { label: 'Kastamonu', value: 'Kastamonu' },
  { label: 'Kayseri', value: 'Kayseri' },
  { label: 'Kırıkkale', value: 'Kırıkkale' },
  { label: 'Kırklareli', value: 'Kırklareli' },
  { label: 'Kırşehir', value: 'Kırşehir' },
  { label: 'Kilis', value: 'Kilis' },
  { label: 'Kocaeli', value: 'Kocaeli' },
  { label: 'Konya', value: 'Konya' },
  { label: 'Kütahya', value: 'Kütahya' },
  { label: 'Malatya', value: 'Malatya' },
  { label: 'Manisa', value: 'Manisa' },
  { label: 'Mardin', value: 'Mardin' },
  { label: 'Mersin', value: 'Mersin' },
  { label: 'Muğla', value: 'Muğla' },
  { label: 'Muş', value: 'Muş' },
  { label: 'Nevşehir', value: 'Nevşehir' },
  { label: 'Niğde', value: 'Niğde' },
  { label: 'Ordu', value: 'Ordu' },
  { label: 'Osmaniye', value: 'Osmaniye' },
  { label: 'Rize', value: 'Rize' },
  { label: 'Sakarya', value: 'Sakarya' },
  { label: 'Samsun', value: 'Samsun' },
  { label: 'Siirt', value: 'Siirt' },
  { label: 'Sinop', value: 'Sinop' },
  { label: 'Sivas', value: 'Sivas' },
  { label: 'Şanlıurfa', value: 'Şanlıurfa' },
  { label: 'Şırnak', value: 'Şırnak' },
  { label: 'Tekirdağ', value: 'Tekirdağ' },
  { label: 'Tokat', value: 'Tokat' },
  { label: 'Trabzon', value: 'Trabzon' },
  { label: 'Tunceli', value: 'Tunceli' },
  { label: 'Uşak', value: 'Uşak' },
  { label: 'Van', value: 'Van' },
  { label: 'Yalova', value: 'Yalova' },
  { label: 'Yozgat', value: 'Yozgat' },
  { label: 'Zonguldak', value: 'Zonguldak' }
];
  
 const districts = {
  'Adana': ['Seyhan', 'Yüreğir', 'Çukurova', 'Sarıçam', 'Aladağ', 'Ceyhan', 'Feke', 'İmamoğlu', 'Karaisalı', 'Karataş', 'Kozan', 'Pozantı', 'Saimbeyli', 'Tufanbeyli', 'Yumurtalık'],
  'Adıyaman': ['Merkez', 'Besni', 'Çelikhan', 'Gerger', 'Gölbaşı', 'Kahta', 'Samsat', 'Sincik', 'Tut'],
  'Afyonkarahisar': ['Merkez', 'Başmakçı', 'Bayat', 'Bolvadin', 'Çay', 'Çobanlar', 'Dazkırı', 'Dinar', 'Emirdağ', 'Evciler', 'Hocalar', 'İhsaniye', 'İscehisar', 'Kızılören', 'Sandıklı', 'Sinanpaşa', 'Sultandağı', 'Şuhut'],
  'Ağrı': ['Merkez', 'Diyadin', 'Doğubayazıt', 'Eleşkirt', 'Hamur', 'Patnos', 'Taşlıçay', 'Tutak'],
  'Aksaray': ['Merkez', 'Ağaçören', 'Eskil', 'Gülağaç', 'Güzelyurt', 'Ortaköy', 'Sarıyahşi'],
  'Amasya': ['Merkez', 'Göynücek', 'Gümüşhacıköy', 'Hamamözü', 'Merzifon', 'Suluova', 'Taşova'],
  'Ankara': ['Altındağ', 'Ayaş', 'Bala', 'Beypazarı', 'Çamlıdere', 'Çankaya', 'Çubuk', 'Elmadağ', 'Etimesgut', 'Evren', 'Gölbaşı', 'Haymana', 'Kahramankazan', 'Kalecik', 'Keçiören', 'Kızılcahamam', 'Mamak', 'Nallıhan', 'Polatlı', 'Pursaklar', 'Sincan', 'Şereflikoçhisar', 'Yenimahalle'],
  'Antalya': ['Akseki', 'Aksu', 'Alanya', 'Demre', 'Döşemealtı', 'Elmalı', 'Finike', 'Gazipaşa', 'Gündoğmuş', 'İbradı', 'Kaş', 'Kemer', 'Kepez', 'Konyaaltı', 'Korkuteli', 'Kumluca', 'Manavgat', 'Muratpaşa', 'Serik'],
  'Ardahan': ['Merkez', 'Çıldır', 'Damal', 'Göle', 'Hanak', 'Posof'],
  'Artvin': ['Ardanuç', 'Arhavi', 'Borçka', 'Hopa', 'Kemalpaşa', 'Murgul', 'Şavşat', 'Yusufeli'],
  'Aydın': ['Bozdoğan', 'Buharkent', 'Çine', 'Didim', 'Efeler', 'Germencik', 'İncirliova', 'Karacasu', 'Karpuzlu', 'Koçarlı', 'Köşk', 'Kuşadası', 'Kuyucak', 'Nazilli', 'Söke', 'Sultanhisar', 'Yenipazar'],
  'Balıkesir': ['Altıeylül', 'Ayvalık', 'Balya', 'Bandırma', 'Bigadiç', 'Burhaniye', 'Dursunbey', 'Edremit', 'Erdek', 'Gömeç', 'Gönen', 'Havran', 'İvrindi', 'Karesi', 'Kepsut', 'Manyas', 'Marmara', 'Savaştepe', 'Sındırgı', 'Susurluk'],
  'Bartın': ['Merkez', 'Amasra', 'Kurucaşile', 'Ulus'],
  'Batman': ['Merkez', 'Beşiri', 'Gercüş', 'Hasankeyf', 'Kozluk', 'Sason'],
  'Bayburt': ['Merkez', 'Aydıntepe', 'Demirözü'],
  'Bilecik': ['Merkez', 'Bozüyük', 'Gölpazarı', 'İnhisar', 'Osmaneli', 'Pazaryeri', 'Söğüt', 'Yenipazar'],
  'Bingöl': ['Merkez', 'Adaklı', 'Genç', 'Karlıova', 'Kiğı', 'Solhan', 'Yayladere', 'Yedisu'],
  'Bitlis': ['Merkez', 'Adilcevaz', 'Ahlat', 'Güroymak', 'Hizan', 'Mutki', 'Tatvan'],
  'Bolu': ['Merkez', 'Dörtdivan', 'Gerede', 'Göynük', 'Kıbrıscık', 'Mengen', 'Mudurnu', 'Seben', 'Yeniçağa'],
  'Burdur': ['Merkez', 'Ağlasun', 'Altınyayla', 'Bucak', 'Çavdır', 'Çeltikçi', 'Gölhisar', 'Karamanlı', 'Kemer', 'Tefenni', 'Yeşilova'],
  'Bursa': ['Gemlik', 'Gürsu', 'Harmancık', 'İnegöl', 'İznik', 'Karacabey', 'Keles', 'Kestel', 'Mudanya', 'Mustafakemalpaşa', 'Nilüfer', 'Orhaneli', 'Orhangazi', 'Osmangazi', 'Yenişehir', 'Yıldırım'],
  'Çanakkale': ['Ayvacık', 'Bayramiç', 'Biga', 'Bozcaada', 'Çan', 'Eceabat', 'Ezine', 'Gelibolu', 'Gökçeada', 'Lapseki', 'Merkez', 'Yenice'],
  'Çankırı': ['Merkez', 'Atkaracalar', 'Bayramören', 'Çerkeş', 'Eldivan', 'Ilgaz', 'Kızılırmak', 'Korgun', 'Kurşunlu', 'Orta', 'Şabanözü', 'Yapraklı'],
  'Çorum': ['Alaca', 'Bayat', 'Boğazkale', 'Dodurga', 'İskilip', 'Kargı', 'Laçin', 'Mecitözü', 'Merkez', 'Oğuzlar', 'Ortaköy', 'Osmancık', 'Sungurlu', 'Uğurludağ'],
  'Denizli': ['Acıpayam', 'Babadağ', 'Baklan', 'Bekilli', 'Beyağaç', 'Bozkurt', 'Buldan', 'Çal', 'Çameli', 'Çardak', 'Çivril', 'Güney', 'Honaz', 'Kale', 'Merkezefendi', 'Pamukkale', 'Sarayköy', 'Serinhisar', 'Tavas'],
  'Diyarbakır': ['Bağlar', 'Bismil', 'Çermik', 'Çınar', 'Çüngüş', 'Dicle', 'Eğil', 'Ergani', 'Hani', 'Hazro', 'Kayapınar', 'Kocaköy', 'Kulp', 'Lice', 'Silvan', 'Sur', 'Yenişehir'],
  'Düzce': ['Merkez', 'Akçakoca', 'Cumayeri', 'Çilimli', 'Gölyaka', 'Gümüşova', 'Kaynaşlı', 'Yığılca'],
  'Edirne': ['Enez', 'Havsa', 'İpsala', 'Keşan', 'Lalapaşa', 'Meriç', 'Merkez', 'Süloğlu', 'Uzunköprü'],
  'Elazığ': ['Ağın', 'Alacakaya', 'Arıcak', 'Baskil', 'Karakoçan', 'Keban', 'Kovancılar', 'Maden', 'Merkez', 'Palu', 'Sivrice'],
  'Erzincan': ['Çayırlı', 'İliç', 'Kemah', 'Kemaliye', 'Merkez', 'Otlukbeli', 'Refahiye', 'Tercan', 'Üzümlü'],
  'Erzurum': ['Aşkale', 'Aziziye', 'Çat', 'Hınıs', 'Horasan', 'İspir', 'Karaçoban', 'Karayazı', 'Köprüköy', 'Narman', 'Oltu', 'Olur', 'Palandöken', 'Pasinler', 'Pazaryolu', 'Şenkaya', 'Tekman', 'Tortum', 'Uzundere', 'Yakutiye'],
  'Eskişehir': ['Alpu', 'Beylikova', 'Çifteler', 'Günyüzü', 'Han', 'İnönü', 'Mahmudiye', 'Mihalgazi', 'Mihalıççık', 'Odunpazarı', 'Sarıcakaya', 'Seyitgazi', 'Sivrihisar', 'Tepebaşı'],
  'Gaziantep': ['Araban', 'İslahiye', 'Karkamış', 'Nizip', 'Nurdağı', 'Oğuzeli', 'Şahinbey', 'Şehitkamil', 'Yavuzeli'],
  'Giresun': ['Alucra', 'Bulancak', 'Çamoluk', 'Çanakçı', 'Dereli', 'Doğankent', 'Espiye', 'Eynesil', 'Görele', 'Güce', 'Keşap', 'Merkez', 'Piraziz', 'Şebinkarahisar', 'Tirebolu', 'Yağlıdere'],
  'Gümüşhane': ['Kelkit', 'Köse', 'Kürtün', 'Merkez', 'Şiran', 'Torul'],
  'Hakkari': ['Çukurca', 'Derecik', 'Merkez', 'Şemdinli', 'Yüksekova'],
  'Hatay': ['Altınözü', 'Antakya', 'Arsuz', 'Belen', 'Defne', 'Dörtyol', 'Erzin', 'Hassa', 'İskenderun', 'Kırıkhan', 'Kumlu', 'Payas', 'Reyhanlı', 'Samandağ', 'Yayladağı'],
  'Iğdır': ['Aralık', 'Karakoyunlu', 'Merkez', 'Tuzluca'],
  'Isparta': ['Aksu', 'Atabey', 'Eğirdir', 'Gelendost', 'Gönen', 'Keçiborlu', 'Merkez', 'Senirkent', 'Sütçüler', 'Şarkikaraağaç', 'Uluborlu', 'Yalvaç', 'Yenişarbademli'],
  'İstanbul': ['Adalar', 'Arnavutköy', 'Ataşehir', 'Avcılar', 'Bağcılar', 'Bahçelievler', 'Bakırköy', 'Başakşehir', 'Bayrampaşa', 'Beşiktaş', 'Beykoz', 'Beylikdüzü', 'Beyoğlu', 'Büyükçekmece', 'Çatalca', 'Çekmeköy', 'Esenler', 'Esenyurt', 'Eyüpsultan', 'Fatih', 'Gaziosmanpaşa', 'Güngören', 'Kadıköy', 'Kağıthane', 'Kartal', 'Küçükçekmece', 'Maltepe', 'Pendik', 'Sancaktepe', 'Sarıyer', 'Silivri', 'Sultanbeyli', 'Sultangazi', 'Şile', 'Şişli', 'Tuzla', 'Ümraniye', 'Üsküdar', 'Zeytinburnu'],
  'İzmir': ['Aliağa', 'Balçova', 'Bayındır', 'Bayraklı', 'Bergama', 'Beydağ', 'Bornova', 'Buca', 'Çeşme', 'Çiğli', 'Dikili', 'Foça', 'Gaziemir', 'Güzelbahçe', 'Karabağlar', 'Karaburun', 'Karşıyaka', 'Kemalpaşa', 'Kınık', 'Kiraz', 'Konak', 'Menderes', 'Menemen', 'Narlıdere', 'Ödemiş', 'Seferihisar', 'Selçuk', 'Tire', 'Torbalı', 'Urla'],
  'Kahramanmaraş': ['Afşin', 'Andırın', 'Çağlayancerit', 'Dulkadiroğlu', 'Ekinözü', 'Elbistan', 'Göksun', 'Nurhak', 'Onikişubat', 'Pazarcık', 'Türkoğlu'],
  'Karabük': ['Eflani', 'Eskipazar', 'Merkez', 'Ovacık', 'Safranbolu', 'Yenice'],
  'Karaman': ['Ayrancı', 'Başyayla', 'Ermenek', 'Kazımkarabekir', 'Merkez', 'Sarıveliler'],
  'Kars': ['Akyaka', 'Arpaçay', 'Digor', 'Kağızman', 'Merkez', 'Sarıkamış', 'Selim', 'Susuz'],
  'Kastamonu': ['Abana', 'Ağlı', 'Araç', 'Azdavay', 'Bozkurt', 'Cide', 'Çatalzeytin', 'Daday', 'Devrekani', 'Doğanyurt', 'Hanönü', 'İhsangazi', 'İnebolu', 'Küre', 'Merkez', 'Pınarbaşı', 'Seydiler', 'Şenpazar', 'Taşköprü', 'Tosya'],
  'Kayseri': ['Akkışla', 'Bünyan', 'Develi', 'Felahiye', 'Hacılar', 'İncesu', 'Kocasinan', 'Melikgazi', 'Özvatan', 'Pınarbaşı', 'Sarıoğlan', 'Sarız', 'Talas', 'Tomarza', 'Yahyalı', 'Yeşilhisar'],
  'Kırıkkale': ['Bahşılı', 'Delice', 'Karakeçili', 'Keskin', 'Merkez', 'Sulakyurt', 'Yahşihan'],
  'Kırklareli': ['Babaeski', 'Demirköy', 'Kofçaz', 'Lüleburgaz', 'Merkez', 'Pehlivanköy', 'Pınarhisar', 'Vize'],
  'Kırşehir': ['Akpınar', 'Akşehir', 'Çiçekdağı', 'Kaman', 'Merkez', 'Mucur', 'Terme'],
  'Kilis': ['Elbeyli', 'Merkez', 'Polateli', 'Yavuzeli'],
  'Kocaeli': ['Başiskele', 'Gölcük', 'Gebze', 'İzmit', 'Kandıra', 'Karamürsel', 'Kartepe', 'Derince', 'Dilovası', 'Çayırova'],
  'Konya': ['Ahırlı', 'Akşehir', 'Beyşehir', 'Bozkır', 'Çeltik', 'Çumra', 'Derbent', 'Doğanhisar', 'Ereğli', 'Güneysınır', 'Halkapınar', 'Ilgın', 'Kadınhanı', 'Karapınar', 'Karatay', 'Meram', 'Sarayönü', 'Selçuklu', 'Tuzlukçu', 'Yunak'],
  'Kütahya': ['Altıntaş', 'Aslanapa', 'Çavdarhisar', 'Domaniç', 'Dumlupınar', 'Emet', 'Gediz', 'Hisarcık', 'Kütahya', 'Pazarlar', 'Simav', 'Şaphane', 'Tavşanlı'],
  'Malatya': ['Akçadağ', 'Battalgazi', 'Darende', 'Doğanşehir', 'Hekimhan', 'Kale', 'Kuluncak', 'Pütürge', 'Yazıhan', 'Yeşilyurt'],
  'Manisa': ['Akhisar', 'Alaşehir', 'Demirci', 'Gördes', 'Kırkağaç', 'Kula', 'Salihli', 'Saruhanlı', 'Şehzadeler', 'Turgutlu', 'Yunusemre'],
  'Mardin': ['Artuklu', 'Dargeçit', 'Derik', 'Kızıltepe', 'Mazıdağı', 'Midyat', 'Nusaybin', 'Ömerli', 'Savur', 'Yeşilli'],
  'Mersin': ['Akdeniz', 'Anamur', 'Bozyazı', 'Çamlıyayla', 'Erdemli', 'Gülnar', 'Mezitli', 'Mut', 'Silifke', 'Tarsus'],
  'Muğla': ['Bodrum', 'Dalaman', 'Datça', 'Fethiye', 'Kavaklıdere', 'Köyceğiz', 'Marmaris', 'Menteşe', 'Olağanüstü', 'Seydikemer', 'Ula'],
  'Muş': ['Bulanık', 'Malazgirt', 'Merkez', 'Varto'],
  'Nevşehir': ['Avanos', 'Derinkuyu', 'Gülşehir', 'Hacıbektaş', 'Kozaklı', 'Merkez', 'Nevşehir', 'Sultanhanı'],
  'Niğde': ['Altunhisar', 'Bor', 'Çamardı', 'Merkez', 'Ulukışla'],
  'Ordu': ['Altınordu', 'Aybastı', 'Çamaş', 'Çatalpınar', 'Fatsa', 'Gölköy', 'Gülyalı', 'Kabadüz', 'Kabataş', 'Korgan', 'Kumru', 'Mesudiye', 'Perşembe', 'Ulubey', 'Ünye'],
  'Osmaniye': ['Bahçe', 'Düziçi', 'Hasanbeyli', 'Kadirli', 'Merkez', 'Sumbas', 'Toprakkale'],
  'Rize': ['Ardeşen', 'Çamlıhemşin', 'Çayeli', 'Derepazarı', 'Fındıklı', 'İyidere', 'Kalkandere', 'Pazar', 'Rize', 'Salarha', 'Tulumlu'],
  'Sakarya': ['Adapazarı', 'Akyazı', 'Erenler', 'Ferizli', 'Geyve', 'Hendek', 'Karasu', 'Kaynarca', 'Kocaali', 'Pamukova', 'Sapanca', 'Serdivan', 'Söğütlü', 'Taraklı'],
  'Samsun': ['Atakum', 'Ayvacık', 'Bafra', 'Canik', 'Çarşamba', 'Havza', 'Kavak', 'Ladik', 'Salıpazarı', 'Terme', 'Vezirköprü', 'Yakakent'],
  'Siirt': ['Baykan', 'Eruh', 'Merkez', 'Pervari', 'Şirvan', 'Tillo'],
  'Sinop': ['Ayancık', 'Boyabat', 'Durağan', 'Erfelek', 'Gerze', 'Merkez', 'Saraydüzü', 'Türkeli'],
  'Sivas': ['Akıncılar', 'Altınyayla', 'Divriği', 'Gemerek', 'Gölova', 'Hafik', 'İmranlı', 'Kangal', 'Koçhisar', 'Madımak', 'Merkez', 'Sivrialan', 'Şarkışla', 'Ulaş', 'Yıldızeli', 'Zara'],
  'Şanlıurfa': ['Akçakale', 'Birecik', 'Bozova', 'Ceylanpınar', 'Eyyübiye', 'Halfeti', 'Haliliye', 'Hilvan', 'Karaköprü', 'Siverek', 'Viranşehir'],
  'Şırnak': ['Beytüşşebap', 'Cizre', 'İdil', 'Merkez', 'Silopi', 'Uludere'],
  'Tekirdağ': ['Çerkezköy', 'Malkara', 'Marmaraereğlisi', 'Hayrabolu', 'Kapaklı', 'Süleymanpaşa', 'Şarköy', 'Ergene'],
  'Tokat': ['Almus', 'Artova', 'Başçiftlik', 'Erbaa', 'Niksar', 'Reşadiye', 'Sulusaray', 'Turhal', 'Zile'],
  'Trabzon': ['Akçaabat', 'Araklı', 'Arsin', 'Beşikdüzü', 'Çarşıbaşı', 'Dernekpazarı', 'Düzköy', 'Hayrat', 'Köprübaşı', 'Maçka', 'Of', 'Ortahisar', 'Sürmene', 'Şalpazarı', 'Tonya', 'Vakfıkebir', 'Yomra'],
  'Tunceli': ['Çemişgezek', 'Hozat', 'Mazgirt', 'Merkez', 'Nazımiye', 'Ovacık', 'Pertek', 'Pülümür'],
  'Uşak': ['Banaz', 'Eşme', 'Karahallı', 'Merkez', 'Sivaslı', 'Ulubey'],
  'Van': ['Başkale', 'Çaldıran', 'Çatak', 'Edremit', 'Gevaş', 'Gürpınar', 'İpekyolu', 'Muradiye', 'Özalp', 'Tuşba'],
  'Yalova': ['Altınova', 'Armutlu', 'Çiftlikköy', 'Merkez', 'Termal'],
  'Yozgat': ['Akdağmadeni', 'Aydıncık', 'Boğazlıyan', 'Çayıralan', 'Çekerek', 'Kadışehri', 'Saraykent', 'Sorgun', 'Şefaatli', 'Yozgat Merkez'],
  'Zonguldak': ['Alaplı', 'Çaycuma', 'Devrek', 'Ereğli', 'Gökçebey', 'Kilimli', 'Merkez', 'Zonguldak']
  };

  module.exports = { cities, districts }