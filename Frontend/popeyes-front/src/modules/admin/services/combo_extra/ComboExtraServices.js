const API_URL = 'http://localhost:3002/comboextra';

export const crearComboExtra = async (comboExtra) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comboExtra),
        });

        if (!response.ok) {
            throw new Error(`Error al crear la relación: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al crear la relación Combo_Extra:', error);
    }
};

export const actualizarComboExtra = async (id, comboExtra) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comboExtra),
        });

        if (!response.ok) {
            throw new Error(`Error al actualizar la relación: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al actualizar la relación Combo_Extra:', error);
    }
};

export const obtenerComboExtras = async () => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Error al obtener las relaciones: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al obtener las relaciones Combo_Extra:', error);
    }
};

export const desactivarComboExtra = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Error al desactivar la relación: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error al desactivar la relación Combo_Extra:', error);
    }
};