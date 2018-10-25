export default (props) => {
	const imgProps = props;

	const src = imgProps.src ? imgProps.src : '';
	const width = imgProps.width ? imgProps.width + 'px' : '';
	const classes = imgProps.class ? imgProps.class : '';
	const title = imgProps.title ? imgProps.title : '';
	const alt = imgProps.alt ? imgProps.alt : '';
	const caption = imgProps.caption ? imgProps.caption : '';

	let maxWidth = "";
	if(imgProps.width && imgProps.width != ""){
		maxWidth = imgProps.width + 'px';
	}

	let imageElement = <img style={{maxWidth:maxWidth}} src={src} alt={alt} className={ classes + " img-nocaption img-responsive"} title={title} />;
	
	let returnImage = imageElement;
	if(caption != ""){
		returnImage = <div style={{maxWidth: maxWidth}} 
							className={ classes + " img-caption-wrapper"}>
							<img style={{maxWidth:maxWidth}} src={src} alt={alt} className={ "img-responsive"} title={title} />
							<div className="img-caption"><div dangerouslySetInnerHTML={{__html: caption }} /></div>
							<style global jsx>{`
								.img-caption {
									font-size: 12px;
									background: #fcfcfc;
									padding: 5px 10px;
									line-height: 20px;
									margin-top: -30px;
								}
								.slick-slider {
									overflow: hidden;
								}
								.slick-dotted.slick-slider {
									margin: 0px !important;
									padding-bottom: 30px;
								}
								.slick-dots {
									bottom: 0px !important;
								}
								.post-content > .img-caption-wrapper {
									margin-bottom: 15px;
								} 
								.post-content > .img-caption-wrapper::after {
									clear: both;
									content: "";
									width: 100%;
									margin: 0px 0px 0px;
									display: block;
									padding-bottom: 20px;
								}
								.img-caption-wrapper.pull-left, .img-caption-wrapper.pull-right {
									width: 50%;
								}
								.img-caption-wrapper img {
									float: none !important;
									max-width: 100% !important;
									margin-bottom: 30px !important;
								}
								.img-caption-wrapper.pull-left {
									padding-right: 20px;
								}
								.img-caption-wrapper.pull-right {
									padding-left: 20px;
								}
								@media (max-width: 520px) {
									.post-content > .img-caption-wrapper {
										display: block !important;
										float: none !important;
										width: 100% !important;
									}
									.img-caption-wrapper.pull-left, .img-caption-wrapper.pull-left img, .img-caption-wrapper.pull-right, .img-caption-wrapper.pull-right img {
										width: 100%;
										max-width: 100% !important;
										float: none;
										padding: 0px;
									}
									.post-content > .img-caption-wrapper::after {
										padding-bottom: 0px;	
									}
									.owl-carousel .img-nocaption {
										margin-left: 0 !important; 
										margin-right: 0 !important;
									}
								}
								@media (min-width: 520px) {
									.owl-small {
										max-width: 550px;
										margin: 0 auto;
									}
								}
						    `}</style>
						</div>
	}

	return returnImage
}