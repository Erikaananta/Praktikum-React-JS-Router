import React, {Component} from 'react';  
// import './App.css';  
import Alert from "./../components/Alert"
import Media from "./../components/Media"

class App extends Component {  
  render(){  
    return (  
      <div className="App container">  
        <Alert type="success" header="Tanaman?">  
          Apa yang dimaksud dengan tanman hias? 
        </Alert>  
        <Alert type="success" header="Adiwiyata?">  
        Fungsi program adiwiyata merupakan agar seluruh 
        pelajar ikut terlibat dalam segala kegiatan atau
         aktivitas persekolahan demi menuju lingkungan yang
          sehat dan juga mampu menghindari dampak lingkungan
           yang negatif 
        </Alert>  

        <Media image="adi1.jpg" title="GO GREEN">  
        Going Green berarti mengubah gaya hidup menjadi lebih eco-friendly
         atau ramah lingkungan. Menjadi lebih sadar akan lingkungan sekitar
          dengan mengubah gaya hidup kita dapat mengurangi tingkat polusi dan 
          sampah yang kita buang  
        </Media>  
        <Media image="adi2.jpg" title="TANAMAN HIAS">  
        Tanaman hias mencakup semua tumbuhan, baik berbentuk terna, merambat, semak,
         perdu, ataupun pohon, yang sengaja ditanam orang sebagai komponen taman, kebun 
         rumah, penghias ruangan, upacara, komponen riasan/busana, atau sebagai komponen 
         karangan bunga. 
        </Media>
      </div>  
    );  
  }  
}  
export default App;  
