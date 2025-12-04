// function isEven(number){
//     if(number%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(isEven(4));
// console.log(isEven(5));

// let movieCollection=["bahubali","dhoom","pushpa","koi mil gaya","phir hera pheri"];
// console.log(movieCollection[0],"|",movieCollection[movieCollection.length-1]);


// car = {
// model:"mercedes",
// year:"2025",
// price:"20000000"
// }
// console.log(car);


// let num=[];
// for(let i=1;i<=50;i++){
//     num.push(i);
// }
// console.log(num);

// car.color="maroon";
// console.log(car);


let domManipulation = document.querySelector("section");
let Home = document.getElementById("Home");
let About_Me = document.getElementById("About_Me");
let Blog = document.getElementById("Blog");

function displayPage(page) {
    switch (page) {
        case "Home":
            domManipulation.innerHTML = `
                <img src="https://cdn.pixabay.com/photo/2017/03/11/11/44/man-2134881_1280.jpg" alt="Developer working at desk">
                <div class="intro">
                    <h1>I am Yogesh Chauhan</h1>
                    <h3>I am a developer</h3>
                    <button id="login-open">View Profile</button>
                </div>
            `;
            break;
        case "About_Me":
            domManipulation.innerHTML = `
                <video src="https://cdn.pixabay.com/video/2020/01/26/31611-387688517_tiny.mp4" autoplay loop muted></video> 
                
                <div class="about-text">
                    <h1 class="about-me">About Me</h1>
                    <p>Enthusiastic and quick-learning BSc.(IT) graduate with a strong interest in software 
                    development. Eager to build hands-on experience by applying problem-solving skills, logical 
                    thinking, and a passion for technology. Motivated to learn new programming languages and 
                    development tools through real-world projects. Looking to contribute to a dynamic team and 
                    grow as a developer.</p>
                    
                    <div class="boxes">
                        <div class="box1">
                            <h3>Technical Expertise</h3>
                            <p>Bridging concept and code to build scalable, high-performance applications.</p>
                        </div>
                        <div class="box1">
                            <h3>Development Focus</h3>
                            <p>Specializing in full-stack development with a passion for clean, maintainable architecture.</p>
                        </div>
                        <div class="box1">
                            <h3>Impact & Innovation</h3>
                            <p>Delivering tangible business value through efficient development and problem-solving.</p>
                        </div> 
                    </div>
                </div>
            `;
            break;
        case "Blog":
            domManipulation.innerHTML = `
                <div style="padding: 50px; text-align: center; height: 90vh;">
                    <h1>Blog Content Coming Soon!</h1>
                </div>
            `;
            break;
    } 
}


Home.addEventListener("click", () => {
    displayPage("Home");
});
About_Me.addEventListener("click", () => {
    displayPage("About_Me");
});
Blog.addEventListener("click", () => {
    displayPage("Blog");
});


displayPage("Home");