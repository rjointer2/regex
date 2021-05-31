
// global counter 

let open = false

// divs selected

let body = document.querySelector('.body');
let link = document.querySelector('.link');

// display Article 

link.addEventListener('click', () => {

    open ? open = false : open = true

    // constant div created 

    
    
    if(open) {
        body.innerHTML = `
            <br>
            Today we will look at Matching an Email 
            <br>
            – /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            <br><br><br>
            At first this can look at imtimidating ( and I felt the same ) but<br>
            with some practice and deep dive, it may become second nature.<br>
            <br><br>
            --> Creating Regex
            <br><br>
            Reegex is created with two " // " symbols, and everything inside the <br>
            of the slashes use express or escape text
        `
    } else {
        body.innerHTML = ""
    }
    
})


