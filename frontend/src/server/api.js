import { getUser, postBookmarks, getBookmarks } from "../api/index.js"

function loginApi(sendData, _callback){
    let result = {};

    getUser()
    .then((res) => {
        console.log('login res:', res.data);
        let account = null; // 일치하는 계정

        account = res.data.find(x => {
            return x.id == sendData.id
        });
        
        if(account !== undefined && account.pw == sendData.pw){
            result = {"status" : "SUCCESS"}
        }else{
            result = {"status" : "FAIL"}
        }

        _callback(result);
    })
    .catch((err) => {
        console.log("error >>>> ",err);
    })
}

function signUpApi(sendData, _callback){
    let result = {};

    getUser()
    .then((res) => {
        console.log('register res:', res.data);

        _callback(result);
    })
}

function regBookmarksApi(sendData, _callback) {
    let result = {};

    // 중복체크.....

    postBookmarks(sendData)
    .then((res) => {
        console.log("postBookmarks res >>>>> ",res);
        result = {"status" : "success"};

        _callback(result);
    })
    .catch((err) => {
        console.log("errr   >>> ",err);
        
    })
}

function myBookmarksApi(sendData, _callback) {
    let result = {};

    getBookmarks()
    .then((res) => {
        console.log("getBookmarks res >>>>> ",res);
        const data = res.data;
        const myList = data.filter(x => {
            return x.user_id == sendData.user_id;
        })
        result = {
            "status" : "success", 
            "data" : {
                "bookmarks" : myList || []
            }
        };

        _callback(result);
    })
    .catch((err) => {
        console.log("err   >>> ",err);
        
    })
}

export {
    loginApi,
    signUpApi,
    regBookmarksApi,
    myBookmarksApi
};