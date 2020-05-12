import React from "react";
import { Modal } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import "./styles.scss";

const useStyles = makeStyles(() => ({
	modal: {
		position: 'absolute',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

const ProductModal = ({
												container,
												product,
												onClose,
												onAddItemToCart,
											}) => {
	const classes = useStyles();

	const handleAddItemToCart = () => {
		onAddItemToCart({
			id: product.id,
			name: product.name,
			image: product.image_url,
			price: product.abv,
		});
		onClose();
	};

	return (
		<Modal
			className={classes.modal}
			container={container}
			open={!!product}
			onClose={onClose}
			closeAfterTransition
			BackdropProps={{
				className: "product-modal__overlay",
			}}
		>
			{product && (
				<div className="product-modal">
					<button className="product-modal__close-button" onClick={onClose}>
						Close
					</button>
					<div className="product-modal__content">
						<div className="product-modal__content__title">{product.name}</div>
						<div className="product-modal__content__info">
							<div className="product-modal__content__info__detail">
            <span className="product-modal__content__info__detail__tagline">
              {product.tagline}
            </span>
								<span className="product-modal__content__info__detail__tagline">
              {product.abv}
            </span>
								<span className="product-modal__content__info__detail__description">
              {product.description}
            </span>
								<span className="product-modal__content__info__detail__food-pairing">
              {product.food_pairing.join(", ")}
            </span>
							</div>
							<div className="product-modal__content__info__image">
								<img src={product.image_url} alt="Image" />
							</div>
						</div>
						<button
							className="product-modal__content__add-button"
							onClick={handleAddItemToCart}
						>
							Add to cart
						</button>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default ProductModal;
