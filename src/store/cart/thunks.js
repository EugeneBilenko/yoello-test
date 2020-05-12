import { updateCart } from "./actions";


const updateStorage = (data) => {
	sessionStorage.setItem('currentCart', JSON.stringify(data));
};

const calculateTotal = (products) => products.reduce((sum, item) => sum + item.summary, 0).toFixed(2);

const applyUpdates = (dispatch) => (updProducts) => {
	const total = updProducts.reduce((sum, item) => sum + item.summary, 0).toFixed(2);
	updateStorage({ products: updProducts, total });
	dispatch(updateCart(updProducts, total));
};

export const updateQuantity = (id, increase) => (dispatch, getState) => {
	const apply = applyUpdates(dispatch);
	const { products } = getState().cart;
	const updProducts = products.map((product) => {
		if (product.id === id) {
			return { ...product, quantity: increase ? product.quantity + 1 : product.quantity - 1 };
		}
		return product;
	});
	apply(updProducts);
};
export const addItemToCart = ({ id, name, image, price }) => (dispatch, getState) => {
	const apply = applyUpdates(dispatch);
	const { products } = getState().cart;
	const currentProduct = products.find(product => product.id === id);
	let newProduct = {};
	let updProducts = [];

	if (currentProduct) {
		newProduct = {
			...currentProduct,
			quantity: currentProduct.quantity + 1,
			summary: currentProduct.summary + price,
		};
		updProducts = [
			...products.filter(product => product.id !== id),
			newProduct,
		];
	} else {
		newProduct = {
			id: id,
			name: name,
			image: image,
			quantity: 1,
			price: price,
			summary: price,
		};
		updProducts = [
			...products,
			newProduct,
		];
	}
	apply(updProducts);
};

export const removeItemFromCart = id => (dispatch, getState) => {
	const apply = applyUpdates(dispatch);

	const { products } = getState().cart;
	const updProducts = products.filter(product => product.id !== id);
	apply(updProducts);
};
