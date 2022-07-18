


* {
    box-sizing: border-box;
  }
  
  .row-box > .column-w3 {
    padding: 0 8px;
  }
  
  .row-box:after {
    content: "";
    display: table;
    clear: both;
  }
  
  column-w3 {
    float: left;
    
  }
  
  
      
  
  /* The Modal (background) */
  .modal-w3 {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    
    overflow: auto;
    background-color: rgba(33,33,33,1);
    transition: 2sec;
    
  }
  
  
  
  
  /* Modal Content */
  .modal-content-w3 {
    position: relative;
    ackground-color: #fefefe;
    margin: auto;
    padding: 0px;
    width: 100%;
    max-width: 1500px;
    
  }
  
  /* The Close Button */
  .lightClose {
    color: rgba(255, 255, 255, 0.513);
    position: fixed;
    top: 6rem;
    right: 3rem;
    font-size: 35px;
    font-weight: bold;
    z-index: 100;
    padding: 0.5rem 0.1rem 0 0.1rem;
    border: solid 2px rgba(255, 255, 255, 0.328);
    transition: 200ms;
  }
  
  .lightClose:hover,
  .lightClose:focus {
    color: rgb(240, 128, 128);
    text-decoration: none;
    cursor: pointer;
    
  
    
  }
  
  .mySlides {
    display: none;
  }
  
  .cursor-w3 {
    cursor: pointer;
   
  
  }
  
  /* Next & previous buttons */
  .prev-w3,
  .next-w3 {
    cursor: pointer;
    position: absolute;
    top: 65%;
    width: auto;
    padding: 8px;
    margin: -50px 30px 0px 10px;
    color: rgba(255, 255, 255, 0.423);
    font-weight: bold;
    font-size: 40px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
    margin-top: 7rem;
    
  }
  
  
  
  
  
  
  .next-w3 {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  
  
  .prev-w3:hover,
  .next-w3:hover {
    background-color: rgba(101, 101, 101, 0.3);
    color: rgb(240, 128, 128);
     
  }
  
  
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    osition: absolute;
    top: 0;
  }
  
  img {
    margin: 0rem 0rem;
   
    
  }
  
  .caption-container {
    text-align: center;
    background-color: black;
    padding: 2px 16px;
    color: white;
    display: none;
  
  }
  
  
  
  img.hover-shadow {
    transition: 190ms;
    opacity: 0.1;
  }
  
  .hover-shadow:hover {
    box-shadow: 0 4px 8px 5px rgba(27, 27, 27, 0.56);
    transform: scale(1.035);
    opacity: 0.1;
    background: red;
  
  }
  
  .imageText {
        olor: violet;
        
  }
        
  .bkgrd {
          background: rgba(30, 30, 30, 0.25);
          eight: min(800px, 700px);
          z-index: 100;
          
        
  }
      
  .framer {
      
              
              padding:  calc(1vw + 20px);
              adding-right:  calc(1vw + 125px);
              adding-top:  calc(0.1vw + 1px);
              isplay: flex;
              lex-direction: row;
              ax-height: 800px;
              eight: 600px;
              in-width: 600px;
           
  }
  
  
  .thnl {
        opacity: 0.3;
        transition: s400ms;
       
  }
  
  
  .smallThnl {
        max-height: 6rem;
    
  
  }
  
  @media(min-width: 692px) {
  .smallThnl {
    
  }
  
  }
  
  
  .activeSlide,
  .thnl:hover {
        opacity: 0.5;
       
        transition: 200ms;
        border:rgb(240, 128, 128) 4px solid;
       transition: 0.3s;
       
  }
  
  
  
  .thnl:hover {
        transform: scale(1.1);
        border:none;
       
        
  }
  
        
  
        
  
  
  .riseThnl:hover {
        -index: 11900;
      
       
  
  }      
      
  
  
  .min-box {
        display: flex;
        background: rgba(25, 25, 25, 0.928);
        height: 100%;
        width: 100%;
        padding: 1% 1%;
        margin: 0 0%;
        flex-wrap: wrap;  
        min-height: 15rem;
        
  
  }               
  
  
  
  .box-a {
        
         ackground: blue;
        height: 90%;
        width: 50%;    
        flex: 1 0 auto;
         isplay:inline-flexbox;
        margin: 0rem 0rem;
        position: relative;
        transition: 1s;
         in-width: 25%;
        float: left;
        display: inline;
      
  }
  
  @media (min-width: 692px) {
        .box-a {
          flex: 1 0 0%;
         width: 90%;
         in-width: 500px;
         ackground: red;
         margin: 1rem 0rem;
  
        }
  }
  
  
  .box-b {
                 
        ackground: rgb(143, 143, 180);
        height: 100%;
        width: 50%;   
        position: relative; 
        flex: 3 0 0%;
        isplay:inline-flexbox;
        transition: 1s;
        min-width: 300px;
        margin: 1rem 0rem;
        in-width: 50%;
        
  }
  
  @media (min-width: 1092px) {
        .box-b {
          flex: 3 0 0%;
         width: 90%;
         ackground: red;
         
          
        }
  }
  
  
  
  .md-middle {
        max-width: 90%;
        height: auto;
        adding: 10px;
        margin: auto !important;
        transition: 500ms;
       
        
  } 
      
  .img-box {
        margin: auto !important;
        transition: 2s;
        max-height: 7rem;
        osition: absolute;
        
  
        
        
        
      } 
  
  .dot {
        height: 20px;
        width: 50%;
        op: 9rem;
        eft: 8vw;
        border-radius: 1rem;
        background: #111;
        font-size: 13px;
        color: #aaa;
        cursor: pointer;
        max-width: 100%;
        min-width: 110px;
        osition: absolute;
        nimation: pulse 3s infinite;
        z-index: 1;
        border: 1px #000 solid;
        transition: 500ms;
        display: inline-block;
        margin: 1rem 25%;
  
  
  }
  
  
  
  
  
  .dot:hover {
        
        border: solid 3px #333;
        order-radius: 50%;
        background: rgb(99, 99, 99);
        font-size: 0;
        animation: pulse 1s infinite;
        
  }
  
  .textContainer {
        background: rgb(82, 132, 179);
        margin: 5rem;
       
       
  }
  
  .comText {
        position: relative;
        top: 15px;
        display: block;
        
  
  }
  
  .mau-m-3 {
        margin: 0.5rem;
  }
  
  @keyframes pulse{
  
  
        from {
              border: solid 9px rgb(240, 128, 128);
        }
        to {
           
              border: solid 1px rgba(240, 128, 128,0.5);
        }
  
  }
    
  
  .md-close {
        font-size: 2rem;
        width: 50px;
        cursor: pointer;
        z-index: 5000;
        transform: scale(1.25);
        background: lightcoral;
       
        float: right;
        margin: 0px -30px 5px 0px;
        position: relative;
  }
  
  
  
  #message1 {
        
        display:none;
  }
  
  #message2 {
        
        display: none;
  }
  
  #message3 {
        
              display: none;
        
  }
  
  
  
  .smallThnlRow {
        min-height: 20vh;
  }
  
  title {
        background: red;
  }
  

