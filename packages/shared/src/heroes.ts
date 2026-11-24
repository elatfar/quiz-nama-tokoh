import type { Hero } from "./schema";

export const HEROES: Hero[] = [
	{
		id: "soekarno",
		name: "Ir. Soekarno",
		knownAs: "Bung Karno",
		title: "Proklamator Kemerdekaan & Presiden Pertama Republik Indonesia",
		birthYear: 1901,
		deathYear: 1970,
		birthPlace: "Surabaya, Jawa Timur",
		originRegion: "Jawa Timur",
		island: "Jawa",
		category: "revolusi_kemerdekaan",
		period: "1927–1970",
		summary:
			"Pemimpin besar pergerakan nasional yang memproklamasikan kemerdekaan Indonesia pada 17 Agustus 1945 bersama Bung Hatta dan merumuskan dasar negara Pancasila.",
		clues: [
			"Merumuskan konsep dasar negara 'Pancasila' dalam pidato 1 Juni 1945.",
			"Membacakan teks Proklamasi Kemerdekaan di Pegangsaan Timur 56 Jakarta.",
			"Pernah diasingkan Belanda ke Ende (Flores) dan Bengkulu.",
			"Dikenal dengan julukan 'Singa Podium' karena pidatonya yang memukau jutaan rakyat.",
		],
		trivia:
			"Saat diasingkan di Ende, Bung Karno kerap merenung di bawah pohon sukun bercabang lima yang menginspirasinya merumuskan lima sila Pancasila.",
		famousQuote:
			"Bangsa yang besar adalah bangsa yang menghargai jasa para pahlawannya.",
		keyAction:
			"Memproklamasikan Kemerdekaan RI dan menjadi Presiden Pertama Republik Indonesia.",
		avatarIcon: "🏛️",
		significanceTag: "Proklamator & Konseptor Pancasila",
	},
	{
		id: "mohammad-hatta",
		name: "Drs. Mohammad Hatta",
		knownAs: "Bung Hatta",
		title: "Proklamator Kemerdekaan & Bapak Koperasi Indonesia",
		birthYear: 1902,
		deathYear: 1980,
		birthPlace: "Bukittinggi, Sumatera Barat",
		originRegion: "Sumatera Barat",
		island: "Sumatera",
		category: "diplomasi",
		period: "1926–1980",
		summary:
			"Intelektual ulung, diplomat tangguh pemimpin delegasi Konferensi Meja Bundar (KMB) Den Haag 1949, dan arsitek ekonomi kerakyatan Indonesia.",
		clues: [
			"Memimpin delegasi Indonesia dalam Konferensi Meja Bundar (KMB) 1949 di Den Haag.",
			"Mendampingi Bung Karno menandatangani naskah Proklamasi Kemerdekaan.",
			"Dianugerahi gelar kehormatan sebagai Bapak Koperasi Indonesia.",
			"Memiliki integritas legendaris; menabung bertahun-tahun untuk sepatu Bally impiannya yang tak sempat terbeli.",
		],
		trivia:
			"Bung Hatta bersumpah tidak akan menikah sebelum Indonesia merdeka. Janji ini ditepatinya saat menikahi Siti Rahmiati pada November 1945 dengan maskawin buku karangannya sendiri.",
		famousQuote:
			"Kurang cerdas dapat diperbaiki dengan belajar, kurang cakap dapat dihilangkan dengan pengalaman. Namun tidak jujur itu sulit diperbaiki.",
		keyAction:
			"Memimpin delegasi KMB yang memaksa Belanda mengakui kedaulatan Republik Indonesia.",
		avatarIcon: "📚",
		significanceTag: "Bapak Koperasi & Negosiator Ulung",
	},
	{
		id: "sudirman",
		name: "Jenderal Soedirman",
		knownAs: "Panglima Besar Sudirman",
		title: "Panglima Besar Tentara Keamanan Rakyat (TKR)",
		birthYear: 1916,
		deathYear: 1950,
		birthPlace: "Purbalingga, Jawa Tengah",
		originRegion: "Jawa Tengah",
		island: "Jawa",
		category: "revolusi_kemerdekaan",
		period: "1945–1950",
		summary:
			"Panglima militer pertama dan termuda Indonesia yang memimpin perang gerilya melawan Agresi Militer Belanda meski dalam kondisi sakit paru-paru parah dan harus ditandu.",
		clues: [
			"Memimpin perang gerilya ribuan kilometer melintasi hutan dan gunung di atas tandu.",
			"Memimpin kemenangan gemilang dalam Palagan Ambarawa yang diperingati sebagai Hari Juang TNI AD.",
			"Terpilih menjadi Panglima Besar TKR pada usia 29 tahun.",
			"Mantan guru sekolah dasar Muhammadiyah di Cilacap sebelum memimpin militer nasional.",
		],
		trivia:
			"Meskipun menderita tuberkulosis parah dengan satu paru-paru yang berfungsi, beliau menolak beristirahat dan tetap memimpin pasukan gerilya selama 7 bulan sejauh ratusan kilometer.",
		famousQuote:
			"Tempat saya yang terbaik adalah di tengah-tengah anak buah. Saya akan meneruskan perjuangan. Met of zonder Pemerintah, TNI akan berjuang terus.",
		keyAction:
			"Memimpin perlawanan gerilya semesta menghadapi Agresi Militer Belanda II.",
		avatarIcon: "⚔️",
		significanceTag: "Panglima Besar Perang Gerilya",
	},
	{
		id: "cut-nyak-dien",
		name: "Cut Nyak Dien",
		knownAs: "Ibu Ratu Perang Aceh",
		title: "Pahlawan Nasional Pejuang Perang Aceh",
		birthYear: 1848,
		deathYear: 1908,
		birthPlace: "Lampadang, Aceh Besar",
		originRegion: "Aceh",
		island: "Sumatera",
		category: "perang_daerah",
		period: "1873–1905",
		summary:
			"Pejuang wanita tangguh dari Tanah Rencong yang memimpin perang gerilya melawan kolonial Belanda selama puluhan tahun hingga usia senja dan matanya mengalami kebutaan.",
		clues: [
			"Melanjutkan perang gerilya di hutan belantara Aceh setelah suaminya Teuku Umar gugur.",
			"Bersumpah menghancurkan penjajah setelah suami pertamanya Teuku Ibrahim Lamnga tewas di medan laga.",
			"Tetap gigih menghunus rencong menolak menyerah meski kondisi fisik menua dan buta.",
			"Diasingkan oleh Belanda ke Sumedang, Jawa Barat, hingga wafatnya.",
		],
		trivia:
			"Masyarakat Sumedang menjulukinya 'Ibu Perbu' (Ibu Suci) karena penguasaan agamanya yang mendalam dan aktif mengajarkan Al-Qur'an selama masa pengasingan.",
		famousQuote:
			"Sebagai perempuan Aceh, kita tidak boleh menumpahkan air mata pada orang yang gugur syahid.",
		keyAction:
			"Memimpin perang semesta rakyat Aceh selama lebih dari 25 tahun mempertahankan kedaulatan tanah air.",
		avatarIcon: "🗡️",
		significanceTag: "Srikandi Perang Rencong",
	},
	{
		id: "diponegoro",
		name: "Pangeran Diponegoro",
		knownAs: "Bendara Pangeran Harya Dipanegara",
		title: "Pemimpin Perang Jawa (1825–1830)",
		birthYear: 1785,
		deathYear: 1855,
		birthPlace: "Yogyakarta",
		originRegion: "D.I. Yogyakarta",
		island: "Jawa",
		category: "perang_daerah",
		period: "1825–1830",
		summary:
			"Putra Sultan Hamengkubuwana III yang memimpin perlawanan terbesar di Pulau Jawa melawan penjajahan Hindia Belanda, menyebabkan kebangkrutan finansial kolonial Belanda.",
		clues: [
			"Memimpin Perang Jawa (Java Oorlog) yang berlangsung selama lima tahun berdarah.",
			"Menjadikan Goa Selarong di Bantul sebagai markas pusat komando perjuangan gerilya.",
			"Kemarahannya dipicu oleh patok-patok jalan Belanda yang melintasi makam leluhurnya di Tegalrejo.",
			"Ditangkap Belanda secara licik melalui jebakan perundingan damai di Magelang.",
		],
		trivia:
			"Perang Jawa menguras kas Hindia Belanda hingga 20 juta gulden dan menewaskan lebih dari 8.000 serdadu Eropa, memaksa Belanda memberlakukan sistem Tanam Paksa (Cultuurstelsel).",
		famousQuote:
			"Hidup dan mati ada di tangan Allah. Lebih baik berkalang tanah daripada hidup dijajah bangsa asing.",
		keyAction:
			"Mengobarkan Perang Diponegoro yang menyatukan bangsawan, ulama, dan rakyat jelata di Jawa.",
		avatarIcon: "🐎",
		significanceTag: "Panglima Perang Tanah Jawa",
	},
	{
		id: "ki-hajar-dewantara",
		name: "Ki Hajar Dewantara",
		knownAs: "Raden Mas Soewardi Soerjaningrat",
		title: "Bapak Pendidikan Nasional Indonesia",
		birthYear: 1889,
		deathYear: 1959,
		birthPlace: "Yogyakarta",
		originRegion: "D.I. Yogyakarta",
		island: "Jawa",
		category: "pendidikan",
		period: "1912–1959",
		summary:
			"Pelopor pendidikan bagi kaum pribumi Indonesia, pendiri Perguruan Taman Siswa, dan Menteri Pengajaran pertama Republik Indonesia.",
		clues: [
			"Mendirikan lembaga pendidikan Perguruan Taman Siswa pada tahun 1922.",
			"Menulis artikel tajam mengguncang kolonial 'Als ik eens Nederlander was' (Seandainya Aku Seorang Belanda).",
			"Mencetuskan semboyan abadi: 'Ing ngarsa sung tulada, ing madya mangun karsa, tut wuri handayani'.",
			"Hari lahirnya, 2 Mei, diabadikan sebagai Hari Pendidikan Nasional (Hardiknas).",
		],
		trivia:
			"Beliau menanggalkan gelar kebangsawanannya (Raden Mas) pada usia 40 tahun agar dapat bebas berbaur dan memperjuangkan hak rakyat jelata tanpa sekat kasta feodal.",
		famousQuote:
			"Ing ngarsa sung tulada, ing madya mangun karsa, tut wuri handayani (Di depan memberi teladan, di tengah membangun semangat, di belakang memberi dorongan).",
		keyAction:
			"Mendirikan Taman Siswa dan meletakkan fondasi filosofi pendidikan nasional yang memerdekakan manusia.",
		avatarIcon: "🎓",
		significanceTag: "Bapak Pendidikan Nasional",
	},
	{
		id: "raden-ajeng-kartini",
		name: "R.A. Kartini",
		knownAs: "Raden Adjeng Kartini",
		title: "Pelopor Emansipasi Wanita Indonesia",
		birthYear: 1879,
		deathYear: 1904,
		birthPlace: "Jepara, Jawa Tengah",
		originRegion: "Jawa Tengah",
		island: "Jawa",
		category: "emansipasi",
		period: "1899–1904",
		summary:
			"Tokoh emansipasi perempuan yang memperjuangkan hak pendidikan, kesetaraan hak sosial kaum wanita, dan pembebasan tradisi pingitan melalui surat-surat visionernya.",
		clues: [
			"Kumpulan surat korespondensinya dibukukan dengan judul 'Door Duisternis tot Licht' (Habis Gelap Terbitlah Terang).",
			"Mendirikan sekolah untuk wanita pribumi di kompleks Kabupaten Rembang.",
			"Mendobrak tradisi pingitan ningrat yang membelenggu kebebasan intelektual wanita.",
			"Hari kelahirannya pada tanggal 21 April diperingati secara nasional di seluruh Indonesia.",
		],
		trivia:
			"Surat-surat Kartini yang dikirim ke sahabat penanya di Belanda, J.H. Abendanon, membahas tidak hanya nasib perempuan, tetapi juga kritik tajam atas penindasan kolonial dan pentingnya spiritualitas modern.",
		famousQuote:
			"Tahukah engkau semboyanku? 'Aku mau!' Dua patah kata yang ringkas itu sudah beberapa kali mendukung dan membawaku melintasi gunung kesulitan.",
		keyAction:
			"Membuka jalan pendidikan modern dan kesetaraan hak bagi kaum perempuan pribumi.",
		avatarIcon: "🌺",
		significanceTag: "Pelopor Emansipasi Wanita",
	},
	{
		id: "kapitan-pattimura",
		name: "Kapitan Pattimura",
		knownAs: "Thomas Matulessy",
		title: "Panglima Perang Maluku Melawan Penjajah Belanda",
		birthYear: 1783,
		deathYear: 1817,
		birthPlace: "Haria, Saparua, Maluku",
		originRegion: "Maluku",
		island: "Kepulauan Maluku",
		category: "perang_daerah",
		period: "1817",
		summary:
			"Pahlawan gagah berani dari Kepulauan Lease Maluku yang memimpin rakyat merebut Benteng Duurstede dan menumpas tentara kolonial Belanda dalam perang mempertahankan tanah air.",
		clues: [
			"Memimpin penyerbuan spektakuler merebut Benteng Duurstede di Pulau Saparua pada Mei 1817.",
			"Dipilih secara mufakat oleh para raja dan patih di Maluku sebagai panglima tertinggi bergelar Kapitan.",
			"Gugur di tiang gantung di Benteng Victoria Ambon setelah dikhianati.",
			"Pernah menjabat sebagai sersan militer di kesatuan militer Inggris sebelum Belanda kembali berkuasa.",
		],
		trivia:
			"Sebelum tali gantungan dikalungkan pada 16 Desember 1817, Pattimura berseru lantang: 'Pattimura-Pattimura tua boleh dihancurkan, tetapi sekali waktu kelak Pattimura-Pattimura muda akan bangkit!'",
		famousQuote:
			"Selamat jalan saudara-saudara! Pattimura-Pattimura tua boleh dihancurkan, tetapi kelak Pattimura muda akan bangkit!",
		keyAction:
			"Mengobarkan perang semesta rakyat Maluku 1817 dan merebut Benteng Duurstede.",
		avatarIcon: "🛡️",
		significanceTag: "Pahlawan Tanah Rempah Maluku",
	},
	{
		id: "tuanku-imam-bonjol",
		name: "Tuanku Imam Bonjol",
		knownAs: "Muhammad Syahab / Peto Syarif",
		title: "Pemimpin Perang Padri (1803–1838)",
		birthYear: 1772,
		deathYear: 1864,
		birthPlace: "Bonjol, Pasaman, Sumatera Barat",
		originRegion: "Sumatera Barat",
		island: "Sumatera",
		category: "perang_daerah",
		period: "1821–1838",
		summary:
			"Ulama besar dan panglima perang Minangkabau yang mempersatukan Kaum Adat dan Kaum Agama dalam Perang Padri untuk melawan agresi imperialisme Belanda.",
		clues: [
			"Mempertahankan Benteng Bonjol berlapis tanah liat dari gempuran artileri Belanda selama bertahun-tahun.",
			"Mempersatukan Kaum Adat dan Kaum Agama dengan konsensus 'Adat basandi syarak, syarak basandi Kitabullah'.",
			"Dikhianati Belanda dalam sebuah perundingan damai hingga diasingkan ke Cianjur, Ambon, dan Manado.",
			"Gambar potret beliau pernah diabadikan pada uang kertas Rupiah pecahan lima ribu.",
		],
		trivia:
			"Benteng Bonjol memiliki parit pertahanan sedalam 3 meter dengan pagar bambu berduri setinggi 4 meter yang membuat pasukan elit militer Belanda kewalahan selama hampir 3 tahun pengepungan.",
		famousQuote:
			"Menyesal saya mengapa kaum Adat dan kaum Padri dahulu bertengkar, padahal kita sama-sama bertanah air dan bersaudara.",
		keyAction:
			"Memimpin perlawanan bersenjata Perang Padri dan menyatukan rakyat Minangkabau melawan penjajah.",
		avatarIcon: "🕌",
		significanceTag: "Panglima Perang Padri",
	},
	{
		id: "sultan-hasanuddin",
		name: "Sultan Hasanuddin",
		knownAs: "I Mallombasi Daeng Mattawang",
		title: "Raja Gowa XVI & Tokoh Perang Makassar",
		birthYear: 1631,
		deathYear: 1670,
		birthPlace: "Makassar, Sulawesi Selatan",
		originRegion: "Sulawesi Selatan",
		island: "Sulawesi",
		category: "perang_daerah",
		period: "1666–1669",
		summary:
			"Raja perkasa dari Kerajaan Kembar Gowa-Tallo yang mempertahankan kedaulatan maritim Nusantara dan menentang keras monopoli rempah-rempah kongsi dagang VOC.",
		clues: [
			"Diberi julukan terhormat oleh musuhnya kompeni Belanda: 'De Haantjes van het Oosten' (Ayam Jantan dari Timur).",
			"Memimpin armada maritim mempertahankan Benteng Somba Opu yang perkasa.",
			"Menolak keras hegemoni monopoli dagang VOC di perairan Indonesia timur.",
			"Terpaksa menandatangani Perjanjian Bungaya tahun 1667 setelah pertempuran laut yang dahsyat.",
		],
		trivia:
			"Julukan 'Ayam Jantan dari Timur' diberikan serdadu VOC karena keberaniannya yang tak pernah gentar menyerang armada kapal perang Belanda yang dilengkapi meriam tercanggih pada zamannya.",
		famousQuote:
			"Layar telah terkembang, kemudi telah terpasang. Lebih baik tenggelam di lautan daripada surut kembali ke pantai.",
		keyAction:
			"Mempertahankan kedaulatan laut bebas Nusantara dari monopoli VOC dalam Perang Makassar.",
		avatarIcon: "⚓",
		significanceTag: "Ayam Jantan dari Timur",
	},
	{
		id: "bung-tomo",
		name: "Sutomo (Bung Tomo)",
		knownAs: "Bung Tomo",
		title: "Pemimpin Pengobar Semangat Pertempuran Surabaya 10 November 1945",
		birthYear: 1920,
		deathYear: 1981,
		birthPlace: "Surabaya, Jawa Timur",
		originRegion: "Jawa Timur",
		island: "Jawa",
		category: "revolusi_kemerdekaan",
		period: "1945–1949",
		summary:
			"Jurnalis muda dan orator karismatik yang membakar patriotisme arek-arek Suroboyo melalui siaran radio gerilya untuk mempertahankan Republik melawan ultimatum pasukan Sekutu dan NICA.",
		clues: [
			"Memekikkan pidato berapi-api lewat stasiun Radio Pemberontakan yang memompa nyali pejuang.",
			"Menyulut pertempuran terbesar pascaproklamasi pada 10 November 1945 yang diabadikan sebagai Hari Pahlawan.",
			"Menentang ultimatum Mayor Jenderal Mansergh dari militer Inggris yang menyuruh rakyat menyerahkan senjata.",
			"Pernah menjadi wartawan kantor berita Domei dan Kantor Berita Antara.",
		],
		trivia:
			"Siaran radio Bung Tomo dipancarkan secara berpindah-pindah dengan pemancar darurat sederhana, namun suaranya menjangkau sampai ke pelosok Jawa Timur dan memicu ribuan pemuda berbondong-bondong datang ke Surabaya.",
		famousQuote:
			"Selama banteng-banteng Indonesia masih mempunyai darah merah yang dapat membikin secarik kain putih menjadi merah dan putih, selama itu kita tidak akan menyerah!",
		keyAction:
			"Mengobarkan perlawanan rakyat Surabaya dalam pertempuran mempertahankan kemerdekaan 10 November 1945.",
		avatarIcon: "🎙️",
		significanceTag: "Pengobar Semangat Hari Pahlawan",
	},
	{
		id: "dewi-sartika",
		name: "Raden Dewi Sartika",
		knownAs: "Ibu Dewi Sartika",
		title: "Perintis Pendidikan Kaum Wanita di Tatar Pasundan",
		birthYear: 1884,
		deathYear: 1947,
		birthPlace: "Cicalengka, Bandung, Jawa Barat",
		originRegion: "Jawa Barat",
		island: "Jawa",
		category: "pendidikan",
		period: "1904–1947",
		summary:
			"Pejuang pendidikan wanita Sunda yang mendirikan Sakola Istri pada tahun 1904 di Pendopo Kabupaten Bandung, membuka akses membaca, menulis, dan ketrampilan mandiri bagi perempuan.",
		clues: [
			"Mendirikan 'Sakola Istri' (Sekolah Istri) pertama di Hindia Belanda pada 16 Januari 1904.",
			"Mengajarkan perempuan pribumi membaca, menulis, berhitung, memasak, menjahit, dan merenda.",
			"Sekolahnya berkembang pesat dan diubah namanya menjadi 'Sakola Kautamaan Istri'.",
			"Dianugerahi bintang jasa Orde van Oranje-Nassau oleh pemerintah pada peringatan 35 tahun sekolahnya.",
		],
		trivia:
			"Sejak usia 10 tahun, Dewi Sartika sudah gemar bermain sekolah-sekolahan bersama anak-anak pembantu kepatihan, menggunakan arang dan pecahan genting sebagai kapur serta papan pintu sebagai papan tulis.",
		famousQuote:
			"Pendidikan adalah kunci untuk mengangkat derajat dan martabat kaum wanita agar berdikari.",
		keyAction:
			"Mendirikan sekolah kejuruan wanita formal pertama dan mengembangkannya di seluruh tanah Pasundan.",
		avatarIcon: "🌸",
		significanceTag: "Pendidik Tatar Sunda",
	},
	{
		id: "sutan-sjahrir",
		name: "Sutan Sjahrir",
		knownAs: "Bung Kecil",
		title: "Perdana Menteri Pertama RI & Arsitek Diplomasi Internasional",
		birthYear: 1909,
		deathYear: 1966,
		birthPlace: "Padang Panjang, Sumatera Barat",
		originRegion: "Sumatera Barat",
		island: "Sumatera",
		category: "diplomasi",
		period: "1931–1966",
		summary:
			"Intelektual demokratis dan diplomat ulung yang menjabat sebagai Perdana Menteri pertama Republik Indonesia pada usia 36 tahun, membuka mata dunia internasional di forum PBB.",
		clues: [
			"Menjadi Perdana Menteri termuda di dunia saat dilantik pada November 1945.",
			"Berpidato di Dewan Keamanan PBB Lake Success New York 1947 yang mematahkan propaganda kolonial Belanda.",
			"Menulis risalah legendaris 'Perdjoangan Kita' yang menjadi panduan arah revolusi Indonesia.",
			"Mendirikan Partai Sosialis Indonesia (PSI) yang berhaluan sosial-demokrat.",
		],
		trivia:
			"Pidato diplomasi Sjahrir di PBB begitu memikat para diplomat internasional hingga New York Herald Tribune menyebutnya sebagai salah satu juru bicara Asia yang paling jernih dan beradab.",
		famousQuote:
			"Kemerdekaan bersuara, berekspresi, dan berserikat adalah napas kehidupan bagi manusia merdeka.",
		keyAction:
			"Menyelamatkan eksistensi Republik di pentas diplomatik dunia dan memimpin perundingan Linggarjati.",
		avatarIcon: "🕊️",
		significanceTag: "Perdana Menteri & Diplomat Visioner",
	},
	{
		id: "hos-tjokroaminoto",
		name: "H.O.S. Tjokroaminoto",
		knownAs: "Guru Bangsa",
		title: "Pemimpin Sarekat Islam & Guru Para Tokoh Pergerakan",
		birthYear: 1882,
		deathYear: 1934,
		birthPlace: "Madiun, Jawa Timur",
		originRegion: "Jawa Timur",
		island: "Jawa",
		category: "pergerakan_nasional",
		period: "1912–1934",
		summary:
			"Pemimpin karismatik Sarekat Islam yang dijuluki Belanda 'De Ongekroonde Koning van Java' (Raja Jawa Tanpa Mahkota). Di rumah kosnya, ia mendidik calon-calon pemimpin besar bangsa dengan aneka spektrum pemikiran.",
		clues: [
			"Memimpin Sarekat Islam hingga berkembang menjadi organisasi pergerakan massa raksasa pertama.",
			"Dijuluki pihak kolonial Belanda sebagai 'Raja Jawa Tanpa Mahkota'.",
			"Menjadi guru sekaligus bapak ideologis dari tokoh-tokoh besar seperti Soekarno, Musso, Semaun, dan Kartosuwiryo.",
			"Mencetuskan doktrin persatuan: 'Zelfbestuur' (pemerintahan sendiri bagi bangsa bumiputra).",
		],
		trivia:
			"Di rumahnya di Peneleh Surabaya, Tjokroaminoto melatih para pemuda berpidato setiap malam dengan intonasi vokal keras di dalam kamar mandi yang bergema.",
		famousQuote:
			"Setinggi-tinggi ilmu, semurni-murni tauhid, sepintar-pintar siasat.",
		keyAction:
			"Membangkitkan kesadaran politik modern rakyat bumiputra melalui organisasi Sarekat Islam.",
		avatarIcon: "👑",
		significanceTag: "Guru Para Tokoh Pergerakan",
	},
	{
		id: "maria-walanda-maramis",
		name: "Maria Walanda Maramis",
		knownAs: "Maria Walanda Maramis",
		title: "Pahlawan Pergerakan Hak Perempuan Minahasa",
		birthYear: 1872,
		deathYear: 1924,
		birthPlace: "Kema, Minahasa Utara, Sulawesi Utara",
		originRegion: "Sulawesi Utara",
		island: "Sulawesi",
		category: "emansipasi",
		period: "1917–1924",
		summary:
			"Tokoh emansipasi perempuan dari Minahasa yang mendirikan organisasi PIKAT pada 1917 dan memperjuangkan hak pilih serta hak suara politik wanita di dewan perwakilan.",
		clues: [
			"Mendirikan perkumpulan PIKAT (Percintaan Ibu Kepada Anak Temurunnya) pada Juli 1917.",
			"Memperjuangkan hak suara dan hak pilih kaum perempuan di lembaga perwakilan Minahasa Raad.",
			"Mendirikan sekolah rumah tangga untuk membekali wanita dengan kemandirian dan gizi keluarga.",
			"Menulis kolom opini di surat kabar lokal 'Tjahaja Siang' tentang peran krusial ibu bagi kemajuan bangsa.",
		],
		trivia:
			"Berkat kegigihannya, pada tahun 1921 pemerintah kolonial akhirnya mengizinkan kaum perempuan di Minahasa memiliki hak pilih di dewan perwakilan rakyat daerah (Minahasa Raad).",
		famousQuote:
			"Ibu adalah pendidik pertama dan utama; kemajuan suatu bangsa bermula dari pangkuan para ibu.",
		keyAction:
			"Memenangkan hak suara politik perempuan pertama di Hindia Belanda dan mendirikan organisasi PIKAT.",
		avatarIcon: "🌱",
		significanceTag: "Emansipator Sulawesi Utara",
	},
	{
		id: "i-gusti-ngurah-rai",
		name: "I Gusti Ngurah Rai",
		knownAs: "Kolonel Ngurah Rai",
		title: "Panglima Resimen Sunda Kecil & Pemimpin Puputan Margarana",
		birthYear: 1917,
		deathYear: 1946,
		birthPlace: "Carangsari, Badung, Bali",
		originRegion: "Bali",
		island: "Kepulauan Nusa Tenggara",
		category: "revolusi_kemerdekaan",
		period: "1945–1946",
		summary:
			"Komandan Resimen Sunda Kecil yang memimpin perlawanan bersenjata perang habis-habisan (Puputan Margarana) melawan tentara NICA Belanda untuk mempertahankan kedaulatan tanah Bali sebagai bagian NKRI.",
		clues: [
			"Memimpin pasukan Ciung Wanara dalam pertempuran legendaris Puputan Margarana pada 20 November 1946.",
			"Menolak tawaran kemewahan dan jabatan empuk dari Belanda untuk mendirikan Negara Indonesia Timur.",
			"Mengobarkan prinsip perang suci habis-habisan (puputan) sampai titik darah penghabisan.",
			"Namanya diabadikan sebagai nama Bandara Internasional utama di Pulau Dewata Bali.",
		],
		trivia:
			"Surat balasannya kepada Letkol Belanda J.B.T. Konig menyatakan: 'Bali bukanlah tempat perundingan kompromi. Kami hanya mengakui kedaulatan 100% Republik Indonesia!'",
		famousQuote:
			"Merdeka atau mati! Kami tidak akan pernah menjual kemerdekaan tanah air kami kepada siapa pun.",
		keyAction:
			"Memimpin Puputan Margarana mempertahankan kesetiaan rakyat Bali kepada Republik Indonesia.",
		avatarIcon: "🔥",
		significanceTag: "Panglima Puputan Margarana",
	},
	{
		id: "cut-meutia",
		name: "Cut Nyak Meutia",
		knownAs: "Cut Meutia",
		title: "Srikandi Perang Gerilya Pasai Aceh",
		birthYear: 1870,
		deathYear: 1910,
		birthPlace: "Keureutoe, Pasai, Aceh Utara",
		originRegion: "Aceh",
		island: "Sumatera",
		category: "perang_daerah",
		period: "1901–1910",
		summary:
			"Pemimpin perlawanan bersenjata gerilya di hutan belantara Pasai Aceh Utara yang gigih menyerang pos-pos militer Marsose Belanda hingga gugur di medan Alue Kurieng.",
		clues: [
			"Memimpin perlawanan gerilya bersama suaminya Teuku Chik Tunong dan kemudian Pang Nanggroe.",
			"Gugur gagah berani di medan pertempuran Alue Kurieng pada 24 Oktober 1910 dengan rencong di tangan.",
			"Dikenal dengan taktik serang dan lenyap yang memorakporandakan korps elit Marsose Belanda.",
			"Wajahnya diabadikan dalam mata uang rupiah kertas pecahan seribu rupiah emisi 2016 dan 2022.",
		],
		trivia:
			"Meskipun suaminya telah dihukum tembak mati oleh Belanda di pantai Lhokseumawe, Cut Meutia pantang menyerah dan terus memimpin sisa pasukan masuk jauh ke rimba raya Aceh.",
		famousQuote:
			"Pantang menyerah surut selangkah, pedang kebenaran tidak akan pernah tumpul di hadapan kelaliman.",
		keyAction:
			"Memimpin perang gerilya menumpas korps Marsose di belantara Pasai selama satu dekade.",
		avatarIcon: "🗡️",
		significanceTag: "Srikandi Rimba Pasai",
	},
	{
		id: "frans-kaisiepo",
		name: "Frans Kaisiepo",
		knownAs: "Frans Kaisiepo",
		title: "Tokoh Pejuang Integrasi Papua & Gubernur Papua Keempat",
		birthYear: 1921,
		deathYear: 1979,
		birthPlace: "Pulau Biak, Papua",
		originRegion: "Papua",
		island: "Papua",
		category: "diplomasi",
		period: "1945–1979",
		summary:
			"Tokoh nasionalis asal Papua yang mempopulerkan akronim 'IRIAN' (Ikut Republik Indonesia Anti Nederland) pada Konferensi Malino 1946 dan gigih memperjuangkan integrasi Papua ke NKRI.",
		clues: [
			"Mengusulkan nama 'IRIAN' dalam Konferensi Malino tahun 1946 sebagai perwakilan Papua.",
			"Menolak keras ditunjuk sebagai delegasi Belanda untuk Konferensi Meja Bundar (KMB) hingga dipenjarakan.",
			"Mendirikan Partai Indonesia Merdeka (PIM) di Biak untuk melawan kolonialisme Belanda.",
			"Menjabat sebagai Gubernur Irian Barat dan mengawal suksesnya Penentuan Pendapat Rakyat (PEPERA) 1969.",
		],
		trivia:
			"Kata 'Irian' yang diusulkannya berasal dari bahasa Biak yang bermakna 'cahaya yang memancar dari laut' sekaligus akronim patriotik 'Ikut Republik Indonesia Anti Nederland'.",
		famousQuote:
			"Papua adalah bagian yang tak terpisahkan dari darah dan raga Republik Indonesia.",
		keyAction:
			"Memperjuangkan penyatuan Papua ke pangkuan Ibu Pertiwi di forum perundingan dan lapangan.",
		avatarIcon: "🦅",
		significanceTag: "Pelopor Integrasi Papua NKRI",
	},
	{
		id: "tan-malaka",
		name: "Tan Malaka",
		knownAs: "Ibrahim Gelar Datuk Sutan Malaka",
		title: "Bapak Republik Indonesia & Filsuf Pergerakan",
		birthYear: 1897,
		deathYear: 1949,
		birthPlace: "Nagari Pandam Gadang, Suliki, Sumatera Barat",
		originRegion: "Sumatera Barat",
		island: "Sumatera",
		category: "pemikir_bangsa",
		period: "1921–1949",
		summary:
			"Pemikir revolusioner dan pejuang bawah tanah yang pertama kali menulis konsep cetak biru negara Republik Indonesia dalam bukunya 'Naar de Republiek Indonesia' pada tahun 1925, jauh sebelum Indonesia merdeka.",
		clues: [
			"Menulis mahakarya filosofis 'Madilog' (Materialisme, Dialektika, dan Logika) saat bersembunyi dari kejaran intelijen penjajah.",
			"Orang pertama yang menggagas konsep negara 'Republik Indonesia' dalam buku tahun 1925.",
			"Bergerak puluhan tahun dalam penyamaran lintas benua (Moskow, Berlin, Manila, Bangkok, Shanghai, Singapura).",
			"Mendorong para pemuda di Asrama Menteng 31 untuk mendesak Proklamasi Kemerdekaan segera dikumandangkan.",
		],
		trivia:
			"Tan Malaka memiliki setidaknya 23 nama samaran internasional seperti Elias Fuentes, Tan Ming Siong, dan Hasan Gozali untuk mengecoh polisi rahasia dari 5 negara imperialis.",
		famousQuote:
			"Ingatlah! Bahwa dari dalam kubur, suara saya akan lebih keras daripada dari atas bumi!",
		keyAction:
			"Menulis rancang bangun Republik Indonesia dan merumuskan filsafat berpikir kritis Madilog.",
		avatarIcon: "📖",
		significanceTag: "Penggagas Konsep Republik Pertama",
	},
	{
		id: "teuku-umar",
		name: "Teuku Umar",
		knownAs: "Teuku Umar Johan Pahlawan",
		title: "Panglima Perang Gerilya Aceh",
		birthYear: 1854,
		deathYear: 1899,
		birthPlace: "Meulaboh, Aceh Barat",
		originRegion: "Aceh",
		island: "Sumatera",
		category: "perang_daerah",
		period: "1873–1899",
		summary:
			"Pahlawan perang Aceh berjiwa cerdik yang bersiasat berpura-pura menyerah kepada Belanda untuk mendapatkan ribuan pucuk senjata dan logistik peluru, lalu berbalik menyerang Belanda secara telak.",
		clues: [
			"Menerapkan siasat perang pura-pura bekerja sama dengan Belanda untuk merampas persenjataan modern mereka.",
			"Suami seperjuangan dari pahlawan wanita Cut Nyak Dien.",
			"Diberi gelar 'Teuku Umar Johan Pahlawan' oleh pemerintah kolonial sebelum beliau membelot kembali ke barisan pejuang Aceh.",
			"Gugur secara kesatria dalam pertempuran mendadak di pantai Suak Ujong Kalak Meulaboh.",
		],
		trivia:
			"Siasat pura-pura menyerahnya kepada Gubernur Militer Belanda Deykerhoff berhasil membawa lari 800 pucuk senapan modern, 25.000 butir peluru, dan dana puluhan ribu gulden untuk perjuangan rakyat Aceh.",
		famousQuote:
			"Beungoh singoh geutanyoe jep kupi di keude Meulaboh, atawa troeh mata ari geutanyoe jep kupi di syurga! (Besok pagi kita minum kopi di Meulaboh atau kita minum kopi di surga!)",
		keyAction:
			"Melakukan taktik muslihat militer brilian merebut persenjataan modern dari kolonial Belanda.",
		avatarIcon: "☕",
		significanceTag: "Ahli Taktik Perang Aceh",
	},
	{
		id: "martha-christina-tiahahu",
		name: "Martha Christina Tiahahu",
		knownAs: "Srikandi Nusa Laut",
		title: "Pahlawan Kemerdekaan Termuda Indonesia",
		birthYear: 1800,
		deathYear: 1818,
		birthPlace: "Abubu, Nusalaut, Maluku Tengah",
		originRegion: "Maluku",
		island: "Kepulauan Maluku",
		category: "perang_daerah",
		period: "1817–1818",
		summary:
			"Gadis remaja pemberani asal Pulau Nusalaut yang pada usia 17 tahun ikut memegang tombak di garis depan pertempuran mendampingi ayahnya dan Kapitan Pattimura melawan tentara kolonial Belanda.",
		clues: [
			"Turun langsung ke medan tempur memegang senjata pada usia belia (17 tahun).",
			"Mendampingi ayahnya Kapten Paulus Tiahahu dan Kapitan Pattimura dalam Perang Maluku 1817.",
			"Melakukan aksi mogok makan memprotes penjajah hingga wafat di atas kapal perang Evertsen.",
			"Jasadnya dilarung di Laut Banda dengan penghormatan tradisi maritim.",
		],
		trivia:
			"Saat kehabisan peluru dalam pertempuran di Desa Beverwijk, Martha Christina bersama para pejuang wanita melemparkan batu-batu karang ke arah serdadu Belanda yang mencoba merangsek maju.",
		famousQuote:
			"Lebih baik gugur terbuang di lautan luas daripada sudi menerima belas kasihan kompeni penjajah.",
		keyAction:
			"Memimpin perlawanan bersenjata anak muda Maluku dan teguh menolak tunduk pada kolonial hingga wafat.",
		avatarIcon: "🏹",
		significanceTag: "Srikandi Termuda Pejuang Rempah",
	},
	{
		id: "sam-ratulangi",
		name: "Dr. Gerungan Saul Samuel Jacob Ratulangi",
		knownAs: "Sam Ratulangi",
		title: "Gubernur Pertama Sulawesi & Cendekiawan Minahasa",
		birthYear: 1890,
		deathYear: 1949,
		birthPlace: "Tondano, Sulawesi Utara",
		originRegion: "Sulawesi Utara",
		island: "Sulawesi",
		category: "pergerakan_nasional",
		period: "1919–1949",
		summary:
			"Doktor matematika pertama Indonesia, jurnalis, dan politisi ulung yang diangkat menjadi Gubernur pertama Provinsi Sulawesi pascakemerdekaan, mempopulerkan filosofi kemanusiaan universal 'Si Tou Timou Tumou Tou'.",
		clues: [
			"Mencetuskan falsafah hidup Minahasa yang terkenal: 'Si Tou Timou Tumou Tou' (Manusia hidup untuk memanusiakan manusia lain).",
			"Menjadi Gubernur pertama pulau Sulawesi setelah Proklamasi 1945.",
			"Meraih gelar Doktor Sains dalam bidang Fisika dan Matematika dari Universitas Zurich Swiss tahun 1919.",
			"Anggota Panitia Persiapan Kemerdekaan Indonesia (PPKI) yang mengesahkan UUD 1945.",
		],
		trivia:
			"Sam Ratulangi berhasil membebaskan ribuan pekerja paksa tambang besi di Pulau Sebuku dari perlakuan tidak manusiawi kolonial Belanda melalui pembelaannya di dewan Volksraad.",
		famousQuote:
			"Si Tou Timou Tumou Tou (Manusia baru dapat disebut manusia jika ia bermanfaat bagi manusia lainnya).",
		keyAction:
			"Mengorganisir pemerintahan Republik di seluruh Pulau Sulawesi dan mengadvokasi hak buruh di parlemen.",
		avatarIcon: "🌐",
		significanceTag: "Filosof Kemanusiaan Sulawesi",
	},
	{
		id: "silas-papare",
		name: "Silas Papare",
		knownAs: "Silas Papare",
		title: "Pejuang Pembebasan Irian Barat & Pendiri PKII",
		birthYear: 1918,
		deathYear: 1978,
		birthPlace: "Serui, Kepulauan Yapen, Papua",
		originRegion: "Papua",
		island: "Papua",
		category: "revolusi_kemerdekaan",
		period: "1945–1969",
		summary:
			"Pahlawan asal Serui Papua yang mendirikan Partai Kemerdekaan Indonesia Irian (PKII) pada 1946 dan menjadi anggota delegasi Republik Indonesia dalam New York Agreement 1962.",
		clues: [
			"Mendirikan Partai Kemerdekaan Indonesia Irian (PKII) pada November 1946 di Serui.",
			"Menjadi delegasi kunci Republik Indonesia dalam Perjanjian New York 1962 di Markas Besar PBB.",
			"Membentuk Badan Perjuangan Irian di Yogyakarta untuk menggalang relawan pembebasan tanah Papua.",
			"Berulang kali dijebloskan ke penjara oleh Belanda karena memimpin pemberontakan pro-Republik di Biak.",
		],
		trivia:
			"Saat dipenjara oleh Belanda di Serui pada 1945, Silas Papare berkenalan dengan Sam Ratulangi yang sedang diasingkan ke sana. Pertemuan dua tokoh ini kian memperkokoh tekadnya menyatukan Irian ke dalam NKRI.",
		famousQuote:
			"Jangan biarkan sebutir pasir pun dari tanah Papua jatuh ke tangan penjajah. Papua adalah darah daging Indonesia!",
		keyAction:
			"Mendirikan PKII dan memimpin perjuangan politik-diplomasi mengembalikan Irian Barat ke pangkuan Ibu Pertiwi.",
		avatarIcon: "🌴",
		significanceTag: "Singa Perjuangan Irian",
	},
	{
		id: "ahmad-yani",
		name: "Jenderal TNI Anumerta Ahmad Yani",
		knownAs: "Jenderal Ahmad Yani",
		title: "Pahlawan Revolusi & Panglima Angkatan Darat (Men/Pangad)",
		birthYear: 1922,
		deathYear: 1965,
		birthPlace: "Jenar, Purworejo, Jawa Tengah",
		originRegion: "Jawa Tengah",
		island: "Jawa",
		category: "bela_negara",
		period: "1945–1965",
		summary:
			"Jenderal militer brilian komandan pasukan khusus Banteng Raiders yang menjadi Menteri/Panglima Angkatan Darat kesayangan Presiden Soekarno, gugur sebagai Pahlawan Revolusi pada peristiwa 1 Oktober 1965.",
		clues: [
			"Membentuk dan memimpin pasukan elit pertama Angkatan Darat bernama 'Banteng Raiders'.",
			"Memimpin Operasi 17 Agustus 1958 di Padang Sumatera Barat untuk meredakan pergolakan PRRI.",
			"Menjabat Menteri/Panglima Angkatan Darat (Men/Pangad) pada masa konfrontasi nasional.",
			"Gugur di kediamannya di Menteng Jakarta dalam peristiwa Gerakan 30 September.",
		],
		trivia:
			"Ahmad Yani merupakan salah satu perwira terbaik yang lulus dengan predikat istimewa dari Command and General Staff College di Fort Leavenworth, Kansas, Amerika Serikat.",
		famousQuote:
			"Prajurit sejati tidak pernah menghitung untung rugi saat panggilan mempertahankan kehormatan negara berkumandang.",
		keyAction:
			"Membangun profesionalisme modern Angkatan Darat dan menjaga keutuhan teritorial bangsa dari disintegrasi.",
		avatarIcon: "⭐",
		significanceTag: "Pahlawan Revolusi & Pangad",
	},
	{
		id: "mohammad-yamin",
		name: "Prof. Mr. Mohammad Yamin",
		knownAs: "Mohammad Yamin",
		title: "Perumus Sumpah Pemuda & Konseptor Batas Wilayah NKRI",
		birthYear: 1903,
		deathYear: 1962,
		birthPlace: "Sawahlunto, Sumatera Barat",
		originRegion: "Sumatera Barat",
		island: "Sumatera",
		category: "pemikir_bangsa",
		period: "1928–1962",
		summary:
			"Sastrawan, sejarawan, dan pakar hukum yang menyusun teks ikrar bersejarah Sumpah Pemuda 1928, serta menjadi salah satu perumus utama Piagam Jakarta dan Undang-Undang Dasar 1945 dalam BPUPKI.",
		clues: [
			"Menuliskan draft tiga butir ikrar bersejarah 'Sumpah Pemuda' pada Kongres Pemuda II tanggal 28 Oktober 1928.",
			"Salah satu tokoh perumus dasar negara dan UUD 1945 dalam sidang BPUPKI.",
			"Pelopor puisi modern Indonesia dan penulis naskah drama sejarah kebesaran Nusantara Gajah Mada.",
			"Mengusulkan bahasa Melayu (yang berkembang menjadi Bahasa Indonesia) sebagai bahasa persatuan nasional.",
		],
		trivia:
			"Secarik kertas draf ikrar Sumpah Pemuda ditulis Yamin secara spontan lalu disodorkannya kepada Soegondo Djojopoespito (ketua kongres) sambil berbisik: 'Ik heb een eleganter formulering voor de resolutie' (Saya punya rumusan resolusi yang lebih elegan).",
		famousQuote:
			"Cita-cita persatuan Indonesia itu bukan omong kosong, tetapi benar-benar didukung oleh kekuatan-kekuatan yang timbul pada akar sejarah bangsa kita sendiri.",
		keyAction:
			"Merumuskan ikrar Sumpah Pemuda 1928 dan merancang batas teritorial geopolitik Republik Indonesia.",
		avatarIcon: "📜",
		significanceTag: "Perumus Sumpah Pemuda & BPUPKI",
	},
	{
		id: "kh-ahmad-dahlan",
		name: "K.H. Ahmad Dahlan",
		knownAs: "Muhammad Darwis",
		title: "Pendiri Persyarikatan Muhammadiyah & Pembaharu Islam",
		birthYear: 1868,
		deathYear: 1923,
		birthPlace: "Kauman, Yogyakarta",
		originRegion: "D.I. Yogyakarta",
		island: "Jawa",
		category: "pendidikan",
		period: "1912–1923",
		summary:
			"Ulama pembaharu yang mendirikan organisasi Muhammadiyah pada tahun 1912, mempelopori integrasi pendidikan agama dan ilmu pengetahuan umum modern, serta mendirikan balai pengobatan dan panti asuhan bagi kaum duafa.",
		clues: [
			"Mendirikan organisasi sosial keagamaan Muhammadiyah di Yogyakarta pada 18 November 1912.",
			"Mengajarkan teologi Surat Al-Ma'un berulang-ulang sampai murid-muridnya mempraktikkan langsung menolong fakir miskin.",
			"Mempelopori sekolah modern yang menggabungkan kurikulum madrasah dan sains barat.",
			"Mengoreksi arah kiblat masjid-masjid di Yogyakarta berdasarkan ilmu falak dan hisab astronomi.",
		],
		trivia:
			"Ketika ditanya mengapa mengajarkan Surat Al-Ma'un selama berbulan-bulan, Kiai Dahlan menjawab: 'Hafal ayat itu mudah, tapi apakah kita sudah memberi makan anak yatim dan menolong orang miskin seperti yang diperintahkan ayat ini?'",
		famousQuote:
			"Hidup-hidupilah Muhammadiyah, jangan mencari hidup di Muhammadiyah.",
		keyAction:
			"Mendirikan jaringan sekolah modern, rumah sakit, dan panti asuhan pertama yang dikelola bumiputra.",
		avatarIcon: "☀️",
		significanceTag: "Pendiri Muhammadiyah & Pelopor Al-Maun",
	},
	{
		id: "kh-hasyim-asyari",
		name: "Hadratussyaikh K.H. Hasyim Asy'ari",
		knownAs: "Mbah Hasyim",
		title: "Pendiri Nahdlatul Ulama & Penggelora Resolusi Jihad 1945",
		birthYear: 1871,
		deathYear: 1947,
		birthPlace: "Jombang, Jawa Timur",
		originRegion: "Jawa Timur",
		island: "Jawa",
		category: "pergerakan_nasional",
		period: "1926–1947",
		summary:
			"Ulama besar pendiri Nahdlatul Ulama (NU) dan Pesantren Tebuireng, penggelora 'Resolusi Jihad' pada 22 Oktober 1945 yang mewajibkan umat membela kedaulatan tanah air dari penjajah Sekutu dan NICA.",
		clues: [
			"Mendirikan organisasi Islam terbesar di Indonesia, Nahdlatul Ulama (NU), pada tahun 1926.",
			"Mengeluarkan fatwa legendaris 'Resolusi Jihad' 22 Oktober 1945 yang mewajibkan perang mempertahankan kemerdekaan.",
			"Mendirikan Pesantren Tebuireng di Jombang yang menjadi kawah candradimuka ribuan ulama Nusantara.",
			"Ayah dari pahlawan nasional K.H. Wahid Hasyim dan kakek dari Presiden ke-4 RI Gus Dur.",
		],
		trivia:
			"Fatwa Resolusi Jihad beliau yang menegaskan 'Hubbul wathan minal iman' (Cinta tanah air sebagian dari iman) membangkitkan santri dan laskar rakyat tumpah ruah ke Surabaya menyongsong Pertempuran 10 November 1945.",
		famousQuote:
			"Membela tanah air dari penjajahan adalah fardhu 'ain (kewajiban mutlak perorangan) bagi setiap orang yang berada di dalamnya.",
		keyAction:
			"Mendirikan Nahdlatul Ulama dan menggelorakan Resolusi Jihad 22 Oktober membela kemerdekaan Indonesia.",
		avatarIcon: "🌙",
		significanceTag: "Hadratussyaikh & Penggelora Resolusi Jihad",
	},
	{
		id: "rasuna-said",
		name: "Hajjah Rangkayo Rasuna Said",
		knownAs: "Rasuna Said",
		title: "Singa Betina Pergerakan Nasional & Orator Kemerdekaan",
		birthYear: 1910,
		deathYear: 1965,
		birthPlace: "Maninjau, Agam, Sumatera Barat",
		originRegion: "Sumatera Barat",
		island: "Sumatera",
		category: "emansipasi",
		period: "1930–1965",
		summary:
			"Pejuang wanita perintis kemerdekaan dan orator ulung Minangkabau yang berani mengecam penindasan Belanda di mimbar umum, menjadikannya wanita Indonesia pertama yang dijerat hukum pidana kolonial (Speekdelict).",
		clues: [
			"Wanita Indonesia pertama yang dijatuhi hukuman penjara karena delik berbicara (Speekdelict) mengecam kolonialisme.",
			"Dikenal sebagai 'Singa Betina' karena pidatonya yang lantang membakar semangat kemerdekaan rakyat.",
			"Mendirikan Persatuan Muslimin Indonesia (PERMI) dan aktif memimpin surat kabar perjuangan.",
			"Namanya kini diabadikan sebagai salah satu jalan protokol utama di kawasan Segitiga Emas Jakarta.",
		],
		trivia:
			"Di depan pengadilan kolonial Belanda, beliau menolak meminta ampun dan dengan tegar menyatakan bahwa kemerdekaan Indonesia adalah hak mutlak yang tidak bisa ditawar oleh penjajah.",
		famousQuote:
			"Kaum wanita tidak boleh hanya berpangku tangan di dapur; mereka harus berdiri di garda depan politik merebut kemerdekaan!",
		keyAction:
			"Mempelopori keterlibatan radikal kaum perempuan di gelanggang politik dan media massa pergerakan.",
		avatarIcon: "🎙️",
		significanceTag: "Singa Betina Pergerakan Nasional",
	},
	{
		id: "johannes-leimena",
		name: "Dr. Johannes Leimena",
		knownAs: "Om Jo",
		title: "Bapak Puskesmas & Negosiator Ulung Diplomasi Damai",
		birthYear: 1905,
		deathYear: 1977,
		birthPlace: "Ambon, Maluku",
		originRegion: "Maluku",
		island: "Kepulauan Maluku",
		category: "diplomasi",
		period: "1946–1977",
		summary:
			"Dokter dan politisi berintegritas tanpa cela yang menjabat menteri di 18 kabinet berbeda tanpa henti, menggagas 'Bandung Plan' cikal bakal Puskesmas, dan menjadi anggota delegasi Perundingan Linggarjati, Renville, hingga KMB.",
		clues: [
			"Menjabat sebagai Menteri Kesehatan RI selama lebih dari 20 tahun melintasi aneka kabinet yang berganti-ganti.",
			"Penggagas 'Bandung Plan' (1951) yang menjadi fondasi berdirinya Pusat Kesehatan Masyarakat (Puskesmas) di seluruh Indonesia.",
			"Tokoh kunci delegasi Indonesia dalam Perundingan Linggarjati, Renville, dan Konferensi Meja Bundar (KMB).",
			"Sosok negarawan Kristen yang sangat dipercaya oleh Bung Karno dan seluruh fraksi politik karena kejujuran mutlaknya.",
		],
		trivia:
			"Bung Karno menyebut Leimena sebagai 'kejujuran yang berjalan'. Setiap kali ada krisis politik hebat di kabinet, Bung Karno selalu meminta pendapat Om Jo karena ia tidak memiliki ambisi pribadi terselubung.",
		famousQuote:
			"Bagi seorang pelayan publik, politik bukanlah alat meraih kekuasaan, melainkan jalan pengorbanan untuk melayani kesehatan dan martabat rakyat.",
		keyAction:
			"Merancang sistem layanan kesehatan masyarakat terpadu (Puskesmas) dan menegosiasikan kedaulatan di meja diplomasi.",
		avatarIcon: "🏥",
		significanceTag: "Bapak Puskesmas & Negosiator Jujur",
	},
	{
		id: "mohammad-natsir",
		name: "Dr. Mohammad Natsir",
		knownAs: "Pak Natsir",
		title: "Penggagas Mosi Integral 1950 & Perdana Menteri RI",
		birthYear: 1908,
		deathYear: 1993,
		birthPlace: "Alahan Panjang, Solok, Sumatera Barat",
		originRegion: "Sumatera Barat",
		island: "Sumatera",
		category: "diplomasi",
		period: "1932–1993",
		summary:
			"Ulama, intelektual, dan negarawan yang menyelamatkan Indonesia dari perpecahan negara boneka federal RIS lewat 'Mosi Integral Natsir' 1950 yang mengembalikan bentuk Negara Kesatuan Republik Indonesia (NKRI).",
		clues: [
			"Mencetuskan 'Mosi Integral' pada 3 April 1950 di parlemen yang membubarkan RIS dan menyatukan kembali NKRI.",
			"Menjabat sebagai Perdana Menteri Republik Indonesia ke-5 (1950–1951).",
			"Pemimpin partai Masyumi dan Presiden Konferensi Islam Sedunia (World Muslim Congress).",
			"Dikenal dengan gaya hidupnya yang sangat sederhana; jasnya memiliki tambalan dan rumahnya bersahaja.",
		],
		trivia:
			"Saat menjabat Perdana Menteri, beliau sering mengendarai sepeda ontel ke kantor dan menolak mobil dinas mewah, serta jas wolnya diketahui memiliki jahitan tambalan sederhana.",
		famousQuote:
			"Indonesia bukan hanya milik satu golongan, tetapi milik seluruh tumpah darah yang bersatu dalam tekad merdeka.",
		keyAction:
			"Mencetuskan Mosi Integral 1950 yang berhasil memulihkan kembali Negara Kesatuan Republik Indonesia (NKRI).",
		avatarIcon: "🇮🇩",
		significanceTag: "Pencetus Mosi Integral NKRI 1950",
	},
	{
		id: "john-lie",
		name: "Laksamana Muda TNI (Purn.) John Lie",
		knownAs: "Jahja Daniel Dharma / The Black Speedboat",
		title: "Penembus Blokade Laut Angkatan Laut RI",
		birthYear: 1911,
		deathYear: 1988,
		birthPlace: "Manado, Sulawesi Utara",
		originRegion: "Sulawesi Utara",
		island: "Sulawesi",
		category: "bela_negara",
		period: "1946–1966",
		summary:
			"Perwira TNI Angkatan Laut berdarah Tionghoa yang dengan gagah berani mengemudikan kapal cepat 'The Outlaw' menembus blokade ketat armada kapal perang Belanda di Selat Malaka untuk menyelundupkan senjata dan hasil bumi demi logistik Republik.",
		clues: [
			"Memimpin kapal cepat cepat 'The Outlaw' bolak-balik menembus blokade ranjau dan meriam Belanda di Selat Malaka.",
			"Dijuluki media internasional sebagai 'The Black Speedboat' karena aksinya yang tak pernah tertangkap.",
			"Menyelundupkan senjata, peluru, dan radio pemancar untuk mensuplai perjuangan gerilya pejuang kemerdekaan.",
			"Perwira tinggi keturunan Tionghoa pertama yang dianugerahi gelar Pahlawan Nasional Indonesia.",
		],
		trivia:
			"Di kapal The Outlaw, beliau selalu meletakkan Alkitab di samping kemudi. Dalam belasan kali pertempuran sengit dikejar pesawat tempur dan korvet Belanda, kapalnya selalu lolos secara ajaib tanpa pernah tertangkap.",
		famousQuote:
			"Saya adalah putra Indonesia. Jiwa dan raga saya seutuhnya saya persembahkan bagi merah putih di samudra nusantara.",
		keyAction:
			"Menembus blokade maritim Belanda di Selat Malaka untuk memasok senjata dan logistik Republik.",
		avatarIcon: "🛥️",
		significanceTag: "Nakhoda Penembus Blokade Samudra",
	},
	{
		id: "marthen-indey",
		name: "Marthen Indey",
		knownAs: "Marthen Indey",
		title: "Tokoh Perwira Polisi Pejuang Integrasi Papua",
		birthYear: 1912,
		deathYear: 1986,
		birthPlace: "Doromena, Jayapura, Papua",
		originRegion: "Papua",
		island: "Papua",
		category: "bela_negara",
		period: "1945–1969",
		summary:
			"Perwira polisi Belanda asal Papua yang berbalik mendukung kemerdekaan Indonesia setelah bertemu para tahanan politik di Digul, memimpin perlawanan bersenjata melawan Belanda di Jayapura.",
		clues: [
			"Awalnya perwira polisi kolonial di Boven Digoel yang kemudian terinspirasi perjuangan para tawanan politik Indonesia.",
			"Memimpin rencana pemberontakan batalion bersenjata di Papua pada Desember 1945 untuk mengibarkan Merah Putih.",
			"Mendirikan organisasi pro-kemerdekaan Komite Indonesia Merdeka (KIM) di Jayapura.",
			"Membantu operasi infiltrasi pasukan payung TNI selama Operasi Trikora 1962.",
		],
		trivia:
			"Saat bertugas mengawasi tahanan di kamp konsentrasi Boven Digoel, ia justru banyak berdialog malam hari dengan para pejuang pergerakan, hingga nuraninya terpanggil untuk bersumpah mengusir kolonialisme dari tanah Papua.",
		famousQuote:
			"Seragam polisi boleh berasal dari Belanda, tapi detak jantung dan kehormatan saya adalah untuk kemerdekaan bangsa saya sendiri.",
		keyAction:
			"Mengorganisir perlawanan bersenjata dan jaringan bawah tanah pejuang Merah Putih di tanah Papua.",
		avatarIcon: "👮",
		significanceTag: "Perwira Pejuang Merah Putih Papua",
	},
];
