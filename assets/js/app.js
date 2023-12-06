


const postForm = document.getElementById('postForm');
const titleCantrol = document.getElementById('title');
const contentCantrol = document.getElementById('content');
const imgUrlCantrol = document.getElementById('imgUrl');
const userIdCantrol = document.getElementById('userId');
const addpost = document.getElementById('addpost');
const postcontainer = document.getElementById('postcontainer');


const db = [];



const templeting = (arr) => {
    console.log(arr);
    let result = ``
    arr.forEach(arr => {
        result += `   <div class="col-md-4">
                                <div class="card" id="${arr.id}">
                                    <div class="card-header"><h3>${arr.title}</h3></div>
                                    <div class="card-body">
                                        <img src="${arr.imgUrl}" alt="${arr.title}" title="${arr.title}">
                                    <p>${arr.content}</p>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between">
                                        <button class="btn btn-primary" onclick="onpostEdit(this)">Edit</button>
                                        <button class="btn btn-danger"  onclick="onpostDel(this)" >delete</button>
                                    </div>
                                </div>
                         </div>`

    });
    postcontainer.innerHTML = result

}

const onpostEdit = (card) => {
    editId = card.closest('.card').id;
    console.log(editId);
    localStorage.setItem('editId',editId);

    let editObj 
    // let editArr 
}

const onpostDel = (card) => {
    deleteid = card.closest('.card').id;
    let db = JSON.parse(localStorage.getItem('localDb'))
    let newDb = db.filter(obj => obj.id !== deleteid);
    templeting(newDb)
    localStorage.setItem('localDb', JSON.stringify(newDb))
}

const onformSub = (eve) => {

    eve.preventDefault()

    let obj = {
        title: titleCantrol.value,
        content: contentCantrol.value,
        imgUrl: imgUrlCantrol.value,
        userId: userIdCantrol.value,
        id: generateUuid()
    }
    db.push(obj)
    localStorage.setItem('localDb', JSON.stringify(db))
    console.log(db);

    templeting(db)

    // console.log('fghdsgfhdgs')
    postForm.reset();
    titleCantrol.focus()

}


postForm.addEventListener('submit', onformSub)




generateUuid = () => {
    return (
        String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
    ).replace(/[xy]/g, (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === "x" ? random : (random & 0x3) | 0x8;

        return value.toString(16);
    });
};
