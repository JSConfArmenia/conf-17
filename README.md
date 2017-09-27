# conf-17

> JSConf Armenia 2017 landing page

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Sections

- Header
  - COntains logo on the left and nav on the right
  - By default header's height is larger, and ther is no background
  - Header has 2 states: default and sticked
  - In sticked stated the header has a background and is sticked to screen top
  - Header is becoming sticked after page scrolling ( e.g. more than 30px)
  - Header is in default state when the page is scrolled to top position
- Intro cover includes title, countdown + register
  - Intro should cover the whole space of the screen (100% width, 100vh)
  - Intro background is set by background-size: cover;
  - Intro has a title "JSconf" and subtitle "JavaScript conference held in Armenia Yerevan, Nov 25"
- Schedule
  - Skip this section initially, or add coming soon
- Speakers
  - Will be probided
- Sponsors and friends
  - Event sponsors
  - Simply Technologies
  - ISTC
  - Iterate Hackerspace
- Team
  - Core team (Rouben, Alexander, Edgar, Gevorg)
  - Volanteers
  - Credits (Website creator, logo designer and people who have helped to make this happen) 
- Location and Contact
  - Google map
- Footer
  - Logo placeholder 
  - Links
  
Design ref:
http://demo.themeum.com/wordpress/eventum/

For logo use a placeholder like {jsconf.am} Logo will be provided later
