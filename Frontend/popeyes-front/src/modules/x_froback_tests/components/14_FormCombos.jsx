import { useState } from 'react';

export default function FormCombos({ agregarCombo }) {
    const [nombre, setNombre] = useState('');
    const [img, setImg] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState(0);
    const [masvendido, setMasvendido] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const local = { nombre, img, descripcion, precio, masvendido };

        agregarCombo(local);

        // Limpiar el formulario
        setNombre('');
        setImg('');
        setDescripcion('');
        setPrecio(0);
        setMasvendido(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input
                type="text"
                placeholder="Img"
                value={img}
                onChange={(e) => setImg(e.target.value)}
            />
            <input
                type="text"
                placeholder="Descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
            />
            <input
                type="checkbox"
                checked={masvendido}
                onChange={(e) => setMasvendido(e.target.checked)}
            />
            <label>Masvendido</label>
            <button type="submit">
                {'Crear Combo'}
            </button>
        </form>
    );
};
