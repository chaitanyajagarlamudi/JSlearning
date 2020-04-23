document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
//    const number = document.querySelector('input[type="number"]').value;
//     console.log(number);
//     e.preventDefault();
// }
    const number = document.querySelector('input[type = "number"]').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.response)
            const response = JSON.parse(this.responseText);
            let output = '';
            if(response.type ==='success'){
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

