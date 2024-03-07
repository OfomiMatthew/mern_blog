import { Link } from "react-router-dom";
import { Button,Label, TextInput } from "flowbite-react";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link
            to="/"
            className="text-sm sm:text-xl font-bold dark:text-white md:text-4xl"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Youth
            </span>
            Connect
          </Link>
          <p className="text-sm mt-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
            deleniti vel. Veniam sit, blanditiis reprehenderit labore molestias
            id sed a numquam eius, rerum alias nulla. Deserunt quasi beatae vel
            veniam.
          </p>
        </div>
        <div className="mt-5 flex-1">
          <form className="flex flex-col gap-3">
            <div>
              <div className="">
                <Label htmlFor="username" value="Your username" />
              </div>
              <TextInput

                id="username"
                type="text"
                placeholder="username"
                required
              />
            </div>
            <div>
            <div className="">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput id="email" type="email" required placeholder="email" />
          </div>
            <div>
              <div className="">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required placeholder="password" />
            </div>
            <Button className="mt-3" gradientDuoTone='purpleToPink' type="submit">Sign Up</Button>
           
      
          </form>
          <div>
          <span>Have an account?</span>
          <Link to="/sign-in">
          Sign In
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
