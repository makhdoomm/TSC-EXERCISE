

let Guest_List :string[] = ['imran khan','nawaz sharif','asif zardari',];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!' )

}

let absent_Guest : string = 'imran khan';

let new_Guest :string = 'Kamran Tessori';

 Guest_List[0] = new_Guest ;

 for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr.' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!' )

}


console.log(`Mr. ${absent_Guest} is not coming to party. `)