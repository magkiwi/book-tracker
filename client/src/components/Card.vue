<template>
    
<div class="blog-card">
    <div class="meta">
      <div class="photo" :style="{backgroundImage: `url(${image})`}"> </div>
      <ul class="details">
        <li> <fa class="icon-nav" icon="user"/>{{author}}</li>
        <li v-if="pages" > <fa class="icon-nav" icon="book" /> {{ pages}} pages</li>
        <li v-if="year"> <fa class="icon-nav" icon="history"/> {{year}}</li>
      </ul>
    </div>
    <div class="description">
      <h1>{{title}}</h1>
      <h2>{{author}}</h2>
      <div class="category">{{category}}</div>
    </div>
  </div>
    
</template>

<script>
export default {
    name: "Card",
    props: ["title", "author", "image", "pages", "year", "category"],

}
</script>

<style scoped>


 .blog-card {
     min-width: 85vw;
     min-height: 25vh;
	 display: flex;
	 flex-direction: column;
	 margin: 1rem auto;
	 box-shadow: 0 3px 7px -1px rgba(0, 0, 0, .1);
    line-height: 1.5rem;
	 background: #1F2124;

	 font-family: sans-serif;
	 border-radius: 5px;
	 overflow: hidden;
     color: #fff;
	 z-index: 0;
}


 .blog-card .meta {
	 position: relative;
	 z-index: 0;
	 height: 100px;
}
 .blog-card .photo {
	 position: absolute;
	 top: 0;
	 right: 0;
	 bottom: 0;
	 left: 0;
	 background-size: cover;
	 background-position: center;
	 transition: transform 0.2s;
}
 .blog-card .details {
	 margin: auto;
	 padding: 0;
	 list-style: none;
    position: absolute;
	 top: 0;
	 bottom: 0;
	 left: -100%;
	 margin: auto;
	 transition: left 0.2s;
	 background: rgba(0, 0, 0, .6);
	 color: #fff;
	 padding: 10px;
	 width: 100%;
	 font-size: 0.9rem;
     display: inline-block;
}

 .icon-nav {
	 margin-right: 10px;
}

 .blog-card .description {
	 padding: 1rem;
	 background: #1F2124;
	 position: relative;
	 z-index: 1;
}

 .blog-card .description h1 {
	 line-height: 1;
	 margin: 0;
	 font-size: 1rem;
}
  h2 {
	 font-size: 0.9rem;
	 font-weight: 300;
	 text-transform: uppercase;
	 color: #a2a2a2;
	 margin-top: 5px;
}
 .blog-card .description .category {
	 text-align: right;
     background-color: #CF5C36;
     position: absolute;
     bottom: 0;
     right: 0;
     margin: 2px;
     border-radius: 3px;
     padding: 5px;


}




 .blog-card:hover .details {
	 left: 0%;
}
 @media (min-width: 800px) {
	 .blog-card {
         min-width: 30vw;
		 flex-direction: row;
		 max-width: 700px;
	}
	 .blog-card .meta {
		 flex-basis: 40%;
		 height: auto;
	}
	 .blog-card .description {
		 flex-basis: 60%;
	}

	 .blog-card.alt {
		 flex-direction: row-reverse;
	}
	 .blog-card.alt .description:before {
		 left: inherit;
		 right: -10px;
		 transform: skew(3deg);
	}
	 .blog-card.alt .details {
		 padding-left: 25px;
	}

     .blog-card .description .category {
	 text-align: right;
     background-color: #CF5C36;
     position: absolute;
     bottom: 0;
     right: 0;
     margin: 10px;
     border-radius: 3px;
     padding: 5px;


}
}

 
</style>