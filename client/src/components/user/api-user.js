import base from "../../config";

const create = (user) => {
  return fetch(`${base}/user/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

const list = () => {
  return fetch(`${base}/user`, { method: "GET" })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

const read = (params, token) => {
  return fetch(`${base}/user/${params.userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.t,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

const update = (params, token, user) => {
  return fetch(`${base}/user/${params.userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.t,
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

const remove = (params, token) => {
  return fetch(`${base}/user/${params.userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + token.t,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

export { create, list, read, update, remove };