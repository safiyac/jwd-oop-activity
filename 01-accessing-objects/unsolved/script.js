let joeBob = {
    name: {
        first: "Joe",
        last: "Bob"
    },
    age:38,
    height: '5"11',
    awake: true,
    hair: {
        color: "brown",
        length: "long",
        isClean: false
    },
    clothes: [
        {
            type: "t-shirt",
            color: "black",
            size: "medium"
        },
        {
            type: "jeans",
            color: "blue",
            waist: 36,
            inseam: 32,
            "pocket contents": [{
                item: "wallet",
                money: 40,
                cards: 3
            },
            {
                item: "phone",
                type: "nokia",
                incomingCall(){
                    if (joeBob.awake){
                        console.log("ring ring, ring ring, ring ring... Hello, this is Joe Bob")
                    } else {
                        console.log("ring ring, ring ring, ring ring... Thanks for calling, please leave a message.")
                    }
                },
                notification(){
                    console.log("DING!")
                }
            }
        ]
        },
        {
            type: "shoes",
            color: "black/white",
            size: 10
        }
    ]
}

// Use the above object to print the following items to the console

// age
console.log(joeBob.age); 

// first name and last name in the same line ( you will have to concat )
console.log("first" + "last");
    
// is joe bobs hair clean? If not then print "Joe Bob should wash his hair."
hairclean(){
                    if (joeBob.hair.isClean){
                        console.log("Joe Bob has clean hair today")
                    } else {
                        console.log("Joe Bob should wash his hair.")
                    }
                },

// the entire array of clothes
                    console.log(joeBob.clothes);

// the waist size of joe bobs jeans
console.log(joeBob.waist);

// run the method incomingCall(), run it again but have the call go to voicemail instead.
incomingCall(){
                    if (joeBob.awake){
                        console.log("ring ring, ring ring, ring ring... Hello, this is Joe Bob")
                    } else {
                        console.log("ring ring, ring ring, ring ring... Thanks for calling, please leave a message.")
                    }
                },
                notification(){
                    console.log("DING!")
                }
            }
        ]
        },
            
            incomingCall(asleep){
                    if (joeBob.awake){
                        console.log("ring ring, ring ring, ring ring... Hello, this is Joe Bob")
                    } else {
                        console.log("ring ring, ring ring, ring ring... Thanks for calling, please leave a message.")
                    }
                },
                notification(){
                    console.log("DING!")
                }
            }
        ]
        },

// the "type" of the last object in the clothes array
console.log(clothes.type);
