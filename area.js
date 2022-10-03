function solve (area,vol,input){
let coordinatesArr = JSON.parse(input);
let resultArr = [];
for (const cordinates of coordinatesArr) {
    
        let resultObj= {
            area : area.call(cordinates),
            volume: vol.call(cordinates),
        };
       resultArr.push(resultObj);
   }
   return resultArr;
}

solve(area,vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]')