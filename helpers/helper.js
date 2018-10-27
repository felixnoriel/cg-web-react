import ShortcodeParser from 'meta-shortcodes';
import ReactDOMServer from 'react-dom/server'

// Import shortcodes
import Image from './Shortcodes/Image';

// This should be the only wordpress post object to be used in the entire application - standardised object
// add new functions if needed
export function modifyWordpressObject(post){
  if(!post || !post.content){ return false; }
  const modified = Object.assign({}, post);

  const mediaObj = structureFeaturedMedia(post);
  modified.custom_modified = {
    // add custom modifications in this object
    content: extractShortcode(post.content.rendered),
    tags: structurePostTags(post),
    media: mediaObj,
    imgSrcSet: getImageSrcSet(mediaObj),
    featuredImgSrc: getImageUrl(mediaObj, 'medium_large'), // 'medium_large' is for the size of image to be returned
    plainHrefLink: getReplacedDevLink(modified.link), // change later on
  }

  return modified;
}

export function modifyArchiveByViewSubType(viewSubType = "items", archive){
  if(!archive){ return; }

  if(viewSubType === "items"){
    // this returns posts/items of that category
    // This modification is for ITEMS archive. eg: menu, events -> returns items instead of category
    return modifyArchiveOfWordpressObject(archive);
  
  }else{ //assuming viewSubType is category

    // This modification is for Category archive. eg: menu, events -> returns categories instead of items
    return modifyCategoryArchiveOfWordpressObject(archive);
  }
}

function modifyArchiveOfWordpressObject(archive){
  const modifiedArchive = [];  
  for( const i in archive ){
    modifiedArchive[i] = modifyWordpressObject(archive[i]);
  }
  return modifiedArchive;
}

function modifyCategoryArchiveOfWordpressObject(archive){
  const modifiedArchive = [];  
  for( const i in archive ){
    modifiedArchive[i] = modifyCategoryWordpressObject(archive[i]);
  }
  return modifiedArchive;
}

function modifyCategoryWordpressObject(category){
  if(!category){ return false; }

  const modified = Object.assign({}, category);
  modified.custom_modified = {
    // add custom modifications in this object
    plainHrefLink: getReplacedDevLink(modified.link)
  }

  return modified;
}

