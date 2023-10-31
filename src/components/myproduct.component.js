import { Button } from "bootstrap";
import React, { Component } from "react";

export default class NewProduct extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        })
    }
    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Description: ${this.state.description}`);
        console.log(`Category: ${this.state.category}`);
        console.log(`Quantity: ${this.state.quantity}`);
        console.log(`Price: ${this.state.price}`);


        this.setState({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: ''

        })

    }
    onLogoUpload = (e) => {
        const file = e.target.files[0];

        if (file) {

            console.log(`Logo file uploaded: ${file.name}`);
        }
    };
    
    resetForm() {
        document.getElementById("myForm").reset();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className='container'>
                    <h2>New Product</h2>
                </div>
                
                <div className="form-group col-lg-4">
                    <label htmlFor="logo">UPLOAD PHOTO: </label>
                    <input
                        type="file"
                        id="logo"
                        accept="image/*"
                        onChange={this.onLogoUpload}
                    />
                </div>



                <div class="form-group col-lg-4">
                    <label for="exampleInputEmail1">Name: </label>
                    <input type="text" class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.onChangeName} />
                </div>

                <div class="form-group col-lg-4">
                    <label for="exampleInputEmail1">Description: </label>
                    <input type="text" class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onChangeDescription} />
                </div>
                <div class="form-group col-lg-4">
                    <label for="exampleInputEmail1">Category: </label>
                    <input type="text" class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Category"
                        value={this.state.category}
                        onChange={this.onChangeCategory} />
                </div>
                <div class="form-group col-lg-4">
                    <label for="exampleInputEmail1">Quantity: </label>
                    <input type="number" class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Quantity"
                        value={this.state.quantity}
                        onChange={this.onChangeQuantity} />
                </div>
                <div class="form-group col-lg-4">
                    <label for="exampleInputEmail1">Price: </label>
                    <input type="number" class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.onChangePrice} />
                </div>

                <button type="submit" class="btn btn-primary">SUBMIT</button>
                <button type="button" onclick="resetForm()">CANCEL</button>
            </form>
        )
    }
}