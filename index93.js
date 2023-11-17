function pairOfShoes(shoes) {
    const sizes = new Map();

    for (const [type, size] of shoes) {
        const pairType = type === 0 ? 1 : 0;
        const pairKey = `${pairType}-${size}`;

        if (sizes.has(pairKey)) {
            sizes.set(pairKey, sizes.get(pairKey) - 1);
            if (sizes.get(pairKey) === 0) {
                sizes.delete(pairKey);
            }
        } else {
            const shoeKey = `${type}-${size}`;
            sizes.set(shoeKey, (sizes.get(shoeKey) || 0) + 1);
        }
    }

    return sizes.size === 0;
}