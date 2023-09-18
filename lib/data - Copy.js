import fs from 'fs';
import path from 'path';

const dataDir = path.join( process.cwd(), 'data' );

const newDataDir = path.join( process.cwd(), 'data' );

export function getSortedList() {

    const filePath = path.join(dataDir, 'people.json');

    const jsonString = fs.readFileSync(filePath,'utf8');

    const jsonObj = JSON.parse(jsonString);

    jsonObj.sort(
        function(a,b) {
            return a.name.localeCompare(b.name);
        }
    );

    return jsonObj.map(
        function(item) {
            return {
                id: item.id.toString(),
                name: item.name
            };
        }
    );
}

export function getAllIds() {

    const filePath = path.join(dataDir, 'people.json');

    const jsonString = fs.readFileSync(filePath,'utf8');

    const jsonObj = JSON.parse(jsonString);

    return jsonObj.map(
        function(item) {
            return {
                params: {
                    id: item.id.toString()
                }
            };
        }
    ); 
}


export async function getData(idRequested) {
    const filePath = path.join(dataDir, 'people.json');

    const jsonString = fs.readFileSync(filePath,'utf8');

    const jsonObj = JSON.parse(jsonString);
    const objMatch = jsonObj.filter(
        function(obj) {
          return obj.id.toString() === idRequested;
        }
      );
    
      let objReturned;
      if (objMatch.length > 0) {
        objReturned = objMatch[0];
      } else {
        objReturned = {};
      }
    
      return objReturned;
}


export function getFooterList() {

    const newFilePath = path.join(newDataDir, 'resources.json');

    const newJsonString = fs.readFileSync(newFilePath,'utf8');

    const newJsonObj = JSON.parse(newJsonString);

    return newJsonObj.map(
        function(item) {
            return {
                id: item.id.toString(),
                name: item.name,
                url: item.url,
                description: item.description
            };
        }
    );
}