import app from "./firebase-app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export async function getSortedList() {
    const snapshot = await getDocs ( collection(db, "people") );
    const jsonObj = snapshot.docs.map(
        (d) => ( {
            id: d.id,
            ...d.data()
        }
        )
    );
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


export async function getAllIds() {
    const snapshot = await getDocs ( collection(db, "people") );
    const jsonObj = snapshot.docs.map(
        (d) => ( {
            id: d.id
        }
        )
    );

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
    const docRef = doc(db, "people", idRequested);
    const d = await getDoc(docRef);
    
    let objReturned;
    if (!d.exists) { 
      objReturned = {};
    } else {
      objReturned = d.data();
  const snapshot = await getDocs ( collection(db, "skills") );
  const jsonObj2 = snapshot.docs.map(
    (d2) => ( {
        id: d2.id,
        ...d2.data()
    }
    )
);
      // console.log(jsonObj2);
const objMatch2 = jsonObj2.filter(
  function(obj) {
    return obj.owner.toString() === idRequested;
  }
);
console.log(objMatch2);

objReturned.skills = objMatch2;
      
    }
  
  return objReturned;
}


// resources page functions

export async function getResourcesList() {
  const snapshot = await getDocs ( collection(db, "resources") );
  const jsonObj = snapshot.docs.map(
      (d) => ( {
          id: d.id,
          ...d.data()
      }
      )
  );
    return jsonObj.map(
      function(item) {
        return {
          id: item.id.toString(),
          url: item.url,
          name: item.name,
          description: item.description
        };
      }
    );

}
