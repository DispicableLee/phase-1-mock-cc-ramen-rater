// write your code here
document.addEventListener("DOMContentLoaded", ()=>{
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenDetail = document.getElementById("ramen-detail")
//============================= initialize Ramen ====================================
    function initializeRamen(){
        fetch("http://localhost:3000/ramens")
        .then(res => res.json())
        .then(json => {
            for(let i = 0; i<json.length; i++){
//==================== fetching/setting ramen images & details ========================
                console.log(json[i].image)
                const image = json[i].image
                const name = json[i].name
                const restaurant = json[i].restaurant
                const rating = json[i].rating
                const comment = json[i].coment
                const ramenImage = document.createElement("img")
                ramenImage.src = image
                ramenMenu.append(ramenImage)
//==================== image event listener, listing details =========================
                ramenImage.addEventListener("click", (e)=>{
                    e.preventDefault();
                    console.log("made it to part 2")
                    const detailImage = document.querySelector(".detail-image")
                    const detailName = document.querySelector(".name");
                    const detailRestaurant = document.querySelector(".restaurant")
                    const detailRating = document.querySelector("#rating-display")
                    const detailComment = document.querySelector("#comment-display")
                    detailImage.src = image
                    detailName.textContent = name
                    detailRestaurant.textContent = restaurant
                    detailRating.textContent = rating
                    detailComment.textContent = comment
                })
            }
//======================== form submition =====================================
            const form = document.getElementById("new-ramen")
            form.addEventListener("submit", (e)=>{
                e.preventDefault();
//============================ setting formData ==============================
                console.log("setting form data")
                const formName = e.target.name.value
                const formRestaurant = e.target.restaurant.value
                const formImage = e.target.image.value
                const formRating = e.target.rating.value
                const formComment = e.target["new-comment"].value
                const submitionObject = {
                    "name": formName,
                    "restaurant": formRestaurant,
                    "image": formImage,
                    "rating": formRating,
                    "comment" : formComment
                }
                console.log("form submitted")
                const configObj = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(submitionObject)
                }
//======================== making POST request =============================
                fetch("http://localhost:3000/ramens", configObj)
                .then(console.log("should be done"))
                .then(initializeRamen())




            })
        })
    }
    initializeRamen();





})
