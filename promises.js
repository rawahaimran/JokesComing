const api_body = document.querySelector(".api_body");

const apiUrl = 'https://icanhazdadjoke.com/';



const fetch_joke_function = () =>{
    const api_data = fetch(apiUrl,{
        headers:{
            Accept:"application/json",
        },
    })

    .then((res) =>{
        // console.log(res);
        return res.json();
    }).then((data) =>{
        if (data && data.joke) {
            api_body.innerText = data.joke;
        } else {
            throw new Error('Joke data is undefined');
        }
    })
    .catch((error) => {
        console.error('Error fetching joke:', error);
        api_body.innerHTML = 'Error found. Please wait a bit.';
    });
}
document.querySelector('.fetch_joke').addEventListener('click', fetch_joke_function);
