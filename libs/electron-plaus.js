function useState(initialValue) {
    let state = initialValue;

    const setState = (newValue) => {
        state = newValue;
    };

    return [() => state, setState]; // Retorna o getter e o setter
}