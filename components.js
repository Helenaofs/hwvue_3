Vue.component("blog", {
    data() {
      return {
        articles: [
          {
            id: 1,
            heading: "Let’s Get Solution for Building Construction Work",
            date: "26 December,2022",
            itArticle:
              "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
          },
        ],
        subtitle: "Design sprints are great",
        subtitleText:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        list: [
          "Kitchen Bedroom Kitchen Planning Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  
          "Kitchen Building Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
  
          "Kitchen Architecture Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        ],
        tags: [
          "Kitchen",
          "Bedroom",
          "Building",
          "Architecture",
          "Kitchen Planning",
          "Bedroom",
        ],
        currentTag: "",
      };
    },
  
    template: `
  <div>
      <div>
      <section>
      <div v-for="article in articles" :key="article.id">
          <h2>{{ article.heading }}</h2>
          <p>{{ article.date }}</p>
          <p>{{ article.itArticle }}</p>
      </div>
      </section>
          <div>
                <h2>{{subtitle}}</h2>
                  <p>{{subtitleText}}</p>
                  <div>
                  <ol>
                    <li v-for="article in filterArticles">
                       {{article}}
                    </li>
                  </ol>
                  </div>
          </div>
          </div>
              <aside>
                <h3>Tags</h3>
                  <div>
                    <button @click="currentTag = tag" v-for="(tag, index) in tags" :key="index">
                        {{tag}}
                    </button>
                  </div>
              </aside> 
          </div>
      `,
    computed: {
      filterArticles() {
        return this.list.filter((article) =>
          article.includes(this.currentTag)
        );
      },
    },
  });
