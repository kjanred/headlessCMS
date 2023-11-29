import got from "got";

const dataURL = "https://dev-janredsql.pantheonsite.io/wp-json/twentyseventeen-child/v1/route2";

// home page functions
export async function getSortedList() {

  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch (error) {
    jsonString.body = [];
    console.log(error);
  }


  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.forEach(
    function(item) {
      
      let x = '{"' + item.acf_fields + '"}';
      
      
      x = x.replaceAll(',','","');
    
      x = x.replaceAll(':', '":"');
      
      console.log(x);
      
      let y = JSON.parse(x);
      console.log(y);
      console.log(y.first_name);
      item.acf_fields = y;
    }
  );
  

  jsonObj.sort(function (a, b) {
    return a.post_title.localeCompare(b.post_title);
  });

  return jsonObj.map(function (item) {
    return {
      id: item.ID.toString(),
      name: item.post_title
    }
  });
}

export async function getAllIds() {
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch (error) {
    jsonString.body = [];
    console.log(error);
  }

  // const jsonObj = JSON.parse(jsonString);
  const jsonObj = JSON.parse(jsonString.body);

  return jsonObj.map(function (item) {
    return {
      params: {
        id: item.ID.toString()
      }
    }
  });
}

export async function getData(idRequested) {
  let jsonString;
  try {
    jsonString = await got(dataURL);
    console.log(jsonString.body);
  } catch (error) {
    jsonString.body = [];
    console.log(error);
  }

  const jsonObj = JSON.parse(jsonString.body);

  jsonObj.forEach(
    function(item) {
      
      let x = '{"' + item.acf_fields + '"}';
      
      
      x = x.replaceAll(',','","');
    
      x = x.replaceAll(':', '":"');
      
      console.log(x);
      
      let y = JSON.parse(x);
      console.log(y);
      console.log(y.first_name);
      item.acf_fields = y;
    }
  );

  const objMatch = jsonObj.filter(obj => {
    return obj.ID.toString() === idRequested;
  });

  let objReturned;
  if (objMatch.length > 0) {
    objReturned = objMatch[0];
  } else {
    objReturned = {};
  }

  return objReturned;
}
