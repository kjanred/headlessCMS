import got from "got";

const customersURL = "https://dev-janredsql.pantheonsite.io/wp-json/twentyseventeen-child/v1/n1";

const productsURL = "https://dev-janredsql.pantheonsite.io/wp-json/twentyseventeen-child/v1/n2";

const eventsURL = "https://dev-janredsql.pantheonsite.io/wp-json/twentyseventeen-child/v1/n3";

// get list functions
export async function getSortedCustomersList() {

  let jsonString;
  try {
    jsonString = await got(customersURL);
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

export async function getSortedProductsList() {

  let jsonString;
  try {
    jsonString = await got(productsURL);
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

export async function getSortedEventsList() {

  let jsonString;
  try {
    jsonString = await got(eventsURL);
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

// get IDs functions

export async function getAllCustomersIds() {
  let jsonString;
  try {
    jsonString = await got(customersURL);
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

export async function getAllProductsIds() {
  let jsonString;
  try {
    jsonString = await got(productsURL);
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

export async function getAllEventsIds() {
  let jsonString;
  try {
    jsonString = await got(eventsURL);
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

//get Data functions

export async function getCustomersData(idRequested) {
  let jsonString;
  try {
    jsonString = await got(customersURL);
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

export async function getProductsData(idRequested) {
  let jsonString;
  try {
    jsonString = await got(productsURL);
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

export async function getEventsData(idRequested) {
  let jsonString;
  try {
    jsonString = await got(eventsURL);
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