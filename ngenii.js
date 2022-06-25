// program to convert decimal to binary

// take input
//const number = parseInt(prompt('Enter a decimal number: '));
//const number = 12;

// convert to binary
//const result = number.toString(2);

//console.log('Binary:' + ' ' + result);

const ipAddress = "192.168.1.1";
const cidr = "/24";
const ip = ipAddress.split(".");
let octet = null;

let hosts =  50+2;
let hostBits = Math.ceil(Math.log2(hosts));

let newCidr = 32-hostBits;

let ipBin = null;

if (newCidr>24){
    ipBin = ip[3].toString(2);
    if(ipBin.length<8){
        while (ipBin.length < 8) ipBin = "0" + ipBin;
    }
}

//broadcast

function broadcast(ipBin){
    let currentOctet = Array.from(ipBin);
    //convert to 1s
    for(let i=2;i<currentOctet.length;i++){
        if(currentOctet[i]=='0'){
            currentOctet[i] = 1;
        }
    }
    let ipScheme = {
        0 : 128,
        1 : 64,
        2 : 32,
        3 : 16,
        4 : 8,
        5 : 4,
        6 : 2,
        7 : 1
    }

    let value = 0;
    for (let i = 0;i<currentOctet.length;i++){
        if(currentOctet[i]=="1"){
            value = value + ipScheme[i];
        }
    }
    return value;

}


let firstIP = parseInt(ip[3])+1;
let broadcastIP = broadcast(ipBin);
let lastIP = broadcastIP - 1;


const temp1 = ip ;
const temp2 = ip ;
const temp3 = ip ;

temp1.pop();
temp1.push(firstIP.toString());
let firstUIP = temp1.join(".");

temp2.pop();
temp2.push(lastIP.toString());
let lastUIP = temp2.join(".")

temp3.pop();
temp3.push(broadcastIP.toString());
let broadIP = temp3.join(".")


console.log(firstUIP);
console.log(lastUIP);
console.log(broadIP);

//convert to binary
