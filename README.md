# [Graveyard](https://Jake123otte1.github.io/Graveyard)
Graveyard is a simple artistic project for experimenting and learning about React.js. It focuses on maintaining simple readability of the codebase.

## Technologies
Graveyard uses React.js and base HTML/CSS. It is a very simple webapp.

## Dev Retrospective
Graveyard works well except for one issue. When only typing and not submitting 'memories', React creates components for each 'figment' of a memory inside of a list of objects. Each object is a 'figment', with a message and id value. When figments fade away, they are shortly after removed from the list. For some reason, removing these objects from the list maintains a series of state variables related to their displays in prior components added before them.

Consider if figment #1 has a font-size of 15px and is in the upper left, whereas figment #2 has a font-size of 10px and is in the bottom right. In this case, if figment #1 is deleted too quickly, figment #2 will momentarily occupy its place with a font-size of 15px in the upper left.

I haven't found anything explicitly incorrect about my usage of React. I am surprised that the state variables within each component are even preserved for each JSX element within the array. It is a confusing issue.

Otherwise, everything works quite well. I am much happier with my usage of CSS this time around than other projects, although the website is admittedly much simpler than others.
