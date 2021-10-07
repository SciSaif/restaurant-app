import React from "react";

const MenuCard = ({ menuData }) => {
	return (
		<>
			<section className="main-card--cointainer">
				{menuData.map((curElem) => {

                    const {id, name, category, image, description} = curElem; //destructuring

					return (
						<>
							<div className="card-container" key={id}>
								<div className="card">
									<div className="card-body">
										<span className="card-number card-circle subtle">{id}</span>
										<span className="card-author subtle">{category}</span>
										<span className="card-title">{name}</span><br/>
										<span className="card-description subtle">
                                            {description}
										</span>
										<div className="card-read">Read</div>
									</div>
									<img src={image} alt="images" className="card-media" />
								</div>
							</div>
						</>
					);
				})}
			</section>
		</>
	);
};

export default MenuCard;
