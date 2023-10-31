import React,{Component} from "react";

export default class NewShop extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            
            name : '',
            description : '',
        }
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Description: ${this.state.description}`);
       

        this.setState({
            name: '',
            description : ''
           
            
        })
    }
    onLogoUpload = (e) => {
        const file = e.target.files[0];

        if (file) {

            console.log(`Logo file uploaded: ${file.name}`);
        }
    };

    render(){
        return(
            <form onSubmit={this.onSubmit}>

                <div className='container'>
                    <h2>New Shop</h2>
                </div>
                <div className="form-group col-lg-4">
                    <label htmlFor="logo">UPLOAD LOGO: </label>
                    <input
                        type="file"
                        id="logo"
                        accept="image/*"
                        onChange={this.onLogoUpload}
                    />
                </div>
                <div class="form-group col-lg-4">
                    <label for="exampleInputEmail1">Name:</label>
                    <input type="text" class="form-control" 
                        id="exampleInputEmail1" 
                         placeholder="Enter Name"  
                         value={this.state.name}
                         onChange={this.onChangeName} />
                </div>

                <div class="form-group col-lg-4">
                    <label for="exampleInputEmail1">Description: </label>
                    <input type="text" class="form-control" 
                        id="exampleInputEmail1" 
                         placeholder="Enter Description"  
                         value={this.state.description}
                         onChange={this.onChangeDescription} />
                </div>
                
                
                <button type="submit" class="btn btn-primary">SUBMIT</button>
                <button type="reset">CANCEL</button>
            </form>
        )
    }
}