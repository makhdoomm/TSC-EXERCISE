

let Guest_List :string[] = ['imran khan','nawaz sharif','asif zardari',];




let absent_Guest : string = 'imran khan';

let new_Guest :string = 'Kamran Tessori';

 Guest_List[0] = new_Guest ;

 for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!' )

}


console.log(`Mr. ${absent_Guest} is not coming to party. `);
console.log('Good News! we find big table so we are inviting 3 more guests.')

Guest_List.unshift('sir Zia Khan') ;
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('bilawaal bhutoo');


for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!' )

}