import React, { useEffect } from "react";

function ErrorCard({ errorMessage, handleCloseError }) {
    let customErrorMessage;

    // Custom error messages from the GOD himself
    switch (errorMessage.toLowerCase()) {
        case "city not found":
            customErrorMessage =
                "Unfortunately, this app only works for cities on EARTH. Enter a valid city from THIS planet.";
            break;

        case "nothing to geocode":
            customErrorMessage =
                "Hey pal... You on cheap drugs or what? You cannot search for an empty city. Don't waste my time.";
            break;

        case "invalid api key. please see http://openweathermap.org/faq#error401 for more info.":
            customErrorMessage = `Looks like there's a problem with the API Key. If you are running this locally, make sure to take a 
            look at the README file.`;
            break;

        default:
            customErrorMessage =
                `${errorMessage}`.charAt(0).toUpperCase() + `${errorMessage}`.slice(1);
    }

    useEffect(() => {
        function closeModal(event) {
            if (event.key === `Escape`) {
                handleCloseError();
            }
        }

        document.addEventListener("keydown", closeModal);

        document.body.addEventListener("click", (event) => {
            event.stopPropagation();
            if (
                event.target.closest("section") &&
                event.target.closest("section").classList[0] === "error-modal"
            ) {
                return;
            }

            handleCloseError();
        });

        return () => document.removeEventListener("keydown", closeModal);
    }, []);

    return (
        <section className="error-modal w-full rounded bg-slate-50 shadow dark:bg-slate-700 lg:mt-24 lg:w-1/2 z-20">
            <article className="flex justify-between items-center p-4 bg-slate-300 dark:bg-slate-800">
                <h3 className="m-0 mr-20 uppercase tracking-wide">
                    Oops! An Error Occured!
                </h3>
                <button className="text-4xl font-extrabold" onClick={handleCloseError}>
                    &times;
                </button>
            </article>
            <p className="my-4 mt-8 p-4 pt-2 text-2xl">{customErrorMessage}</p>
        </section>
    );
}

export default ErrorCard;
