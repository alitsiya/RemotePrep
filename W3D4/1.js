// model
// It stores our post object data
var posts = []

// post object used inside posts
var post = {
    // The uri resource location to fetch data from
    url: 'http://jsonplaceholder.typicode.com/posts/',
    // DOM element that gets appended, part of the view
    $el: $('<div class="post">').appendTo($('body')),
    // controller
    // assigns the element an id, gets the correct url, then fetches the resource,
    // and then displays it
    initialize: function(id) {
        // sets id
        this.$el.attr('id', id)
        // sets correct url(resource we fetch from)
        this.url += id
        // bind the correct value to this
        var thisPost = this // wtf? http://stackoverflow.com/questions/4886632/what-does-var-that-this-mean-in-javascript
        // ajax request, fetches the data
        $.get(this.url, function(data) {
            console.log(this) // window
            // set the attributes to the data fetched
            thisPost.attributes = data
            // render to the DOM
            thisPost.render()
        })
        // update our model
        posts.push(this)
    },
    // view-controller
    // render our element to the page
    render: function() {
        // take our empty div
        this.$el.append([
            // populate it with our fetched data
            $('<div>').addClass('title').text(this.attributes.title),
            $('<div>').addClass('body').text(this.attributes.body)
        ])
    }
}

// kicking off our post object/model/view/controller
post.initialize(1)