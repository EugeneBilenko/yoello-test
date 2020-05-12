import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import classNames from "classnames";

import ProductItem from "./ProductItem";

import { removeItemFromCart, selectProducts, selectTotal } from "../../store/cart";
import Icons from '../../assets/icons';

import "./styles.scss";
import { updateQuantity } from '../../store/cart/thunks';

const ShoppingCart = ({ products, total, removeItemFromCart, updateQuantity }) => {
	const [open, setOpen] = useState(false);
	const [tips, setTips] = useState(0);

	const isNotEmpty = products.length > 0;
	const grantTotal = total + tips;

	const handleOpen = useCallback(() => {
		if (isNotEmpty) {
			setOpen(true);
		}
	}, [isNotEmpty, setOpen]);

	const handleClose = useCallback(() => {
	  setOpen(false)
  }, [setOpen])

	return (
		<section
			className={classNames("ShoppingCart", {
				"ShoppingCart__open": open,
				"ShoppingCart__full": isNotEmpty,
			})}
		>
			<div className={classNames("ShoppingCart__overlay", {
        "show": open
      })} onClick={handleClose} />
			<div
				className="ShoppingCart__content"
				onClick={handleOpen}
			>
				<div className="ShoppingCart__line" />
				<div className="ShoppingCart__header">
          <span className="ShoppingCart__header__icon">
            {Icons.CART_BASKET_ICON}
          </span>
					<span className="ShoppingCart__header__title">
            Shopping Cart
          </span>
				</div>
				<div className="ShoppingCart__products">
					{products && products.map(product => (
						<ProductItem
							key={product.id}
							onUpdateQuantity={updateQuantity}
							id={product.id}
							product={product}
							onRemoveItemFromCart={removeItemFromCart}
						/>
					))}
				</div>
				<div className="ShoppingCart__tips">
					<div className="ShoppingCart__tips__title">
						Tips for waiters
					</div>
				</div>
				<div className="ShoppingCart__total">
					<div className="ShoppingCart__total__subtotal">
            <span className="ShoppingCart__total__subtotal__title">
              Subtotal
            </span>
						<span className="ShoppingCart__total__subtotal__value">
              £{total}
            </span>
					</div>
					<div className="ShoppingCart__total__tips">
            <span className="ShoppingCart__total__tips__title">
              Tips
            </span>
						<span className="ShoppingCart__total__tips__value">
              £{tips}
            </span>
					</div>
					<div className="ShoppingCart__total__grand-total">
            <span className="ShoppingCart__total__grand-total__title">
              Total
            </span>
						<span className="ShoppingCart__total__grand-total__value">
              £{grantTotal}
            </span>
					</div>
				</div>
				<button className="ShoppingCart__confirm-button" />
			</div>
		</section>
	);
};

const mapStateToProps = state => ({
	products: selectProducts(state),
	total: selectTotal(state),
});

const mapDispatchToProps = ({
	removeItemFromCart: removeItemFromCart,
	updateQuantity: updateQuantity
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
