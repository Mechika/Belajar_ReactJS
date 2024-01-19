import React, { Component } from 'react';
import './App.css';
// import Alert from './Components/Alert';
import Media from './Components/Media';

class App extends Component {
  render() {
    return (
      <header>
        <div className='title'> PANCASILA </div>
        <div className='head-text'>
          <div className='text-on-image'>
            <strong> Sila Pertama</strong>
            <br></br>
            Ketuhanan Yang Maha Esa
          </div>
          <Media image="Sila1.jpg"></Media>
        </div>


        <div className='head-text'>
          <div className='text-on-image'>
            <strong> Sila Kedua</strong>
            <br></br>
            Kemanusiaan Yang Adil Dan Beradab
          </div>
          <Media image="sila2.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong> Sila Ketiga</strong>
            <br></br>
            Persatuan Indonesia
          </div>
          <Media image="sila3.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong> Sila Keempat</strong>
            <br></br>
            Kerakyatan Yang Dipimpin Oleh Hikmat Kebijaksanaan Dalam Permusyawaratan Perwakilan
          </div>
          <Media image="sila4.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong> Sila Kelima</strong>
            <br></br>
            Keadilan Sosial Bagi Seluruh Rakyat Indonesia
          </div>
          <Media image="sila5.png"></Media>
        </div>

        <br></br>
        <hr></hr>

        <div className="kotak">
          <div className="form-daftar">
            <p>Form Registrasi osis</p>
            </div>
            </div>
        
        <br></br>

        <div className='jarak'>
          <input type="text" id="Nama" className='form-input'
          placeholder='Nama'/>
        </div>

        <div className='jarak'>
        <select name="gender" id="jenis-kelamin" className='form-input' placeholder='Jenis Kelamin'>  
		        <option value="">Jenis Kelamin</option>  
	        	<option value="Perempuan">Perempuan</option>  
        		<option value="Laki-laki">Laki-laki</option>  
          </select>
        </div>

        <div className='jarak'>
          <input type="text" id="alamat" className="form-input" placeholder="Alamat" />
        </div>

      <div class='jarak'>
          <button type="submit" class="buton" className='bcolor'>Submit</button>
        </div>


        <br></br>
        <hr></hr>

        <div className="App Container">

        <button className="mr-1 btn btn-danger">Button Merah</button> 
        <br></br>
        <br></br>
        <button className="mr-2 btn btn-warning">Button Kuning</button>
        <br></br>
        <br></br>
        <button className="mr-3 btn btn-success">Button Hijau</button>
        <br></br>
        <br></br>
        <button className="mr-4 btn btn-light">Button Putih</button>
        <br></br>
        <br></br>
        <button className="mr-4 btn btn-dark">Button Hitam</button>
        <br></br>
        <br></br>
        </div>

      </header>

    );
  }
}
export default App;


// <div className="App container"> 
// <div className="alert alert-info">
// <h3 className="text-danger">Ini Project Pertama React JS</h3>
// <p>Belajar React JS itu mudah</p>
// <button className="mr-1 btn btn-success">Setuju</button>
// <button className="btn btn-info">Iya Dong</button>
// </div>
// </div>


// <div className='App container col-sm-6'>
//   <Alert type="danger">Danger</Alert>
//   <Alert type="succes">succes</Alert>
//   <Alert type="warning">Warning</Alert>
// </div>

