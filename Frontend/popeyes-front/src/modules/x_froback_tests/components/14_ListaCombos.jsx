export default function ListaCombos({ combos }) {
    return (
        <ul>
            {combos.map((combo, index) => (
                <li key={index}>
                    <h3>{`COMBO con index: ${index}`} </h3>
                    <p>{`• nombre: ${combo.nombre}`}</p>
                    <p>{`• img: ${combo.img}`}</p>
                    <p>{`• descripcion: ${combo.descripcion}`}</p>
                    <p>{`• precio: ${combo.precio}`}</p>
                    <p>{`• masvendido: ${combo.masvendido}`}</p>
                </li>
            ))}
        </ul>
    );
};

