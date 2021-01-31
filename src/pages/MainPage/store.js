import {createStore} from 'redux';
var initState = {
    mode:"READ",
    welcome_content:{
        title:'Main',
        desc:'Main, Hello'
    },
    selected_content_id:1,
    contents: [
        {id:1, title: ['전공','전공 1번','전공 2번'], desc: ['전공','전공 1 내용란...','전공 2 내용란...']},
        {id:2, title: ['생활','생활 1번','생활 2번','생활 3번'], desc: ['생활','생활 1 내용란...','생활 2 내용란...','생활 3 내용란...']},
        {id:3, title: ['등록','등록 1번','등록 2번','등록 3번'], desc: ['등록','등록 1 내용란...','등록 2 내용란...','등록 3 내용란...']},
        {id:4, title: ['장학금','장학금 1번'], desc: ['장학금','장학금 1 내용란...']},
        {id:5, title: ['학생지원','학생지원 1번'], desc: ['학생지원','학생지원 1 내용란...']}
    ]
}
function reducer(state=initState, action) {
    if(action.type === 'WELCOME'){
        return {...state, mode:'WELCOME'};
    }
    if(action.type === 'READ'){
        return {...state,mode:'READ', selected_content_id:action.id}
    }
    return state;   
}
export default createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());