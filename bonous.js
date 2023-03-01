document.getElementById('apply-bg').addEventListener('click',function(){
    const friends =document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor='red';
    }

})

document.getElementById('new-friend').addEventListener('click',function(){
const friendContainer =document.getElementById('friends')
const friend =document.createElement('div')
friend.innerHTML=`
<h3 class="friend-name">New Friend</h3>
<p>something new added </p>

`
friendContainer.appendChild(friend);

})