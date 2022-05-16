| HTTP verb | URL | Request body | Action |
|-----------|-----|--------------|--------|
|**User Routes**||||
|GET|/api/users|(empty)|Returns all users|
|POST|/api/users|json|Creates a new user|
|GET|/api/users/:id|(empty)|Returns one user|
|PUT|/api/users/:id|json|Updates one user|
|DELETE|/api/users/:id|(empty)|Deletes one user|
|**Post Routes**||||
|GET|/api/posts|(empty)|Returns all posts|
|POST|/api/posts|json|Creates a new post|
|GET|/api/posts/:id|(empty)|Returns one post|
|PUT|/api/posts/:id|json|Updates one post|
|DELETE|/api/posts/:id|(empty)|Deletes one post|
|**Comment Routes**||||
|GET|/api/comments|(empty)|Returns all comments|
|POST|/api/comments|json|Creates a new comment|
|GET|/api/comments/:id|(empty)|Returns one comment|
|PUT|/api/comments/:id|json|Updates one comment|
|DELETE|/api/comments/:id|(empty)|Deletes one comment|
|**Collection Routes**||||
|GET|/api/collections|(empty)|Returns all collections|
|POST|/api/collections|json|Creates a new collection|
|GET|/api/collections/:id|(empty)|Returns one collection|
|PUT|/api/collections/:id|json|Updates one collection|
|DELETE|/api/collections/:id|(empty)|Deletes one collection|
|**Genre Routes**||||
|GET|/api/genres|(empty)|Returns all genres|
|POST|/api/genres|json|Creates a new genre|
|GET|/api/genres/:id|(empty)|Returns one genre|
|PUT|/api/genres/:id|json|Updates one genre|
|DELETE|/api/genres/:id|(empty)|Deletes one genre|


## **Do I need to create and delete genres????**


## **Models**
### User model
````javascript
{
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    likes: [{type: Schema.Types.ObjectId, ref: 'Post'}],
    collections: [{type: Schema.Types.ObjectId, ref: 'Collection'}], 
    followedBy: [{type: Schema.Types.ObjectId, ref: 'User'}],
    following: [{type: Schema.Types.ObjectId, ref: 'User'}],
    imageUrl: {type: String, default: 'https://icon-library.com/images/default-profile-icon/default-profile-icon-10.j'}
}
````
### Post model
````javascript
{
    description: {type: String, required: false},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    imageArray: [{type: String, required: true}],
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    genres: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
}
````
### Comment model
````javascript
{
    message: {type: String, required: false},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}]
}
````
### Collection model
````javascript
{
    title: {type: String, required: true},
    description: {type: String, required: false},
    owner: {type: Schema.Types.ObjectId, ref: 'User'},
    items: [{type: Schema.Types.ObjectId, ref: 'Post'}]
}
````