# js_albums_project

A project to review API calls.
You can find the published page [on this link.](https://enginkosure.github.io/js_albums_project/)

### Summary

AP2 is an API sandbox using JsonPlaceholder. This project is done with vanilla JavaScript.
For CSS, Bootstrap Library and SASS preprocessor used.
API calls are made through built-in Fetch API.

### Getting Started

Most parts of the page are made for fun (header, footer, navbar etc.).

The main part is _API Sandbox_ part and _Get Photos Get Albums_ section.

#### API Sandbox

This part has an embedded code editor to try the API calls. There are already two calls made. If you run it, you can see the result on the right section.
You can show and hide this section by means of clicking on **API SandBox ~ Try it ~ Show/Hide** button.

#### Get Photos Get Albums

Here, if you click to Get Photos button, you will see first 10 photos fetched from the JsonPlaceholder API.
If you click once more, you will get the next 10 photos.

Later, if you click to Get Albums button, you will see the first 10 albums within the same area.

If you click any album number, you will get the photos _(50 photos per album)_ belonging to that albumId.

### TODOs

- ~~Implement the whole logic also with React or Flask/Django.~~ Done.
- ~~Another call to return the photos of selected album.~~ Done.
- ~~Add pagination.~~ Done.
- ~~Add a Helper file to show other call examples in the embedded terminal.~~ Done.
