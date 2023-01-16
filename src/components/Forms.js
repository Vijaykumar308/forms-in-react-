import React, { useState } from "react";

function Forms() {
    const [formData, setFormData] = useState(
            {
                firstname:"",
                lastname:"",
                email:"",
                city:"",
                gender:"",
                isFriend: false,
                message:""
            }
        );
        function changeHandler(event){
            const {name, value, type, checked} = event.target;
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name] : type === "checkbox" ? checked : value
                }
            });
        }

        function handlerSubmit(event){
            event.preventDefault();
            console.log(formData);
        }
    return <>
        <div className="container">
            <div className="wrapper">
                <h1> Forms in React</h1>
                <form onSubmit={handlerSubmit}>
                    <div className="grid-container">
                        <div className="grid-item">
                            <label className="label-text"> First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                value={formData.firstname}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="grid-item">
                            <label className="label-text"> Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                value={formData.lastname}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="grid-item">
                            <label className="label-text">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="grid-item">
                            <label className="label-text">City</label>
                            <select 
                                name="city"
                                value={formData.city}
                                onChange={changeHandler}
                            >
                                <option value="--select--">--Select--</option>
                                <option value="Amritsar">Amritsar</option>
                                <option value="Gorakpur">Gorakpur</option>
                                <option value="Kushinager">Kushinager</option>
                                <option value="Noida">Noida</option>
                                <option value="Delhi">Delhi</option>
                            </select>
                        </div>

                        <div className="grid-item">
                            <label className="label-text">Gender</label>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                                checked={formData.gender === "male"}
                                onChange={changeHandler}
                            />

                            <label htmlFor="male" className="gender-label">Male</label>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="female"
                                checked ={formData.gender === "female"}
                                onChange={changeHandler}
                            />
                            <label htmlFor="female" name="gender" className="gender-label">Female</label>
                        </div>

                        <div className="grid-item">
                            <label className="label-text" htmlFor="isFriend">Are you my friend</label>

                            <input
                                type="checkbox"
                                name="isFriend"
                                id="isFriend"
                                checked = {formData.isFriend} 
                                onChange={changeHandler}
                            />
                        </div>

                        <div className="grid-item ">
                            <label className="label-text">Message</label>
                            <textarea
                                name="message"
                                className="message"
                                value={formData.message}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="grid-item grid-item-btn">
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Forms;