// 1. fetch ramen images from db.json
// 1a. display images in <img> tag"ramen menu" div
// 2. addEventListener(click, img) to click image and display infrom from div with id: "ramen detail"
// 3. create new-ramen form that adds to #ramen-menu div. This is DOM manupulation (just an "eventListener(submit)"- not necessarily a POST request. the new ramen does not have to persist.

 //This COMMENTED OUT SECTION is what i accomplished in the moc code challege session.
// write your code here

// fetch ("http://localhost:3000/ramens")
//  .then(response => response.json())
//  .then(ramens => {
//     console.log(ramens)
//  })


// // // This is my "ramen menu" div
//     const ramenMenu = document.getElementById("ramen-menu")
//     console.log(ramenMenu)
    
// //     const ramenCard = document.createElement("img")
// //     ramenMenu.append(ramenCard)

 
// // //function to display ramen images in "ramen menu" div
// //     function renderRamen(ramen){
// //         forEach(ramen => document.createElement("img")
        
// //         document.ramenMenu.createElement("img")
        
// //         const ramenName = document.getElementById(ramen.name)
// //         const ramenRestaurant = document.getElementById(ramen.restaurant)
// //         const ramenImage = document.getElementById(ramen.image)
// //         const ramenRating = document.getElementById(ramen.rating)
// //         const ramenComment = document.getElementById(ramen.comment)

        
    
//     )}



// //THIS IS WHAT WE REVIEWED IN CLASS AFTER THE MOCK CODE CHALLENGE SESISON

const ramenMenu = document.getElementById("ramen-menu")
const ramenDetails = document.getElementById("ramen-details")
const ramenImg = document.querySelector(".detail-image")
const ramenName = document.querySelector(".name")
const ramenRestaurant = document.querySelector(".restaurant")
const ramenRating = document.getElementById("rating-display")
const ramenComment = document.getElementById("comment-display")



    fetch("http://localhost:3000/ramens")
    .then (response => response.json())
    .then(ramens => {
        ramens.forEach(ramen => {
            const img = document.createElement("img");
            ramenMenu.append(img);
            img.src = ramen.image;
            img.addEventListener("click", () => {
                ramenImg.src = img.src
                ramenName.innerText = ramen.name
                ramenRestaurant.innerText = ramen.restaurant
                ramenRating.innerText = ramen.rating
                ramenComment.innerText = ramen.comment

            })

        })
    })


//3rd deliverable: Form elements
const newRamenForm = document.getElementById("new-ramen")
const newName = document.getElementById("new-name")
const newRestaurant = document.getElementById("new-restaurant")
const newImageURL = document.getElementById("new-image")
const newRating = document.getElementById("new-rating")
const newComment = document.getElementById("new-comment")

newRamenForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const newImg = document.createElement("img")
    newImg.src = newImageURL.value
    ramenMenu.append(newImg)
    
    newImg.addEventListener("click", () => {
        ramenImg.src = newImageURL.value
        ramenName.innerText = newName.value
        ramenRestaurant.innerText = newRestaurant.value
        ramenRating.innerText = newRating.value
        ramenComment.innerText = newComment.value
    })
})