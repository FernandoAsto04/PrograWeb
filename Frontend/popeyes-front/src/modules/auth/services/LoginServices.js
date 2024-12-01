const API_URL = 'http://localhost:3002/login';

export const loginUsuario = async (credenciales) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credenciales),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error al iniciar sesión');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al iniciar sesión:', error.message);
        throw error;
    }
};