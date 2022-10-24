// import getCryptoData from "./getCryptoData";

// document.write("Processed Data: <br>");
// console.log(getCryptoData());
// document.write(getCryptoData());

//////////////////////////////////////////////////////////////////////////

// import cryptoData from "./getCryptoData";

// document.write("Processed Data: <br>");
// console.log(cryptoData);
// document.write(cryptoData);

////////////////////////////////////////////////////////////////////////////

// import cryptoData from "./getCryptoData";

// document.write("Processed Data: <br>");
// console.log(cryptoData);
// document.write(cryptoData);

////////////////////////////////////////
//// USING WEBPACK
////////////////////////////////////////

import cryptoData from "./getCryptoData";

document.write("Processed Data: <br>");
document.write(cryptoData);

var dataFunction = {
    theData : cryptoData,
};

// /////////////////////////////////////////////////////////
// // NO WEBPACK
// /////////////////////////////////////////////////////////

// const cryptoData = require('./getCryptoData.js');

// document.write("Processed Data: <br>");
// document.write(cryptoData);

// var dataFunction = {
//     theData : cryptoData,
// };

// // for (let i = 0; i <= 1; i++){
// //     console.log(cryptoData);
// //     document.write(cryptoData);

// // }