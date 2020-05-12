import React from "react";
import Icons from "../../assets/icons";

const ProductItem = ({ product, onRemoveItemFromCart, onUpdateQuantity }) => (
	<div className="ShoppingCart__product">
		<div className="ShoppingCart__product__image">
			<img src={product.image} alt="Image" />
			<div className="ShoppingCart__product__price">
				{product.price}
			</div>
		</div>
		<div className="ShoppingCart__product__info">
			<div className="ShoppingCart__product__info__title">
				{product.name}
			</div>
			<div className="ShoppingCart__product__info__subtitle">
				Additional info here
			</div>
		</div>
		<div className="ShoppingCart__product__quantity">
			<button className="ShoppingCart__product__quantity__button decrease" onClick={() => onUpdateQuantity(product.id, false)}>-</button>
			<span className="ShoppingCart__product__quantity__value">{product.quantity}</span>
			<button className="ShoppingCart__product__quantity__button increase" onClick={() => onUpdateQuantity(product.id, true)}>+</button>
		</div>
		<button className="ShoppingCart__product__trash-button" onClick={() => onRemoveItemFromCart(product.id)}>
			{Icons.TRASH_ICON}
		</button>
	</div>
);

export default ProductItem;
