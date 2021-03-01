import React, {Component} from "react";  
import $ from "jquery";
    class List extends Component {  
    	constructor(){  
        	  super();  
        	  this.state = {  
        	    siswa : [  
        	      {hari: "Hari Peringatan Laut dan Samudera nasional", tanggal: "15 Januari"},  
        	      {hari: "Hari Lahan Basah Sedunia", tanggal: "2 Februari"},  
        	      {hari: "Hari Peduli Sampah Nasional", tanggal: "21 Februari"},  
        	    ],    
        	    hari: "",  
        	    tanggal: "",
        	    action: "" 
              }  
        }  	   
	  	render(){  
        	    return (  
        	      <div className="container">  
        	        { /* generate list */ }
				 <ul className="list-group">  
						{this.state.siswa.map((item,index) => {  
							return (  
							<li className="list-group-item" key={index}>  
								<h5 className="text-info">{item.hari}</h5>  
								<h6>tanggal: {item.tanggal}</h6>  
								<button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
							data-toggle="modal" data-target="#modal">  
								Edit  
								</button>  
								<button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
								Hapus  
								</button>  
							</li>  
							);  
					})}  
	    	    </ul>  
  
                
        	        <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
        	        data-toggle="modal" data-target="#modal">  
        	          Tambah Data  
        	        </button>                	  
        	        { /* elemen form modal */ }  
        	        <div className="modal fade" id="modal">  
        	          <div className="modal-dialog">  
        	            <div className="modal-content">  
                      <div className="modal-header bg-success text-white">  
        	                <h5>Form Siswa</h5>  
       	              </div>  
        	              <form onSubmit={this.SaveSiswa}>  
        	              <div className="modal-body">  
        	                NIS  
        	                <input type="text" name="nis" className="form-control" onChange={this.bind}  
        	                value={this.state.nis} />  
        	                hari  
        	                <input type="text" name="hari" className="form-control" onChange={this.bind}  
        	                value={this.state.hari} />  
        	                tanggal  
        	                <input type="text" name="tanggal" className="form-control" onChange={this.bind}  
        	                value={this.state.tanggal} />  
        	              </div>  
        	              <div className="modal-footer">  
        	                <button type="submit" className="btn btn-primary">  
        	                  Simpan  
        	                </button>  
        	              </div>  
        	              </form>  
        	            </div>  
        	          </div>  
        	        </div>  
                  </div>      
                );  
            }  
        }    
           
export default List;
