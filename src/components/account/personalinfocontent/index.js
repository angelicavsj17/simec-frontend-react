import React from 'react'
import BackgroundImagesAccount from '../backgroundimagesaccount';
import profileImage from '../../../assets/profile_image.png'
import './styles.scss'
let PersonalInfoContent = ({ form, handleForm, selections, onFormSubmit }) => {
    return (
        <BackgroundImagesAccount>
            <div className="personal-info-container d-block color-black">
                <img src={profileImage} />
                <h2>DATOS PERSONALES</h2>
                <form onSubmit={(e) => { e.preventDefault(); onFormSubmit() }} className="form-profile">
                    <div className="form-group-profile form-group-text">
                        <label>Nombre:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.name} name="name" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>CI:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.user} name="user" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Correo electrónico:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.email} name="email" type="email" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Teléfono:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.phone} name="phone" type="number" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Dirección:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.address} name="address" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile justify-content-between">
                        <label>Tipo de sangre:</label>
                        <select onChange={handleForm} value={form.bloodType} name="bloodType" className="form-group-select">
                            {selections.bloodTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="form-group-profile justify-content-between">
                        <label>Nacionalidad:</label>
                        <select onChange={handleForm} value={form.citizen} name="citizen" className="form-group-select">
                            {selections.citizens.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>                    </div>
                    <div className="form-group-profile justify-content-between">
                        <label>Sexo:</label>
                        <select onChange={handleForm} value={form.gender} name="gender" className="form-group-select">
                            {selections.genders.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Lugar de nacimiento:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.placeOfBirth} name="placeOfBirth" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile justify-content-between">
                        <label>Lateralidad:</label>
                        <select onChange={handleForm} value={form.laterality} name="laterality" className="form-group-select">
                            {selections.lateralities.map((item) => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>
                    <br />
                    <h3>Contacto de emergencia</h3>
                    <br />
                    <br />
                    <div className="form-group-profile form-group-text">
                        <label>Nombre:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.contactName} name="contactName" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Apellidos:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.contactLastname} name="contactLastname" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Teléfono:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.contactPhone} name="contactPhone" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Ciudad:</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.contactCity} name="contactCity" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Parentesco</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.contactRelationship} name="contactRelationship" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <div className="form-group-profile form-group-text">
                        <label>Dirección</label>
                        <div className="form-group-text-wrapper">
                            <input onChange={handleForm} value={form.contactAddress} name="contactAddress" type="text" />
                            <i className="far fa-edit"></i>
                        </div>
                    </div>
                    <button type="submit">Actualizar datos</button>
                </form>
            </div>
        </BackgroundImagesAccount>
    )
}
export default PersonalInfoContent;