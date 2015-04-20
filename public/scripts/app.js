$(document).ready(function(event) {

  var halfCardView = Backbone.View.extend({

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

  var data = { title: "Wenge", content: "Is a colour"}
  var newCard = new halfCardView(data);

  var dataTwo = { title: "Alice", content: "is Alice"};
  var anotherCard = new halfCardView(dataTwo);

  var dataThree = { title: "Bring me a shrubbery", content: <img src="https://www.youtube.com/embed/PDZcqBgCS74"></iframe>};
  var anotherCard = new halfCardView(dataThree);

});
