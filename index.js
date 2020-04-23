document.querySelector('.get-jokes').addEventListener('click', loadData);

function loadData(e){
    console.log('jokes');
    const number = document.querySelector('input[type = "number"]').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.response)
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type ==='sucess'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`;

                })
            }else{
                output += '<li>some thing is wrong</li>';

            }
           
          document.querySelector('.jokes').innerHTML = output;  
        }
    }
    xhr.send();
    e.preventDefault();
}
//

