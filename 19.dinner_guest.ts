
[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!' )

let Guest_List :string[] = ['imran khan','nawaz sharif','asif zardari',];




let absent_Guest : string = 'imran khan';

let new_Guest :string = 'Kamran Tessori';

 Guest_List[0] = new_Guest ;

 for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List)
}


// console.log(`Mr. ${absent_Guest} is not coming to party. `);
// console.log('Good News! we find big table so we are inviting 3 more guests.')

Guest_List.unshift('sir Zia Khan') ;
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('bilawaal bhutoo');


// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr.' + Guest_List[i] + ',\n\n it is our pleasure to invite you in our party.\n\nThank You!' )

// }

// console.log('\nsorry we can not arrange big table, only two peoples will be ivited.');
while(Guest_List.length > 2 ){
    let remove_Guest = Guest_List.pop();
    // console.log(`sorry Mr. ${remove_Guest}, you are not invited for dinner.`);

    // for(let i=0; i<Guest_List.length; i++){

    //     console.log('Dear Mr.' + Guest_List[i] + ',\n\nYou are still invited forvDinner.\n\nThank You!\n\n' )
    
    // }

}

Guest_List.splice(0, 2);
console.log(Guest_List);

// exercise 19
// print a message indicating the number of people you are inviting to dinner.
console.log(`total number of guest are : ${Guest_List.length}` )






















