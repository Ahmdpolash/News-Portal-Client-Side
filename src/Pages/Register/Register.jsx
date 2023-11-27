import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { user, createUser, profile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];

    const formData = {
      name,
      email,
      password,
      image,
    };
    console.log(formData);

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long");
    } else if (!/[A-Z]/.test(password)) {
      return toast.error("Password must contain at least one Capital letter.");
    } else if (!/[0-9]/.test(password)) {
      return toast.error("Password must contain at least one Numeric letter.");
    } else if (!/[!@#$%^&*:;?,.]/.test(password)) {
      return toast.error(
        "Password must contain at least one special character"
      );
    }

    const imgFile = { image: image };

    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(res.data);

    if (res.data.success) {
      const data = {
        name,
        email,
        image: res.data.data.display_url,
        date: new Date(),
      };
      navigate("/");

      const result = await axiosPublic.post("/users", data);

      if (result.data.insertedId) {
        createUser(email, password).then(() => {
          profile(res.data.data.display_url, name).then((res) => {
            navigate("/");
          });
        });
      }
    }
  };

  return (
    <div>
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border-2  border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account ?
                <Link
                  to="/login"
                  className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Sign in here
                </Link>
              </p>
            </div>
            <div className="mt-5">
              <SocialLogin />
              <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                Or
              </div>
              {/* Form */}
              <form onSubmit={handleRegistration}>
                <div className="grid gap-y-4">
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="name"
                        id="name"
                        name="name"
                        className="py-3 border-2  px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required=""
                        aria-describedby="email-error"
                      />
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="py-3 px-4 border-2  block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required=""
                        aria-describedby="email-error"
                      />
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="email-error"
                    >
                      Please include a valid email address so we can get back to
                      you
                    </p>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="py-3 px-4 block border-2  w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                        required=""
                        aria-describedby="password-error"
                      />
                      <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                        <svg
                          className="h-5 w-5 text-red-500"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                      </div>
                    </div>
                    <p
                      className="hidden text-xs text-red-600 mt-2"
                      id="password-error"
                    >
                      8+ characters required
                    </p>
                  </div>
                  {/* End Form Group */}
                  {/* Form Group */}
                  <input type="file" className="my-2" name="image" id="" />

                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
