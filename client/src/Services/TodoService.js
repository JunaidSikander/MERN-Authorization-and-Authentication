export default {
    getTodos: () => {
        return fetch('/user/todos')
            .then(res =>{
                if(res.status !== 401)
                    return res.json().then(data => data);
                else
                    return {nessage: {msgBody: 'unAuthorized', msgError: true}}
            });
    },

    postTodo: todo => {
        return fetch('/user/todo',{
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if(res.status !== 401)
                    return res.json().then(data => data);
                else
                    return {nessage: {msgBody: 'UnAuthorized', msgError: true}}
            });
    }

}
