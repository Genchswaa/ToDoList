async function result(){ await someAPICallToGetAllTasks()}; 
const apiUrl = `Endpoint: https://wincacademydatabase.firebaseio.com//${gian}/tasks.json`;
const res = await fetch(apiUrl, {method: "PUSH"});
 const data = await res.json();

console.log("Before (the raw result):", result);
let tasks = Object.keys(result).map(key => ({
      id: key,
      description: result[key].description,
      done: result[key].done
  }));
  console.log("After the tasks array", tasks);