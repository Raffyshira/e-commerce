import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="p-10">
                <h1 className="text-5xl mb-5 font-bold">Oops! :( </h1>
                <p className="text-2xl mb-3">
                    <span className="text-danger">Sorry</span>, an unexpected error has occurred.
                </p>
                <p className="text-xl">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}
