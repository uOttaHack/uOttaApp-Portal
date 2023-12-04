// FormComponent.client.jsx
'use client';
import React, { useState } from 'react';

// Define your form fields in an array
const formFields = [
    { name: 'firstName', type: 'text', placeholder: 'First Name', required: true },
    { name: 'lastName', type: 'text', placeholder: 'Last Name', required: true },
    { name: 'location', type: 'text', placeholder: 'Where will you be travelling from?', required: true },
    { name: 'school', type: 'text', placeholder: 'School', required: true },
    { name: 'degree', type: 'text', placeholder: 'What degree are you pursuing?', required: true },
    { name: 'studyField', type: 'text', placeholder: 'What are you studying?', required: true },
    { name: 'graduationYear', type: 'number', placeholder: 'Graduation Year', required: true },
    { name: 'graduationMonth', type: 'text', placeholder: 'Graduation Month', required: true },
    { name: 'positionType', type: 'text', placeholder: 'Our wonderful sponsors want to hire you. Are you looking for an internship or full-time position?', required: true },
    { name: 'identity', type: 'text', placeholder: 'What do you identify as?', required: false },
    { name: 'race', type: 'text', placeholder: 'Please identify your race', required: false },
    { name: 'selfDescription', type: 'text', placeholder: 'I would describe myself as...', required: false },
    { name: 'github', type: 'url', placeholder: 'GitHub Profile URL', required: false },
    { name: 'linkedin', type: 'url', placeholder: 'LinkedIn Profile URL', required: false },
    { name: 'hackathons', type: 'number', placeholder: 'How many hackathons have you been to?', required: false },
];

const ApplicationForm = ({ userEmail }) => {
    // Create a state object for form data
    const [formData, setFormData] = useState({
        email: userEmail || '',
    });

    const [isMLHCodeOfConductChecked, setIsMLHCodeOfConductChecked] = useState(false);
    const [isShareInfoChecked, setIsShareInfoChecked] = useState(false);
    const [isEighteenByDate, setIsEighteenByDate] = useState('Yes');


    // Handle form field changes
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: files ? files[0] : value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        // You would typically send the formData to a server here
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            setFormData(prevFormData => ({
                ...prevFormData,
                resume: files[0],
            }));
        }
    };

    const handleCheckboxChange = (e) => {
        // Toggle the state based on which checkbox was checked
        if (e.target.name === 'mlhCodeOfConduct') {
            setIsMLHCodeOfConductChecked(e.target.checked);
        } else if (e.target.name === 'shareInfo') {
            setIsShareInfoChecked(e.target.checked);
        }
    };

    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={userEmail || ''}
                    readOnly // This makes the input field read-only
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline" // Added bg-gray-100 to gray out the field
                // If you want to make it more grayed out, you can darken the background color
                />
            </div>

            {formFields.map((field) => (
                <div key={field.name} className="mb-4">
                    <label htmlFor={field.name} className="block text-gray-700 text-sm font-bold mb-2">
                        {field.placeholder} {field.required && '*'}
                    </label>
                    <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        onChange={handleChange}
                        value={formData[field.name] || ''}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            ))}

            <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">
                Resume
            </label>
            <div
                onDrop={handleFileDrop}
                onDragOver={(e) => e.preventDefault()} // This is necessary to allow the drop
                className="border-2 border-dashed border-gray-200 rounded p-4 text-center cursor-pointer"
            >
                <p>Drag and drop your resume here, or click to select files</p>
                <input
                    id="resume"
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    className="hidden"
                />
                {formData.resume && (
                    <div>
                        <p>File: {formData.resume.name}</p>
                    </div>
                )}
            </div>

            {/* Checkbox for MLH Code of Conduct */}
            <label className="mt-6 block text-gray-700 text-sm font-bold mb-2">
                <input
                    type="checkbox"
                    name="mlhCodeOfConduct"
                    checked={isMLHCodeOfConductChecked}
                    onChange={handleCheckboxChange}
                /> I have read and agree to the MLH Code of Conduct.
            </label>

            {/* Checkbox for sharing info with MLH */}
            <label className="mt-6 block text-gray-700 text-sm font-bold mb-2">
                <input
                    type="checkbox"
                    name="shareInfo"
                    checked={isShareInfoChecked}
                    onChange={handleCheckboxChange}
                /> I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the MLH Privacy Policy. I further agree to the terms of both the MLH Contest Terms and Conditions and the MLH Privacy Policy.
            </label>

            {/* Dropdown for age verification */}
            <label className="mt-6 block text-gray-700 text-sm font-bold mb-2">
                Will you be at least 18 years of age on March 1st, 2024?
            </label>
            <select
                name="ageVerification"
                value={isEighteenByDate}
                onChange={(e) => setIsEighteenByDate(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
            </select>


            <button type="submit" className="my-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Submit Application
            </button>


        </form>
    );
};

export default ApplicationForm;