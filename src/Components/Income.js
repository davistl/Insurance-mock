import React, {Component} from 'react';

class Income extends Component{
    
    constructor(props){
        super(props);
        
    }

    render(){

        const incomeStyle={
            width: 400,
            fontSize: 30,
            margin: "auto",
            textAlign: "center"
        }
        return(
           <div> 
                <p>Enter Estimated Yearly Income</p>
                <div class="input-group mb-3" style={incomeStyle}>
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input style={{textAlign:"center"}} id="income" type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                    
                </div>
            </div>
        );
    }
}
export default Income