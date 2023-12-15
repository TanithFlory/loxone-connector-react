import TextInput from "@/app/utils/TextInput/TextInput";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  setLoading: Dispatch<SetStateAction<boolean>>;
  setSuccess: Dispatch<SetStateAction<boolean>>;
}

export default function ConnectionForm({ setLoading, setSuccess }: IProps) {
  const onSubmitHandler = async (formData: FormData) => {
    setLoading(true);
    const values = Object.fromEntries(formData);
    const { ip_address, username, password } = values;
    try {
      await axios.post("/api/connect-miniserver", {
        body: {
          ip_address,
          username,
          password,
        },
      });
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            Modo Technologies{" "}
          </h1>
          <p className="text-white mt-1 ml-[1px]">
            Empowering Homes, Enriching Lives: Where Intelligence Meets Comfort.
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            Read More
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" action={onSubmitHandler}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello Again!
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Login to the Miniserver.
          </p>
          <TextInput placeholder="ip address" />
          <TextInput placeholder="username" />
          <TextInput placeholder="password" />
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-md text-white font-semibold mb-2"
          >
            Connect
          </button>
        </form>
      </div>
    </div>
  );
}
