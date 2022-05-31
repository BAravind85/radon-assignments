const facebookProfiles = [{
        firstName: "Akash",
        lastName: "Agarwal",
        number: "111111111",
        likes: ["music", "movies"],
        hasDrivingLicense: false,
        address: {
            location: "rampur",
            state: "up",
        },
        emails: ["abc@outlook.com", "efg@gamil.com", "ghj@gmail.com"],
    },
    {
        firstName: "Pritesh",
        lastName: "Kumar",
        number: "222222222",
        likes: ["code", "driving"],
        hasDrivingLicense: false,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["fgdfg@gmail.com"],
    },
    {
        firstName: "Sabiha",
        lastName: "Khan",
        number: "333333333",
        hasDrivingLicense: false,
        address: {
            location: "lucknow",
            state: "up",
        },
    },
    {
        firstName: "Suyash",
        lastName: "Kashyap",
        number: "444444444",
        likes: ["travel", "driving"],
        hasDrivingLicense: true,
        address: {
            location: "alwar",
            state: "rajasthan",
        },
        emails: ["abc@yahoo.com"],
    },
    {
        firstName: "Jay",
        likes: ["food", "mobile"],
        hasDrivingLicense: true,
        address: {
            location: "gurgaon",
            state: "haryana",
        },
        emails: ["abc@gmail.com", "efg@yahoo.com", "ghj@outlook.com"],
    },
];

// IMPORTANT: SOLVE the following questions using two methods
// 1. use for loop 
// 2. USE HIGHER ORDER FUNCTIONS TO SOLVE THE ABOVE QUESTIONS(map, filter, find, forEach etc. )


// ==================================== 0 ==================================== //

function profileLookup(name, property) {
    var a = null
    for (let i = 0; i < facebookProfiles.length; i++) {
        if (name !== facebookProfiles[i].firstName) {
            a = "person does not exist"
        } else if (property !== facebookProfiles[i].number) {
            a = "no such property"
        } else {
            a = facebookProfiles.number
        }

    }
    return a
}
const b = profileLookup("Aravind", "number")
console.log(b);



// complete the above function such that when it is called with name and property, then it should return its value
// ex
// profileLookup("Pritesh", "number"), then it should return his number

// handle edge cases like:
//      if name is not in the list, return "person does not exist"
//      if property is not present then return "no such property"
// 
// Hint: dynamically access properties using square bracket

// ================================== 1 ====================================== //

function getNamesFromGurgaon(city) {
    //write your code here
    let result = [];

    for (let i = 0; i < facebookProfiles.length; ++i) {
        if (facebookProfiles[i].address.location === city) {
            if (facebookProfiles[i].firstName && facebookProfiles[i].firstName) {
                result.push(facebookProfiles[i].firstName + " " + facebookProfiles[i].lastName)
            }
        } else if (!facebookProfiles[i].lastName) {
            result.push(facebookProfiles[i].firstName)
        }
    }
    return result;
}
console.log(getNamesFromGurgaon("gurgaon"));
//complete the above functin such that it returns the list of full names of all people of gurgaon.
// ex = ['Jay ', 'Pritesh Kumar']

// ==================================2 ====================================== //

const aru = facebookProfiles.filter((fullName) => fullName.address.state === "haryana")
const getnames = aru.map((fullName) => fullName.firstName + " " + fullName.lastName)
console.log(getnames)
    // 2. complete this function, which takes state name as argument and return the name 
    // of one of its residents

// ================================== 3 ====================================== //

const getDL = facebookProfiles.filter((x) => x.address.location == "gurgaon").map((x) => {
    if (x.lastName == undefined) {
        x.lastName = ""
    }
    if (x.hasDrivingLicense == true) {
        return x.firstName + " " + x.lastName + "" + "DL"
    } else {
        return x.firstName + " " + x.lastName + " " + "N DL"
    }
})

console.log(getDL)

//3. write a function which returns full names of all people of gurgaon with their driving license status, in an array. 
// like shown in the example below
// ex = ['Jay - D/L', 'Pritesh Kumar - N D/L']

// =================================== 4 ===================================== //

const value = facebookProfiles.map((x) => x.firstName + "  " + x.lastName)
console.log(value)
    // 4. write a function which returns full names in an array
    //ans = ['Akash Agarwal', 'Pritesh Kumar', 'Sabiha Khan', 'Suyash Kashyap', 'Jay' ]


// ===================================== 5 =================================== //

const Likes = facebookProfiles.map((y) => y.likes)
console.log(Likes)
    // 5. write a function which returns all likes of all the people in an array
    //hint: use spread syntax
    //ans = ['music', 'movies', 'code', 'podcasts', 'travel', 'driving', 'food', 'mobile']

// ====================================== 6 ================================== //

const getDL1 = facebookProfiles.filter((x) => x.address.location == "gurgaon").map((x) => {
    if (x.lastName == undefined) {
        x.lastName = ""
    }
    if (x.hasDrivingLicense == true) {
        return x.firstName + " " + x.lastName + ""
    } else {
        console("No such person")
    }
})

console.log(getDL1)

//6. write a function which return  the name of the any one person who live in delhi and has driving license
//ans => "no such person"

// ======================================= 7 ================================= //

const Dl2 = facebookProfiles.filter((a) => a.hasDrivingLicense == false)
const getNames1 = Dl2.map((a) => a.firstName + " " + a.lastName)
console.log(getNames1)

//7. write a function which return the name of the any one person who like driving but doesnt have driving license
//asn => pritesh