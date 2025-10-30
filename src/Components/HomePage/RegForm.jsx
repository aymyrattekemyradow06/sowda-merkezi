
function RegForm(){
    <div className="section">
        <h1>Registation Page</h1>
        <form >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="error-message">Paralyn beldileri 8 belgiden az bolmaly dal</div>
            <input type="password" placeholder="Password 2" />
            <div className="error-message">Parollar gabat gelenok</div>
            <select >
                <option value="">Okuw wagtynyn gutaryan wagtyna cenli</option>
                <option value="">2000</option>
            </select>
            <button type="submit">Sent</button>
            <button type="reset">Sahypany Arassalamak</button>
            <div className="error-massage">Ahli polyalaryn doldurylandygyny barlan</div>
            <div className="success-message">Maglumatlar iberildi</div>
        </form>
         <p style={{fondSize: 43}}>Hello</p>
    </div>
}


export default RegForm