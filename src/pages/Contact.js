import React, {Component} from 'react';  
// import './App.css';  
import Alert from "./../components/Alert"
import Media from "./../components/Media"

class App extends Component {  
  render(){  
    return (  
      <div className="App container">  
        <Alert type="info" header="Hari-Hari Peringatan Lingkungan">  
        </Alert>  
        <Alert type="success" header="Daftar hari peringatan lingkungan ">   
        Hari Peringatan Laut dan Samudera nasional - 15 Januari <br></br>
        Hari Lahan Basah Sedunia - 2 Februari <br></br>
        Hari Peduli Sampah Nasional - 21 Februari <br></br>
        Hari Hutan Sedunia - 21 Maret <br></br>
        Hari Air Sedunia - 22 Maret <br></br>
        Hari Meteorologi Sedunia - 23 Maret <br></br>
        Hari Bumi - 22 April <br></br>
        Hari Penanaman Pohon - Jumat terakhir di bulan April <br></br>
        Hari Burung Migratori Internasional - 3 Mei <br></br>
        Hari Surya - 3 Mei <br></br>
        Hari Biodiversitas Dunia - 22 Mei <br></br>
        Hari Bersepeda Ke Kantor  - Jumat Ketiga di bulan Mei <br></br>
        Hari Anti Tembakau Internasional - 31 Mei <br></br>
        Hari Lingkungan Hidup Sedunia PBB - 5 Juni <br></br>
        Hari Melawan Desertifikasi dan Kekeringan Dunia PBB - 17 Juni <br></br>
        Hari Populasi Dunia PBB - 11 Juli <br></br>
        Hari Perlindungan Lapisan Ozon Sedunia - 16 September <br></br>
        Hari Emisi Nol (Zero Emissions Day) - 20 September <br></br>
        Hari Bebas Mobil (Car Free Day) - 22 September <br></br>
        eDay - 4 Oktober di 2008 <br></br>
        Hari Habitat Dunia PBB - Senin pertama di bulan Oktober <br></br>
        Hari Pengurangan Bencana Alam Internasional - 13 Oktober <br></br>
        Hari Pohon - 21 November <br></br>
        Hari Gunung Sedunia - 11 Desember <br></br>
        Hari Aksi Ozon - Pada waktu tertentu di musim panas <br></br>
        </Alert>  
      </div>  
    );  
  }  
}  
export default App;  
