import React, { useState } from 'react';
import styles from '../css/SuperheroRegistrationForm.module.css'; // Import the CSS module


const SuperheroRegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const [errors, setErrors] = useState({});
    const [superheroes, setSuperheroes] = useState([]);
    const [header, setHeader] = useState('Registro de Superhéroes');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const validate = () => {
        const newErrors = {};
        if (!formData.firstName) {
            newErrors.firstName = 'El nombre es obligatorio.';
        } else if (formData.firstName.length < 4) {
            newErrors.firstName = 'El nombre debe tener al menos 4 caracteres.';
        }
        if (!formData.lastName) {
            newErrors.lastName = 'El apellido es obligatorio.';
        } else if (formData.lastName.length < 4) {
            newErrors.lastName = 'El apellido debe tener al menos 4 caracteres.';
        }
        if (!formData.email) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (formData.email.length < 10) {
            newErrors.email = 'El correo electrónico debe tener al menos 10 caracteres.';
        }
        if (!formData.password) {
            newErrors.password = 'La contraseña es obligatoria.';
        } else if (formData.password.length < 12) {
            newErrors.password = 'La contraseña debe tener al menos 12 caracteres.';
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Confirmar la contraseña es obligatorio.';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Las contraseñas deben coincidir.';
        }
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            const newSuperhero = { ...formData };
            setSuperheroes([...superheroes, newSuperhero]);
            setHeader(`¡Bienvenid@ ${formData.firstName}!`);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }
    };


    return (
        <div className={styles.superheroContainer}>
            <h2>{header}</h2>
            <form onSubmit={handleSubmit} className={styles.superheroForm}>
                <div className={styles.formGroup}>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? styles.errorInput : ''}
                    />
                    {errors.firstName && <div className={styles.errorText}>{errors.firstName}</div>}
                </div>
                <div className={styles.formGroup}>
                    <label>Apellido:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? styles.errorInput : ''}
                    />
                    {errors.lastName && <div className={styles.errorText}>{errors.lastName}</div>}
                </div>
                <div className={styles.formGroup}>
                    <label>Correo Electrónico:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? styles.errorInput : ''}
                    />
                    {errors.email && <div className={styles.errorText}>{errors.email}</div>}
                </div>
                <div className={styles.formGroup}>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? styles.errorInput : ''}
                    />
                    {errors.password && <div className={styles.errorText}>{errors.password}</div>}
                </div>
                <div className={styles.formGroup}>
                    <label>Confirmar Contraseña:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={errors.confirmPassword ? styles.errorInput : ''}
                    />
                    {errors.confirmPassword && <div className={styles.errorText}>{errors.confirmPassword}</div>}
                </div>
                <button type="submit" className={styles.submitButton}>Crear Superhéroe</button>
            </form>
            <img src="../src/img/SuperHeroe.png" alt="Superhero Registration" className={styles.superheroImage} />


            <div className={styles.superheroList}>
                {superheroes.length > 0 && <h3>Superhéroes Registrados:</h3>}
                {superheroes.map((hero, index) => (
                    <div key={index} className={styles.superheroItem}>
                        <p><strong>Nombre:</strong> {hero.firstName} {hero.lastName}</p>
                        <p><strong>Correo Electrónico:</strong> {hero.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SuperheroRegistrationForm;
