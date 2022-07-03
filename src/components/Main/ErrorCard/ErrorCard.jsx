import React, { useEffect } from "react";
import errorIcon from "../../../assets/images/warning.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

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
        // Return to homepage if "Esc" key is pressed, or when clicked outside the error modal.
        function closeModal(event) {
            if (event.type === "keydown") {
                if (event.key === `Escape`) {
                    handleCloseError();
                }
            } else if (event.type === "click") {
                event.stopPropagation();
                if (
                    event.target.closest("section") &&
                    event.target.closest("section").classList[0] === "error-modal"
                ) {
                    return;
                }
                handleCloseError();
            }
        }

        document.addEventListener("keydown", closeModal);
        document.body.addEventListener("click", closeModal);

        // Cleanup - Remove listeners when error modal is closed
        return () => {
            document.removeEventListener("keydown", closeModal);
            document.body.removeEventListener("click", closeModal);
        };
    }, []);

    return (
        <section className="error-modal">
            <article className="relative p-4 h-24">
                <div className="absolute -top-[80%] left-1/2 p-5 rounded-full -translate-x-1/2 bg-red-400 outline-4 outline-none outline-offset-0 outline-slate-50 dark:outline-slate-700 shadow-2xl ring-8 ring-red-400">
                    {/* <img src={errorIcon} alt="Error Icon" className="h-14 w-14 m-0" /> */}
                    <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="h-14 w-14 text-neutral-100"
                    />
                </div>
                <h3 className="absolute bottom-0 left-0 right-0 m-0 text-center font-bold uppercase tracking-widest">
                    Oops! An Error Occured!
                </h3>
            </article>
            <article className="flex flex-col items-center p-6">
                <p className="p-0 text-center text-2xl lg:p-4">{customErrorMessage}</p>

                <button
                    className="w-fit mt-4 p-4 text-2xl font-medium text-white uppercase bg-red-400 shadow-lg shadow-red-400/50 hover:shadow-none transition-shadow duration-200
                    "
                    onClick={handleCloseError}
                >
                    Ok, I Understand
                </button>
            </article>
        </section>
    );
}

export default ErrorCard;
