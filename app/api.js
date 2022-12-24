const API = "http://10.0.2.2:3001/api/tasks";

export const getTasks = async () => {
  try {
    const response = await fetch(API);
    const tasks = await response.json();
    return tasks;
  } catch (error) {
    console.log(error);
  }
};

export const postTask = async (body) => {
  try {
    const response = await fetch(API, {
      headers: {
        "Content-Type": "Application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });
    const status = await response.json();
    return status;
  } catch (error) {
    console.log(error);
  }
};

export const putTask = async (id, body) => {
  try {
    const response = await fetch(API + "/" + id, {
      headers: {
        "Content-Type": "Application/json",
      },
      method: "PUT",
      body: JSON.stringify(body),
    });
    const status = await response.json();
    return status;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(API + "/" + id, {
      method: "DELETE",
    });
    const status = await response.json();
    return status;
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (id) => {
  try {
    const response = await fetch(API + "/" + id);
    const task = await response.json();
    return task;
  } catch (error) {
    console.log(error);
  }
};
