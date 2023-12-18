import productsDb from "../database/products.json" assert { type: "json" };

export const setProducts = ()=> {
    const products = JSON.parse(localStorage.getItem("products")) || null
    if (!products || products?.length == 0) {
        localStorage.setItem("products", JSON.stringify(productsDb))
    }
}