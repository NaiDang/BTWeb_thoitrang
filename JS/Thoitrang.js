
function listProducts(){
    for(let i=0;i<=men.length-1;i++){
        var demo='<div class="col-3">';
        demo+='<div class="card" style="width: 18rem;">';
        demo+='<img src="'+men[i].image+'" class="card-image-top">';
        demo+='<div class="card-body">';
        demo+='<h5 class="card-title">'+men[i].name+'</h5>';
        demo+='<p class="card-text">'+men[i].price+'</p>';
        demo+='<a href="#" class="btn btn-primary">Đặt mua</a>';
        demo+='</div>';
        demo+='</div>';
        demo+='</div>';
        console.log(demo);
        document.getElementById("man").innerHTML+=demo;
        localStorage.setItem("listmen",JSON.stringify(men));     
    }
    for(let i=0;i<=women.length-1;i++){
        var demo='<div class="col-3">';
        demo+='<div class="card" style="width: 18rem;">';
        demo+='<img class="card-img-top" src="'+women[i].image+'" alt="Card image cap"height="300px">';
        demo+='<div class="card-body">';
        demo+='<h5 class="card-title">'+women[i].name+'</h5>';
        demo+='<p class="card-text">'+women[i].price+'</p>';
        demo+='<a href="#" class="btn btn-primary">Đặt mua</a>';
        demo+='</div>';
        demo+='</div>';
        demo+='</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+=demo;
        localStorage.setItem("listwomen",JSON.stringify(women));     
    }
}



