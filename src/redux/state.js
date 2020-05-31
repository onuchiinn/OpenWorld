let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'It\'s my first post', likesCount: 11 },
                { id: 3, message: 'My name is Slim Shady', likesCount: 313 },
                { id: 4, message: 'Shih shabash', likesCount: 30 }
            ],
            newPostText: ''
        },

        dialogsPage: {

            dialogs: [
                { id: 1, name: 'Dimych', photo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/TechCrunch_Disrupt_Europe_Berlin_2013_%2810536888854%29_%28cropped%29.jpg' },
                { id: 2, name: 'Andrey', photo: 'https://cdn21.img.ria.ru/images/45055/32/450553271_0:0:0:0_600x0_80_0_0_7582c3fd7d24258719590d0b6fdf1282.jpg' },
                { id: 3, name: 'Sveta', photo: 'https://img.pravda.com/images/doc/6/1/61a77ef-kobi.jpg' },
                { id: 4, name: 'Sasha', photo: 'https://1prime.ru/images/82921/21/829212163.jpg' },
                { id: 5, name: 'Victor', photo: 'https://img.gazeta.ru/files3/269/6032269/2014-05-12T012327Z_1867323988_GF2EA5B1UI001_RTRMADP_3_FACEBOOK-pic4_zoom-1000x1000-31058.JPG' }
            ],
            messages: [
                { id: 1, message: 'HI!' },
                { id: 2, message: 'How are you man' },
                { id: 3, message: 'Hello)' }
            ]
        }
    },
    _callSubcriber() {
        console.log('state was changed')
    },


    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubcriber = observer;     //observer - наблюдать (Паттерн)
    },


    // addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //     };

    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubcriber(this._state);
    // },
    
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubcriber(this._state);
    // },


    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubcriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubcriber(this._state);            
        }
    }

}

export default store;
window.store = store;


// state меняется только через функции, которые определены тут же (state)
