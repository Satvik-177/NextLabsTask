document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".generalButton");
    const signUpButton = document.getElementById("firstbutton");

    if (signUpButton) {
        signUpButton.addEventListener("click", (e) => {
            openForm();
            console.log(e);
        });
    } else {
        console.error("Sign Up button not found");
    }

    if (buttons.length > 0) {
        buttons.forEach(button => {
            button.addEventListener("click", (e) => {
                openForm();
                console.log(e);
            });
        });
    } else {
        console.error("No button with class 'generalButton' found");
    }

    function openForm() {
        const modelPath = "../forms/forms.html";
        window.open(modelPath, "_blank");
    }

    const slider = document.querySelector("#slideBar");
        const value = document.querySelector(".value");
        const free = document.getElementById("free");
        const standard = document.getElementById("standard")
        const pro = document.getElementById("pro")

        value.textContent = slider.value;
        slider.oninput = function(){

            value.textContent = this.value;

            free.style.border = "";
            pro.style.border = "";
            standard.style.border = "";

            if(this.value>0 && this.value<=10){

                free.style.border="2px solid red";
            }

            else if(this.value>=10 && this.value<=20){

               
                standard.style.border="2px solid red";
            }

            else if(this.value >20) {
                
                pro.style.border="2px solid red";
            }
        }

        //Code for Infinite scrolling
        let currentPage = 1
        let isFetching = false
        let hasMore = true

        let infiniteContent = document.getElementById("infiniteContent")

        async function fetchData() {

            isFetching = true

            let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}`)

            let data = await response.json()

            isFetching = false

            if(data.length === 0){

                hasMore = false
                return
            }

            for(let post of data){

                let div = document.createElement('div')
                div.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`
               infiniteContent.appendChild(div)
            }

            currentPage++
        }

        window.addEventListener("scroll",()=>{

            if(isFetching || !hasMore){

                return
            }

            if((window.innerHeight + window.scrollY)>= document.body.offsetHeight){

                fetchData()
            }
        })

        fetchData()

 });
