const data = [
  {
    image:
      "https://images.hindustantimes.com/img/2022/06/30/1600x900/_a406ad32-8f77-11ea-8c4e-d383a7371370_1656594113510.jpg",
    title: "DEADPOOL",
    rating: "4",
  },

  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/8/e0/641e08c11bc6e/clean.jpg",
    title: "IRON MAN",
    rating: "3.5",
  },

  {
    image:
      "https://lumiere-a.akamaihd.net/v1/images/pp_disneymovies_antmanquantumania_1721_94516e7a.jpeg?region=0%2C0%2C540%2C810",
    title: "ANT MAN",
    rating: "3",
  },

  {
    image:
      "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/8299/1328299-v-41830f478c3f",
    title: "THOR",
    rating: "4",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg",
    title: "SPIDER-MAN",
    rating: "4.5",
  },
  {
    image:
      "https://cdn.vox-cdn.com/thumbor/3d5Enbpx7sMOp8cM7J4chyjk8SM=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
    title: "AVENGERS INFINITYWAR",
    rating: "5",
  },
];
const movieBox = document.getElementById("show_movies");

data.map((el)=>{
    const div=document.createElement("div");
    const img=document.createElement("img");
    img.src=el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const rating = document.createElement("p");
    rating.innerText = "Rating : " + el.rating;
    const button =document.createElement("button");
    button.innerText = "Click Movie";
    button.addEventListener("click",()=>{
        alert(`You clicked on ${el.title}`);
    }),
    div.append(img, movieTitle, rating,button);
    movieBox.append(div);
}
);
/* for(let i=0;i<data.length;i++){
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=data[i].image;
    const movieTitle=document.createElement("h3");
    movieTitle.innerText=data[i].title;
    const rating=document.createElement("p");
    rating.innerText="Rating : "+data[i].rating;
    div.append(image,movieTitle,rating);
    movieBox.append(div);
}*/
