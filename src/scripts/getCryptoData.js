// function getCryptoData() {
//     var cryptoData = "This Will Be The Crypto Data To Be Printed In Webpage";
//     return cryptoData;
// }

// // console.log(getCryptoData());
// export default getCryptoData

import axios from 'axios';
import cheerio from 'cheerio';

// async function getCryptoData() {
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
  
//             //console.log($(childElem).text());
//             //document.write("Fetching...");
//             //document.write(processedData);

//             var processedData = $(childElem).text();
//             //document.write(processedData);
  
//             return processedData
  
//           })
//         }
  
//       })
      
//     } catch (error) {
//       console.log(error);
//     }
  
//   }



function getCryptoData() {
    try {
        const { webPageData } = axios.get('https://coinmarketcap.com/');
        console.log($(webPageData).data);


    //     const { webPageData } = axios.get('https://coinmarketcap.com/').then(response => {
    //     console.log(response.data);
    // });

    // console.log($(webPageData).text());
    // document.write($(webPageData).text());

    return webPageData


  
    //   const { data } = await axios({
    //     method: "GET",
    //     url: siteUrl,
    //   })
  
    //   const $ = cheerio.load(data)
    //   const elementSelector = '#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr'
  
    //   $(elementSelector).each((parentIdx, parentElem) => {
    //     if (parentIdx <= 9){
    //       $(parentElem).children().each((childIdx, childElem) => {
  
    //         //console.log($(childElem).text());
    //         //document.write("Fetching...");
    //         //document.write(processedData);

    //         var processedData = $(childElem).text();
    //         //document.write(processedData);
  
    //         return processedData
  
    //       })
    //     }
  
    //   })
      
    } catch (error) {
      console.log(error);
    }
  
  }
  
  
  export default getCryptoData;
//   console.log(getCryptoData());
//   document.write(getCryptoData());