import fs from 'fs';
import path from 'path';

const dataDir = path.join( process.cwd(), 'data' );

// home page functions
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
        const filePath2 = path.join(dataDir, 'skills.json');
        const jsonString2 = fs.readFileSync(filePath2,'utf8');
        const jsonObj2 = JSON.parse(jsonString2);
        const objMatch2 = jsonObj2.filter(
            function(obj) {
              return obj.owner.toString() === idRequested;
            }
          );
        objReturned.skills = objMatch2;
      } else {
        objReturned = {};
      }
    
      return objReturned;
}


// resources page functions

export function getResourcesList() {

    const filePath = path.join(dataDir, 'resources.json');

    const jsonString = fs.readFileSync(filePath,'utf8');

    const jsonObj = JSON.parse(jsonString);

    return jsonObj.map(
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

