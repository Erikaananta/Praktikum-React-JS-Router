import React, {Component} from "react";  
import $ from "jquery";

class Cart extends Component {
    
   constructor(){
        super()
        this.state = {
            cart: [], // untuk menyimpan list cart
            user: "", // untuk menyimpan data nama user
            total: 0, // untuk menyimpan data total belanja          
        }
    }

    initCart = () => {
        // memanggil data cart pada localStorage
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }   

        // memanggil data user pada localStorage
        let userName = localStorage.getItem("user")

        // kalkulasi total harga
        let totalHarga = 0;
        tempCart.map(item => {
            totalHarga += (item.harga * item.jumlahBeli)
        })

        // memasukkan data cart, user, dan total harga pada state
        this.setState({
            cart: tempCart,
            user: userName,
            total: totalHarga
        })
    }

 Drop = (item) => {
    // beri konfirmasi untuk menghapus data
    if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
        // menghapus data
        let tempCart = this.state.cart
        // posisi index data yg akan dihapus
        let index = tempCart.indexOf(item)

        // hapus data
        tempCart.splice(index, 1)

        this.setState({cart: tempCart})
    }
}

Edit = item => {
    $("#modal_cart").modal("show")
    this.setState({
        action: "update",
        selectedItem: item,
        judul: item.judul,
        harga: item.harga,
        jumlah: item.jumlah
    })
}

Save = (event) => {
    event.preventDefault();
    let tempCart = this.state.cart;
    if (this.state.action === "insert") {
        tempCart.push({
            judul: this.state.judul,
            harga: this.state.harga,
            jumlah: this.state.jumlah,
        })
    } else if (this.state.action === "update") {
       let index = tempCart.indexOf(this.state.selectedItem)
       tempCart[index].judul = this.state.judul
       tempCart[index].harga = this.state.harga
       tempCart[index].jumlah = this.state.jumlah
    }

    this.setState({cart: tempCart})
    $("#modal_cart").modal("hide");
}

    componentDidMount(){
        this.initCart()
}

    render(){
        return(
            <div className="container">
                <div className="card col-12 mt-2">
                    <div className="card-header bg-primary text-white">
                        <h4>Data Keranjang Belanja</h4>
                    </div>

                    <div className="card-body">
                        <h5 className="text-primary">
                            Nama User: { this.state.user }
                        </h5>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Aksi</th>
                                </tr>
                            </thead>

                            <tbody>
                                { this.state.cart.map( (item, index) => (
                                    
                                    <tr key={index}>
                                        <td>{item.judul}</td>
                                        <td>Rp {item.harga}</td>
                                        <td>{item.jumlahBeli}</td>
                                        <td>
                                            Rp { item.harga * item.jumlahBeli }
                                        </td>
                                        <td>
                                        <button className="btn btn-sm btn-primary m-1"
                                        onClick={ () => this.Edit(item)}>
                                            Edit
                                        </button>
                                        {/* button untuk menghapus */}
                                        <button className="btn btn-sm btn-danger m-1"
                                        onClick={ () => this.Drop(item)} >
                                            Hapus
                                        </button>
                                        </td>
                                    </tr>
                                   
                                ) ) }
                            </tbody>
                        </table>
                        
                        <h4 className="text-danger">
                            Total Harga: Rp {this.state.total}
                        </h4>

                              {/* component modal sbg control manipulasi data */}
                    <div className="modal" id="modal_buku">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                {/* modal header */}
                                <div className="modal-header">
                                    Form Buku
                                </div>
    
                                {/* modal body */}
                                <div className="modal-body">
                                    <form onSubmit={ev => this.Save(ev)}>

                                        Keranjang Belanja 
                                        <input type="text" className="form-control mb-2"
                                        value={this.state.judul}
                                        onChange={ ev => this.setState({judul: ev.target.value}) }
                                        required />

                                        Harga Buku
                                        <input type="number" className="form-control mb-2"
                                        value={this.state.harga}
                                        onChange={ ev => this.setState({harga: ev.target.value}) }
                                        required />

                                        Jumlah
                                        <input type="text" className="form-control mb-2"
                                        value={this.state.qty}
                                        onChange={ ev => this.setState({jumlah: ev.target.value}) }
                                        required />
                                        <button className="btn btn-info btn-block" type="submit">
                                            Simpan
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    } 
  }  
export default Cart; 
