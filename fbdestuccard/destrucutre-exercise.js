//const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
//const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']

// IMPORTANT: solve all problems using using destructuring and rest syntax


// ============================================================================= //
//1.
// remove first element from places array and print the remaining array 
//result = ['gurgaon', 'jaipur', 'pune']
const places = ['delhi', 'gurgaon', 'jaipur', 'pune']
const [a, ...b] = places
console.log(b)


// ============================================================================= //
//2.
// insert that element at the start of the morePlaces array and print the new array
// result =  ['delhi', 'kochi', 'hyderabad', 'Shimla', 'Srinagar']
const morePlaces = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
const otherplaces = ["delhi"]
const myplaces = [...otherplaces, ...morePlaces]
console.log(myplaces)



// ============================================================================= //
// 3.
// take out last three element from the morePlacesArray and take out first three elements from the places array 
// and print the combined array
//result =  ['hyderabad', 'Shimla', 'Srinagar', 'delhi', 'gurgaon', 'jaipur',]
const place = ['delhi', 'gurgaon', 'jaipur', 'pune']
const morePlace = ['kochi', 'hyderabad', 'Shimla', 'Srinagar']
const allplaces = [...morePlace, ...place]
console.log(allplaces)


//********************************************************************* */
const myData = {
    name: "Rahul",
    age: 20,
    gender: "male",
    address: {
        pinCode: 123455,
        city: "delhi"
    },
    likes: ["music", "movies"]
}

// 4.
// destructure and store pincode into a variable named myPincode  
const mypincode = myData.address.pinCode
console.log(mypincode)
    // 5.
    // destructure and store second like into a vaiable named myLike
    // let mylike=myData.likes
    // console.log(mylike)