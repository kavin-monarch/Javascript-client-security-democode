const database=[
    {
        id:'1',
        user:'kavin'
    },
    {
        id:'2',
        user:'dharnish'
    },
    {
        id:'3',
        user:'team_inbox'
    }
];
let value=location.hash.substring(1);
    console.log(value);
    database.map(item=>{
        if(value===item.id){
            console.log(item.user+' Logged in');
        }
 })