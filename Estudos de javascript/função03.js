function fatorial(n){
    let fat = 1
    for (let c = n ; c>1 ; c--){
        fat *= c
    }
return fat 
}

// recursividade
function fatorial2(m){
    if(m==1){
        return 1
    }else{
        return m* fatorial2(m-1)
    }
    
}console.log(fatorial2(4))

