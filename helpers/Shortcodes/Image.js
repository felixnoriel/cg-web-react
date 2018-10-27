export default (props) => {
	
		return (<div className="img-shortcode">
					your stuff here
					<img src={props.src} title={props.title} alt={props.alt}/>
					<style global jsx>{`
						.img-shortcode .img{
							width: 100%;
						}
				    `}</style>
				</div>
		)
}