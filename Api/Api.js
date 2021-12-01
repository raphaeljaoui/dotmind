export const getUser = (index) => {
    return fetch(`https://reqres.in/api/users?page=${index}&delay=1`)
    .then(res => {return res.json()})
}