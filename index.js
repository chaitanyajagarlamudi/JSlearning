document.getElementById('button1').addEventListener('click', loadData);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadData(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.response)
            
            const customer = JSON.parse(this.response);
            const output = `
            <ul>
            <li> id: ${customer.id}</li>
            <li> name: ${customer.name}</li>
            <li> phone: ${customer.phone}</li>
            <li> adress: ${customer.adress}</li>
            </ul>
            `;
          document.getElementById('customer').innerHTML = output;  
        }
    }
    xhr.send();
}
//

function loadCustomers(e){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.response)
            
            const customers = JSON.parse(this.response);
            let output ='';
            
            customers.forEach(function(customer) {
                
            output += `
            <ul>
            <li> id: ${customer.id}</li>
            <li> name: ${customer.name}</li>
            <li> phone: ${customer.phone}</li>
            <li> adress: ${customer.adress}</li>
            </ul>
            `;
            });
          document.getElementById('customers').innerHTML = output;  
        }
    }
    xhr.send();
}
