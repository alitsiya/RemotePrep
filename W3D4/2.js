var post_factory = function(id) {
    var posts = []

    var post = {
        url: 'http://jsonplaceholder.typicode.com/posts/',
        $el: $('<div class="post">').appendTo($('body')),
        initialize: function(id) {
            this.$el.attr('id', id)
            this.url += id
            var thisPost = this // wtf? http://stackoverflow.com/questions/4886632/what-does-var-that-this-mean-in-javascript
            $.get(this.url, function(data) {
                console.log(this) // window
                thisPost.attributes = data
                thisPost.render()
            })
            posts.push(this)
        },
        render: function() {
            this.$el.append([
                $('<div>').addClass('title').text(this.attributes.title),
                $('<div>').addClass('body').text(this.attributes.body)
            ])
        }
    }

    post.initialize(1)
}
console.log(post_factory(2));