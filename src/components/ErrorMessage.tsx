type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className="w-max mx-auto my-2 p-1 px-4 shadow-md text-sky-100 font-semibold bg-red-500 rounded-full">
      {message}
    </p>
  );
};

export default ErrorMessage;
