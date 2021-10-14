import "./styles.css";

export const Input = ({name, label, type, required, register, errors, validationSchema}) => {
    return(
        <div className="form-control-input">
            <label>
                {label}
                {/* If the field is required then print an * */}
                {required ? "*" : "Optional"}
            </label>

            <input name={name} type={type} {...register(name, validationSchema)}/>

            {
                (errors[name]?.type === "required") && <span className="error">This field is required!</span>
            }
        </div>
    );
}