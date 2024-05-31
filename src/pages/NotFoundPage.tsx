import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-lg mb-8 text-center max-w-lg">
        Sorry, the page you're looking for doesn't exist. You can go back to the
        homepage or explore other sections of our site.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
