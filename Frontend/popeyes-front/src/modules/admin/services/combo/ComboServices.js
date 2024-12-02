const API_URL = 'http://localhost:3002/combo';

export const obtenerCombos = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error("Error al obtener combos activos:", error);
    }
};

export const crearCombo = async (combo) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(combo),
        });
        return await response.json();
    } catch (error) {
        console.error("Error al crear combo:", error);
    }
};

export const actualizarCombo = async (id, data) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Error al actualizar combo:", error);
    }
};

export const desactivarCombo = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            return "Combo desactivado correctamente";
        } else {
            throw new Error("Error al desactivar combo");
        }
    } catch (error) {
        console.error("Error al desactivar combo:", error);
    }
};