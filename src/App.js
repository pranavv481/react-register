import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container py-5">
          <div className="w-50 mx-auto px-5 py-5 card shadow">
            <h1>Register</h1>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" className="form-control" id="fullname" name="fullname" ref={register} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input type="text" className="form-control" id="email" name="email" ref={register} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone </label>
              <input type="text" className="form-control" id="phone" name="phone" ref={register} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" name="password" ref={register} />
            </div>




            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="male" value="male" name="gender" ref={register} />
                <label className="form-check-label" htmlFor="male">male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="female" value="female" name="gender" ref={register} />
                <label className="form-check-label" htmlFor="female">female</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" id="other" value="other" name="gender" ref={register} />
                <label className="form-check-label" htmlFor="other">other</label>
              </div>
            </div>

            <div className="form-group">
              <select className="custom-select" name="state" ref={register}>
                <option value="">Select your state</option>
                <option value="Delhi">Delhi</option>
                <option value="Punjab">Punjab</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Bihar">Bihar</option>
              </select>
            </div>

            <div className="form-group">
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="terms" value="agree" name="terms" ref={register} />
                <label className="form-check-label" htmlFor="terms">I agree all terms and conditons</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="checkbox" id="updates" name="updates" ref={register} />
                <label className="form-check-label" htmlFor="updates">send me latest Bootstrap updates</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>

        </div>

      </form>
    </div>
  );
}

export default App;
