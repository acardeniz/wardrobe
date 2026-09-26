export const SLOTS = [
    {id: 'headwear', label: 'Cap / Eyeglasses', placeholder: 'null'},
    {id: 'top', label: 'Top', placeholder: 'null'},
    {id: 'outerwear', label: 'Outer Wear', placeholder: 'null'},
    {id: 'bottom', label: 'Bottom Wear', placeholder: 'null'},
    {id: 'footwear', label: 'Shoes', placeholder: 'null'},
    {id: 'accessories', label: 'Accessories', placeholder: 'null'},
];

export const INITIAL_SLOTS_STATE = SLOTS.reduce((acc, slot) => {
    acc[slot.id] = null;
    return acc;
}, {});