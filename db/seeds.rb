
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])

restaurants = Restaurant.create([
    {
     name: "Sunset Tacolicious",
     description: "The best mexican food",
     img_url: "https://th.bing.com/th/id/OIP._bsKvllbvDskMrhvoDlJ1gAAAA?pid=ImgDet&rs=1"
 },
 { 
    name: "FoodCircles Restaurant",
    description: "All you can eat meals",
    img_url: "https://th.bing.com/th/id/OIP.RdNN9GEvTFDohpXmSeeplwHaGd?pid=ImgDet&rs=1"
  },
  { 
      name: "O'kebab",
      description: "Kebab 100% authentique",
      img_url: "https://th.bing.com/th/id/OIP.wsZZcK59stqSt-IW5IsZswHaHa?pid=ImgDet&rs=1"
   },
 { 
     name: "Italian juice bar",
     description: "Premium Italian Cuisine",
     img_url: "https://th.bing.com/th?id=OIF.8WHx5Dri%2fitRVyuXsUiWig&pid=ImgDet&rs=1"
  },
  { 
      name: "Magnifico BBQ",
      description: "The best BBQ grills",
      img_url: "https://images-platform.99static.com/xkl85rxkQ35ftnJ3UuJa10SO7tk=/500x500/top/smart/99designs-contests-attachments/46/46861/attachment_46861494"
   },
   { 
      name: "Vito Pizzeria & Restaurant",
      description: "The Authentic italian pizza",
      img_url: "https://shop-logos.imgix.net/shops/1280/original/1280.png?&auto=format&fit=max"
   }, { 
      name: "Mr Rollo",
      description: "Sushi Burgers and more!",
      img_url: "https://www.guia2laredos.com/publicidad/8/logo.jpg"
   }, { 
      name: "Fat Burgers",
      description: "World Renown Burgers",
      img_url: "https://concepts.logonerds.com/images/detail/29/Burger%20Restaurant%20Logo%20Idea.jpg"
   }, { 
      name: "China City Garden Restaurant",
      description: "Authentic chinese food",
      img_url: "https://www.logodesignguru.com/images/industry-logos/chinese-restaurant-02.png"
   }
 ])

 images = Image.create([
    {
      img_url: 'https://th.bing.com/th/id/R71b63e800c98014564e07785ea0a4313?rik=3%2bW7H4YFkleJOQ&riu=http%3a%2f%2fsiblighting.com%2fwp-content%2fuploads%2f2016%2f12%2fRestaurant-lighting-ideas.jpg&ehk=lIuWrdabOu4I1ECeBycKVYt4S8ToR0MGqLpoemNqNsw%3d&risl=&pid=ImgRaw',
      restaurant: restaurants.first
     },
     { 
        img_url: 'https://cdn.vox-cdn.com/thumbor/Ehxh3KcqVwtYaTytZLYG7DWKxOE=/0x0:3500x2356/1200x800/filters:focal(1470x898:2030x1458)/cdn.vox-cdn.com/uploads/chorus_image/image/57087011/blb15055_37566149182_o.0.jpg',
        restaurant: restaurants.first
      },
      { 
         img_url: 'https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/02/cemffj.jpg',
         restaurant: restaurants.first
       },
       { 
         img_url: 'https://th.bing.com/th/id/Ra157e4a64bdded130e784f334532a0f5?rik=xqcXKY%2bXieE%2fCA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_XMch6G-Xirw%2fS-QlN6L2CVI%2fAAAAAAAAAC4%2fBvDKRD07LvU%2fs1600%2f_DSC0062.jpg&ehk=GBIJMDcA4LQBmNbWyTUvfZVgaSGsoKELEL5gY2BJGzY%3d&risl=&pid=ImgRaw',
         restaurant: restaurants.first
       },
       {
         img_url: 'https://th.bing.com/th/id/R71b63e800c98014564e07785ea0a4313?rik=3%2bW7H4YFkleJOQ&riu=http%3a%2f%2fsiblighting.com%2fwp-content%2fuploads%2f2016%2f12%2fRestaurant-lighting-ideas.jpg&ehk=lIuWrdabOu4I1ECeBycKVYt4S8ToR0MGqLpoemNqNsw%3d&risl=&pid=ImgRaw',
         restaurant: restaurants.second
        },
        { 
           img_url: 'https://cdn.vox-cdn.com/thumbor/Ehxh3KcqVwtYaTytZLYG7DWKxOE=/0x0:3500x2356/1200x800/filters:focal(1470x898:2030x1458)/cdn.vox-cdn.com/uploads/chorus_image/image/57087011/blb15055_37566149182_o.0.jpg',
           restaurant: restaurants.second
         },
         { 
            img_url: 'https://img.theculturetrip.com/768x/smart/wp-content/uploads/2019/02/cemffj.jpg',
            restaurant: restaurants.second
          },
          { 
            img_url: 'https://th.bing.com/th/id/Ra157e4a64bdded130e784f334532a0f5?rik=xqcXKY%2bXieE%2fCA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_XMch6G-Xirw%2fS-QlN6L2CVI%2fAAAAAAAAAC4%2fBvDKRD07LvU%2fs1600%2f_DSC0062.jpg&ehk=GBIJMDcA4LQBmNbWyTUvfZVgaSGsoKELEL5gY2BJGzY%3d&risl=&pid=ImgRaw',
            restaurant: restaurants.second
          },

 ])

 reviews = Review.create([
     { 
         user: "Fernando Rodulfo",
         comment: "Best quality mexican food I've ever tasted",
         score: 5,
         restaurant: restaurants.first
      },
      { 
         user: "Lexi Povey",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 3,
         restaurant: restaurants.second
      },   { 
         user: "George Dickens",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 1,
         restaurant: restaurants.second
      },   { 
         user: "Alexandru Swanson",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 4,
         restaurant: restaurants.first
      },   { 
         user: "Eva Mann",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 3,
         restaurant: restaurants.third
      },   { 
         user: "Hughie Donaldson",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 5,
         restaurant: restaurants.fourth
      },   { 
         user: "Connagh Whiteley",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 3,
         restaurant: restaurants.fourth
      },   { 
         user: "Ocean Albert",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 4,
         restaurant: restaurants.first
      },   { 
         user: "Mikayla Bond",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 2,
         restaurant: restaurants.second
      },   { 
         user: "Tea Beard",
          comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 4,
         restaurant: restaurants.third
      },   { 
         user: "Liam Velasquez",
          comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 5,
         restaurant: restaurants.third
      },   { 
         user: "Tyrese Pugh",
          comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 5,
         restaurant: restaurants.second
      },   { 
         user: "Franklyn Kaiser",
         comment: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.",
         score: 2,
         restaurant: restaurants.fourth
      },
 ])
