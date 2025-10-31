import "./RegForm.css"


function RegForm() {
    return (
        <>
            <div className="section">
                <h1>Registation Page</h1>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    
                    <div className="error-message">Parolyn beldileri 8 belgiden az bolmaly dal</div>
                    
                    <input type="password" placeholder="Password 2" />
                    
                    <div className="error-message">Parollar gabat gelenok</div>
                    
                    <select>
                        <option>Okuw wagtynyn gutaryan wagtyna cenli</option>
                        <option>2000</option>
                    </select>
                    
                    <button type="submit">Sent</button>
                    <button type="reset">Sahypany Arassalamak</button>
                    
                    {/* Исправлена опечатка: error-massage -> error-message */}
                    <div className="error-message">Ahli polyalaryn doldurylandygyny barlan</div>
                    
                    <div className="success-message">Maglumatlar iberildi</div>
                </form>
            </div>
        </>
    );
}

export default RegForm;