function replaceSpecialChar(text){
  if(!text || text == ""){
		return '';
	}
  return text.replace(/\&#8221;/g, '"') //replace special character "
             .replace(/\&#8243;/g, '"')
             .replace(/\&#8217;/g, "'")
             .replace(/\&#8220;/g, '"');
}

function extractShortcode(text){
    if(!text || text === ""){
      return '';
    }

    text = replaceSpecialChar(text); //remove unnecessary special characters
    var parser = ShortcodeParser();
    parser.add("img", function(opts, content){ // this looks like [img]
        return ReactDOMServer.renderToString( <Image content={content} {...opts}/> );
    });

    // this looks like [your_short_code]
    // opts = attributes eg: [your_short_code title="first shortcode"]
    // content = content inside shortcode eg: [your_short_code] content here [/your_short_code]
    parser.add("your_short_code", function(opts, content){
        // create a function inside /Shortcodes for the layout then return it here
        // ReactDOMServer.renderToString is for rendering it to raw HTML
        // return ReactDOMServer.renderToString( <Image content={content} {...opts}/> );
        return '';
    });

    var output = parser.parse(text);
    return output;
}

function structureFeaturedMedia(post){

	let media = {};

	if( post && post._embedded
		&& post._embedded['wp:featuredmedia']
		&& post._embedded['wp:featuredmedia'][0]){

		const featuredMedia = post._embedded['wp:featuredmedia'][0];

		media = featuredMedia;
		media.width = featuredMedia.width;
		media.height = featuredMedia.height;

		if(media.media_details && media.media_details.sizes){
			const mediaDetails = media.media_details;

			media.small = mediaDetails.sizes.small;
			media.medium = mediaDetails.sizes.medium;
			media.mediumwide = mediaDetails.sizes.mediumwide;
			media.medium_large = mediaDetails.sizes.medium_large;
			media['post-thumbnail'] = mediaDetails.sizes['post-thumbnail'];
			media.xlarge = mediaDetails.sizes.xlarge;
			media.wide = mediaDetails.sizes.wide;
			media.thumbnail = mediaDetails.sizes.thumbnail;
			media.large = mediaDetails.sizes.large;
			media.full = mediaDetails.sizes.full;
		}
	}
	return media;
}
function structurePostTags(post){
	let termList = [];

	if( post && post._embedded
		&& post._embedded['wp:term']
		&& post._embedded['wp:term']){

		const taxonomies = post._embedded['wp:term'];
		if(taxonomies.length > 0){
			taxonomies.map( tax => {
				if(tax.length > 0){
					tax.map( term => {
						if(term.taxonomy != "post_tag"){
							let tempTerm  = {};
							tempTerm.id = term.id;
							tempTerm.name = term.name;
							tempTerm.slug = term.slug;
							tempTerm.link = getReplacedUrlLink(term.link);

							termList.push(tempTerm);
						}
					})
				}
			});
		}
	}
	return termList;
}

function getImageUrl(media, type){
	//Default - post-thumbnail
	let img = {};
	img.source_url = "";

	  if(type && type != ""){
      if(type == "thumbnail"){
        img = media.thumbnail;
      }
      if(type == "small"){
        img = media.small;
      }
      if(type == "medium"){
        img = media.medium;
      }
      if(type == "mediumwide"){
        img = media.mediumwide;
      }
      if(type == "medium_large"){
        img = media.medium_large;
      }
      if(type == "large"){
        img = media.large;
      }
      if(type == "full"){
        img = media.full;
      }
      if(type == "wide"){
        img = media.wide;
      }
      if(type == "xlarge"){
        img = media.xlarge;
      }
    }
	  if(img && img.source_url == ""){
      img = media['post-thumbnail'];
    }
    if(img && img.source_url == ""){
      img = media.thumbnail;
    }
    if(img && img.source_url == ""){
      img = media.small;
    }
    if(img && img.source_url == ""){
      img = media.medium;
    }
    if(img && img.source_url == ""){
      img = media.mediumwide;
    }
    if(img && img.source_url == ""){
      img = media.medium_large;
    }
    if(img && img.source_url == ""){
      img = media.large;
    }
    if(img && img.source_url == ""){
      img = media.full;
    }
    if((img && img.source_url == "") || !img){
      img = {};
      img.source_url = media ? media.source_url : "add your default image src here if everything else is null";
    }
    return img;

}

function getImageSrcSet(media){
    let img = "";

    /*
    set_post_thumbnail_size( 75, 75, true ); // Normal post thumbnails
    add_image_size( 'small', 150, 0, true ); // Permalink thumbnail size
    add_image_size( 'medium', 400, 246, true );
    add_image_size( 'large', 640, 0, true );
    add_image_size( 'largewide', 640, 300, true );
    add_image_size( 'xlarge', 800, 0, true );
    add_image_size( 'wide', 657, 404, true );
    add_image_size( 'featured', 1900, 0 );

    //https://www.monpurse.com/wp-content/uploads/2017/11/homepage_desktop_dyo-min-450x450.jpg 450w https://www.monpurse.com/wp-content/uploads/2017/11/homepage_desktop_dyo-min-800x312.jpg 800w https://www.monpurse.com/wp-content/uploads/2017/11/homepage_desktop_dyo-min-1200x467.jpg 840w  1926w
    */
    if(media.thumbnail && media.thumbnail.source_url){
        img += media.thumbnail.source_url + " 75w, ";
    }
    if(media.small && media.small.source_url){
        img += media.small.source_url + " 150w, ";
    }
    if(media.medium && media.medium.source_url){
        img += media.medium.source_url + " 440w, ";
    }
    if(media.mediumwide && media.mediumwide.source_url){
        img += media.mediumwide.source_url + " 440w, ";
    }
    if(media.large && media.large.source_url){
        img += media.large.source_url + " 640w, ";
    }
    if(media.largewide && media.largewide.source_url){
        img += media.largewide.source_url + " 640w, ";
    }
    if(media.xlarge && media.xlarge.source_url){
        img += media.xlarge.source_url + " 800w";
    }
    if(media.featured && media.featured.source_url){
        img += ", " + media.featured.source_url + " 800w ";
    }
    if(media.full && media.full.source_url){
        img += ", " + media.full.source_url + " 1200w ";
    }

    return img;
}

function getReplacedDevLink(url){
  if(!url || url === ""){
    return "";
  }
  return url.replace("http://13.239.94.225", "").replace("13.239.94.225", "");
}

// Implement when you need to change the URLS based on the enviroment eg(.net for staging, .com for prod)
function getReplacedUrlLink(url){
	 /*if(!url || url == ""){
		return url;
	 }
    let replaceTo = "http://localhost:3000/";
    let replaceFrom = "https://www.website.net/";

    if(publicRuntimeConfig && publicRuntimeConfig.node_env === "production"){
        replaceTo = "https://www.website.com/";
        let replaceFrom = "https://www.website.net/";
        return regexUrl(url);
    }
    if(publicRuntimeConfig && publicRuntimeConfig.node_env === "development"){
        url = regexUrl(url.replace('https://www.website.com/', replaceTo));
    }
    url = regexUrl(url.replace('https://cms.website.net/', replaceTo));
    return regexUrl(url.replace(replaceFrom, replaceTo));*/
    return url;
}

function regexUrl(url){
  if(!url || url == ""){
      return "";
  }
  return url.replace(new RegExp("(.*/)[^/]+$"),"$1");
}