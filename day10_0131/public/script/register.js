const regexHandle = ( regex, input )=>{
    const inputValue = input.value ;
    const checked = regex.test(input.value);
    if( !checked  &&  inputValue){
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.nextElementSibling.style.display = 'block';
    }else{
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.nextElementSibling.style.display = 'none';
    }
}

document.getElementById('userName').addEventListener('input', (event)=>{
    const regex = /^[가-힣]{3,4}|^[a-z]{2,30}/gmi;
    const input = event.target;
    
    regexHandle( regex, input );
})

// userid
document.getElementById('userId').addEventListener('input', (event)=>{
    const input = event.target;  
    const regex = /^\w{5,12}(\d|\+|\$)?/gmi;
    regexHandle( regex, input );
})

// email
document.getElementById('userEmail').addEventListener('input', (event)=>{
    const input = event.target;  
    const regex = /[a-z\d.+-]+@[A-Z\d]+\.([a-z]{2,8})(\.[a-z]{2,8})?/gmi; 
    regexHandle( regex, input );
})

// 전화번호
document.getElementById('userPhone').addEventListener('input', (event)=>{
    const input = event.target;  
    const regex = /\(?\d{2,3}\)?[- ]?\d{4}[- ]?\d{4}/gm;  
    regexHandle( regex, input );
})

// 비밀번호
document.getElementById('userPwd').addEventListener('input', (event)=>{
    const input = event.target; 
    const regex = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[%$!])\w+/gm; 
    regexHandle( regex, input );
})

// 비밀번호 재확인
document.getElementById('userRepwd').addEventListener('input', (event)=>{
    const input = event.target; 
    const pwd=document.querySelector('#userPwd');
    const repwd=document.querySelector('#userRepwd');

    if( pwd.value !== repwd.value ){
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.nextElementSibling.style.display = 'block';
    }else{
        input.classList.remove('invalid');
        input.classList.add('valid');
        input.nextElementSibling.style.display = 'none';
    }
})

document.getElementById('submitBtn').addEventListener('click', ()=>{
    const user={
        // id:서버번호생성
        userName : userName.value,
        userId : userId.value,
        userEmail : userEmail.value,
        userPhone : userPhone.value,
        userPwd : userPwd.value,
    }
    console.log( user );

    const url = 'https://port-0-frontend2301-cf24lcbkizu9.gksl2.cloudtype.app/register';
    fetchFunc.post( url, user ).then(res=>res.json())
    .then(res=>console.log(res))
}) 