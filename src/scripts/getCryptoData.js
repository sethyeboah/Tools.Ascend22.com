// export default function getCryptoData() {
//     var cryptoData = "This Will Be The Crypto Data To Be Printed In Webpage";
//     return cryptoData;
// }

////////////////////////////////////////////////////////////

// import axios from 'axios';
// import cheerio from 'cheerio';

// export default async function getCryptoData() {
//     try {
//       const siteUrl = 'https://coinmarketcap.com/'
  
//       const { data } = await axios({
//         method: "GET",
//         url: siteUrl,
//       })
  
//       const $ = cheerio.load(data)
//       const elementSelector = '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr'
  
//       $(elementSelector).each((parentIdx, parentElem) => {
//         if (parentIdx <= 9){
//           $(parentElem).children().each((childIdx, childElem) => {
  
//             console.log($(childElem).text());
//             document.write($(childElem).text());
  
//           })
//         }
  
//       })
      
//     } catch (error) {
//       console.log(error);
//     }
  
//   }


/////////////////////////////////////////////////////////////////////////////////

// import axios from 'axios';
// import cheerio from 'cheerio';

// let webPageData = await axios.get('https://coinmarketcap.com/');

// let cryptoData = webPageData.data;

// export default cryptoData;

/////////////////////////////////////////////////////////////////////////////////

import axios from 'axios';
import cheerio from 'cheerio';

let webPageData = await axios.get('https://coinmarketcap.com/');
let cryptoData = [];


const $ = cheerio.load(webPageData.data)
const elementSelector = '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr';

    // $(elementSelector).each((parentIdx, parentElem) => {
    //     if (parentIdx <= 1) {
    //         $(parentElem).children().each((childIdx, childElem) => {
        
    //             cryptoData[parentIdx] = $(childElem).text();
    //             console.log(cryptoData[parentIdx]);
    //             document.write(cryptoData[parentIdx]);
        
    //         })
    //     }
        
    // })

    $(elementSelector).each((i, parentElem) => {
        if (i <= 1) {
            $(parentElem).children().each((childIdx, childElem) => {
                
                // cryptoData[i] = $(childElem).text();
                // console.log(cryptoData[i]);
                // document.write(cryptoData[i]);

                ///////////////////////////////////////////

                cryptoData.push($(childElem).text());

                ///////////////////////////////////////////////
        
            })
        }
    });

    // console.log(cryptoData);
    // document.write(cryptoData);


    // for (let i = 0; i < 2; i++) {
    //     console.log(cryptoData);
    //     document.write(cryptoData);
    // }
    

export default cryptoData;