/**
 * Global variables.
 */
var autoAdjusted = false;
/**
 * Customizes jQuery functions.
 */



($ => {
    /**
     * Sets up a Flex Gallery.
     * @param {Object} options - the custom arguments
     * @return {jQuery}
     */
    $.fn.flexGallery = function(options) {
        /**
         * Default options for the flex gallery.
         */
        let settings = $.extend({
            margin: '3.5vmin',
            minHeightRatioWindow: null,
            minHeightRatioScreen: null,
            fadeInDuration: 1000,
            checkPeriod: 100, 
            autoAdjust: true
        }, options);
        /**
         * Calculates the minimum height of each row.
         *
         * If no ratios are defined, it takes 0.25 window height in default.
         * If both ratios are defined, the smaller computed height will be applied.
         */
        if(!settings.minHeightRatioWindow && !settings.minHeightRatioScreen)
            settings.minHeightRatioWindow = 0.25;
        let minHeightWindow = minHeightScreen = Number.MAX_SAFE_INTEGER;
        if(settings.minHeightRatioWindow)
            minHeightWindow = window.innerHeight * settings.minHeightRatioWindow;
        if(settings.minHeightRatioScreen)
            minHeightScreen = screen.height * settings.minHeightRatioScreen;
        let minHeight = Math.min(minHeightWindow, minHeightScreen);
        /**
         * Listen on window size change.
         */
        if(!autoAdjusted && settings.autoAdjust) {
            $(window).on('resize', () => {
                if(settings.minHeightRatioWindow)
                    minHeightWindow = window.innerHeight * settings.minHeightRatioWindow;
                minHeight = Math.min(minHeightWindow, minHeightScreen);
                $('.flex-gallery-a').each((index, element) => {
                    let img = $(element).children()[0];
                    $(element).css('width', minHeight * img.naturalWidth / img.naturalHeight);
                });
            });
            autoAdjusted = true;
        }


        
        /**
         * Make all elements flex.
         */
        return this.find("*").addBack().filter(".fg-container").each((index, fgContainer) => {
            $(fgContainer).css('margin', settings.margin);
            $(fgContainer).find(".fg-item")
                .css('margin', settings.margin)
                .each((index, fgItem) => {
                   /**
                    * Checks sizes of every images being loading
                    * so that we are able to set up the sizes of <a>s in advance.
                    * Otherwise, the screen will flickers due to the images loaded early or late.
                    *
                    * However, naturalWidth and naturalHeight do not work in IE8 or below
                    */
                    $(fgItem).find(".fg-img")
                        .css("display", "none")
                        .on('load', (e) => {
                            /**
                             * Make each image invisible first and then fade in an image
                             * when it is loaded completely.
                             */
                            $(e.target).fadeIn(
                                settings.fadeInDuration,
                                /**
                                 * After an image is loaded, the initial animation and
                                 * event listeners are then applied to itself.
                                 */
                                () => $(fgItem).each(
                                    () => hideText(fgItem)
                                ).hover(
                                    () => showText(fgItem), () => hideText(fgItem)
                                )
                            );
                        })
                        .each((index, fgImg) => {
                            let poll = setInterval(() => {
                                let img = $(fgImg).get(0);
                                if (img.naturalWidth) {
                                    clearInterval(poll);
                                    $(fgItem).css({
                                        'width': minHeight * img.naturalWidth / img.naturalHeight,
                                        'flex-grow': img.naturalWidth / img.naturalHeight
                                    });
                                }
                            }, settings.checkPeriod);
                            $(fgImg).attr("src", $(fgImg).attr("fg-img-src"));
                        });
                    /**
                     * Hide the descriptions initially.
                     */
                    $(fgItem).find(".fg-text")
                        .css('opacity', 0);
                });
        });
    };
    /**
     * Sets up the needed methods for an flex-gallery-img.
     * @param {Object} media - an object of images and links
     * @param {Boolean} shuffling - whether to shuffle the image list or not
     * @return {jQuery}
     *
     * In `media`, `images` is required while `links` not. They are both Arrays.
     * The hyperlink will be set as the image url if `links` is not given.
     */
    $.fn.addFlexImages = function(media, shuffling=false) {
        if(!media.images)
            throw "Error: images not found.";
        if(media.links && media.images.length != media.links.length)
            throw "Error: # of images and # of links are not the same.";
        /**
         * Clone the image array.
         */
        let images = links = media.images.slice(), texts;
        if(media.links)
            links = media.links.slice();
        if(media.texts)
            texts = media.texts.slice();
        else
            texts = Array(images.length).fill("");
        /**
         * Add images to the page.
         */
        return this.each(() => {
            let indices;
            if(shuffling) {
                /**
                 * Get a randomly permutated indices.
                 */
                indices = randPerm(media.images.length);
            } else {
                /**
                 * Get ordered indices.
                 */
                indices = orderedPerm(media.images.length);
            }
            /**
             * Puts images into the #container.
             */
            indices.forEach((index) => {
                /**
                 * Creates and inserts <a> with <img> in the container.
                 */
                $("#container").addClass("fg-container").append(
                    $("<div>").addClass("fg-item").append(
                        $("<a>").attr("href", links[index]).append(
                            $("<img>").addClass("fg-img")
                                      .attr("fg-img-src", images[index])  //** this image is a thumbnail
                        )
                    ).append(
                        $("<span>").addClass("fg-text")
                                   .text(texts[index])
                    )
                );
            });
            
        });
    };
}) (jQuery);

