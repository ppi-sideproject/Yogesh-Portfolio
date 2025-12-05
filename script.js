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

const menuToggle = document.getElementById('menu-toggle');
const mobileNav = document.getElementById('mobile-nav');

const allNavButtons = [
    document.getElementById("Home"),
    document.getElementById("About_Me"),
    document.getElementById("Blog"),
    document.getElementById("Home-Mobile"), 
    document.getElementById("About_Me-Mobile"), 
    document.getElementById("Blog-Mobile") 
].filter(button => button !== null); 

function displayPage(page) {
    switch (page) {
        case "Home":
            domManipulation.innerHTML = `
                <img src="https://cdn.pixabay.com/photo/2017/03/11/11/44/man-2134881_1280.jpg" alt="Developer working at desk">
                <div class="intro">
                    <h1>I am Yogesh Chauhan</h1>
                    <h3>I am a developer</h3>
                    <a href="login.html"><button id="login-open">View Profile</button></a>
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
               <h2 style="color:#007bff;">Latest Blog Posts</h2>
    <div class="card-grid">
        
        <div class="card">
            <img src="https://media.istockphoto.com/id/1224339637/photo/online-shop-website-on-home-office-setup.jpg?s=1024x1024&w=is&k=20&c=l7Wap23LvGQe5IBiWT9wH7pApviuzGcXkkZiijjU4ko=" alt="Image for blog post 1" class="card-image">
            <div class="card-content">
                <h3>Front End</h3>
                <p class="card-excerpt">Frontend development uses HTML for structure, CSS for presentation and styling, and JavaScript for dynamic behavior and interactivity, all executed within the user's web browser.</p>
                <a href="#" class="card-link">Read Article →</a>
            </div>
        </div>
        
        <div class="card">
            <img src="https://media.istockphoto.com/id/1463092481/photo/relational-database-tables-on-databases-are-placed-on-structured-query-language-code-with.jpg?s=612x612&w=0&k=20&c=lsrs4YdsS8DwRy8IMGOQXnlCAWv5SruHQTfA61xeQGw=" alt="Image for blog post 2" class="card-image">
            <div class="card-content">
                <h3>Database</h3>
                <p class="card-excerpt">SQL is the standard language for querying and managing data, PL/SQL is Oracle's procedural extension for complex database logic, and MySQL is a popular RDBMS software that serves as the engine where SQL commands are executed.</p>
                <a href="#" class="card-link">Read Tutorial →</a>
            </div>
        </div>

        <div class="card">
            <img src="https://media.istockphoto.com/id/1163758428/photo/ux-ui-and-programming-development-technology.jpg?s=612x612&w=0&k=20&c=5ARlOzA14gHFM_8q2K-ITk5b6yfCudKJzcNTQXZvapQ=" alt="Image for blog post 3" class="card-image">
            <div class="card-content">
                <h3>Backend</h3>
                <p class="card-excerpt">The backend uses Java Spring and C# .NET (often called DotNet) as powerful frameworks for writing the server-side logic that handles business rules, processes data, and connects the frontend to the database.</p>
                <a href="#" class="card-link">See Designs →</a>
            </div>
        </div>

    </div>
            `;
            break;
    } 
}

function closeMobileNav() {
    mobileNav.classList.remove('open');
}

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
});

allNavButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const clickedId = event.target.id;
        
        const pageId = clickedId.replace('-Mobile', '');
        
        displayPage(pageId); 
        
        closeMobileNav();
    });
});

displayPage("Home");




