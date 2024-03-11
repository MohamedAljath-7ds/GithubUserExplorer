const submit = document.getElementById('submitButton');
    submit.addEventListener('click',  function(){
        const name = document.getElementById('name').value;
        console.log(name);

        Userfetch(name)
    })

    async function  Userfetch(name){
        
         const fetchApi = await fetch("https://api.github.com/users/"+ name);
         const json = await fetchApi.json()
         console.log(json)
         createUserCard(json);
        
    }

   
    function createUserCard(json){
        const mainBody = document.createElement('div');
        mainBody.classList.add('usercard');
        const Heading = document.createElement('h1');
        Heading.textContent = json.name;
        const image = document.createElement('img');
        image.classList.add('userimage');
        image.src = json.avatar_url;
        const description = document.createElement('h3');
        description.classList.add('desc');
        description.textContent = json.bio;
        mainBody.appendChild(image);
        mainBody.appendChild(Heading);
        mainBody.appendChild(description);
        document.body.appendChild(mainBody);
    }




