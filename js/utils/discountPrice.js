/**
 * 
 * @param {number} price Precio del producto
 * @param {number} discountPercentage Porcentaje de descuento
 * @returns Devuelve el precio final del producto teniendo en cuenta su descuento. 
 */

export const discountPrice = (price, discountPercentage) => {
    const precioFinal = price - (price * discountPercentage) / 100;

    return precioFinal;
};
