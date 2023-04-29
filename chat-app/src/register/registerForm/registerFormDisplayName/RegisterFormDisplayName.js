function RegisterFormDisplayName() {
    return (
        <div className="mb-3">
            <label htmlFor="confirm_password">Display name:</label>
            <input
                type="password"
                className="form-control"
                id="Display"
                placeholder="Display name"
                required
            />
        </div>
    );
}

export default RegisterFormDisplayName;