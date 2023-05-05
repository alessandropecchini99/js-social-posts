// imposto array
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

console.log(posts);


// --- creo i post ---
const container = document.querySelector(`.posts-list`);

posts.forEach((arrPost) => {

    container.innerHTML += 
    ` <div class="post">

        <!-- HEADER -->
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    ${checkProPic(arrPost.author.image) ? `<div class="profile-pic-letter">${iniziali(arrPost.author.name)}</div>` : `<img class="profile-pic" src="${arrPost.author.image}" alt="${arrPost.author.name}">`}     
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${arrPost.author.name}</div>
                    <div class="post-meta__time">${dateFormatEu(arrPost.created)}</div>
                </div>                    
            </div>
        </div>

        <!-- MAIN -->
        <div class="post__text">${arrPost.content}</div>
        <div class="post__image">
            <img src="${arrPost.media}" alt="">
        </div>

        <!-- FOOTER -->
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" data-postid="${arrPost.id}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${arrPost.id}" class="js-likes-counter">${arrPost.likes}</b> persone
                </div>
            </div> 
        </div>      

    </div>`

});

// --- liked button --- + BONUS 3
const btnLike = document.querySelectorAll(".like-button");
const counterLike = document.querySelectorAll(".js-likes-counter");

btnLike.forEach((like, i) => {
    const counter = counterLike[i];

    like.addEventListener(`click`, () => {
        like.classList.toggle("like-button--liked");
        if (like.classList.contains(`like-button--liked`)) {
            posts[i].likes += 1;
            counter.innerHTML = `${posts[i].likes}`;
        } else {
            posts[i].likes -= 1;
            counter.innerHTML = `${posts[i].likes}`;
        }
    });
});



// *** BONUS ***
// --- data inversa --- BONUS 1
function dateFormatEu(date) {
    return date.split('-').reverse().join('/');
};

// --- iniziali --- BONUS 2
function checkProPic(proPic) {
    const profilePic = proPic;
    if (profilePic == null) {
        return true;
    } else {
        return false;
    }
}

function iniziali(name) {
    const Name = name.split(` `);
    const firstLetter = Name.map(Name => Name.charAt(0));
    return firstLetter.join('')
};

// BONUS 3 NEL LIKE BUTTON