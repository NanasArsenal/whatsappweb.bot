const qrcode = require('qrcode-terminal');
const ReadText = require('text-from-image')


const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    
});


// client side event listener
client.on('message', msg => {
    if (msg.body.includes('Hi') || msg.body.includes('Hello') || msg.body.includes('Hey')) {
        msg.reply('Hey there, I am Asemnokre an AI fact checking chatbot');
        // setInterval()
        msg.reply(' I am here to help you get your facts right');
        msg.reply('Send TEXT if what you want to check is in text format');
        
    }
})

 client.on('message',async msg => {
    if(msg.body.includes('TEXT')|| msg.body.includes('text')){
        msg.reply("Okay!! Please forward me your text let me do the checking");
        
        setInterval(() => {
    
        }, 1000);
        
    }
} ) 

//using tesseract to get text from image
// client.on('message', async msg =>{
//     if(msg.hasMedia){
//         const media = await msg.downloadMedia();
//         //handle media with the tesseract to get text from it

// ReadText(media).then(text => {
//     console.log(text);
// }).catch(err => {
//     console.log(err);
// })
//     }
// }

// )

// const fetch = require('node-fetch');
// require('dotenv').config();

// function getData() {
//   const data = JSON.stringify({
//     query: `{
//         Fake_news{
//           _id
//           news
//           validity
//           accuracy
//           createdAt
//           updatedAt
//         }
//       }`,
//   });



//   const response =  fetch(
//     'https://radiant-sierra-94396.herokuapp.com/graphql',
//     {
//       method: 'get',
//       body: JSON.stringify({
//         query: `{
//             Fake_news{
//               _id
//               news
//               validity
//               accuracy
//               createdAt
//               updatedAt
//             }
//           }`,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   const json =  response;
//   console.log(json);
// }

// getData();



client.initialize();
