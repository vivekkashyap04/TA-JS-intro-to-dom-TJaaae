let div = document.querySelector('#main');
got.houses.forEach(element => {
     element.people.forEach(data => {
         let innerDiv = document.createElement('div');
         innerDiv.className = "flex-container";
         let h2div = document.createElement('div');
         h2div.className = "flex-image";
         let img = document.createElement('img');
         img.src=data.image;
         img.className = "image";
         let h3 = document.createElement('h3');
         h3.innerText = data.name;
         h3.style.marginLeft = "10px";
         let p = document.createElement('p');
         p.innerText = data.description;
         let btn = document.createElement('button');
         btn.innerText = "Learn More!";
         btn.className = "btn";
         h2div.append(img,h3);
         innerDiv.append(h2div,p,btn);
         div.append(innerDiv);
     })
});