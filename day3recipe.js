const data = [
  {
    image:
      "https://media.istockphoto.com/id/1254720533/photo/chicken-biryani-with-yogurt-dip-popular-indian-pakistani-non-vegetarian-food.jpg?s=612x612&w=0&k=20&c=mnyhCsS3ysk3W37mpYfOsF2hSHA4a2CV3PDjr8aLdCU=",
    title: "CHICKEN BIRIYANI",
    recipe:
      "Chicken biryani is made with chicken, basmati rice, spices like cumin, coriander, turmeric, cardamom, cloves, cinnamon, bay leaves, and star anise. Onions, yogurt, ginger, garlic, and tomatoes add flavor. Ghee or oil is used for cooking. Garnishes include mint and cilantro. Optional ingredients are saffron, fried onions, nuts, and raisins.",
  },

  {
    image:
      "https://www.simplyrecipes.com/thmb/kXlwoFywQnKslGFWSKREkOddZrY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__01__Butter-Chicken-LEAD-5-de97119a16124a31a3b99ee16a398612.jpg",
    title: "KADAI CHICKEN",
    recipe:
      "Kadai chicken is a flavorful Indian dish with a spicy kick. The main ingredients are chicken, tomatoes, onions, capsicum, ginger, garlic, a blend of spices including red chili powder, turmeric, coriander powder, cumin seeds, garam masala, and kadai masala. Oil, salt, water, and fresh coriander are also used.",
  },

  {
    image:
      "https://www.spiceupthecurry.com/wp-content/uploads/2021/02/kadai-paneer-2-500x500.jpg",
    title: "SAHI PANEER",
    recipe:
      "Sahi paneer is a creamy and flavorful Indian dish made with paneer (cottage cheese) in a rich tomato-based gravy. The key ingredients include paneer, tomatoes, onions, cashews, ginger, garlic, a blend of spices such as turmeric, red chili powder, cumin, coriander, garam masala, cream, ghee or oil, fresh coriander, salt, and water.",
  },

  {
    image: "https://static.toiimg.com/photo/53094926.cms",
    title: "CHILLI CHICKEN",
    recipe:
      "Chilli chicken is a popular Indo-Chinese dish with a spicy and tangy flavor. The key ingredients for chilli chicken include boneless chicken pieces, green chilies, onions, garlic, ginger, soy sauce, tomato ketchup, capsicum, cornflour or cornstarch, vinegar, oil, salt, pepper, and spring onions for garnish.",
  },
  {
    image:
      "https://www.cookingwithsiddhi.com/wp-content/uploads/2020/11/veg-manchurian-dry-500x500.jpeg",
    title: "VEG MANCHURIAN",
    recipe:
      "Veg Manchurian is a popular Indo-Chinese dish made with mixed vegetables. The key ingredients include chopped vegetables, all-purpose flour, cornflour, ginger, garlic, soy sauce, green chilies, onions, garlic, tomato ketchup, vinegar, oil, salt, pepper, and spring onions for garnish.",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGT-YMNYBk4Qx0QZ5BQNNBMj3NfK5AUegdHg&usqp=CAU",
    title: "PANEER KOLHAPURI",
    recipe:
      " Paneer Kolhapuri is a spicy and flavorful dish from the Kolhapur region of India. The key ingredients include paneer (Indian cottage cheese), onions, tomatoes, coconut, Kolhapuri masala (a special spice blend), ginger, garlic, oil, cashews, cilantro, salt, and water. These ingredients come together to create a rich and tangy gravy with a burst of flavors.",
  },
];
const items = document.getElementById("show_recipe");

data.map((el) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  const title = document.createElement("h3");
  const recipe = document.createElement("p");
  image.src = el.image;
  const button1 = document.createElement("button");
  const button2 = document.createElement("button");
  button1.innerText = "Click to show ingredients";
  button2.innerText = "Click not to show ingredients";
  button1.addEventListener("click", () => {
    recipe.innerText = el.recipe;
  });
  button2.addEventListener("click", () => {
    recipe.innerText = "";
  });
  title.innerText = el.title;
  div.append(image, title, button1, button2, recipe);
  items.append(div);
});
