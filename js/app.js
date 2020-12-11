// building the navigation menu


buildingNav()

function buildingNav(){

    const navBar = document.getElementById('navli');
    const sec = document.querySelectorAll('section');
    
    
    for (let i = 1; i <= sec.length; i++){
        let navList = document.createElement('li');
        navBar.appendChild(navList);
        let navLink = document.createElement('a');
        navList.appendChild(navLink);
        navLink.textContent=`Section ${i}`;
        navLink.classList.add('lin');
        navLink.setAttribute('href',`#section${i}`);
        

        // adding event to the nav links
        navLink.addEventListener('click', function (eve){
            const scrol = document.querySelector(`#section${i}`).scrollIntoView ({
                behavior: "smooth", block: "center"});
        eve.preventDefault();
             
                
        });


    

    } 
    
}

 
//active sections

    const options = {

        root: null,
        rootMargin:'-150px',
        threshold: 0.35
       
    };
    
    
    const observer = new IntersectionObserver((a, observer) =>{
        
        a.forEach(entry => {
            
            document.querySelector('.act-class').classList.remove('act-class');
            let ids= entry.target.getAttribute('id');
            const a = document.querySelector(`[href='#${ids}']`).classList.add('act-class');
            if(entry.isIntersecting){

                
                const d = document.querySelector(`[id='${ids}']`).classList.add('act');
            } else {
                const d = document.querySelector(`[id='${ids}']`).classList.remove('act');
            }
             
             
        });
        
    } ,options);
    
    
    const activeSec = document.querySelectorAll("section");
   
    activeSec.forEach((section) => {
        
        observer.observe(section);
        
    });
    