/**
 * Swaps elements in an array randomly.
 * The contents are reordered in place.
 * @param {Array} array - the array to be shuffled
 * @return {None}
 */
function shuffle(array) {
    for(let i in array) {
        let j = Math.floor(Math.random() * array.length);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Generate a list of [0, 1, ..., length-1]
 * @param {Number} length - the number of indices
 * @return {Array} an ordered index array
 */
function orderedPerm(length) {
    // let array = Array.from({length: length}, (v, k) => k);
    let array = [...Array(length).keys()];
    return array
}

/**
 * Randomly permutate a list of indices.
 * @param {Number} length - the number of indices
 * @return {Array} an randomly permutated array
 */
function randPerm(length) {
    let array = orderedPerm(length);
    shuffle(array)
    return array
}

/**
 * Show the text in the flex image.
 * @param {Object} elem - an flex image element
 */
function showText(fgItem) {
    /**
     * Make the div behind the image black.
     */
    $(fgItem).each((index, element) => {
        dynamics.css(element, {
            background: ''
        });
    });
    /**
     * Darken the image.
     */
    $(fgItem).find('.fg-img').each((index, element) => {
        dynamics.animate(element, {
            opacity: 1
        }, {
            type: dynamics.easeOut,
            friction: 140,
            duration: 400
        });
    })
    /**
     * Bring the text out.
     */
    $(fgItem).find('.fg-text').each((index, element) => {
        dynamics.animate(element, {
            opacity: 1,
            scale: 1
        }, {
            type: dynamics.spring,
            frequency: 200,
            friction: 380,
            duration: 800
        });
    });
}

/**
 * Hide the text in the flex image.
 * @param {Object} elem - an flex image element
 */
function hideText(fgItem) {
    /**
     * Bounce back the image.
     */
    $(fgItem).find('.fg-img').each((index, element) => {
        dynamics.animate(element, {
            opacity: 1
        }, {
            type: dynamics.easeOut,
            friction: 140,
            duration: 400,
            /**
             * Make the background white after the image is not transparent.
             */
            complete: function() {
                $(fgItem).each((index, element) => {
                    dynamics.css(element, {
                        background: ''
                    });
                });
            }
        });
    })
    /**
     * Conceal the text.
     */
    $(fgItem).find('.fg-text').each((index, element) => {
        dynamics.animate(element, {
            opacity: 0,
            scale: 0.1
        }, {
            type: dynamics.spring,
            frequency: 200,
            friction: 380,
            duration: 800
        });
    });
}

/**
 *
 */
function parseUnit(unit, parentValue) {
    // 16px == 12pt == 1em == 1rem (== 100%)
    unit = unit.trim();
    let multiplier = 1;
    if(isNumber(unit)) {
        multiplier = parentValue;
    } else if(unit.endsWith('px')) {
        multiplier = 1;
        unit = unit.replace('px', '');
    } else if(unit.endsWith('pt')) {
        multiplier = 4.0 / 3.0;
        unit = unit.replace('pt', '');
    } else if(unit.endsWith('em')) {
        multiplier = 16;
        unit = unit.replace('em', '');
    } else if(unit.endsWith('rem')) {
        multiplier = 16;
        unit = unit.replace('rem', '');
    } else if(unit.endsWith('%', '')) {
        multiplier = parentValue / 100.0;
        unit = unit.replace('%', '')
    }
    return Number(unit) * multiplier;
}

/**
 * Adds a click function on document for debugging.
 */
$(document).on('click', (e) => {
    // $("img").css({'--natural-size-ratio': '100px'});
    // $(':root').css('--img-min-height', '100px');
});

/**
 * Sigmoid function.
 * @param {Number} t
 * @return {Number} sigmoid of t
 */
// function sigmoid(t) {
//     return 1 / (1 + Math.pow(Math.E, -t));
// }
