const loadPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayposts(posts);
 
}
const displayposts = posts =>{
    // console.log(posts);

    const postContainer = document.getElementById('post-container');
    posts.forEach(post =>{
        console.log(post);

        // 2.creat a div
        const postCard = document.createElement('div');
        postCard.classList =` mx-auto mt-10 lg:flex gap-4 bg-gray`;
        // 3. srt inner html
        postCard.innerHTML = `
        <!-- left side -->
        <div class="">
          <div class="card   bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
              <div class="indicator  pt-0 mt-0">
                <span class="indicator-item badge badge-secondary"></span> 
                <div class="grid w-16 h-16 bg-base-300 lg:pt-0">
                  <img src="${post.image}" alt="" srcset="">
                </div>
              </div>
        
              <div>
                <div class="flex gap-8">
                  <p># ${post.category} </p>
                  <p>Author : ${post.author.name}  </p>
                </div>
                <h4 class="font-bold"> ${post.title}</h4>
                <br>
                <p> ${post.description}</p>
                  
                  <hr class="border-dashed  bg-gray-950 mt-4 mb-4">
        
               <div class="flex justify-between">
                <div class="flex gap-2 lg:gap-4">
                  <img src="images/tabler-icon-message-2.svg" alt="" srcset="">
                    <p>${post.comment_count}</p>
                  
                 <img src="images/tabler-icon-eye.svg" alt="" srcset=""> 
                  <p>${post.view_count}</p>
                  
                  <img src="images/tabler-icon-clock-hour-9.svg" alt="" srcset="">
                    <p>${post.posted_time} min</p>
                </div>
                
                <button  onclick="click()" id="btn" class="btn" ><img  src="images/email 1.svg" alt="" srcset=""></button>
        
               </div>
              </div>
                  
              </div>
              <div>      
              </div>
            
          </div>
      
        </div>
    
        
     `; 
    //  appned child
    postContainer.appendChild(postCard)
    })
}
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
      latestpostCard.classList =`card mx-auto   bg-base-100 shadow-xl  `;
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

// ----------------------


// const msgs = document.querySelectorAll('.btn');
// let countBtns = 0;
// // ------ foe 40 msg
// for (const msg of msgs) {
//     msg.addEventListener('click', function () {
//       console.log('click');
//         countBtns++;

//         // ==== msg count
//         const msg_count=document.getElementById('count');
//         const countMsg=parseInt(msg_count.innerText);
//         const counted=countMsg + 1;
//         msg_count.innerText=counted;

//       })
//     };
const msg_count=document.getElementById('count');
let countBtns = 1;
const click=()=>{
  console.log('clicked');
  const countMsg=parseInt(msg_count.innerText);
  const counted=countMsg + 1;
  msg_count.innerText=counted;
}