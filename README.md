# Project Overview

## Project Links

- [Github repo link](https://github.com/davidvdev/dummy-website)
- [Deployment link](https://dummy-website-opal.vercel.app/)

## Project Description

This site aims to recreate a content-forward social media experience. Using the modern version of Reddit as a design inspiration, this site will display a main feed of content cards, sub feeds from which the main feed is constructed, and the ability to save cards to a personal favorites feed.

## API

For right now, all data is being pulled from [Contentful](https://www.contentful.com/developers/docs/references/content-delivery-api/), but, if possible, I'm considering implementings the [Nasa APOD API](https://api.nasa.gov/), as well.  


```json
// Contentful Data

{
  "sys": {
    "type": "Array"
  },
  "total": 1,
  "skip": 0,
  "limit": 100,
  "items": [
    {
      "metadata": {
        "tags": [
          
        ]
      },
      "sys": {
        "space": {
          "sys": {
            "type": "Link",
            "linkType": "Space",
            "id": "7msncevw6mo1"
          }
        },
        "id": "6fFHd9mcY5EtZWs3Wnftxx",
        "type": "Entry",
        "createdAt": "2021-07-29T20:01:02.909Z",
        "updatedAt": "2021-07-29T20:01:02.909Z",
        "environment": {
          "sys": {
            "id": "master",
            "type": "Link",
            "linkType": "Environment"
          }
        },
        "revision": 1,
        "contentType": {
          "sys": {
            "type": "Link",
            "linkType": "ContentType",
            "id": "blog"
          }
        },
        "locale": "en-US"
      },
      "fields": {
        "title": "blog post number 1",
        "body": "all of the content from the blog post.",
        "date": "2021-07-16T00:00-05:00"
      }
    },
  ]
}

// NASA APOD Data
{
  "copyright": "Carlos Uriarte",
  "date": "2021-07-29",
  "explanation": "This tall telescopic field of view looks out along the plane of our Milky Way Galaxy toward the nebula rich constellation Cygnus the Swan.",
  "hdurl": "https://apod.nasa.gov/apod/image/2107/sh2_101_04.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "The Tulip and Cygnus X-1",
  "url": "https://apod.nasa.gov/apod/image/2107/sh2_101_04_1024.jpg"
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile 1st wireframe](https://i.imgur.com/hEmgKQg.jpg)
- [Desktop 2nd wireframe](https://i.imgur.com/ZVdagQy.jpg)
- [React architecture](https://i.imgur.com/ATEyVmA.jpg)


### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Pull in data from multiple APIs
- Create Content Feed from dynamically created cards
- Implement a seperate favorites page w/ a feed of favorited cards
- Header with hamburger menu and nav

#### PostMVP

- Use the favorites page as a template for subgroup pages
    - only show cards related to that subgroup in the feed.
- add multiple points of interaction
    - voting, commenting, sharing

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
