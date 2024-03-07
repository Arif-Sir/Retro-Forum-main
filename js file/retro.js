const loadPost = async (searchText ='Comedy') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayposts(posts);
 
}
const displayposts = (posts) => {
  const postContainer = document.getElementById('post-container');
  postContainer.innerText = '';

  posts.forEach((post) => {
      const isActive = post.isActive; // Replace 'isActive' with the actual property in  post object

      const postCard = document.createElement('div');
      postCard.classList = 'mx-auto mt-10 lg:flex gap-4 bg-gray';

      postCard.innerHTML = `
          <div class="">
              <div class="card bg-base-200">
                  <div class="hero-content flex-col lg:flex-row">
                      <div class="indicator pt-0 mt-0">
                          ${isActive ? '<span id="i_light" class="indicator-item badge bg-green-500"></span>' :'<span id="i_light" class="indicator-item badge bg-red-500"></span>'}
                          <div class="grid w-16 h-16 bg-base-300 lg:pt-0">
                              <img src="${post.image}" alt="" srcset="">
                          </div>
                      </div>
                      <div>
                          <div class="flex gap-8">
                              <p># ${post.category} </p>
                              <p>Author: ${post.author.name} </p>
                          </div>
                          <h4 class="font-bold">${post.title}</h4>
                          <br>
                          <p>${post.description}</p>
                          <hr class="border-dashed bg-gray-950 mt-4 mb-4">
                          <div class="flex justify-between ">
                              <div class="flex gap-2 lg:gap-4">
                                  <img src="images/tabler-icon-message-2.svg" alt="">
                                  <p>${post.comment_count}</p>
                                  <img src="images/tabler-icon-eye.svg" alt="">
                                  <p>${post.view_count}</p>
                                  <img src="images/tabler-icon-clock-hour-9.svg" alt="">
                                  <p>${post.posted_time} min</p>
                              </div>
                              <button onclick="clicked('${post.title}','${post.view_count}')" id="btn" class="btn">
                                  <img src="images/email 1.svg" alt="">
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;

      postContainer.appendChild(postCard);
  });

  toggleLoadingSpinner(false);
};




  // -------- search button------
  const handelSearch = () => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPost(searchText);
  };

  //------------------ loading spnieer ----------
  const toggleLoadingSpinner = (isLoading)=>{
    const loaddingSpinner = document.getElementById('loading-spiner');
    if(isLoading){
      loaddingSpinner.classList.remove('hidden')
    }
    else{
      loaddingSpinner.classList.add('hidden')
    }
  };  



loadPost();

// ----------- latsest post---------
const loadlatesttPost = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data = await res.json();
  const latestposts = data;
  // console.log(posts);
  displaylatesttPost(latestposts);

}
const displaylatesttPost = (latestposts) =>{
  // console.log(posts);

  const latestpostContainer = document.getElementById('latestPost-container');
  latestposts.forEach(latestpost =>{
      console.log(latestpost);

      // 2.creat a div
      const latestpostCard = document.createElement('div');
      latestpostCard.classList =`card mx-auto ml-3  bg-base-100 shadow-xl  `;
      // 3. srt inner html
      latestpostCard.innerHTML = `
      <figure class="px-10 pt-0">
      <img src="${latestpost.cover_image}"  class="rounded-xl" />
      </figure>
                    <div class="card-body ">
                        <div class="flex gap-2 items-center">
                        <img src="images/Date.svg" alt=""/>
                        <p>${latestpost.author.posted_date?latestpost.author.posted_date : 'no publish Date'}</p>
                        </div>

                      <h2 class="card-title">${latestpost.title}</h2>
                      <p>${latestpost.description}</p>
                      <div class="flex items-center gap-5">
                        <div class="w-20 h-20 rounded-full place-items-center bg-black">
                        <img src="${latestpost.profile_image}" alt="">
                        </div>
                        <div>
                            <p class="font-bold">${latestpost.author.name}</p>
                            <p>${latestpost.author.designation ? latestpost.author.designation :'Unknown'}</p>
                        </div>

                      </div>
                    </div>
  
      
   `; 
  //  appned child
  latestpostContainer.appendChild(latestpostCard);
  })
}
loadlatesttPost();

// --------- after clicked msg button

const msg_count = document.getElementById('count');
const field=document.getElementById('f');
const clicked = (title,view) =>{
  const countMsg = parseInt(msg_count.innerText);
 const counted = countMsg + 1;
 msg_count.innerText = counted;

 const tt= document.createElement('div');
 tt.classList.add('flex','justify-between','p-1','mb-4','lg:p-3','rounded-xl','bg-white')
 tt.innerHTML=`
 <div>
  <h3 class="text-lg font-bold mb-4">${title}</h3>
</div>
<div class="flex items-center gap-1 lg:gap-2">
  <img src="images/tabler-icon-eye.svg" alt="" srcset=""> 
                  <p>${view}</p>
</div>
 `
  ;
 field.appendChild(tt);

}



