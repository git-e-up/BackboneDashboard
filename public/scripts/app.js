$(document).ready(function(event) {

  var thirdOfACardView = Backbone.View.extend({

    tagName: "article",
    className: "block-third shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });


  var halfOfACardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      //$('body').append(this.$el);
      var row = $('.row')[2];
      $(row).append(this.$el);
    }
  });

  var data = { title: '<h3 style="color: brown;">Wenge</h3>', content: '<article style="color: brown;">Is a colour</article>'}
  var newCard = new thirdOfACardView(data);

  var dataTwo = { title: "Alice", content: '<article style="border-style: solid;">Is Alice</article>'};
  var anotherCard = new thirdOfACardView(dataTwo);

  var dataThree = { title: "Bring me a shrubbery", content: '<img width="140" height="200" src="http://fc05.deviantart.net/fs71/i/2012/116/b/c/shrubbery_mega_pack_6_by_graphicpastock-d4xp957.jpg"></img> oh it\'s been brought\'n'};
  var thirdCard = new thirdOfACardView(dataThree);

  var dataFour = { title: '<h3 style="font-family: courier; margin-left:30px;">Matt</h3>', content: "is short for Matthew, but long on style!"};
  var fourthCard = new halfOfACardView(dataFour);

  var dataFive = { title: "This", content: '<article style="background-color: red;">Is also a card</article>'};
  var fifthCard = new halfOfACardView(dataFive);



  var cardModel = Backbone.Model.extend({
	  initialize: function() {
		console.log("Hey, a card is here!");
	   }
  });

  var cardCollection = Backbone.Collection.extend({
    initialize: function(){
      console.log("Card collection initialized");
    },
    url: "/api/cards",
    model: cardModel
  });

  var list = new cardCollection();
  list.fetch()
  list.models.length
  // cardCollection.count()
  list.create({ title: "one is the loneliest number", message: "it is the loneliest number"});


});
