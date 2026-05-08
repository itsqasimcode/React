import {useState} from 'react'
import  * as Yup from 'yup'

const FormikFormmanual = () => {

    const [formData, setFormData] = useState({

        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
        interests: [],
        birthDate: "",
        
    })

    const [errors , setErrors] = useState({})

    const validationSchema = Yup.object ({

      firstname: Yup.string().required("first name is required"),
      lastname: Yup.string().required("last name is required"),
      email: Yup.string().email("Invalid email format").required("Email is required"),
      phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone is required"),
      password: Yup.string().min(8, "Password must be atleast 8 characters").required("Password is required")
                .matches(/^(?=.*[A-Z])(?=.*\d).+$/, "Password must contain at least one uppercase letter and one number"),
      confirmPassword: Yup.string().oneOf([Yup.ref ("password")], "Password must match")
                .required("Confirm Password is required"),
      age: Yup.number().typeError("Age must be a number").min(18, "You must be atleast 18 years old")
                 .required   ("Age is required"),
      gender: Yup.string().required("Gender is required"),
      interests: Yup.array().min(1, "Select at least one interest").required("Interests are required"),
      birthDate: Yup.date().max(new Date(), "Birth date cannot be in the future")
                .required("Birth date is required"),






    })


    const handleChange = (e) => {

      const {name , value} = e.target ;

      setFormData ({
        ...formData,
        [name] : value,
      });

    };

    const handlecheckboxchange = (e) => {
      const {name , checked} = e.target ;

      let updatedInterests = [...formData.interests];

      if (checked) {

        updatedInterests.push (name);
        
      } else {
        updatedInterests = updatedInterests.filter((interests) => interests !== name);
        
      }
      setFormData({
        ...formData,
        interests: updatedInterests
      });

    }

        
     
  const HandleSubmit = async (e) => {
  e.preventDefault();

  try {
    await validationSchema.validate(formData, {abortEarly: false});
    console.log("Form submitted successfully", formData);
  } catch (error) {
  
    const newErrors = {};

    error.inner.forEach((error) => {
      newErrors[error.path] = error.message;
    });
     setErrors (newErrors)
  }

    
 
};

  return (

    <div className="p-6 gap-4">
  <h2 className="text-xl font-bold mb-4"> Manual Form Using Yup </h2>

  <form
    className="grid grid-cols-2 gap-6"
    onSubmit={HandleSubmit}
  >

    {/* First Name */}
    <div className="flex flex-col">
      <label className="mb-1 mr-10">First Name :</label>
      <input
  type="text"
  name="firstname"   // ✅ ADD THIS
  placeholder="firstname"
  value={formData.firstname}
  onChange={handleChange}
 
/>
  {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>}
    </div>

    {/* Last Name */}
    <div className="flex flex-col">
      <label className="mb-1">Last Name :</label>
      <input
        type="text"
        name="lastname"   // ✅ ADD THIS
        placeholder="lastname"
        value={formData.lastname}
        className="border p-2 rounded"
         onChange = {handleChange}
      />
      {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname}</span>}
    </div>

    {/* Email */}
    <div className="flex flex-col">
      <label className="mb-1">Email :</label>
      <input
        type="text"
        name="email"   // ✅ ADD THIS
        placeholder="email"
        value={formData.email}
        className="border p-2 rounded"
         onChange = {handleChange}
      />
      {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
    </div>

    {/* Phone */}
    <div className="flex flex-col">
      <label className="mb-1">Phone :</label>
      <input
        type="text"
        name="phone"   // ✅ ADD THIS
        placeholder="phone"
        value={formData.phone}
        className="border p-2 rounded"
         onChange = {handleChange}
      />
      {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
      
    </div>

    {/* Password */}
    <div className="flex flex-col">
      <label className="mb-1">Password :</label>
      <input
        type="password"
        name="password"   // ✅ ADD THIS
        placeholder="password"
        value={formData.password}
        className="border p-2 rounded"
         onChange = {handleChange}
      />
      {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
     
    </div>

    {/* Confirm Password */}
    <div className="flex flex-col">
      <label className="mb-1">Confirm Password :</label>
      <input
        type="password"
        name="confirmPassword"   // ✅ ADD THIS
        placeholder="confirmPassword"
        value={formData.confirmPassword}
        className="border p-2 rounded"
         onChange = {handleChange}
      />
      {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
    </div>

    {/* Age */}
    <div className="flex flex-col">
      <label className="mb-1">Age :</label>
      <input
        type="text"
        name="age"   // ✅ ADD THIS
        placeholder="age"
        value={formData.age}
        className="border p-2 rounded"
         onChange = {handleChange}
      />
     {errors.age && <span className="text-red-500 text-sm">{errors.age}</span>}
    </div>

    {/* Gender */}
    <div className="flex flex-col">
      <label className="mb-1">Gender :</label>
      <select
        name="gender"   // ✅ ADD THIS
        value={formData.gender}
        className="border p-2 rounded"
         onChange = {handleChange}
          
      >
        
       
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
       {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
    </div>

    {/* Interests */}
    <div className="col-span-2 flex flex-col">
      <label className="mb-1">Interests :</label>

      <div className="flex gap-4">
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
              name="coding"   // ✅ ADD THIS
            checked={formData.interests.includes("coding")}
            onChange = {handlecheckboxchange}
            
          />
         
          Coding
        </label>

        <label className="flex items-center gap-1">
          <input
            type="checkbox"
              name="sports"   // ✅ ADD THIS
            checked={formData.interests.includes("sports")}
             onChange = {handlecheckboxchange}
          />

          Sports
        </label>

        <label className="flex items-center gap-1">
          <input
            type="checkbox"
              name="reading"   // ✅ ADD THIS
            checked={formData.interests.includes("reading")}
             onChange = {handlecheckboxchange}
          />
          Reading
        </label>
      </div>
        {errors.interests && <span className="text-red-500 text-sm">{errors.interests}</span>}
    </div>

    {/* Birth Date */}
    <div className="flex flex-col col-span-2">
      <label className="mb-1">Birth Date :</label>
      <input
        type="date"
        name="birthDate"   // ✅ ADD THIS
        value={formData.birthDate}
         onChange = {handleChange}
        className="border p-2 rounded"
      />
      {errors.birthDate && <span className="text-red-500 text-sm">{errors.birthDate}</span>}
    </div>

    {/* Submit */}
    <div className="col-span-2">
      <button 
      type='submit'
      className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </div>

  </form>
</div>
          )

        }
export default FormikFormmanual