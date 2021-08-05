# Project Overview

## Project Links

- [Github repo link](https://github.com/davidvdev/dummy-website)
- [Deployment link](https://dummy-website-opal.vercel.app/)

## Project Description

This site aims to recreate a content-forward social media experience. Using the modern version of Reddit (and Instagram) as a design inspiration, this site will display a main feed of content cards, sub feeds from which the main feed is constructed, and the ability to save cards to a personal favorites feed.

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

// NASA Mars Rover Data
{
  "latest_photos": [
    {
      "id": 867717,
      "sol": 161,
      "camera": {
        "id": 42,
        "name": "FRONT_HAZCAM_LEFT_A",
        "rover_id": 8,
        "full_name": "Front Hazard Avoidance Camera - Left"
      },
      "img_src": "https://mars.nasa.gov/mars2020-raw-images/pub/ods/surface/sol/00161/ids/edr/browse/fcam/FLF_0161_0681240839_418ECM_N0060000FHAZ00206_01_295J01_1200.jpg",
      "earth_date": "2021-08-02",
      "rover": {
        "id": 8,
        "name": "Perseverance",
        "landing_date": "2021-02-18",
        "launch_date": "2020-07-30",
        "status": "active"
      }
    }
  ]
}
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [Mobile 1st wireframe](https://i.imgur.com/hEmgKQg.jpg)
- [Desktop 2nd wireframe](https://i.imgur.com/ZVdagQy.jpg)
- [React architecture](https://i.imgur.com/xEjkwW9.jpg)


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
| ---      | :---: |  
| App      | Houses API call data, routes, and context (if used)| 
| Main     | The main page "/" holds the feed for all cards| 
| Header   | appears on every page, holds the menu | 
| Menu     | expands from hamburger, include nav and options| 
| Feed     | Mainly a container for cards, but appears on every page and determines which cards get rendered | 
| Card     | dynamically made with data from API(s) can be favorited to be added to a favorites page | 
| SubPage | Sibling of main, tailored feed for favorites, and PageHead shows info about specific page | 
| PageHead | Shows specific infor about Page and holds link to PageInfo | 
| PageInfo | exclusive to pages, when accessed replaces feed with this component containing info and rules about this page. | 

## Time Frames

| Component                            | Priority | Estimated Time | Actual Time |
| ------------------------------------------- |:-:| :------: | :-------: |
| API Call and filtering data                 | H | 2 hrs    |  3 hrs    |
| Creating Contenful data                     | L | 2 hrs    |  1 hr     |
| Standardizing data for ease of use          | M | 3 hrs    |  4 hrs    |
| Setting up useContex for easy data flow     | M | 2 hrs    |  -        |
| Skeleton styling of components for function | M | 1 hr     |  4 hrs    |
| Feed layout                                 | H | 1.5 hrs  |  2 hrs    |
| Card layout                                 | M | 2 hrs    |  3 hrs    |
| Link and routing through menu               | H | 2.5 hrs  |  2 hrs    |
| Effectively repurposing feed component      | L | 2 hrs    |  1 hr     |
| Effectively repurposing page component      | L | 3 hrs    |  2 hrs    |
| Handling state and the favorites feed       | M | 3 hrs    |  2 hrs    |
| final styling and layout                    | H | 2 hrs    |  2 hrs    |
| Total                                       | - | 26 hrs   | 26 hrs    | 

## Additional Libraries
| Library | Role |
| ------- | ---- |

## Code Snippet

This is the code that combines all of the formatted data from my API calls, as well as limits the number of entries from the Mars Rover API Call. Not included in here is the template I used to format the incoming data to a standardized format.

```
    if (roverDataArr.length >= 8) roverDataArr = roverDataArr.slice(0,8)

    const postDataArr = [...blogDataArr, ...apodDataArr, ...roverDataArr].map((post, index) => {
      return {...post, id:index}
    })
    setPostData(postDataArr)
  }
```
